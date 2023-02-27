import { useState } from "react";

interface HeaderProps {
  title: string;
}

const backgroundStyle = {
  backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("blog-banner-it-seekers.png")',
};

export default function Header({ title }: HeaderProps) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header>
      <div className="flex xl:hidden justify-between mobile items-center">
        <a href="https://www.it-seekers.com/">
          <img src="logo-it-seekers-collapsed.png" alt="IT-Seekers" style={{ maxHeight: "32px" }} />
        </a>
        <button onClick={() => setShowSidebar(!showSidebar)}>
          <i className="uil text-secondary text-3xl uil-bars"></i>
        </button>
      </div>

      <div className="background" style={backgroundStyle}>
        <div className="hidden xl:block container mx-auto">
          <nav className="flex items-center px-8">
            <div className="bg-blue-300">
              <a href="https://www.it-seekers.com/" className="pb-4">
                <img src="logo-it-seekers.png" alt="IT-Seekers" />
              </a>
            </div>
            <ul className="flex flex-1 justify-end gap-x-10 mx-8 roboto">
              <li className="hover-underline-animation">
                <a href="">Inicio</a>
              </li>
              <li className="hover-underline-animation">
                <a href="">Nosotros</a>
              </li>
              <li className="hover-underline-animation">
                <a href="">Servicios</a>
              </li>
              <li className="hover-underline-animation">
                <a href="">Vacantes</a>
              </li>
              <li className="hover-underline-animation">
                <a href="">Blog</a>
              </li>
              <li className="hover-underline-animation">
                <a href="">Contáctanos</a>
              </li>
            </ul>
            <div className="bg-secondary px-2 rounded-b-2xl">
              <a href="#" className="hover-underline-animation">
                English
              </a>
            </div>
          </nav>
        </div>

        <h1 className="title">{title}</h1>
      </div>

      <div
        className={
          !showSidebar
            ? "hidden"
            : "" + "bg-white fixed z-50 xl:hidden top-0 left-0 h-screen w-1/3 shadow-2xl overflow-visible flex flex-col"
        }
      >
        <div className="self-center my-4">
          <img src="logo-it-seekers-collapsed.png" alt="IT-Seekers" style={{ maxHeight: "32px" }} />
        </div>

        <ul className="roboto text-[#282828] p-4">
          <li className="border-b border-[#ececf0] p-3">
            <a href="">Inicio</a>
          </li>
          <li className="border-b border-[#ececf0] p-3">
            <a href="">Nosotros</a>
          </li>
          <li className="border-b border-[#ececf0] p-3">
            <a href="">Servicios</a>
          </li>
          <li className="border-b border-[#ececf0] p-3">
            <a href="">Vacantes</a>
          </li>
          <li className="border-b border-[#ececf0] p-3">
            <a href="">Blog</a>
          </li>
          <li className="border-b border-[#ececf0] p-3">
            <a href="">Contáctanos</a>
          </li>
          <li className="bg-secondary text-white rounded-md p-3">
            <a href="">Inglés</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
