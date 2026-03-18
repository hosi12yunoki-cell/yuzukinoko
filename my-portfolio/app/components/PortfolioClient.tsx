"use client";

import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import WorksSection from "./WorksSection";
import BlogSection from "./BlogSection";

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

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  coverImage: string;
  content: string;
};

type Props = {
  works: Work[];
  posts: BlogPost[];
};

type Tab = "works" | "blog";

export default function PortfolioClient({ works, posts }: Props) {
  const [activeTab, setActiveTab] = useState<Tab>("works");

  return (
    <div className="min-h-screen" style={{ background: "#fff0f4" }}>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="max-w-5xl mx-auto px-4 pb-16">
        <Hero />

        {/* Animated tab content */}
        <div
          key={activeTab}
          className="animate-fade-in"
          style={{ animation: "fadeIn 0.3s ease" }}
        >
          {activeTab === "works" ? (
            <WorksSection works={works} />
          ) : (
            <BlogSection posts={posts} />
          )}
        </div>
      </main>

      {/* Footer */}
      <footer
        className="border-t py-8 text-center text-sm"
        style={{ borderColor: "#fcd5e3", color: "#9c6b80", background: "#fff5f8" }}
      >
        <p>
          © {new Date().getFullYear()}{" "}
          <span style={{ color: "#db2777" }}>Yuzuki Atelier</span>
          {" "}— All rights reserved.
        </p>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
