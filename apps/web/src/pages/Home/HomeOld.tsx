
export function HomeOld() {
  return (

    <div className="flex flex-col items-center relative w-full">
      <div className="py-12 bg-white w-full">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-gray-900">Testimonials</h2>
          <hr className="w-16 border-t-2 border-gray-300 my-4" />

          <div className="flex space-x-6 overflow-x-auto pb-4">
            {[
              {
                name: "Zac H.",
                text: "Brittany really is the best realtor out there! she always gets you a quick answer and jumps through the hoops and obstacles for you and with you! Her team is very professional and always went above and beyond! You won't be disappointed using her services.",
              },
              {
                name: "Baxter B.",
                text: "It was phenomenal working with Brittany as our agent. She was definitely on our side and was looking out for our best interests. Brittany walked us through the process as an expert and had the answer to all our questions.",
              },
              {
                name: "Jessica F.",
                text: "We bought a house and had fun throughout the whole process! BrittanyH is the coolest and knows her stuff! Thanks Brittany",
              },
              {
                name: "Trev N.",
                text: "Brittany did all in her power to get us into a place and make everything perfect. Cannot recommend her enough!",
              },
              {
                name: "Tiffany R.",
                text: "Brittany is the best! She listens to you, she respects decisions, if you give her a list of things you like or dislike she will do her absolute best to make sure you are happy!",
              },
              {
                name: "Derren H.",
                text: "Brittany is one of a kind. She really care about her clients. She puts her heart and soul into making buying and seeking your home a great experience.",
              },
              {
                name: "Brady M.",
                text: "Soooo many great things to say about Brittany. Her knowledge is second to none. Her responsiveness is incredible and I would never recommend anybody other than her.",
              },
            ].map(({ name, text }, index) => (
              <div
                key={index}
                className="min-w-[300px] max-w-sm flex-shrink-0 bg-gray-50 rounded-lg shadow p-6"
              >
                <p className="text-gray-700 italic">"{text}"</p>
                <div className="mt-4 flex items-center">
                  <img
                    className="w-10 h-10 rounded-full object-cover mr-3"
                    src="https://plantingrootsrealty.com/wp-content/uploads/2024/12/PRR-Logo-2.png"
                    alt={name}
                  />
                  <span className="text-gray-900 font-medium">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div data-elementor-type="footer" data-elementor-id="66" className="elementor elementor-66 elementor-location-footer" data-elementor-post-type="elementor_library">
        <div className="elementor-element elementor-element-013f57a e-flex e-con-boxed e-con e-parent e-lazyloaded" data-id="013f57a" data-element_type="container" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-12d8239 elementor-widget__width-initial elementor-widget elementor-widget-theme-site-logo elementor-widget-image" data-id="12d8239" data-element_type="widget" data-widget_type="theme-site-logo.default">
              <div className="elementor-widget-container">
                <a href="https://plantingrootsrealty.com">
                  <img width="5287" height="4841" src="https://plantingrootsrealty.com/wp-content/uploads/2024/12/Brit-logo-Sheet_PPR_FULLLogo_White.png" className="attachment-full size-full wp-image-57" alt="" srcSet="https://plantingrootsrealty.com/wp-content/uploads/2024/12/Brit-logo-Sheet_PPR_FULLLogo_White.png 5287w, https://plantingrootsrealty.com/wp-content/uploads/2024/12/Brit-logo-Sheet_PPR_FULLLogo_White-300x275.png 300w, https://plantingrootsrealty.com/wp-content/uploads/2024/12/Brit-logo-Sheet_PPR_FULLLogo_White-1024x938.png 1024w, https://plantingrootsrealty.com/wp-content/uploads/2024/12/Brit-logo-Sheet_PPR_FULLLogo_White-768x703.png 768w, https://plantingrootsrealty.com/wp-content/uploads/2024/12/Brit-logo-Sheet_PPR_FULLLogo_White-1536x1406.png 1536w, https://plantingrootsrealty.com/wp-content/uploads/2024/12/Brit-logo-Sheet_PPR_FULLLogo_White-2048x1875.png 2048w" sizes="(max-width: 5287px) 100vw, 5287px" />				</a>
              </div>
            </div>
            <div className="elementor-element elementor-element-fae3d3b e-con-full e-flex e-con e-child" data-id="fae3d3b" data-element_type="container">
              <div className="elementor-element elementor-element-aad57ef elementor-widget elementor-widget-heading" data-id="aad57ef" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h5 className="elementor-heading-title elementor-size-default">Contact:</h5>				</div>
              </div>
              <div className="elementor-element elementor-element-deba442 elementor-widget elementor-widget-heading" data-id="deba442" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">Brittany Hutchison</h6>				</div>
              </div>
              <div className="elementor-element elementor-element-b3968d5 elementor-widget elementor-widget-heading" data-id="b3968d5" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">plantingrootsrealty@gmail.com</h6>				</div>
              </div>
              <div className="elementor-element elementor-element-f01d46a elementor-widget elementor-widget-heading" data-id="f01d46a" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default">(801) 400-9242</h6>				</div>
              </div>
            </div>
            <div className="elementor-element elementor-element-1d99a42 e-con-full e-flex e-con e-child" data-id="1d99a42" data-element_type="container">
              <div className="elementor-element elementor-element-4fc64ce elementor-widget elementor-widget-heading" data-id="4fc64ce" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h5 className="elementor-heading-title elementor-size-default">Links:</h5>				</div>
              </div>
              <div className="elementor-element elementor-element-9e60727 elementor-widget elementor-widget-heading" data-id="9e60727" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default"><a href="https://ngi.126.myftpupload.com/">Home</a></h6>				</div>
              </div>
              <div className="elementor-element elementor-element-1e8b2fa elementor-widget elementor-widget-heading" data-id="1e8b2fa" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default"><a href="https://ngi.126.myftpupload.com/our-story/">Our Story</a></h6>				</div>
              </div>
              <div className="elementor-element elementor-element-e07e462 elementor-widget elementor-widget-heading" data-id="e07e462" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default"><a href="https://ngi.126.myftpupload.com/blog-page/">Blog</a></h6>				</div>
              </div>
              <div className="elementor-element elementor-element-ceb09a3 elementor-widget elementor-widget-heading" data-id="ceb09a3" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default"><a href="https://ngi.126.myftpupload.com/listings/">Listings</a></h6>				</div>
              </div>
              <div className="elementor-element elementor-element-10a4c62 elementor-widget elementor-widget-heading" data-id="10a4c62" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h6 className="elementor-heading-title elementor-size-default"><a href="https://ngi.126.myftpupload.com/contact-us/">Contact Us</a></h6>				</div>
              </div>
            </div>
            <div className="elementor-element elementor-element-1998310 e-grid-align-right elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="1998310" data-element_type="widget" data-widget_type="social-icons.default">
              <div className="elementor-widget-container">
                <div className="elementor-social-icons-wrapper elementor-grid">
                  <span className="elementor-grid-item">
                    <a className="elementor-icon elementor-social-icon elementor-social-icon-facebook elementor-repeater-item-e400c53" href="https://web.facebook.com/profile.php?id=100089747496753" target="_blank">
                      <span className="elementor-screen-only">Facebook</span>
                      <svg className="e-font-icon-svg e-fab-facebook" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>					</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
