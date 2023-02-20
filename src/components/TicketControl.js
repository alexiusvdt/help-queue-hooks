import React, { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';

function TicketControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [editing, setEditing] = useState(false);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     formVisibleOnPage: false,
  //     mainTicketList: [],
  //     selectedTicket: null,
  //     editing: false
  //   };
  // }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      setFormVisibleOnPage(false)
      setSelectedTicket(null);
      setEditing(false);
      // this.setState({
      //   formVisibleOnPage: false,
      //   selectedTicket: null,
      // });
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
      }
    }
  }

  handleDeletingTicket = (id) => {
    const newMainTicketList = mainTicketList.filter(ticket => ticket.id !== id);
    setMainTicketList(newMainTicketList);
    setSelectedTicket(null);
    //  this goes away
    // this.setState({
    //   mainTicketList: newMainTicketList,
    //   selectedTicket: null
    // });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingTicketInList = (ticketToEdit) => {
    const editedMainTicketList = mainTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);
    setMainTicketList(editedMainTicketList);
    setEditing(false);
    setSelectedTicket(null);
  }

  handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = mainTicketList.concat(newTicket);
    setMainTicketList(newMainTicketList);
    setFormVisibleOnPage(false)
  }

  handleChangingSelectedTicket = (id) => {
    const selection = mainTicketList.filter(ticket => ticket.id === id)[0];
    setSelectedTicket(selection);
  }

    let currentlyVisibleState = null;
    let buttonText = null; 

    if (editing ) {      
      currentlyVisibleState =
        <EditTicketForm 
        ticket = {selectedTicket}
        onEditTicket = {this.handleEditingTicketInList} />
      buttonText = "Return to Ticket List";
    } else if (selectedTicket != null) {
      currentlyVisibleState = <TicketDetail 
        ticket={selectedTicket} 
        onClickingDelete={this.handleDeletingTicket}
        onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Ticket List";
    } else if (formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>;
      buttonText = "Return to Ticket List"; 
    } else {
      currentlyVisibleState =
       <TicketList
         onTicketSelection={this.handleChangingSelectedTicket}
         ticketList={mainTicketList} />;
      buttonText = "Add Ticket"; 
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );


export default TicketControl;

