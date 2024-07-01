"use client";

import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LuTrash2 } from "react-icons/lu";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useCart } from "@/context/cartContext";
import { toast } from "sonner";
import { postServiceRequest } from "@/utils/api/service";

export interface IServiceRequest {
  id: string;
  requestDate: string;
  provisionDate: string;
  requestStatus: EServiceRequestStatus;
  userWhoRequestedId: string;
  serviceId: string;
}

export enum EServiceRequestStatus {
  Pending = 1,
  Concluded = 2,
  Canceled = 3,
}

const CartPage = () => {
  const { items, setItems } = useCart();

  const handleDeleteProductFromCart = (index: number) => {
    setItems((previousItems) => {
      return previousItems.filter((_, i) => i !== index);
    });
  };

  const handleFinalizeOrder = async () => {
    let errorOcurred = false;

    if (items.length === 0) {
      toast.error(
        "É necessário ter itens no carrinho para finalizar o pedido!"
      );

      return;
    }

    for (const [index, item] of items.entries()) {
      try {
        const postRequest = await postServiceRequest({
          requestStatus: 1,
          serviceId: item.id,
          requestDate: new Date().toISOString(),
          userWhoRequestedId: "33f22574-8959-466a-872a-88604cdca64a",
        });

        if (!postRequest)
          throw new Error(
            `Ocorreu um erro ao enviar o item do carrinho de ServiceId ${item.id}`
          );

        handleDeleteProductFromCart(index);
      } catch (error) {
        console.error(error);
        errorOcurred = true;
      } finally {
        if (errorOcurred) {
          toast.error(
            "Ocorreu um erro ao enviar alguma solicitação de serviço. Atualize a página e tente novamente."
          );

          return;
        }

        toast.success("Pedidos realizados com sucesso!", {
          description: "Veja seu histórico de pedidos para mais detalhes.",
        });
      }
    }
  };

  const totalCartValue =
    !items || items.length === 0
      ? 0
      : items.reduce((total, item) => total + item.basePrice, 0);

  return (
    <>
      <Header />
      <main>
        <div>
          <div className="bg-secondaryGray flex justify-center items-center py-24">
            <h1 className="text-3xl font-semibold">Carrinho</h1>
          </div>
          <div className="py-24 px-96">
            <div className="flex gap-8">
              {items && items.length > 0 ? (
                <Table className="w-full">
                  <TableHeader>
                    <TableRow className="bg-gray-200">
                      <TableHead className="w-[100px]">Produto</TableHead>
                      <TableHead>Preço unitário</TableHead>
                      <TableHead>Quantidade</TableHead>
                      <TableHead className="text-right">Subtotal</TableHead>
                      <TableHead className="text-right">Excluir</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {items.map(({ name, basePrice, imagePath }, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          <Image
                            alt="Logo da empresa"
                            className="rounded-md mb-2"
                            src={imagePath}
                            width={300}
                            height={200}
                            quality={100}
                          />
                          <span className="font-semibold">{name}</span>
                        </TableCell>
                        <TableCell>R${basePrice}</TableCell>
                        <TableCell>1</TableCell>
                        <TableCell className="text-right">
                          R${basePrice}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end mr-3">
                            <LuTrash2
                              size={25}
                              className="hover:cursor-pointer"
                              onClick={() => handleDeleteProductFromCart(index)}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="w-full">
                  <span className="text-2xl font-semibold">
                    Seu carrinho está vazio!
                  </span>
                </div>
              )}

              <div className="w-[30%]">
                <Card>
                  <CardHeader>
                    <CardTitle>Resumo da compra</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-2">
                      <p>{items.length}x itens</p>
                      <span className="font-semibold">
                        R${totalCartValue.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p>Frete</p>
                      <span className="font-semibold">R$0.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p>Taxas</p>
                      <span className="font-semibold">R$0.00</span>
                    </div>
                    <Separator className="mb-4" />
                    <div className="flex justify-between mb-2">
                      <p className="font-semibold">Total</p>
                      <span className="font-semibold">
                        R${totalCartValue.toFixed(2)}
                      </span>
                    </div>
                    <Separator />
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full"
                      disabled={items.length === 0 ? true : false}
                      onClick={() => handleFinalizeOrder()}
                    >
                      Finalizar pedido
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
