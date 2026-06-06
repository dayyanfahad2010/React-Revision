function About() {
  const skills = [
    "React JS",
    "JavaScript",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Git & GitHub",
    "Responsive Design",
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-bold text-slate-800 mb-4">
          About Me
        </h1>

        <p className="text-slate-500 max-w-3xl mx-auto">
          Passionate frontend developer focused on creating
          modern, responsive and user-friendly web applications.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="bg-white rounded-3xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-4">
            Student Profile
          </h2>

          <p className="text-slate-600 leading-relaxed">
            I am a dedicated web developer with a strong interest
            in modern frontend technologies. My focus is on
            building responsive, scalable and visually appealing
            web applications using React and Tailwind CSS.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Skills
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-4 text-center font-medium hover:-translate-y-1 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 pb-16">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            My Mission
          </h2>

          <p className="max-w-3xl mx-auto">
            To create innovative digital experiences that solve
            real-world problems while maintaining clean code,
            scalability and excellent user experience.
          </p>
        </div>
      </section>

    </div>
  );
}

export default About;