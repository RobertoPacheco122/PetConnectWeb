"use client";

import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ServiceCard from "@/components/serviceCard";
import { useCart } from "@/context/cartContext";
import { fetchAllServices } from "@/utils/api/service";
import Link from "next/link";

export interface IService {
  id: string;
  animals: IAnimal[];
  description: string;
  briefDescription: string;
  basePrice: number;
  imagePath: string;
  name: string;
  serviceProvider: IServiceProvider;
  serviceCategory: IServiceCategory;
  evaluations: IEvaluation[];
}

export interface IAnimal {
  name: string;
  specieId: string;
}

export interface IEvaluation {
  evaluate: number;
  opinion: string;
}

interface IServiceCategory {
  name: string;
}

export interface IServiceProvider {
  name: string;
  addresses: IAddress[];
}

interface IAddress {
  address: string;
  number: string;
  district: string;
}

const ServicesPage = () => {
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
        <div>
          <div className="bg-secondaryGray flex justify-center items-center py-24">
            <h1 className="text-3xl font-semibold">Serviços</h1>
          </div>
          <div className="bg-white py-24 px-96 flex gap-12">
            <aside className="w-64">
              <ul>
                <li className="mb-6">
                  <Accordion type="multiple">
                    <AccordionItem value="item1">
                      <AccordionTrigger className="py-2 text-sm uppercase font-semibold">
                        Animal
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="dog-food" />
                          <label htmlFor="dog-food">
                            Cachorro <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="cat-food" />
                          <label htmlFor="cat-food">
                            Gato <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="bird-food" />
                          <label htmlFor="bird-food">
                            Peixe <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="dog-food" />
                          <label htmlFor="dog-food">
                            Ave <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="reptile-food" />
                          <label htmlFor="reptile-food">
                            Réptil <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="rodent-food" />
                          <label htmlFor="rodent-food">
                            Roedor <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li className="mb-6">
                  <Accordion type="multiple">
                    <AccordionItem value="item1">
                      <AccordionTrigger className="py-2 text-sm uppercase font-semibold">
                        Categorias
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="item1" />
                          <label htmlFor="item1">
                            Veterinário{" "}
                            <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="item2" />
                          <label htmlFor="item2">
                            Banho <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="item3" />
                          <label htmlFor="item3">
                            Tosa <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="item4" />
                          <label htmlFor="item4">
                            Banho e tosa{" "}
                            <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="item5" />
                          <label htmlFor="item5">
                            Passeador{" "}
                            <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="item6" />
                          <label htmlFor="item6">
                            Creche <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="item6" />
                          <label htmlFor="item6">
                            Hotel <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li className="mb-6">
                  <Accordion type="multiple">
                    <AccordionItem value="item1">
                      <AccordionTrigger className="py-2 text-sm uppercase font-semibold">
                        Localidade
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="dog-food" />
                          <label htmlFor="dog-food">
                            Rio de Janeiro{" "}
                            <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="cat-food" />
                          <label htmlFor="cat-food">
                            Niterói <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="cat-food" />
                          <label htmlFor="cat-food">
                            Nova Iguaçu{" "}
                            <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="bird-food" />
                          <label htmlFor="bird-food">
                            Duque de Caxias{" "}
                            <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <Checkbox id="bird-food" />
                          <label htmlFor="bird-food">
                            Petrópoles{" "}
                            <span className="font-semibold">(12)</span>
                          </label>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
              </ul>
            </aside>
            <div>
              <Card className="mb-8">
                <CardContent className="p-2 flex items-center justify-between">
                  <div className="flex gap-1">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button>
                            <LuLayoutGrid
                              size={25}
                              className="text-orange-400"
                            />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>Visualizar em grid</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button>
                            <LuLayoutList size={25} />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <span>Visualizar em lista</span>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-xs uppercase">Ordenar por:</span>
                    <Select defaultValue="1">
                      <SelectTrigger className="w-44">
                        <SelectValue placeholder="Selecione uma opção" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="1">Mais relevantes</SelectItem>
                          <SelectItem value="2">Menor preço</SelectItem>
                          <SelectItem value="3">Maior preço</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
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
              <div>
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;
