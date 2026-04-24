import { profile } from '../data/profile';

function ContactLink({ label, href, value }) {
  if (!href) {
    return (
      <li>
        <span className="font-medium text-slate-700">{label}:</span> {value}
      </li>
    );
  }

  return (
    <li>
      <span className="font-medium text-slate-700">{label}:</span>{' '}
      <a href={href} className="text-sky-600 transition hover:text-sky-700 hover:underline">
        {value}
      </a>
    </li>
  );
}

function Contact() {
  const { contact } = profile;
  const contactItems = [
    { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    { label: contact.github.label, value: contact.github.value, href: contact.github.href },
    { label: contact.linkedin.label, value: contact.linkedin.value, href: contact.linkedin.href },
    { label: 'Resume', value: contact.resumeLabel, href: null },
  ];

  return (
    <section id="contact" className="scroll-mt-24 pb-4 pt-4">
      <div className="border-b border-slate-200 pb-4">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-700">{contact.title}</h3>
      </div>

      <div className="pt-6 text-[1.08rem] leading-10 text-slate-600">
        <p>{contact.intro}</p>
        <ul className="mt-4 space-y-2">
          {contactItems.map((item) => (
            <ContactLink key={item.label} label={item.label} value={item.value} href={item.href} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
