function PokemonCards({ pokemonData }) {
  return (
    <li className="pokemon-card">
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className="pokemon-image"
        />
      </figure>
      <h1 className="pokemon-name">{pokemonData.name}</h1>
      <div className="pokemon-info pokemon-highlight">
        <p>
          {/* {pokemonData.types[0].type.name}, {pokemonData.types[1]?.type.name} */}
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p>
        {/* <p>
          {pokemonData.types.map((curType) => curType.type.name).join(", ")}
        </p> */}
      </div>

      <div className="grid-three-cols">
        <p className="pokemon-info">
          <span> Height:</span>
          {pokemonData.height}
        </p>
        <p className="pokemon-info">
          <span> Weight:</span>
          {pokemonData.weight}
        </p>
        <p className="pokemon-info">
          <span> speed:</span>
          {pokemonData.stats[5].base_stat}
        </p>
      </div>

      <div className="grid-three-cols">
        <div className="pokemon-info">
          <span> Experience:</span>
          <p>{pokemonData.base_experience}</p>
        </div>
        <div className="pokemon-info">
          <span>Attack:</span>
          <p>{pokemonData.stats[1].base_stat}</p>
        </div>
        <div className="pokemon-info">
          <span> Abilities: </span>
          <p>
            {/* {pokemonData.abilities[0].ability.name} */}
            {pokemonData.abilities
              .map((abilityInfo) => abilityInfo.ability.name)
              .join(", ")}
          </p>
        </div>
      </div>
    </li>
  );
}

export default PokemonCards;
