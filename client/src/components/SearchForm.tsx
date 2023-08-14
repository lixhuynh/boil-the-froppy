import { useState } from "react";

function SearchForm() {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [content, setContent] = useState("");

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    async function postData() {
      const params = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ okay: "value" }),
      };
      try {
        const res = await fetch("/api", params);
        const resData = await res.json();
        console.log(resData);
        setContentLoaded(true);
      } catch (error) {
        throw error;
      }
    }

    postData();
  }

  return (
    <form onSubmit={submitForm}>
      <input
        value={content}
        onChange={(val) => setContent(val.target.value)}
        type="text"
        placeholder="Enter something"
      />
      <button type="submit" className="btn">
        Submit
      </button>
      <div>{content}</div>
    </form>
  );
}

export default SearchForm;
