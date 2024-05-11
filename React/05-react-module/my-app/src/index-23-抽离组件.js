import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 抽离组件到独立的JS文件
 * 
*/

// 创建xxx.js
// 在xxx.js导入React
// 创建类/函数组件
// 在xxx.js导出改组件 export
// 在指定文件导入组件
// 渲染组件

// 导入Hello组件
import Hello from './Hello';

// 渲染
ReactDOM.render(<Hello/>,document.getElementById('root'))