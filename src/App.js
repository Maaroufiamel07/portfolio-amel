function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans text-gray-800">
      {/* En-tête */}
      <header className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-5xl font-extrabold mb-2">Maaroufi Amel</h1>
        <p className="text-lg text-gray-600 italic">
          Développeuse Full Stack & Spécialiste Business Information System
        </p>
      </header>

      {/* Objectif */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-indigo-600 inline-block">
          Objectif
        </h2>
        <p className="mt-2 text-lg leading-relaxed">
          Âgée de 22 ans, diplômée en licence Business Computing (spécialité
          Business Information System) à la Faculté des Sciences Juridiques,
          Économiques et de Gestion de Jendouba.
        </p>
      </section>

      {/* Compétences */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-3xl font-semibold mb-6 border-b-2 border-indigo-600 inline-block">
          Compétences Techniques
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
          <div>Français</div>
          <div>Anglais</div>
          <div>Arabe</div>
          <div>PHP</div>
          <div>Programmation C</div>
          <div>C# (C Sharp)</div>
          <div>Java</div>
          <div>HTML/CSS</div>
          <div>Problem Solving</div>
          <div>SQL / MySQL</div>
          <div>React</div>
          <div>Express</div>
          <div>Docker</div>
          <div>Power BI</div>
          <div>JEE</div>
          <div>Bootstrap</div>
        </div>
      </section>

      {/* Formation */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-indigo-600 inline-block">
          Formation
        </h2>
        <div className="space-y-4 text-lg">
          <div>
            <strong>Baccalauréat en Sciences Expérimentale</strong> - 2021{" "}
            <br />
            École : El Maarif, Jendouba
          </div>
          <div>
            <strong>
              Licence Business Computing (Business Information System)
            </strong>{" "}
            <br />
            Faculté des Sciences Juridiques, Économiques et de Gestion de
            Jendouba
          </div>
        </div>
      </section>

      {/* Expérience */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 mb-10">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-indigo-600 inline-block">
          Expérience Professionnelle
        </h2>
        <div className="space-y-6 text-lg">
          <div>
            <h3 className="font-semibold text-xl">MajestEYE</h3>
            <p className="italic text-gray-600">
              Juillet 2024 - Septembre 2024
            </p>
            <p>
              Stage ou mission en Business Computing / Analyse des données /
              Développement
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl">MajestEYE</h3>
            <p className="italic text-gray-600">Janvier 2025 - Mai 2025</p>
            <p>
              Projet professionnel en Business Computing / Développement
              d'applications / BI
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-semibold mb-4 border-b-2 border-indigo-600 inline-block">
          Contact
        </h2>
        <p className="text-lg">
          Email :{" "}
          <a
            href="mailto:maaroufiamel7@gmail.com"
            className="text-indigo-600 hover:underline"
          >
            maaroufiamel7@gmail.com
          </a>
          <br />
          Téléphone :{" "}
          <a
            href="tel:+21652525884"
            className="text-indigo-600 hover:underline"
          >
            +216 52 525 884
          </a>
          <br />
          Date de naissance : 01/01/2003
        </p>
      </section>
    </div>
  );
}

export default App;
