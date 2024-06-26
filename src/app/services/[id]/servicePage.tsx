"use client";

import React from "react";

import ServiceCard from "@/components/serviceCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { LuThumbsDown, LuThumbsUp } from "react-icons/lu";
import { IService } from "../servicesPage";
import { useCart } from "@/context/cartContext";
import { fetchAllServices } from "@/utils/api/service";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface ServicePageProps {
  id: string;
}

const ServicePage = ({ id }: ServicePageProps) => {
  const [servicesData, setServicesData] = React.useState<IService[]>([]);
  const { setItems } = useCart();

  React.useEffect(() => {
    const getAllServices = async () => {
      const response = (await fetchAllServices()) as IService[];

      console.log(response);

      setServicesData(response);
    };

    getAllServices();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="px-96 py-24">
          <section className="flex gap-8 mb-16">
            <div className="flex gap-4">
              <ul>
                {Array.from({ length: 4 }).map((serviceImage, index) => {
                  return (
                    <li key={index} className="border-2 border-gray-200 mb-4">
                      <Image
                        alt="Logo da empresa"
                        src="/service1.svg"
                        width={80}
                        height={80}
                      />
                    </li>
                  );
                })}
              </ul>
              <div className="border-2 border-gray-200 ">
                <Image
                  alt="Logo da empresa"
                  src="/service1.svg"
                  width={370}
                  height={400}
                />
              </div>
            </div>
            <div className="w-[500px]">
              <h1 className="text-2xl font-titles font-semibold">
                Adestramento de câes
              </h1>
              <span className="block mb-2 text-xl">
                <span>Preço base:</span>{" "}
                <span className="font-semibold">R$199,99</span>
              </span>
              <span className="block mb-2">
                Serviço prestado por:{" "}
                <span className="font-semibold">Roberto Pacheco</span>
              </span>
              <span className="block mb-2">
                Localidade:{" "}
                <span className="font-semibold">
                  Rio de Janeiro, Bonsucesso - RJ
                </span>
              </span>
              <div className="flex gap-2 items-center mb-2">
                <span className="font-semibold">5,0</span>
                <div className="flex gap-1">
                  <FaStar className="text-orange-400" size={20} />
                  <FaStar className="text-orange-400" size={20} />
                  <FaStar className="text-orange-400" size={20} />
                  <FaStar className="text-orange-400" size={20} />
                  <FaStar className="text-orange-400" size={20} />
                </div>
                <span className="block">
                  <span className="font-semibold">783</span> avaliações de
                  clientes
                </span>
              </div>
              <span className="text-sm block mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                laoreet condimentum felis, ac facilisis tellus rutrum a. Quisque
                sagittis luctus libero, nec porttitor urna molestie eget.
                Praesent nec laoreet mi. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </span>
              <Button className="bg-buttonPrimaryColor uppercase w-48">
                Adicionar ao carrinho
              </Button>
            </div>
          </section>
          <section className="mb-24">
            <div className="mb-8">
              <h1 className="font-bold font-titles text-4xl text-center mb-4">
                Mais popular
              </h1>
              <p className="text-center px-80">
                Abaixo estão listados diferentes produtos que estão fazendo
                sucesso entre os donos de pets e podem interessar você.
              </p>
            </div>
            <ul className="grid grid-cols-4 gap-6 mb-8">
              {servicesData.map(
                (
                  {
                    id,
                    name,
                    basePrice,
                    briefDescription,
                    description,
                    imagePath,
                    animals,
                    evaluations,
                    serviceCategory,
                    serviceProvider,
                  },
                  index
                ) => {
                  return (
                    <li key={index}>
                      <ServiceCard
                        id={id}
                        name={name}
                        provider={serviceProvider}
                        animals={animals}
                        evaluations={evaluations}
                        category="Cachorro"
                        imagePath={imagePath}
                        basePrice={basePrice}
                        addProductToCart={setItems}
                      />
                    </li>
                  );
                }
              )}
            </ul>
            <div className="flex justify-center">
              <Button className="bg-buttonSecondaryColor text-black uppercase w-48">
                Ver mais
              </Button>
            </div>
          </section>
          <section className="flex gap-12">
            <aside className="w-[40%]">
              <h2 className="font-semibold font-titles text-2xl">
                Avaliações do prestador
              </h2>
              <div className="flex gap-2 items-center mb-2">
                <div className="flex gap-1">
                  <FaStar className="text-orange-400" size={20} />
                  <FaStar className="text-orange-400" size={20} />
                  <FaStar className="text-orange-400" size={20} />
                  <FaStar className="text-orange-400" size={20} />
                  <FaStar className="text-orange-400" size={20} />
                </div>
                <span className="block font-semibold">5 de 5</span>
              </div>
              <span className="block mb-4">
                <span className="font-semibold">1783</span> avaliações totais
              </span>
              <ul className="text-sm">
                <li className="flex gap-2 items-center mb-2">
                  <span>5 estrelas</span>
                  <Progress className="w-52" value={50} />
                  <span>35%</span>
                </li>
                <li className="flex gap-2 items-center mb-2">
                  <span>4 estrelas</span>
                  <Progress className="w-52" value={52} />
                  <span>35%</span>
                </li>
                <li className="flex gap-2 items-center mb-2">
                  <span>3 estrelas</span>
                  <Progress className="w-52" value={80} />
                  <span>35%</span>
                </li>
                <li className="flex gap-2 items-center mb-2">
                  <span>2 estrelas</span>
                  <Progress className="w-52" value={35} />
                  <span>35%</span>
                </li>
                <li className="flex gap-2 items-center">
                  <span>1 estrelas</span>
                  <Progress className="w-52" value={20} />
                  <span>35%</span>
                </li>
              </ul>
            </aside>
            <div>
              <h2 className="font-semibold font-titles text-2xl mb-8">
                Principais avaliações
              </h2>
              <ul>
                {Array.from({ length: 10 }).map((avaliation, index) => {
                  return (
                    <li key={index} className="mb-8">
                      <div className="flex items-center gap-2 mb-2">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span>Roberto Pacheco</span>
                      </div>
                      <div className="flex gap-2 items-center mb-2">
                        <div className="flex gap-1">
                          <FaStar className="text-orange-400" size={20} />
                          <FaStar className="text-orange-400" size={20} />
                          <FaStar className="text-orange-400" size={20} />
                          <FaStar className="text-orange-400" size={20} />
                          <FaStar className="text-orange-400" size={20} />
                        </div>
                        <span className="block font-semibold">
                          Esse produto tá uma bosta.
                        </span>
                      </div>
                      <div>
                        <span className="block text-sm">
                          Avaliado em 29/05/2024
                        </span>
                        <p className="mb-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Quisque laoreet condimentum felis, ac facilisis
                          tellus rutrum a. Quisque sagittis luctus libero, nec
                          porttitor urna molestie eget. Praesent nec laoreet mi.
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit.
                        </p>
                        <div className="flex gap-2">
                          <LuThumbsUp size={25} className="text-gray-500" />
                          <LuThumbsDown size={25} className="text-gray-500" />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicePage;
