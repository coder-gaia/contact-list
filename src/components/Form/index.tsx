import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../store/reducers/contact'
import { Button, ErrorMsg, FormLabel, FormWrapper } from './styles'
import { Title } from '../ContactList/styles'

const ContactForm: React.FC = () => {
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: ''
  })

  const [error, setError] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.fullName && formData.email && formData.phone) {
      if (formData.fullName.includes(' ') && formData.phone.length === 11) {
        dispatch(
          addContact({
            id: Date.now(),
            ...formData
          })
        )
        setFormData({
          fullName: '',
          email: '',
          phone: ''
        })
        setError('')
      } else {
        setError('Insert the informations correctly.')
      }
    } else {
      setError('Insert the informations correctly.')
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <Title>Contact-List</Title>
      <FormLabel>
        Name:
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Email:
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Telephone:
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </FormLabel>

      {error && <ErrorMsg>{error}</ErrorMsg>}

      <Button type="submit">Add Contact</Button>
    </FormWrapper>
  )
}

export default ContactForm
