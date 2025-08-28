export function AboutOld() {
  return (
    <>
      <div className="w-full">
        <div
          className="flex flex-col h-[700px] max-w-full bg-cover bg-center text-gray-800 relative"
          style={{              
              backgroundImage: 'url("https://plantingrootsrealty.com/wp-content/uploads/2024/12/pexels-scottwebb-213727.jpg")'
          }}
        >
          <div className="flex flex-col justify-center items-center h-full w-full bg-black/30">
            <div className="text-center">
              <h1 className="text-4xl font-bold font-merriweather">Blogs</h1>
              <hr className="mt-4 w-16 border-t-4 border-gray-300 mx-auto" />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

          {/* Section: Brittany Hutchison */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://plantingrootsrealty.com/wp-content/uploads/2025/01/Screenshot-2023-12-05-123215.png"
              alt="Brittany Hutchison"
              className="w-80 h-80 object-contain rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">Brittany Hutchison</h3>
              <h4 className="text-xl font-medium mb-4">Who We Are</h4>
              <hr className="w-16 border-t-2 border-gray-300 mb-4" />
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  As a company, we are focused on putting families first. I don’t consider myself a realtor who wants to sell your home. My clients are important to me and are treated as such. I work to improve the communities I serve and educate families on the home buying process. I find the most value in providing genuine, caring, honest help to those seeking it. I will provide advice, guidance and whatever else your family needs along the way.
                </p>
                <p>
                  I have been in the real estate business for almost 6 years now and have worked in every aspect of it and continue to grow my knowledge of the total process so I can provide the best service possible.
                </p>
                <p>
                  I started working in the front office and handling paperwork for clients, then moved up to being an agent on a team and now I am branching out on my own to create real estate the way I believe. Kindness, compassion, service and honesty are the principles I stand on.
                </p>
              </div>
            </div>
          </div>

          {/* Section: My Family */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <img
              src="https://plantingrootsrealty.com/wp-content/uploads/2025/01/Screenshot-2024-08-13-074732.png"
              alt="Family"
              className="w-80 h-80 object-contain rounded-full"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">My Family</h3>
              <hr className="w-16 border-t-2 border-gray-300 mb-4" />
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Now that you know my professional side, meet the amazing family that stands behind me! All I strive for and build is to support my beautiful family and I couldn’t do it without them. My husband is the “behind the scenes” man that keeps my world in balance when I work long hours and spend my time enriching others lives and supporting the community. My children are so supportive of our journey and love to be involved. They help in community projects and sometimes even come along while I work.
                </p>
                <p>
                  I hope that a little part of this resonates with you and when you find yourself ready to make a move in real estate, whether it’s buying for the first time, building a new home or selling your current home that you’ll take the time to reach out and allow me to serve you!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}