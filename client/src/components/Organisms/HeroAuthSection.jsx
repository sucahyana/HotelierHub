import NuansaArt from "../../assets/HotelViews.jpg";
import { Image } from "primereact/image";
import Stay from "../../assets/Stay-Relax-Repeat.png";
import React from "react";
import {useSpring,animated} from "@react-spring/web";


const HeroAuthSection = ({ direction }) => {
    const slideAnimation = useSpring({
        from: { transform: direction === 'left' ? "translateX(-100%)" : "translateX(100%)"},
        to: { transform: "translateX(0)" },
    });

    return (
        <animated.div
            style={slideAnimation}
            className="relative flex-1 bg-indigo-100 text-center rounded-br-xl rounded-tr-xl hidden lg:flex shadow-inner-[20px]"
        >
            <div
                className="w-full h-full bg-cover rounded-br-xl rounded-tr-xl opacity-80"
                style={{ backgroundImage: `url(${NuansaArt})` }}
            ></div>
            <Image
                src={Stay}
                alt="Nuansa Art Banner"
                className="absolute top-1/2 left-1/2 w-auto h-auto opacity-100 transform -translate-x-1/2 -translate-y-1/2 rounded-br-xl rounded-tr-xl animate-wiggle animate-infinite hover:animate-wiggle-more hover:animate-infinite"
            />
        </animated.div>
    );
};

export default HeroAuthSection;
