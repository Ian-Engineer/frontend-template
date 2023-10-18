import config from "../../config/index";

const getAll = async () => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/category/all`, {
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

const getCategoryAudio = async ({ category, limit, offset, user }) => {
  // define payload
  const payload = {
    category,
    limit,
    offset,
    user_id: user.id
  };
  let url = `${config.endpoint}/api/category`;
  if (category === 'New') {
    url = `${config.endpoint}/api/category/recent`
  }
  if (category === 'Favorites') {
    url = `${config.endpoint}/api/category/favorites`
  }
  // fetch from url
  try {
    const res = await fetch(url, {
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

const getSubCategory = async ({category_id}) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/category/${category_id}`, {
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

const singleCategory = async ({category_id}) => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/category/single/${category_id}`, {
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
        data: res.data[0],
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

const getSubCategoryAudio = async ({category_id, subcategory_id, limit, offset}) => {
  // fetch from url 
  try {
    const res = await fetch(`${config.endpoint}/api/category/${category_id}/${subcategory_id}`, {
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

const getCategoryAudioById = async ({ category_id }) => {
  let url = `${config.endpoint}/api/category/audio/${category_id}`;
  // fetch from url
  try {
    const res = await fetch(url, {
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

const categories = {
  getAll,
  getCategoryAudio,
  getSubCategoryAudio,
  getSubCategory,
  singleCategory,
  getCategoryAudioById
};

export default categories;
