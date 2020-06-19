import React from 'react';
import Modal from "react-modal";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "100px",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
  },
};



function Ninja(props){


  
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#777";
  }

  function closeModal() {
    setIsOpen(false);
  }

     return (
       <div>
         <a onClick={openModal}>
           <li key={props.index}>
             {/* <span className="name">{props.available}</span> */}
             <span className="name">{props.name}</span>-
             <span className="name">{props.rank}</span>
             <span className="dist">{Math.floor(props.dist / 1000)} km</span>
           </li>
         </a>
         <Modal
           isOpen={modalIsOpen}
           onAfterOpen={afterOpenModal}
           onRequestClose={closeModal}
           style={customStyles}
         >
           <center>
             <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Enter Details</h2>
           </center>
           <form className="col s12">
             <div className="row">
               <div className="input-field col s6">
                 <label htmlFor="first_name">First Name</label>
                 <input
                   id="first_name"
                   type="text"
                   className="validate"
                   required
                 />
               </div>
               <div className="input-field col s6">
                 <input
                   id="last_name"
                   type="text"
                   className="validate"
                   required
                 />
                 <label htmlFor="last_name">Last Name</label>
               </div>
             </div>
             <div className="row">
               <div className="input-field col s12">
                 <input
                   id="address"
                   type="text"
                   className="validate"
                   required
                 />
                 <label htmlFor="address">Complete Address</label>
               </div>
             </div>
             <div className="row">
               <div className="input-field col s6">
                 <input
                   id="icon_telephone"
                   type="number"
                   className="validate"
                   required
                 />
                 <label htmlFor="icon_telephone">Telephone</label>
               </div>
               <div className="input-field col s6">
                 <input
                   id="pin-code"
                   type="number"
                   className="validate"
                   required
                 />
                 <label htmlFor="pin-code">Pin-code</label>
               </div>
             </div>
             <div className="row">
               <div className="input-field col s6">
                 <input id="age" type="number" className="validate" required />
                 <label htmlFor="age">Age</label>
               </div>
               <div className="input-field col s6">
                 <input id="email" type="email" className="validate" required />
                 <label htmlFor="email">Email</label>
               </div>
             </div>

             <button
               className="btn waves-effect waves-light"
               type="submit"
               name="action"
             >
               Submit
               <i className="material-icons right ">send</i>
             </button>
           </form>
         </Modal>
       </div>
     );
}


export default Ninja