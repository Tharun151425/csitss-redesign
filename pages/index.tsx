/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import { Element, Link as ScrollLink } from 'react-scroll'
import HeaderImages from '../components/HeaderImages'
import Timeline from '../components/TimeLine'


import Gallery from '../components/Gallery'

export default function Index() {

  return (
    <>

      <section className="body-font m-0 text-gray-600">
        <header>
          <div
            className="heroHeader w-full bg-cover bg-center"
            style={{ padding: '3rem' }}
          >
            <HeaderImages />
            <div className="flex w-full items-center justify-center">
                <div className="backdrop-blur-xl bg-black/30 border border-white/10 shadow-xl rounded-2xl px-9 py-6 text-center font-extrabold transition-all duration-300 hover:bg-black/50 ">
                <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
                  <span className="bg-gradient-to-r from-yellow-500 via-yellow-500 to-yellow-500 bg-clip-text text-transparent">
                  CSITSS-2025
                  </span>
                </h1>
                <div className="h-1 w-32 mx-auto my-3 bg-gradient-to-r from-blue-300 via-blue-500 to-blue-500 rounded-full"></div>
                <p className="mt-4 text-xl text-white md:mt-0 md:text-2xl">
                  <span className="font-normal">
                    9<sup>th</sup> International Conference on Computational
                    Systems and Information Technology for Sustainable Solutions
                  </span>
                </p>
                <p className="align-text-center text-xl text-slate-50"></p>
                <p className="align-text-center text-xl font-normal text-slate-50">
                  Organized by
                </p>
                <p className="text-align-center text-2xl text-slate-50 text-yellow-400">
                  <h4>
                    RV College of Engineering<sup className="text-lg">®</sup>
                  </h4>
                </p>

                <div className="flex flex-col gap-4 p-4 md:grid md:grid-cols-3">
                  <a
                    href="https://cmt3.research.microsoft.com/CSITSS2024"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-lg justify-center rounded-2xl border border-indigo-600 bg-indigo-600 px-8 py-3 text-white font-semibold transition-colors duration-300 hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 active:bg-indigo-500"
                  >
                    <span>Submit Paper</span>
                  </a>

                  <ScrollLink
                    activeClass="active"
                    className="inline-flex items-center text-lg justify-center rounded-2xl border border-indigo-600 bg-indigo-600 px-8 py-3 text-white font-semibold transition-colors duration-300 hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 active:bg-indigo-500"
                    to="test4"
                    spy={true}
                    smooth={true}
                    duration={600}
                    delay={100}
                  >
                    <span>Timeline</span>
                  </ScrollLink>
                  <a
                    href="CSITSS 2024 Brochure.pdf"
                    className="inline-flex items-center text-lg justify-center rounded-2xl border border-indigo-600 bg-indigo-600 px-8 py-3 text-white font-semibold transition-colors duration-300 hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 active:bg-indigo-500"
                    download
                  >
                    <span>Download Brochure</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* Updated "Organized by" section with glassmorphism */}
        <div className="mt-4 w-full rounded-lg backdrop-blur-sm bg-blue-100/60 border-b-4 border-blue-500 py-4 px-6 text-center text-black shadow-lg transition-all duration-300 hover:shadow-xl">
          <p className="text-lg font-semibold">
            Organized by{' '}
            <span className="text-blue-700 font-bold">RV College of Engineering</span>
          </p>
        </div>
        {/* Updated info boxes with minimalistic design */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-white p-6 text-center text-gray-800 shadow-lg border-b-4 border-red-400 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-red-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7h18M3 11h18M3 15h18M3 19h18"
              />
            </svg>
            <h3 className="text-2xl font-bold">November 20-22, 2025</h3>
            <p>Date</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center text-gray-800 shadow-lg border-b-4 border-green-400 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-green-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h3 className="text-2xl font-bold">RV College of Engineering</h3>
            <p>Venue</p>
          </div>
          <div className="rounded-lg bg-white p-6 text-center text-gray-800 shadow-lg border-b-4 border-blue-400 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 7h18M3 11h18M3 15h18M3 19h18"
              />
            </svg>

            <h3 className="text-2xl font-bold">8 successful editions of CSITSS</h3>


          </div>
          <div className="rounded-lg bg-white p-6 text-center text-gray-800 shadow-lg border-b-4 border-yellow-400 transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
            <svg
              className="mx-auto mb-4 h-12 w-12 text-yellow-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 12l8 8 8-8-8-8-8 8z"
              />
            </svg>
            <h3 className="text-2xl font-bold">Global Participation</h3>
            <p>Researchers from Around the World</p>
          </div>
        </div>

        <section>
          <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">



            <div className="animate-fadeIn2 flex flex-col justify-center">
              <h2 className="text-gradient mb-6 text-3xl font-bold text-black sm:text-4xl">
                About CSITSS
              </h2>
              <p className="mb-8 text-xl font-normal leading-relaxed text-gray-900">
                The 9<sup>th</sup> International Conference on Computational
                Systems and Information Technology for Sustainable Solutions
                [CSITSS — 2025] focuses on bringing together leading
                academicians, scientists, researchers, industry
                representatives, postdoctoral fellows, and research scholars
                around the world to share their knowledge and research
                expertise in Green Electronics, Renewable Energy, Robotics and
                Automation,Photonics, Artificial Intelligence, Cyber-Physical
                Systems, Quantum Mechanics, and Computing from <span> </span>
                <span>
                  <span> </span>
                  <span>N</span>
                  <span>o</span>
                  <span>v</span>
                  <span>e</span>
                  <span>m</span>
                  <span>b</span>
                  <span>e</span>
                  <span>r</span>
                  <span> </span>
                  <span>20</span>
                  <span>
                    <sup>th</sup>
                  </span>
                  <span> </span>
                  <span>t</span>
                  <span>o</span>
                  <span> </span>
                  <span>22</span>
                  <span>
                    <sup>nd</sup>
                  </span>
                  <span> </span>
                  <span>2</span>
                  <span>0</span>
                  <span>2</span>
                  <span>5</span>
                </span>
                .
                <br />
                <br />
                The conference has been successfully organized for the past
                seven years with participants from all over India and abroad.
                All peer-reviewed, selected, and presented papers from the
                conference will be submitted for possible inclusion in the
                IEEE digital library. International speakers will deliver
                keynote talks on the latest technologies in these domains. The
                CSITSS-2025 ensures to provide a platform for researchers
                around the globe for knowledge exchange and networking.
              </p>

              <a
                className="group px-10 relative mx-auto inline-flex items-center justify-center rounded-md bg-gradient-to-r from-indigo-600 to-indigo-700 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-indigo-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:translate-y-0.5 active:shadow-md"
                href="https://cmt3.research.microsoft.com/CSITSS2024"
              >
                <span className="relative z-10 pr-5">Submit Paper</span>
                <svg
                  className="ml-2 h-8 w-8 transform transition-transform duration-300 group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
                <span className="absolute inset-0 rounded-md bg-white bg-opacity-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
              </a>
            </div>
          </div>

        </section>

        <Element name="test4" className="element">
          <div className="flex flex-col items-center justify-center p-4">
            <Timeline />
          </div>
        </Element>
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="animate-fadeIn mb-8 text-center text-3xl font-bold sm:text-4xl">
              Venue
            </h2>

            <div className="flex flex-col items-center justify-between space-y-8 md:flex-row md:space-y-0">
              {/* Left side with the map */}
              <div className="relative w-full overflow-hidden rounded-lg md:w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7509397044632!2d77.49651251530834!3d12.923722790887302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3ee159ba3729%3A0x75a3463d510cf26e!2sR.%20V.%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1652610248773!5m2!1sen!2sin&style=feature:all|element:geometry|color:0x242f3e|visibility:simplified&style=feature:landscape|element:geometry.fill|color:0x2b2b2b&style=feature:poi|element:all|visibility:off&style=feature:road|element:geometry|color:0x38414e&style=feature:road|element:labels.icon|visibility:off&style=feature:transit|element:all|visibility:off&style=feature:water|element:geometry.fill|color:0x212a37&style=feature:water|element:labels.text.fill|color:0x3e606f"
                  width="100%"
                  height="400"
                  style={{
                    border: '2px solid #374151',
                    borderRadius: '0.5rem',
                    maxWidth: '900px',
                    padding: '0.5rem',
                    backgroundColor: '#1F2937',
                  }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Right side with the image */}
              <div className="flex w-full justify-center p-4 md:w-1/2">
                <img
                  src="./map2.jpg"
                  alt="Venue related image"
                  className="h-[400px] w-full cursor-pointer rounded-lg object-cover"
                  onClick={() => {
                    const modal = document.getElementById('modal')
                    if (modal) modal.classList.remove('hidden')
                  }}
                  style={{
                    border: '2px solid #374151',
                    borderRadius: '0.5rem',
                    maxWidth: '900px',
                    padding: '0.5rem',
                    backgroundColor: '#1F2937',
                  }}
                />
              </div>
            </div>

            <div className="animate-fadeIn mt-8 flex flex-col justify-center space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <a
  className="inline-flex items-center justify-center rounded-lg border border-indigo-600 bg-indigo-600 px-8 py-3 text-white font-semibold transition-colors duration-300 hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 active:bg-indigo-500 group"
  href="https://goo.gl/maps/sXWGV9iXqQRwz2PJ9"
>
  <span className="text-lg font-medium">Open Maps</span>
  <svg
    className="ml-2 h-7 w-7 transform transition-transform duration-300 group-hover:translate-x-3"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>

              <a
  className="inline-flex items-center justify-center rounded-lg border border-indigo-600 bg-indigo-600 px-8 py-3 text-white font-semibold transition-colors duration-300 hover:bg-indigo-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 active:bg-indigo-500 group"
  href="HOTELS.pdf"
>
  <span className="text-lg font-medium">
    Download Hotels List Near RVCE
  </span>
  <svg
    className="ml-2 h-7 w-7 transform transition-transform duration-300 group-hover:translate-x-3"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>
       </div>

            <div
              id="modal"
              className="fixed inset-0 z-50 flex hidden items-center justify-center bg-black bg-opacity-75"
              onClick={() => {
                const modal = document.getElementById('modal')
                if (modal) modal.classList.add('hidden')
              }}
            >
              <img
                src="./map2.jpg"
                alt="Enlarged view"
                className="h-auto max-h-[80vh] w-auto max-w-[90vw] rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <style jsx>{`
          .animate-fadeIn {
            animation: fadeIn 1s ease-in-out forwards;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>

        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className='pb-5 text-center'>
            <span className="text-4xl font-bold text-gray-900 mb-2 ">
              Gallery
            </span>
          </h1>
          <Gallery />
        </div>
      </section>
    </>
  )
}