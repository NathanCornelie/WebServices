import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
export default function Website() {
  return (
       <>
      <Link
        href="/"
        className="absolute top-10 left-10 text-muted-foreground hover:text-primary"
      >
        <Home className="w-8 h-8" />
      </Link>
    <div className="container mx-auto px-4 py-10 space-y-16">
      <section className="text-center">
        <h1 className="md:text-7xl text-4xl font-bold mb-6">Sites & Applications Web</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Nous créons des sites vitrines modernes et performants, ainsi que des
          applications web sur mesure adaptées aux besoins spécifiques de nos clients.
        </p>
      </section>

      {/* Section Vitrine */}
      <section className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <Image
            src="/vitrine.svg"
            alt="Site vitrine"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold">Sites vitrines</h2>
          <p className="text-lg text-muted-foreground">
            Un site vitrine permet de renforcer votre présence en ligne, de
            valoriser votre image de marque et d'attirer de nouveaux clients. Il booste
            votre visibilité et contribue directement à l'augmentation de vos ventes.
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-lg">
            <li>Présentez votre activité de manière professionnelle</li>
            <li>Design sur mesure ou basé sur un thème personnalisé</li>
            <li>Pages optimisées pour le référencement</li>
            <li>Formulaire de contact, galerie, témoignages</li>
          </ul>
        </div>
      </section>

      {/* Section Applications sur mesure */}
      <section className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="md:w-1/2">
          <Image
            src="/app.svg"
            alt="Application web sur mesure"
            width={400}
            height={400}
            className="mx-auto"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold">Applications web sur mesure</h2>
          <p className="text-lg text-muted-foreground">
            Nous développons des applications web puissantes et évolutives, conçues pour
            répondre précisément à vos besoins métiers. Chaque projet est construit avec
            soin pour offrir performance, sécurité et une expérience utilisateur optimale.
          </p>
          <ul className="list-disc list-inside text-muted-foreground text-lg">
            <li>Développement full-stack personnalisé</li>
            <li>Fonctionnalités adaptées à vos besoins métier</li>
            <li>Applications évolutives, rapides et sécurisées</li>
            <li>Interface intuitive et expérience utilisateur soignée</li>
          </ul>
        </div>
      </section>

      <div className="text-center pt-12">
        <Button className="text-xl px-8 py-5 rounded-2xl">Nous contacter</Button>
      </div>
    </div>
    </>
  );
}
