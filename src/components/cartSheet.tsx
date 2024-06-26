"use client";

import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { LuShoppingCart } from "react-icons/lu";
import { Separator } from "./ui/separator";
import { ScrollArea } from "./ui/scroll-area";
import { useCart } from "@/context/cartContext";
import Link from "next/link";

const CartSheet = () => {
  const { items } = useCart();

  const totalCartValue =
    !items || items.length === 0
      ? 0
      : items.reduce((total, item) => total + item.basePrice, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost">
          <LuShoppingCart className="hover:cursor-pointer" size={25} />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="mb-4">
          <SheetTitle>Itens no carrinho</SheetTitle>
          <SheetDescription>
            Veja um resumo dos itens em seu carrinho.
          </SheetDescription>
        </SheetHeader>
        <ScrollArea className="h-[89%]">
          <ul className="text-sm">
            {items && items.length > 0 ? (
              items.map(({ name, basePrice }, index) => {
                return (
                  <li key={index} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span>
                        1x <span className="font-semibold">{name}</span>
                      </span>
                      <span className="font-semibold">R${basePrice}</span>
                    </div>
                    <Separator />
                  </li>
                );
              })
            ) : (
              <span className="block mb-4">Seu carrinho está vazio!</span>
            )}
            <li className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span>
                  <span className="font-semibold">Total:</span>
                </span>
                <span className="font-semibold">
                  R${totalCartValue.toFixed(2)}
                </span>
              </div>
            </li>
          </ul>
        </ScrollArea>
        <SheetFooter>
          <SheetClose asChild>
            <Link href="/cart" className="w-full">
              <Button type="submit" className="w-full">
                Ver carrinho
              </Button>
            </Link>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
