import { useState } from "react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact-section"
      className="bg-primary text-white py-24 scroll-mt-24"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-black text-center mb-12">
          Get in Touch
        </h2>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row text-gray-800">
          {/* Info */}
          <div className="bg-gray-100 p-10 md:w-2/5">
            <div className="space-y-8">
              <Info icon="📍" title="Head Office">
                24 Arambag, Gazi Pitha Goli<br />Motijheel, Dhaka - 1000
              </Info>
              <Info icon="📧" title="Email">
                unityofummah90@gmail.com
              </Info>
              <Info icon="📞" title="Phone">
                +88 01635 438380
              </Info>
            </div>
          </div>

          {/* Form */}
          <div className="p-10 md:w-3/5">
            {submitted ? (
              <p className="text-center text-primary font-bold text-lg">
                Thank you for your message!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input label="Full Name" placeholder="Brother/Sister Name" />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="you@example.com"
                />
                <Textarea label="Message" placeholder="How can we help?" />
                <button className="w-full bg-[#B28926] text-white font-bold py-3 rounded-lg hover:bg-primary-dark transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

const Info = ({ icon, title, children }) => (
  <div className="flex items-start gap-4">
    <span className="text-2xl">{icon}</span>
    <div>
      <h4 className="font-bold text-primary">{title}</h4>
      <p className="text-sm text-gray-600">{children}</p>
    </div>
  </div>
);

const Input = ({ label, type = "text", placeholder }) => (
  <div>
    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-gray-50"
    />
  </div>
);

const Textarea = ({ label, placeholder }) => (
  <div>
    <label className="block text-xs font-bold uppercase text-gray-500 mb-2">
      {label}
    </label>
    <textarea
      rows="3"
      placeholder={placeholder}
      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary outline-none bg-gray-50"
    />
  </div>
);

export default ContactSection;