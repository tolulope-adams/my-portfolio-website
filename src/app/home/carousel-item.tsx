import "./carousel-item.css";
import Image from "next/image";
import Tag from "./tag";
import Logo from "../asset/icons/github.svg";

export default function CarouselItem(props: {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="carousel-item">
      <Image alt="My Logo" src={Logo} width={28} height={28} priority />
      <p className="uppercase text-center my-4 text-lg font-bold tracking-wider text-truncate wrap-text">
        {props.title}
      </p>
      <p className="mb-4 font-normal tracking-wider bio">{props.description}</p>
      <h3 className="uppercase text-center mb-4 text-lg font-bold tracking-wider">
        SKILLS &amp; TOOLS
      </h3>
      <div className="flex flex-row flex-wrap mb-1 justify-items-center justify-center gap-2">
        {props.tags.map((item, index) => (
          <Tag key={index} name={item} />
        ))}
      </div>
    </div>
  );
}
