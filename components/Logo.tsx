import Image from "next/image";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`logo ${light ? "logo-light" : ""}`}>
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
