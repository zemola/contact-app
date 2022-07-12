import React from "react";
import logo from "../image/logo.jpg";
import download from '../image/download.png'

const ContactCard = (props) => {
console.log(props)
const {id,name,email} = props.contact

  return (
    <div>
      <div className="pa4">
        <img src={logo} className="br-100 h3 w3 dib" alt="avatar" />
      </div>
     <div><h2>{name}</h2>
    <h2>{email}</h2>
    <img src={download} className="h2 w2" alt="trash"  onClick={() =>{
      props.clickHandler(id)
    }}/>
    </div>
    </div>
  );
};

export default ContactCard;
