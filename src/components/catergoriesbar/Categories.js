import React, { useState } from "react";
import "./_Categoties.scss";

const keywords = [
    "All",

    "tutorial",
    "music",
    "gaming",
    "reaction",
    "unboxing",
    "technology",
    "fitness",
    "motivation",
    "review",
    "food",
    "travel",
    "comedy",
    "Disha Vakani",
    "JavaScript",
    "Music",
    "Webseries",
    "Data Structure",
    "Mixes",
    "Live",
    "Thrillers",
    "Romantic Comedies",
    "Ambient Music",
    "Information",
    "Pop Music",
    "Recently Uploaded",
    "Watched",
    "New To You",
    "DIY"
]




const Categoties = () => {

    const [activeElement, SetactiveElement] = useState("All");

    const handelClick = (value) => {
        SetactiveElement(value)
    }

    return (

        <div className="Categoriesbar">


            {keywords.map((Value, i) =>
            (
                <span key={i}
                    onClick={() => handelClick(Value)}
                    className={activeElement === Value ? "active" : ""}
                >
                    {Value}

                </span>)
            )}

        </div>
    )
}

export default Categoties;