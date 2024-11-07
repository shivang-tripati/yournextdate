const FeaturesSection = () => {
    return (
        <section id="features" className="py-40 w-full bg-gray-100">
        <h2 className="text-4xl font-bold text-center mb-10">Key Features</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold">Nearby Users</h3>
            <p className="text-gray-600">Browse singles within your specified range.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold">Real-Time Chat</h3>
            <p className="text-gray-600">Connect instantly with matches through our chat feature.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
            <h3 className="text-2xl font-semibold">Booking Dates</h3>
            <p className="text-gray-600">Request to book a partner for a date easily.</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturesSection;