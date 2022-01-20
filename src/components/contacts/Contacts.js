import React from "react";
import PropTypes from "prop-types";
import { Contacts, Contact, Button } from "./Contacts.styled";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Contacts>
      {contacts.map((contact) => (
        <Contact key={contact.id}>
          <span>
            {contact.name} : {contact.number}
          </span>
          <Button onClick={() => onDelete(contact.id)}>Delete</Button>
        </Contact>
      ))}
    </Contacts>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
