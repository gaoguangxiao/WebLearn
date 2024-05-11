import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 函数组件
 * 
*/
// 1、组件名称必须以大写字母开头，React据此区分组件和普通React元素
// 2、函数组件必须有返回值

function Hello() {
  return (
    <div>这是我的第一个div组件</div>
  )
}
ReactDOM.render(<Hello />,document.getElementById('root'))

// 箭头函数
// const Hello = () =>  <div>这是我的第一个div组件</div>
// ReactDOM.render(<Hello/>,document.getElementById('root'))