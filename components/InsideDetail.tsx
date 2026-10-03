import AboutView, { type AboutStory } from "./AboutView";
import PageShell from "./PageShell";

type Block = { title: string; text: string };

export type InsidePage = {
  slug: "about-us";
  title: string;
  lede: string;
  blocks: Block[];
  story?: AboutStory;
};

export default function InsideDetail({ page }: { page: InsidePage }) {
  const story = page.story;
  if (!story) return null;

  return (
    <PageShell>
      <AboutView title={page.title} lede={page.lede} story={story} />
    </PageShell>
  );
}
