import { IActionBasic } from '../searchAddBar/actions';

function mainReducer(state: object[], action: IActionBasic<string>): object[] {
   switch(action.type) {
      case "ADD": {
         return [
            ...state,
            {
               done: false,
               todoText:action.payload
            }
         ]
      }
      default: return state;
   }
}

export default mainReducer;