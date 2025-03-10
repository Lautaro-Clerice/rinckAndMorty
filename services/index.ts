import axios from "axios";

export async function fetchCharacters(currentPage: string) {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character?page=${currentPage}`
    );
    console.log(
      `https://rickandmortyapi.com/api/character?page=${currentPage}`
    );

    console.log(res.data);

    return res.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}
export async function fetchCharacterId(id: number) {
  try {
    const res = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );

    return res.data;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
}
