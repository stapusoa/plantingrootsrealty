export function ContactFormOld() {
  return (
    <div className="flex relative w-full bg-white py-16 px-4 md:px-12">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1">
        <div className="grid-cols-1 text-center mb-10">
          <h2 className="text-4xl font-bold font-merriweather">Love to hear from you,<br/>Get in touch</h2>
          <hr className="mt-4 w-16 border-t-4 border-gray-300 mx-auto" />
        </div>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              pattern="[0-9()#&amp;+*-=.]+"
              title="Only numbers and phone characters (#, -, *, etc) are accepted."
              placeholder="(123) 456-7890"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-primary focus:border-primary"
            />
          </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="email@gmail.com"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label htmlFor="dropdown" className="block text-sm font-medium text-gray-700">
              Budget
            </label>
            <input
              id="dropdown"
              type="dropdown"
              name="dropdown"
              required
              placeholder="$0"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-primary focus:border-primary"
            />
          </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Message"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-4 py-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-dark transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}