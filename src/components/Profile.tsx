import { PROFILE } from "../data";
import { Link } from "./link";
import { Section } from "./Section";

export const Profile = () => {
  const items = PROFILE.links || [];

  return (
    <Section title={PROFILE.name} mb={52}>
      <div className="flex max-sm:flex-col">
        {items.map(({ label, value, href }, index) => {
          const resolvedHref =
            href ||
            (value.startsWith("http")
              ? value
              : value.includes("@")
              ? `mailto:${value}`
              : undefined);
          const isLast = index === items.length - 1;

          return (
            <div
              key={`${label}-${value}`}
              className={`relative ${
                !isLast ? "mr-6 max-sm:mr-0 max-sm:mb-[7px]" : ""
              } ${
                !isLast
                  ? "after:content-[''] after:absolute after:bottom-0 after:-right-3 after:h-full after:w-px after:bg-black/70 max-sm:after:hidden"
                  : ""
              }`}
            >
              <span className="font-medium mr-[7px]">{label}</span>
              {resolvedHref ? (
                <Link href={resolvedHref}>{value}</Link>
              ) : (
                <span>{value}</span>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
