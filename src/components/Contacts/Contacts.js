import React from 'react';
// import { List, Item, Button} from './ContactsStyled'

const ContactList = ({ onFilter, onDelete }) => {
  return (
    <div>
      {onFilter.map(({ name, number, id }) => {
        return (
          <div key={id}>
            <span>{name}:</span>
            <span>{number}:</span>

            <button type="button" onClick={() => onDelete(id)}>
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
