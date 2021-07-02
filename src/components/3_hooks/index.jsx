import React, { useState } from 'react'
import ReactDOM from 'react-dom'


// class Demo extends React.Component {

//     MyRef = React.createRef()

//     alerts = () => {
//         alert(this.MyRef.current.value)
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.MyRef} />
//                 <button onClick={this.alerts}>点我alert</button>
//             </div>
//         )
//     }
// }


function Demo() {
    const [count, setCount] = useState(0)
    const MyRef = React.useRef()

    React.useEffect(() => {
        let timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000);
        return () => {
            clearInterval(timer)
        }
    }, [])

    function add() {
        setCount(count + 1)
        // setCount(count => count + 1)
    }

    function deletes() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function showText(){
        alert(MyRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={MyRef} />
            <h4>当前求和为：{count}</h4>
            <button onClick={add}>点我加一</button>
            <button onClick={deletes}>卸载组件</button>
            <button onClick={showText}>提示输入的文字</button>
        </div>
    )
}

export default Demo