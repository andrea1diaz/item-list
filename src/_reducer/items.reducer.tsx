import { itemConstants } from "../_constants";

export function items (state = {}, action: any) {
  switch (action.type) {
    case itemConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case itemConstants.GETALL_SUCCESS:
      return {
        data: action.items
      };
    case itemConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case itemConstants.PUTTITLE_REQUEST:
      return {
        loading: true
      };
    case itemConstants.PUTTITLE_SUCCESS:
      return {
        succes: true
      };
    case itemConstants.PUTTITLE_FAILURE:
      return { 
        error: action.error
      };
    default:
        return state
    }
}