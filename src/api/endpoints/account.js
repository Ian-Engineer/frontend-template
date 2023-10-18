import config from "../../config/index";

const get = async () => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/...`, {
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

const changePassword = async ({email, password, newPassword}) => {
  // define payload
  const payload = {email, password, newPassword};
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/account/change-password`, {
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

const changeEmail = async ({email, password, newEmail}) => {
  // define payload
  const payload = {email, password, newEmail};
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/account/change-email`, {
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

const updateAutoPlay = async ({id, autoPlay}) => {
  // define payload
  const payload = {id, autoPlay};
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/account/update-auto-play`, {
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


const account = {
  changePassword,
  changeEmail,
  updateAutoPlay
};

export default account;
