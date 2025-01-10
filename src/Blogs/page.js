
export default function Blogs() {

const blogs = [

    {
        id: 1,
        title: 'karachi',
        slug : 'karachi Pakistan',
        description: 'karachi is the city of lights',

    },
    {
        id: 2,
        title: 'lahore',
        slug : 'lahore Pakistan',
        description: 'lahore is the city of gardens',

    },
    {
        id: 3,
        title: 'islamabad',
        slug : 'islamabad Pakistan',
        description: 'islamabad is the capital of pakistan',

    },
    {
        id: 4,
        title: 'quetta',
        slug : 'quetta Pakistan',
        description: 'quetta is the city of mountains',

    },
    {
        id: 5,
        title: 'peshawar',
        slug : 'peshawar Pakistan',
        description: 'peshawar is the city of flowers',

    },
    {
        id: 6,
        title: 'multan',    
        slug : 'multan Pakistan',
        description: 'multan is the city of saints',

    },
    {
        id: 7,
        title: 'faisalabad',
        slug : 'faisalabad Pakistan',
        description: 'faisalabad is the city of textile',

    },
    {
        id: 8,
        title: 'sialkot',
        slug : 'sialkot Pakistan',
        description: 'sialkot is the city of sports',

    },
    {
        id: 9,
        title: 'gujranwala',
        slug : 'gujranwala Pakistan',
        description: 'gujranwala is the city of wrestlers',

    },
    {
        id: 10,
        title: 'sargodha',
        slug : 'sargodha Pakistan',
        description: 'sargodha is the city of eagles',

    },
    {
        id: 11,
        title: 'rawalpindi',
        slug : 'rawalpindi Pakistan',
        description: 'rawalpindi is the city of army',

    },
   
]



  return (
    <div className="
    
    flex flex-col items-center justify-center text-center h-screen bg-gray-100
    ">


    <h1 className="text-4xl font-bold bg-black text-white border-red-800 border">All Blogs</h1>
    <div className="container mx-auto py-6">
            {blogs.map((data) => (
                <div 
                    key={data.id} 
                    className="flex flex-col items-center justify-center text-center mb-6"
                >
                    
                    <h1 
                        className="text-2xl font-bold my-1 p-2 px-3 border border-red-950"
                    >
                        {data.title}
                    </h1>
                </div>
            ))}
        </div>

    </div>
  );
    
}

