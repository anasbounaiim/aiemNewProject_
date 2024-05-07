import Program from "./Program";
import AhdathCom from "./AhdathCom";
import OfficeList from "./OfficeList";
import EditorialTeam from "./editorialTeam";
import Commite from "./commite";


import pfp1 from "../../../public/aiem_assets/aiemFaces/img29801.png";
import pfp2 from "../../../public/aiem_assets/aiemFaces/img2981.jpg";

import car1 from "../../../public/aiem_assets/img209.jpg";
import car2 from "../../../public/aiem_assets/img289.jpg";
import car3 from "../../../public/aiem_assets/img296.jpg";
import car4 from "../../../public/aiem_assets/img240.jpg";
import car5 from "../../../public/aiem_assets/img286.jpg";
import car6 from "../../../public/aiem_assets/img212.jpg";
import car7 from "../../../public/aiem_assets/img215.jpg";
import car8 from "../../../public/aiem_assets/img214.jpg";

import aff from "../../../public/aiem_assets/aff.jpg";

import maps from "../../../public/aiem_assets/maps.png";
import mapsdeMA from "../../../public/aiem_assets/mapsdeMA.jpg";

const Home = () => {
  return (
    <div className=" text-black w-fit">
<div className="flex flex-col xl:flex-row justify-center items-center w-full h-screen xl:pt-24 overflow-hidden sm:flex-col">
  <div className="xl:w-1/2 md:w-full">
    <img src={aff} className="xl:p-36 xl:pt-72 rounded-lg" alt="" />
  </div>

  <div className="bg-white  xl:pt-40 xl:pr-36 xl:w-1/2 md:w-full overflow-y-scroll p-4">
    <h1 className="text-xl font-bold mb-4">
      Déficit hydrique et stratégie de gestion de l'eau au Maroc
    </h1>
    <p className="mb-4">
      Le déficit hydrique en eau au Maroc s’accentuera de plus en plus pour atteindre une pénurie en 2030. Ce bilan est étroitement lié à plusieurs facteurs dont:
    </p>
    <ul className="list-disc list-inside mb-4">
      <li>La croissance démographique, et son corollaire l’urbanisation galopante.</li>
      <li>L’effet de politiques publiques et de stratégies sectorielles qui ne tiennent pas suffisamment compte des impératifs de durabilité des ressources.</li>
      <li>L’essor économique et industriel des régions marocaines combiné à une gestion insuffisamment optimisée de cette ressource.</li>
      <li>L’envasement régulier des barrages qui réduit leur capacité de stockage.</li>
      <li>La surexploitation des eaux souterraines qui engendrant une baisse conséquente du niveau des nappes souterraines.</li>
      <li>Les impacts des changements climatiques.</li>
    </ul>
    <p className="mb-4">
      La raréfaction de l’eau menace directement les équilibres économiques, environnementaux et sociaux du pays, particulièrement dans les régions arides et semi-arides.
    </p>
    <h2 className="text-lg font-semibold mb-2">Objectifs et Stratégie</h2>
    <p className="mb-4">
      La gestion intégrée et durable des ressources en eau constitue un enjeu stratégique majeur aux multiples dimensions sociales, économiques et environnementales, nécessitant:
    </p>
    <ol className="list-decimal list-inside mb-4">
      <li>Une approche systémique multi-acteurs et multi-échelles de gouvernance.</li>
      <li>Des solutions institutionnelles, technologiques et financières innovantes qui mettent l’accent sur l’efficience de l’utilisation des ressources en eau de surface et souterraines.</li>
      <li>Une gestion territorialisée adaptée aux spécificités climatiques régionales et locales.</li>
    </ol>
    <p className="mb-4">
      Le Nouveau Modèle de Développement (NMD) place cette problématique au cœur des urgences sociétales à traiter dans une approche donnant la primauté à la préservation et une meilleure valorisation des ressources en eau à long terme et une gestion plus rigoureuse de sa rareté pour les générations actuelles et futures ainsi que le recours à la mobilisation des ressources hydriques non conventionnelles grâce à la science, la technologie et l’innovation.
    </p>
    <h2 className="text-lg font-semibold mb-2">Atelier et Conférence</h2>
    <p className="mb-4">
      L’Association des Ingénieurs de l’École Mohammadia en partenariat avec l’École Mohammadia d’Ingénieurs organise un atelier qui se tiendra le 25 novembre 2023 à l’EMI - Rabat sous le thème : « GESTION DURABLE DE L’EAU VERS UN MODELE INNOVANT ET RESILENT ». Cette conférence-débat se donne pour objectif de faciliter les échanges et retours d’expériences en matière de planification, de régulation, de financement, et de déploiement des technologies de production et d’optimisation des ressources en eau conventionnelles, ainsi que le recours aux eaux non conventionnelles.
    </p>
  </div>
</div>

      {/* Hero page page*/}
      <div className={``}>
  <div className={`w-full flex flex-col xl:flex-row h-full justify-center items-center gap-1 xl:gap-4 xl:px-20 `}>
    <div className="bg-[#f0ecec] rounded-md flex flex-col xl:mt-24 xl:w-1/3 gap-4 h-[50rem] xl:p-5 overflow-y-scroll">
      <div className="bg-[#e7e3e3] rounded-md flex flex-row items-center gap-7 w-full h-52 p-6">
        <div>
          <img className="w-64" src={pfp1} alt="" />
        </div>
        <div>
          <p className="text-3xl text-black font-extrabold">ASMAE ELOUFIR</p>
          <p className="text-xl text-black">Promotion 1991 Génie Civil Secrétaire Générale CFIE</p>
        </div>
      </div>
      <h1 className="items-start text-xl font-bold pl-6">EMITORIAL</h1>
      <p className="text-black p-6">
        Chers Emistes, C’est avec une immense joie que je partage avec vous dans ce Balcom, les activités du Club Développement Durable de l’AIEM. (CDD) fort de l’expertise de ses membres dans tous les domaines liés au développement durable, le club ne cesse d’oeuvrer dans la promotion, l’échange et l’apport de solutions liés aux thématiques de gestion des déchets , de décarbonation liée au green deal européens, aux énergies renouvelables , à la gestion de l’eau , à travers des conférences organisées à l’échelle nationale et internationale ; Nous avons opté pour que cette année soit une année dédiée à la thématique de l’eau. En effet, le monde connaît des mutations profondes liées aux changements climatiques. Le Maroc connait un stress hydrique très important et menace l’équilibre socio- économique de notre pays. Sa Majesté a donné Ses Hautes instructions pour plancher sur la problématique du stress hydrique avec toute l’attention et l’intérêt nécessaires, de réfléchir à des solutions alternatives et de mettre en place des politiques publiques efficaces permettant de réduire les incidences de la sécheresse et faire face à la pénurie d’eau. Conscient de ces enjeux, Le club développement durable de l’AIEM, contribue par l’organisation, sous le haut patronage de sa majesté le Roi Mohamed 6, que dieu le glorifie, d’une conférence débat, sous le thème : Gestion durable de l’eau vers un modèle innovant et résilient, en partenariat avec l’école Mohammedia des Ingénieurs. A la suite de cette conférence, et des recommandations retenues, suivront des ateliers régionaux focalisés sur les spécifités et besoin de chaque région du royaume Je vous souhaite une excellente lecture
      </p>
    </div>
    <div className="flex flex-col gap-12 mt-24 xl:w-2/3 h-[50rem]">
      <div className="bg-[#e7e3e3] xl:px-24 gap-6 rounded items-center flex flex-col xl:flex-row  w-full h-96 xl:h-44">
        <h1 className="items-start text-2xl font-bold ">BIZU DE N°</h1>
        <div>
          <img className="w-32 rounded-full" src={pfp2} alt="" />
        </div>
        <div className="">
          <p className="text-4xl text-black font-extrabold">Zineb BENHMIDOUCH</p>
          <p className="text-2xl text-black">Promotion 2020 Génie Électrique</p>
        </div>
      </div>
      <div className="w-full h-[37rem] overflow-y-scroll ">
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
          <h1 className="text-[#00adee] text-xl font-bold">Zineb's Profile</h1>
          <p>
            Zineb is a 25-year-old electrical engineer who has graduated from the prestigious Mohammadia School of Engineers in 2020. Currently, she is a Research & Development control systems engineer at the Moroccan Agency for Sustainable Energy (MASEN). She is a highly motivated and driven individual who loves to think outside the box and to push the boundaries of innovation. With a passion for researching and creating new technologies, she believes that by conducting research, we can not only make great strides in the scientific community, but also improve the lives of people around the world.
          </p>
          {/* The rest of Zineb's profile */}
          <h2 className="text-[#00adee] text-xl font-bold">
                  1. Important Skills or Knowledge Acquired During Academic
                  Experience
                </h2>
                <p>
                  The most important skills and knowledge that I acquired during
                  my academic experience were problem solving, critical
                  thinking, and teamwork. I also developed a deep understanding
                  of the scientific method and engineering principles. I
                  developed strong communication and collaboration skills, which
                  have been invaluable in my career as an R&D Engineer. Finally,
                  I was able to hone my technical skills in computer
                  programming, electronics, and other engineering-related
                  topics.
                </p>

                <h2 className="text-[#00adee] text-xl font-bold">
                  2. How Your Interest in Research Began
                </h2>
                <p>
                  My interest in research began since my childhood. I was always
                  curious about the world around me and wanted to understand how
                  things worked. I discovered that research was a great way to
                  gain knowledge and explore the unknown. So, I began to read
                  and research different topics that interested me, such as
                  mechanics and electronics. I was fascinated by the ability of
                  scientists to observe the natural world and use the evidence
                  to answer questions and solve problems. I found that the
                  process of researching and understanding the fundamentals of a
                  phenomenon was both rewarding and challenging. This inspired
                  me to pursue a degree in science and to continue my studies in
                  research.
                </p>

                <h2 className="text-[#00adee] text-xl font-bold">
                  3. Valuable Lessons Learned in the Workplace
                </h2>
                <p>
                  The most valuable lessons I have learned in the workplace are
                  to be organized, to be adaptable, to take initiative, and to
                  be a good communicator. Being organized helps to ensure tasks
                  are completed efficiently and on time. Being adaptable is
                  important as the workplace is constantly changing and it is
                  important to be able to adjust to the new conditions. Taking
                  initiative is also important as it shows that you are
                  proactive and can take on new tasks. Finally, effective
                  communication between co-workers, managers, and clients is
                  essential for any successful team or project. I have learned
                  that strong communication skills are essential for
                  problem-solving, collaboration, and achieving goals.
                  Additionally, I have also learned that it is important to be
                  open to different perspectives and opinions, and to be willing
                  to ask questions and learn from others. These lessons have
                  been invaluable and have helped me to be successful in the
                  workplace.
                </p>

                <h2 className="text-[#00adee] text-xl font-bold">
                  4. Energy Transition
                </h2>
                <p>
                  Energy transition is a term used to describe the process of
                  transitioning from a traditional fossil fuel-based energy
                  system to one that is more sustainable, renewable and green.
                  This transition is an important part of the global effort to
                  reduce emissions and mitigate climate change. The energy
                  transition is complex and requires a multi-faceted approach to
                  ensure that it is done in a way that is socially, economically
                  and environmentally responsible. This includes investing in
                  renewable energy sources such as solar, wind, and geothermal,
                  as well as becoming more efficient in the way we use energy.
                  It also involves the development of new technologies such as
                  battery storage, energy storage and microgrids, and the
                  integration of renewable energy into the existing energy
                  infrastructure which I am currently working on at MASEN. It is
                  a long-term process that will require significant investments
                  in infrastructure and policy changes, but it is a necessary
                  step to ensure a sustainable future.
                </p>

                <h2 className="text-[#00adee] text-xl font-bold">
                  5. Advice to Aspiring Engineering Students
                </h2>
                <p>
                  My advice for an aspiring engineering student would be to take
                  advantage of all opportunities available to you. Make sure to
                  take advantage of internships, summer programs, and research
                  opportunities that can help you gain valuable experience and
                  knowledge. Additionally, stay up-to-date on the latest
                  industry trends, technologies, and tools so that you can stay
                  ahead of the competition. Finally, don’t be afraid to reach
                  out to professionals in the field to ask for advice, network,
                  and build relationships - this is how you will learn the most!
                </p>

        </div>
      </div>
    </div>
  </div>
</div>


      {/* PROGRAMME DE L’ATELIER */}

      <div className="w-full flex flex-col justify-center lg:h-[700px] p-4  bg-[#139bcd] font-custom1 text-[##139bcd] ">
        <h1 className="text-white text-center pt-4 text-5xl px-2 lg:text-7xl font-custom">
          PROGRAMME DE L’ATELIER
        </h1>
        <Program color="blue" />
      </div>

      {/* Hero page page*/}
      <div className={`bg-home1 bg-white `}>
        <div
          className={`w-full flex flex-col justify-center items-center  p-7 md:p-8`}
        >
          <AhdathCom></AhdathCom>
        </div>
      </div>

      <Commite></Commite>


      <div className="w-full flex flex-col justify-center bg-[#139bcd] py-4">
        <h1 className="mt-6 text-6xl  text-white font-bold justify-center w-full text-center">
          QUELQUES ÉVÈNEMENTS DU CDD
        </h1>

        <div className="w-full flex justify-center lg:mt-8">
  <div className="carousel carousel-center h-[400px] lg:h-[500px] lg:w-[70%] md:w-[40%] p-4 gap-7 rounded-box">
    <div className="carousel-item">
      <img src={car1} className="rounded-box w-full md:w-auto" alt="carousel image" />
    </div>
    <div className="carousel-item">
      <img src={car2} className="rounded-box w-full md:w-auto" alt="carousel image" />
    </div>
    <div className="carousel-item">
      <img src={car3} className="rounded-box w-full md:w-auto" alt="carousel image" />
    </div>
    <div className="carousel-item">
      <img src={car4} className="rounded-box w-full md:w-auto" alt="carousel image" />
    </div>
    <div className="carousel-item">
      <img src={car5} className="rounded-box w-full md:w-auto" alt="carousel image" />
    </div>
    <div className="carousel-item">
      <img src={car7} className="rounded-box w-full md:w-auto" alt="carousel image" />
    </div>
    <div className="carousel-item">
      <img src={car8} className="rounded-box w-full md:w-auto" alt="carousel image" />
    </div>
    <div className="carousel-item">
      <img src={car6} className="rounded-box w-full md:w-auto" alt="carousel image" />
    </div>
  </div>
</div>
</div>

      {/* Hero page page*/}
      <div className={` bg-white`}>
      <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center gap-6 xl:p-7 md:p-8">
  <img src={maps} className="lg:w-[30rem] lg:h-[30rem]" alt="" />
  <OfficeList />
</div>

        <EditorialTeam />
      </div>

      <div
        className={`bg-home1 flex bg-white md:bg-home1m bg-cover justify-center`}
      >
        <img src={mapsdeMA} className="w-[70%]" alt="" />
      </div>

    </div>
  );
};

export default Home;
