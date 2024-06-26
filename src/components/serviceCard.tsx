"use client";

import React from "react";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "./ui/card";
import { FaStar } from "react-icons/fa";
import { Button } from "./ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { toast } from "sonner";
import { ICartItem } from "@/context/cartContext";
import {
  IAnimal,
  IEvaluation,
  IServiceProvider,
} from "@/app/services/servicesPage";
import Link from "next/link";

interface IServiceCardProps {
  basePrice: number;
  id: string;
  name: string;
  category: string;
  imagePath: string;
  provider: IServiceProvider;
  animals: IAnimal[];
  evaluations: IEvaluation[];
  addProductToCart: React.Dispatch<React.SetStateAction<ICartItem[]>>;
  badges?: string[];
}

const ServiceCard = ({
  basePrice,
  id,
  name,
  category,
  evaluations,
  animals,
  imagePath,
  provider,
  addProductToCart,
}: IServiceCardProps) => {
  const handleAddProductToCartClick = (product: ICartItem) => {
    addProductToCart((previousProducts) => {
      return [...previousProducts, product];
    });

    toast("Adicionado ao carrinho com sucesso!", {
      description: "Veja seu carrinho para mais detalhes.",
      action: {
        label: "Desfazer",
        onClick: () => console.log("Undo"),
      },
    });
  };

  const renderStarsEvaluations = (evaluations: IEvaluation[]) => {
    const TOTAL_NUMBER_OF_STARS = 5;

    const total = evaluations.reduce(
      (sum, evaluation) => sum + evaluation.evaluate,
      0
    );
    const avarageStars = Math.round(total / evaluations.length);

    return (
      <>
        {[...Array(TOTAL_NUMBER_OF_STARS)].map((_, index) => (
          <FaStar
            key={index}
            className={
              index < avarageStars ? "text-orange-400" : "text-gray-200"
            }
            size={20}
          />
        ))}
      </>
    );
  };

  const renderAnimalNames = (animals: IAnimal[]) => {
    if (!animals || animals.length === 0) return "Não informado";

    const names = animals.map((animal) => animal.name);

    return names.join(", ");
  };

  return (
    <Card>
      <CardContent className="p-2 mb-2">
        <div className="relative border-2 rounded-sm flex justify-center">
          <Link href={`/services/${id}`}>
            <Image
              alt="Logo da empresa"
              className="rounded-md hover:cursor-pointer"
              src={`/${imagePath}`}
              width={300}
              height={200}
              quality={100}
            />
          </Link>
        </div>
      </CardContent>
      <CardFooter className="flex-col">
        <p className="uppercase text-xs text-orange-400 font-semibold">
          {renderAnimalNames(animals)}
        </p>
        <p className="font-bold mb-1 text-center hover:cursor-pointer hover:text-orange-400">
          <Link href={`/services/${id}`}>{name}</Link>
        </p>
        <p className="mb-1 text-xs text-center">
          Local: {provider.addresses[0].address}, {provider.addresses[0].number}{" "}
          - {provider.addresses[0].district}
        </p>
        <p className="mb-1 text-xs">Por: {provider.name}</p>
        <div className="flex gap-2 items-center mb-2 text-sm">
          <div className="flex gap-1">
            {renderStarsEvaluations(evaluations)}
          </div>
          <span className="block">({evaluations.length})</span>
        </div>
        <p className="font-semibold mb-4 text-sm text-center">
          Preço base: R${basePrice}
        </p>
        <Button
          className="uppercase w-full"
          onClick={() =>
            handleAddProductToCartClick({
              id,
              name,
              basePrice,
              imagePath,
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
