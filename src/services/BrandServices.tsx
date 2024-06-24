import axios from "axios";

const getBrands = async () => {
    try {
        const response = await axios.get('https://localhost:7029/Marcas');
        return response.data.result;
    } catch (e) {
        console.error(e);
    }
}

export { getBrands }
