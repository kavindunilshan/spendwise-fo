import React, { useState } from 'react';
import '/src/styles/data-center/advice-response.css';
import { useAuth0 } from "@auth0/auth0-react";

const AdviceResponse = ({ index, title, timestamp, problem }) => {
    const { isAuthenticated, user, loginWithPopup } = useAuth0();
    const [answer, setAnswer] = useState('');
    const [isAnswering, setIsAnswering] = useState(true);

    return (
        <>
            {isAuthenticated && (
                <div className="advice-response">
                    <div className="advice-response-header">
                        <h2>Answer Thread #{index}</h2>
                        <div className="advice-response-status-timestamp">
                            <span className="advice-response-timestamp">{timestamp}</span>
                        </div>
                    </div>
                    <div className="advice-response-content">
                        <div className="advice-response-problem-section">
                            <div className="advice-response-result">
                                <div className="advice-response-text-box">
                                    {title}
                                    <br />
                                    <br />
                                    {problem}
                                </div>
                            </div>
                        </div>
                        {isAnswering && (
                            <div className="advice-response-result-section">
                                <div className="advice-response-result">
                                    <textarea
                                        id="problem"
                                        name="problem"
                                        value={answer}
                                        className="advice-response-answer-area"
                                        onChange={(e) => setAnswer(e.target.value)}
                                    ></textarea>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default AdviceResponse;
