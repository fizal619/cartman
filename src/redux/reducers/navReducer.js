const initialState = {
  currentPage: 'anime'
}

export default function navReducer(state = initialState, action) {
  switch (action.type) {
    case 'NAV::CHANGE':
      return {...state,
        currentPage: action.value
      }
    default:
      return state;
  }
}