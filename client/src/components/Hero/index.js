import React from "react";

const Hero = () => {
    return (
        <div>
            <img class="flex min-h-screen sm:p-8 bg-cover sm:flex-row relative max-h-30 w-full bg-no-repeat overflow-hidden p-4 flex-col " src={require(`../../assets/banner.jpg`).default} alt="banner" />
        </div>
    )
};

export default Hero;