"use client";

import React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

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
            <h1 className="font-semibold text-2xl mb-1">Entre em sua conta</h1>
            <span className="block mb-4">
              Informe seu e-mail e senha abaixo
            </span>
            <Input
              type="email"
              id="email"
              placeholder="Seuemail@exemplo.com.br"
              className="mb-2"
            />
            <Input
              type="password"
              id="password"
              placeholder="Sua senha"
              className="mb-2"
            />
            <Button className="w-full mb-4">Entrar</Button>
            <span className="text-center">
              Ainda não possui uma conta?{" "}
              <Link href="/createAccount" className="underline">
                Cadastre-se
              </Link>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LoginPage;
