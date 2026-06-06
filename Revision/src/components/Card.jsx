function Card({ image, title, description }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100">

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-52 object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-slate-800 mb-3">
          {title}
        </h2>

        <p className="text-slate-500 text-sm leading-relaxed mb-5">
          {description}
        </p>

        <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:opacity-90 transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Card;