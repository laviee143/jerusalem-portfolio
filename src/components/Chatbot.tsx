import { useState, useRef, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { site, about, skills, projects } from '../data/content';

/* ── Build a rich system prompt from portfolio data ── */
const SYSTEM_PROMPT = `
You are Jerusalem's personal AI assistant embedded in her portfolio website.
Your job is to answer visitors' questions about Jerusalem Girma in a friendly, concise, and professional way.
Only answer questions about Jerusalem — for anything off-topic, politely redirect the conversation back.
Keep answers short (2-4 sentences max unless more detail is requested).
Be warm, conversational, and represent Jerusalem positively.

=== ABOUT JERUSALEM ===
Name: ${site.name}
Location: ${site.location}
Email: ${site.email}
Phone: ${site.phone}
GitHub: ${site.github}
LinkedIn: ${site.linkedin}
Headline: ${site.headline}

Background:
${about.paragraphs.join('\n\n')}

=== SKILLS ===
Frontend: ${skills.filter(s => s.category === 'frontend').map(s => s.name).join(', ')}
Backend: ${skills.filter(s => s.category === 'backend').map(s => s.name).join(', ')}

=== PROJECTS ===
${projects.map(p =>
    `• ${p.title}: ${p.description} | Tech: ${p.tech.join(', ')}${p.live ? ` | Live: ${p.live}` : ''} | GitHub: ${p.github}`
).join('\n')}

=== SUGGESTED QUESTIONS ===
- What are Jerusalem's skills?
- Tell me about her projects
- How can I contact Jerusalem?
- What is her background?
- Is she available for work?
`.trim();

/* ── Types ── */
type Message = {
    role: 'user' | 'assistant';
    text: string;
};

const QUICK_PROMPTS = [
    "What are her skills?",
    "Tell me about her projects",
    "How can I contact her?",
    "Is she open to work?",
];

export function Chatbot() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: 'assistant',
            text: "Hi! 👋 I'm Jerusalem's AI assistant. Ask me anything about her skills, projects, or background!",
        },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [pulse, setPulse] = useState(true);
    const bottomRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const chatRef = useRef<ReturnType<InstanceType<typeof GoogleGenerativeAI>['getGenerativeModel']> | null>(null);
    const historyRef = useRef<{ role: string; parts: { text: string }[] }[]>([]);

    /* Stop pulsing after 6 s */
    useEffect(() => {
        const t = setTimeout(() => setPulse(false), 6000);
        return () => clearTimeout(t);
    }, []);

    /* Scroll to bottom on new messages */
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    /* Focus input when opened */
    useEffect(() => {
        if (open) setTimeout(() => inputRef.current?.focus(), 100);
    }, [open]);

    /* Init Gemini chat */
    const getChat = () => {
        if (chatRef.current) return chatRef.current;
        const key = import.meta.env.VITE_GEMINI_API_KEY;
        if (!key || key === 'YOUR_GEMINI_API_KEY_HERE') return null;
        const genAI = new GoogleGenerativeAI(key);
        chatRef.current = genAI.getGenerativeModel({
            model: 'gemini-1.5-flash',
            systemInstruction: SYSTEM_PROMPT,
        });
        return chatRef.current;
    };

    const send = async (text: string) => {
        if (!text.trim() || loading) return;
        const userMsg: Message = { role: 'user', text: text.trim() };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setLoading(true);

        try {
            const model = getChat();
            if (!model) {
                setMessages(prev => [
                    ...prev,
                    {
                        role: 'assistant',
                        text: "⚠️ No API key configured yet. Please add your Gemini API key to the `.env` file to enable the chatbot.",
                    },
                ]);
                setLoading(false);
                return;
            }

            historyRef.current.push({ role: 'user', parts: [{ text: text.trim() }] });

            const chat = model.startChat({ history: historyRef.current.slice(0, -1) });
            const result = await chat.sendMessage(text.trim());
            const reply = result.response.text();

            historyRef.current.push({ role: 'model', parts: [{ text: reply }] });
            setMessages(prev => [...prev, { role: 'assistant', text: reply }]);
        } catch {
            setMessages(prev => [
                ...prev,
                {
                    role: 'assistant',
                    text: "Sorry, I ran into an issue. Please try again in a moment.",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKey = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            send(input);
        }
    };

    return (
        <>
            {/* ── Floating toggle button ── */}
            <button
                className="chatbot-fab"
                onClick={() => { setOpen(o => !o); setPulse(false); }}
                aria-label={open ? 'Close chat' : 'Open chat with Jerusalem\'s AI'}
                title="Chat with Jerusalem's AI"
            >
                {open ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                ) : (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                )}
                {pulse && !open && <span className="chatbot-fab__pulse" />}
            </button>

            {/* ── Chat window ── */}
            <div className={`chatbot-window${open ? ' chatbot-window--open' : ''}`} role="dialog" aria-label="Chat with Jerusalem's AI assistant">
                {/* Header */}
                <div className="chatbot-header">
                    <div className="chatbot-header__avatar">
                        <img src="/avatar.png" alt="Jerusalem" />
                        <span className="chatbot-header__status" />
                    </div>
                    <div className="chatbot-header__info">
                        <span className="chatbot-header__name">Jerusalem's AI</span>
                        <span className="chatbot-header__sub">Ask me anything about her</span>
                    </div>
                    <button className="chatbot-header__close" onClick={() => setOpen(false)} aria-label="Close chat">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Messages */}
                <div className="chatbot-messages">
                    {messages.map((msg, i) => (
                        <div key={i} className={`chatbot-msg chatbot-msg--${msg.role}`}>
                            {msg.role === 'assistant' && (
                                <div className="chatbot-msg__avatar">
                                    <img src="/avatar.png" alt="AI" />
                                </div>
                            )}
                            <div className="chatbot-msg__bubble">{msg.text}</div>
                        </div>
                    ))}

                    {loading && (
                        <div className="chatbot-msg chatbot-msg--assistant">
                            <div className="chatbot-msg__avatar">
                                <img src="/avatar.png" alt="AI" />
                            </div>
                            <div className="chatbot-msg__bubble chatbot-msg__bubble--typing">
                                <span /><span /><span />
                            </div>
                        </div>
                    )}
                    <div ref={bottomRef} />
                </div>

                {/* Quick prompts */}
                {messages.length <= 1 && (
                    <div className="chatbot-quick">
                        {QUICK_PROMPTS.map(q => (
                            <button key={q} className="chatbot-quick__btn" onClick={() => send(q)}>
                                {q}
                            </button>
                        ))}
                    </div>
                )}

                {/* Input */}
                <div className="chatbot-input-row">
                    <input
                        ref={inputRef}
                        className="chatbot-input"
                        type="text"
                        placeholder="Ask about Jerusalem..."
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={handleKey}
                        disabled={loading}
                        maxLength={300}
                    />
                    <button
                        className="chatbot-send"
                        onClick={() => send(input)}
                        disabled={!input.trim() || loading}
                        aria-label="Send message"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    );
}
