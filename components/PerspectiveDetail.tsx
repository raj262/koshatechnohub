import PageShell from "./PageShell";

export type PerspectivePage = {
  title: string;
  lede: string;
  image: string;
  quote: string;
  body: string[];
};

export default function PerspectiveDetail({ page }: { page: PerspectivePage }) {
  return (
    <PageShell>
      <article className="pers-article">
        <p className="eyebrow">PERSPECTIVES</p>
        <h1 className="serif">{page.title}</h1>
        <p className="pers-lede">{page.lede}</p>
        <img src={page.image} alt="" />
        <blockquote>{page.quote}</blockquote>
        {page.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <a href="/perspectives">All perspectives</a>
      </article>
    </PageShell>
  );
}
