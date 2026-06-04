interface SectionHeaderProps {
    label: string;
    title: string;
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
    return (
        <div className="section-header">
            <div className="section-label uppercase tracking-widest">
                <span>//</span> {label}
            </div>
            <h2 className="section-title uppercase">{title}</h2>
        </div>
    );
}
