import './Register.css';
import { useState,useRef } from 'react';


export default function Register(){

    let [errorMessage,setErrorMessage] = useState(null);

    let [msgVisible,setMsgVisible] = useState(false);

    let user = useRef(
        {
            name:"",
            username:"",
            email:"",
            contact:"",
            password:"",
            gender:""
        }
    );

    
    function readValue(property,value){
        user.current[property] = value;
        
    }

    function register(){
        console.log(user);

        let message = "";
        
        if(user.current.name === "" ){
            message = "Name is Required";
        }else if(/^[a-zA-Z ]{2,30}$/.test(user.current.name) === false){
            message = "Name should not contain numbers or special characters";
        }else if(user.current.username === ""){
            message = "Username is Required"
        }else if(user.current.email === ""){
            message = "Email is Required"
        }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(user.current.email) === false){
            message = "Email address is not valid"
        }else if(user.current.contact === ""){
            message = "contact is Required"
        }else if(user.current.password === ""){
            message = "password is Required"
        }else if(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(user.current.password) === false){
            message = "password should have atleast one numbers, onespecial character"
        }else if(user.current.gender === ""){
            message = "gender is Required"
        }else{
            message = ""
        }

        if(message === null){
            console.log("valid",errorMessage);
            
        }else{

            setMsgVisible(true);
            setErrorMessage(message);
             

            // setInterval(()=>{
            //     setMsgVisible(false);
            // },3000)
        }


    }
    

    return(
        <section className='container'>
            <div className='form'>
                <span className='messageBox'>
                    {
                        msgVisible === true ? (<span>{errorMessage}</span>): null
                    }
                </span>
                <h1>Register</h1>
                <input type='text' placeholder='Enter Name' onChange={(e)=>readValue("name",e.target.value)}></input>
                <input type='text' placeholder='Enter Username' onChange={(e)=>readValue("username",e.target.value)}></input>
                <input type='text' placeholder='Enter Email' onChange={(e)=>readValue("email",e.target.value)}></input>
                <input type='text' placeholder='Enter Contact' onChange={(e)=>readValue("contact",e.target.value)}></input>
                <input type='password' placeholder='Enter Password' onChange={(e)=>readValue("password",e.target.value)}></input>
                <select onChange={(e)=>readValue("gender",e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <button onClick={register}>Register</button>

            </div>
        </section>
    )
}