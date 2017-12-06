import {
  CHANGE_TABINDEX,
  INCREMENT_COUNTER
} from '../constans';
import {menu} from './menu.js';




/**
 * [deepFreeze description]
 * This function guarantees that my redux state is immutable, if I chenge it, it will throw mistake
 * @param  {[object]} o [only for my redux state]
 * @return {[object]}   [same object]
 */
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



const navigationReducer = function(state = menu, action) {

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
      case INCREMENT_COUNTER:{
          return {
            ...state,
              [action.payload]:{
                ...state[action.payload],
                counter:state[action.payload].counter+1
              }
          };
        }

      break;
    default:
      return state;
      break;
  }
}
export default navigationReducer;
