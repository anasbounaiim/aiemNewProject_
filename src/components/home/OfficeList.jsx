import React from 'react';

// Complete data from the image
const offices = [
  { name: 'BR Rabat', leader: 'AHARRAM Youness', email: 'youness.aharram@gmail.com', promotion: '2007' },
  { name: 'BR Agadir', leader: 'KABBAJ Meryem', email: 'm.kabbadj@alamrane.gov.ma', promotion: '2002' },
  { name: 'BR Nord', leader: 'Elkhamlichi Rabie', email: 'r.elkhamlichi@alamrane.gov.ma', promotion: '2003' },
  { name: 'Club Développement Durable', leader: 'ASMAE ELOUFR', email: 'asma.eloufr@gmail.com', promotion: '1991' },
  { name: 'BR Laayoune', leader: 'El Akhrif Rachid', email: 'elakhrir@gmail.com', promotion: '2008' },
  { name: 'BR Meknès - Fes', leader: 'BOUBAKR Fouad', email: 'a.boubakr@bouayad@gmail.com', promotion: '1995' },
  { name: 'Club des Femmes Emistes (CFIE)', leader: 'EL HERRADI Hayat', email: 'h.elherradi@gmail.com', promotion: '1998' },
  { name: 'Club Digital', leader: 'ASMA RAJ HOUISSANI', email: 'asmaeraig@gmail.com', promotion: '1991' },
  { name: 'BR Casablanca - Settat', leader: 'RHOUALA Fadil', email: 'fadil.rhoula@gmail.com', promotion: '1999' },
  { name: 'BR Khouribga - Beni Mellal', leader: 'NAJHI Armina', email: 'Najih44@yahoo.fr', promotion: '1995' },
  { name: 'Club des Ressources Humaines', leader: 'SNOUSSI Youness', email: 'snoussiyouness@gmail.com', promotion: '1992' },
  { name: 'BR Marrakech', leader: 'KHALDOUN Abdelghani', email: 'khaldounabdelghani@yahoo.fr', promotion: '1977' },
  { name: 'BR Oriental', leader: 'AMARTI Safae', email: 'safaeamarti@gmail.com', promotion: '1991' },
  { name: 'Club des Entrepreneurs', leader: 'FOUZIA JEMAL', email: 'f.jemal@aiea.ma', promotion: '1991' },
  { name: 'AIEM Europe', leader: 'BENGARAI Tarik', email: 'Bengarai.tarik@yahoo.fr', promotion: '1999' },
  { name: 'AIEM Amérique du nord', leader: 'SAHIM Saïd', email: 's.said@polymtl.ca', promotion: '2008' },
  { name: 'AIEM Afrique', leader: 'DALIO Ibrahim', email: 'dindari@gmail.com', promotion: '2004' }
];

// Component to display each office
const OfficeCard = ({ office }) => (
  <div className="p-4 border border-gray-300 rounded-lg">
    <h2 className="font-bold text-lg">{office.name}</h2>
    <p>SG: {office.leader}</p>
    <p>Email: {office.email}</p>
    <p>Promotion: {office.promotion}</p>
  </div>
);

// Main component to render the list of offices
const OfficeList = () => {
  return (
    <div className="grid  xl:grid-cols-3 sm:grid-cols-1 gap-4 xl:p-4">
      {offices.map((office, index) => (
        <OfficeCard key={index} office={office} />
      ))}
    </div>
  );
};

export default OfficeList;
