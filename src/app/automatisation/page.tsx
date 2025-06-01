import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";

export default function Pipeline() {
  return (
    <>
     
      <Link
        href="/"
        className="absolute top-10 left-10 text-muted-foreground hover:text-primary"
      >
        <Home className="w-8 h-8" />
      </Link>
      <div className="container mx-auto px-4 py-10 space-y-16 relative">
        <section className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold mb-6">
            Automatisation & Pipelines
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nous concevons des scripts d'automatisation et des pipelines sur
            mesure pour aider nos clients à automatiser leurs tâches
            répétitives, améliorer leur productivité et gagner un temps
            précieux.
          </p>
        </section>

        {/* Section Pipelines */}
        <section className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src="/automation.svg"
              alt="Automatisation et pipelines"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold">
              Automatisation de processus
            </h2>
            <p className="text-lg text-muted-foreground">
              Grâce à nos solutions d'automatisation, vous réduisez les actions
              manuelles et les risques d'erreurs tout en accélérant vos flux de
              travail. Nos pipelines sont pensés pour s'intégrer parfaitement à
              vos outils existants et optimiser vos opérations quotidiennes.
            </p>
            <ul className="list-disc list-inside text-muted-foreground text-lg">
              <li>Automatisation de tâches répétitives ou chronophages</li>
              <li>Création de pipelines CI/CD, data ou métier</li>
              <li>Gain de temps significatif sur les opérations courantes</li>
              <li>Amélioration de la productivité globale de l'équipe</li>
            </ul>
          </div>
        </section>

        <div className="text-center pt-12">
          <Button className="text-xl px-8 py-5 rounded-2xl">
            Nous contacter
          </Button>
        </div>
      </div>
    </>
  );
}
