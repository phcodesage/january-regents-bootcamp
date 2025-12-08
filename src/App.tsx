import { useEffect, useState, useMemo } from 'react';
import { Phone, Mail, Globe, ClipboardList, Lightbulb, BrainCircuit, Bell } from 'lucide-react';
import img1 from './assets/1.png';
import img2 from './assets/2.png';
import img3 from './assets/3.png';
import img4 from './assets/4.png';

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
                src={img1}
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
                src={img2}
                alt="Group of happy students"
                className="w-full h-auto lg:h-80 object-cover object-top"
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
              <h1 className="text-3xl lg:text-4xl font-bold text-bright-red italic-heading">
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
          <div className="absolute top-8 right-8 z-20 transform rotate-12 transition-transform hover:rotate-0 duration-300">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full drop-shadow-xl" viewBox="0 0 100 100">
                <path
                  d={useMemo(() => {
                    const points = 16;
                    const innerRadius = 38; // Increased for fuller look
                    const outerRadius = 50;
                    const centerX = 50;
                    const centerY = 50;
                    let path = "";

                    for (let i = 0; i < points * 2; i++) {
                      const angle = (i * Math.PI) / points;
                      const r = i % 2 === 0 ? outerRadius : innerRadius;
                      const x = centerX + r * Math.sin(angle);
                      const y = centerY - r * Math.cos(angle);
                      path += `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
                    }
                    path += "Z";
                    return path;
                  }, [])}
                  fill="#ca3433"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center -rotate-12">
                <div className="text-white text-center leading-none shadow-black/20 drop-shadow-md">
                  <div className="text-xl font-bold font-sans tracking-wide mb-1">Only</div>
                  <div className="text-5xl font-extrabold font-sans tracking-tighter">$99!</div>
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
                    src={img3}
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

      {/* SECTION 2: Unlocking Potential & Schedule */}
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Left Panel - Unlocking Potential (Red) */}
        <div className="w-full lg:w-1/3 bg-exceed-red p-8 lg:p-12 text-white flex flex-col justify-center relative z-10">
          <div className="absolute top-0 right-0 w-full h-20 bg-navy lg:hidden"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-exceed-red z-10 rounded-tr-[100px] hidden lg:block"></div>

          <div className="space-y-12">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Unlocking<br />
              Potential at<br />
              Exceed Learning<br />
              Center
            </h2>

            {/* Dots Decoration */}
            <div className="flex space-x-2">
              <div className="w-4 h-4 rounded-full bg-navy"></div>
              <div className="w-4 h-4 rounded-full bg-navy"></div>
              <div className="w-4 h-4 rounded-full bg-navy"></div>
            </div>

            <div className="space-y-8">
              {/* Proven Results */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <ClipboardList className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Proven Results</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Join a program with a strong track record of academic excellence. Students consistently see measurable improvement and often exceed their academic goals.
                  </p>
                </div>
              </div>

              {/* Personalized Approach */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Lightbulb className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Personalized Approach</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Our tutors tailor instruction to each student's strengths, challenges, and learning style to maximize understanding and confidence.
                  </p>
                </div>
              </div>

              {/* Holistic Development */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <BrainCircuit className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Holistic Development</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    We nurture critical thinking, problem-solving abilities, strong study habits, and a genuine love for learning.
                  </p>
                </div>
              </div>

              {/* Regular Progress Updates */}
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Bell className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Regular Progress Updates</h3>
                  <p className="text-sm opacity-90 leading-relaxed">
                    Parents and students stay informed through ongoing feedback and detailed progress updates, ensuring transparency and shared success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image & Schedule */}
        <div className="w-full lg:w-2/3 flex flex-col">
          {/* Top Image */}
          <div className="w-full relative bg-navy lg:h-[28rem]">
            {/* Curve filler */}
            <div className="absolute bottom-0 left-0 w-full h-full lg:w-32 lg:h-full bg-exceed-red lg:bg-transparent">
              <div className="absolute top-0 left-0 w-full h-full bg-navy lg:rounded-bl-[100px]"></div>
            </div>

            <div className="relative z-10 overflow-hidden lg:absolute lg:inset-0 lg:left-0 lg:rounded-bl-[0px]">
              <img
                src={img4}
                alt="Students writing"
                className="w-full h-auto lg:h-full object-cover object-bottom lg:rounded-bl-[80px]"
              />
            </div>
          </div>

          {/* Schedule Grid */}
          <div className="flex flex-col lg:flex-row flex-grow">
            {/* Navy Column */}
            <div className="w-full lg:w-1/2 bg-navy p-8 lg:p-12 flex flex-col justify-center items-center text-center space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-exceed-red leading-tight">
                BOOT<br />CAMP<br />SCHEDULE
              </h2>

              <div className="space-y-8 w-full">
                {/* Jan 18 */}
                <div className="space-y-2">
                  <div className="inline-block bg-white text-navy px-6 py-2 rounded-lg font-bold text-lg shadow-lg">
                    January 18 (9am–12pm)
                  </div>
                  <h4 className="text-white text-xl font-semibold mt-2">Math Mastery Boot Camp</h4>
                  <p className="text-white opacity-80">Algebra 1 • Algebra 2 • Geometry</p>
                </div>

                {/* Jan 19 */}
                <div className="space-y-2">
                  <div className="inline-block bg-white text-navy px-6 py-2 rounded-lg font-bold text-lg shadow-lg">
                    January 19 (3–6pm)
                  </div>
                  <h4 className="text-white text-xl font-semibold mt-2">Math Mastery Boot Camp</h4>
                  <p className="text-white opacity-80">Algebra 1 • Algebra 2 • Geometry</p>
                </div>
              </div>
            </div>

            {/* White Column */}
            <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center items-center text-center space-y-12">

              {/* Jan 20 - Session 1 */}
              <div className="space-y-2 w-full">
                <div className="inline-block bg-exceed-red text-white px-6 py-2 rounded-lg font-bold text-xl shadow-lg">
                  January 20 (4–7pm)
                </div>
                <h4 className="text-navy text-xl font-semibold mt-3">Physics</h4>
              </div>

              {/* Jan 20 - Session 2 */}
              <div className="space-y-2 w-full">
                <div className="inline-block bg-exceed-red text-white px-6 py-2 rounded-lg font-bold text-xl shadow-lg">
                  January 20 (4–7pm)
                </div>
                <h4 className="text-navy text-xl font-semibold mt-3">Algebra • Geometry</h4>
              </div>

              {/* Jan 20 - Session 3 */}
              <div className="space-y-2 w-full">
                <div className="inline-block bg-exceed-red text-white px-6 py-2 rounded-lg font-bold text-xl shadow-lg">
                  January 20 (4–7pm)
                </div>
                <h4 className="text-navy text-xl font-semibold mt-3">Algebra • Geometry</h4>
              </div>

              {/* Jan 20 - Session 4 */}
              <div className="space-y-2 w-full">
                <div className="inline-block bg-exceed-red text-white px-6 py-2 rounded-lg font-bold text-xl shadow-lg">
                  January 20 (4–7pm)
                </div>
                <h4 className="text-navy text-xl font-semibold mt-3">Earth Science</h4>
                <p className="text-navy opacity-80">Earth & Space Science</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
