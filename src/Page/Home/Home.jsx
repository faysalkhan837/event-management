import { useLoaderData } from "react-router-dom";
import Carocel from "../../Component/Carocel/Carocel";
import Card from "../../Component/Card/Card";
import { useEffect, useState } from "react";
import Staff from "../../Component/Staff/Staff";


const Home = () => {
    const [stafDetails, setStafDetails] = useState([]);
    const datas = useLoaderData();

    useEffect(() =>{
        fetch('/staf.json')
        .then(res => res.json())
        .then(data => setStafDetails(data))
    },[])
    console.log(stafDetails.length);

    return (
        <div className="w-full bg-[#fdfddb] pb-10">
            <div className="py-5">
                <h1 className="text-center text-4xl font-bold">Seamless Event Planning & Management for <br /> Unforgettable Experiences</h1>
            </div>
            <Carocel></Carocel>
            <div className="py-8">
                <h1 className="text-center text-4xl font-bold">Our Services</h1>
            </div>
            {/* cards */}
            <div className="flex justify-center">
                <div className="grid gap-y-10 lg:grid-cols-3 md:grid-cols-2 gap-10">
                    {
                        datas.map(data => <Card key={data.id} data={data}></Card>)
                    }
                </div>
            </div>
            <h1 className="text-center mt-5 text-4xl font-bold">Meet Out Team Member</h1>
            <div className="flex gap-8 justify-center py-7 flex-wrap">
                    {
                        stafDetails.map(stafData => <Staff key={stafData.name} stafData={stafData}></Staff>)
                    }
            </div>

        </div>
    );
};

export default Home;