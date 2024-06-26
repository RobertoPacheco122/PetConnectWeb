"use client";

import React from "react";
import ServicePage from "./servicePage";

interface ProductsPageParams {
  params: {
    id: string;
  };
}

const Page = ({ params }: ProductsPageParams) => {
  return <ServicePage id={params.id} />;
};

export default Page;
