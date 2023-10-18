import config from "../../config/index";

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
  updateAutoPlay
};

export default account;
