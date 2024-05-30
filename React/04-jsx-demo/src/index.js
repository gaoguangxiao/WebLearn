import React from 'react';
import ReactDOM from 'react-dom'
import './css/index.css'
// JSX使用JavaScript表达式
const name = 'Jack'

// 函数调用表达式
const sayHi = () => 'Hi~'

// 标签表达式
const dv = <div>我是一个div</div>

const title = (
  <h1 className ='title'>
    Hello, {name} 
    <p>{1}</p>
    <p>{1 + 7}</p>
    <p>{10 > 5 ? '大于' : '小于'}</p>
    <p>{sayHi()}</p>
    <p>{dv}</p>
    <span />
  </h1>
)

const loading = true
const loadData = () => {
  if (loading) {
    return <div>loading...</div>
  }
  return <div>数据加载完成，此处系那是加载后的数据</div>
}

// 三元运算符
// const loadData = () => {
//   return loading? <div>loading...</div>: <div>数据加载完成，此处系那是加载后的数据</div>
// }
// 
// const rDiv = (
//   <h1>
//     条件渲染,
//     {loadData()}
//   </h1>
// )

// JSX的数组渲染
// const songs = [
//   {id:1,name:'痴心对决'},
//   {id:2,name:'像我这样的人'},
//   {id:3,name:'南山南'}
// ]
// const list = (
//   <ul>
//     {songs.map( item=> <li key={item.id}> {item.name}</li>)}
//   </ul>
// )
// ReactDOM.render(list,document.getElementById('root'))


// JSX的样式处理

// 行内样式的处理
// const styleInLearn = (
//   <h1 style={{color:'red',background:'skyblue'}}>
//    JSX的行内样式的处理
//   </h1>
// )
// ReactDOM.render(styleInLearn,document.getElementById('root'))

// 类名方式
const styleClassLearn = (
  <h1 className='leartAlign' style={{color:'orange',background:'skyblue'}}>
   JSX的样式处理之类名方式
  </h1>
)
ReactDOM.render(styleClassLearn,document.getElementById('root'))
