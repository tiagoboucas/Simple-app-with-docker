import axios from "axios";

const api = axios.create({
	baseURL: "http://127.0.0.1:5000",
	headers: {
		"Content-Type": "application/json",
	},
});

const fetchColors = async (searchQuery?: string) => {
	const response = await api.get(`/colors?q=${searchQuery}`);
	return response.data;
};

export { fetchColors };
