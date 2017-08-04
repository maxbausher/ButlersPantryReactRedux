import { FETCH_EVENTS } from "../actions/index";

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
    throw `The error was: ${new Error(action.payload)}`

    // switch (action.payload) {
      // Error handling code.
    // }
  }

  switch (action.type) {
    case FETCH_EVENTS: {

      let events;
      const data = action.payload.data;
      console.log(data);

      if (data) {
        events = data.events.event.map((event) => {

          return {
            venue: event.venue_name,
            id: event.id,
            title: event.title,
            description: event.description,
            url: event.url,
          }
        });
      } else {
        event = { error: 'payload invalid.' };
      }

      return [...events, ...state]
    }
  }

  return state;
}
