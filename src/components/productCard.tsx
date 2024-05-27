import React from "react";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface IProductCardProps {
  name: string;
  category: string;
  imagePath: string;
  price: string;
  rating: number;
  badges?: string[];
}

const ProductCard = ({
  name,
  category,
  imagePath,
  price,
  rating,
}: IProductCardProps) => {
  return (
    <Card>
      <CardContent className="p-2 mb-2">
        <div className="relative">
          <div className="flex justify-center">
            <Image
              alt="Logo da empresa"
              className="rounded-md hover:cursor-pointer"
              src={imagePath}
              width={250}
              height={200}
              quality={100}
            />
          </div>
          {/* <div className="pl-2">
            <Badge className="absolute top-2 bg-orange-400">Novo</Badge>
            <Badge className="absolute top-2 left-16">Produto</Badge>
          </div> */}
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <p className="uppercase text-xs text-orange-400 font-semibold">
          {category}
        </p>
        <p className="font-bold mb-2 text-center hover:cursor-pointer hover:text-orange-400">
          {name}
        </p>
        <div className="flex gap-1 mb-2">
          <FaStar className="text-orange-400" size={20} />
          <FaStar className="text-orange-400" size={20} />
          <FaStar className="text-orange-400" size={20} />
          <FaStar className="text-gray-300" size={20} />
          <FaStar className="text-gray-300" size={20} />
        </div>
        <p className="font-semibold mb-4">R${price}</p>
        <Button className="bg-buttonPrimaryColor uppercase w-full">
          Adicionar ao carrinho
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
