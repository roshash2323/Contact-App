
import { useState } from "react";
import styles from "./ContactItem.module.css";


function ContactItem({data:{id,name,lastName,email,number},deleteHandler,deleteItem,setDeleteItem}) {
  console.log(deleteItem)


 

  return (
    <li className={styles.item}>
      <input type="checkbox" onChange={()=>setDeleteItem((deleteItem)=>!deleteItem)}  />
      
      
          <p>{name} {lastName}</p>
          <p>{email}</p>
          <p>{number}</p>
          <button onClick={()=>deleteHandler(id)}>Delete</button>
          </li>)
  
}

export default ContactItem