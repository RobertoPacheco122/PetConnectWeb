import React from "react";

import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import CartSheet from "./cartSheet";

const Header = () => {
  return (
    <header>
      <div className="px-96 py-8">
        <div className="flex justify-between items-center">
          <div>
            <Image
              alt="Logo da empresa"
              src="/logo.png"
              width={140}
              height={140}
            />
          </div>
          <div className="flex gap-8">
            <nav>
              <ul className="flex gap-4 uppercase font-semibold text-xm">
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Início
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Sobre nós
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-400">
                    Contato
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex items-center gap-4">
              <LuUser2 className="hover:cursor-pointer" size={25} />
              <CartSheet />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
