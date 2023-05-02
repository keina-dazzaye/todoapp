import "./App.css";
import "./ContentArea";
import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ContentArea from "./ContentArea";
import { commentTitle, todo } from "./NewTodo";
import { useParams } from "react-router-dom";

const UpdateTodo = () => {
  const { id } = useParams();
  console.log(id);
  const [commentTitle, setCommentTitle] = useState("");
  const [todo, setTodo] = useState("");
  const [beforeTitle, setBeforeTitle] = useState("");
  const navigate = useNavigate();
  const fetchTodo = (id) => {
    axios
      .get("https://todoapp-web-api.herokuapp.com/todos/" + id)
      .then((response) => {
        console.log(response);
        setCommentTitle(response.data.data.title);
        setTodo(response.data.data.contents);
        setBeforeTitle(response.data.data.title);
      });
  };

  React.useEffect(() => {
    fetchTodo(id);
  }, []);

  const handleSubmit = () => {
    const data = { title: commentTitle, contents: todo };
    axios
      .put("https://todoapp-web-api.herokuapp.com/todos/" + id, data)
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div style={{ width: "60%", paddingRight: 10, marginLeft: 20 }}>
      <h1>{beforeTitle}</h1>

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
};

export default UpdateTodo;
