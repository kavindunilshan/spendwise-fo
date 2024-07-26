import React, {useState} from 'react';
import '/src/styles/data-center/request-form.css';
import HeaderWithSlogan from "../../../settings/header-slogan.jsx";
import Button from "@mui/material/Button";
import {AutoAwesome} from "@mui/icons-material";

function RequestForm(props) {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const titleStyle = {
        fontSize: '1.2em',
        fontWeight: '500',
        color: '#320440',
        margin: '10px 0',
    }

    const handleSubmit = () => {

    }

    return (
        <div className="request-form">
            <form>
                <div className="request-form-group">
                    <HeaderWithSlogan title={'Request Title'} titleStyle={titleStyle}/>
                    <input type="text" id="title" value={title} name="title" className="form-control"
                           onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="request-form-group">
                    <HeaderWithSlogan title={'Problem Description'} titleStyle={titleStyle}/>
                    <textarea id="problem" name="problem" value={description} className="form-control problem-field"
                                onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className={'request-form-bottom'}>
                    <Button disableElevation
                            onClick={() => handleSubmit()}
                            variant="contained"
                            style={{
                                border: "1px solid var(--text-color)",
                                backgroundColor: "rgb(50,4,64)",
                                color: "#ffffff",
                            }}
                            startIcon={<AutoAwesome/>}
                    >
                        Request Advice
                    </Button>
                    <div className={'request-form-side-info'}>
                        * Please note that requesting advice is a paid service costing $5.
                        You can pay with a credit/debit card or other methods.
                        You will receive the advice within 24 hours.
                    </div>
                </div>
            </form>
        </div>
    );
}

export default RequestForm;
