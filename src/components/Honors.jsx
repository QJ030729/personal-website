import { profile } from '../data/profile';

function Honors() {
  const { honors } = profile;

  return (
    <section id="honors" className="scroll-mt-24 pb-10 pt-4">
      <div className="border-b border-slate-200 pb-4">
        <h3 className="text-3xl font-semibold tracking-tight text-slate-700">{honors.title}</h3>
      </div>

      <ol className="space-y-4 pt-7 text-[1.08rem] leading-10 text-slate-600">
        {honors.items.map((item, index) => (
          <li key={item} className="pl-7">
            <span className="-ml-7 mr-1 inline-block w-6 font-medium text-slate-700">{index + 1}.</span>
            {item}
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Honors;
