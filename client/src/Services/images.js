const axios = require("axios");

export async function getAllImages(text, page, perPage) {
	const response = await fetch(`/image/search?query=${text}&page=${page}&perPage=${perPage}`);
	const responseJson = await response.json();
	return responseJson;
}


// export async function getAllImages(text) {
// 	console.log(text);
// 	const response = await axios(`/image/search${text}`);
// 	const responseJson = await response.json();
// 	console.log(responseJson);
// 	return responseJson;
// }
export default {
	getAllImages,
};
