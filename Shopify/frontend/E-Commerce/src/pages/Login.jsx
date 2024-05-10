import { useState } from 'react'
import { toast } from 'react-toastify'
// import Layout from "../layouts/Layout"

const Login = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")

//  form function
const handleSubmit = (e) => {
    e.preventDefault()
    console.log(name, email, password, phone, address);
    toast.success("User Registered Successfully!")
}

  return (
    <>
      <div className="register">
        <h1>REGISTER FORM</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)} 
              className="form-control" 
              id="exampleInputName" 
              placeholder="Enter Your Name" 
              required />
          </div>

          <div className="mb-3">
            <input 
              type="text" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="form-control" 
              id="exampleInputEmail" 
              placeholder="Enter Your Email" 
              required />
          </div>

          <div className="mb-3">
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="form-control" 
              id="exampleInputPassword" 
              placeholder="Enter Your Password"
              required />
          </div>

          <div className="mb-3">
            <input 
              type="number" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              className="form-control" 
              id="exampleInputPhone" 
              placeholder="Enter Your Phone"
              required />
          </div>

          <div className="mb-3">
            <input 
              type="text" 
              value={address} 
              onChange={(e) => setAddress(e.target.value)} 
              className="form-control" 
              id="exampleInputAddress" 
              placeholder="Enter Your Address" 
              required />
          </div>
          <button type='submit' className='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>
      
    </>
  )
}

export default Login
