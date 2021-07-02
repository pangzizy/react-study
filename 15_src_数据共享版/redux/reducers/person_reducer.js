import { ADD_PERSON } from '../constant'

const initState = [
    {
        id: '001',
        name: 'Tom',
        age: 19
    }
]
export default function personAction(preState = initState, action) {
    const { type, data } = action;
    switch (type) {
        case ADD_PERSON:
            return [data, ...preState]
        default:
            return preState
    }
}