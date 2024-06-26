"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ServiceCard from "@/components/serviceCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  const { setItems } = useCart();

  return (
    <>
      <Header />
      <main>
        <section className="bg-secondaryGray">
          <div className="px-96 py-24 grid grid-cols-2 items-center">
            <div>
              <p className="uppercase mb-2 text-xl">
                35% de desconto em serviços para cachorros
              </p>
              <p className="font-semibold text-4xl uppercase mb-2">
                Por tempo limitado
              </p>
              <p className="mb-4">
                Veja as ofertas e encontre o melhor serviço pelo melhor preço.
              </p>
              <Link href="/services">
                <Button className="uppercase w-48">Ver mais</Button>
              </Link>
            </div>
            <div className="flex justify-end">
              <Image
                alt="Logo da empresa"
                src="/calltoaction1.svg"
                width={600}
                height={490}
              />
            </div>
          </div>
        </section>
        <section>
          <div className="px-96 py-24">
            <div className="grid grid-cols-2 gap-8">
              <Card>
                <CardHeader></CardHeader>
                <CardContent className="flex gap-4 items-center">
                  <div>
                    <Image
                      alt="Logo da empresa"
                      src="/pet2.png"
                      width={230}
                      height={100}
                      quality={100}
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      Sobre os prestadores de serviço
                    </p>
                    <p className="text-orange-400 font-semibold mb-4">
                      Todos são certificados
                    </p>
                    <p className="text-sm">
                      Os prestadores de serviço antes de estarem disponíveis na
                      plataforma são submetidos a diversos processos e análises.
                      O objetivo é garantir a sua segurança e satisfação.
                    </p>
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
              <Card>
                <CardHeader></CardHeader>
                <CardContent className="flex gap-4 items-center">
                  <div>
                    <Image
                      alt="Logo da empresa"
                      src="/pet4.png"
                      width={230}
                      height={100}
                      quality={100}
                    />
                  </div>
                  <div>
                    <p className="text-xl font-semibold">
                      Sobre os prestadores de serviço
                    </p>
                    <p className="text-orange-400 font-semibold mb-4">
                      Todos são certificados
                    </p>
                    <p className="text-sm">
                      Os prestadores de serviço antes de estarem disponíveis na
                      plataforma são submetidos a diversos processos e análises.
                      O objetivo é garantir a sua segurança e satisfação.
                    </p>
                  </div>
                </CardContent>
                <CardFooter></CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section>
          <div className="px-96 pb-24">
            <div className="mb-8">
              <h1 className="font-bold text-3xl text-center mb-4">
                Mais popular
              </h1>
              <p className="text-center px-80">
                Abaixo estão listados diferentes produtos que estão fazendo
                sucesso entre os donos de pets e podem interessar você.
              </p>
            </div>
            <ul className="grid grid-cols-4 gap-8">
              {Array.from({ length: 4 }).map((service, index) => {
                return (
                  <li key={index}>
                    {/* <ServiceCard
                      name="Banho e tosa"
                      category="Cachorro"
                      imagePath="/service2.svg"
                      price="32,99"
                      rating={3}
                      addProductToCart={setItems}
                    /> */}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
        <section className="bg-secondaryGray">
          <div className="grid grid-cols-2 mb-24">
            <div>
              <Image
                alt="Logo da empresa"
                src="/pet-sale.jpg"
                fill={true}
                className="!relative h-64"
                quality={100}
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="flex justify-center">
                  <Image
                    alt="Logo da empresa"
                    src="/dog.svg"
                    width={300}
                    height={300}
                    quality={100}
                  />
                </div>
                <p className="text-3xl font-semibold text-center">
                  Cuidar de seu pet ficou fácil.
                </p>
                <p className="mb-4">
                  Agora você pode contratar serviços e comprar produtos para seu
                  pet em um só local.
                </p>
                <Link href="/services">
                  <Button className="uppercase w-48">Ver mais</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-96 pb-24">
            <div className="mb-8">
              <h1 className="font-semibold text-3xl text-center mb-4">
                Serviços em destaque
              </h1>
              <p className="text-center px-80">
                Abaixo estão listados diferentes serviços para diferentes
                animais mais bem avaliados em sua região.
              </p>
            </div>
            {/* <div className="grid grid-cols-5 gap-8 mb-8">
              <Card className="border-4 border-orange-400">
                <CardContent className="pt-6">
                  <div className="flex justify-center">
                    <Image
                      alt="Logo da empresa"
                      className="rounded-md hover:cursor-pointer"
                      src="/category1.jpg"
                      width={80}
                      height={80}
                      quality={100}
                    />
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="font-semibold hover:cursor-pointer hover:text-orange-400">
                    Cachorros
                  </p>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center">
                    <Image
                      alt="Logo da empresa"
                      className="rounded-md hover:cursor-pointer"
                      src="/category2.jpg"
                      width={80}
                      height={80}
                      quality={100}
                    />
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="font-semibold hover:cursor-pointer hover:text-orange-400">
                    Gatos
                  </p>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center">
                    <Image
                      alt="Logo da empresa"
                      className="rounded-md hover:cursor-pointer"
                      src="/category3.jpg"
                      width={80}
                      height={80}
                      quality={100}
                    />
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="font-semibold hover:cursor-pointer hover:text-orange-400">
                    Peixes
                  </p>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center">
                    <Image
                      alt="Logo da empresa"
                      className="rounded-md hover:cursor-pointer"
                      src="/category4.jpg"
                      width={80}
                      height={80}
                      quality={100}
                    />
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="font-semibold hover:cursor-pointer hover:text-orange-400">
                    Roedores
                  </p>
                </CardFooter>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="flex justify-center">
                    <Image
                      alt="Logo da empresa"
                      className="rounded-md hover:cursor-pointer"
                      src="/category5.jpg"
                      width={80}
                      height={80}
                      quality={100}
                    />
                  </div>
                </CardContent>
                <CardFooter className="justify-center">
                  <p className="font-semibold hover:cursor-pointer hover:text-orange-400">
                    Aves
                  </p>
                </CardFooter>
              </Card>
            </div> */}
            <Card>
              <CardHeader></CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-8">
                  {/* <ServiceCard
                    name="Adestramento de câes"
                    category="Cachorros"
                    imagePath="/service1.svg"
                    basePrice="28,99"
                    rating={3}
                    addProductToCart={setItems}
                  />
                  <ServiceCard
                    name="Veterinário"
                    category="Cachorro e gatos"
                    imagePath="/service2.svg"
                    basePrice="12,39"
                    rating={3}
                    addProductToCart={setItems}
                  />
                  <ServiceCard
                    name="Banho e tosa"
                    category="Cachorro"
                    imagePath="/service4.svg"
                    basePrice="55,99"
                    rating={3}
                    addProductToCart={setItems}
                  />
                  <ServiceCard
                    name="Banho e tosa"
                    category="Cachorro"
                    imagePath="/service3.svg"
                    basePrice="32,99"
                    rating={3}
                    addProductToCart={setItems}
                  /> */}
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Link href="/services">
                  <Button className="bg-buttonSecondaryColor text-black uppercase w-48">
                    Ver mais
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
