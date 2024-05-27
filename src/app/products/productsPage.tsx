import React from "react";

import ProductCard from "@/components/productCard";
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

const ProductsPage = () => {
  return (
    <section>
      <div>
        <div className="bg-secondaryGray flex justify-center items-center py-24">
          <h1 className="font-titles text-3xl font-semibold">Produtos</h1>
        </div>
        <div className="bg-white py-24 px-96 flex gap-12">
          <aside className="w-64">
            <ul>
              <li className="mb-6">
                <Accordion type="multiple">
                  <AccordionItem value="item1">
                    <AccordionTrigger className="py-2 font-titles uppercase font-semibold">
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
                    <AccordionTrigger className="py-2 font-titles uppercase font-semibold">
                      Categorias
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex items-center gap-2 mb-1">
                        <Checkbox id="dog-food" />
                        <label htmlFor="dog-food">
                          Ração <span className="font-semibold">(12)</span>
                        </label>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <Checkbox id="cat-food" />
                        <label htmlFor="cat-food">
                          Petisco <span className="font-semibold">(12)</span>
                        </label>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <Checkbox id="bird-food" />
                        <label htmlFor="bird-food">
                          Brinquedo <span className="font-semibold">(12)</span>
                        </label>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <Checkbox id="dog-food" />
                        <label htmlFor="dog-food">
                          Roupas <span className="font-semibold">(12)</span>
                        </label>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <Checkbox id="reptile-food" />
                        <label htmlFor="reptile-food">
                          Remédio <span className="font-semibold">(12)</span>
                        </label>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </li>
              <li className="mb-6">
                <Accordion type="multiple">
                  <AccordionItem value="item1">
                    <AccordionTrigger className="py-2 font-titles uppercase font-semibold">
                      Tipo de envio
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="flex items-center gap-2 mb-1">
                        <Checkbox id="dog-food" />
                        <label htmlFor="dog-food">
                          Correios <span className="font-semibold">(12)</span>
                        </label>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <Checkbox id="cat-food" />
                        <label htmlFor="cat-food">
                          Transportadora{" "}
                          <span className="font-semibold">(12)</span>
                        </label>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <Checkbox id="bird-food" />
                        <label htmlFor="bird-food">
                          Pela empresa{" "}
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
                          <LuLayoutGrid size={25} className="text-orange-400" />
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
            <ul className="grid grid-cols-4 gap-8 mb-8">
              {Array.from({ length: 50 }).map((product, index) => {
                return (
                  <li key={index}>
                    <ProductCard
                      name="Cordeiro Seco"
                      category="Comida"
                      imagePath="/product2.jpg"
                      price="12,39"
                      rating={3}
                    />
                  </li>
                );
              })}
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
    </section>
  );
};

export default ProductsPage;
