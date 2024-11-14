import TempToggle from "./TempToggle.jsx";
import "../styles/Header.css";

function Header({ onLocationSubmit, isCelsius, onHandleToggle }) {
  return (
    <div className="header">
      <h1>WeathApp</h1>
      <div className="formContainer">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const result = document.querySelector("#search").value;
            onLocationSubmit(result);
          }}
          className="form"
        >
          <input
            id="search"
            type="text"
            className="input"
            placeholder="search City"
          ></input>
        </form>
        <TempToggle onHandleToggle={onHandleToggle} isCelsius={isCelsius} />
      </div>
    </div>
  );
}

export default Header;
