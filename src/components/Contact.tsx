
export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact__grid">
          <div className="contact-info">
            <h2 className="section-title uppercase" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 0.9, marginBottom: '3rem' }}>
              Get In <br />
              Touch
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.25rem', color: 'var(--ink-muted)' }}>
              <div>
                Email: <a href="mailto:laviee1434@gmail.com" style={{ color: 'var(--ink)', textDecoration: 'underline' }}>laviee1434@gmail.com</a>
              </div>
              <div>
                Phone: <span style={{ color: 'var(--ink)' }}>+251 978 64 2454</span>
              </div>
              <div>
                Location: <span style={{ color: 'var(--ink)' }}>Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <textarea placeholder="Your Message" rows={4} required></textarea>
              </div>
              <button type="submit" className="btn btn--primary" style={{ width: '100%', marginTop: '1rem' }}>
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
