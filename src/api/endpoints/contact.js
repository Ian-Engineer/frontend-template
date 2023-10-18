import config from "../../config/index";

const sendMessage = async ({email, subject, message}) => {
  // define payload
  const payload = {email, subject, message};
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/contact`, {
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

const contact = {
  sendMessage,
};

export default contact;
