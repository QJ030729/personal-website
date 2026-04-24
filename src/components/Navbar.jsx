import { useState } from 'react';
import { profile } from '../data/profile';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/92 backdrop-blur">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-5 sm:px-6 lg:px-12">
        <a href="#top" className="text-xl font-semibold tracking-tight text-slate-600 sm:text-[2rem]">
          {profile.siteTitle}
        </a>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-600 md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          Menu
        </button>

        <div className="hidden items-center gap-5 md:flex">
          {profile.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-500 transition hover:text-sky-600"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden sm:px-6">
          <div className="flex flex-col gap-3">
            {profile.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-600"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
