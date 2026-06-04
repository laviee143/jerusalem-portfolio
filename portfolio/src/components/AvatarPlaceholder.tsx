import { about } from '../data/content';

export function AvatarPlaceholder() {
  return (
    <div className="avatar" role="img" aria-label={about.avatarAlt}>
      <div className="avatar__frame">
        <img
          src="/images/photo_2026-05-25_21-12-28.jpg"
          alt={about.avatarAlt}
          className="avatar__art"
        />
        <div className="avatar__badge">
          <span className="avatar__badge-dot" aria-hidden="true" />
          <div>
            <span className="avatar__badge-text">Available for opportunities</span>
            <span className="avatar__badge-sub">Student · Full-stack dev</span>
          </div>
        </div>
      </div>
    </div>
  );
}
