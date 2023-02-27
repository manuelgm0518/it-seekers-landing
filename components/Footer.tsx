export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex gap-6 py-16 px-4 lg:px-0">
        <div className="flex flex-col basis-1/3">
          <a href="https://www.it-seekers.com/" className="pb-4">
            <img src="logo-it-seekers.png" alt="IT-Seekers" />
          </a>
          <p className="text-base">
            Somos una consultora global de gestión de talento y expertos digitales en servicios de nueva generación
          </p>
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="section-title footer">Información de Contacto</h3>
          <div className="flex">
            <i className="uil uil-phone-alt mx-2"></i>
            (449) 322 08 50
          </div>
          <div className="flex">
            <i className="uil uil-envelope mx-2"></i>
            contacto@it-seekers.com
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="section-title footer">Sigue nuestras redes</h3>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com/company/it-seekers/" className="social-network-icon uil uil-linkedin"></a>
            <a href="https://www.facebook.com/ITSeekers" className="social-network-icon uil uil-facebook"></a>
            <a
              href="https://www.instagram.com/itseekersmx/?hl=es-la"
              className="social-network-icon uil uil-instagram"
            ></a>
            <a href="https://twitter.com/ITSeekers" className="social-network-icon uil uil-twitter"></a>
            <a
              href="https://www.youtube.com/channel/UC2HjeNTPrSOa9kdA92Qsu7w"
              className="social-network-icon uil uil-youtube"
            ></a>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <h3 className="section-title footer">Newsletter</h3>
          <span className="text-base">Envíanos tu correo para recibir actualizaciones.</span>
          <input type="text" className="outline-0 p-3 my-4 text-black" />
          <div className="mt-8">
            <button className="rounded-lg bg-secondary text-white py-3 px-8 rubik font-bold ">Enviar</button>
          </div>
        </div>
      </div>

      <div className="bg-dark text-center text-[#FFFFFFAB] p-2">
        <span>
          2023 © All rights reserved by IT-Seekers | Consulte nuestros{" "}
          <a href="https://www.it-seekers.com/aviso-de-privacidad/">Avisos de Privacidad</a>
        </span>
      </div>
    </footer>
  );
}
