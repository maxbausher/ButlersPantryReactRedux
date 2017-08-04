import { FETCH_PRODUCTS } from "../actions/index";

const initalState = [
  // {
  //   image_url: null,
  //   description: null,
  //   // ...
  // }
];

export default function(state = initalState, action) {
  // Dont mutate state. We can make a new object with the payload.

  // Make sure to catch your errors and handle accordingly.
  if (action.error) {
    // #TODO: Remove this line once errors are handled.
    throw `The error was: ${new Error(action.payload)}`;

    // switch (action.payload) {
    // Error handling code.
    // }
  }

  switch (action.type) {
    case FETCH_PRODUCTS: {
      let products;
      const data = action.payload.data.ItemSearchResponse;
      console.log(data);

      if (data) {
        products = data.Items.Item.map(product => {
          let image_url;

          if (
            product &&
            product.ImageSets &&
            typeof product.ImageSets.ImageSet.length === "undefined"
          ) {
            // single image object returned,
            // not wrapped in an array (nice one Amazon)
            image_url = product.ImageSets.ImageSet.MediumImage.URL || null;
          } else if (
            product.ImageSets &&
            product.ImageSets.ImageSet[0].MediumImage
          ) {
            image_url = product.ImageSets.ImageSet[0].MediumImage.URL || null;
          } else {
            image_url = ""; // placeholder image?
          }

          return {
            image_url,
            id: product.ASIN,
            title: product.ItemAttributes.Title,
            url: product.DetailPageURL
          };
        });
      } else {
        products = { error: "payload invalid." };
      }

      return [...products, ...state];
    }
  }

  return state;
}
