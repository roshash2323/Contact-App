import styles from "./Contacts.module.css"
import "./ContactsList"
import { useState } from "react";
import ContactsList from "./ContactsList";
import inputs from "../constants/input";
import { v4 } from "uuid";


function Contacts() {
    const [contacts,setContacts]=useState([])
    
    const [alert,setAlert]=useState("")
    const[search,setSearch]=useState("")
    const [deleteItem,setDeleteItem]=useState(false)
    const[contact,setContact]=useState({id:"",name:"",lastName:"",email:"",number:"",deleteItem:{deleteItem}});

    const deleteItemHandler=()=>{
     
       console.log(contacts)
      
     
    }


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

    const searchHandler=()=>{
    const searchedContacts=contacts.filter((contact)=>contact.name.includes(search))
    console.log(searchedContacts)
    setContacts(searchedContacts)
    setSearch("")
    
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
    {!!contacts.length &&
    <div>
       <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
       <button onClick={searchHandler}>search</button>
    </div> && <button onClick={deleteItemHandler}>Delete item</button>
  
  }
  
    <ContactsList contacts={contacts} deleteHandler={deleteHandler} deleteItem={deleteItem} setDeleteItem={setDeleteItem} />
    </div>
        
  )
}


export default Contacts