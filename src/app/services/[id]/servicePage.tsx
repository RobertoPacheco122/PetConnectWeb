"use client";

import React from "react";

import ServiceCard from "@/components/serviceCard";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import {
  LuShoppingCart,
  LuThumbsDown,
  LuThumbsUp,
  LuUser,
} from "react-icons/lu";
import { IEvaluation, IService } from "../servicesPage";
import { ICartItem, useCart } from "@/context/cartContext";
import { fetchAllServices, fetchServiceById } from "@/utils/api/service";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  filterEvaluationsByStarsQuantity,
  renderStarsEvaluations,
  renderStarsEvaluationsByStarsNumber,
} from "@/utils/service/evaluation";
import { toast } from "sonner";
import { renderAnimalNames } from "@/utils/service/card";
import { fetchEvaluationsByServiceProvider } from "@/utils/api/evaluation";

interface ServicePageProps {
  id: string;
}

const ServicePage = ({ id }: ServicePageProps) => {
  const [serviceData, setServiceData] = React.useState<IService | null>(null);
  const [servicesData, setServicesData] = React.useState<IService[]>([]);
  const [allProviderEvaluationsData, setAllProviderEvaluationsData] =
    React.useState<IEvaluation[]>([]);

  const { setItems } = useCart();

  const handleAddProductToCartClick = (product: ICartItem) => {
    setItems((previousProducts) => {
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

  React.useEffect(() => {
    const getAllServices = async () => {
      const response = (await fetchAllServices()) as IService[];

      setServicesData(response);
    };

    getAllServices();
  }, []);

  React.useEffect(() => {
    const getServiceById = async (id: string) => {
      const response = (await fetchServiceById(id)) as IService;

      setServiceData(response);
    };

    getServiceById(id);
  }, [id]);

  React.useEffect(() => {
    if (!serviceData) return;

    const getAllProviderEvaluations = async (id: string) => {
      const response = (await fetchEvaluationsByServiceProvider(
        id
      )) as IEvaluation[];

      setAllProviderEvaluationsData(response);
    };

    getAllProviderEvaluations(serviceData.serviceProvider.id);
  }, [serviceData]);

  return (
    <>
      <Header />
      <main>
        <div className="px-96 py-24">
          <section className="flex gap-8 mb-16">
            <div className="flex gap-4">
              <div className="border-2 border-gray-200 ">
                <Image
                  alt="Logo da empresa"
                  src={serviceData ? serviceData.imagePath : ""}
                  width={370}
                  height={400}
                />
              </div>
            </div>
            {serviceData && (
              <div className="w-[500px]">
                <h1 className="text-2xl font-semibold mb-2">
                  {serviceData.name}
                </h1>
                <span className="block mb-2 text-xl">
                  <span>Preço base:</span>{" "}
                  <span className="font-semibold">
                    R${serviceData.basePrice}
                  </span>
                </span>
                <span className="block mb-2">
                  Serviço prestado por:{" "}
                  <span className="font-semibold">
                    {serviceData.serviceProvider.name}
                  </span>
                </span>
                <span className="block mb-2">
                  Serviço para:{" "}
                  <span className="font-semibold">
                    {renderAnimalNames(serviceData.animals)}
                  </span>
                </span>
                <span className="block mb-2">
                  Localidade:{" "}
                  <span className="font-semibold">
                    {serviceData.serviceProvider.addresses[0].address},{" "}
                    {serviceData.serviceProvider.addresses[0].number} -{" "}
                    {serviceData.serviceProvider.addresses[0].district}
                  </span>
                </span>
                <div className="flex gap-2 items-center mb-4">
                  <div className="flex gap-1">
                    {renderStarsEvaluations(serviceData.evaluations)}
                  </div>
                  <span className="block">
                    <span className="font-semibold">
                      {serviceData.evaluations.length}
                    </span>{" "}
                    avaliações de clientes
                  </span>
                </div>
                {/* <span className="text-sm block mb-4">
                  {serviceData.briefDescription}
                </span> */}
                <Button
                  className="uppercase w-52"
                  onClick={() =>
                    handleAddProductToCartClick({
                      id: serviceData.id,
                      name: serviceData.name,
                      basePrice: serviceData.basePrice,
                      imagePath: serviceData.imagePath,
                    })
                  }
                >
                  <span className="mr-2">Adicionar</span>
                  <LuShoppingCart size={25} />
                </Button>
              </div>
            )}
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
          </section>

          <section className="flex gap-12">
            {allProviderEvaluationsData && (
              <aside className="w-[40%]">
                <h2 className="font-semibold font-titles text-2xl mb-2">
                  Avaliações do prestador
                </h2>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-1 mb-2">
                    {renderStarsEvaluations(allProviderEvaluationsData)}
                  </div>
                  <span className="block font-semibold"></span>
                </div>
                <span className="block mb-4">
                  <span className="font-semibold">
                    {allProviderEvaluationsData.length}
                  </span>{" "}
                  avaliações totais
                </span>
                <ul className="text-sm">
                  {Array.from({ length: 5 }).map((_, index) => {
                    const correctIndex = index + 1;
                    const evaluationsByStars = filterEvaluationsByStarsQuantity(
                      allProviderEvaluationsData,
                      correctIndex
                    );
                    const evaluationByStarPercentage =
                      (evaluationsByStars.length /
                        allProviderEvaluationsData.length) *
                      100;

                    return (
                      <li key={index} className="flex gap-2 items-center mb-2">
                        <span className="w-[200px]">
                          {correctIndex} estrelas ({evaluationsByStars.length})
                        </span>
                        <Progress
                          className="w-full"
                          value={
                            evaluationByStarPercentage
                              ? evaluationByStarPercentage
                              : 0
                          }
                        />
                        <span className="text-xs">
                          {evaluationByStarPercentage
                            ? evaluationByStarPercentage
                            : 0}
                          %
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </aside>
            )}
            <div>
              <h2 className="font-semibold font-titles text-2xl mb-8">
                Principais avaliações do serviço
              </h2>
              <ul>
                {allProviderEvaluationsData.map(
                  (
                    { createdAt, evaluate, opinion, userWhoRequested, title },
                    index
                  ) => {
                    const avaliatedAt = new Date(createdAt).toLocaleDateString(
                      "pt-BR"
                    );

                    return (
                      <li key={index} className="mb-8">
                        <div className="flex items-center gap-2 mb-2">
                          <Avatar>
                            <AvatarImage /* src="https://github.com/shadcn.png" */
                            />
                            <AvatarFallback>
                              <LuUser size={20} />
                            </AvatarFallback>
                          </Avatar>
                          <span>{userWhoRequested.name}</span>
                        </div>
                        <div className="flex gap-2 items-center mb-2">
                          <div className="flex gap-1">
                            {renderStarsEvaluationsByStarsNumber(evaluate)}
                          </div>
                          <span className="block font-semibold">{title}</span>
                        </div>
                        <div>
                          <span className="block text-sm">
                            Avaliado em {avaliatedAt}
                          </span>
                          <p className="mb-2">{opinion}</p>
                        </div>
                      </li>
                    );
                  }
                )}
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
