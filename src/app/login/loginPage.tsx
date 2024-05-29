import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

const LoginPage = () => {
  return (
    <main className="grid h-screen">
      <div className="grid grid-cols-2">
        <section className="bg-gray-600 p-8">
          <Image
            alt="Logo da empresa"
            src="/logo.png"
            width={140}
            height={140}
          />
        </section>
        <section className="py-8 px-[30%]">
          <div className="flex items-center justify-center h-full flex-col">
            <h1 className="font-titles font-semibold text-3xl mb-2">
              Crie uma conta
            </h1>
            <span className="block mb-4">
              Digite seu e-amail e senha abaixo para criar sua conta
            </span>
            <Input
              className="mb-2"
              type="text"
              placeholder="email@exemplo.com.br"
            />
            <Input className="mb-2" type="password" placeholder="Sua senha" />
            <Button></Button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
