const Work = () => {
  return (
    <section>
      <div className="container px-6 m-auto">
        <h2 className="text-3xl text-center my-10 pt-10">Work</h2>
        {/* Confident */}

        <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12 border border-gray-300 shadow-lg p-6 bg-white rounded-lg">
          <div className="col-span-4 md:col-span-8 lg:col-span-12 space-y-2">
            <h3 className="text-xl font-semibold">
              Customer Service Representative | Goodmorning.com | Sept 2023 –
              Current
            </h3>
            <p>
              - Delivering top-tier customer service for an e-commerce leader in
              mattresses by employing effective communication to resolve
              inquiries, concerns, and issues promptly
            </p>
            <p>
              - Coordinating with the software team to integrate customer
              feedback to boost website functionality
            </p>
          </div>
          <div className="col-span-4 md:col-span-8 lg:col-span-12 space-y-2">
            <h3 className="text-xl font-semibold">
              Manager | McDonald’s | May 2019 - Sept 2023
            </h3>
            <p>
              - Lead a team to provide remarkable customer service in a
              fast-paced environment
            </p>
            <p>
              - Consistently meet daily sales and time targets by motivating and
              managing the crew
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
