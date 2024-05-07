import React from 'react';
import Tags from './Tags';

import AhdathComimg from "../../../public/aiem_assets/ahdath.png"


const rectangles = [
  { id: 1, imageUrl: '../../../public/aiem_assets/img283.jpg', color: "#f05154", text: "Webinaires de Cadrage de l’Initiative de Mentoring Après le Webinaire de Cadrage organisé au Mois de Janvier 2023, le CRH a convié les Emistes à assister le Mercredi 01 Mars 2023 de 19H à 20H30, au Webinaire de Cadrage II dédié à présenter la procédure de l’initiative Mentoring et à son lancement.", title: "Janvier-mars 2023" },
  { id: 2, imageUrl: '../../../public/aiem_assets/img285.jpg', color: "#ed1567", text: "Sous le Haut Patronage de Sa Majesté le Roi Mohammed VI, que Dieu l’assiste, le Club des Femmes Ingénieurs de l’EMI (CFIE), branche féminine de l’AIEM, a organisé le 11 Mars 2023 la 4ème édition de la rencontre annuelle de la femme ingénieur sous le thème « Leadership féminin, levier d’accélération de la transition énergétique ». Programmé en marge de la journée internationale de la femme, cet événement plaide aussi bien pour des chances équitables de développement professionnel que pour le renforcement de la place de la femme créatrice de valeur au service des Marocains", title: "14 mars 2023" },
  { id: 3, imageUrl: '../../../public/aiem_assets/img294.jpg', color: "#1985c8", text: "bureau AIEM Casablanca conférence sous le thème : «L’économie et les principes de l’Islam, en ces temps de crise» A l’occasion du mois sacré de Ramadan, le bureau AIEM Casablanca vous invite à une série de conférences dont la première sera sous le thème : «L’économie et les principes de l’Islam, en ces temps de crise», le 29 mars à partir de 16h30. Cette rencontre sera suivie d’un Ftour copieux, préparé par l’Association AlHidn.", title: "29 mars 2023" },
  { id: 4, imageUrl: '../../../public/aiem_assets/img296.jpg', color: "#085794", text: "Bureau National de l’AIEM a le plaisir de vous convier à un Ftour-débat Dans le cadre des activités ramadanèsques de l’AIEM, le bureau National de l’AIEM a organisé un ftour-débat sous le thème «Royal air Maroc: un nouvel envol». Le plan stratégique de la RAM, la sortie de la crise, les leçons Covid 19 et d’autres sujets sont débattus par M. Abdelhamid ADDOU Président Directeur Général de la RAM.", title: "03 avril 2023" },
  { id: 5, imageUrl: '../../../public/aiem_assets/img292.jpg', color: "#93ca51", text: "Le Bureau Régional de Rabat-Kénitra a organisé une conférence autour du thème « Chat GPT »", title: "12 avril 2023" },
  { id: 6, imageUrl: '../../../public/aiem_assets/img293.jpg', color: "#ed1567", text: "4ème édition de Ftour EMI GOT TALENT F’tour EMI GOT TALENT est une opportunité pour partager des talents dans une communauté qui encourage soutient les Emistes organisé par le Club des Femmes Ingenieurs (CFIE) le 13/04/2023 à hôtel Farah, Casablanca.", title: "13 avril 2023" },
  { id: 7, imageUrl: '../../../public/aiem_assets/img295.jpg', color: "#fec00d", text: "BR du Nord rendre hommage aux secrétaires généraux de l’AIEM Nord.", title: "14 avril 2023" },
  { id: 8, imageUrl: '../../../public/aiem_assets/img298.jpg', color: "#2597d3", text: "br-casablanca-Tournoi Mini-Foot Aux mordus de foot, le Bureau Régional de l’AIEM à Casablanca organise une nouvelle édition de son Tournoi Mini-Foot pendant le mois du Ramadan. Cette nouvelle édition regroupera 12 équipes qui s’affronteront tout au long de 20 matchs", title: "15 avril 2023" },
  { id: 9, imageUrl: '../../../public/aiem_assets/img322.jpg', color: "#3dae48", text: "29ème Edition du Forum EMI-ENTREPRISES 2023", title: "10-11 mai 2023" },
  { id: 10, imageUrl: '../../../public/aiem_assets/img326.jpg', color: "#91278f", text: "Bureau Régional de l’AIEM Marrakech Safi Dans le cadre de son plan d’action 2023, et dans le but d’élargir ses activités au niveau territorial et de son ouverture sur les différentes provinces de la Région Marrakech Safi, le Bureau Régional de l’AIEM Marrakech Safi, et en collaboration avec les ingénieurs Emistes de l’OCP de Safi et de la Direction du site de l’OCP Safi, a organisé le 25/05/2023 une journée rencontre et une visite au site de l’OCP de Safi.", title: "25 Octobre 2022" },
  { id: 11, imageUrl: '../../../public/aiem_assets/img328.jpg', color: "#ed1567", text: "Le CFIE en collaboration avec Diva Run ont organisé une journée à l’occasion de la Journée mondiale de lutte contre la sclérose en plaque, le 18 juin 2023 au Golf Bouskoura ville verte.", title: "18 juin 2023" },
  { id: 12, imageUrl: '../../../public/aiem_assets/img329.jpg', color: "#f05154", text: "Le Prix Papillon AIEM récompense les PFE des jeunes lauréats mardi 25 juillet 2023 Le Prix Papillon AIEM 2023 récompense les projets de fin d’étude (PFE) réalisés par les jeunes lauréats de l’EMI à fort potentiel d’impact sur les performances des Transitions Sociale, Numérique, Economique et Environnementale. Il est à noter que ces 4 transitions font référence aux changements transformationnels profonds menés par tout pays ou collectivités pour renforcer leur résilience aux vulnérabilités et risques encourues au cours de leur trajectoire de développement. Cet évènement conçu et mené par le club RH de l’AIEM en synergie avec la nouvelle Direction de l’EMI a été organisé en marge de la cérémonie de remise des diplômes de la 60ème promotion.", title: "125 juillet 2023" }
];



const Rectangle = ({ imageUrl, title, text, color }) => {
  // Construct the dynamic style for background color
  const style = {
    backgroundColor: color
  };

  return (
    <div className="flex flex-col  items-center rounded-md justify-start w-[22rem] h-[40rem]" style={style}>
      <img src={imageUrl} alt="Rectangle" className="w-full h-2/5 object-cover" />
      <h1 className="text-3xl text-white  font-bold mt-4">{title || 'Default Title'}</h1>
      <p className="text-sm font-semibold p-2 text-center text-white my-4">{text || 'Default description'}</p>
    </div>
  );
};

const AhdathCom = () => (
    <>
<img src={AhdathComimg} className='w-[38rem]' alt="" />
  <div className="grid xl:grid-cols-4 sm:grid-cols-1 gap-4 justify-center">

    {rectangles.map(({ id, imageUrl, color, text, title }) => (
      <Rectangle key={id} imageUrl={imageUrl} color={color} title={title} text={text} />
    ))}

  </div>
    <Tags/>
</>
);

export default AhdathCom;

