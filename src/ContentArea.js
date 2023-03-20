import "./App.css";
import React from "react";

const buttonStyleOne = {
  borderRadius: 10,
  borderColor: "#1e90ff",
  color: "white",
  fontSize: 15,
  width: 70,
  height: 40,
  backgroundColor: "#1e90ff",
  solid: "white",
  marginRight: 10,
};

const buttonStyleTwo = {
  borderRadius: 10,
  borderColor: "#red",
  borderColor: "red",
  color: "white",
  fontSize: 15,
  width: 70,
  height: 40,
  backgroundColor: "red",
  solid: "white",
};

const contaierStyle = {
  border: "solid 2px gray",
  margin: 20,
  padding: 10,
};
const ContentArea = () => {
  const [itemData, setItemData] = React.useState([
    { label: "タイトル１", checked: false },
    { label: "タイトル２", checked: false },
  ]);

  return (
    // リストレンダリング
    <div>
      {itemData.map((item) => {
        return (
          <div key={item.label} style={contaierStyle}>
            <input type="checkbox" id={item.label} value={item.label} />
            <label htmlFor={item.label}>{item.label}</label>
            <p style={{ paddingLeft: 20, marginTop: 3 }}>
              ここにTODOの内容が表示されています
            </p>
            <button style={buttonStyleOne}>更新</button>
            <button style={buttonStyleTwo}>削除</button>
          </div>
        );
      })}
    </div>
  );
};
export default ContentArea;
