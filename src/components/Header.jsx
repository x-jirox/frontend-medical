import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/*Left side */}
      <div>
        <p>
          Reservar Citas <br /> con Médicos de Confianza
        </p>
        <div>
          <img src={assets.group_profiles} alt="" />
          <p>
            Cuida tu salud con los mejores profesionales. Elige el médico ideal
            y reserva tu cita en solo unos clics.
          </p>
        </div>
        <a href="">
                    Reservar Cita <img src={assets.arrow_icon} alt=""/>
        </a>
      </div>
      {/*Right side */}
      <div>
        <img src={assets.header_img} alt=""/>
      </div>
    </div>
  );
};

export default Header;
