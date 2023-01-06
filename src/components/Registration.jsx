import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import userContext from "../utils/context";
import axios from "../axios/axios";
import "../css/Registration.css";

import Part1 from "../components/forms/Part-1";
import Part2 from "../components/forms/Part-2";
import Part3 from "../components/forms/Part-3";
import Loader from "../components/loader";
import Footer from './Footer';

export default function Registration() {

    const navigate = useNavigate();
    const user = useContext(userContext);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false)
    const titles = ["Hola!😄 ", "Team Details❓", "Domain & Abstract🤔"];
    const [teamSize, setTeamSize] = useState(0);
    const [teamName, setTeamName] = useState("");
    const [domain, setDomain] = useState("");
    const [teamDetails, setTeamDetails] = useState([]);
    const [abstract, setAbstract] = useState();

    const handleSubmit = async () => {
        setLoading(true);
        const form = new FormData();
        form.append('abstract', abstract);
        form.append('teamSize', teamSize);
        form.append('domain', domain);
        form.append('teamName', teamName);
        form.append('teamDetails', JSON.stringify(teamDetails));
        console.log(teamDetails, teamSize, teamName, domain, abstract);
        const res = await axios.post("/register", form, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).catch((err) => {
            console.log(err);
            alert("something went wrong ;) please try again later");
            navigate("/");
        });
        if (res.data.status === 200) {
            alert("We have received your abstract. All the best :)");
            navigate("/");
        }
        setLoading(false);
    }

    const PageDisplay = () => {
        if (page === 0 && !loading)
            return <Part1 setTeamSize={setTeamSize} setTeamName={setTeamName} />
        else if (page === 1 && !loading)
            return <Part2 setTeamDetails={setTeamDetails} teamDetails={teamDetails} />
        else if (page === 2 && !loading)
            return <Part3 setDomain={setDomain} setAbstract={setAbstract} />
        else if (loading)
            return <Loader/>
    }

    const handleNext = async () => {
        if (page === 0) {
            if (teamName === "") {
                alert("Please fill the team name");
            } else if (teamSize === 0) {
                alert("Please select the team size");
            } else {
                setPage((currPage) => currPage + 1);
            }
        } else if (page === 1) {
            await setTeamDetails(teamDetails.filter(item => item));
            if (teamDetails.length < teamSize) {
                alert("Please fill all the member details");
                return;
            }
            for (let i = 0; i < teamSize; i++) {
                let vals = Object.values(teamDetails[i]);
                if (vals.length < 4) {
                    alert("please fill all the details of " + (i === 0 ? "leader" : "member " + (i)))
                    return;
                }
                for (let j = 0; j < vals.length; j++)
                    if (vals[j] === "") {
                        alert("Please fill all the member details");
                        return;
                    } else if (i === 0) {
                        if (teamDetails[0].leadMobile.length !== 10 || !(/^[6789]\d{9}$/.test(teamDetails[0].leadMobile))) {
                            alert("Team lead mobile number not valid")
                            return;
                        }
                        if (!(/^\S+@\S+\.\S+$/).test(teamDetails[0].leadEmail)) {
                            alert("Team lead email id not valid")
                            return;
                        }
                    } else {
                        const mobile = "m" + i + "Mobile";
                        const email = "m" + i + "Email";
                        if (teamDetails[i][mobile].length !== 10 || !(/^[6789]\d{9}$/.test(teamDetails[i][mobile]))) {
                            alert("Team member " + i + " mobile number not valid")
                            return;
                        }
                        if (!(/^\S+@\S+\.\S+$/).test(teamDetails[i][email])) {
                            alert("Team member " + i + " email id not valid")
                            return;
                        }
                    }
            }
            setPage((currPage) => currPage + 1);
        }
        else if (page === titles.length - 1) {
            if (domain === "") {
                alert("please select a domain");
            }
            else {
                handleSubmit();
            }
        }
    }


    return (
        <userContext.Provider value={{ teamSize: teamSize }}>
            <div className="registration">
                <div className="registration-main-container">
                    <div className="home-navabar-wrapper">
                        <div className="home-navabar-container">
                            <ul className='home-unodered-list'>
                                <li><p>Home</p></li>
                                <li><p>Registration</p></li>
                                <li><p>About Us</p></li>
                                <li><p>Contact Us</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="heading-container">
                        <h1 className="heading-text">REGISTER</h1>
                    </div>
                    <div className="line-container"></div>
                    <div className="form-box-container">
                        <div className="form-progress-bar"></div>
                        <div className="form-box">
                            <div className="form-header">
                                {titles[page]}
                            </div>
                            <div className="form-body">
                                {PageDisplay()}
                            </div>
                            <div className="form-footer">
                                <button
                                    disabled={page === 0}
                                    onClick={() => {
                                        setPage((currPage) => currPage - 1)
                                    }}
                                >Prev</button>
                                {
                                    !(page === titles.length - 1) && <button
                                        disabled={page === titles.length - 1}
                                        onClick={handleNext}
                                    >Next</button>}
                                {
                                    (page === titles.length - 1) && <button
                                        onClick={handleNext}
                                        disabled={loading}
                                    >Submit</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </userContext.Provider>
    )
}
