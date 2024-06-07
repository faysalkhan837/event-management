

const DetailsCard = ({eventDetails}) => {
    const {name, description, price, image} = eventDetails;
    return (
        <div className="py-5">
            <div className="w-2/3  mx-auto rounded-lg shadow-black shadow-xl">
                <img className=" rounded-lg" src={image} alt="" />
            </div>
            <div className="flex justify-around items-center pt-5">
                <h1 className="text-2xl font-bold">{name}</h1>
                <h1 className="text-1xl font-bold">Price: $ {price}</h1>
                <button className="btn btn-primary">Buy now</button>
            </div>
            <div className="p-5">
                <h1> {description}</h1>
            </div>

        </div>
    );
};

export default DetailsCard;