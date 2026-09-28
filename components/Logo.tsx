import Image from "next/image";

export default function Logo({ light = false, href = "#top" }: { light?: boolean; href?: string }) {
  return (
    <a href={href} className={`logo ${light ? "logo-light" : ""}`}>
      <Image
        src="/logo.png"
        alt="Kosha"
        width={141}
        height={156}
        className="logo-img"
        priority
      />
    </a>
  );
}
