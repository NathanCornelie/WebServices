import { Card,CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import Team from "../../public/team.svg"
import Link from "next/link";
export default function Home() {
  return (
      <>
      <div className="md:text-7xl text-4xl font-bold mb-6">
        <h1>Vos idées méritent</h1>
        <h1>des projets</h1>
        <h1>à leur échelle</h1>
        <h3 className="md:text-5xl text-2xl">
          Des sites web sur mesure et des solutions qui automatisent votre
          quotidien
        </h3>
      </div>
      <div className="flex md:flex-row flex-col gap-2.5 mt-10 mb-30 items-center">
        <div className="md:w-1/2 flex justify-center">
          <Image src="/vitrine/team.svg" alt="Team" width={600} height={500} unoptimized />
        </div>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nous créons des sites web et des solutions sur mesure pour faire
            gagner du temps aux petites entreprises. Sites vitrines,
            applications métiers, automatisation des processus ou monitoring :
            nous développons des outils efficaces et personnalisés pour
            simplifier votre quotidien et améliorer votre performance. Chaque
            projet est conçu en fonction de vos besoins, avec un accompagnement
            clair, réactif et sur mesure.
          </p>
        
      </div>
      <div>
        <h2 className="text-3xl font-semibold mb-4">Nos services</h2>
        <div className="flex flex-col md:flex-row justify-center gap-3">
          <Link href="/website">
            <Card>
              <CardContent>
                <Image className="service_images" src="/vitrine/webbuilder.svg" alt="Web Builder" width={200} height={200} />
              </CardContent>
              <CardFooter>
                <p>Site web sur mesure</p>
              </CardFooter>
            </Card>
          </Link>
          <Link href="/automatisation">
            <Card>
              <CardContent>
                <Image className="service_images" src="/vitrine/pipeline.svg" alt="Pipeline"  width={200} height={200}/>
              </CardContent>
              <CardFooter>
                <p>Automatisation</p>
              </CardFooter>
            </Card>
          </Link>
          <Card>
            <CardContent>
              <Image className="service_images filter grayscale" src="/vitrine/monitoring.svg" alt="Monitoring" width={200} height={200} />
            
            </CardContent>
            <CardFooter>
              <p>Solution de monitoring</p> 
              <p className="text-muted-foreground">( incomming )</p>
            </CardFooter>
          </Card>
        </div>
      </div>
      <div className="mt-20 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-4">Contacter-nous</h2>
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
