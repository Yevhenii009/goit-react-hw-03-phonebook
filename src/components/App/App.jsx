import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import 'modern-normalize';
import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromLocal = localStorage.getItem('contacts');

    if (contactsFromLocal) {
      const parsedContacts = JSON.parse(contactsFromLocal);
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  formSubmitData = data => {
    const normalizedName = data.name.toLowerCase();
    const filtredContacts = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalizedName
    );

    if (filtredContacts) {
      alert(`${data.name} is already in contacts.`);
      return;
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          name: data.name,
          number: data.number,
          id: nanoid(),
        },
      ],
    }));
  };

  handleFilter = evt => {
    this.setState({ filter: evt.currentTarget.value });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const filtredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className={css.wrapper}>
        <h2 className={css.title}>PhoneBook</h2>
        <ContactForm onSummit={this.formSubmitData} />

        <h3>Contacts</h3>
        <Filter value={this.state.filter} handleFilter={this.handleFilter} />

        <ContactList
          filtredContacts={filtredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
