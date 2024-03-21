import axios from "axios";

const BASE_URL = "http://localhost:8080/departments";

export const getAllDepartments = () => axios.get(BASE_URL + "/allDepartments");

export const createDepartment = (department) => axios.post(BASE_URL + "/createDepartment", department); 

export const updateDepartment = (department) => axios.put(BASE_URL + "/updateDepartment", department);

export const deleteDepartment = (department) => axios.put(BASE_URL + "/deleteDepartment", department)