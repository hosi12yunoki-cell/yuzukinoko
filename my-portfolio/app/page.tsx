import { getAllPosts } from "@/lib/blog";
import worksRaw from "@/data/works.json";
import PortfolioClient from "./components/PortfolioClient";

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

export default function Home() {
  const posts = getAllPosts();
  const works = worksRaw as Work[];

  return <PortfolioClient works={works} posts={posts} />;
}
