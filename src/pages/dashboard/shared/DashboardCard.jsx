/* eslint-disable react/prop-types */
import { RiShoppingBag4Line } from "react-icons/ri";


const DashboardCard = ({ title, quantity }) => {
    return (
        <div className="bg-bgDeepBlue py-2 md:py-3 lg:py-5 xl:py-7 px-3 md:px-5 lg:px-7 xl:px-10 flex xl:flex-row lg:flex-col md:flex-col flex-row items-center gap-5 rounded-md">
            <div>
                <h2>
                    <RiShoppingBag4Line />
                </h2>
            </div>
            <div className="space-y-2">
                <h3 className="text-lightBlue">{quantity}</h3>
                <h5>{title}</h5>
            </div>
        </div>
    );
};

export default DashboardCard;