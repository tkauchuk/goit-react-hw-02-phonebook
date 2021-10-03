import { Component } from "react";
import PropTypes from 'prop-types';

import styles from './ContactForm.module.css';

class ContactForm extends Component {
    
    static propTypes = {
        existingContacts: PropTypes.arrayOf(PropTypes.object),
        onFormSubmit: PropTypes.func
    }

    state = {
        name: '',
        number: ''
    }

    onInputChange = (event) => {
        const { target } = event;
        this.setState({
            [target.name]: target.value    
        })
    }

    onInputReset = () => {
        this.setState({
            name: '',
            number: ''
        })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        const existingContact = this.props.existingContacts.find(existingContact => {
            return existingContact.name === this.state.name
        });
        if (existingContact) {
            alert('Contact already exists. Try another name');
            this.setState({ name: '' });
            return;
        }
        this.props.onFormSubmit(this.state);
        this.onInputReset();
    }

    render() {
        return (
            <form className={styles.form} onSubmit={this.onFormSubmit}>
                <label className={styles.label}>
                    Name
                    <input
                        className={styles.input}
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
                <label className={styles.label}>
                    Number
                    <input
                        className={styles.input}
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
                <button className={styles.button} type="submit">Add a contact</button>
            </form>
        );
    }
}

export default ContactForm;