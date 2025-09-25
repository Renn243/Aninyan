import axios from "axios";
import { BASE_URL } from "./url";

const GetAnimeList = async (page) => {
    try {
        const response = await axios.get(`${BASE_URL}/list?page=${page}`);
        return response.data ?? [];
    } catch (error) {
        console.error("Error fetching anime list:", error);
        throw error;
    }
};

export default GetAnimeList;
