import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//components
import ContactForm from "../../components/contactForm/ContactForm";
import ContactList from "../../components/contactList/ContactList";
import Filter from "../../components/filter/Filter";
import Loader from "../../components/loader/Loader";
import Notification from "../../components/notification/Notification";
//operations
import { fetchContacts } from "../../redux/operations/phonebookOperations";
//selectors
import {
  getContacts,
  getError,
  getLoading,
} from "../../redux/selectors/phonebookSelectors";
//styles
import { CSSTransition } from "react-transition-group";
import { Container } from "./ContactsPageStyled";


const ContactsPage = () => {
  const contacts = useSelector(getContacts);
  const isLoadingContacts = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container">
    <Container>
      <CSSTransition
        in={true}
        appear={true}
        classNames="phonebook-title"
        timeout={500}
        unmountOnExit
      >
        <h1>Phonebook</h1>
      </CSSTransition>

      <ContactForm />

      <CSSTransition
        in={contacts.length > 1}
        classNames="filter"
        timeout={250}
        unmountOnExit
      >
        <Filter />
      </CSSTransition>

      {isLoadingContacts && <Loader />}
      <ContactList />
      {!contacts.length && !isLoadingContacts && (
        <p>There are no contacts in current list.</p>
      )}
      {error && <Notification message={error.message} />}
    </Container>
    </div>
  );
};

export default ContactsPage;
