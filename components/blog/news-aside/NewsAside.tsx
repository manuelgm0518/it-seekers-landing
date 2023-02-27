import { BlogEntry } from "@/models";
import NewsCategoryTile from "./NewsCategoryTile";
import RecentNewsTile from "./RecentNewsTile";

type NewsAsideProps = {
  recentNews: BlogEntry[];
};

export default function NewsAside({ recentNews }: NewsAsideProps) {
  return (
    <aside>
      <div className="flex flex-col gap-10">
        <div className="flex border border-[#ececf0]">
          <input type="text" placeholder="Buscar ..." className="grow outline-0 border-r border-[#ececf0] px-3" />
          <i className="uil uil-search text-center leading-[3rem] h-12 w-12 hover:bg-primary hover:text-white transition duration-150 ease-out"></i>
        </div>

        <section className="flex flex-col">
          <h2 className="section-title">Sigue nuestas redes</h2>

          <div className="flex flex-row gap-3">
            <div className="social-network-icon">
              <a className="uil uil-facebook" href="https://www.facebook.com/ITSeekers"></a>
            </div>
            <div className="social-network-icon">
              <a className="uil uil-twitter" href="https://twitter.com/ITSeekers"></a>
            </div>
            <div className="social-network-icon">
              <a className="uil uil-instagram" href="https://www.instagram.com/itseekermx"></a>
            </div>
          </div>
        </section>

        <section className="flex flex-col">
          <h2 className="section-title">Categorías</h2>
          <ul>
            <NewsCategoryTile count={1} to="#">
              Aplicaciones
            </NewsCategoryTile>
            <NewsCategoryTile count={1} to="#">
              Atracción de talento
            </NewsCategoryTile>
            <NewsCategoryTile count={5} to="#">
              Business
            </NewsCategoryTile>
            <NewsCategoryTile count={6} to="#">
              IT-Seekers
            </NewsCategoryTile>
            <NewsCategoryTile count={2} to="#">
              Nearshore
            </NewsCategoryTile>
            <NewsCategoryTile count={8} to="#">
              Negocios
            </NewsCategoryTile>
            <NewsCategoryTile count={7} to="#">
              Outsourcing
            </NewsCategoryTile>
            <NewsCategoryTile count={11} to="#">
              Tecnología
            </NewsCategoryTile>
            <NewsCategoryTile count={4} to="#">
              Transformación Digital
            </NewsCategoryTile>
          </ul>
        </section>

        <section className="flex flex-col">
          <h4 className="section-title">Recent News</h4>
          <ul>
            {recentNews.map((entry) => (
              <RecentNewsTile key={entry.id} entry={entry} />
            ))}
          </ul>
        </section>
      </div>
    </aside>
  );
}
