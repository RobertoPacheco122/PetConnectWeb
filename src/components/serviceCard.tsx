"use client";

import React from "react";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { toast } from "sonner";

interface IServiceCardProps {
  name: string;
  category: string;
  imagePath: string;
  price: string;
  rating: number;
  badges?: string[];
}

const ServiceCard = ({
  name,
  category,
  imagePath,
  price,
  rating,
}: IServiceCardProps) => {
  return (
    <Card>
      <CardContent className="p-2 mb-2">
        <div className="relative border-2 rounded-sm flex justify-center">
          <Image
            alt="Logo da empresa"
            className="rounded-md hover:cursor-pointer"
            src={imagePath}
            width={300}
            height={200}
            quality={100}
          />
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <p className="uppercase text-xs text-orange-400 font-semibold">
          {category}
        </p>
        <p className="font-bold mb-1 text-center hover:cursor-pointer hover:text-orange-400">
          {name}
        </p>
        <p className="mb-1 text-xs">Local: Bonsucesso - RJ</p>
        <p className="mb-1 text-xs">Por: Roberto Pacheco</p>
        <div className="flex gap-2 items-center mb-2 text-sm">
          <div className="flex gap-1">
            <FaStar className="text-orange-400" size={20} />
            <FaStar className="text-orange-400" size={20} />
            <FaStar className="text-orange-400" size={20} />
            <FaStar className="text-orange-400" size={20} />
            <FaStar className="text-orange-400" size={20} />
          </div>
          <span className="block">(783)</span>
        </div>
        <p className="font-semibold mb-4 text-sm text-center">
          Preço base: R${price}
        </p>
        <Button
          className="uppercase w-full"
          onClick={() =>
            toast("Adicionado ao carrinho com sucesso!", {
              description: "Veja seu carrinho para mais detalhes.",
              action: {
                label: "Desfazer",
                onClick: () => console.log("Undo"),
              },
            })
          }
        >
          <span className="mr-2">Adicionar</span>
          <LuShoppingCart size={25} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
