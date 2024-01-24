import { Provider } from 'react-redux'
import ContactList from './components/ContactList'
import ContactForm from './components/Form'
import store from './store'
import GlobalStyle from './style'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <ContactForm />
      <ContactList />
    </Provider>
  )
}

export default App
