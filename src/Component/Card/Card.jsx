import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ data }) => {
    const { name, price, smallDes, id, cardImg } = data;
    return (
        <div className="w-full max-w-sm overflow-hidden bg-[#e7e3e2] rounded-lg shadow dark:bg-gray-800">
            <img className="object-cover w-full h-56" src={cardImg} alt="avatar" />

            <div className="py-5 px-2">
                <div className=" flex items-center justify-between">
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-1xl font-bold">Price: <span className="text-base font-normal">${price}</span></p>
                </div>
                <h1 className="py-4">{smallDes}</h1>
                <Link to={`/details/${id}`}>
                    <button className="w-full bg-[#fcbfa0] rounded-lg py-3 font-bold shadow-lg">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;