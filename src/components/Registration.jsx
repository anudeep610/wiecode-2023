import React, { useState, useContext } from 'react';
import userContext from "../utils/context";
import "../css/Registration.css";

import Part1 from "../components/forms/Part-1";
import Part2 from "../components/forms/Part-2";
import Part3 from "../components/forms/Part-3";

import Footer from './Footer';

export default function Registration() {

    const user = useContext(userContext);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(false)
    const titles = ["Wie Code 2023", "Team Details", "Domain & Abstract"];
    const [teamSize, setTeamSize] = useState(0);
    const [teamName, setTeamName] = useState("");
    const [domain, setDomain] = useState("");
    const [teamDetails, setTeamDetails] = useState([]);

    const handleSubmit = () => {
        setLoading(true);
        console.log(teamDetails);
        setLoading(false);
    }

    const PageDisplay = () => {
        if (page === 0 && !loading)
            return <Part1 setTeamSize={setTeamSize} />
        else if (page === 1 && !loading)
            return <Part2 setTeamDetails={setTeamDetails} teamDetails={teamDetails}/>
        else if (page === 2 && !loading)
            return <Part3 setDomain={setDomain}/>
        else if (loading)
            return <div>Loading</div>
    }

    const handleNext = async() => {
        if(page===0){
            if(teamSize===0){
                alert("Please select the team size");
            }else{
                setPage((currPage) => currPage + 1);
            }
        }else if(page===1){
            await setTeamDetails(teamDetails.filter(item => item !== undefined));
            console.log(teamDetails)
            if(teamDetails.length<teamSize){
                alert("Please fill all the member details");
                return;
            }
            for(let i=0; i<teamSize;i++){
                let vals = Object.values(teamDetails[i]);
                if(vals.length<4){
                    alert("please fill all the details of " + (i===0?"leader":"member"+ (i+1)))
                }
                for(let j=0; j<vals.length; j++)
                    if(vals[j]===""){
                        alert("Please fill all the member details");
                        return;
                    }
            }
            setPage((currPage) => currPage + 1);
        }
        else if(page===titles.length-1){
            if(domain===""){
                alert("please select a domain");
            }
            else{
                handleSubmit();
            }
        }
    }


    return (
        <userContext.Provider value={{ teamSize: teamSize }}>
            <div className="registration">
                <div className="registration-main-container">
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
