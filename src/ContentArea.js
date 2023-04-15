import "./App.css";
import React from "react";
import axios from "axios";
const baseURL = "https://todoapp-hk.microcms.io/api/v1/todo";

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
  const [itemData, setItemData] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(baseURL, {
        headers: {
          "X-MICROCMS-API-KEY": "TIFIkL1zBnkC3wngj8rjeqOt8hnzdCl0cSL0",
        },
      })
      .then((response) => {
        setItemData(response.data.contents);
      });
  }, []);

  return (
    // リストレンダリング
    <div>
      {itemData.map((item) => {
        return (
          <div key={item.id} style={contaierStyle}>
            <input type="checkbox" id={item.id} checked={item.complete} />
            <label htmlFor={item.title}>{item.title}</label>
            <p style={{ paddingLeft: 20, marginTop: 3 }}>{item.contents}</p>
            <button style={buttonStyleOne}>更新</button>
            <button style={buttonStyleTwo}>削除</button>
          </div>
        );
      })}
    </div>
  );
};
export default ContentArea;
