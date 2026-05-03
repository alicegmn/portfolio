export default function ProjectsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Some things I built</h1>
      <p className="mb-8">Här är några appar jag har byggt!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Projekt 1</h2>
          <p className="text-gray-600">
            Beskrivning för Projekt 1. Detta är en placeholder-beskrivning för
            att visa hur projektkortet kan se ut.
          </p>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Projekt 2</h2>
          <p className="text-gray-600">
            Beskrivning för Projekt 2. Ersätt denna text med en kort beskrivning
            av projektets syfte och funktionalitet.
          </p>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Projekt 3</h2>
          <p className="text-gray-600">
            Beskrivning för Projekt 3. Här kan du lägga in detaljer om projektet
            eller en länk till mer information.
          </p>
        </div>
      </div>
    </div>
  );
}
