function FeatureSection({ title, description, imageUrl, reverse }) {
  return (
    <div className="relative">
      <div className={`lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-24 lg:px-8 ${reverse ? 'lg:grid-flow-col-dense' : ''}`}>
        <div className={`mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ${reverse ? 'lg:col-start-2' : ''}`}>
          <div>
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-pink-500">
              {/* SVG Icon here */}
              <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 10.5V6.75a4.5 4.5..." />
              </svg>
            </span>
            <div className="mt-6">
              <h2 className="text-3xl font-bold tracking-tight text-white">{title}</h2>
              <p className="mt-4 text-lg text-gray-300">{description}</p>
              <div className="mt-6">
                <a href="/login" className="inline-flex rounded-lg bg-pink-600 px-4 py-1.5 text-base font-semibold text-white hover:bg-pink-700">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className={`${reverse ? '-ml-48 pr-6' : '-mr-48 pl-6'} lg:relative lg:m-0 lg:h-full lg:px-0`}>
            <img src={imageUrl} alt="" className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:h-full lg:w-auto lg:max-w-none" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default function Features() {
  return (
<div className="bg-gray-800 py-16">
  <FeatureSection
    title="Precision Crafted Design"
    description="Experience timeless elegance with our handcrafted watches, combining premium materials with minimalist aesthetics to suit every occasion."
    imageUrl="https://images.unsplash.com/photo-1523170335258-f5ed11844a49?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
  <FeatureSection
    title="Unmatched Durability"
    description="Built to withstand the elements, our watches are designed with scratch-resistant sapphire glass and water-resistant casings for long-lasting performance."
    imageUrl="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    reverse={true}
  />
  <FeatureSection
    title="Engineered for Accuracy"
    description="Powered by advanced Swiss movement technology, every timepiece offers precise timekeeping, ensuring you're always on time, in style."
    imageUrl="https://images.unsplash.com/photo-1444881421460-d838c3b98f95?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />
</div>

  );
}