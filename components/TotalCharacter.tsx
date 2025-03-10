"use client";

import { Chip } from "@heroui/react";

export default function TotalCharacter(dataTotal: any) {
  return (
    <div>
      <Chip color="warning" variant="shadow">
        {dataTotal.dataTotal} personjes disponibles
      </Chip>
    </div>
  );
}
