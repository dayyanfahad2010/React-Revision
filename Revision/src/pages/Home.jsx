import Card from "../components/Card.jsx";
import cardsData from "../data/cardsData.js";

function Home() {
  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="text-center py-16 px-4">
        <h1 className="text-5xl font-bold text-slate-800 mb-4">
          Explore Our Services
        </h1>

        <p className="text-slate-500 max-w-2xl mx-auto">
          Discover innovative solutions designed to help
          businesses grow with modern technology.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-16">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

      </section>
    </div>
  );
}

export default Home;