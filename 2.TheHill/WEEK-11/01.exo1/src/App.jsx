import { useState } from 'react';
import './App.css'


function App() {
  const [formData, setFormData] = useState(
    {
      firstname: "",
      lastname: "",
      age: "",
      email: "",
      phoneNumber: "",
      password1: "",
      password2: ""
    }
  );

  const [errors, setErrors] = useState({})

  
  const handleChange = ((e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData, [name]: value
    }));
    validateField(name, value)
  })


  const validateField = ((name, value) => {
    setErrors((prev) => {
      return { ...prev, [name]: "" };
    });

    if(name === "firstname" && value.length < 3) {
      setErrors((prev) => {
        return {...prev, [name]: "*Firstname must be at least 3 characters" };
      });
    }

    if(name === "lastname" && value.length < 5) {
      setErrors((prev) => {
        return {...prev, [name]: "*Lastname must be at least 5 characters" };
      });
    }

    if(name === "age" && (isNaN(value) || value < 9 || value > 99)) {
      setErrors((prev) => {
        return {...prev, [name]: "*Your age must be between 9 and 99" };
      });
    }

    if(name === "email" && value.length < 5) {
      setErrors((prev) => {
        return {...prev, [name]: "*email must be at least 5 characters" };
      });
    }

    if(name === "phoneNumber" && (isNaN(value) || value.length !== 10)) {
      setErrors((prev) => {
        return {...prev, [name]: "*Your phone number must be at least 5 characters" };
      });
    }

    if(name === "password1" && value.length < 8) {
      setErrors((prev) => {
        return {...prev, [name]: "*Password must be at least 8 characters" };
      });
    }

    if(name === "password2" && value !== formData.password1) {
      setErrors((prev) => {        
        return {...prev, [name]: "*Password verification must be at least 5 characters" };
      });
    }
  });



  
  console.log(formData);
  console.log(errors);
  

  return <>
    <form action="">
      <input 
        type="text"
        name='firstname'
        placeholder="firstname"
        onChange={handleChange}
        className={errors.firstname ? "notvalid" : formData.firstname ? "valid" : ""}
      />
      {errors.firstname && <p>{errors.firstname}</p>}
      
      <input
        type="text"
        name='lastname'
        placeholder="lastname"
        onChange={handleChange}
        className={errors.lastname ? "notvalid" : formData.lastname ? "valid" : ""}
      />
      {errors.lastname && <p>{errors.lastname}</p> }
      
      <input 
        type="text"
        name='age'
        placeholder="age"
        onChange={handleChange}
        className={errors.age ? "notvalid" : formData.age ? "valid" : ""}
      />
      {errors.age && <p>{errors.age}</p>}

      <input 
        type="text"
        name='email'
        placeholder="email"
        onChange={handleChange}
        className={errors.email ? "notvalid" : formData.email ? "valid" : ""}
      />
      {errors.email && <p>{errors.email}</p>}

      <input 
        type="text"
        name='phoneNumber'
        placeholder="phoneNumber"
        onChange={handleChange}
        className={errors.phoneNumber ? "notvalid" : formData.phoneNumber ? "valid" : ""}
      />
      {errors.phoneNumber && <p>{errors.phoneNumber}</p>}

      <input 
        type="text"
        name='password1'
        placeholder="password"
        onChange={handleChange}
        className={errors.password1 ? "notvalid" : formData.password1 ? "valid" : ""}
      />
      {errors.password1 && <p>{errors.password1}</p>}

      <input 
        type="text"
        name='password2'
        placeholder="repeat password"
        onChange={handleChange}
        className={errors.password2 ? "notvalid" : formData.password2 ? "valid" : ""}
      />
      {errors.password2 && <p>{errors.password2}</p>}
      
      <button type="submit">submit</button>
    </form>

    
  </>
}

export default App



