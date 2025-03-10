"use client";

import { Button, Card, CardFooter, Image } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function CardCharacter({ data }: { data: any }) {
  const router = useRouter();

  const handleRoute = (chart: any) => {
    console.log("click");

    router.push(`/view-character?id=${chart.id}`);
  };

  return (
    <div className="flex flex-wrap justify-center gap-[20px]">
      {data.map((char: any) => (
        <Card isFooterBlurred className="w-[280px] h-[280px]" key={char.id}>
          <Image
            alt={char.name}
            className="object-cover"
            height={280}
            src={char.image}
            width={280}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80"> {char.name}</p>
            <Button
              className="text-tiny text-white bg-black/20"
              color="default"
              radius="lg"
              size="sm"
              variant="flat"
              onPress={() => handleRoute(char)}
            >
              Ver mas
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
