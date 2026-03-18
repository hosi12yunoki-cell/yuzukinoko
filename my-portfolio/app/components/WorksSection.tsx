"use client";

import { useState } from "react";
import FilterBar from "./FilterBar";

type Work = {
  id: string;
  title: string;
  genre: string;
  genreLabel: string;
  tags: string[];
  image: string;
  aspectRatio: "tall" | "wide" | "square";
  date: string;
  description: string;
};

type Props = {
  works: Work[];
};

const GENRE_FILTERS = [
  { value: "all", label: "すべて" },
  { value: "portrait", label: "ポートレート" },
  { value: "fashion", label: "ファッション" },
  { value: "fantasy", label: "ファンタジー" },
  { value: "scene", label: "シーン" },
  { value: "event", label: "イベント" },
  { value: "design", label: "デザイン" },
];

const ASPECT_CLASSES: Record<Work["aspectRatio"], string> = {
  tall: "aspect-[3/4]",
  wide: "aspect-[4/3]",
  square: "aspect-square",
};

export default function WorksSection({ works }: Props) {
  const [activeGenre, setActiveGenre] = useState("all");
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered =
    activeGenre === "all" ? works : works.filter((w) => w.genre === activeGenre);

  return (
    <section>
      <div className="mb-2">
        <h2
          className="text-3xl font-light mb-1"
          style={{ fontFamily: "var(--font-cormorant)", color: "#db2777" }}
        >
          Gallery
        </h2>
        <p className="text-sm" style={{ color: "#9c6b80" }}>
          {works.length} 点の作品
        </p>
      </div>

      <FilterBar
        filters={GENRE_FILTERS}
        active={activeGenre}
        onChange={setActiveGenre}
      />

      {filtered.length === 0 ? (
        <p className="text-center py-16 text-pink-300">作品が見つかりませんでした</p>
      ) : (
        <div className="masonry-grid">
          {filtered.map((work) => (
            <div
              key={work.id}
              className="masonry-item group cursor-pointer"
              onMouseEnter={() => setHovered(work.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="relative overflow-hidden rounded-2xl border border-pink-100 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Image placeholder */}
                <div
                  className={`relative w-full ${ASPECT_CLASSES[work.aspectRatio]} bg-gradient-to-br overflow-hidden`}
                  style={{
                    background:
                      "linear-gradient(135deg, #ffd6e3 0%, #f9c0d0 50%, #e8b4c8 100%)",
                  }}
                >
                  {/* Placeholder art */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <span className="text-5xl">✦</span>
                  </div>
                  <img
                    src={work.image}
                    alt={work.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = "none";
                    }}
                  />

                  {/* Hover overlay */}
                  <div
                    className={`absolute inset-0 bg-pink-900/60 backdrop-blur-sm flex flex-col justify-end p-4 transition-opacity duration-300 ${
                      hovered === work.id ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <p className="text-white text-sm leading-relaxed line-clamp-3">
                      {work.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white/20 text-white px-2 py-0.5 rounded-full"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="px-3 py-2.5">
                  <p className="text-sm font-medium" style={{ color: "#3d1a2e" }}>
                    {work.title}
                  </p>
                  <div className="flex items-center justify-between mt-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: "#ffe4ee", color: "#db2777" }}
                    >
                      {work.genreLabel}
                    </span>
                    <span className="text-xs" style={{ color: "#9c6b80" }}>
                      {work.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
