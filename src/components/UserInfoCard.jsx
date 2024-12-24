import React from "react";
import './userinfo.css';


function UserInfoCard({ userData }) {
    return (
        <div className="container">
            <div className="card cardStyle" style={{width: "18rem"}}> 
                {
                userData.avatar_url? 
                (<div>
                    <img className="card-img-top" src={userData.avatar_url} alt={userData.name}></img>
                </div>) : (<div></div>)}
                <div className="card-body"> 
                    {<h5 className="card-title">{userData.name}</h5>}
                    <p className="card-text">{userData.bio}</p>
                    <div className="d-flex justify-content-between followinginfo">
                        <span>Followers: {userData?.followers}</span> <br />
                        <span>Following: {userData?.following}</span> <br />
                    </div>
                    <div className="d-flex justify-content-between followinginfo">
                        <span>Repositories: {userData?.public_repos}</span>
                        <span>Location: {userData?.location}</span>
                    </div>
                    {
                    userData.login?
                    (<a  className="btn btn-primary">{userData.login}</a>) : (<div></div>)
                    }
                </div>
            </div>
        </div>
    );
}

export default UserInfoCard;