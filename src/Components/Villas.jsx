import React from 'react'
import { useState, useEffect } from 'react';
import {villas} from '../villas';
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Villas = () => {
  const [filteredVillas, setFilteredVillas] = useState(villas);
  const [locationFilter, setLocationFilter] = useState('');
  const [priceRangeFilter, setPriceRangeFilter] = useState('');
  const [bedroomsFilter, setBedroomsFilter] = useState('');

  const filterVillas = () => {
    let filtered = [...villas];

    // Apply location filter
    if (locationFilter) {
      filtered = filtered.filter(villa => villa.location.toLowerCase().includes(locationFilter.toLowerCase()));
    }

    // Apply price range filter
    if (priceRangeFilter) {
      filtered = filtered.filter(villa => villa.dailyRent <= parseInt(priceRangeFilter));
    }

    // Apply bedrooms filter
    if (bedroomsFilter) {
      filtered = filtered.filter(villa => villa.bedrooms >= parseInt(bedroomsFilter));
    }

    setFilteredVillas(filtered);
  };

  // Call filterVillas whenever filter values change
  React.useEffect(() => {
    filterVillas();
  }, [locationFilter, priceRangeFilter, bedroomsFilter]);

  return (
    <>
        <div className="page" id='allVillas'>
          <h1>ALL VILLAS</h1>
          <div className="filters">
          <input
            type="text"
            placeholder="Filter by location"
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          />
          <input
            type="number"
            placeholder="Filter by price range"
            value={priceRangeFilter}
            onChange={(e) => setPriceRangeFilter(e.target.value)}
          />
          <input
            type="number"
            placeholder="Filter by number of bedrooms"
            value={bedroomsFilter}
            onChange={(e) => setBedroomsFilter(e.target.value)}
          />
        </div>
       
          <p>{filteredVillas.length} Properties</p>
          <div className="villasContainer">
        {filteredVillas.map((element) => {
          return (
              <Link to={`/villa/${element.id}`} className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <div className="location_text">
                  <span>{element.location}</span>
                  <span>
                    <RxDot />
                  </span>
                  <span>{element.category}</span>
                </div>
                <div className="title_text">{element.name}</div>
                <div className="specifications">
                  <div className="spec">
                    <IoIosPeople />
                    <span>{element.guests}</span>
                    Guests
                  </div>
                  <div className="spec">
                    <FaBed />
                    <span>{element.bedrooms}</span>
                    Bedrooms
                  </div>
                  <div className="spec">
                    <BiArea />
                    <span>{element.squareMeter}</span>
                    Area
                  </div>
                  <div className="spec">
                    <FaBath />
                    <span>{element.bathrooms}</span>
                    Bathrooms
                  </div>
                </div>
                <div className="badge">
                  From <span>RS {element.dailyRent} / Day </span>
                </div>
              </Link>
          );
        })}
      </div>
        </div>
    </>
  )
}

export default Villas