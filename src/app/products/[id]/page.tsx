import React from "react";
import ProductPage from "./productPage";

interface ProductsPageParams {
  params: {
    id: string;
  };
}

const Page = ({ params }: ProductsPageParams) => {
  return <ProductPage id={params.id} />;
};

export default Page;
