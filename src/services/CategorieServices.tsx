import axios from "axios";

const getCategories = async () => {
    try {
        const response = await axios.get('https://localhost:7029/Categorias');
        return response.data.result;
    } catch (e) {
        console.error(e);
    }
}

export { getCategories }
