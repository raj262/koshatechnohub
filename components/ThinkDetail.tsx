import PageShell from "./PageShell";

export type ThinkPage = {
  title: string;
  lede: string;
  layout: "band" | "stack" | "grid";
  points: { title: string; text: string }[];
  note: string;
};

export default function ThinkDetail({ page }: { page: ThinkPage }) {
  if (page.layout === "stack") {
    return (
      <PageShell>
        <section className="think-stack">
          <div>
            <p className="eyebrow">HOW WE THINK</p>
            <h1 className="serif">{page.title}</h1>
            <p>{page.lede}</p>
          </div>
          <ol>
            {page.points.map((point, i) => (
              <li key={point.title}>
                <b>0{i + 1}</b>
                <h2>{point.title}</h2>
                <p>{point.text}</p>
              </li>
            ))}
          </ol>
        </section>
        <p className="think-note">{page.note}</p>
      </PageShell>
    );
  }

  if (page.layout === "grid") {
    return (
      <PageShell>
        <section className="think-grid">
          <div className="think-grid-copy">
            <p className="eyebrow">HOW WE THINK</p>
            <h1 className="serif">{page.title}</h1>
            <p>{page.lede}</p>
          </div>
          <ul>
            {page.points.map((point) => (
              <li key={point.title}>
                <h2>{point.title}</h2>
                <p>{point.text}</p>
              </li>
            ))}
          </ul>
          <blockquote>{page.note}</blockquote>
        </section>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="think-band">
        <p className="eyebrow">HOW WE THINK</p>
        <h1 className="serif">{page.title}</h1>
        <p>{page.lede}</p>
      </section>
      <ol className="think-rows">
        {page.points.map((point, i) => (
          <li key={point.title}>
            <b>0{i + 1}</b>
            <div>
              <h2>{point.title}</h2>
              <p>{point.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <p className="think-note">{page.note}</p>
    </PageShell>
  );
}
