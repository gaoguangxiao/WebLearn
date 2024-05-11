import React from "react";
import ReactDOM from "react-dom";

/**
 * 评论案例
 *
 * 
 * comments: [
      { id: 1, name: "jack", content: "沙发！！！" },
      { id: 2, name: "rose", content: "板凳~" },
      { id: 3, name: "tom", content: "猫爱吃鱼" },
    ],

 */
class App extends React.Component {
  state = {
    comments: [],
    userName:"",
    userContent:""
  };

  constructor() {
    super();
  }

  renderList() {
    return this.state.comments.length === 0 ? (
      <div className="no-comment">暂无评论，快去评论吧</div>
    ) : (
      <ul>
        {this.state.comments.map((item) => (
          <li key={item.id}>
            <h3>评论人：{item.name}</h3>
            <p>评论内容：{item.content}</p>
          </li>
        ))}
      </ul>
    );
  }

  handleClick = (e) => {
    const { comments, userName, userContent } = this.state;
    // console.log(userName,userContent);
    if (userName.trim() === "" || userContent.trim() === "") {
      alert("请输入评论人和评论内容");
      return;
    }
    // 在数组中插入一元素
    const newComments = [
      {
        id: Math.random(),
        name: userName,
        content: userContent,
      },
      ...comments,
    ];

    // console.log(newComments);

    // 情况文本框，
    this.setState({
      comments: newComments,
      userName: "",
      userContent: "",
    });
  };

  handleForm = (e) => {
    const { name, value } = e.target;
    // console.log("name", [name]);
    // console.log("value", value);
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { userName, userContent } = this.state;

    return (
      <div className="app">
        <div>
          <input
            className="user"
            type="text"
            placeholder="请输入评论人"
            value={userName}
            name="userName"
            onChange={this.handleForm}
          />
          <br />

          <textarea
            className="content"
            clos="30"
            rows="10"
            placeholder="请输入评论内容"
            value={userContent}
            name="userContent"
            onChange={this.handleForm}
          />
          <br />

          <button onClick={this.handleClick}>发表评论</button>
        </div>

        {/* 通过条件决定渲染何种内容 */}

        {/* 优化 */}
        {this.renderList()}

        {/* {this.state.comments.length === 0 ? (
          <div className="no-comment">暂无评论，快去评论吧</div>
        ) : (
          <ul>
            {this.state.comments.map((item) => (
              <li key={item.id}>
                <h3>评论人：{item.name}</h3>
                <p>评论内容：{item.content}</p>
              </li>
            ))}
          </ul>
        )} */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
