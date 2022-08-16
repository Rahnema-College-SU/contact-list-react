import React from 'react';
import { useState } from 'react';

import "./styles.css";


export default function ContactListPage() {

    const [contactList, setContactList] = useState([
        {
            name: "Akbar",
            phoneNum: "0128347"
        },
        {
            name: "Akbar",
            phoneNum: "0128347"
        },
        {
            name: "Akbar",
            phoneNum: "0128347"
        },
        {
            name: "Akbar",
            phoneNum: "0128347"
        }
    ]);

    const [contactName, setContactName] = useState("");
    const [contactPhone, setContactPhone] = useState("");



    const handleAddSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const newContactInfo = {
            name: contactName,
            phone: contactPhone
        } 

        
    };
      
    const handleSearchSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const name = contactName;
      
    };
    

    return (
        <div>
            <div className="form">
                <form onSubmit={handleAddSubmit}>
                    <div className="input-container">
                        <label>Name</label>
                        <input 
                            type="text" 
                            name="name" 
                            required
                            onChange={event => setContactName(event.target.value)}
                        />
                    </div>

                    <div className="input-container">
                        <label>Phone Number</label>
                        <input 
                            type="tel" 
                            required id="phone" 
                            name="phone" 
                            pattern="09[0-9]{9}"
                            placeholder='09121111111'
                            onChange={event => setContactPhone(event.target.value)}
                        />
                    </div>

                    <div className="button-container">
                        <input type="submit" value="Add New Contact" />
                    </div>
                </form>
            </div>

            <div className="form">
                <form onSubmit={handleSearchSubmit}>
                    <div className="input-container">
                        <label>Name </label>
                        <input 
                            type="text" 
                            name="name" 
                            required
                            onChange={event => setContactName(event.target.value)}
                        />
                    </div>

                    <div className="button-container">
                        <input type="submit" value="Search For Contact"/>
                    </div>
                </form>
            </div>

            <div className='form'>

                <ul>
                    {
                        contactList.map((contactInfo) => {
                            return <li>
                                {contactInfo.name}, 
                                {contactInfo.phoneNum}
                            </li>
                        })
                    }
                </ul>
                
            </div>
        </div>

    )
}