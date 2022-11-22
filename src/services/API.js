import axios from "axios";

const API = axios.create({
    baseURL: "https://api.brushme.com.ua/8918171aa2bbed8adaac1acec2c6d756/public/products/json/",
});

const getProduction = () => {
    return API.get();
};
    
export default getProduction;
