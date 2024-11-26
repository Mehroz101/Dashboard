import axios from "axios";
const API_URL = "http://localhost:5000";
export const loginAdmin = async (data) => {
  try {
    console.log(data);
    const response = await axios.post(`${API_URL}/api/admin/login`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/user/allusers`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const addUser = async (data) => {
  try {
    console.log(data);
    // const response = await axios.post(`${API_URL}/api/addusers`, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const fetchAllReservationData = async () => {
  const response = await axios.get(
    `${API_URL}/api/reservation/allreservations`
  );
  console.log(response.data);
  return response.data;
};

export const fetchAllSpaceData = async () => {
  const response = await axios.get(`${API_URL}/api/spaces/getallspaces`);
  console.log(response.data.data);
  return response.data.data;
};

export const fetchAllEarningData = async () => {
  const response = await axios.get(`${API_URL}/api/withdraw/allearnings`);
  console.log(response.data);
  return response.data;
};

export const fetchAllUserData = async () => {
  const response = await axios.get(`${API_URL}/api/user/allusers`);
  console.log(response.data);
  return response.data;
};

export const fetchAllSpaceReviewsData = async (spaceId) => {
  // const response = await axios.get(`${API_URL}/spaces/${spaceId}/reviews`);
  // const data = await response.json();
  // return data;
};
