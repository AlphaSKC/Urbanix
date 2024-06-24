import axios from "axios";

const getModels = async () => {
    try {
        const response = await axios.get('https://localhost:7029/Modelos');
        return response.data.result;
    } catch (e) {
        console.error(e);
    }
}

export { getModels }
