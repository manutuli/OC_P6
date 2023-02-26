import Cards from "../components/Cards";
import Dropdown from "../components/Dropdown";
import Footer from "../components/Footer";
import aboutImg from "../assets/kalen-emsley-Bkci_8qcdvQ-unsplash.png"
//
export default function About() {
  // const url = unsplashImg;
  const kasa = {
    tagLine: "Chez vous, partout et ailleurs",
    values: [
      {
        title: "Fiabilité",
        description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
      },
      {
        title: "Respect",
        description:
          "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      },
      {
        title: "Service",
        description: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      },
      {
        title: "Responsabilité",
        description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      },
      {
        title: "Sécurité",
        description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      },
    ],
    copyRights: "© 2020 Kasa. All rights reserved",
  };
  return (
    <>
      <section className="page--about content">
        <div className="tagline">
          <Cards cover={aboutImg} unsplash/>
        </div>
        <div className="dropdown--large">
          {kasa.values.map((value, index) => (
            <Dropdown
              key={index}
              name={value.title}
              content={value.description}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
