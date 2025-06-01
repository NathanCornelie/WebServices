import { Card,CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Team from "../../public/team.svg"

export default function Home() {
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
        <div className="w-1/2 flex justify-center">
          <Image src="/vitrine/team.svg" alt="Team" width={600} height={500} unoptimized />
        </div>
        <div className="w-1/2 text-2xl text-start">
          <p>
            Nous créons des sites web et des solutions sur mesure pour faire
            gagner du temps aux petites entreprises. Sites vitrines,
            applications métiers, automatisation des processus ou monitoring :
            nous développons des outils efficaces et personnalisés pour
            simplifier votre quotidien et améliorer votre performance. Chaque
            projet est conçu en fonction de vos besoins, avec un accompagnement
            clair, réactif et sur mesure.
          </p>
        </div>
      </div>
      <div>
        <h2>Nos services</h2>
        <div className="flex justify-center gap-3">
          <Card>
            <CardContent>
              <Image className="service_images" src="/vitrine/webbuilder.svg" alt="Web Builder" width={200} height={200} />
            </CardContent>
            <CardFooter>
              <p>Site web sur mesure</p>
            </CardFooter>
          </Card>
          <Card>
            <CardContent>
              <Image className="service_images" src="/vitrine/pipeline.svg" alt="Pipeline"  width={200} height={200}/>
            </CardContent>
            <CardFooter>
              <p>Automatisation de proces</p>
            </CardFooter>
          </Card>
          <Card>
            <CardContent>
              <Image className="service_images" src="/vitrine/monitoring.svg" alt="Monitoring" width={200} height={200} />
            </CardContent>
            <CardFooter>
              <p>Solution de monitoring</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center">
        <h2 className="">Contacter-nous</h2>
        <p className="mb-6">
          N'hésitez pas à nous contacter si vous avez une idée ou une question.
          Nous sommes là pour vous aider !
        </p>
        
        <form>
          <input type="text" placeholder="Nom" className="w-full p-4 mb-6" />
          <input type="email" placeholder="Email" className="w-full p-4 mb-6" />
          <textarea
            rows={4}
            placeholder="Message"
            className="w-full p-4 mb-6"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
          >
            Envoyer
          </button>
        </form>
      </div>
    </>
  );
}
