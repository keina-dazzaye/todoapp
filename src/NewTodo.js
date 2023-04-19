import { BrowserRouter } from "react-router-dom";
import "./App.css";

const NewTodo = () => {
  return (
    <div style={{ width: "60%", paddingRight: 10, marginLeft: 20 }}>
      <h1>TODO新規作成</h1>

      <input
        id="commentTitle"
        type="text"
        placeholder="タイトルを入力してください"
        style={{
          fontSize: 15,
          padding: 10,
          width: "100%",
        }}
      ></input>

      <textarea
        id="todo"
        type="text"
        placeholder="内容を入力してください"
        style={{
          width: "100%",
          height: 200,
          marginTop: 20,
          fontSize: 15,
          resize: "none",
          padding: 10,
        }}
      ></textarea>

      <div style={{ textAlign: "right", width: "100%", marginLeft: 20 }}>
        <button
          style={{
            borderRadius: 10,
            borderColor: "#1e90ff",
            color: "white",
            fontSize: 15,
            width: 70,
            height: 40,
            backgroundColor: "#1e90ff",
            solid: "white",
            marginTop: 20,
          }}
        >
          登録
        </button>
      </div>
    </div>
  );
};

export default NewTodo;
