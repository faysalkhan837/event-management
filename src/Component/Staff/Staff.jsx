

const Staff = ({ stafData }) => {
    const { name, position, description, photo_url } = stafData;
    return (
        <div className="max-w-64 bg-slate-100 rounded-lg shadow-xl shadow-black transition-transform duration-1000 hover:scale-110">
            <div className="flex justify-center ">
                <img className="block w-full rounded-t-lg" src={photo_url} alt="car!" />
            </div>
            <div className="text-center py-2">
                <h2 className=" text-xl font-bold">{name}</h2>
                <h1 className="font-bold"><u>{position}</u></h1>
                <p>{description}</p>

            </div>
        </div>
    );
};

export default Staff;