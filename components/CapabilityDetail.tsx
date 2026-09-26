import PageShell from "./PageShell";

export type CapabilityPage = {
  group: "Industries" | "Engineering Capabilities";
  title: string;
  lede: string;
  image: string;
  points: string[];
};

export default function CapabilityDetail({ page }: { page: CapabilityPage }) {
  const industry = page.group === "Industries";

  if (industry) {
    return (
      <PageShell>
        <section className="ind-hero">
          <img src={page.image} alt="" />
          <div>
            <p className="eyebrow">INDUSTRIES</p>
            <h1 className="serif">{page.title}</h1>
            <p>{page.lede}</p>
          </div>
        </section>
        <ul className="ind-points">
          {page.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <section className="eng-page">
        <div className="eng-copy">
          <p className="eyebrow">ENGINEERING CAPABILITIES</p>
          <h1 className="serif">{page.title}</h1>
          <p>{page.lede}</p>
          <ol>
            {page.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ol>
        </div>
        <img src={page.image} alt="" />
      </section>
    </PageShell>
  );
}
