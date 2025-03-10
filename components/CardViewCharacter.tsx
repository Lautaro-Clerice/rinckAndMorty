"use client";
import { Button, Card, CardBody, CardFooter, Chip, Image } from "@heroui/react";
import { Heart, MapPin, Star } from "lucide-react";
export default function CardViewCharacter(character: any) {
  return (
    <div>
      <Card className="max-w-md w-full bg-white/10 ">
        <CardBody className="overflow-visible p-0">
          <div className="relative">
            <Image
              alt={character.character.name}
              className="w-full object-cover h-[300px]"
              src={character.character.image}
            />
            {/* <div className="absolute top-2 right-2">
              <Chip
                variant="shadow"
                color={getStatusColor(character.status)}
                startContent={<Activity size={18} />}
              >
                {character.status}
              </Chip>
            </div> */}
          </div>
        </CardBody>
        <CardFooter className="flex flex-col items-start gap-4 p-6">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-2xl font-bold text-white">
              {character.character.name}
            </h2>
            <Button
              isIconOnly
              className="text-danger"
              variant="light"
              aria-label="Like"
            >
              <Heart className="text-pink-500" />
            </Button>
          </div>

          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" size={20} />
              <span className="text-white/90">
                {character.character.species}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-blue-400" size={20} />
              <span className="text-white/90">
                Origin: {character.character.name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-green-400" size={20} />
              <span className="text-white/90">
                Location: {character.character.origin.name}
              </span>
            </div>
          </div>

          <Button
            className="w-full bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
            onClick={() => window.location.reload()}
          >
            Get Random Character
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
