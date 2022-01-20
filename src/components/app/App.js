import React, { useState, useEffect } from "react";
import Container from "../container/Container";
import Form from "../form/Form";
import Filter from "../filter/Filter";
import ContactList from "../contacts/Contacts";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? []; //lazy state ititialization;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = (data) => {
    if (
      contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in contacts. `);
      return;
    }
    setContacts([data, ...contacts]);
  };

  const filterHandler = (filter) => {
    setFilter(filter);
  };
  const deleteContact = (deletedId) => {
    setContacts(contacts.filter((contact) => contact.id !== deletedId));
  };

  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Container>
      <Form onSubmit={formSubmitHandler} />
      <Filter filter={filter} onChange={filterHandler} />
      <ContactList contacts={filteredContacts()} onDelete={deleteContact} />
    </Container>
  );
}

/* export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  formSubmitHandler = (data) => {
    if (
      this.state.contacts.find(
        (contact) => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(
        `${data.name} is already in contacts with a contact number: ${data.number} `
      );
      return;
    }
    this.setState(({ contacts }) => ({ contacts: [data, ...contacts] }));
  };

  filterHandler = (filter) => {
    this.setState({ filter });
  };
  deleteContact = (deletedId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== deletedId
      ),
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      console.log("ContactList was update");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  render() {
    return (
      <Container>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter filter={this.state.filter} onChange={this.filterHandler} />
        <ContactList
          contacts={this.filteredContacts()}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
 */
