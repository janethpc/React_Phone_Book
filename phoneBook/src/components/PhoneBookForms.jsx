import { useEffect, useState } from "react"
import { InformationTable } from "./InformationTable";

//getting the values of local storage
const getDataFromsLs = () => {
    const data = localStorage.getItem('books');
    if (data) {
        return JSON.parse(data);
    }
    else {
        return []
    }
}

export const PhoneBookForms = () => {

    // main array of objects state || books satate
    const [contacts, setContacts] = useState(getDataFromsLs())

    //inputs state
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    //forms submit event
    const handleAddBooksSubmit = (e) => {
        e.preventDefault();
        //creating an object
        let contact = {
            firstName,
            lastName,
            phone
        };

        setContacts([...contacts, contact]);
        setFirstName("");
        setLastName("");
        setPhone("");
    }


    //SAVING DATA TO LOCAGE STORE
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(contacts));
    }, [contacts])

    //deleteContacts 
    const deleteContact = (phone) => {
        const filteredContacts = contacts.filter((element, index) => {
            return element.phone !== phone
        })
        setContacts(filteredContacts);
    }

    return (
        <>
            <h1 className="text-center">Phone Books By JanethPC</h1>
            <br/>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                    <form onSubmit={handleAddBooksSubmit}>
                        <div className="mb-3">
                        <label className="form-label">First Name:</label>
                        <input
                            className="form-control"
                            id="formGroupExampleInput"
                            type="text"
                            name="FirstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} 
                            placeholder="coder"/>
                        </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name:</label>
                        <br />
                        <input
                        className="form-control"
                        id="formGroupExampleInput"
                            type="text"
                            name="LastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="byte" />
                       </div>
                       <div className="mb-3">
                        <label className="form-label">Phone:</label>
                        <input
                        className="form-control"
                        id="formGroupExampleInput"
                            type="text"
                            name="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)} 
                            placeholder="8885559999"/>
                        </div>
                        <input
                        className="btn btn-primary mb-3"
                            type='submit'
                            value='Add User'
                        />
                    </form>
                    </div>
                    
                    <div className="col">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"> First Name </th>
                                <th scope="col"> Last Name </th>
                                <th scope="col"> Phone </th>
                                <th scope="col"> Delete </th>
                            </tr>
                        </thead>
                        <tbody>
                            <InformationTable contacts={contacts} deleteContact={deleteContact} />
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </>
    )
}
