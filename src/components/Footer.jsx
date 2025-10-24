import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="md:mx-10">
      {/* main footer content */}
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Este proyecto ha sido desarrollado con fines educativos, siguiendo
            un video tutorial. Su propósito es practicar la creación de una
            plataforma médica que permita a los usuarios conocer y reservar
            citas con los mejores médicos de confianza.
          </p>
        </div>

        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-5">Compañía</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Inicio</li>
            <li>Acerca de</li>
            <li>Contacto</li>
            <li>Política de Privacidad</li>
          </ul>
        </div>

        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-5">Ponte en contacto</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+593 991 530 112</li>
            <li>correalenin045@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* copyright section */}
      <div>
        <hr className="border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-500">
          © 2025 Proyecto Médico — Desarrollado por Jiro con fines educativos.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
