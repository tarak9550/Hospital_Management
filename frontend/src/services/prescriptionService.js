import axios from "axios";

const API_URL = "http://localhost:5000/api/prescriptions";

// Get all prescriptions
export const getPrescriptions = async () => {
  return await axios.get(API_URL);
};

// Get a single prescription by ID
export const getPrescriptionById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// Create a new prescription
export const createPrescription = async (prescriptionData) => {
  return await axios.post(API_URL, prescriptionData);
};

// Update a prescription
export const updatePrescription = async (id, prescriptionData) => {
  return await axios.put(`${API_URL}/${id}`, prescriptionData);
};

// Delete a prescription
export const deletePrescription = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
