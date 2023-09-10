const getPokemons = async (signal) => {
  await fetch("https://hub.dummyapis.com/delay?seconds=3", { signal });
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10", {
    signal,
  });

  if (!response.ok) throw new Error("Pokemon's API Error");

  return response.json();
};

export default getPokemons;
