import React from "react";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

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
        <div className="relative border-2 rounded-sm">
          <Image
            alt="Logo da empresa"
            className="rounded-md hover:cursor-pointer"
            src={imagePath}
            width={300}
            height={200}
            quality={100}
          />
          <div className="pl-2">
            <Badge className="absolute top-2 bg-orange-400">Novo</Badge>
            <Badge className="absolute top-2 left-16">Serviço</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <p className="uppercase text-xs text-orange-400 font-semibold">
          {category}
        </p>
        <p className="font-bold mb-1 text-center hover:cursor-pointer hover:text-orange-400">
          {name}
        </p>
        <p className="mb-1">Local: Rio de Janeiro - RJ</p>
        <div className="flex gap-1 mb-2">
          <FaStar className="text-orange-400" size={20} />
          <FaStar className="text-orange-400" size={20} />
          <FaStar className="text-orange-400" size={20} />
          <FaStar className="text-orange-400" size={20} />
          <FaStar className="text-orange-400" size={20} />
        </div>
        <p className="font-semibold mb-4">Preço base: R${price}</p>
        <Button className="bg-blue-300 uppercase w-full">
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
