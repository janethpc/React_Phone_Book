import { BsTrashFill  } from 'react-icons/bs';


export const InformationTable = ({contacts, deleteContact}) => {
    const sortedContacts = contacts.sort((a, b) => a.lastName.localeCompare(b.lastName))
  
    return sortedContacts.map(contact => (
    <>
    <tr key={contact.phone}>
        <td>{contact.firstName}</td>
        <td>{contact.lastName}</td>
        <td>{contact.phone}</td>
        <td>
        <BsTrashFill color="red" onClick={() => deleteContact(contact.phone)}/>
        </td>
    </tr>
    </>
  ))
}
