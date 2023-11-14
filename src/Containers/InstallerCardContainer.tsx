"use client";

import Card from "@/Components/Card/Card";
import { mockInstallers } from "@/assets/constants/installersHelpers";
import { useEffect } from "react";

export const InstallerCardContainer = () => {
  useEffect(() => {
    // здесь будем делать запрос к серверу
  }, []);
  return mockInstallers.map((cardProps) => (
    <Card key={cardProps.id + cardProps.name} {...cardProps} />
  ));
};
