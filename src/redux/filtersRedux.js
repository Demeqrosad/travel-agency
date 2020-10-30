/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
export const ADD_TAG_FILTER = createActionName('ADD_TAG_FILTER');
export const REMOVE_TAG_FILTER = createActionName('REMOVE_TAG_FILTER');
export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
// TODO - add other action types

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
export const addTagFilter = payload => ({ payload, type: ADD_TAG_FILTER});
export const removeTagFilter = payload => ({ payload, type: REMOVE_TAG_FILTER});
export const changeDuration = payload => ({ payload, type: CHANGE_DURATION });
// TODO - add other action creators

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case ADD_TAG_FILTER:
      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
      };
    case REMOVE_TAG_FILTER:
      return {
        ...statePart,
        tags: [...statePart.tags.filter(tag => tag !== action.payload)],
      };
    case CHANGE_DURATION:
      return {
        ...statePart,
        duration: {...statePart.duration, [action.payload.type]: action.payload.value},
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}
