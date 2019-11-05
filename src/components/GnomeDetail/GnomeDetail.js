import React from 'react';
import { Link } from "react-router-dom";
import './gnomeDetail.css';


const GnomeDetail = ({idParams, data, loading}) => {



  const filterGnome = () =>{
    const filterGnome = data.filter(gnome => gnome.id === parseInt(idParams));
    const filterProfession = filterGnome[0].professions.map((profession, index) => <p key={index}>{profession}</p>)

    // Take info to link friends
    const filterFriend = filterGnome[0].friends.map(friends => data.filter(friend => friends === friend.name ))
    const filterLinkFriends = filterFriend.map(friend => 
                                  <Link key={friend[0].id} to={`/details/${friend[0].id}`}>
                                      <img src={friend[0].thumbnail} alt={friend[0].name}/>
                                      {friend[0].name}
                                  </Link>)

    return(
      <div className="cardDetailsContainer">
        <img src={filterGnome[0].thumbnail} alt=""/>
        <h2>{filterGnome[0].name}</h2>
        <div className="infoGnome">
          <p><span>Weight</span> {filterGnome[0].weight}</p>
          <p><span>Height</span> {filterGnome[0].height}</p>
          <p><span>Hair Color</span> {filterGnome[0].hair_color}</p>
        </div>
        <div className="friendsProfessions">
        <h3><span>Friends</span></h3>
          {filterLinkFriends.length === 0 ? <p>Unknown</p> : filterLinkFriends}
        </div>
        <div className="friendsProfessions">
        <h3><span>Professions</span></h3>
        {filterProfession.length === 0 ? <p>Unknown</p> : filterProfession}
        </div>
        <Link to={"/"}>GO BACK!</Link>
      </div>

    )
 }
  return (
    <>
      { 
      loading ? (
        <div>Is loading....</div>
      ) : (
        filterGnome()
      )
     }
    </>
  );
};

export default GnomeDetail;