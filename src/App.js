import "./App.css";
import React from "react";
import ContentArea from "./ContentArea";
import NewAreaButton from "./NewArea";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewTodo from "./NewTodo";
import { useNavigate } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<TextTop />} />
        <Route path={`/new/`} element={<NewTodo />} />
      </Routes>
    </BrowserRouter>
  );
};

function TextTop() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ paddingLeft: 20 }}>ToDo</h1>
      <ContentArea></ContentArea>
      <div style={{ textAlign: `right` }}>
        <button style={NewAreaButton} onClick={() => navigate("/new")}>
          新規作成
        </button>
      </div>
    </div>
  );
}

export default App;
