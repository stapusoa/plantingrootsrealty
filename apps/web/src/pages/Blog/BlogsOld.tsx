export function BlogsOld() {
  return (
    <>
      <div className="w-full">
        <div
          className="flex flex-col h-[700px] max-w-full bg-cover bg-center text-gray-800 relative"
          style={{              
              backgroundImage: 'url("https://plantingrootsrealty.com/wp-content/uploads/2024/12/pexels-chaitaastic-1918291.jpg")'
          }}
        >
          <div className="flex flex-col justify-center items-center h-full w-full bg-black/30">
            <div className="text-center">
              <h1 className="text-4xl font-bold font-merriweather">Blogs</h1>
              <hr className="mt-4 w-16 border-t-4 border-gray-300 mx-auto" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 max-w-7xl mx-auto">
          {[
            {
              title: "Educational Article – Placeholder Blog",
              href: "https://plantingrootsrealty.com/educational-article-placeholder-blog/",
              img: "https://plantingrootsrealty.com/wp-content/uploads/2025/01/qtq80-zDtE47-1024x682.jpeg",
            },
            {
              title: "Selling a House – Placeholder Blog",
              href: "https://plantingrootsrealty.com/selling-a-house-placeholder-blog/",
              img: "https://plantingrootsrealty.com/wp-content/uploads/2025/01/qtq80-zDtE47-1024x682.jpeg",
            },
            {
              title: "Buying a House – Placeholder Blog",
              href: "https://plantingrootsrealty.com/buying-a-house-placeholder-blog/",
              img: "https://plantingrootsrealty.com/wp-content/uploads/2025/01/qtq80-zDtE47-1024x682.jpeg",
            },
          ].map((post) => (
            <div
              key={post.href}
              className="rounded-2xl shadow-md bg-white p-6 flex flex-col gap-4 transition hover:shadow-lg"
            >
              <a href={post.href}>
                <img src={post.img} alt={post.title} className="rounded-xl object-cover w-full h-52" />
              </a>
              <h5 className="text-lg font-semibold">
                <a href={post.href} className="hover:underline">
                  {post.title}
                </a>
              </h5>
              <hr className="border-t border-gray-300 w-11/12 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}