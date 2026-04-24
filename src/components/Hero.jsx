import { profile } from '../data/profile';

function ItemIcon({ label }) {
  const common = 'h-4 w-4 text-slate-500';

  if (label === 'Email') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={common}>
        <path d="M4 7h16v10H4z" />
        <path d="m5 8 7 6 7-6" />
      </svg>
    );
  }

  if (label === 'Resume') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={common}>
        <path d="M8 3h6l5 5v13H8z" />
        <path d="M14 3v5h5" />
      </svg>
    );
  }

  if (label === 'GitHub') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
        <path d="M12 .7a11.3 11.3 0 0 0-3.57 22.02c.56.1.77-.24.77-.54v-1.9c-3.13.68-3.79-1.33-3.79-1.33-.5-1.27-1.24-1.6-1.24-1.6-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.14 1.7 1.14.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.22.7-1.5-2.5-.29-5.13-1.24-5.13-5.53 0-1.22.44-2.22 1.14-3-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.08 1.14a10.7 10.7 0 0 1 5.6 0c2.13-1.44 3.06-1.14 3.06-1.14.62 1.55.24 2.7.12 2.98.7.78 1.13 1.78 1.13 3 0 4.3-2.64 5.24-5.16 5.52.4.35.75 1.03.75 2.09v3.09c0 .3.2.65.78.54A11.3 11.3 0 0 0 12 .7Z" />
      </svg>
    );
  }

  if (label === 'LinkedIn') {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={common}>
        <path d="M4.98 3.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM3.5 8.75h2.96V20.5H3.5zm4.81 0h2.84v1.6h.04c.4-.75 1.37-1.83 2.81-1.83 3 0 3.56 1.97 3.56 4.53v7.45H14.6v-6.6c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5v6.72H8.31z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={common}>
      <path d="M12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9Z" />
      <path d="M12 8v8" />
      <path d="M8 12h8" />
    </svg>
  );
}

function SidebarItem({ item }) {
  const content = (
    <>
      <ItemIcon label={item.label} />
      <div>
        <p className="text-sm text-slate-700">{item.value}</p>
      </div>
    </>
  );

  if (!item.href) {
    return <div className="flex items-center gap-3">{content}</div>;
  }

  const external = item.href.startsWith('mailto:') || item.href.startsWith('/');

  return (
    <a
      href={item.href}
      className="flex items-center gap-3 transition hover:text-sky-600"
      {...(external ? {} : {})}
    >
      {content}
    </a>
  );
}

function Hero() {
  return (
    <aside id="top" className="lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-8 shadow-sm">
        <div className="mx-auto h-56 w-56 overflow-hidden rounded-full border border-slate-200 bg-slate-100 sm:h-60 sm:w-60">
          <img src={profile.profilePhoto} alt={profile.englishName} className="h-full w-full object-cover" />
        </div>

        <div className="mt-6">
          <h1 className="text-[2rem] font-semibold tracking-tight text-slate-700">{profile.englishName}</h1>
          <p className="mt-4 text-[1.05rem] leading-8 text-slate-600">{profile.role}</p>
          {profile.shortBio ? <p className="mt-3 text-base leading-7 text-slate-500">{profile.shortBio}</p> : null}
        </div>

        <div className="mt-8 space-y-4 border-t border-slate-200 pt-7">
          {profile.sidebarItems.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Hero;
