const CTASection = () => {
    return (
      <section id="cta" className="py-20 w-full h-[50vh] items-center justify-center bg-pink-500 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Join Now and Find Your Match</h2>
        <p className="mb-6 text-lg">Limited-time offer: Get 50% off your first month!</p>
        <a href="/signup" className="bg-white text-pink-500 font-semibold py-3 px-6 rounded transition duration-300 hover:bg-gray-100">Sign Up Now</a>
      </section>
    );
  };
  
  export default CTASection;