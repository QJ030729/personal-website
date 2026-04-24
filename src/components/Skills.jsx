import { skillGroups } from '../data/skills';

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 pb-10 pt-4">
      <div className="border-b border-slate-200 pb-4">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-700">Skills</h3>
      </div>

      <div className="space-y-7 pt-7 text-[1.08rem] leading-10 text-slate-600">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <p className="font-semibold text-slate-700">{group.title}</p>
            <p>{group.items.join(', ')}.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
