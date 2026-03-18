"use client";

import { useState, useMemo } from "react";
import FilterBar from "./FilterBar";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  coverImage: string;
};

type Props = {
  posts: BlogPost[];
};

export default function BlogSection({ posts }: Props) {
  const [activeTag, setActiveTag] = useState("all");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return [
      { value: "all", label: "すべて" },
      ...Array.from(tags).map((t) => ({ value: t, label: t })),
    ];
  }, [posts]);

  const filtered =
    activeTag === "all"
      ? posts
      : posts.filter((p) => p.tags.includes(activeTag));

  return (
    <section>
      <div className="mb-2">
        <h2
          className="text-3xl font-light mb-1"
          style={{ fontFamily: "var(--font-cormorant)", color: "#db2777" }}
        >
          Blog
        </h2>
        <p className="text-sm" style={{ color: "#9c6b80" }}>
          {posts.length} 件の記事
        </p>
      </div>

      <FilterBar filters={allTags} active={activeTag} onChange={setActiveTag} />

      {filtered.length === 0 ? (
        <p className="text-center py-16 text-pink-300">記事が見つかりませんでした</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl border border-pink-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Cover */}
              <div
                className="relative h-44 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #ffd6e3 0%, #f9c0d0 50%, #e8b4c8 100%)",
                }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-20">
                  <span className="text-6xl">✦</span>
                </div>
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: "#fff0f4", color: "#f472b6" }}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <h3
                  className="text-base font-semibold leading-snug mb-2 group-hover:text-pink-600 transition-colors duration-200"
                  style={{ color: "#3d1a2e" }}
                >
                  {post.title}
                </h3>

                <p
                  className="text-sm leading-relaxed line-clamp-3 flex-1"
                  style={{ color: "#9c6b80" }}
                >
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-pink-50">
                  <time className="text-xs" style={{ color: "#9c6b80" }}>
                    {post.date}
                  </time>
                  <span
                    className="text-xs font-medium"
                    style={{ color: "#f472b6" }}
                  >
                    続きを読む →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
