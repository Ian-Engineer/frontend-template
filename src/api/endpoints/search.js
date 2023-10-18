import config from "../../config/index";

const get = async () => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/...`, {
      method: "POST",
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

const searchAudio = async ({searchText, category, signal, limit, offset}) => {
  // define payload
  const payload = {
    limit,
    offset,
    category,
    searchText
  };
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/search/audio`, {
      method: "POST",
      signal: signal,
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
    return {
      error: true,
      data: [],
      message: "Error connecting to the server, please try again.",
    };
  }
};

const search = {
  get,
  searchAudio,
};

export default search;
