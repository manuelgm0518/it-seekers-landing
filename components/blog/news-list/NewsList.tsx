import { BlogEntry } from "@/models";
import NewsCard from "./NewsCard";

interface NewsListProps {
  entries: BlogEntry[];
}

export default function NewsList({ entries }: NewsListProps) {
  return (
    <div className="flex flex-col gap-8">
      {entries.map((entry) => (
        <NewsCard key={entry.id} entry={entry} />
      ))}

      <div className="flex gap-4 justify-center mt-8">
        <button className="p-2 bg-secondary text-white rounded-full w-14 h-14">1</button>
        <button className="p-2 border-2 border-[#ececf0] hover:border-0 hover:bg-secondary hover:text-white rounded-full w-14 h-14 transition duration-150 ease-out">
          2
        </button>
        <button className="p-2 border-2 border-[#ececf0] hover:border-0 hover:bg-secondary hover:text-white rounded-full w-14 h-14 transition duration-150 ease-out">
          <i className="uil uil-angle-right-b"></i>
        </button>
      </div>
    </div>
  );
}
