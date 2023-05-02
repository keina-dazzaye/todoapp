import "./App.css";
import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const baseURL = "https://todoapp-web-api.herokuapp.com/todos";

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
  const navigate = useNavigate();
  const handleComplete = (id, complete) => {
    const data = { complete: !complete };
    axios
      .put("https://todoapp-web-api.herokuapp.com/todos/" + id, data)
      .then(() => {
        window.location.reload();
      });
  };
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response);

      setItemData(response.data.data);
    });
  }, []);

  const todoDelete = (id) => {
    axios
      .delete("https://todoapp-web-api.herokuapp.com/todos/" + id)
      .then(() => {
        window.location.reload();
      });
  };

  return (
    // リストレンダリング
    <div>
      {itemData.map((item) => {
        return (
          <div key={item.id} style={contaierStyle}>
            <input
              type="checkbox"
              id={item.id}
              checked={item.complete}
              onChange={() => handleComplete(item.id, item.complete)}
            />
            <label htmlFor={item.title}>{item.title}</label>
            <p style={{ paddingLeft: 20, marginTop: 3 }}>{item.contents}</p>
            <button
              style={buttonStyleOne}
              onClick={() => navigate("/update/" + item.id)}
            >
              更新
            </button>
            <button style={buttonStyleTwo} onClick={() => todoDelete(item.id)}>
              削除
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ContentArea;
