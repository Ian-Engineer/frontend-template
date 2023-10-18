import authentication from "./endpoints/authentication";
import categories from "./endpoints/categories"
import search from "./endpoints/search";
import contact from "./endpoints/contact";
import stripe from "./endpoints/stripe";
import account from "./endpoints/account";
import favoriteAudio from "./endpoints/favoriteAudio";
import favoriteCategory from "./endpoints/favoriteCategory";
import audio from "./endpoints/audio";
import general from "./endpoints/general";

const api = {
    authentication,
    categories,
    search,
    contact,
    stripe,
    account,
    favoriteAudio,
    favoriteCategory,
    audio,
    ...general
};

export default api;
