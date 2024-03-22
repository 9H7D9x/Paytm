import React,{useState} from 'react'
import {SubHeading} from '../components/SubHeading'
import {Heading} from '../components/Heading'
import {InputBox} from '../components/InputBox'
import {Button }from '../components/Button'
import {BottomWarning} from '../components/BottomWarning'
import { useNavigate } from "react-router-dom"
import axios from "axios"

export function Signup ()  {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

 
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className='rounded-lg bg-white w-80 text-center p-2 h-max px-4'>
          <Heading label={"Sign up"}/>
          <SubHeading label={"Enter your infromation to create an account"}/>
          <InputBox  placeholder="John" label={"First Name"} onChange={e => { setFirstName(e.target.value); }} />
          <InputBox placeholder="Doe" label={"Last Name"} onChange={e => { setLastName(e.target.value); }}/>
          <InputBox placeholder="hs323@gmail.com" label={"Email"} onChange={e => { setUsername(e.target.value); }}/>
          <InputBox placeholder="123456" label={"Password"} onChange={e => { setPassword(e.target.value); }}/>
          <div className="pt-4">
            <Button label={"Sign up"} 
                    onClick={async()=>{
                      const res=await axios.post("",{
                        username,
                        lastName,
                        firstName,
                        password
                      })
                      localStorage.setItem("token",res.data.token)
                      navigate("/dashboard")
                    }}/>
          </div>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}/>
        </div>
      </div>
    </div>
  )
}

