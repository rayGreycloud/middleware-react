// Middleware boilerplate
export default ({ dispatch }) => next => action => {
  // check if action has promise on payload
  if (!action.payload || !action.payload.then) {
    // If none, send action to next middleware
    return next(action);
  }
  // If promise, wait to resolve
  action.payload.then(function(response) {
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};

// Long version
// export default function({ dispatch }) {
//   function(next) {
//     function(action) {
//
//     }
//   }
// }
