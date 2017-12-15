
import {
  DROPDOWN_STATE,
  RESET_STATE
} from '../constans';


export function changeDropdownState(){
  return{
    type:  DROPDOWN_STATE
  }
}
export function resetDropdownState(){
  return{
    type:  RESET_STATE
  }
}
