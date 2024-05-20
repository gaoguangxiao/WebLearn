function Son(props) {
  console.log("props", props);
  return <div>this is son:{props.children}</div>;
}

function App() {
  // const name = "this is app name";
  return (
    <div>
      {/* <Son name={name}></Son> */}
      {/* 当我们将标签嵌套在子组件标签中，父组件会自动在名为children的props属性中接受内容 */}
      <Son>this is span</Son>
    </div>
  );
}

export default App;
