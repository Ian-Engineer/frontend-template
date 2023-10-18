import config from "../../config/index";

const login = async ({ email, password }) => {
  // define payload
  const payload = {
    email,
    password,
  };
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/login`, {
      method: "POST",
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

const cookieLogin = async () => {
  try {
    const res = await fetch(`${config.endpoint}/api/cookieLogin`, {
      method: "GET",
      headers: {"Content-Type": "application/json"},
      credentials: 'include'
    })
    .then(response => response.json())
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
  } catch (error) {
    console.log(error);
    return {
      error: true,
      data: {},
      message: "Error connecting to the server, please try again.",
    };
  }
};

const logout = async () => {
  try {
    const res = await fetch(`${config.endpoint}/api/logout`, {
      method: "DELETE",
      headers: {"Content-Type": "application/json"},
      credentials: 'include'
    })
    .then(response => response.json())
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
  } catch (error) {
    console.log(error);
    return {
      error: true,
      data: {},
      message: "Error connecting to the server, please try again.",
    };
  }
}

const requestPasswordReset = async ({email}) => {
  const payload = {
    email,
  };

  try {
    const res = await fetch(`${config.endpoint}/api/password_reset`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
      credentials: 'include',
    })
    .then(response => response.json())
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
  } catch (error) {
    console.log(error);
    return {
      error: true,
      data: {},
      message: "Error connecting to the server, please try again.",
    };
  }
}

const resetPassword = async ({ token, password }) => {
  const payload = {
    password
  };

  try {
    const res = await fetch(`${config.endpoint}/api/password_reset/${token}`, {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(payload),
      credentials: 'include',
    })
    .then(response => response.json())
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
  } catch (error) {
    console.log(error);
    return {
      error: true,
      data: {},
      message: "Error connecting to the server, please try again.",
    };
  }
}

const authentication = {
  login,
  signup,
  cookieLogin,
  logout,
  requestPasswordReset,
  resetPassword
};

export default authentication;
