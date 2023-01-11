import React from "react";
import QuoteBox from "./QuoteBox";
import { useState } from "react";
import Randomizer from "./Randomizer";

function App() {
    const [quote, setQuote] = React.useState({<Randomizer />})

    return (
        <>
            <QuoteBox />
        </>
    )
}

export default App;