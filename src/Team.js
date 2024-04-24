import {useState} from "react";
import teamMembers from "./data/teamMembers";
import Modal from "./Modal";
import './Card.css';
import './Team.css';

function Team() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const openModal = (member) => {
    setSelectedMember(member);
    setModalIsOpen(true);
  }

  const closeModal = () => {
    setSelectedMember(null);
    setModalIsOpen(false);
  }

  return (
    <div className="team-container">
      {teamMembers.map(member => (
        <div className="card" key={member.id} tabIndex="0">
          <div className="card-image-wrapper">
            <img src={member.image} alt={member.name} className="card-image" onClick={() => openModal(member)}/>
          </div>

          <div className="card-info">
            <h2 className="card-name">{member.name}</h2>
            <p className="card-title">{member.title}</p>
            <button className="card-button" onClick={() => openModal(member)}>Learn More</button>
          </div>
        </div>
      ))}

      {modalIsOpen && (
        <Modal member={selectedMember} closeModal={closeModal} />
      )}
    </div>
  )
}

export default Team;