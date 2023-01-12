import axios from "axios";

const API = axios.create({
  baseURL:
    "https://api.brushme.com.ua/8918171aa2bbed8adaac1acec2c6d756/public/products/json/",
  page: 1,
  per_page: 10,
});

const getProduction = () => async () => {
  const response = await API.get();
  return console.log(response.data.products);
};

export default getProduction;
