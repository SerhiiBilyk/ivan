import {
  DROPDOWN_STATE,
  RESET_STATE
} from '../constans';

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
const initialState={
  collapsed: true,
  initial:false
}
const navigationReducer = function(state = initialState, action) {
  /*

   */
  var freeze = deepFreeze(state);
  switch (action.type) {
    case DROPDOWN_STATE:
      return {
        ...state,
        collapsed: !state.collapsed,
        initial:true
      }
      break;
      case RESET_STATE:
      return{
        ...state,
        collapsed: true,
        initial: false
      }
    default:
      return state;
      break;
  }
}
export default navigationReducer;
