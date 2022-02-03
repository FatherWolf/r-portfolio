import React from "react";
import { useState } from "react";
import { validateEmail } from "../../helpers/helpers";


const Contact = () => {
  const [focused, setFocused] = useState(false);

  const handleFocus = (e) => {
    e.target(setFocused(true));
  };
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'comment') {
      setComment(inputValue)
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('try again');
      return;
    } else {
      setErrorMessage('');
    }

    setName('');
    setComment('');
    setEmail('');
  };

  return (
    <div className="row justify-content-center align-items-center text-center col-11 col-lg-6 m-auto">
      <form className="container col-12 col-lg-9 bg-dark m-2 p-5 rounded-3">
        <div>
          <h4
            className="text-light">name :</h4>
          <input
            className="text-dark col-10 fs-5 p-3"
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Full Name"
            onBlur={handleFocus}
            focused={focused.toString()}
            required
            minLength={2}
          />
          <span className="error">{name.length > 0 ? 'please enter a valid name' : ' '}</span>
        </div>
        <div>
          <h4 className="text-light mt-4">email :</h4>
          <input
            className="text-dark col-10 fs-5 p-3"
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="email"
            onBlur={handleFocus}
            focused={focused.toString()}
            required
          />
          <span className="error">{email.length > 0 ? 'please enter a valid email' : ' '}</span>
        </div>
        <div>
          <h4 className="text-light mt-4">comment :</h4>
          <textarea
            rows="3"
            className="text-dark col-10 fs-5 p-3"
            value={comment}
            name="comment"
            onChange={handleInputChange}
            type="text"
            placeholder="add comment here"
            onBlur={handleFocus}
            focused={focused.toString()}
            required
            minLength={2}
          />
          <span className="error">{comment.length > 0 ? 'please enter a valid comment' : ' '}</span>
        </div>
        <div>
          <button
            className="col-6 btn btn-info btn-md"
            type="button"
            onClick={handleFormSubmit}
            onChange={handleInputChange}
          >
            Submit
          </button>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text text-info">{errorMessage}</p>
          </div>
        )}
      </form>

    </div>
  );
};

export default Contact;