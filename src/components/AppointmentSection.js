import React from 'react';
import './AppointmentSection.scss';

const AppointmentSection = () => {
  return (
    <section className="appointment-section">
      <h1>
        Book an appointment with <br />
        <span className="highlight"style={{color:'dodgerblue'}} >lifestyle medicine</span> experts
      </h1>
      <p>Optimize your lifestyle and reverse chronic diseases.</p>
    </section>
  );
};

export default AppointmentSection;
