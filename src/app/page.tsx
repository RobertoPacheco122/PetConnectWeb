import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductCard from "@/components/productCard";
import ServiceCard from "@/components/serviceCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <section className="bg-secondaryGray">
          <div className="px-96 py-24 grid grid-cols-2 items-center">
            <div>
              <p className="text-orange-400 font-titles uppercase mb-2 text-xl">
                35% de desconto em serviços para cachorros
              </p>
              <p className="font-bold text-4xl font-titles uppercase mb-2">
                Por tempo limitado
              </p>
              <p className="mb-4">
                Veja as ofertas e encontre o melhor serviço pelo melhor preço.
              </p>
              <Button className="bg-buttonPrimaryColor uppercase w-48">
                Ver mais
              </Button>
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
            <div className="mb-8">
              <nav>
                <ul className="grid grid-cols-6 gap-8">
                  <li>
                    <a href="#">
                      <Card className="font-titles">
                        <CardHeader></CardHeader>
                        <CardContent className="flex justify-center items-center">
                          <Image
                            alt="Logo da empresa"
                            src="/dog-food-category.png"
                            width={130}
                            height={130}
                            quality={100}
                          />
                        </CardContent>
                        <CardFooter className="justify-center">
                          <span className="font-semibold hover:text-orange-400">
                            Comida de Cachorro
                          </span>
                        </CardFooter>
                      </Card>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Card className="font-titles">
                        <CardHeader></CardHeader>
                        <CardContent className="flex justify-center items-center">
                          <Image
                            alt="Logo da empresa"
                            src="/cat-food-category.png"
                            width={130}
                            height={130}
                            quality={100}
                          />
                        </CardContent>
                        <CardFooter className="justify-center">
                          <span className="font-semibold hover:text-orange-400">
                            Comida de Gato
                          </span>
                        </CardFooter>
                      </Card>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Card className="font-titles">
                        <CardHeader></CardHeader>
                        <CardContent className="flex justify-center items-center">
                          <Image
                            alt="Logo da empresa"
                            src="/fish-food-category.png"
                            width={130}
                            height={130}
                            quality={100}
                          />
                        </CardContent>
                        <CardFooter className="justify-center">
                          <span className="font-semibold hover:text-orange-400">
                            Comida de Peixe
                          </span>
                        </CardFooter>
                      </Card>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Card className="font-titles">
                        <CardHeader></CardHeader>
                        <CardContent className="flex justify-center items-center">
                          <Image
                            alt="Logo da empresa"
                            src="/bird-food-category.png"
                            width={130}
                            height={130}
                            quality={100}
                          />
                        </CardContent>
                        <CardFooter className="justify-center">
                          <span className="font-semibold hover:text-orange-400">
                            Comida de Aves
                          </span>
                        </CardFooter>
                      </Card>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Card className="font-titles">
                        <CardHeader></CardHeader>
                        <CardContent className="flex justify-center items-center">
                          <Image
                            alt="Logo da empresa"
                            src="/reptile-food-category.png"
                            width={130}
                            height={130}
                            quality={100}
                          />
                        </CardContent>
                        <CardFooter className="justify-center">
                          <span className="font-semibold hover:text-orange-400">
                            Comida de Répteis
                          </span>
                        </CardFooter>
                      </Card>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <Card className="font-titles">
                        <CardHeader></CardHeader>
                        <CardContent className="flex justify-center items-center">
                          <Image
                            alt="Logo da empresa"
                            src="/small-food-category.png"
                            width={130}
                            height={130}
                            quality={100}
                          />
                        </CardContent>
                        <CardFooter className="justify-center">
                          <span className="font-semibold hover:text-orange-400">
                            Comida de Roedores
                          </span>
                        </CardFooter>
                      </Card>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
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
                    <p className="font-titles text-xl font-semibold">
                      Sobre os prestadores de serviço
                    </p>
                    <p className="text-orange-400 italic font-semibold mb-4">
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
                    <p className="font-titles text-xl font-semibold">
                      Sobre os prestadores de serviço
                    </p>
                    <p className="text-orange-400 italic font-semibold mb-4">
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
              <h1 className="font-bold font-titles text-4xl text-center mb-4">
                Mais popular
              </h1>
              <p className="text-center px-80">
                Abaixo estão listados diferentes produtos que estão fazendo
                sucesso entre os donos de pets e podem interessar você.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-8">
              <ProductCard
                name="Carne Seca"
                category="Carne"
                imagePath="/product1.jpg"
                price="28,99"
                rating={3}
              />
              <ProductCard
                name="Cordeiro Seco"
                category="Comida"
                imagePath="/product2.jpg"
                price="12,39"
                rating={3}
              />
              <ProductCard
                name="Carne Seca"
                category="Carne"
                imagePath="/product3.jpg"
                price="55,99"
                rating={3}
              />
              <ProductCard
                name="Biscoitos de recompensa"
                category="Carne"
                imagePath="/product4.jpg"
                price="32,99"
                rating={3}
              />
            </div>
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
                <p className="font-titles text-3xl font-semibold text-center">
                  Cuidar de seu pet ficou fácil.
                </p>
                <p className="mb-4">
                  Agora você pode contratar serviços e comprar produtos para seu
                  pet em um só local.
                </p>
                <Button className="bg-buttonPrimaryColor uppercase w-48">
                  Ver mais
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="px-96 pb-24">
            <div className="mb-8">
              <h1 className="font-bold font-titles text-4xl text-center mb-4">
                Serviços em destaque
              </h1>
              <p className="text-center px-80">
                Abaixo estão listados diferentes serviços para diferentes
                animais mais bem avaliados em sua região.
              </p>
            </div>
            <div className="grid grid-cols-5 gap-8 mb-8">
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
                  <p className="font-titles font-semibold hover:cursor-pointer hover:text-orange-400">
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
                  <p className="font-titles font-semibold hover:cursor-pointer hover:text-orange-400">
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
                  <p className="font-titles font-semibold hover:cursor-pointer hover:text-orange-400">
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
                  <p className="font-titles font-semibold hover:cursor-pointer hover:text-orange-400">
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
                  <p className="font-titles font-semibold hover:cursor-pointer hover:text-orange-400">
                    Aves
                  </p>
                </CardFooter>
              </Card>
            </div>
            <Card>
              <CardHeader></CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 gap-8">
                  <ServiceCard
                    name="Adestramento de câes"
                    category="Cachorros"
                    imagePath="/service1.svg"
                    price="28,99"
                    rating={3}
                  />
                  <ServiceCard
                    name="Veterinário"
                    category="Cachorro e gatos"
                    imagePath="/service2.svg"
                    price="12,39"
                    rating={3}
                  />
                  <ServiceCard
                    name="Banho e tosa"
                    category="Cachorro"
                    imagePath="/service4.svg"
                    price="55,99"
                    rating={3}
                  />
                  <ServiceCard
                    name="Banho e tosa"
                    category="Cachorro"
                    imagePath="/service3.svg"
                    price="32,99"
                    rating={3}
                  />
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <Button className="bg-buttonSecondaryColor text-black uppercase w-48">
                  Ver mais
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
