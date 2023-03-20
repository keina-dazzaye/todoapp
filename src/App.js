import "./App.css";
import React from "react";
import ContentArea from "./ContentArea";
import NewAreaButton from "./NewArea";
function textTop() {
  return (
    <div>
      <h1 style={{ paddingLeft: 20 }}>ToDo</h1>
      <ContentArea></ContentArea>
      <div style={{ textAlign: `right` }}>
        <button style={NewAreaButton}>新規作成</button>
      </div>
    </div>
  );
}

export default textTop;
