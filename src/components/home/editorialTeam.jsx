import React from 'react';

// Define the data for the editorial team and contact information
const editorialTeam = [
  'DRISS OUAZAR',
  'ASMAE ELOUFR',
  'LAMIA MOUHSSINE',
  'MOKHTAR BZIOUI',
  'LOUBNA AMRI'
];

const contactInfo = {
  website: 'www.aiem.ma',
  email: 'contact@aiem.ma',
  phone: '+(212) 05 37 77 00 14',
  address: 'AIEM, Ecole Mohammadia d\'Ingénieurs, Avenue Ibn sina – BP 11039, Rabat Agdal',
  facebook: 'AIEM Officiel',
  twitter: 'AIEM_Officiel',
  rib: '021 810 0000017801502281 1 55 CREDIT DU MAROC Rabat Agdal',
  contactPerson: 'Mme Lamia MOUHSSINE'
};

// Component to display editorial team
const EditorialTeam = () => (
  <div className="text-gray-700">
    <h3 className="text-xl font-bold mb-2">L'ÉQUIPE DE RÉDACTION:</h3>
    {editorialTeam.map((member, index) => (
      <p key={index}>{member}</p>
    ))}
  </div>
);

// Component to display contact information
const ContactInfo = () => (
  <div className="text-gray-700">
    <h3 className="text-xl font-bold mb-2 ">CONTACT:</h3>
    <p>Site web: {contactInfo.website}</p>
    <p>Email: {contactInfo.email}</p>
    <p>Téléphone: {contactInfo.phone}</p>
    <p>Adresse: {contactInfo.address}</p>
    <p>Facebook (Page): {contactInfo.facebook}</p>
    <p>Twitter: {contactInfo.twitter}</p>
    <p>RIB (Cotisation: 600 dh/an): {contactInfo.rib}</p>
    <p>Contact: {contactInfo.contactPerson}</p>
  </div>
);

// Main component to render the information
const editorialTeams = () => {
  return (
    <div className="grid xl:grid-cols-2 sm:grid-cols-1    justify-between xl:py-10 xl:px-40 bg-white border-t border-gray-300">
      <EditorialTeam />
      <ContactInfo />
    </div>
  );
};

export default editorialTeams;
