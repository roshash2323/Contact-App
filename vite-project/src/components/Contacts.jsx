import styles from "./Contacts.module.css"
import "./ContactsList"
import { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/input";
import { v4 } from "uuid";


function Contacts() {
    const [contacts,setContacts]=useState([])
    const[contact,setContact]=useState({id:"",name:"",lastName:"",email:"",number:""});
    const [alert,setAlert]=useState("")

    const deleteHandler=(id)=>{
      const newContacts=contacts.filter(contact=>contact.id !== id);
      setContacts(newContacts);

      
    }
    

    const addHandler=()=>{
        
        if(!contact.name || !contact.lastName || !contact.email || !contact.number ){
            setAlert("please enter valid text")
            return;

        }
        else{
            setAlert("");
            const newContact={...contact,id:v4()}
            setContacts(contacts=>[...contacts,newContact])
            console.log(contacts);
            setContact({name:"",lastName:"",email:"",number:""});

        }

      

    }

    const changeHandler=(event)=>{
        const name=event.target.name;
      const value=event.target.value;
      console.log({name,value});

      setContact(contact=>({...contact,[name]:value}))

    }

  return (
   
    <div className={styles.container} >
      <div className={styles.form}>
        {inputs.map((input,index)=>(<
            input key={index} type={input.type} 
            name={input.name} 
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}/>))}

        <button onClick={addHandler}>Add contact</button>
        </div>

   
    <div className={styles.alert}>{alert && <p>{alert}</p> }</div>
    <ContactsList contacts={contacts} deleteHandler={deleteHandler}/>
    </div>
  )
}

export default Contacts