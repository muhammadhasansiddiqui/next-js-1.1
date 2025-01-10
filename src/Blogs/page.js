export default function Blogs() {
  const blogs = [
    { id: 1, title: "Karachi", description: "Karachi is the city of lights" },
    { id: 2, title: "Lahore", description: "Lahore is the city of gardens" },
    {
      id: 3,
      title: "Islamabad",
      description: "Islamabad is the capital of Pakistan",
    },
    { id: 4, title: "Quetta", description: "Quetta is the city of mountains" },
    {
      id: 5,
      title: "Peshawar",
      description: "Peshawar is the city of flowers",
    },
    { id: 6, title: "Multan", description: "Multan is the city of saints" },
    {
      id: 7,
      title: "Faisalabad",
      description: "Faisalabad is the city of textile",
    },
    { id: 8, title: "Sialkot", description: "Sialkot is the city of sports" },
    {
      id: 9,
      title: "Gujranwala",
      description: "Gujranwala is the city of wrestlers",
    },
    {
      id: 10,
      title: "Sargodha",
      description: "Sargodha is the city of eagles",
    },
    {
      id: 11,
      title: "Rawalpindi",
      description: "Rawalpindi is the city of the army",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-red-800 text-white">
      {/* Header Section */}
      <h1 className="text-4xl font-bold bg-black py-4 px-6 rounded-lg shadow-lg mb-6">
        All Blogs
      </h1>

      {/* Blogs Section */}
      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((data) => (
          <div
            key={data.id}
            className="bg-black text-white p-6 rounded-lg shadow-md border-2 border-white hover:border-red-500 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-2 text-red-500">
              {data.title}
            </h2>
            <p className="text-white">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
