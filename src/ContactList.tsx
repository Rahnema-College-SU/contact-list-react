import React from 'react';
import { useState } from 'react';

import "./styles.css";

type contactinfo = {
    name: string,
    phoneNum: string
}

export default function ContactListPage() {

    const [contactList, setContactList] = useState([
        {
            name: "Akbar",
            phoneNum: "09192341652"
        },
        {
            name: "Reza",
            phoneNum: "0919562342"
        },
        {
            name: "Mammad",
            phoneNum: "09190891652"
        },
        {
            name: "Akbar",
            phoneNum: "09171601652"
        }
    ]);

    const [contactName, setContactName] = useState("");
    const [contactPhone, setContactPhone] = useState("");
    const [searchedName, setSearchName] = useState("");
// 09195601652

    const handleAddSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();

        const newContactInfo = {
            name: contactName,
            phoneNum: contactPhone
        } 

        setContactList([...contactList, newContactInfo]);
    };
      
    const handleSearchSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault(); 

        const searchedName = contactName;
        setSearchName(searchedName);
      
    };
    
    const matchesName = (currContName: contactinfo) => {
        
        if(searchedName === currContName.name || !searchedName) {
            return true;
        }
        
        return false
    }


    return (
    <div className="app">
        <div className="login-form">

            <div className="form">
                <form onSubmit={handleSearchSubmit}>
                    <div className="input-container">
                        <label>Name </label>
                        <input 
                            // value={contactName}
                            type="text" 
                            name="name" 
                            onChange={event => setContactName(event.target.value)}
                        />
                    </div>

                    <div className="button-container">
                        <input type="submit" value="Search For Contact"/>
                    </div>
                </form>
            </div>

            <div className='form '>
                <ul>
                    {
                        contactList.filter(matchesName).map((contactInfo) => {
                            return <li className='list-item'>
                                {contactInfo.name}, {contactInfo.phoneNum}
                            </li>
                        })
                    }
                </ul>
            </div>

            <div className="form">
                <form onSubmit={handleAddSubmit}>
                    <div className="input-container">
                        <label>Name</label>
                        <input 
                            // value={contactName}
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
        </div>
    </div>

    )
}