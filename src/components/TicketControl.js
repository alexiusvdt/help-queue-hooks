import React, { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';
import db from './../firebase.js';
import { collection, addDoc, onSnapshot } from "firebase/firestore";

function TicketControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  // collectionSnapshot is a QuerySnapshot object made of one or more DocumentSnapshot objs
  // when we call forEach(...) below, that's the QuerySnapshot method, not js Array.prototype.forEach(...)
  // this is where that docs property comes from, returning an array of the collections' data
  useEffect(() => {
    const unSubscribe = onSnapshot(
      collection(db, "tickets"),
      (collectionSnapshot) => {
        //firebase does not store data in a similar way that JS does.
        // we need to manually create an array & loop through the returned collection, create an obj ticket, and push to the array
        const tickets = [];
        collectionSnapshot.forEach((doc) => {
          tickets.push({
            names: doc.data().names,
            location: doc.data().location,
            issue: doc.datat().issue,
            // this is where we implement the doc id as our unique ID
            id: doc.id
// after push({ could be replaced with ...doc.data() as the spread operator takes all the documents data into a js object
          });
        });
        setMainTicketList(tickets);
      },
      (error) => {
        // FirestoreError obj with prop message 
        setError(error.message);
      }
    );
    return () => unSubscribe();
  }, {});

  const handleClick = () => {
    if (selectedTicket != null) {
      setFormVisibleOnPage(false)
      setSelectedTicket(null);
      setEditing(false);
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
      }
    }

  const handleDeletingTicket = (id) => {
    const newMainTicketList = mainTicketList.filter(ticket => ticket.id !== id);
    setMainTicketList(newMainTicketList);
    setSelectedTicket(null);
  }

  const handleEditClick = () => {
   setEditing(true);
  }

  const handleEditingTicketInList = (ticketToEdit) => {
    const editedMainTicketList = mainTicketList
      .filter(ticket => ticket.id !== selectedTicket.id)
      .concat(ticketToEdit);
    setMainTicketList(editedMainTicketList);
    setEditing(false);
    setSelectedTicket(null);
  }

  const handleAddingNewTicketToList = async (newTicketData) => {
    await addDoc(collection(db, "tickets"), newTicketData);
    setFormVisibleOnPage(false)
  }

  const handleChangingSelectedTicket = (id) => {
    const selection = mainTicketList.filter(ticket => ticket.id === id)[0];
    setSelectedTicket(selection);
  }

  let currentlyVisibleState = null;
  let buttonText = null; 

  if(error) {
    currentlyVisibleState = <p>There was an error: {error}</p>
  } else if (editing ) {      
    currentlyVisibleState =
      <EditTicketForm 
      ticket = {selectedTicket}
      onEditTicket = {handleEditingTicketInList} />
    buttonText = "Return to Ticket List";
  } else if (selectedTicket != null) {
    currentlyVisibleState = <TicketDetail 
      ticket={selectedTicket} 
      onClickingDelete={handleDeletingTicket}
      onClickingEdit = {handleEditClick} />
    buttonText = "Return to Ticket List";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewTicketForm onNewTicketCreation={handleAddingNewTicketToList}/>;
    buttonText = "Return to Ticket List"; 
  } else {
    currentlyVisibleState =
      <TicketList
        onTicketSelection={handleChangingSelectedTicket}
        ticketList={mainTicketList} />;
    buttonText = "Add Ticket"; 
  }

  return (
    <React.Fragment>
      {currentlyVisibleState}
      {error ? null : <button onClick={handleClick}>{buttonText}</button>} 
    </React.Fragment>
  );
}

export default TicketControl;

