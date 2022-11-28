import { useState } from "react";
import "./styles.css";

const options = [
  { value: "", text: "--Choose an option--" },
  { value: "apple", text: "Apple 🍏" },
  { value: "banana", text: "Banana 🍌" },
  { value: "kiwi", text: "Kiwi 🥝" }
];
export default function App() {
  const [select, setSelected] = useState(options[0].value);

  const handleOnChange = (event) => {
    setSelected(event.target.value);
  };

  const handleOnClick = (event) => {
    event.preventDefault();
    console.log(select);
  };

  return (
    <div className="App">
      <select name="select" value={select} onChange={handleOnChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>

      <button onClick={handleOnClick}>Save</button>
    </div>
  );
}
