import {
  CHANGE_TABINDEX
} from '../constans';
import {menu} from './menu.js';





function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function(prop) {
    if (o.hasOwnProperty(prop) && o[prop] !== null && (typeof o[prop] === "object" || typeof o[prop] === "function") && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  return o;
};


// /https://codepen.io/SerhiiBIlyk/pen/eeLObL?editors=0012

export const initialState = {
  menu:menu
}

const navigationReducer = function(state = initialState, action) {
  var freeze = deepFreeze(state);
  switch (action.type) {
    case CHANGE_TABINDEX:
      {
        var {index} = action.payload;
        return {
          ...state,
          tree:{
            ...reset,
            [index]:{
              ...state.tree[index],
              tabindex:0
            }
          }
        }
      }
      break;
    default:
      return state;
      break;
  }
}
export default navigationReducer;
