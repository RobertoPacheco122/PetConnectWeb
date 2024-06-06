import React from "react";

import Image from "next/image";
import { LuUser2 } from "react-icons/lu";
import CartSheet from "./cartSheet";
import Link from "next/link";

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
                  <Link href={"/"} className="hover:text-orange-400">
                    Início
                  </Link>
                </li>
                <li>
                  <Link href={"/services"} className="hover:text-orange-400">
                    Serviços
                  </Link>
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
