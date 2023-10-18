import config from "../../config/index";

const getAllFavs = async ({user_id}) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/favorite/audio/${user_id}`, {
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


const favoriteAudio = {
  getAllFavs
};

export default favoriteAudio;
