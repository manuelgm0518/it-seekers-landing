import { Footer, Header, NewsAside, NewsList } from "@/components";
import { BlogEntry } from "@/models";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
  const entries: BlogEntry[] = [
    {
      id: 1,
      date: "Marzo 25, 2022",
      to: "https://www.it-seekers.com/dudas-frecuentes-sobre-el-outsourcing/",
      title: "Dudas frecuentes sobre el Outsourcing",
      description:
        "El outsourcing es un tema que ha ganado popularidad en los últimos años, es por ello que conocer más sobre este modelo de negocios resulta relevante para cualquier empresa que quiera estar a la vanguardia. En este artículo resolveremos las dudas más frecuentes sobre el outsourcing para clarificar el término y comprender […]",
      picture:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1920/https://www.it-seekers.com/wp-content/uploads/2022/03/17-01.png",
      comments: 3,
      categories: [],
      tags: [],
    },
    {
      id: 2,
      date: "Marzo 7, 2022",
      to: "https://www.it-seekers.com/dudas-frecuentes-sobre-el-outsourcing/",
      title: "COVID-19 y la Transformación Digital",
      description:
        "Transformación digital en pandemia El COVID-19 ha implicado un completo cambio de perspectiva en múltiples aspectos de nuestras vidas y el ámbito laboral no es la excepción.  Con la llegada de cuarentenas, restricciones y nuevos protocolos las empresas se han visto en la necesidad de replantearse las modalidades de trabajo, la realización de sus procesos […]",
      picture:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1920/https://www.it-seekers.com/wp-content/uploads/2022/03/16-01.png",
      comments: 3,
      categories: [],
      tags: [],
    },
    {
      id: 3,
      date: "Febrero 18, 2022",
      to: "https://www.it-seekers.com/dudas-frecuentes-sobre-el-outsourcing/",
      title: "¿Por qué elegir el Nearshore para tu empresa?",
      description:
        "Nearshore para empresas El término de Nearshore ha ganado cada vez más popularidad y relevancia dentro del mundo empresarial, y no es para menos.  Quienes han optado por implementar esta modalidad de contratación dentro de sus negocios han descubierto la gran cantidad de beneficios que trae consigo. Es por ello que no conocer sobre las […]",
      picture:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1920/https://www.it-seekers.com/wp-content/uploads/2022/02/15-01.png",
      comments: 3,
      categories: [],
      tags: [],
    },
    {
      id: 4,
      date: "Febrero 03, 2022",
      to: "https://www.it-seekers.com/dudas-frecuentes-sobre-el-outsourcing/",
      title: "¿Debería contratar outsourcing para mi empresa?",
      description:
        "El outsourcing es un tema que ha tomado mucha relevancia en los últimos años. Existe una gran cantidad de información al respecto y en ocasiones resulta complicado dilucidar lo realmente importante.  Puede ser que tengas dudas respecto al funcionamiento de este modelo de negocios y en consecuencia hayas pasado de largo […]",
      picture:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1920/https://www.it-seekers.com/wp-content/uploads/2022/02/14-01.png",
      comments: 3,
      categories: [],
      tags: [],
    },
  ];
  return { props: { entries } };
};

export default function Home({ entries }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Blog - IT-Seekers</title>
        <meta name="description" content="IT-Seekers blog page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.png" />
      </Head>

      <Header title="Blog" />
      <main className="container mx-auto py-16 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-16">
          <div className="lg:col-span-2">
            <NewsList entries={entries} />
          </div>
          <div>
            <NewsAside recentNews={entries.slice(0, 3)} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
