import config from "../../config/index";

const getRequest = async (endpoint) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}${endpoint}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    })
    .then((response) => response.json())
    if (res.success) {
      return {
        error: false,
        data: res.data,
        message: res.message,
      };
    }
    return {
      error: true,
      data: [],
      message: res.message,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      data: [],
      message: "Error connecting to the server, please try again.",
    };
  }
};

const postRequest = async (endpoint, payload) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    }).then((response) => response.json());
    if (res.success) {
      return {
        error: false,
        data: res.data,
        message: res.message,
      };
    }
    return {
      error: true,
      data: [],
      message: res.message,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      data: [],
      message: "Error connecting to the server, please try again.",
    };
  }
};

const deleteRequest = async (endpoint, payload) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}${endpoint}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      credentials: 'include',
    })
    .then((response) => response.json())
    if (res.success) {
      return {
        error: false,
        data: res.data,
        message: res.message,
      };
    }
    return {
      error: true,
      data: [],
      message: res.message,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      data: [],
      message: "Error connecting to the server, please try again.",
    };
  }
};

const general = {
  getRequest,
  postRequest,
  deleteRequest
};

export default general;
