import Image from "next/image";

export default function ProfilePicture(Props) {
  return (
    <Image
      className={Props.className}
      src={Props.src}
      width={360}
      height={360}
      alt={Props.alt}
    />
  );
}
