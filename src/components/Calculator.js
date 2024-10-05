import React from "react";
import { useState } from "react";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [error, setError] = useState(false);
  const[isClicked,setIsClicked]=useState(false)
  const [errorValue, setErrorValue] = useState("Num1");
  const [answer, setAnswer] = useState("");
  const handleOnClick = (e) => {
    console.log(isClicked)
    setIsClicked(true)
    var operator = e.target.value;

    if (!input1) {
        setIsClicked(false)
      setErrorValue("Num1");
      setAnswer("");
    } else if(!input2) {
        setIsClicked(false)
      setErrorValue("Num2");
      setAnswer("");
    }

    function validate(input) {
      input = parseFloat(input);
      if (input) return true;
      else return false;
    }
    console.log(!(validate(input1) && validate(input2)),"erorr value")
    console.log(isClicked,"is clicked value")
    setError(!(validate(input1) && validate(input2)))

    if (validate(input1) && validate(input2)) {
        console.log(validate(input1) && validate(input2),"check")
      if (operator === "+") {
        setAnswer(parseFloat(input1) + parseFloat(input2));
      }
      if (operator === "-") {
        setAnswer(parseFloat(input1) - parseFloat(input2));
      }
      if (operator === "*") {
        setAnswer(parseFloat(input1) * parseFloat(input2));
      }
      if (operator === "/") {
        setAnswer(parseFloat(input1) / parseFloat(input2));
      }
    }
  };
  return (
    <div className="calculator">
      <div className="container">
        <h1 className="heading">React Calculator</h1>
        <input
          className="input"
          type="text"
          value={input1}
          placeholder="Num1"
          onChange={(e) => setInput1(e.target.value)}
        />
        <br />
        <input
          className="input"
          type="text"
          value={input2}
          placeholder="Num2"
          onChange={(e) => setInput2(e.target.value)}
        />
        <div className="buttons">
          <button className="btn" value="+" onClick={handleOnClick}>
            +
          </button>
          <button className="btn" value="-" onClick={handleOnClick}>
            -
          </button>
          <button className="btn" value="*" onClick={handleOnClick}>
            *
          </button>
          <button className="btn" value="/" onClick={handleOnClick}>
            /
          </button>
        </div>
        
        {answer.toString() && <div className="ans">Result={answer}</div>}

        {!error && isClicked && <div className="success">Success : Your result is shown above!</div>}

        {error && !isClicked && <div className="error">Error :  {errorValue} cannot be empty</div>}

         
      </div> 
    </div>
  );
};

export default Calculator;
