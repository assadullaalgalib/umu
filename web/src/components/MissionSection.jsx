const MissionSection = () => {
  return (
    <section
      id="mission-section"
      className="bg-sky-light py-20 scroll-mt-24"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-primary">
            Our Mission &amp; Vision
          </h2>
          <p className="text-gray-500 mt-2">
            The guiding principles of our movement
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-row mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                    <svg
                        className="w-6 h-6 text-primary-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                    </svg>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4 p-2">
                Our Mission
                </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To foster global unity within the Muslim Ummah by resolving internal conflicts and promoting dialogue, empathy, and mutual understanding.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex flex-row mb-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                    <svg
                        className="w-6 h-6 text-primary-dark"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                    </svg>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-4 p-2">
                    Our Vision
                </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              To establish a resilient, empowered, and influential global Muslim community that contributes positively to the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;