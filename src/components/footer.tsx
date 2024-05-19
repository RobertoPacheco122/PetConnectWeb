import React from "react";

import Image from "next/image";
import { IoPawSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-secondaryGray">
      <div className="px-96 py-24 grid grid-cols-3 gap-8">
        <div>
          <div className="flex gap-2">
            <IoPawSharp className="text-orange-400" size={20} />
            <p className="font-titles font-semibold uppercase">
              Sobre a PetConnect
            </p>
          </div>
          <p>
            We are a one-stop shop for pet owners and animal lovers. You’ll find
            high-quality pet supplies here. Take some time to look at our
            collection of pet products and accessories.
          </p>
        </div>
        <div>
          <p className="font-titles font-semibold uppercase">Links utéis</p>
          <nav>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-400"
                >
                  <IoPawSharp className="text-orange-400" size={20} />
                  Comida para cachorros
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-400"
                >
                  <IoPawSharp className="text-orange-400" size={20} />
                  Comida para gatos
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-400"
                >
                  <IoPawSharp className="text-orange-400" size={20} />
                  Comida para peixes
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-400"
                >
                  <IoPawSharp className="text-orange-400" size={20} />
                  Comida para roedores
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-400"
                >
                  <IoPawSharp className="text-orange-400" size={20} />
                  Comida para aves
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p className="font-titles font-semibold uppercase">Minha conta</p>
          <nav>
            <ul>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-400"
                >
                  <IoPawSharp className="text-orange-400" size={20} />
                  Minha conta
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-400"
                >
                  <IoPawSharp className="text-orange-400" size={20} />
                  Lista de desejo
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-400"
                >
                  <IoPawSharp className="text-orange-400" size={20} />
                  Política de privacidade
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="#"
                  className="flex items-center gap-2 hover:text-orange-400"
                >
                  <IoPawSharp className="text-orange-400" size={20} />
                  Ajuda e suporte
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
