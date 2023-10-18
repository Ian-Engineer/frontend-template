import authentication from "./endpoints/authentication";
import categories from "./endpoints/categories"
import search from "./endpoints/search";
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
    stripe,
    account,
    favoriteAudio,
    favoriteCategory,
    audio,
    ...general
};

export default api;
