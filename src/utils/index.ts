import { toast } from "../components/common/Toast";
import { PokemonProps } from "../types/PokemonDetailProps";

/**
 * Takes the url of Pokémon detail and returns the Id of that Pokémon
 * @param url
 * @returns id of the Pokémon
 */
export const getPokeId = (url: string) => {
  const segments = url.split("/");
  const id = segments[segments.length - 2];
  return id;
};

/**
 * Takes and ID of an element and returns the background color of that element
 * @param id string
 * @returns background color of the element
 */
export const getColor = (id: string) => {
  const element = document.getElementById(id);
  let backgroundColor;
  if (element) {
    const computedStyles = window.getComputedStyle(element);
    backgroundColor = computedStyles.backgroundColor;
    return backgroundColor;
  }
};

/**
 * Adds an item to local storage of key "myTeam"
 * @param data PokemonProps
 */
export const addToStorage = (data: PokemonProps) => {
  if (localStorage.getItem("myTeam")) {
    const existingTeam = JSON.parse(localStorage.getItem("myTeam") || "[]");
    if (existingTeam?.length < 6) {
      existingTeam.push(data);
      localStorage.setItem("myTeam", JSON.stringify(existingTeam));
      toast.success(
        "Your team is getting Strong !",
        "Added one new Pokémon to your team."
      );
    } else {
      toast.error(
        "Your Team is Full !",
        "You cannot add more than 6 Pokémons to your team."
      );
    }
    return JSON.parse(localStorage.getItem("myTeam") || "[]");
  } else {
    const team = [];
    team.push(data);
    localStorage.setItem("myTeam", JSON.stringify(team));
    return JSON.parse(localStorage.getItem("myTeam") || "[]");
  }
};

/**
 * Removes an item from local storage of key "myTeam"
 * @param url string
 * @returns Array of pokemons
 */
export const removeFromStorage = (url: string) => {
  let items = JSON.parse(localStorage.getItem("myTeam") || "[]");
  items = items.filter((item: PokemonProps) => item.url !== url);
  localStorage.setItem("myTeam", JSON.stringify(items));
  toast.error(
    "Your team is getting Weak !",
    "Removed one Pokémon to your team."
  );
  return JSON.parse(localStorage.getItem("myTeam") || "[]");
};
