import { useEffect, useState } from 'react';
import { Phone, Mail, Globe } from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col lg:flex-row">
        {/* Left Panel - Red Background */}
        <div
          className={`w-full lg:w-1/3 min-h-screen bg-exceed-red flex flex-col justify-between p-8 lg:p-12 transition-all duration-1000 relative ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Decorative Circle Top Left */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-white rounded-full opacity-20 -translate-x-24 -translate-y-24"></div>

          <div className="space-y-8 relative z-10">
            {/* Student Studying Image with Border */}
            <div className="relative w-64 h-48 mx-auto overflow-hidden border-4 border-purple-500 rounded-lg shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students studying"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Mission Statement */}
            <div className="text-white text-left space-y-4 max-w-md">
              <p className="text-base leading-relaxed">
                At Exceed Learning Academy, we believe every learner has untapped potential.
              </p>
              <p className="text-base leading-relaxed">
                Experience the transformative power of expert, personalized support on your educational journey.
              </p>
            </div>
          </div>

          {/* Bottom Group Image */}
          <div className="mt-12 lg:mt-0 relative z-10">
            <div className="relative overflow-hidden rounded-tl-[80px] shadow-2xl border-4 border-white">
              <img
                src="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Group of happy students"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Center Panel - Navy Background with CTA */}
        <div
          className={`w-full lg:w-1/3 min-h-screen bg-navy flex flex-col items-center justify-center p-8 lg:p-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="max-w-md w-full space-y-8 text-center">
            {/* Call to Action */}
            <div className="space-y-4">
              <h1 className="text-3xl lg:text-4xl font-bold text-exceed-red italic-heading">
                RESERVE YOUR<br />SPOT TODAY!
              </h1>
              <p className="text-white text-base">
                Seats fill fast.
              </p>
              <p className="text-white text-base">
                Secure your boot camp session now and walk into the Regents with confidence.
              </p>
            </div>

            {/* White Card with Logo and Contact Info */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl space-y-6">
              {/* Logo */}
              <div className="mx-auto max-w-xs">
                <img
                  src="https://lirp.cdn-website.com/3bba8822/dms3rep/multi/opt/Exceed-learning-center-1920w.png"
                  alt="Exceed Learning Center"
                  className="w-full h-auto"
                />
              </div>

              {/* Contact Information */}
              <div className="space-y-4 text-left">
                <div className="text-exceed-red font-bold text-xl mb-4">
                  MORE INFO:
                </div>

                <div className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-navy flex-shrink-0 mt-1" />
                  <a
                    href="https://www.exceedlearningcenterny.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-navy hover:text-exceed-red transition-colors break-words text-sm"
                  >
                    www.exceedlearningcenterny.com
                  </a>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-navy flex-shrink-0" />
                  <a
                    href="tel:+15162263114"
                    className="text-navy hover:text-exceed-red transition-colors text-sm"
                  >
                    +1 (516) 226-3114
                  </a>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-navy flex-shrink-0 mt-1" />
                  <a
                    href="mailto:regents@exceedlearningcenterny.com"
                    className="text-navy hover:text-exceed-red transition-colors break-words text-sm"
                  >
                    regents@exceedlearningcenterny.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Navy Background with Title and Pricing */}
        <div
          className={`w-full lg:w-1/3 min-h-screen bg-navy flex flex-col items-center justify-center p-8 lg:p-12 relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {/* Pricing Badge - Top Right */}
          <div className="absolute top-8 right-8 z-20">
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Starburst shape */}
                <circle cx="50" cy="50" r="45" fill="#ca3433" />
                {[...Array(12)].map((_, i) => (
                  <path
                    key={i}
                    d={`M50,50 L${50 + 48 * Math.cos((i * 30 * Math.PI) / 180)},${50 + 48 * Math.sin((i * 30 * Math.PI) / 180)
                      } L${50 + 48 * Math.cos(((i + 1) * 30 * Math.PI) / 180)},${50 + 48 * Math.sin(((i + 1) * 30 * Math.PI) / 180)
                      } Z`}
                    fill="#ff5757"
                  />
                ))}
                <circle cx="50" cy="50" r="35" fill="#ca3433" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-sm font-semibold">only</div>
                  <div className="text-3xl font-bold">$99!</div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md w-full space-y-8">
            {/* Student Image with White Border */}
            <div className="relative">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-white rounded-full"></div>
                <div className="absolute inset-3 overflow-hidden rounded-full shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Students studying together"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Title and Details */}
            <div className="space-y-6 text-center pt-8 pb-8 px-6 bg-exceed-red rounded-t-3xl">
              <div className="inline-block bg-navy border-2 border-white px-6 py-2 rounded-full shadow-lg">
                <span className="text-white text-xs font-semibold tracking-wider">
                  EXCEED LEARNING CENTER
                </span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                JANUARY<br />REGENTS<br />BOOT CAMPS
              </h2>

              <div className="space-y-2">
                <p className="text-white text-lg font-semibold">
                  Ace Your Exams in Just 3 Hours
                </p>
                <p className="text-white text-base">
                  Only $99 per session
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
