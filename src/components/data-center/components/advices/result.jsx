import React from 'react';
import '/src/styles/data-center/result.css';
import {useAuth0} from "@auth0/auth0-react";
import {Done, FiberManualRecord} from "@mui/icons-material";

const AdviceResult = ({ index, title, status, timestamp, problem, advice}) => {

    const { isAuthenticated, user, loginWithPopup} = useAuth0();

    return (
        <>
            {
                isAuthenticated &&

                <div className="advice-result">
                    <div className="advice-result-header">
                        <h2>Thread #{index}</h2>
                        <div className="advice-result-status-timestamp">
                            {
                                status ?
                                    <span className="advice-result-status"><FiberManualRecord color={'success'}/> Answered</span>
                                    :
                                    <span className="advice-result-status processing"><FiberManualRecord color={'warning'}/> Processing</span>
                            }
                                    <span className="advice-result-timestamp">{timestamp}</span>
                                </div>
                                </div>
                                <div className="advice-result-content">
                        <div className="advice-result-problem-section">
                            <div className="advice-result-result">
                                <img src={user?.picture || ""} alt="Result Avatar" className="advice-result-avatar"/>
                                <div className={'advice-result-text-box'}>
                                    {title}
                                    <br/>
                                    <br/>
                                    {problem}
                                </div>
                            </div>
                        </div>
                        {status &&
                            <div className="advice-result-result-section">
                                <div className="advice-result-result">
                                    <div className={'advice-result-text-box advice-result-answer'}>
                                        {advice}
                                    </div>
                                    <img src={'../src/assets/advice.jpg'} alt="Result Avatar"
                                         className="advice-result-avatar"/>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </>
    );
};


export default AdviceResult;
