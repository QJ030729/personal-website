import { profile } from '../data/profile';

function Research() {
  const { research } = profile;

  return (
    <section id="research" className="scroll-mt-24 pb-10 pt-4">
      <div className="border-b border-slate-200 pb-4">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-700">{research.title}</h3>
      </div>

      <div className="pt-6">
        {research.intro ? (
          <p className="text-[1.08rem] leading-10 text-slate-600">{research.intro}</p>
        ) : null}
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {research.interests.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
              <h4 className="text-xl font-semibold text-slate-700">{item.title}</h4>
              {item.description ? (
                <p className="mt-3 text-base leading-8 text-slate-600">{item.description}</p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
