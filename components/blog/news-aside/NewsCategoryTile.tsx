import { PropsWithChildren } from "react";

type NewsCategoryTileProps = {
  count: number;
  to: string;
};

export default function NewsCategoryTile({ children, count, to }: PropsWithChildren<NewsCategoryTileProps>) {
  return (
    <li>
      <a href={to}>
        <div className="news-category-tile flex">
          <span className="name grow">
            <i className="uil uil-angle-right-b mr-1"></i>
            {children}
          </span>
          <span className="count">{count}</span>
        </div>
      </a>
    </li>
  );
}
