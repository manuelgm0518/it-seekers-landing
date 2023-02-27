import { BlogEntry } from "@/models";

type RecentNewsTileProps = {
  entry: BlogEntry;
};

export default function RecentNewsTile({ entry }: RecentNewsTileProps) {
  return (
    <li>
      <a href={entry.to}>
        <div className="flex recent-news-tile gap-6">
          <img src={entry.picture} alt={entry.title} className="rounded-full aspect-square h-16" />
          <div className="flex flex-col grow">
            <h4 className="title">{entry.title}</h4>
            <span className="date">{entry.date.toLocaleString()}</span>
          </div>
        </div>
      </a>
    </li>
  );
}
