import React from "react";
import portadaInicio from '../assets/img/portada-inicio.jpg' 

export default function Inicio() {
  return (
    <>
      <div className="container bg-secondary">
        <div className="row">
          <div className="pt-5">
            <img src={portadaInicio} id="top" className="img-fluid pt-2 col-12" />
            <div className="col-12 text-center text-white">
              <br />
              <strong>FUNDACIÓN OBRA</strong>
              <p className="text-white claseFuente">
                "Yo Soy La Inmaculada Madre del Divino Corazón Eucarístico de
                Jesús"
              </p>
              <strong>y OBRA</strong>
              <p className="text-white claseFuente">
                "Yo Soy El Sacratísimo Corazón Eucarístico de Jesús"
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
