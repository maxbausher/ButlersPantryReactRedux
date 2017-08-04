import axios from "axios";
import cors from "cors";

const BACKEND_URL = "http://localhost:3000";

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";

export function fetchProducts(keyword, category) {
  const url =
    BACKEND_URL + "/amazon?keyword=" + keyword + "&category=" + category;
  const request = axios.get(url);

  console.log("PRODUCTS request made", request);

  return {
    type: FETCH_PRODUCTS,
    payload: request
  };
}

export const FETCH_EVENTS = "FETCH_EVENTFUL";

export function fetchEvents(location, category) {
  const url =
    BACKEND_URL + "/eventful?&location=" + location + "&category=" + category;
  console.log(url);
  const request = axios.get(url);
  console.log(request);

  return {
    type: FETCH_EVENTS,
    payload: request
  };
}
