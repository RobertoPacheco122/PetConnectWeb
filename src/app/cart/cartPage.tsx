import React from "react";

import "./cart.css";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
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

const CartPage = () => {
  const invoices = [
    {
      invoice: "INV001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "INV005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "INV006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "INV007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ];

  return (
    <>
      <Header />
      <main>
        <div>
          <div className="bg-secondaryGray flex justify-center items-center py-24">
            <h1 className="font-titles text-3xl font-semibold">Carrinho</h1>
          </div>
          <div className="py-24 px-96">
            <div className="flex gap-8">
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
                  {invoices.map((invoice) => (
                    <TableRow key={invoice.invoice}>
                      <TableCell className="font-medium">
                        <Image
                          alt="Logo da empresa"
                          className="rounded-md mb-2"
                          src="service3.svg"
                          width={300}
                          height={200}
                          quality={100}
                        />
                        <span className="font-semibold">Veterinário</span>
                      </TableCell>
                      <TableCell>R$99,99</TableCell>
                      <TableCell>1</TableCell>
                      <TableCell className="text-right">R$99,99</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end mr-3">
                          <LuTrash2
                            size={25}
                            className="hover:cursor-pointer"
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <div className="w-[30%]">
                <Card>
                  <CardHeader>
                    <CardTitle>Resumo da compra</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between mb-2">
                      <p>5x itens</p>
                      <span className="font-semibold">R$99,99</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p>Frete</p>
                      <span className="font-semibold">R$00,00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <p>Taxas</p>
                      <span className="font-semibold">R$00,00</span>
                    </div>
                    <Separator className="mb-4" />
                    <div className="flex justify-between mb-2">
                      <p className="font-semibold">Total</p>
                      <span className="font-semibold">R$99,99</span>
                    </div>
                    <Separator />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Finalizar pedido</Button>
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
