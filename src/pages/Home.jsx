import React, {CSSProperties} from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./../styles/home.css";
import Select from "react-select";

const Home = () => {


console.log(Select)

const handleChange = (selectedOption) => {
  // setSelected(selectedOption);
  console.log(`Option selected:`, selectedOption);
};

  
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div className="home">
      <nav className="nav">
        <img src="" alt="" className="nav__img" />
        <div className="nav__search">
          <Select className="nav__select" options={options} onChange={handleChange} defaultValue={'vanilla'}/>
        </div>
      </nav>
    </div>
  );
};

export default Home;
