import Films from "./Films";
import People from "./People";
import Planets from "./Planets";
import Species from "./Species";
import Vehicles from "./Vehicles";
import Starships from "./Starships";

export const resources = {
  films: Films,
  people: People,
  planets: Planets,
  species: Species,
  vehicles: Vehicles,
  starships: Starships
};

export const resourceNames = Object.keys(resources);
