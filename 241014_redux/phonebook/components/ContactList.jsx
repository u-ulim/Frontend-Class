import React, { useEffect, useState } from "react";
import ContactItem from "./ContactItem";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";

const ContactList = () => {
  // const contactLists = useSelector((state) => state.contactList);

  // const test = useSelector((state) => state);
  // console.log(test);
  const [filteredList, setFilteredList] = useState([]);
  const { contactList, keyword } = useSelector((state) => state);

  console.log(contactList, keyword);

  useEffect(() => {
    if (keyword !== "") {
      const list = contactList.filter((item) => item.name.includes(keyword));
      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [keyword]);

  return (
    <>
      <h6>Friends List</h6>
      <SearchBar />
      {/* {contactLists.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))} */}
      {filteredList.map((item, index) => (
        <ContactItem key={index} item={item} />
      ))}
    </>
  );
};

export default ContactList;
