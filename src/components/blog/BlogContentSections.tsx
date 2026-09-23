import type { CSSProperties } from "react";
import type { BlogPost } from "@/lib/blogApi";

type ContentSection = NonNullable<BlogPost["contentSections"]>[number];

function sectionStyle(section: ContentSection): CSSProperties {
  return {
    fontSize: section.fontSize || undefined,
    fontWeight: section.fontWeight === "bold" ? 700 : section.fontWeight === "normal" ? 400 : undefined,
    textAlign: section.textAlign || undefined,
    color: section.color || undefined,
  };
}

export function BlogContentSections({ sections }: { sections: BlogPost["contentSections"] }) {
  if (!sections || sections.length === 0) return null;

  return (
    <div className="space-y-5">
      {sections.map((section) =>
        section.type === "title" ? (
          <h2
            key={section.id}
            id={section.id}
            style={sectionStyle(section)}
            className="text-2xl font-bold tracking-tight text-ink"
            dangerouslySetInnerHTML={{ __html: section.value }}
          />
        ) : (
          <div
            key={section.id}
            style={sectionStyle(section)}
            className="text-base leading-relaxed text-ink/85 [&_a]:text-blue-700 [&_a]:underline [&_p]:mb-4"
            dangerouslySetInnerHTML={{ __html: section.value }}
          />
        )
      )}
    </div>
  );
}
