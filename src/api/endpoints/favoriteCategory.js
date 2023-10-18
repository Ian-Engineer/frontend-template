import config from "../../config/index";

const getAllFavs = async ({user_id}) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/favorite/category/${user_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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

const getFav = async ({user_id, item_id}) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/favorite/category/${user_id}/${item_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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

const saveFav = async ({user_id, item_id}) => {
  // define payload
  const payload = {user_id, audio_id: item_id};
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/favorite/category`, {
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

const deleteFav = async ({user_id, item_id}) => {
  // define payload
  const payload = {user_id, audio_id: item_id};
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/favorite/category`, {
      method: "DELETE",
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

const favoriteCategory = {
  getAllFavs,
  saveFav,
  deleteFav,
  getFav
};

export default favoriteCategory;
