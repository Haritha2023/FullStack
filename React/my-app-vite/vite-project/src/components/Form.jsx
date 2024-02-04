import { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  function handleFirstChange(event) {
    // console.log(event.target.value);
    setFirstName(event.target.value);
  }
  function handleLastChange(event) {
    // console.log(event.target.value);
    setLastName(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log({ FirstName: firstName, LastName: lastName });
  }
  return (
    <div>
      <form>
        <input type="text" value={firstName} onChange={handleFirstChange} />
        <input type="text" value={lastName} onChange={handleLastChange} />

        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default Form;
