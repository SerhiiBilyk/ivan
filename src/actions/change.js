
import {
  CHANGE_TABINDEX
} from '../constans';


export function rovingTabindex(index){
  return{
    type:CHANGE_TABINDEX,
    payload:{index}
  }
}
