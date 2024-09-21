import React, { useState } from "react";
import axios from "axios";

const ChatGPT = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;
  const api = axios.create({
    baseURL: apiUrl,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/api/chatgpt", {
        message: input,
      });

      // Set the response from the backend (ChatGPT)
      setResponse(res.data.response);
    } catch (error) {
      console.error("Error:", error);
      setResponse("Error fetching the response.");
    }

    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>ChatGPT Model: gpt-4o-mini</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message here..."
          className="App-textarea"
          style={{ height: "120px" }}
        />
        <br />
        <button type="submit" disabled={loading} className="App-button">
          {loading ? "Loading..." : "Send"}
        </button>
      </form>
      <div style={{ marginTop: "50px" }}>
        <h3>Response:</h3>
        <textarea
          value={response}
          readOnly={true}
          placeholder="Show ChatGPT response here..."
          className="App-textarea"
          style={{ height: "200px" }}
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <b>About</b>
        <p>
          This app is built to demonstrate OpenAI Integration by using React +
          Flask stack.
        </p>
      </div>
      <footer>Developed by Matt Wang @ 2024</footer>
    </div>
  );
};

export default ChatGPT;
