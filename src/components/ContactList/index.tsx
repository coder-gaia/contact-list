import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../store'
import { ContactListWrapper, ContactItem } from './styles'
import { removeContact } from '../../store/reducers/contact'
import EditForm from '../EditForm'
import { DeleteBtn, EditBtn } from '../../style'

const ContactList: React.FC = () => {
  const dispatch = useDispatch()
  const contacts = useSelector((state: RootState) => state.contacts)
  const [editContactId, setEditContactId] = useState<number | null>(null)

  const handleRemove = (id: number) => {
    dispatch(removeContact(id))
  }
  const handleEdit = (id: number) => {
    setEditContactId(id)
  }

  const handleFormClosure = () => {
    setEditContactId(null)
  }

  return (
    <ContactListWrapper>
      {contacts.map((contact) => (
        <ContactItem key={contact.id}>
          <strong>{contact.fullName}</strong>
          <p>
            <em>Email: </em>
            {contact.email}
          </p>
          <p>
            <em>Telephone: </em>
            {contact.phone}
          </p>
          <EditBtn onClick={() => handleEdit(contact.id)}>Edit</EditBtn>
          <DeleteBtn onClick={() => handleRemove(contact.id)}>Remove</DeleteBtn>

          {editContactId === contact.id && (
            <EditForm contactId={contact.id} onClose={handleFormClosure} />
          )}
        </ContactItem>
      ))}
    </ContactListWrapper>
  )
}
export default ContactList
