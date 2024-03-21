import axios from "axios";

const BASE_URL = "http://localhost:8080/doctors";

export const getAllDoctors = () => axios.get(BASE_URL + '/allDoctors');

export const createDoctor = (doctor) => axios.post(BASE_URL + '/createDoctor', doctor);

export const deleteDoctor = (doctor) => axios.put(BASE_URL + "/deleteDoctor", doctor);