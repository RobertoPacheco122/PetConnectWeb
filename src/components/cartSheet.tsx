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

const CartSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <LuShoppingCart className="hover:cursor-pointer" size={25} />
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
            {Array.from({ length: 5 }).map((item, index) => {
              return (
                <li key={index} className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span>
                      1x <span className="font-semibold">Veterinário</span> -
                      Bonsucesso, RJ
                    </span>
                    <span className="font-semibold">R$99,99</span>
                  </div>
                  <Separator />
                </li>
              );
            })}
            <li className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span>
                  <span className="font-semibold">Total:</span>
                </span>
                <span className="font-semibold">R$399,99</span>
              </div>
            </li>
          </ul>
        </ScrollArea>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit" className="w-full">
              Finalizar pedidos
            </Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CartSheet;
