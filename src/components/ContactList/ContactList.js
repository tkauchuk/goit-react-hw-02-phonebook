import { Component } from "react";
import PropTypes from 'prop-types';

import styles from './ContactList.module.css';

class ContactList extends Component {
    
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        onDeleteButtonClick: PropTypes.func
    }

    render() {
        return (
            <ul className={styles.list}>
                {this.props.contacts.map(contact => {
                    return (
                        <li className={styles.item} key={contact.uid}>
                            <div className={styles.wrapper}>
                            <p className={styles.name}>{contact.name}</p>
                            <span className={styles.number}>{contact.number}</span>
                            <button className={styles.button} onClick={() => this.props.onDeleteButtonClick(contact.uid)}>Delete</button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
   } 
}

export default ContactList;