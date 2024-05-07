import React from "react";

const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);
  return (
    <>
      <div className="flex flex-wrap px-5 lg:px-40">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row gap-3 items-center"
            role="tablist"
          >
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-[#139bcd]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                08:00-08:30
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-[#139bcd]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                08:30-10:00
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-[#139bcd]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                10:00-11:00
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 4
                    ? "text-white bg-[#139bcd]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(4);
                }}
                data-toggle="tab"
                href="#link4"
                role="tablist"
              >
                10:00-11:15
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 5
                    ? "text-white bg-[#139bcd]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(5);
                }}
                data-toggle="tab"
                href="#link5"
                role="tablist"
              >
                11:15-12:15
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block  " +
                  (openTab === 6
                    ? "text-white bg-[#139bcd]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(6);
                }}
                data-toggle="tab"
                href="#link6"
                role="tablist"
              >
                12:15-13:15
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 7
                    ? "text-white bg-[#139bcd]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(7);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                13:15-14:15
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 8
                    ? "text-white bg-[#139bcd]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(8);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                14:15-14:45
              </a>
            </li>
            <li className=" flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 9
                    ? "text-white bg-[#139bcd]"
                    : "text-" + color + "-600 bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(9);
                }}
                data-toggle="tab"
                href="#link7"
                role="tablist"
              >
                14:45
              </a>
            </li>
          
          </ul>
          <div className="relative flex flex-col min-w-0 break-words h-80 overflow-y-scroll bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <p className="text-xl font-bold px-4">
                    Accueil et enregistrement des participants
                  </p>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <p>
                    <span className="text-xl font-bold px-4 ">
                      Mots de bienvenue
                    </span>
                    <p className="px-5 my-3">
                      <ul>
                        <li>
                          Directeur de l'EMI :{" "}
                          <span className="font-bold">M. Hassane Mahmoudi</span>
                        </li>
                        <li>
                          Présidente de l'AIEM:{" "}
                          <span className="font-bold">
                            Mme Nawal Gharmili Sefrioui
                          </span>
                        </li>
                      </ul>
                    </p>
                    <span className="text-xl font-bold px-4 ">
                      Cérémonie officielle
                    </span>
                    <br />

                    <p className="px-5 my-3">
                      <ul>
                        <li>
                          Ministre de l'Enseignement Supérieur, de la Recherche
                          Scientifique et l'Innovation :{" "}
                          <span className="font-bold">
                            M. Abdellatif Miraoui
                          </span>
                        </li>
                        <li>
                          Ministre de l'Équipement et de l'Eau :{" "}
                          <span className="font-bold">M. Nizar Baraka</span>
                        </li>
                        <li>
                          Président par Intérim de l'Université Mohammed V:{" "}
                          <span className="font-bold">M. Farid El Bacha</span>
                        </li>
                      </ul>
                    </p>
                    <span className="text-xl font-bold px-4 ">
                      Club Développement Durable
                    </span>
                    <br />
                    <p className="px-5 my-3">
                      <ul>
                        <li>
                          Présentation des activités du Club Développement
                          Durable et lancement de l'initiative "Territorial
                          Workshop for Water Sustainability":{" "}
                          <span className="font-bold">Mme Asmae Eloufir</span>
                        </li>
                      </ul>
                    </p>
                  </p>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    

                  <span className="text-xl font-bold pl-4 ">
                  Panel 1: Optimisation des ressources hydriques conventionnelles
                    </span>
                    <br />
                    <p className="text-lg font-medium px-4 pt-2 ">
                      Modérateur : Mhamed Belghiti (Rapporteurs : M.Yassine Zalim
                      / Mme Rhita Bennouna)
                    </p>
                    <br />
                    <p className="px-4 ">
                      - Stratégies d’optimisation de la gestion de la demande
                      d’eau potable et industrielle :{" "}
                      <span className="font-bold">M.Mustapha El Habti - DGCT</span>{" "}

                      <br />- Quelles approches régionales pour une exploitation
                      rationnelle et durable des ressources en eau souterraines
                      ? : <span className="font-bold"> M. Mohamed Chtioui - ABHT</span>

                      <br /> - Comment concilier les besoins agricoles et la
                      préservation des ressources hydriques pour une agriculture
                      durable : <span className="font-bold">
                      M. Ahmed Bouari - DIAEA
                      </span>{" "}

                      <br /> - Enjeux et opportunités des transferts d’eau entre
                      les bassins hydrauliques :{" "}
                      <span className="font-bold">M. Mokhtar Bzioui - Expert</span>

                      <br />- Apport des technologies spatiales de surveillance
                      et de gestion des ressources hydriques :{" "}
                      <span className="font-bold">M. Driss El Hadani - UNOOSA</span>
                      <br />
                      -Mobilisation des ressources en eau dans un contexte de stress hydrique: 
                      <span className="font-bold"> M. Tahri Khalid - ONEE</span>
                      <br />
                    </p>



                  </p>
                </div>
                <div className={openTab === 4 ? "block" : "hidden"} id="link4">
                  <p>
                  <span className="text-xl font-bold pl-4 ">Pause-café
                    </span>
                  </p>
                </div>

                <div className={openTab === 5 ? "block" : "hidden"} id="link5">
                  <p>
                  <span className="text-xl font-bold px-4 ">
                      Panel 2 : Valorisation des ressources hydriques non conventionnelles
                    </span>
                    <p className="text-lg font-medium px-4 pt-2 ">
                    Modérateur : M. Abdelkader Saidi (Rapporteurs : MM. Mohammed Ghazi/Youssef Zerradi)
                    </p>

                    <p className="px-4 mt-5">
                      -Réutilisation des eaux usées traitées au Maroc - Etat actuel et perspectives : {" "}
                      <span className="font-bold">Mme Safae Amarti - RADEEO</span> <br />
                      -Dessalement de l'eau de mer et de l'eau saumâtre - Etat actuel et perspectives :{" "}
                      <span className="font-bold">M. Mahmoud Hafsi - Consultant</span> <br />
                      -Dessalement de l'eau de mer et de l'eau saumâtre: Avancées technologiques et perspectives pour une utilisation durable : {" "}
                      <span className="font-bold"> M. Jauad El Kharraz - RCREEE</span>
                      <br />- Mobilisation des eaux non conventionnelles : Avantages, défis et bonnes pratiques : {" "}
                      <span className="font-bold">Mme Iman Media - OCP Group</span> <br />
                      - Gestion des eaux pluviales : Meilleures pratiques de collecte et d'utilisation efficace : {" "}
                      <span className="font-bold">M. Moulay Driss Hasnaoui - DGH</span>{" "}
                      <br />-Impact de l'adoption des énergies renouvelables sur la valorisation des eaux non conventionnelles : {" "}
                      <span className="font-bold">M. Hicham Bouzekri - MASEN</span>
                    </p>
                  </p>
                </div>


                <div className={openTab === 6 ? "block" : "hidden"} id="link6">
                  <p>
                  <span className="text-xl font-bold px-4 ">
                  Panel 3 : Recherche, Développement, Innovation et Éducation: Pour une gestion durable et intelligente de l'eau
                    </span>
                    <p className="text-lg font-medium px-4 pt-2 ">
                    Modérateur : M. Driss Ouazar (Rapporteurs : Mme Amal Aboulhassane / M. Othman Ait Ihia)
                    </p>

                    <p className="px-4 mt-5">
                      - Adaptation aux changements climatiques : Stratégies et solutions innovantes pour faire face aux défis futurs : 
                      : <span className="font-bold">M. Abdallah Mokssit - GIEC</span>{" "}

                      <br />- Gestion optimisée des ressources en eaux souterraines: {" "}
                      <span className="font-bold">M. Abdelkader Larabi - EMI</span>{" "}

                      <br />- AAvancées technologiques dans le traitement et le dessalement de l'eau : Solutions pour une utilisation efficace des ressources hydriques :{" "}
                      <span className="font-bold">
                      Mme Naoual Semlali Hassani - EMI & M. Jamaleddine Jellal - EMI
                      </span>{" "}
                      <br />- Apport des technologies avancées (IoT, IA, Blockchain, etc.) dans la gestion de l'eau : Potentiels et applications concrètes :
                      <span className="font-bold"> M. Mohamed Essaidi - EMSI</span> <br />

                      - Éducation et sensibilisation pour une gestion durable de l'eau : Comment renforcer la conscience environnementale et favoriser un changement de comportement ?: 
                      <span className="font-bold"> M. Mohamed Alaoui - UNESCO</span>{" "}
                      <br />
                    </p>
                  </p>
                </div>

                <div className={openTab === 7 ? "block" : "hidden"} id="link7">
                  <p>
                  <span className="text-xl font-bold px-4 ">
                    Panel 4: Gouvernance, Financement et Modèles innovants
                    </span>
                    <p className="text-lg font-medium px-4 pt-2 ">
                    Modératrice : Mme Zineb Benjelloun (Rapporteuses: Mmes Doha Alami / Fatiha Ait Lhaj)
                    </p>
                    <p className=" font-medium px-4 pt-2 ">
                      <ul>
                        <li>
                        - Quel mode de gouvernance pour faire face à la rareté ? : 
                          <span className="font-bold">Mme Charafat Afailal - Ex-ministre en charge de l'Eau</span>
                        </li>
                        <li>
                        - Réformes institutionnelles : Quelles mesures pour améliorer la gouvernance et la régulation de l'eau ? : 
                          <span className="font-bold">Mme Houria Tazi Sadeq - COALMA</span>
                        </li>
                        <li>
                        - Financer la durabilité hydrique : Opportunités de la Finance Climatique dans la gestion de l'eau : 
                          <span className="font-bold">M. Iskander Erzini Vernoit - IMAL</span>
                        </li>
                        <li>
                        - Accroitre le financement pour l'Eau : vers un modèle économique viable et durable : 
                          <span className="font-bold"> Mme Safae Bahije - Banque Mondiale</span>
                        </li>
                        <li>
                        - Solutions financières innovantes face à la problématique de l'eau : 
                          <span className="font-bold"> Mme Cristina Di Silvio - USFTI</span>{" "}

                        </li>
                      </ul>
                    </p>
                   
                  </p>
                </div>
                <div className={openTab === 8 ? "block" : "hidden"} id="link8">
                  <p>
                  <span className="text-xl font-bold px-4 ">
                  Cérémonie de clôture
                    </span>
                    <p className="px-4 mt-5">
                      - Synthèse et Recommandations <br />- Remerciements
                    </p>
                  </p>
                </div>
                <div className={openTab === 9 ? "block" : "hidden"} id="link9">
                  <p>
                  <span className="text-xl font-bold px-4 ">
                  Déjeuner
                    </span>
                  
                  </p>
                </div>
                

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      return <Tabs color="lightBlue" />;
    </>
  );
}
