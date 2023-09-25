import React, { useState, useEffect } from "react";
import Carpeta from "./images/carpeta-test.png";
import "./categorySection.css";
import fetchSizes from "../../utils/fetchSizes";
import { Link } from "react-router-dom";

const CategorySection = ({ id }) => {
    const [sizes, setSizes] = useState([])

    useEffect(() => {
        fetchSizes(setSizes, id)
    }, []);

    return (
        <div>
            <div className="box-button">
                <Link to={'/admin/size/create'}>
                    <button>Crear talle</button>
                </Link>
            </div>
            <div className="category-section">
                {sizes.map((size) => (
                    <a key={size._id} href={``}>
                        <div>
                            <img src={Carpeta} alt="" />
                            <div>
                                <p> TALLE {size.name}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;
