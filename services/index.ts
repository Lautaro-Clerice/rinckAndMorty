import axios from "axios";

export async function fetchCharacters() {
  try {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
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
