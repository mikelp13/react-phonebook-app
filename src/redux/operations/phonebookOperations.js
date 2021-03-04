import axios from "axios";
import {
  addContactError,
  addContactRequest,
  addContactSuccess,
  fetchContactsError,
  fetchContactsRequest,
  fetchContactsSuccess,
  removeContactError,
  removeContactRequest,
  removeContactSuccess,
} from "../actions/phonebookActions";

const addContact = (contact) => (dispatch) => {
  dispatch(addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(fetchContactsSuccess(data)))
    .catch((error) => dispatch(fetchContactsError(error)));
};

const removeContact = (id) => (dispatch) => {
  dispatch(removeContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(removeContactSuccess(id)))
    .catch((error) => dispatch(removeContactError(error)));
};

export { addContact, fetchContacts, removeContact };
