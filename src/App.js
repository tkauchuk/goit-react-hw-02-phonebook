import { Component, Fragment } from "react";
import { v4 as uuidv4 } from 'uuid';

import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import Filter from './components/Filter';
import ContactList from "./components/ContactList";

class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }
  
  handleFormSubmit = (user) => {
    const uid = uuidv4();
    const name = user.name;
    const number = user.number;

    const contact = { uid, name, number };
    this.setState(({contacts}) => {
      return {
        contacts: [contact, ...contacts]
      }
    });
  }

  handleFilterInputChange = (value) => {
    this.setState({ filter: value });
  }

  handleDeleteContact = (id) => {
    this.setState(({ contacts }) => {
      return {contacts: contacts.filter(contact => contact.uid !== id)}
    })
  }

  render() {
    const filteredContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    })
    const isAnyContact = this.state.contacts.length > 0;
    
    return (
      <Fragment>
        <Section>
        <h1 className="">Phonebook</h1>
        <ContactForm
          onFormSubmit={this.handleFormSubmit}
          existingContacts ={this.state.contacts}
        />
        </Section>
        <Section>
        <h2 className="">Contacts</h2>
        <Filter
          onFilterChange={this.handleFilterInputChange}
          isFilterActive={isAnyContact}  
        />
        <ContactList
          contacts={filteredContacts}
          onDeleteButtonClick={this.handleDeleteContact}
        />
        </Section>
      </Fragment>
    );
  }  
}

export default App;
