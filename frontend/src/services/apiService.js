import axios from "axios";
import { notify } from "../utils/notification";
const API_URL = "http://localhost:5000";
export const loginAdmin = async (data) => {
  try {
    const token = localStorage.getItem("admintoken"); // Retrieve the token from localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
      },
    };
    console.log(data);
    const response = await axios.post(
      `${API_URL}/api/admin/login`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    notify("error", error.response.data.message);
  }
};
export const fetchUsers = async () => {
  try {
    const token = localStorage.getItem("admintoken"); // Retrieve the token from localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
      },
    };
    const response = await axios.get(`${API_URL}/api/user/allusers`, config);
    return response.data;
  } catch (error) {
    notify("error", error.response.data.message);
  }
};
export const addUser = async (data) => {
  try {
    const token = localStorage.getItem("admintoken"); // Retrieve the token from localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
      },
    };
    console.log(data);
    const response = await axios.post(
      `${API_URL}/api/user/addusers`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    notify("error", error.response.data.message);
  }
};
export const editUser = async (data) => {
  try {
    const token = localStorage.getItem("admintoken"); // Retrieve the token from localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
      },
    };
    console.log(data);
    const response = await axios.post(
      `${API_URL}/api/user/edituser`,
      data,
      config
    );
    return response.data;
  } catch (error) {
    notify("error", error.response.data.message);
  }
};

export const fetchAllReservationData = async () => {
  try {
    const token = localStorage.getItem("admintoken"); // Retrieve the token from localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
      },
    };
    const response = await axios.get(
      `${API_URL}/api/reservation/allreservations`,
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    notify("error", error.response.data.message);
  }
};

export const fetchAllSpaceData = async () => {
  try {
    const token = localStorage.getItem("admintoken"); // Retrieve the token from localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
      },
    };
    const response = await axios.get(
      `${API_URL}/api/spaces/getallspaces`,
      config
    );
    console.log(response.data.data);
    return response.data.data;
  } catch (error) {
    notify("error", error.response.data.message);
  }
};

export const fetchAllEarningData = async () => {
  try {
    const token = localStorage.getItem("admintoken"); // Retrieve the token from localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
      },
    };
    const response = await axios.get(
      `${API_URL}/api/withdraw/allearnings`,
      config
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    notify("error", error.response.data.message);
  }
};

export const fetchAllUserData = async () => {
  try {
    const token = localStorage.getItem("admintoken"); // Retrieve the token from localStorage
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Add the token to the Authorization header
      },
    };
    const response = await axios.get(`${API_URL}/api/user/allusers`, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    notify("error", error.response.data.message);
  }
};

export const fetchAllSpaceReviewsData = async (spaceId) => {
  // const response = await axios.get(`${API_URL}/spaces/${spaceId}/reviews`);
  // const data = await response.json();
  // return data;
};
