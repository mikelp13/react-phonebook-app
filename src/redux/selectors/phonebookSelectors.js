import { createSelector } from "@reduxjs/toolkit";

const getContacts = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getLoading = (state) => state.contacts.loading;
const getError = (state) => state.contacts.error;

const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (items, filter) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    )
);

export { getContacts, getFilter, getLoading, getError, getVisibleContacts };
