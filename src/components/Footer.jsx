import { profile } from '../data/profile';

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-[1600px] px-4 py-6 text-sm text-slate-500 sm:px-6 lg:px-12">
        {profile.footer.text}
      </div>
    </footer>
  );
}

export default Footer;
