import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import baseurl from "../../utils/baseurl";

// LOGIN
const loginAsync = async (data) => {
  try {
    const res = await axios({
      url: `${baseurl}/api/users/login`,
      method: "POST",
      data,
    });
    return res;
  } catch (err) {
    // Handle Error Here
    console.error(err);
  }
};

export const login = createAsyncThunk("auth/login", loginAsync);
