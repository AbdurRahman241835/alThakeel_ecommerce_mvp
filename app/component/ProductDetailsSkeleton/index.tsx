export  const ProductDetailsSkeleton = () => {
  return (
    <section className="py-8 bg-white lg:h-screen sm:h-auto md:py-16 ">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 animate-pulse" >
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="shrink-0 max-w-md lg:max-w-lg mx-auto bg-gray-200 rounded-md h-80"></div>
          <div className="mt-6 sm:mt-8 lg:mt-0 space-y-4">
            <div className="h-6 bg-gray-300 rounded w-3/4"></div>
            <div className="h-8 bg-gray-300 rounded w-1/2"></div>
            <div className="flex items-center gap-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="h-4 w-4 bg-gray-300 rounded"></div>
                ))}
              </div>
              <div className="h-4 w-20 bg-gray-300 rounded"></div>
            </div>
            <div className="h-10 bg-gray-300 rounded w-full max-w-sm"></div>
            <div className="h-4 bg-gray-200 rounded w-full max-w-md"></div>
            <div className="h-4 bg-gray-200 rounded w-full max-w-md"></div>
            <div className="h-4 bg-gray-200 rounded w-full max-w-lg"></div>
            <div className="flex gap-4 mt-6">
              <div className="h-12 w-32 bg-gray-300 rounded-full"></div>
              <div className="h-12 w-32 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
