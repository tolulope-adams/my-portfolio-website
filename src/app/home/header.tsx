import "./header.css";
import Image from "next/image";
import Logo from "../asset/icons/github.svg";
import LogoWhite from "../asset/icons/github-white.svg";

export default function Header(props: { title: string; hasGradient: boolean }) {
  const getClassName = () => {
    const classuu = "text-lg font-bold tracking-wider ml-3";
    return props.hasGradient ? classuu + " txt-gradient" : classuu;
  };

  return (
    <div className="flex flex-row items-center">
      <Image
        className=""
        alt="Toulope's Logo"
        src={props.hasGradient ? Logo : LogoWhite}
        priority
      />
      <h1 className={getClassName()}>{props.title}</h1>
    </div>
  );
}
