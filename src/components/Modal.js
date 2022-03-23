import React, { useState } from "react";
import "./Modal.css";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    // if(modal) {
    //   setTimeout(()=> setModal(!modal),1000)
    //   return null
    // }
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Advertisment
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>What we are looking for</h2>
            <p>
             Player, Manager, Head Coach
            </p>
            <h2>What do we offer</h2>
            <p>
             Analyst, weekly trainings/scrims, semi-pro league spot 
            </p>
            <h2>What do we expect</h2>
            <p>
             Minimum age 18, minimum rank Diamond, Communicative etc...
            </p>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
      
    </>
  );
}
