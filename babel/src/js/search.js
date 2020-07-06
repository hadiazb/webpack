async function search(id) {
	const API = `https://pokeapi.co/api/v2/pokemon/${id}/`;
	const response = await fetch(API);
	const pokemon = await response.json();
	return pokemon;
}

export default search;
