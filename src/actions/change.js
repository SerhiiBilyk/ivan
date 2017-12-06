
import {
  CHANGE_TABINDEX,
  INCREMENT_COUNTER
} from '../constans';


export function rovingTabindex(index){
  return{
    type:CHANGE_TABINDEX,
    payload:{index}
  }
}
export function increment(index){
  return {
    type:INCREMENT_COUNTER,
    payload:index
  }
}
