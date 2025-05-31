import "./App.css";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import webbuilder from "./assets/website_builder.svg";
import pipeline from "./assets/pipeline2.svg";
import monitoring from "./assets/monitoring.svg";
import team from "./assets/Team2.svg"
function App() {
  return (
    <>
      <div className="p-20 text-start mt-24">
        <h1>Vos idées méritent</h1>
        <h1>des projets</h1>
        <h1>à leur échelle</h1>
        <h3>
          Des sites web sur mesure et des solutions qui automatisent votre
          quotidien
        </h3>
      </div>
      <div className="flex gap-2.5 mt-10 mb-30 items-center">
        <div className="w-1/2">
        <img src={team} /></div>
        <div className="w-1/2 text-2xl text-start">
          <p>Nous créons des sites web et des solutions sur mesure pour faire gagner du temps aux petites entreprises.
Sites vitrines, applications métiers, automatisation des processus ou monitoring : nous développons des outils efficaces et personnalisés pour simplifier votre quotidien et améliorer votre performance. Chaque projet est conçu en fonction de vos besoins, avec un accompagnement clair, réactif et sur mesure.</p>
        </div>
      </div>
      <div>
        <h2>Nos services</h2>
        <div className="flex justify-center gap-3">
          <Card>
            <CardContent>
              <img className="service_images" src={webbuilder} />
            </CardContent>
            <CardFooter>
              <p>Site web sur mesure</p>
            </CardFooter>
          </Card>
          <Card>
            <CardContent>
              <img className="service_images" src={pipeline} />
            </CardContent>
            <CardFooter>
              <p>Automatisation de proces</p>
            </CardFooter>
          </Card>
          <Card>
            <CardContent>
              <img className="service_images" src={monitoring} />
            </CardContent>
            <CardFooter>
              <p>Solution de monitoring</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="mt-20">
        <h2>Nous contacter</h2>
      </div>
    </>
  );
}

export default App;
