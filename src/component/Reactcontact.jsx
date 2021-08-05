import React, { useState } from "react";
import "./Reactcontact.css";

const Reactcontact = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { fname, lname, email, phone, address, message } = user;
    if( fname && lname && email && phone && address && message) {
    const data = await fetch(
      "https://reactcontactform-4ee81-default-rtdb.firebaseio.com/reactcontactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "appliaction/json",
        },
        body: JSON.stringify({
          fname,
          lname,
          email,
          phone,
          address,
          message,
        }),
      }
    );
    if (data) {
      setUser({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        address: "",
        message: "",
      });
      alert("Successfull");
    }
}
else {
    return alert("Please fill all input fields.");
}
  };
  return (
    <>
      <div className="main-container">
        <div className="contact-us">
          <h1>Contact Us</h1>
          <form method="POST">
            <div className="row">
              <div className="col">
                <label>Firstname</label>
                <input
                  type="text"
                  className="form-control"
                  name="fname"
                  value={user.fname}
                  onChange={getUserData}
                  placeholder="Enter your first name"
                  required
                />
                <label>Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={user.email}
                  onChange={getUserData}
                  placeholder="Enter your Email Address"
                  required
                />
                <label>Address</label>
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  value={user.address}
                  onChange={getUserData}
                  placeholder="Enter your Address"
                  required
                />
                <button className="btn btn-success mt-4" onClick={postData}>
                  Submit
                </button>
              </div>
              <div className="col">
                <label>Lastname</label>
                <input
                  type="text"
                  className="form-control"
                  name="lname"
                  value={user.lname}
                  onChange={getUserData}
                  placeholder="Enter your last name"
                  required
                />
                <label>Phone number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  value={user.phone}
                  onChange={getUserData}
                  placeholder="Enter your phone number"
                  required
                />
                <label>Messages</label>
                <input
                  type="text"
                  className="form-control"
                  name="message"
                  value={user.message}
                  onChange={getUserData}
                  placeholder="Enter your message"
                  required
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Reactcontact;
