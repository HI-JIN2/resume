type Props = {
  items: string[];
};
export const SpecSheet = ({ items }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span
          key={item}
          className="px-2.5 py-1 bg-[#f2f4f6] rounded-md text-sm text-[#4e5968]"
        >
          {item}
        </span>
      ))}
    </div>
  );
};
