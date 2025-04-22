import { useEffect, useState } from "react";
import "../Pokemon.css";
import PokemonCards from "./PokemonCards";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=24";

  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      console.log(data);

      const detailsPokemon = data.results.map(async (curPokemon) => {
        const res = await fetch(curPokemon.url);
        const dataPokemon = await res.json();
        return dataPokemon;
      });
      const detailsPromise = await Promise.all(detailsPokemon);
      console.log(detailsPromise);
      setPokemon(detailsPromise);
      setLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  //search functionality
  const searchData = pokemon.filter((curPokemon) =>
    curPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <div>
        <h1>Loading ⏰</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return (
    <section className="container">
      <header>
        <h1> Lets Catch Pokémon</h1>
      </header>
      <div className="pokemon-search">
        <input
          type="text"
          value={search}
          placeholder="Search Pokemon"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <ul className="cards">
        {searchData.map((curPokemon) => {
          return <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />;
        })}
      </ul>
    </section>
  );
}

export default Pokemon;
