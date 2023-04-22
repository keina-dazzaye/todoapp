import { BrowserRouter } from "react-router-dom";
import "./App.css";
import axios, { toFormData } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTodo() {
  const navigate = useNavigate();
  const [commentTitle, setCommentTitle] = useState("");
  const [todo, setTodo] = useState("");

  const handleSubmit = () => {
    const data = { title: commentTitle, contents: todo, complete: false };
    axios.post("https://todoapp-web-api.herokuapp.com/todos", data);
    navigate("/");
  };

  return (
    <div style={{ width: "60%", paddingRight: 10, marginLeft: 20 }}>
      <h1>TODO新規作成</h1>

      <div>
        <input
          value={commentTitle}
          onChange={(e) => setCommentTitle(e.target.value)}
          type="text"
          placeholder="タイトルを入力してください"
          style={{
            fontSize: 15,
            padding: 10,
            width: "100%",
          }}
        ></input>
        <textarea
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
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
      </div>

      <div style={{ textAlign: "right", width: "100%", marginLeft: 20 }}>
        <button
          onClick={() => handleSubmit()}
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
}

export default NewTodo;
