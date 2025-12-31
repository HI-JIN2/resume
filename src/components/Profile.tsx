import { useResumeData } from "../context/resume-context";
import { Link } from "./link";
import { Section } from "./Section";

export const Profile = () => {
  const { profile } = useResumeData();
  const items = profile.links || [];

  return (
    <Section title={profile.name} mb={64}>
      <div className="flex flex-wrap gap-x-6 gap-y-2">
        {items.map(({ label, value, href }) => {
          const resolvedHref =
            href ||
            (value.startsWith("http")
              ? value
              : value.includes("@")
              ? `mailto:${value}`
              : undefined);

          return (
            <div key={`${label}-${value}`} className="flex items-center gap-2">
              <span className="text-[#8b95a1] text-sm font-medium">{label}</span>
              {resolvedHref ? (
                <Link href={resolvedHref} className="text-[#3182f6] hover:underline">
                  {value}
                </Link>
              ) : (
                <span className="text-[#191f28]">{value}</span>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
