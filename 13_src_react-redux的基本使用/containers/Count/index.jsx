import CountUI from '../../components/Count'  //引入count的UI组件

import { createIncrementAction, createDecrementAction,createIncrementAsyncAction } from '../../redux/count_action' //引入action


import { connect } from 'react-redux'

/** 1、mapStateToProps  返回的是一个对象
 *  2、返回对象的key作为传递给UI组件props的key,value 作为传递给UI组件props的value
 *  1、mapStateToProps 用于传递状态
 **/

function mapStateToProps(state) {
    return { count: state }
}

/** mapDispatchToProps  返回的是一个对象
 *  2、返回对象的key作为传递给UI组件props的key,value 作为传递给UI组件props的value
 *  1、mapStateToProps 用于传递操作状态的方法
 **/
function mapDispatchToProps(dispatch) {
    return {
        jia: number => dispatch(createIncrementAction(number)),
        jian: number => dispatch(createDecrementAction(number)),
        jiaAsync:(number,time) => dispatch(createIncrementAsyncAction(number,time))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

