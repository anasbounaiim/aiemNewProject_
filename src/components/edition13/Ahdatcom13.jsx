import React from 'react';
import Tags from '../../components/home/Tags';

import AhdathComimg from "../../../public/aiem_assets/ahdath.png"

import img283 from '../../../public/aiem_assets/aiemEdition13/img1.jpg';
import img285 from '../../../public/aiem_assets/aiemEdition13/img2.jpg';
import img294 from '../../../public/aiem_assets/aiemEdition13/img3.jpg';
import img296 from '../../../public/aiem_assets/aiemEdition13/img4.jpg';
import img292 from '../../../public/aiem_assets/aiemEdition13/img5.jpg';
import img293 from '../../../public/aiem_assets/aiemEdition13/img6.jpg';
import img295 from '../../../public/aiem_assets/aiemEdition13/img7.jpg';
import img298 from '../../../public/aiem_assets/aiemEdition13/img8.jpg';
import img322 from '../../../public/aiem_assets/aiemEdition13/img9.jpg';
import img326 from '../../../public/aiem_assets/aiemEdition13/img10.jpg';
import img328 from '../../../public/aiem_assets/aiemEdition13/img11.jpg';
import img329 from '../../../public/aiem_assets/aiemEdition13/img12.jpg';

import img330 from '../../../public/aiem_assets/aiemEdition13/img13.jpg';
import img331 from '../../../public/aiem_assets/aiemEdition13/img14.jpg';
import img332 from '../../../public/aiem_assets/aiemEdition13/img15.jpg';
import img333 from '../../../public/aiem_assets/aiemEdition13/img16.jpg';



const rectangles = [
    {
      id: 1, imageUrl: img283, color: "#f05154", text: `L’AIEM, à travers son Club de Développement Durable (CDD) et
      l’École Mohammadia d’Ingénieurs
      (EMI) ont organisés une conférencedébat
      sous le Haut Patronage de Sa
      Majesté le Roi Mohammed VI.Cette
      rencontre a mis en lumière une
      thématique d’actualité cruciale : «La
      Gestion durable de L’eau Vers un
      Modèle Innovant et Résilient.»`, title: "25 novembre 2023"
    },
    { id: 2, imageUrl: img285, color: "#ed1567", text: `AIEM Casablanca-Settat
    Matinées Sportives en Plein Air à la
    Forêt de Bouskoura`, title: "17 décembre 2023" },
    { id: 3, imageUrl: img294, color: "#1985c8", text: `L’AIEM Casablanca-Settat
    Énergie et Vitalité Devant l’École
    Américaine de Casablanca`, title: "14 janvier 2024" },
    { id: 4, imageUrl: img296, color: "#085794", text: `CFIE-AFEM-AMDIE organisent un
    Webinaire sous le thème:
    SOUTENONS NOS ENTREPRISES
    MAROCAINES EXPORTATRICES`, title: "20 janvier 2024" },
    { id: 5, imageUrl: img292, color: "#93ca51", text: `L’AIEM Casablanca-Settat Matinée
    sportive AIEM Casablanca-Settat à
    la Forêt de Bouskoura`, title: "28 janvier 2024" },
    { id: 6, imageUrl: img293, color: "#ed1567", text: `L’AIEM Casablanca-Settat
    organisent un Afterwork sous le
    thème:
    « Les dispositions de la loi de finance
    2024 » . Il fut consacré aux
    récentes dispositions de la loi de
    finance 2024`, title: "30 janvier 2024" },
    { id: 7, imageUrl: img295, color: "#fec00d", text: `AIEM Casablanca-Settat
    Matinée sportive AIEM Casablanca-
    Settat à la Forêt de Bouskoura`, title: "11 février 2024" },
    { id: 8, imageUrl: img298, color: "#2597d3", text: `Club Digital
    Digital Coffee, autour du thème : «La
    quête du Bonheur dans un monde
    digital».`, title: "16 février 2024" },
    { id: 9, imageUrl: img322, color: "#3dae48", text: `BR MARRAKECH-SAFI
    au sujet Déjeuner débat sur du rôle
    de l’ingénieur dans le royaume`, title: "17 février 2024" },
    { id: 10, imageUrl: img326, color: "#91278f", text: `L’AIEM Casablanca-Settat
    Séance d’initiation et de préparation
    des participants à la 1ere édition de
    OMRA Ramadan`, title: "24 février 2024" },
    { id: 11, imageUrl: img328, color: "#ed1567", text: `BR AIEM Oriental
    Visite de la société Apriv à Oujda
    Visite port west MedFtour Ramadan`, title: "24 février 2024" },
    { id: 12, imageUrl: img329, color: "#2597d3", text: `AIEM Casablanca-Settat
    Randonnée région Arjate : ARBAA
    S’HOUL`, title: "25 février 2024" },
    { id: 13, imageUrl: img330, color: "#1985c8", text: `CFIE
    Signature de la convention de
    partenariat entre le CFIE et
    l’Association des Femmes Chefs
    d’Entreprises du Maroc (AFEM)`, title: "08 mars 2024" },
    { id: 14, imageUrl: img331, color: "#ed1567", text: `AIEM Casablanca-Settat
    Opération paniers ramadan 2024:
    120 paniers au profit du Douar :
    Godman - Commune tidil-Région el
    haouz`, title: "09 mars 2024" },
    { id: 15, imageUrl: img332, color: "#fec00d", text: `Distribution de paniers de Ramadan
    à la commune de Ouirgane au profit
    des habitants de 2 Douars appartenant
    à cette commune.`, title: "16 mars 2024" },
    { id: 16, imageUrl: img333, color: "#ed1567", text: `AIEM Marrakech
    Opération paniers ramadan 2024:
    distribution de 243 paniers aux
    douars aourigh, tiniskte, aguerd, Ait
    chrah, tizert, Ait Hsain, izalane et
    taourirt`, title: "16 mars 2024" },
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

