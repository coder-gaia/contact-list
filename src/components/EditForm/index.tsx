import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editContact } from '../../store/reducers/contact'
import { ErrorMsg, FormLabel, FormWrapper } from '../Form/styles'
import { CancelBtn, SaveBtn } from '../../style'

type FormEditorProps = {
  contactId: number
  onClose: () => void
}

const EditForm: React.FC<FormEditorProps> = ({ contactId, onClose }) => {
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

  const handleCancel = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: ''
    })
    setError('')
    onClose()
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.fullName && formData.email && formData.phone) {
      if (formData.fullName.includes(' ') && formData.phone.length === 11) {
        dispatch(
          editContact({
            id: contactId,
            updatedContact: formData
          })
        )
        setFormData({
          fullName: '',
          email: '',
          phone: ''
        })
        setError('')
        onClose()
      } else {
        setError('Insert the informations correctly.')
      }
    } else {
      setError('Insert the informations correctly.')
    }
  }

  return (
    <FormWrapper onSubmit={handleSubmit}>
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
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </FormLabel>
      <FormLabel>
        Phone:
        <input
          type="number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </FormLabel>

      {error && <ErrorMsg>{error}</ErrorMsg>}

      <SaveBtn type="submit">Save</SaveBtn>
      <CancelBtn onClick={handleCancel} type="submit">
        Cancel
      </CancelBtn>
    </FormWrapper>
  )
}

export default EditForm
