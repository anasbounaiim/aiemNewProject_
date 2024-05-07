import React from 'react';

// Define the data for the tags as seen in the image
const tags = [
  { name: 'Bureau Régional de Casablanca', color: '#8cc63e' },
  { name: 'Bureau Régional de Tanger', color: '#8cc63e' },
  { name: 'Club des Femmes Ingénieurs de l’EMI (CFIE)', color: '#ed1e79' },
  { name: 'Bureau National', color: '#085794' },
  { name: 'Bureau AIEM-Europ', color: '#f7931e' },
  { name: 'Club RH', color: '#92278f' },
  { name: 'Bureau Régional de Safi', color: '#8cc63e' },
  { name: 'Bureau Régional de Marrakech', color: '#8cc63e' },
  { name: 'Bureau Régional de Rabat', color: '#8cc63e' },
  { name: 'Club Développement Durable (CDD)', color: '#29abe2' },
  { name: 'Club Entrepreneurs', color: '#754c24' },
  { name: 'Club Digital', color: '#29abe2' }
];

// Component to display each tag
const Tag = ({ name, color }) => (
  <div className=" items-center gap-2 px-6 flex mb-2 justify-start ">
    <span className="block w-3 h-3 rounded-full" style={{ backgroundColor: color }}></span>
    <span className="text-sm text-gray-700">{name}</span>
  </div>
);

// Main component to render the list of tags
const TagList = () => {
  return (
    <div className="p-4 grid xl:grid-cols-6 grid-cols-1 gap-3 xl:ml-32  ">
      {tags.map((tag, index) => (
        <Tag key={index} name={tag.name} color={tag.color} />
      ))}
    </div>
  );
};

export default TagList;
