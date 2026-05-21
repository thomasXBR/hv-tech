import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: 70,
  md: 75,
  lg: 128,
};

export default function Logo({ className = "", size = "md" }: LogoProps) {
  const s = sizes[size];

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-xl bg-white ${className}`}
      style={{ width: s, height: s }}
    >
      <Image
        src="/Gemini_Generated_Image_f7v1rof7v1rof7v1-removebg-preview.png"
        alt="Logo HVTech"
        width={1000}
        height={s}
        className="object-contain p-1"
      />
    </div>
  );
}
