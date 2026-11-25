import Image from "next/image";

export default function BrandMark() {
  // The source logo is centered inside an oversized square canvas.
  return (
    <span className="relative block h-8 w-[140px] overflow-hidden">
      <Image
        src="/images/logo.png"
        alt="Lights Digital Solutions"
        width={180}
        height={180}
        priority
        className="absolute left-[-20px] top-[-75px] h-[180px] w-[180px] max-w-none"
      />
    </span>
  );
}
