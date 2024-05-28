import React from "react";
import Image from "next/image";
import ProductCard from "@/components/productCard";
import ServiceCard from "@/components/serviceCard";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const LoginPage = () => {
  return (
    <section className="grid">

      <div></div>

      <div>
        <h1>SIGN IN</h1>
        <Image
          alt="Logo da empresa"
          src="/logo.png"
          width={140}
          height={140}
        />

        <form action="./">
          <input type="email" placeholder="Email" name="email" />
          <input type="password" placeholder="Senha" name="password" />
          <Button className="bg-buttonPrimaryColor uppercase w-48">LOGIN</Button>
        </form>
        <p>DON'T HAVE AN ACCOUNT ? <a href="./" className="hover:text-orange-400"> SIGN UP.</a></p>
      </div>

    </section>
  )
}

export default LoginPage;