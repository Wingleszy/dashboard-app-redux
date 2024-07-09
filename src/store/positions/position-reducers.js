import { ADD_POSITIONS } from "./position-actions";

export const positionReducer = (state = [], aciton) => {
    switch (aciton.type) {
        case ADD_POSITIONS: {
            return aciton.positions
        }
        default: {
            return state
        }
    }
}