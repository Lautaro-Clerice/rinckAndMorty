import CardViewCharacter from "@/components/CardViewCharacter";
import { fetchCharacterId } from "@/services";

export default async function ViewCharacter({
  searchParams,
}: {
  searchParams?: {
    id?: string;
  };
}) {
  const idCharacter = Number(searchParams?.id);
  const character = await fetchCharacterId(idCharacter);
  return (
    <div>
      <div className="min-h-screen  flex items-center justify-center p-4">
        <CardViewCharacter character={character} />
      </div>
    </div>
  );
}
