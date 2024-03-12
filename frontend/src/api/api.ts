import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

const api = axios.create({
	baseURL: baseURL,
	headers: {
		"Content-Type": "application/json",
	},
});

const fetchColors = async (searchQuery?: string) => {
	const response = await api.get(`/colors?q=${searchQuery}`);
	return response.data;
};

export { fetchColors };
