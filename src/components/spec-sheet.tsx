type Props = {
  items: string[];
};
export const SpecSheet = ({ items }: Props) => {
  return (
    <div className="flex flex-wrap">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span
            key={item}
            className={
              !isLast
                ? "after:content-['|'] after:px-[7px] after:text-[0.9em] after:text-black/70"
                : ""
            }
          >
            {item}
          </span>
        );
      })}
    </div>
  );
};
