import axios from "axios";

const getProducts = async () => {
    try {
        const response = await axios.get('https://localhost:7029/Productos');
        return response.data.result;
    } catch (e) {
        console.error(e);
    }
}

const createProduct = async (product: any) => {
    try {
        const response = await axios.post('https://localhost:7029/Productos', product);
        return response.data;
    } catch (e: any) {
        console.error('Error al crear el producto:', e.response ? e.response.data : e.message);
        throw e;
    }
}

export { getProducts, createProduct }
