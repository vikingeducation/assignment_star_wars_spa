thoughts on things



First set up a basic router with at least 2 different routes, using React Router.
Decide how you want to implement state management and outline the structure. Before implementing it.
One by one, add pages for each resource. Figure out how to work with the paginated data in the view. Add pagination. Don't forget to include links to each in either a navbar or sidebar.
Each item on the main resource page should have a link to click to see the detailed information on that item, like a "show" view in a CRUD application.
Add the ability to search.



resources:
https://swapi.co/api/
species & starships
http https://swapi.co/api/starships/9/
  "results": [ {}, {} ]
http https://swapi.co/api/species/3/

Redux Store:
{
  starships,
  species
}
Display
Router
Switch
  Route Component=StarshipContainer
  Route Component=Container
-
