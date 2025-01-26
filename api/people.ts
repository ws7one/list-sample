import axios from "axios";
import { ATTENDEES } from "./urls";

export const getPeople = async () => {
  const key = "a7513cc0";

  try {
    const response = await axios.get(`${ATTENDEES}?key=${key}`);
    return response.data;
    // return list
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch people");
  }
};
