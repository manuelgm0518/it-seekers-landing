import { BlogEntry } from "@/models";

interface NewsCardProps {
  entry: BlogEntry;
}

export default function NewsCard({ entry }: NewsCardProps) {
  return (
    <article className="news-card flex">
      <div className="flex-1 relative overflow-hidden">
        <img src={entry.picture} alt={entry.title} className="picture" />

        <div className="absolute top-0 left-0 m-5 w-14 bg-primary flex flex-col text-center text-white">
          <span className="text-2xl p-1 font-bold">25</span>
          <span className="bg-secondary p-1 text-sm">Mar 22</span>
        </div>
      </div>

      <div className="flex flex-col justify-items-start flex-1 p-8">
        <a href={entry.to}>
          <h2 className="title">{entry.title}</h2>
        </a>

        <div className="comments">
          <span>
            <i className="uil uil-comments-alt mr-1"></i>
            Comentarios: {entry.comments}
          </span>
        </div>

        <p className="description">{entry.description}</p>

        <div>
          <a href={entry.to}>
            <span className="read-more">
              <i className="uil uil-angle-right-b mr-1"></i>
              Leer más
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
