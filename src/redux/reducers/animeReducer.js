const initialState = {
  item: null,
  link: null
}

export default function animeReducer(state = initialState, action) {
  switch (action.type) {
    case 'ANIME::ITEM':
      return {...state,
        item: action.value
      }

    case 'ANIME::GET':
      return {...state,
        link: action.value
      }

    default:
      return state;
  }
}