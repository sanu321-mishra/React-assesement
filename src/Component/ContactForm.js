import { useState } from "react";

export default function UserForm({addContact}) {

  
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    password:"",
    city:"",
    pincode: "",
    
  });

  const handleChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addContact(contactInfo);
    setContactInfo({ name: "", email: "",password:"",city:"", pincode: "" });
  };
  

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}> 
        <div>
          <h3>Input Form</h3>
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contactInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contactInfo.email}
            onChange={handleChange}

          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={contactInfo.password}
            onChange={handleChange}

          />
        </div>
        <div>
          <input
            type="text"
            name="city"
            placeholder="Enter City"
            value={contactInfo.city}
            onChange={handleChange}

          />
        </div>
        <div>
          <input
            type="text"
            name="pincode"
            placeholder="Enter Pincode"
            value={contactInfo.pincode}
            onChange={handleChange}

          />
        </div>
        <div>
          <button className="btn btn-outline-primary btn-sm mx-2 my-2" >Login</button>
         
        </div>
      </form>
      
    </div>
  );
}