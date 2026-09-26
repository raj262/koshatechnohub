import PageShell from "@/components/PageShell";
import { ArrowLink } from "@/components/Buttons";

export default function NotFound() {
  return (
    <PageShell>
      <section className="page-hero not-found">
        <p className="eyebrow">404</p>
        <div className="rule" />
        <h1 className="serif page-h">
          This page could not be <em>found.</em>
        </h1>
        <p className="lede">
          The link may be out of date, or the page may have moved. You can return home or explore what we do.
        </p>
        <div className="not-found-actions">
          <a href="/" className="btn-primary">
            Back to home
          </a>
          <ArrowLink href="/what-we-do">What we do</ArrowLink>
        </div>
      </section>
    </PageShell>
  );
}
