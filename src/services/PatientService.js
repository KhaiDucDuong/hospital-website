import axios from "axios";

const BASE_URL = "http://localhost:8080/patients";

export const getAllPatients = () => axios.get(BASE_URL + "/allPatients");