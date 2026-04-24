import { profile } from '../data/profile';

function Education() {
  const { education } = profile;

  return (
    <section id="education" className="scroll-mt-24 pb-10 pt-4">
      <div className="border-b border-slate-200 pb-4">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-700">{education.title}</h3>
      </div>

      <div className="pt-6 text-[1.08rem] leading-10 text-slate-600">
        <div className="space-y-2">
          {education.entries.map((entry) => (
            <p key={`${entry.school}-${entry.period}`}>
              <span className="font-semibold text-slate-700">{entry.school}</span>, {entry.degree} ({entry.period})
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
