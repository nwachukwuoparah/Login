import './signup.css'
import React, { useState, useEffect, useContext } from 'react'
import Form from './Form'
export default function Signup({ }) {
  const [checked, setChecked] = useState(false)
  const [terms, setTerms] = useState(false)
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    admin: false,

  })
  let password;
  const input = [
    {
      id: 1,
      name: "name",
      type: "text",
      err: "Username should be 3-16 caharters and should not include any special charater!",
      placeholder: "name",
      pattern: "^[A-Za-z0-9 ]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      err: "It should be a valid email address!",
      placeholder: "email",
      required: true,
    }, {
      id: 3,
      name: "password",
      type: "password",
      err: "Password should be 8-20 charaters and include at least 1 letter, 1 number and one special charater! ",
      placeholder: "password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    }, {
      id: 4,
      name: "confirmPassword",
      type: "password",
      err: "Password dont match",
      placeholder: " confirmPassword",
      pattern: value.password,
      required: true,
    }
  ]

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    console.log(value)
  }, [value])
  return (
    <>
      <div className='sign_in'>
        <div className='sign_in_Wrap'>
          <form onSubmit={(e) => { e.preventDefault(); console.log(value) }}>
            {input.map((i) => (
              <Form key={i.id} {...i} value={value[i.name]} onChange={onChange} />
            ))}
            <div className='Signup_action'>
              <button className='button'>Sign up</button>
              <span className='label'><p>Already have an account?</p> <p style={{ color: "#0056FC" }} onClick={() => Navigate('/login')}>Sign in </p></span>
            </div>

          </form>
        </div>
      </div>
    </>
  )
}
