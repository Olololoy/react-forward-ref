import { FormEventHandler, forwardRef } from "react";

const Form2 = ({ handleSubmit, name, setName, inputRef }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input
        type="text"
        ref={inputRef}
        name="name"
        id="name"
        value={name}
        onInput={(e) => setName(e.currentTarget.value)}
      />
      <input type="submit" />
    </form>
  );
};
export default Form2;
