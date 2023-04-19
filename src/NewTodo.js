import "./App.css";

const NewTodo = () => {
  return (
    <div>
      <h1 style={{ paddingLeft: 20 }}>TODO新規作成</h1>
      <label>
        <input
          id="commentTitle"
          type="text"
          placeholder="タイトルを入力してください"
          style={{
            fontSize: 15,
            padding: 10,
            marginLeft: 20,
            width: "60%",
          }}
        ></input>
        <textarea
          id="todo"
          type="text"
          placeholder="内容を入力してください"
          style={{
            width: "60%",
            height: 200,
            marginTop: 20,
            fontSize: 15,
            marginLeft: 20,
            resize: "none",
          }}
        ></textarea>
      </label>

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
  );
};

export default NewTodo;
