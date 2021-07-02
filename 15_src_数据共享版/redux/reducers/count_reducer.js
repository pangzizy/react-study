import { INCREMENT, DECREMENT } from '../constant'
const preStateInit = 0;
export default function countReducer(preState = preStateInit, action) {
    const { type, data } = action
    switch (type) {
        case INCREMENT:
            return preState + data;
        case DECREMENT:
            return preState - data;
        default:
            return preState
    }
}