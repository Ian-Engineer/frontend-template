import config from "../../config/index";

const signup = async ({ firstName, lastName, email, password }) => {
  // define payload
  const payload = {
    email,
    password,
    firstName,
    lastName,
  };
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/signup`, {
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
      data: {},
      message: res.message,
    };
  } catch (err) {
    console.log(err);
    return {
      error: true,
      data: {},
      message: "Error connecting to the server, please try again.",
    };
  }
};

const authentication = {
  signup,
};

export default authentication;
