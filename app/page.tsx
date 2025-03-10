import CardCharacter from "@/components/CardCharacter";
import PaginationComponent from "@/components/PaginationComponent";
import TotalCharacter from "@/components/TotalCharacter";
import { fetchCharacters } from "@/services";
import { Suspense } from "react";
export default async function Home({
  searchParams = {},
}: {
  searchParams?: {
    id?: string;
    page?: string;
  };
}) {
  const currentPage = Number(searchParams.page) || 1;
  const dataCharacters = await fetchCharacters(currentPage.toString());
  const characters = dataCharacters.results;
  const dataTotalCharacter = dataCharacters.info.count;
  const totalPages = dataCharacters.info.pages;

  return (
    <div className="flex flex-col items-center gap-[20px]">
      <div className="gap-2 flex items-center">
        <h1 className="text-[30px] ">Rick and morty</h1>
        <TotalCharacter dataTotal={dataTotalCharacter} />
      </div>

      <Suspense fallback={<div>Cargando....</div>}>
        <CardCharacter data={characters} />
      </Suspense>
      <PaginationComponent total={totalPages} />
    </div>
  );
}
