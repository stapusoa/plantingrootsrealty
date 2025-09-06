"use client"

import { useEffect, useRef } from "react"

export function About() {
  const galleryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery) return

    const scrollWidth = gallery.scrollWidth

    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled past the original content
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }

      gallery.scrollLeft = scrollPosition
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <div className="min-h-screen mt-50 bg-background">
      {/* Hero Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary font-medium mb-6 text-lg">We are Planting Roots</p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Helping you plant roots <span className="text-muted-foreground">not just buy houses.</span>
              </h1>
            </div>
            <div className="lg:pt-16">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Together — the clients and partners of Planting Roots Realty — we are reinventing real estate end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Gallery Section */}
      <section className="py-8">
        <div
          ref={galleryRef}
          className="flex gap-6 overflow-hidden"
          style={{
            scrollBehavior: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {/* First set of images */}
          <div className="flex gap-6 shrink-0">
            <div className="w-96 h-64 bg-muted rounded-2xl overflow-hidden shrink-0">
              <img
                src="/diverse-team-celebrating-with-raised-hands-in-mode.jpg"
                alt="Team celebrating success"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-80 h-64 bg-muted rounded-2xl overflow-hidden shrink-0">
              <img
                src="/professional-consultation-meeting-in-bright-office.jpg"
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-96 h-64 bg-muted rounded-2xl overflow-hidden shrink-0">
              <img src="/modern-office-workspace-with-collaborative-team.jpg" alt="Modern workspace" className="w-full h-full object-cover" />
            </div>
            <div className="w-80 h-64 bg-muted rounded-2xl overflow-hidden shrink-0">
              <img src="/business-meeting-with-laptop-and-documents.jpg" alt="Business meeting" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Duplicate set for seamless loop */}
          <div className="flex gap-6 shrink-0">
            <div className="w-96 h-64 bg-muted rounded-2xl overflow-hidden shrink-0">
              <img
                src="/diverse-team-celebrating-with-raised-hands-in-mode.jpg"
                alt="Team celebrating success"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-80 h-64 bg-muted rounded-2xl overflow-hidden shrink-0">
              <img
                src="/professional-consultation-meeting-in-bright-office.jpg"
                alt="Professional consultation"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-96 h-64 bg-muted rounded-2xl overflow-hidden shrink-0">
              <img src="/modern-office-workspace-with-collaborative-team.jpg" alt="Modern workspace" className="w-full h-full object-cover" />
            </div>
            <div className="w-80 h-64 bg-muted rounded-2xl overflow-hidden shrink-0">
              <img src="/business-meeting-with-laptop-and-documents.jpg" alt="Business meeting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="px-6 py-16 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
                Our Story
                <svg
                  className="w-8 h-8 text-foreground"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </h2>
            </div>
            <div className="space-y-6">
              <p className="text-foreground text-lg leading-relaxed">
                At the heart of our work is a commitment to putting families first. With nearly six years of experience in real estate, I strive to offer more than just transactions—I aim to provide genuine care, guidance, and support to every client.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From starting in the front office to becoming an agent and now running my own practice, my journey has given me a deep understanding of the industry. I am dedicated to upholding kindness, compassion, service, and honesty in every interaction, ensuring my clients feel valued and empowered as they navigate buying, building, or selling their homes.
              </p>
            </div>
          </div>
        </div>
      </section>

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
  )
}
