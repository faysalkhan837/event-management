
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../DetailsCard/DetailsCard";
import Marquee from "react-fast-marquee";



const Details = () => {
    const [eventDetails, setEventDetails] = useState({})
    const { id } = useParams();
    const datas = useLoaderData();
    console.log(datas)
    useEffect(() => {
        const detailsData = datas?.find(data => data.id == id);
        setEventDetails(detailsData);
    }, [datas, id])

    return (
        <div className="bg-[#fdfddb]">
            <Marquee autoFill={true}>
                <img src="/logo1.png" alt="" />
            </Marquee>
            <DetailsCard eventDetails={eventDetails}></DetailsCard>
        </div>
    );
};

export default Details;