import React from "react";
import "../../App.css";
import "../pages/Experiences.css";

import riga from "../../images/riga.webp";
import riga2 from "../../images/riga2.webp";
import mada from "../../images/madagascar.webp";
import lidar from "../../images/lidar.webp";
import pointCloud from "../../images/digit.gif";
import pcl from "../../images/pcl.webp";
import geoCouche from "../../images/geocouche.webp";
import geoCoupe from "../../images/geocoupe.webp";

import pfe_rapport from "../../pdf/Rapport_PFE.pdf";

import def_indicator from "../../images/top5_definition_indicateur.webp";
import data_fill from "../../images/top5_saisie_donnees.webp";
import indicateur_hebdo from "../../images/indicateur_hebdo.gif";

import parametrages from "../../images/parametrages.webp";
import bassins from "../../images/bassins.webp";
import creationAction from "../../images/creationAction.gif";
import affichageBassin from "../../images/affichageBassins.gif";
import ficheJournaliere from "../../images/ficheJournaliere.gif";

function ExperienceHeader(props) {
  return (
    <div className="columns">
      <div className="left">
        <h1>{props.date}</h1>
        <div></div>
      </div>
      <div className="right">
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

function TimeLine() {
  return (
    <div className="left">
      <div className="arrow">
        <i className="fas fa-long-arrow-alt-down fa-6x"></i>
      </div>
      <div className="timeline"></div>
    </div>
  );
}

function Experiences() {
  return (
    <>
      <ExperienceHeader
        date="Septembre 2017"
        title="Semestre Erasmus à Riga, Lettonie"
      />
      <div className="columns">
        <TimeLine />
        <div className="right">
          <section>
            <img className="map" src={riga} alt="Localistation Riga"></img>
            <p>
              Fin de l’année 2017, je commence la troisième année d’école
              d’ingénieurs, année décisive pour donner une direction précise à
              sa carrière professionnelle. À ce moment-là j’étais plutôt
              désabusé concernant mon avenir, car les deux années précédentes
              m’avaient déçu au niveau de l’enseignement. Les contenus surtout
              théoriques, dans la lignée des classes préparatoires, étaient
              cependant de qualité inférieure. Quant aux projets de modélisation
              ils étaient intellectuellement intéressants, mais toujours
              abstraits. Bref je ne savais pas ce que je voulais faire de ma vie
              et j’ai décidé de partir à l’étranger. En septembre 2017, je suis
              arrivé à Riga.
            </p>
          </section>
          <section>
            <img className="pic_riga" src={riga2} alt="Riga, Lettonie"></img>
            <p>
              Cela a été une immensee bouffée d'air frais, tant au niveau
              personnel que professionnel. Le volume horaire de cours était
              léger (15h / semaine) et cela m'a permis de me développer
              personnellement. J'ai appris à me débrouiller par mes propres
              moyens, dans une culture et une langue différentes. J'ai fait de
              magnifiques rencontres et j'ai pris goût au voyage et à l'aventure
              ! J'ai pu voyager en Lettonie, Lituanie et Estonie, en Suède et
              aussi en Islande. C'était une période de ma vie incroyable tant
              elle était rythmée par la découverte ! <br></br> Avec un de mes
              colocataires qui lui aussi était étudiant en informatique, nous
              passions beaucoup de temps à coder tous les deux, nous faisions
              des exercices de <strong>Python et C++</strong> sur CodingGame.
              J'ai pris beaucoup de plaisir à cette époque à apprendre à coder
              et j'ai commencé à chercher un stage en algorithmique. Finalement,
              j'ai trouvé un stage de développement chez
              <strong> ThermoFisher Scientific</strong>, entreprise américaine
              de logiciels dans le secteur de l'imagerie médicale.
            </p>
          </section>
        </div>
      </div>
      <ExperienceHeader
        date="Février 2018"
        title="Développement d'un algorithme de recalage élastique d'images"
      />
      <div className="columns">
        <TimeLine />
        <div className="right">
          <section>
            <p>
              Durant ces six mois, j'ai été confronté à de l'informatique
              pratique, et j'ai du me familiariser avec tous les outils de
              gestion de version, de déploiments, de tests qu'il est
              indispensable de maîtriser au sein d'une entreprise. Je ne
              travaillais plus sur un projet personnel, mais bien en équipe sur
              un logiciel avec des milliers d'utilisateurs! J'ai appris à
              utiliser Git et Microsoft Visual Studios qui sont des outils
              indispensables de développement. J'ai appris à développer des
              tests unitaires et des tests d'intégration pour stabiliser les
              briques fondamentales de l'algorithme que je développais. J'ai
              également manipulé des outils comme CMake , Trello et Jira .
              Enfin, j'ai mobilisé toutes mes capacités d'abstraction afin
              d'étudier la littérature existante et de l'adapter pour développer
              notre propre algorithme de recalage{" "}
              <a href={pfe_rapport} download="Recalage_Elastique.pdf">
                dont je parle plus en détails ici.
              </a>
            </p>
          </section>
        </div>
      </div>
      <ExperienceHeader
        date="Octobre 2018"
        title="Volontariat Internationnal en Entreprise (VIE) à Antananarivo,
            Madagascar"
      />
      <div className="columns">
        <TimeLine />
        <div className="right">
          <section>
            <p>
              À la suite de ce stage, j'avais un besoin toujours plus
              grandissant de découvertes et j'étais définitivement mordu de
              développement. J'ai été accepté en VIE à Madagascar au sein de
              l'entreprise <strong>Futurmap</strong> pour faire des tests de
              développement sur un logiciel appelé GStarCAD et par la suite
              monter une équipe de développeurs. Cette période-là a été l'époque
              de beaucoup de premières fois: première longue expatriation,
              premier travail, premières responsabilités ...
            </p>
            <img className="map" src={mada} alt="Localistation Mada"></img>
            <p>
              Futurmap est une entreprise de traitements de données
              géographiques. Les collectivités françaises ont entre autres
              l'obligation d'avoir une base de données géoréférencées à jour de
              leur territoire. Pour réaliser ces plans, des voitures surmontées
              de caméra LIDAR parcourent les zones urbaines et péri-urbaines.
              Concernant les zones rurales le traitement est généralement
              effectué avec du Lidar aérien. La caméra émet un laser qui est
              réfléchi par les objets autour du véhicule. Le rayon réfléchi est
              ensuite capté par la caméra, et les données sont stockées sous
              forme de nuage de points, ce qui représente d'importants volumes.
              C'est dans ce contexte que Futurmap se propose de sous-traiter la
              mise en dessin de ces données.
            </p>
            <div className="col_futurmap">
              <figure>
                <img
                  className="pic_futurmap"
                  src={lidar}
                  alt="Exemple de lidar"
                ></img>
                <figcaption className="caption">
                  Fonctionnement illustratif du Lidar.
                </figcaption>
              </figure>
              <figure>
                <img
                  className="pic_futurmap"
                  src={pointCloud}
                  alt="Chargement dans le logiciel"
                ></img>
                <figcaption className="caption">
                  Digitalisation de nuage de points dans GStarCad.
                </figcaption>
              </figure>
            </div>
            <img className="pic_pcl" src={pcl} alt="Logo de pcl"></img>
            <p>
              Le but de mon contrat était de développer des outils qui
              permettent de travailler avec des nuages de points dans
              <strong> GStarCAD, clone chinois d'AutoCAD</strong> dont la
              license coûte moins cher. Mais de paire avec le prix inférieur,
              les fonctionnalités du logiciel sont également inférieures,
              notamment concernant les nuages de points. Ma mission dans
              l'entreprise a été d'oeuvrer au développement de GStarCAD en vue
              de son adoption totale en production (on parle de plus de 250
              dessinateurs). Cette mission de VIE s'est découpée en trois
              parties:
            </p>
            <p>
              {"\u2022 "} Compiler la librairie C++ Open Source de nuages de
              points <strong>PCL</strong> et essayer de charger des nuages de
              points dans le logiciel pour vérifier que l'affichage et le temps
              de réaction soient corrects. Suite à cette première validation,
              j'ai mis en place un algorithme de préparation de données afin de
              convertir des données clients au format .laz vers des données au
              format .pcd pour afficher les nuages dans GStarCAD. Ensuite j'ai
              développé un objet "PointCloud" permettant de charger des données
              dans GStarCAD puis de modifier la couleurs des points, d'effectuer
              des coupes dans le nuage, de faire des recherches spécifiques etc
              ...
            </p>
            <p>
              {"\u2022 "} Six mois plus tard, les tests d'intégration de l'objet
              nuage étant concluants, j'ai
              <strong> recruté trois développeurs et un alternant </strong>
              malgache. Le but de cette équipe était notamment d'accompagner la
              croissance et le développement de l'entreprise en mettant en place
              de nouvelles méthodes de dessin et de contrôle qualité.
            </p>
            <p>
              {"\u2022 "} La seconde année de mon VIE j'avais à la fois une
              position de <strong>leader technique</strong> et d'
              <strong>encadrant / manager</strong> des projets, c'est-à-dire que
              je faisais le pont entre les demandes des chefs de départements en
              production et les développeurs. Je m'occupais notamment de la
              <strong> planification</strong> sur le long terme des projets (sur
              plusieurs mois). Je programmais des sprints de l'ordre de deux
              semaines et tous les matins j'organisais le déroulement d'une
              petite réunion d'une dizaine de minutes où l'équipe abordait les
              problèmes sur lesquels elle avait travaillé. Je mettais en place
              également <strong>les dépôts Git</strong> pour que la
              collaboration de l'équipe se déroule au mieux. Enfin j'avais mis
              en place également une documentation Développeur ET Utilisateur
              pour qu'il y ait une trace des fonctionnements de chaque commande.
            </p>
            <p>
              En paralèle de l'équipe de développeurs C++,
              <strong> j'encadrais un développeur Python</strong> qui avait
              développé avec TensorFlow un algorithme de reconnaissance
              d'images. Lorsque certaines équipes de production étaient en
              "sous-charge" de travail, en attendant que la charge soit rétablie
              l'équipe réalisait de l'annotation d'images. Cela consistait à
              tracer des "Bounding Box" sur des objets ponctuels tels que les
              bouches à clefs, les regards, les bornes à incendie etc...
              Cependant la précision exigée par les clients ne nous permettaient
              pas d'utiliser l'algorithme de deep learning pour du dessin pur,
              mais plutôt pour effectuer un contrôle entre les objets détectés
              et ceux dessinés en prodution.
            </p>
          </section>
        </div>
      </div>
      <ExperienceHeader
        date="Février 2020"
        title="Ingénieur logiciel dessin 3D, Sogélink"
      />
      <div className="columns">
        <TimeLine />
        <div className="right">
          <section>
            <p>
              J'ai intégré l'entreprise Géomédia en février 2021, en tant
              qu'ingénieur logiciel 3D, en remote à temps plein. La solution que
              propose Géomédia s'appelle <strong>Covadis</strong>, il s'agit
              d'un logiciel d'aide au dessin dans le domaine dans la
              construction. Plus largement, ce logiciel s'inscrit dans les
              solutions du groupe <strong>Sogelink</strong> qui a racheté
              l'entreprise courant 2021. Le gros de mon travail consiste à
              développer un module géotechnique dans le logiciel afin de
              modéliser des couches géologiques sur des modèles numériques de
              terrain (MNT). Concrètement, une fois la modélisation du terrain
              réalisée, les ingénieurs géotechniciens saisissent dans leur
              dessin des points de sondage qu'ils ont relevé sur le terrain en
              renseignant la nature des couches géologiques qui ont été
              rencontrées. Mon module calcule ensuite les couches (
              <strong>calcul parallélisé</strong>, utilisation de std::thread)
              et permet de les visualiser en 2D (vue en coupe) et 3D (vue en
              orbite) la modélisation des couches géologiques. J'ai ensuite
              adapté les autres modules "métier du logiciel" pour qu'ils
              prennent en compte cette notion géologique dans leurs calculs.
            </p>
            <figure>
              <img
                className="pic_sogelink"
                src={geoCouche}
                alt="Orbite3D"
              ></img>
              <figcaption className="caption">
                Orbite 3D d'un MNT avec modéolisation de couches géologiques
              </figcaption>
            </figure>
            <figure>
              <img className="pic_sogelink" src={geoCoupe} alt="Coupe"></img>
              <figcaption className="caption">
                Visualisation en vue de coupe des couches géologiques
              </figcaption>
            </figure>
          </section>
        </div>
      </div>
      <ExperienceHeader
        date="Septembre 2022"
        title="Freelance applications web Typescript / React / NodeJS"
      />
      <div className="columns">
        <TimeLine />
        <div className="right">
          <section>
            <p>
              Au bout de quatre - cinq années de travail dans le logiciel en
              entreprise, j'ai ressenti le besoin d'explorer de nouvelles
              méthodes de travail, et de tester de nouvelles techno, plus
              modernes et plus tournées vers les web-applications. J'avais
              besoin aussi de voir plus grand, et de travailler sur un projet
              dans son "ensemble" et plus uniquement sur quelques briques. J'ai
              donc décidé de me former en temps qu'ingé full-stack sur les
              technologies React et NodeJS. J'ai commencé par suivre les
              formations de Mosh Hamedani, des formations très complètes mises
              en pratique sur une application concrète.
            </p>
            <p>
              En parallèle, j'ai commencé à travailler avec un client contacté
              via la plateforme Malt. J'ai ainsi rejoint une équipe de quatre
              développeurs et le projet était de développer une application de
              gestion de projets, de tâches et de ressources pour le monde
              industriel. J'ai directement mis en pratique les connaissances
              acquises sur les technologies React et NodeJS et le combo cours /
              projet m'a permis de progresser très rapidement.
            </p>
            <p>
              Par exemple, une des features sur lesquelles j'ai travaillé est le
              suivi d'indicateurs, afin de pouvoir étudier l'avancement d'un
              projet, comme le nombre d'objets créés, le nombre d'accidents de
              travail, etc ...
            </p>
            <figure>
              <img
                src={def_indicator}
                alt="définition d'indicateur"
                className="dopm"
                caption="Définition d'un indicateur"
              ></img>
              <figcaption className="caption">
                1. Création d'un indicateur
              </figcaption>
            </figure>
            <p>
              Un indicateur peut comporter plusieurs courbes, par exemple dans
              une usine de création de mobiliers, une courbe pour représenter le
              nombre de fauteuils produits par jour, et une courbe pour le
              nombre de chaises. En plus de ces données, l'utilisateur a la
              possibilité de renseigner les objectifs, il s'agit dans l'exemple
              précédent du nombre de chaises ou de fauteuils à produire.
            </p>
            <p>
              Ensuite, les équipes viennent saisir au jour le jour dans
              l'application, les valeurs observées réellement.
            </p>
            <figure>
              <img
                src={data_fill}
                alt="Saisie des données"
                className="dopm"
                caption="Saisie des données"
              ></img>
              <figcaption className="caption">2. Saisie des données</figcaption>
            </figure>
            <p>
              Enfin la dernière étape est la visualisation des données. Pour
              cela j'ai utilisé la librairie de visualisation de données
              ChartJS. L'indicateur présenté est hebdomadaire, c'-à-d que les
              données sont saisies chaque semaine. En fonction de si la valeur
              cible a été atteinte les histogrammes ont une couleur verte ou
              rouge.
            </p>
            <figure>
              <img
                src={indicateur_hebdo}
                alt="Visualisation des données"
                className="dopm"
                caption="Visualisation des données"
              ></img>
              <figcaption className="caption">
                3. Visualisation des données
              </figcaption>
            </figure>
          </section>
        </div>
      </div>
      <ExperienceHeader
        date="Avril 2023"
        title="Freelance sur une application de pisciculture"
      />
      <div className="columns">
        <TimeLine />
        <div className="right">
          <section>
            <p>
              J'ai ensuite travaillé sur un projet de pisciculture. L'objectif
              était de pouvoir paramétrer son installation dans l'application:
              c'est-à-dire le nombre de bassins, les espèces de poissons, et le
              type d'aliment utilisé.
            </p>
            <figure>
              <img
                className="pic_sogelink"
                src={parametrages}
                alt="Paramétrage du projet"
              ></img>
              <figcaption className="caption">
                1. Affichage de la courbe de croissance d'un poisson avec son
                aliment.
              </figcaption>
            </figure>
            <figure>
              <img
                className="pic_sogelink"
                src={bassins}
                alt="Paramétrages des bassins"
              ></img>
              <figcaption className="caption">
                2. Paramétrage des bassins
              </figcaption>
            </figure>
            <p>
              Dans un second temps, le pisciculteur peut définir des actions sur
              les bassins de son exploitation depuis la page "Journal". Il peut
              par exemple venir renseigner s'il a fait rentrer un lot de
              poissons dans un bassin, s'il a réalisé une pesée sur les poissons
              du bassin, s'il y a eu de la mortalité, s'il a vendu des poissons,
              s'il les a transférés vers un autre bassin. Une fois qu'il
              sélectionne un traitement il est invité à saisir la date, l'espèce
              de poissons et le bassin concerné, et leur quantité.
            </p>
            <figure>
              <img
                className="pic_sogelink"
                src={creationAction}
                alt="Création d'une action"
              ></img>
              <figcaption className="caption">
                3. Exemple de création d'action sur un bassin.
              </figcaption>
            </figure>
            <p>
              Une fois que le projet est bien paramétré et que des actions ont
              été créées sur chaque bassin, un algorithme calcule l'évolution de
              poids moyen des poissons sur le bassin en tenant compte du poids
              réel mesuré lors des pesées et en l'extrapolant avec la croissance
              théorique définie en étape 1. Cette évolution est visualisable
              soit sous forme de grille, soit sous forme de courbe.
            </p>
            <figure>
              <img
                className="pic_sogelink"
                src={affichageBassin}
                alt="Visualisation bassin"
              ></img>
              <figcaption className="caption">
                4. Visualisation de l'évolution d'un bassin.
              </figcaption>
            </figure>
            <p>
              Enfin, un dernier onglet de l'application calcule automatiquement
              la quantité d'aliment à distribuer par bassin chaque jour en
              fonction du nombre de poissons, et de l'aliment qui leur est
              attribué.
            </p>
            <figure>
              <img
                className="pic_sogelink"
                src={ficheJournaliere}
                alt="Fiche Journaliere"
              ></img>
              <figcaption className="caption">
                5. Fiche journalière de distribution d'aliment.
              </figcaption>
            </figure>
          </section>
        </div>
      </div>
      <div className="columns">
        <div className="left">
          <h1>Maintenant</h1>
        </div>
        <h1 className="rigth">Cherche un travail de développeur à Perth !</h1>
      </div>
    </>
  );
}

export default Experiences;