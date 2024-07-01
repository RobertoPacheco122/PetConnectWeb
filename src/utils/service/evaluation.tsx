"use client";

import React from "react";

import { IEvaluation } from "@/app/services/servicesPage";
import { FaStar } from "react-icons/fa";

export const renderStarsEvaluations = (evaluations: IEvaluation[]) => {
  const TOTAL_NUMBER_OF_STARS = 5;

  const total = evaluations.reduce(
    (sum, evaluation) => sum + evaluation.evaluate,
    0
  );
  const avarageStars = Math.round(total / evaluations.length);

  return (
    <>
      {[...Array(TOTAL_NUMBER_OF_STARS)].map((_, index) => (
        <FaStar
          key={index}
          className={index < avarageStars ? "text-orange-400" : "text-gray-200"}
          size={20}
        />
      ))}
    </>
  );
};

export const renderStarsEvaluationsByStarsNumber = (stars: number) => {
  const TOTAL_NUMBER_OF_STARS = 5;

  return (
    <>
      {[...Array(TOTAL_NUMBER_OF_STARS)].map((_, index) => (
        <FaStar
          key={index}
          className={index < stars ? "text-orange-400" : "text-gray-200"}
          size={20}
        />
      ))}
    </>
  );
};

export const filterEvaluationsByStarsQuantity = (
  evaluations: IEvaluation[],
  starsQuantity: number
) => {
  return evaluations.filter(
    (evaluation) => evaluation.evaluate === starsQuantity
  );
};
