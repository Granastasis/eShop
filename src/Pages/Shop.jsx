import React from "react";
import Hero from "../Components/Hero/Hero";
import Popupalr from "../Components/Popular/Popupalr";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import NewsLetter from "../Components/NewsLetter/NewsLetter";

const Shop = () => {
    return (
        <div>
            <Hero/>
            <Popupalr/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}

export default Shop