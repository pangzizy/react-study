import CountUI from '../../components/Count'  //引入count的UI组件

import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/actions/count_action' //引入action


import { connect } from 'react-redux'

// 映射状态
// const mapStateToProps = state => ({ count: state })


// 映射操作状态的方法
// const mapDispatchToProps = dispatch => (
//     {
//         jia: number => dispatch(createIncrementAction(number)),
//         jian: number => dispatch(createDecrementAction(number)),
//         jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
//     }
// )


export default connect(
    state => ({ count: state }),

    // mapDispatchToProps的一般写法
    // dispatch => ({
    //     jia: number => dispatch(createIncrementAction(number)),
    //     jian: number => dispatch(createDecrementAction(number)),
    //     jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    // })

    // mapDispatchToProps的简写
    {
        jia:createIncrementAction,
        jian:createDecrementAction,
        jiaAsync:createIncrementAsyncAction

    }
)(CountUI)

