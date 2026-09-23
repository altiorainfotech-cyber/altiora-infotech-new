"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Filter, Layers } from "lucide-react";

interface BlogFilterSearchProps {
  categories: string[];
  selectedCategory: string;
  total: number;
  search?: string;
}

export function BlogFilterSearch({ categories, selectedCategory, total, search }: BlogFilterSearchProps) {
  const router = useRouter();

  const handleSelect = (category: string) => {
    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (category !== "All") params.set("category", category);
    const query = params.toString();
    router.push(query ? `/blog?${query}` : "/blog");
  };

  return (
    <div className="sticky top-[72px] z-40 bg-white/85 backdrop-blur-xl border-y border-ink/8 py-3.5 transition-all">
      <Container className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          <div className="flex items-center gap-1 text-xs font-bold text-muted mr-2 shrink-0">
            <Filter className="h-3.5 w-3.5 text-blue-600" />
            <span className="hidden sm:inline">Topics:</span>
          </div>

          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                onClick={() => handleSelect(cat)}
                className={`relative px-4 py-2 rounded-xl text-xs font-extrabold tracking-wide transition-colors shrink-0 ${
                  isSelected ? "text-white" : "text-muted hover:text-ink hover:bg-surface"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeCategoryPill"
                    className="absolute inset-0 bg-blue-600 rounded-xl shadow-md shadow-blue-600/25 -z-0"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-muted shrink-0">
          <Layers className="h-3.5 w-3.5 text-gold-600" />
          <span>
            Showing <strong className="text-ink font-bold">{total}</strong> {total === 1 ? "article" : "articles"}
          </span>
        </div>
      </Container>
    </div>
  );
}
