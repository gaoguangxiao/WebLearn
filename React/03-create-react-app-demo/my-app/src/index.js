// 1、导入react
import React from 'react'
import ReactDOM from 'react-dom'

// 2、创建react元素
const title = React.createElement('h1',null,'Hello React !')

ReactDOM.render(title,document.getElementById('root'))