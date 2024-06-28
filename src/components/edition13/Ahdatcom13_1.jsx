import React from 'react';
import Tags from '../../components/home/Tags';

import AhdathComimg from "../../../public/aiem_assets/ahdath.png"

import img283 from '../../../public/aiem_assets/aiemEdition13/img01.jpg';
import img285 from '../../../public/aiem_assets/aiemEdition13/img02.jpg';
import img294 from '../../../public/aiem_assets/aiemEdition13/img03.jpg';
import img296 from '../../../public/aiem_assets/aiemEdition13/img04.jpg';
import img292 from '../../../public/aiem_assets/aiemEdition13/img05.jpg';
import img293 from '../../../public/aiem_assets/aiemEdition13/img06.jpg';
import img295 from '../../../public/aiem_assets/aiemEdition13/img07.jpg';
import img298 from '../../../public/aiem_assets/aiemEdition13/img08.jpg';
import img322 from '../../../public/aiem_assets/aiemEdition13/img09.jpg';
import img326 from '../../../public/aiem_assets/aiemEdition13/img010.jpg';
import img328 from '../../../public/aiem_assets/aiemEdition13/img011.jpg';
import img329 from '../../../public/aiem_assets/aiemEdition13/img012.jpg';

import img330 from '../../../public/aiem_assets/aiemEdition13/img013.jpg';
import img331 from '../../../public/aiem_assets/aiemEdition13/img014.jpg';
import img332 from '../../../public/aiem_assets/aiemEdition13/img015.jpg';
import img333 from '../../../public/aiem_assets/aiemEdition13/img016.jpg';



const rectangles = [
    {
      id: 1, imageUrl: img283, color: "#f05154", text: `AIEM Marrakech
      Opération paniers ramadan 2024:
      distribution de 237 paniers aux
      Douars tizi oussem, timide zgharet`, title: "19 mars 2024"
    },
    { id: 2, imageUrl: img285, color: "#ed1567", text: `AIEM Marrakech
    Opération paniers ramadan 2024:
    distribution de 221 paniers aux
    douars Marigha Ijoukak`, title: "21 mars 2024" },
    { id: 3, imageUrl: img294, color: "#1985c8", text: `AIEM Casablanca-Settat
    Opération paniers ramadan 2024: Au
    profit du Douar : Imi-ntaghrist- Commune
    : Tidili -Région el Haouz`, title: "23 mars 2024" },

    { id: 4, imageUrl: img296, color: "#085794", text: `Bureau National de l’AIEM
    Ftour débat avec M. Abdelatif
    Zaghnoun au sujet de la réforme
    des Établissements et Entreprises
    Publics`, title: "25 mars 2024" },
    { id: 5, imageUrl: img292, color: "#93ca51", text: `Bureau régional AIEM oriental
    organise une rencontre ftour`, title: "28 mars 2024" },


    { id: 6, imageUrl: img293, color: "#ed1567", text: `Le club CFIE
    Organise la 5ème édition du Ftour
    EMI GOT TALENT`, title: "29 mars 2024" },

    { id: 7, imageUrl: img295, color: "#fec00d", text: `AIEM Casablanca-Settat
Opération paniers ramadan 2024: 26
paniers au profit du Douar : Taltia sidi
Daoud - Commune Ait aourir - Région
el haouz`, title: "30 mars 2024" },
    { id: 8, imageUrl: img298, color: "#2597d3", text: `AIEM Casablanca - Settat
    Organise la première édition «Omra
    Ramadan»`, title: "du 21 mars au 1er avril 2024" },

    { id: 9, imageUrl: img322, color: "#3dae48", text: `AIEM Casablanca-Settat
Opération KISWAT AID EL FITR au
profit de 83 orphelins et orphelines
de la commune Tidily - Région El
Haouz`, title: "7 avril 2024" },
    { id: 10, imageUrl: img326, color: "#91278f", text: `AIEM Casablanca - Settat
    Opération KISWAT AID EL FITR au
    profit de 46 enfants dans l’école
    de Godman - Douar : Godman
    Commune Tidily - Région el haouz`, title: "7 avril 2024" },

    { id: 11, imageUrl: img328, color: "#ed1567", text: `AIEM bureau RABAT KENITRA
    Ftour débat avec M. Hassan AYADI*
    sous le thème « Connaissance de
    SOl, premier pas vers le Bien-être
    Durable ».`, title: "5 avril 2024" },

    { id: 12, imageUrl: img329, color: "#2597d3", text: `Le club CFIE
Organisation de la 1ere édition du
Nour Rallye Raid, Rallye 100%
Femmes Africaines au Maroc
dans le désert de MERZOUGA; en
partenariat avec CFIE et l’AIEM`, title: "15 au 18 avril 2024" },

    { id: 13, imageUrl: img330, color: "#1985c8", text: `AIEM - Casablanca - Settat
    Matinée Sportive de l’AIEMCasablanca-
    Settat à la Forêt de
    bouskoura Casablanca`, title: "21 avril 2024" },
    { id: 14, imageUrl: img331, color: "#ed1567", text: `Participation de l’AIEM/RH à
    l’ouvrture de la 30ème Edition du
    Forum EMI-ENTREPRISES`, title: "08-09 mai 2024" },

    { id: 15, imageUrl: img332, color: "#fec00d", text: `AIEM Casablanca-Settat, Fès-
Meknès et L’Oriental et le Club
Développement Durable Aventure
Taza: Parcours et Patrimoinevoyage
dans la région de Taza des
randonnées captivantes, des
visites de lieux pittoresques et des
découvertes culturelles`, title: "Du 31/05 au 2 juin 2024" },
    { id: 16, imageUrl: img333, color: "#ed1567", text: `Dans la continuité de l’initiative
    «Territorial Workshop TW4Water
    sustainability» lancé lors de la
    conférence débat du 25 novembre
    2023, le Club de Développement
    Durable (CDD) en collaboration avec
    le Bureau Régional du Nord ont
    organisés un atelier régional sur «la
    Gestion durable de l’Eau: vers un
    modèle innovant et résilient» le 13
    Juin 2024 à 16Hh00 à Hilton Garden
    Inn Tanger City Center`, title: "13 juin 2024" },
  ];



const Rectangle = ({ imageUrl, title, text, color }) => {
    // Construct the dynamic style for background color
    const style = {
        backgroundColor: color
    };

    return (
        <div className="flex flex-col  items-center rounded-md justify-start w-[22rem] h-[30rem]" style={style}>
            <img src={imageUrl} alt="Rectangle" className="w-full h-2/5 object-cover" />
            <h1 className="text-3xl text-white  font-bold mt-4">{title || 'Default Title'}</h1>
            <p className="text-sm font-semibold p-2 text-center text-white my-4">{text || 'Default description'}</p>
        </div>
    );
};

const AhdathCom13 = () => (
    <>
        <img src={AhdathComimg} className='w-[38rem]' alt="" />
        <div className="grid xl:grid-cols-4 sm:grid-cols-1 gap-4 justify-center">

            {rectangles.map(({ id, imageUrl, color, text, title }) => (
                <Rectangle key={id} imageUrl={imageUrl} color={color} title={title} text={text} />
            ))}

        </div>
        <Tags />
    </>
);

export default AhdathCom13;

