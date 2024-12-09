import { useState } from 'react';
import './App.css'


function App() {
  const [formData, setFormData] = useState(
    {
      firstname: "",
      lastname: ""
    }
  );


  const handleChange = ((e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData, [name]: value
    }));
  })

  console.log(formData);
  



  return <>
    <form action="">
      <input type="text" name='firstname' placeholder="firstname" onChange={handleChange}/>
      <p>*error message</p>
      <input type="text" name='lastname' placeholder="lastname" onChange={handleChange}/>
      <p>*error message</p>
      <button type="submit">submit</button>
    </form>

    
  </>
}

export default App
