import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ data }) => {
    const { name, price, image, smallDes } = data;
    return (
        <div className="w-full max-w-sm overflow-hidden bg-[#e7e3e2] rounded-lg shadow dark:bg-gray-800">
            <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="avatar" />

            <div className="py-5 px-2">
                <div className=" flex items-center justify-between">
                    <p className="text-2xl font-bold">{name}</p>
                    <p className="text-1xl font-bold">Price: <span className="text-base font-normal">${price}</span></p>
                </div>
                <h1 className="py-4">{smallDes}</h1>
                <Link to='/details'>
                    <button className="w-full bg-[#fcbfa0] rounded-lg py-3 font-bold shadow-lg">Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Card;