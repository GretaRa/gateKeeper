import axios from "axios";

export const PostRequest = async (url, data, headers = {}) => {
	let config = {
		method: "post",
		maxBodyLength: Infinity,
		url: url,
		headers: headers,
		data: data,
	};

	try {
		const response = await axios.request(config);
		return response.data
	} catch (error) {
		if (error.response) {
			console.error("Error response:", error.response.data.errors);
			return error.response.data.errors;
		} else if (error.request) {
			console.error("Error request:", error.request);
			throw error.request;
		} else {
			console.error("Error message:", error.message);
			throw error.message;
		}
	}
};
