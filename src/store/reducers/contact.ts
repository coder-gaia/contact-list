import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Contact = {
  id: number
  fullName: string
  email: string
  phone: string
}
const initialState: Contact[] = []

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      const { fullName, email, phone } = action.payload

      const isDuplicate = state.some(
        (contact) =>
          contact.fullName === fullName ||
          contact.email === email ||
          contact.phone === phone
      )

      if (isDuplicate) {
        alert('This contact already exists.')
      } else {
        state.push(action.payload)
      }
    },
    removeContact: (state, action: PayloadAction<number>) => {
      return state.filter((c) => c.id !== action.payload)
    },
    editContact: (
      state,
      action: PayloadAction<{ id: number; updatedContact: Partial<Contact> }>
    ) => {
      const { id, updatedContact } = action.payload
      const contactIndex = state.findIndex((contact) => contact.id === id)

      if (contactIndex !== -1) {
        state[contactIndex] = {
          ...state[contactIndex],
          ...updatedContact
        }
      }
    }
  }
})

export const { addContact, removeContact, editContact } = contactSlice.actions
export default contactSlice.reducer
