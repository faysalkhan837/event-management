import { useLoaderData } from "react-router-dom";
import Carocel from "../../Component/Carocel/Carocel";
import Card from "../../Component/Card/Card";



const Home = () => {
    const datas = useLoaderData();
    console.log(datas.length);

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

        </div>
    );
};

export default Home;