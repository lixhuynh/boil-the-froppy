import React, { useState } from "react";

const Prototype: React.FC = () => {
  const [data, setData] = useState("");

  const postData = async () => {
    const url = "/api";
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: "value" }), // Your data to be sent
    };

    try {
      const response = await fetch(url, requestOptions);
      const responseData = await response.json();
      setData(responseData.message); // Assuming the response has a "message" property
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <button onClick={postData}>Make POST Request</button>
      <p>Response: {data}</p>
    </div>
  );
};

export default Prototype;
