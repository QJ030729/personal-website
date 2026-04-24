import { profile } from '../data/profile';

function About() {
  return (
    <section id="about" className="scroll-mt-24 pb-8">
      <h2 className="text-4xl font-semibold tracking-tight text-slate-700 sm:text-5xl">
        {profile.about.welcome}
      </h2>

      <div className="mt-16">
        <div className="border-b border-slate-200 pb-4">
          <h3 className="text-3xl font-semibold tracking-tight text-slate-700">{profile.about.title}</h3>
        </div>

        <div className="space-y-6 pt-6 text-[1.1rem] leading-10 text-slate-600">
          {profile.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="text-base text-slate-500">{profile.updatedAt}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
