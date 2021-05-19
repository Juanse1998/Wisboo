const axios = require("axios");

export async function getAllImages(text, page, perPage) {
	const response = await fetch(`/image/search?query=${text}&page=${page}&perPage=${perPage}`);
	const responseJson = await response.json();
	return responseJson;
}

export async function getFavorites() {
	const response = await axios(`/images`);
	return response;
}

