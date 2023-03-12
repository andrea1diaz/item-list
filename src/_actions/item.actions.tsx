import { ContentProps } from "../components/types";
import { itemConstants } from "../_constants";
import { itemService } from "../_services";

export const itemActions = {
    getAll,
    editTitle,
};

function getAll() {
    return (dispatch: (arg0: { type: string; items?: Array<ContentProps>; error?: any; }) => void) => {
        dispatch(request());

        itemService.getAll()
            .then(
                items => dispatch(success(items)),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: itemConstants.GETALL_REQUEST } }
    function success(items?: Array<ContentProps>) { return { type: itemConstants.GETALL_SUCCESS, items } }
    function failure(error: string) { return { type: itemConstants.GETALL_FAILURE, error } }
}

function editTitle(id: string, title: string) {
    return (dispatch: (arg0: { type: string; error?: any; }) => void) => {
        dispatch(request());

        itemService.editTitle(id, title)
            .then(
                sucess => dispatch(success()),
                error => dispatch(failure(error))
            );
    };

    function request() { return { type: itemConstants.GETALL_REQUEST } }
    function success() { return { type: itemConstants.GETALL_SUCCESS } }
    function failure(error: string) { return { type: itemConstants.GETALL_FAILURE, error } }
}