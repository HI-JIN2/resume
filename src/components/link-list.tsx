import { Link } from "./link";

type LinkItem = {
  title: string;
  url: string;
};

type Props = {
  links: LinkItem[];
};

export const LinkList = ({ links }: Props) => {
  if (!links || links.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {links.map((link, index) => (
        <Link key={index} target="_blank" href={link.url} className="text-sm">
          {link.title}
        </Link>
      ))}
    </div>
  );
};

