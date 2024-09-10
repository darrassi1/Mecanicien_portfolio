import Image from "next/image";

export default function Home() {
  return (
    /* eslint-disable react/no-unescaped-entities */
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Header */}
      <header className="bg-blue-800 text-white p-4 md:p-6 sticky top-0 z-10 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center animate-fade-in-down">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 md:mb-0">AIMAD JOUMIDI</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#profile" className="hover:text-blue-300 transition-colors">Profil</a></li>
              <li><a href="#experience" className="hover:text-blue-300 transition-colors">Expérience</a></li>
              <li><a href="#education" className="hover:text-blue-300 transition-colors">Formation</a></li>
              <li><a href="#skills" className="hover:text-blue-300 transition-colors">Compétences</a></li>
              <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Profile Section */}
        <section id="profile" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Profil</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-6">
            <div className="w-64 h-64 relative mb-4 md:mb-0">
              <Image
                src="/images/photo.jpeg"
                alt="AIMAD JOUMIDI"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
            <p className="text-lg animate-slide-in-left">
              Professionnel polyvalent avec 3 ans d&apos;expérience, spécialisé en diagnostic, maintenance et réparation de systèmes électriques et mécaniques automobiles. Expertise en climatisation automobile et utilisation d&apos;outils de diagnostic avancés. Diplômé en réparation de moteurs automobiles et en électricité du bâtiment. Rigoureux et motivé, capable de relever efficacement de nouveaux défis techniques dans ces domaines.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Expérience Professionnelle</h2>
          <div className="bg-white shadow-md rounded-lg p-6 animate-slide-in-right">
            <h3 className="text-xl font-semibold">Technicien en Électromécanique Automobile</h3>
            <p className="text-gray-600">Sté pièces auto dubai S.A.R.L | 2021 - 2024</p>
            <ul className="list-disc list-inside mt-2">
              <li>Installation et maintenance de systèmes électriques automobiles</li>
              <li>Diagnostic et réparation de problèmes électriques</li>
              <li>Mise à jour des systèmes électroniques des véhicules</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Formation</h2>
          <div className="space-y-4 animate-slide-in-left">
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold">Diplôme de technicien spécialisé de diagnostic et électronique automobile</h3>
              <p>ISTA Sidi kacem | 2023 - 2024</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold">Diplôme Universitaires Lettres et sciences humaines - Option Français</h3>
              <p>Lycée Mohamed 5 Sidi kacem | 2023 - 2024</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold">2ème année à faculté Filière Droit arabe</h3>
              <p>Faculte ibn Tofail Kenitra | 2022 - 2023</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold">Diplôme de technicien en réparation des engines à moteur (option: automobile)</h3>
              <p>ISTA Sidi kacem | 2022 - 2023</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold">Diplôme de spécialisation professionnelle en électricité de bâtiment</h3>
              <p>Centre de formation d'apprentissage Sidi kacem | 2021 - 2022</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-lg font-semibold">Baccalauréat Science de la vie et de la terre</h3>
              <p>Lycée Mohamed 5 Sidi kacem | 2020 - 2021</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Compétences</h2>
          <ul className="list-disc list-inside bg-white shadow-md rounded-lg p-6 animate-slide-in-right">
            <li>Mécanique automobile</li>
            <li>Électromécanique</li>
            <li>Climatisation automobile</li>
            <li>Utilisation d&apos;outils de diagnostic</li>
            <li>Esprit d&apos;équipe</li>
            <li>Sens des responsabilités</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Contact</h2>
          <div className="bg-white shadow-md rounded-lg p-6 animate-slide-in-left">
            <p><strong>Email:</strong> imadr0737@gmail.com</p>
            <p><strong>Téléphone:</strong> +212 625-327958</p>
            <p><strong>Adresse:</strong> QU ZAOUIA 2 NR 386 SIDI KACEM</p>
            <p><strong>Âge:</strong> 23 ans</p>
            <p><strong>État civil:</strong> Célibataire</p>
          </div>
        </section>

        {/* Languages Section */}
        <section id="languages" className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Langues</h2>
          <div className="bg-white shadow-md rounded-lg p-6 animate-slide-in-right">
            <div className="space-y-4">
              <div>
                <p className="font-semibold">Arabe</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "100%"}}></div>
                </div>
                <p className="text-sm text-gray-600">100% - Langue maternelle</p>
              </div>
              <div>
                <p className="font-semibold">Français</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "80%"}}></div>
                </div>
                <p className="text-sm text-gray-600">80% - Courant</p>
              </div>
              <div>
                <p className="font-semibold">Anglais</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: "60%"}}></div>
                </div>
                <p className="text-sm text-gray-600">60% - Intermédiaire</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Informations Complémentaires</h2>
          <div className="bg-white shadow-md rounded-lg p-6 animate-slide-in-left">
            <p><strong>Permis:</strong> Permis de conduite Catégorie B</p>
            <p><strong>Activités et Loisirs:</strong> Sports, Voyages, Lecture</p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 md:p-6 animate-fade-in-up">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 AIMAD JOUMIDI. Tous droits réservés.</p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href="tel:+212625327958" className="hover:text-blue-300 transition-colors">Téléphone</a>
            <a href="mailto:imadr0737@gmail.com" className="hover:text-blue-300 transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
