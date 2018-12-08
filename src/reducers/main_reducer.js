import { combineReducers } from 'redux';
import FilmsInfo from './films_reducer';
import PeopleInfo from './people_reducer';
import StarshipsInfo from './starships_reducer';
import VehiclesInfo from './vehicles_reducer';
import SpeciesInfo from './species_reducer';
import PlanetsInfo from './planets_reducer';

export const SwapiApp = combineReducers({ FilmsInfo, PeopleInfo, StarshipsInfo, VehiclesInfo, SpeciesInfo, PlanetsInfo });
