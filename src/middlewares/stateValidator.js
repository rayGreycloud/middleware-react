import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
  // Send action to reducers first, which update state
  next(action);

  // Get state from redux store with getState()
  // Validate against the schema
  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid state schema detected');
  }
};
