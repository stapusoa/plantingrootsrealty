const testimonials = [
  {
    text: "Brittany really is the best realtor out there! She always gets you a quick answer and jumps through the hoops and obstacles for you and with you! Her team is very professional and always went above and beyond! You won't be disappointed using her services.",
    name: "Zac H.",
    image: "https://plantingrootsrealty.com/wp-content/uploads/2024/12/PRR-Logo-2.png",
  },
  {
    text: "It was phenomenal working with Brittany as our agent. She was definitely on our side and was looking out for our best interests. Brittany walked us through the process as an expert and had the answer to all our questions. Whenever we are ready for our next move, Brittany will be our definite choice!!",
    name: "Baxter B.",
    image: "https://plantingrootsrealty.com/wp-content/uploads/2024/12/PRR-Logo-2.png",
  },
  {
    text: "We bought a house and had fun throughout the whole process! BrittanyH is the coolest and knows her stuff! Thanks Brittany",
    name: "Jessica F.",
    image: "https://plantingrootsrealty.com/wp-content/uploads/2024/12/PRR-Logo-2.png",
  },
  {
    text: "Brittany did all in her power to get us into a place and make everything perfect. Cannot recommend her enough!",
    name: "Trev N.",
    image: "https://plantingrootsrealty.com/wp-content/uploads/2024/12/PRR-Logo-2.png",
  },
  {
    text: "Brittany is the best! She listens to you, she respects decisions, if you give her a list of things you like or dislike she will do her absolute best to make sure you are happy! I would 1000% recommend!!",
    name: "Tiffany R.",
    image: "https://plantingrootsrealty.com/wp-content/uploads/2024/12/PRR-Logo-2.png",
  },
  {
    text: "Brittany is one of a kind. She really cares about her clients. She puts her heart and soul into making buying and selling your home a great experience.",
    name: "Derren H.",
    image: "https://plantingrootsrealty.com/wp-content/uploads/2024/12/PRR-Logo-2.png",
  },
  {
    text: "Soooo many great things to say about Brittany. Our experience as first time home buyers was incredible working with Brittany. Her guidance was a huge help for us as we were totally new to this. Her knowledge is second to none. Her responsiveness is incredible and I would never recommend anybody other than her to lead you to the finish line when it comes to buying or selling your home. Seriously in awe of how much she took care of us. Fantastic human and very professional!",
    name: "Brady M.",
    image: "https://plantingrootsrealty.com/wp-content/uploads/2024/12/PRR-Logo-2.png",
  },
];

export function TestimonialsOld() {
  return (
    <section className="flex relative w-full bg-white py-16 px-4 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold font-merriweather mb-4">Testimonials</h2>
        <hr className="w-16 border-t-4 border-gray-300 mx-auto mb-10" />
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 px-2 scroll-smooth">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[90%] md:min-w-[60%] lg:min-w-[50%] snap-start p-6 shadow-md rounded-md bg-gray-50 flex flex-col items-center text-left mx-auto"
            >
              <p className="text-lg text-gray-700 italic mb-6 max-w-2xl">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <span className="font-semibold text-gray-800">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}