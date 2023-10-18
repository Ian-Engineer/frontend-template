import config from "../../config/index";

const getAllProducts = async () => {
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/payment/products`, {
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

const createSubscription = async ({priceId, customerId, email}) => {
  // define payload
  const payload = { priceId, customerId, email };
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/payment/create-subscription`, {
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

const getCustomer = async ({email}) => {
  // define payload
  const payload = { email };
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/payment/customer`, {
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

const getSubscription = async ({email, subscriptionId}) => {
  // define payload
  const payload = { email, subscriptionId };
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/payment/get-subscription`, {
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

const cancelSubscription = async ({email}) => {
  // define payload
  const payload = { email };
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/payment/cancel`, {
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

const reactivateSubscription = async ({email}) => {
  // define payload
  const payload = { email };
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/payment/reactivate`, {
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

const changeSubscription = async ({email, price_id}) => {
  // define payload
  const payload = { email, price_id };
  // fetch from url
  try {
    const res = await fetch(`${config.endpoint}/api/payment/change-subscription`, {
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

const stripe = {
  getAllProducts,
  createSubscription,
  getCustomer,
  getSubscription,
  cancelSubscription,
  reactivateSubscription,
  changeSubscription
};

export default stripe;
