import { Component, Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  state = {
    contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    name: '',
    number: '',
    filter: ''
  }

  onInputChange = (event) => {
    const { target } = event;
    this.setState({
      [target.name]: target.value    
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    
    const uid = uuidv4();
    const name = this.state.name;
    const number = this.state.number;

    const contact = { uid, name, number };
    this.setState(({contacts}) => {
      return {
        contacts: [contact, ...contacts]
      }
    });
  } 

  render() {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
    return (
      <Fragment>
        <h1 className="">Phonebook</h1>
        <form className="" onSubmit={this.onFormSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              autoComplete="off"
              onChange={this.onInputChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              autoComplete="off"
              onChange={this.onInputChange}
            />
          </label>
          <button type="submit">Add a contact</button>
        </form>
        <h2 className="">Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={this.state.filter}
            autoComplete="off"
            onChange={this.onInputChange}
          />
        </label>
        <ul>
          {filteredContacts.map(contact => {
            return (
              <li key={contact.uid}>
                <p>{contact.name}</p>
                <span>{contact.number}</span>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }  
}

export default App;
