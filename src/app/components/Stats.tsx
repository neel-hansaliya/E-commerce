export default function Stats() {
    return (
      <section className="py-10 bg-white text-black">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 px-6 text-center">
          {[
            { value: "100K+", label: "Happy Customers" },
            { value: "500+", label: "Products" },
            { value: "99%", label: "Satisfaction Rate" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md border border-gray-300 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-bold text-black">{stat.value}</h2>
              <p className="text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  