import AboutView, { type AboutStory } from "./AboutView";
import ContactForm from "./ContactForm";
import PageShell from "./PageShell";

type Block = { title: string; text: string };

export type InsidePage = {
  slug: "about-us" | "our-journey" | "leadership" | "careers" | "contact";
  title: string;
  lede: string;
  blocks: Block[];
  story?: AboutStory;
};

export default function InsideDetail({ page }: { page: InsidePage }) {
  if (page.slug === "our-journey") {
    return (
      <PageShell>
        <section className="journey">
          <div className="journey-intro">
            <p className="eyebrow">INSIDE KOSHA</p>
            <h1 className="serif">{page.title}</h1>
            <p>{page.lede}</p>
          </div>
          <ol>
            {page.blocks.map((block, i) => (
              <li key={block.title}>
                <b>0{i + 1}</b>
                <h2>{block.title}</h2>
                <p>{block.text}</p>
              </li>
            ))}
          </ol>
        </section>
      </PageShell>
    );
  }

  if (page.slug === "leadership") {
    return (
      <PageShell>
        <section className="lead">
          <p className="eyebrow">INSIDE KOSHA</p>
          <h1 className="serif">{page.title}</h1>
          <p className="lead-lede">{page.lede}</p>
          <ul>
            {page.blocks.map((block) => (
              <li key={block.title}>
                <h2>{block.title}</h2>
                <p>{block.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </PageShell>
    );
  }

  if (page.slug === "careers") {
    return (
      <PageShell>
        <section className="careers">
          <div>
            <p className="eyebrow">INSIDE KOSHA</p>
            <h1 className="serif">{page.title}</h1>
            <p>{page.lede}</p>
            <a href="mailto:info@koshatechnohub.com">Start a conversation</a>
          </div>
          <ul>
            {page.blocks.map((block) => (
              <li key={block.title}>
                <h2>{block.title}</h2>
                <p>{block.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </PageShell>
    );
  }

  if (page.slug === "contact") {
    return (
      <PageShell>
        <section className="contact">
          <div className="contact-intro">
            <p className="eyebrow">INSIDE KOSHA</p>
            <h1 className="serif">{page.title}</h1>
            <p>{page.lede}</p>
          </div>
          <div className="contact-grid">
            <ContactForm />
            <aside className="contact-card">
              <h2>Get in touch</h2>
              <p>The search for a solution to your questions ends here.</p>
              <span>Reach us</span>
              <strong>Kosha Technohub</strong>
              <em>Plot 16, Hootagalli Industrial Area, Hootagalli, Mysore, Karnataka, India — 570018</em>
              <a href="mailto:info@koshatechnohub.com">info@koshatechnohub.com</a>
            </aside>
          </div>
        </section>
      </PageShell>
    );
  }

  const story = page.story;
  if (!story) return null;

  return (
    <PageShell>
      <AboutView title={page.title} lede={page.lede} story={story} />
    </PageShell>
  );
}
