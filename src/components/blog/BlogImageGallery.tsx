import Image from "next/image";
import type { BlogPost } from "@/lib/blogApi";

export function BlogImageGallery({ images }: { images: BlogPost["images"] }) {
  if (!images || images.length === 0) return null;

  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
      {images.map((img) => (
        <figure key={img.id} className="overflow-hidden rounded-2xl border border-ink/8 bg-surface">
          <div className="relative aspect-[16/10] w-full">
            <Image src={img.url} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>
          {img.caption && (
            <figcaption className="p-3 text-xs font-medium text-muted">{img.caption}</figcaption>
          )}
        </figure>
      ))}
    </div>
  );
}
