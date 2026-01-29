import { useState } from 'react';
import Modal from './Modal';

const AboutPage = ({ onNavigate }) => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="text-white py-16 md:py-32 bg-cover bg-center"
        style={{
          backgroundImage: "url('./assets/Event-01.jpg')",
        }}
      >
        <div className="bg-primary/75">
          <div className="container mx-auto px-4 max-w-6xl py-16 md:py-32">
            <h1 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              United Muslim Ummah
            </h1>
            <p className="text-xl md:text-2xl font-light opacity-95 max-w-3xl mb-4">
              Uniting Muslim Communities for Global Peace and Prosperity
            </p>
            <p className="text-lg opacity-90 max-w-3xl">
              A global organization dedicated to fostering unity, dialogue, and collaborative solutions to international challenges.
            </p>
          </div>
        </div>
      </div>

      {/* Organization Overview */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">
                Who We Are
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                United Muslim Ummah (UMU) is an international organization representing the interests and values of the global Muslim community. With presence in 63+ countries, we are working for the interest 2+ billion Muslims of the world.
              </p>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Founded on principles of Islamic unity, interfaith cooperation, and social responsibility, UMU works to address pressing global challenges including poverty, conflict, healthcare access, and educational inequity.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our organization brings together distinguished scholars, political leaders, business professionals, youth advocates, and civil society experts to develop and implement sustainable solutions for the betterment of humanity.
              </p>
            </div>

            {/* Key Statistics */}
            <div className="bg-[#A18623] bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Reach & Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-black mb-2">63+</div>
                  <div className="text-sm font-semibold opacity-95">Member Countries</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-black mb-2">2+ B</div>
                  <div className="text-sm font-semibold opacity-95">Muslims Represented</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-black mb-2">50+</div>
                  <div className="text-sm font-semibold opacity-95">Active Programs</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-4xl font-black mb-2">500+</div>
                  <div className="text-sm font-semibold opacity-95">Implementation Centers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Download Our Journey PDF */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-black text-primary mb-8">
            You Can Read More About United Muslim Ummah
          </h2>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            For a detailed overview of our history, achievements, and future plans, download our comprehensive outlining the journey of United Muslim Ummah.
          </p>
          <a
            href="/documents/our-journey.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            Download PDF
          </a>
        </div>
      </div>

      {/* Membership */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Who Can Be Member of UMU?
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-700 text-lg mb-12 leading-relaxed">
              Those people who believe in the one Allah & the Prophet Muhammad (PBUH) is the last Prophet of Allah and held with a view of establish the unity of Ummah 
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Genaler Members */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all border-t-4 border-gold">
                <div className="text-4xl mb-4">👤</div>
                <h3 className="text-xl font-bold text-primary mb-4">General Member</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Those who are Muslim and believe in one God, held with a view to establish the United Muslim Ummah Foundation and willing to contribute by any means towards social development will be considered as general member by recognition of founder. Founder and his representative will get priority to be elected as member of the Executive Board.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Application fee: Tk. 500/-</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Application approved by founder and president</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Priority election rights for founder and representatives</span>
                  </li>
                </ul>
              </div>

              {/* Life Member */}
              <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all border-t-4 border-gold">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-xl font-bold text-primary mb-4">Life Member</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  After motivated to know the objectives and programs of the United Muslim Ummah Foundation, those who will donate Tk. 100,000/- or more will be treated as a life member.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Minimum donation: Tk. 100,000/-</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Lifetime membership status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <span className="text-sm text-gray-700">Treated as new committee of foundation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-sky-light rounded-xl p-8 mt-8 text-center">
              <h3 className="text-xl font-bold text-primary mb-4">Membership Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-2">🤝</div>
                  <h4 className="font-bold text-primary mb-2">Networking</h4>
                  <p className="text-sm text-gray-600">Connect with global Muslim leaders and organizations</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📚</div>
                  <h4 className="font-bold text-primary mb-2">Resources</h4>
                  <p className="text-sm text-gray-600">Access to research, publications, and educational materials</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🎯</div>
                  <h4 className="font-bold text-primary mb-2">Participation</h4>
                  <p className="text-sm text-gray-600">Take part in programs, conferences, and decision-making</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-sky-light border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Mission & Vision
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           

            {/* Vision Card */}
            <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To work with world humanity to stop interethnic and interrelations conflicts and work against terrorism, war, aggression, violation, Mass produce weapons. To work for to establish a new world order without, drags, war, alcohol, homosexuality, destruction of the institute of family, mass hunger. To organize world peace march to stop above cause and work for to establish a new world peace organization.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Peaceful coexistence among all nations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Scientific and cultural excellence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Inclusive and equitable global society</span>
                </li>
              </ul>
            </div>

             {/* Mission Card */}
            <div className="bg-white rounded-2xl shadow-lg p-10 hover:shadow-xl transition-all">
              <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                To free and salvage the world humanity form all evil, to be united all the Muslims and Non-Muslim. Our main objective is to establish unity, solidarity and brotherhood among the muslims of the world. Our task is to keep peace and tranquillity to protect spiritual values and the unity, to establish peace, happiness and prosperity all over the Muslim and Non- Muslim territories of the world. Taking proper measures for realization of women's rights indicated in Islam. To Improving of public opinion against terrorism, war, aggression, violation, Mass produce weapons also against homosexuality, to save universal family system in the world.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Foster global Muslim unity and cooperation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Strengthen voice in international affairs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl">→</span>
                  <span className="text-gray-700">Address global challenges collaboratively</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Core Values & Principles
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Unity",
                description: "We champion collective action and solidarity among Muslim communities while respecting theological diversity within Islamic tradition.",
                icon: "🤝"
              },
              {
                title: "Justice",
                description: "Fairness, equality, and protection of human dignity are fundamental to all our endeavors and advocacy.",
                icon: "⚖️"
              },
              {
                title: "Excellence",
                description: "We maintain the highest standards in research, implementation, and evaluation of all our programs and initiatives.",
                icon: "⭐"
              },
              {
                title: "Integrity",
                description: "Transparency, ethical conduct, and accountability in all operations define our organizational culture.",
                icon: "✨"
              },
              {
                title: "Compassion",
                description: "Empathy and humanitarian concern for the vulnerable guide our approach to social development and crisis response.",
                icon: "❤️"
              },
              {
                title: "Inclusivity",
                description: "We welcome diverse voices and perspectives, fostering meaningful participation from all demographic groups.",
                icon: "🌍"
              },
              {
                title: "Brotherhood",
                description: "Fostering strong bonds of brotherhood among Muslims worldwide, promoting mutual support and cooperation.",
                icon: "👥"
              },
              {
                title: "Peace",
                description: "Advocating for peace, harmony, and conflict resolution to create a peaceful world for all humanity.",
                icon: "🕊️"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-all text-center border-t-4 border-gold"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Journey */}
      <div className="py-20 bg-sky-light border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Our Journey
          </h2>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "1990",
                title: "Inception",
                description: "United Muslim Ummah founded on principles of Islamic unity and cooperation among Muslim-majority nations."
              },
              {
                year: "2000s",
                title: "Institutional Development",
                description: "Established governance structures, councils, and regional offices to coordinate activities across continents."
              },
              {
                year: "2010s",
                title: "Program Expansion",
                description: "Launched major initiatives in education, healthcare, economic development, and humanitarian assistance."
              },
              {
                year: "2015",
                title: "International Recognition",
                description: "Gained observer status at international forums and established partnerships with major global organizations."
              },
              {
                year: "2020",
                title: "Digital Integration",
                description: "Implemented digital platforms for member engagement and launched virtual collaboration networks."
              },
              {
                year: "2024+",
                title: "Global Leadership",
                description: "Continues expanding impact through innovative programs addressing contemporary global challenges."
              }
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center text-white font-bold text-base">
                    {index + 1}
                  </div>
                  {index !== 5 && <div className="w-1 h-24 bg-gold mt-4"></div>}
                </div>
                <div className="bg-white rounded-lg p-8 shadow-md flex-1">
                  <div className="text-gold font-bold text-sm uppercase tracking-widest mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{milestone.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Flag */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Flag of United Muslim Ummah
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div className="mb-8">
                <img
                  src="/assets/umu-flag.png"
                  alt="United Muslim Ummah Flag"
                  className="w-full max-w-md mx-auto rounded-lg shadow-md"
                  onError={(e) => e.target.src = '/assets/gallery-093.jpg'}
                />
              </div>

              <div className="text-left max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  United Muslim Ummah has own Flag
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  The organization has a own flag on white cloth. At the top center of the flag in Arabic "La-ilaha illallah Muhammadur rasulullah (PBUH)" and in the light of Sharia, the downward vertical light is illuminating the world. The flag is a symbol of world peace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Strategic Focus Areas */}
      {/* <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Strategic Focus Areas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Education & Human Capital",
                description: "Quality education and skills development for Muslim youth and communities",
                icon: "📚"
              },
              {
                title: "Healthcare & Wellness",
                description: "Accessible healthcare services and public health programs across member nations",
                icon: "⚕️"
              },
              {
                title: "Economic Empowerment",
                description: "Sustainable development and economic cooperation among Muslim nations",
                icon: "💼"
              },
              {
                title: "Conflict Resolution",
                description: "Peaceful resolution of disputes and mediation in regional conflicts",
                icon: "🕊️"
              },
              {
                title: "Interfaith Dialogue",
                description: "Building understanding and cooperation between different faith communities",
                icon: "🕌"
              },
              {
                title: "Innovation & Technology",
                description: "Harnessing technology for community development and knowledge sharing",
                icon: "💻"
              },
              {
                title: "Environmental Stewardship",
                description: "Promoting sustainable practices and climate action",
                icon: "🌱"
              },
              {
                title: "Youth & Women Empowerment",
                description: "Leadership development and gender equality initiatives",
                icon: "🚀"
              }
            ].map((area, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all hover:-translate-y-1 border-l-4 border-gold"
              >
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-lg font-bold text-primary mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* Programs & Initiatives */}
      <div className="py-20 border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Programs & Initiatives
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Annual Qur'an & Nasheeds Competition",
                items: ["6-month preparation period", "Dedicated working committee", "Participant selection & invitations", "Venue arrangement", "Hospitality & awards", "Publication & media coverage"],
                icon: "📖"
              },
              {
                title: "International Peace Conference",
                items: ["Annual event (since 2024)", "20-member organizing committee", "1-year preparation & promotion", "VIP guest selection", "Hotels & facilities", "Digital platforms & publicity"],
                icon: "🕊️"
              },
              {
                title: "Annual Peace Ambassadors Program",
                items: ["Selection of 10 peace ambassadors", "Commission-based evaluation", "1-year preparation cycle", "Public applications accepted", "Awards & honors ceremony", "Media publication"],
                icon: "🌟"
              },
              {
                title: "International Visitors Program",
                items: ["Invitation of renowned figures", "6-month preparation period", "Transportation & accommodation", "3-day hosting events", "Media coverage & publicity", "Cultural exchange programs"],
                icon: "🌍"
              },
              {
                title: "Youth Network Programs",
                items: ["Family libraries establishment", "College & university committees", "Monthly discussion forums", "Seminars & round-table conferences", "Publication & outreach", "Leadership development workshops"],
                icon: "👥"
              },
              {
                title: "Women Network Programs",
                items: ["Family-based learning systems", "Educational publications", "Round-table discussions", "Seminars & community engagement", "Women empowerment initiatives", "Skills development programs"],
                icon: "👩‍🤝‍👩"
              },
              {
                title: "Scholars Committee Programs",
                items: ["Discussion forums & seminars", "District & sub-district missions", "Religious guidance & counsel", "Islamic knowledge dissemination", "Interfaith dialogue initiatives", "Educational material publication"],
                icon: "📚"
              },
              {
                title: "Education & Research",
                items: ["Village-based Qur'an learning centers", "Qur'an Research Center establishment", "International Islamic Research Institute", "Academic publications on Muslim unity", "Comparative religious studies", "Development of educational resources"],
                icon: "🔬"
              },
              {
                title: "Diplomatic Engagement",
                items: ["Annual diplomats reception", "New ambassador welcome events", "Departing ambassador honor events", "Cultural gift exchanges", "Hospitality programs", "International relations building"],
                icon: "🤝"
              },
              {
                title: "Public Awareness Campaigns",
                items: ["Nationwide grassroots outreach", "Distribution of 1 million scarves", "Distribution of 1 million Qur'ans", "10,000 organizational crests", "Publication materials (posters, leaflets, banners)", "Educational campaigns"],
                icon: "📢"
              },
              {
                title: "Digital Presence",
                items: ["YouTube channel management", "Social media page administration", "Online interviews & webinars", "Website & internet platforms", "Digital content creation", "Online community engagement"],
                icon: "💻"
              },
              {
                title: "Headquarters Establishment",
                items: ["Land acquisition & development", "Project planning & design", "National & international fundraising", "Construction & infrastructure", "Office facilities development", "Operational setup"],
                icon: "🏢"
              }
            ].map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition-all border-t-4 border-gold"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{program.icon}</span>
                  <h3 className="text-lg font-bold text-primary">{program.title}</h3>
                </div>
                <ul className="space-y-2">
                  {program.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-gold font-bold">▸</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Executive Board */}
      <div className="py-20 bg-sky-light border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Executive Board
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-center text-gray-700 text-lg mb-12 leading-relaxed">
              The Executive Board comprises distinguished leaders and professionals committed to advancing the organization's mission across all domains.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Madzhumder Muhammad Amin",
                  title: "Founder President and Idea Maker of UMU",
                  description: `Ex-President, International Islamic Representative Organization (IIRO).
                  Member, Interethnic and Interfaith Commission of Russia under the President of the Russian Federation.
                  Chief Advisor (1994–1999), Friendship Committee with India, Bangladesh, Nepal, Maldives, and Pakistan, Russian State Duma.
                  Chief Editor, Journal “Migrants” (Russia), from 2007.
                  Chief Editor, Journal “Children’s Hope” (Russia), from 2007.
                  Chairman (2007–2014), International Festival for Migrants of Russia.<br>
                  Ex-President, Federation of Migrants of Russia.`,

                  color: "from-blue-500 to-blue-600",
                  image: "assets/amin vai 2.jpeg"
                },
                {
                  name: "Khan Tipu Sultan",
                  title: "Senior Vice-President",
                  description: "Deputy leadership and special initiatives coordination",
                  color: "from-green-500 to-green-600",
                  image: "https://via.placeholder.com/400x200?text=Khan+Tipu+Sultan"
                },
                {
                  name: "Obaidul Haq Nodhovi",
                  title: "centeral Baitul Mokaram Mosque and Senior Vice-President",
                  description: "Deputy leadership and special initiatives coordination",
                  color: "from-green-500 to-green-600",
                  image: "/assets/obidul Haq.jpg"
                },
                {
                  name: "Musa Al Hafiz",
                  title: "Senior Vice-President",
                  description: "Deputy leadership and special initiatives coordination",
                  color: "from-green-500 to-green-600",
                  image: "/assets/Musa al hafiz.jpg"
                },
                {
                  name: "Prof.Dr.Rakibul Haque",
                  title: "Charment Dept of Mis in Dhaka University and  Vice-President",
                  description: "Deputy leadership and special initiatives coordination",
                  color: "from-green-500 to-green-600",
                  image: "/assets/Rakibul islam.jpeg"
                },
                {
                  name: "Professor Dr. Kamrul Hasan",
                  title: "Vice President & Chairman, Education and Research Committee",
                  description: "Leading education initiatives and research coordination",
                  color: "from-lime-500 to-lime-600",
                  image: "/assets/kamrul hassan.jpg"
                },
                {
                  name: "Professor Dr. Ariful Islam",
                  title: "Assistant Professor, University of Dhaka & Vice President, UMU",
                  description: "Academic leadership and vice presidential duties",
                  color: "from-yellow-500 to-yellow-600",
                  image: "/assets/gallery-03.jpg"
                },
                {
                  name: "Mohammad Nurul Alam Bhuiyan",
                  title: "Secretary General",
                  description: "General administration and executive operations",
                  color: "from-purple-500 to-purple-600",
                  image: "https://via.placeholder.com/400x200?text=Mohammad+Nurul+Alam+Bhuiyan"
                },
                {
                  name: "Mufti Mohammad Osman Goni",
                  title: "Secretary General",
                  description: "Overseeing administrative operations and executive coordination",
                  color: "from-teal-500 to-teal-600",
                  image: "/assets/Mufti osman goni.jpeg"
                },
                {
                  name: "Shahadat Yousuf",
                  title: "Assistant Secretary General",
                  description: "Supporting administrative functions and executive assistance",
                  color: "from-cyan-500 to-cyan-600",
                  image: "/assets/shahadat Yousuf.jpg"
                },
                {
                  name: "Nizam Uddin",
                  title: "Director of Press & Publication",
                  description: "Media relations and publication management",
                  color: "from-orange-500 to-orange-600",
                  image: "/assets/nizam uddin.jpg"
                },
                {
                  name: "Arafat Hasnain",
                  title: "Director of Finance",
                  description: "Financial management and resource allocation",
                  color: "from-red-500 to-red-600",
                  image: "https://via.placeholder.com/400x200?text=Arafat+Hasnain"
                },
                {
                  name: "Aminiah Asquarata",
                  title: "Chairwoman, Women's Network",
                  description: "Leading women's empowerment and network activities",
                  color: "from-pink-500 to-pink-600",
                  image: "https://via.placeholder.com/400x200?text=Aminiah+Asquarata"
                },
                {
                  name: "S. M. Maruf Hasan Nirob",
                  title: "Head, Young Network",
                  description: "Managing youth programs and network development",
                  color: "from-rose-500 to-rose-600",
                  image: "assets/nirob.jpeg"
                },
                {
                  name: "Aby Sayem",
                  title: "Chairman, International Committee",
                  description: "Overseeing international relations and committee affairs",
                  color: "from-violet-500 to-violet-600",
                  image: "https://via.placeholder.com/400x200?text=Aby+Sayem"
                },
                {
                  name: "Shoid Ahmed Kayes",
                  title: "Chairman, Human Rights Committee",
                  description: "Advocating for human rights and committee leadership",
                  color: "from-fuchsia-500 to-fuchsia-600",
                  image: "https://via.placeholder.com/400x200?text=Shoid+Ahmed+Kayes"
                },
                {
                  name: "Shofikur Rahman",
                  title: "Chairman, Relief and Rehabilitation Committee",
                  description: "Coordinating relief efforts and rehabilitation programs",
                  color: "from-emerald-500 to-emerald-600",
                  image: "https://via.placeholder.com/400x200?text=Shofikur+Rahman"
                },
                {
                  name: "Mufti Mohammad Osman Goni",
                  title: "Chairman, Ulama Committee",
                  description: "Leading religious scholars and committee guidance",
                  color: "from-slate-500 to-slate-600",
                  image: "https://via.placeholder.com/400x200?text=Mufti+Mohammad+Osman+Goni"
                },
                {
                  name: "Md. Abu Naser Khan",
                  title: "Executive Member",
                  description: "Additional executive support and coordination",
                  color: "from-indigo-500 to-indigo-600",
                  image: "https://via.placeholder.com/400x200?text=Md.+Abu+Naser+Khan"
                }
              ].map((member, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedMember(member)}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all h-96 flex flex-col cursor-pointer"
                >
                  <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
                  <div className="p-6 flex-1">
                    <h3 className="text-2xl font-bold text-primary mb-1">{member.name}</h3>
                    <p className="text-gold font-bold mb-3">{member.title}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Structure */}
      <div className="py-20 bg-sky-light border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16">
            Governance Structure
          </h2>

          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Organizational Framework
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4">Primary Bodies</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700"><strong>General Assembly</strong> - Supreme policy-making authority</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700"><strong>Supreme Leader</strong> - Chief representative and ceremonial head</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700"><strong>Secretary General</strong> - Chief executive officer</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700"><strong>Security Council</strong> - Crisis management body</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-primary mb-4">Specialized Councils</h4>
                  <ul className="space-y-3">
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700">Scholars & Religious Affairs</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700">Human Rights & Justice</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700">Humanitarian Response</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700">Youth & Civil Society</span>
                    </li>
                    <li className="flex gap-3 items-start">
                      <span className="text-gold font-bold">●</span>
                      <span className="text-gray-700">Women & Social Development</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Leadership Team */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">
                Senior Leadership
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "Dr. Muhammad Abdullah",
                    title: "Supreme Leader",
                    role: "Chief Representative",
                    description: "Islamic scholar and international peace advocate with 25+ years of diplomatic experience.",
                    expertise: "Islamic Jurisprudence, International Relations"
                  },
                  {
                    name: "Prof. Dr. Ahmad Hassan",
                    title: "Secretary General",
                    role: "Chief Executive Officer",
                    description: "Development expert coordinating global initiatives and strategic partnerships.",
                    expertise: "Sustainable Development, Organization Management"
                  },
                  {
                    name: "Sheikh Salman Al-Udah",
                    title: "Chair, Religious Affairs Council",
                    role: "Chief Advisor",
                    description: "Distinguished Islamic scholar guiding theological and policy matters.",
                    expertise: "Islamic Law, Quranic Studies"
                  },
                  {
                    name: "Dr. Fatima Al-Afriqi",
                    title: "Chair, Women & Social Council",
                    role: "Gender Equality Advocate",
                    description: "Social development specialist championing women's rights and empowerment.",
                    expertise: "Gender Studies, Social Development"
                  },
                  {
                    name: "Dr. Yusuf Al-Qaradawi",
                    title: "Chair, Human Rights Council",
                    role: "Justice Advocate",
                    description: "International law expert focused on human rights advocacy and justice.",
                    expertise: "International Law, Human Rights"
                  },
                  {
                    name: "Tariq Ramadan",
                    title: "Chair, Youth Council",
                    role: "Youth Engagement Lead",
                    description: "Thought leader engaged in mentoring next generation of Muslim leaders.",
                    expertise: "Youth Development, Education"
                  }
                ].map((leader, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedLeader(leader)}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 border-t-4 border-gold"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                        {leader.name.charAt(0)}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-primary text-sm">{leader.title}</h4>
                        <p className="text-xs text-gray-600">{leader.role}</p>
                      </div>
                    </div>
                    <h3 className="font-bold text-primary mb-2">{leader.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">{leader.description}</p>
                    <div className="pt-3 border-t border-gray-200 text-gold font-bold text-xs">
                      Learn more →
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-sky-light border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "What is United Muslim Ummah's primary mandate?",
                a: "UMU serves as a unified platform for Muslim communities to address global challenges collaboratively, promote development, and strengthen the voice of Muslim nations in international affairs."
              },
              {
                q: "How does UMU differ from other international organizations?",
                a: "UMU operates on Islamic principles, emphasizes Muslim community representation, and focuses on equitable solutions to global problems based on shared Islamic values and international law."
              },
              {
                q: "What are the membership criteria?",
                a: "Membership is open to Muslim-majority nations and communities committed to UMU's principles of unity, justice, and peaceful cooperation. Regional and organizational memberships are also available."
              },
              {
                q: "How are decisions made in UMU?",
                a: "The General Assembly comprises representatives from member nations and organizations. Major decisions require consensus or super-majority voting, ensuring broad participation and democratic governance."
              },
              {
                q: "How can individuals or organizations partner with UMU?",
                a: "We welcome partnerships with civil society organizations, academic institutions, and private sector entities that align with our values. Contact our partnership office for collaboration opportunities."
              },
              {
                q: "What is UMU's approach to interfaith engagement?",
                a: "UMU actively promotes respectful dialogue and cooperation with other faith communities, believing that unity within Islam strengthens our ability to contribute to global peace and development."
              }
            ].map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-lg shadow-sm p-6 cursor-pointer group hover:shadow-md transition-shadow"
              >
                <summary className="font-bold text-primary text-lg flex items-center justify-between">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform text-gold">▼</span>
                </summary>
                <p className="text-gray-600 mt-4 leading-relaxed text-lg">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 ">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="bg-[#B28926] bg-gradient-to-r from-primary to-primary-dark rounded-2xl text-white p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6">Join Our Mission</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Become part of a global movement advancing Muslim unity, interfaith cooperation, and sustainable solutions to international challenges.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="bg-gold text-primary-dark px-8 py-3 rounded-lg font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl"
              >
                Get Involved
              </button>
              <button
                onClick={() => onNavigate('events')}
                className="border-2 border-gold text-gold px-8 py-3 rounded-lg font-bold text-lg hover:bg-gold hover:text-primary transition-all"
              >
                Upcoming Events
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Leader Detail Modal */}
      {selectedLeader && (
        <Modal isOpen={selectedLeader !== null} onClose={() => setSelectedLeader(null)}>
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-28 h-28 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold text-4xl flex-shrink-0">
                {selectedLeader.name.charAt(0)}
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-2">{selectedLeader.name}</h2>
                <p className="text-xl text-gold font-bold mb-1">{selectedLeader.title}</p>
                <p className="text-gray-600 font-semibold mb-2">{selectedLeader.role}</p>
                <p className="text-sm text-gray-500">
                  <strong>Expertise:</strong> {selectedLeader.expertise}
                </p>
              </div>
            </div>

            <div className="bg-sky-light rounded-xl p-6 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                {selectedLeader.description}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-blue-50 rounded-xl p-6">
                <h4 className="font-bold text-primary mb-3">Professional Background</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• 25+ years international experience</li>
                  <li>• Active in 50+ countries</li>
                  <li>• Speaker at major global forums</li>
                  <li>• Published scholar and thought leader</li>
                </ul>
              </div>

              <div className="bg-emerald-50 rounded-xl p-6">
                <h4 className="font-bold text-primary mb-3">Current Responsibilities</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Policy formulation and governance</li>
                  <li>• International relations and diplomacy</li>
                  <li>• Strategic program oversight</li>
                  <li>• Community representation</li>
                </ul>
              </div>
            </div>

            <div className="bg-gold/10 rounded-xl p-6 mb-6">
              <h3 className="font-bold text-primary mb-3">Vision & Contribution</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Committed to advancing Muslim unity, fostering international cooperation, and ensuring that Islamic principles of justice and compassion guide global development initiatives that benefit all humanity.
              </p>
            </div>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setSelectedLeader(null)}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-bold hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedLeader(null);
                  onNavigate('contact');
                }}
                className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </Modal>
      )}

      {/* Member Detail Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setSelectedMember(null)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedMember(null)} />
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto relative z-10" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 bg-white/90 w-10 h-10 rounded-full flex items-center justify-center hover:bg-white transition-colors text-primary font-bold text-xl shadow-md z-20"
            >
              &times;
            </button>
            <div className="flex items-start gap-6 mb-8">
              <img src={selectedMember.image} alt={selectedMember.name} className="w-28 h-28 object-cover rounded-full flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-primary mb-2">{selectedMember.name}</h2>
                <p className="text-xl text-gold font-bold mb-1">{selectedMember.title}</p>
              </div>
            </div>

            <div className="bg-sky-light rounded-xl p-6 mb-6">
              <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: selectedMember.description }}></p>
            </div>

            <div className="flex gap-4 justify-end">
              <button
                onClick={() => setSelectedMember(null)}
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg font-bold hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedMember(null);
                  onNavigate('contact');
                }}
                className="px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutPage;
