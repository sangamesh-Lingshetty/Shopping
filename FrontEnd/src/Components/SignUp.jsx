import { Form, useNavigate } from "react-router-dom";
import React, { useRef } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const formRef = useRef(null);
  const navigate = useNavigate();


  const SignUpPage = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
   
    formRef.current.reset();
    navigate('/',{state:data});
    toast.success("signup succesfully")
  };

  return (
    <div className="signup">
      <Form ref={formRef} className="form" method="POST" onSubmit={SignUpPage} action="">
        <div className="signin">
          <h1>Sign Up</h1>
          <div className="name">
            <label>Name</label>
            <input name="name" type="text" placeholder="name" required />
          </div>
          <div className="name">
            <label>Last name</label>
            <input name="lastname" type="text" placeholder="Last name" required />
          </div>
          <div className="name">
            <label>Email</label>
            <input name="email" type="email" placeholder="Email" required />
          </div>
          <div className="name">
            <label>Password</label>
            <input name="password" type="password" placeholder="password" required />
          </div>
          <h6>Sign here ?</h6>
        </div>
        <input type="submit" className="btn btn-primary" />
      </Form>
    </div>
  );
};

export default SignUp;
