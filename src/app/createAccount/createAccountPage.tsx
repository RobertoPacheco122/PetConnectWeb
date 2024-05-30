"use client";

import React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

interface IUserAccountData {
  name: string;
  email: string;
  password: string;
  confirmedPassword: string;
  birthDate: string;
}

const CreateAccountPage = () => {
  const [userAccountData, setUserAccountData] =
    React.useState<IUserAccountData>({
      name: "",
      email: "",
      password: "",
      confirmedPassword: "",
      birthDate: "",
    });

  const handleUserAccountDataChange = (
    fieldName: keyof IUserAccountData,
    newFieldValue: string
  ) => {
    setUserAccountData({ ...userAccountData, [fieldName]: newFieldValue });
  };

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
        <section className="py-8 px-[30%] h-full">
          <div className="flex items-center justify-center h-full flex-col">
            <h1 className="font-semibold text-2xl mb-4">Crie sua conta</h1>
            <Tabs defaultValue="commonUser" className="w-[400px] mb-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="commonUser">Usuário comum</TabsTrigger>
                <TabsTrigger value="serviceProvider">
                  Prestador de serviços
                </TabsTrigger>
              </TabsList>
              <TabsContent value="commonUser">
                <CommonUserTab />
              </TabsContent>
              <TabsContent value="serviceProvider">
                <ServiceProviderTab />
              </TabsContent>
            </Tabs>
            <span className="text-center">
              Já possui uma conta?{" "}
              <Link href="/login" className="underline">
                Faça login
              </Link>
            </span>
          </div>
        </section>
      </div>
    </main>
  );
};

const CommonUserTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Usuário comum</CardTitle>
        <CardDescription>
          Informe seus dados pessoais abaixo para concluir seu cadastro.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" type="text" placeholder="Seu nome" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com.br"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="Sua senha" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="connfirmPassword">Confirmação de senha</Label>
          <Input
            id="connfirmPassword"
            type="password"
            placeholder="Confirme sua senha"
          />
        </div>
        <div className="space-y-1 grid grid-cols-2 gap-4 items-end">
          <div>
            <Label htmlFor="">Sexo</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Selecione seu sexo"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="M">Masculino</SelectItem>
                  <SelectItem value="F">Feminino</SelectItem>
                  <SelectItem value="O">Outros</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="birthDate">Data de nascimento</Label>
            <Input type="date" id="birthDate" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Cadastrar-se</Button>
      </CardFooter>
    </Card>
  );
};

const ServiceProviderTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Prestador de serviços</CardTitle>
        <CardDescription>
          Informe seus dados pessoais abaixo para concluir seu cadastro.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-1">
          <Label htmlFor="name">Nome completo</Label>
          <Input id="name" type="text" placeholder="Seu nome" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="seuemail@exemplo.com.br"
          />
        </div>
        <div className="space-y-1">
          <Label htmlFor="password">Senha</Label>
          <Input id="password" type="password" placeholder="Sua senha" />
        </div>
        <div className="space-y-1">
          <Label htmlFor="connfirmPassword">Confirmação de senha</Label>
          <Input
            id="connfirmPassword"
            type="password"
            placeholder="Confirme sua senha"
          />
        </div>
        <div className="space-y-1 grid grid-cols-2 gap-4 items-end">
          <div>
            <Label htmlFor="sex">Sexo</Label>
            <Select>
              <SelectTrigger id="sex">
                <SelectValue placeholder="Selecione seu sexo"></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="M">Masculino</SelectItem>
                  <SelectItem value="F">Feminino</SelectItem>
                  <SelectItem value="O">Outros</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="birthDate">Data de nascimento</Label>
            <Input type="date" id="birthDate" />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Cadastrar-se</Button>
      </CardFooter>
    </Card>
  );
};

export default CreateAccountPage;
