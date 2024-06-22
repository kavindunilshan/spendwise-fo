import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../settings-context.jsx";
import '/src/styles/settings/components/profile.css';
import {CountryDropdown} from "react-country-region-selector";
import Button from "@mui/material/Button";
import {useAuth0} from "@auth0/auth0-react";
import {Avatar} from "@mui/material";
import {Edit} from "@mui/icons-material";

function Profile({}) {

    const { setComponentData } = useContext(SettingsContext);

    let { user, logout } = useAuth0();

    const [country, setCountry] = React.useState('');
    const [isEditing, setIsEditing] = React.useState(false);
    const [currency, setCurrency] = React.useState([]);

    useEffect(() => {
        setComponentData({"title": "Profile", "slogan": "View and edit your profile information"});
    }, []);


    const selectCountry = (val) => {
        setCountry(val);
    }

    const handleSave = () => {
        setIsEditing(false);
    }

    const handleCurrencyChange = (event) => {
        const value = event.target.value;
        setCurrency(value);
    }

    const btnStyle = {
        margin: '10px',
        backgroundColor: '#320440',
    }

    return (
        <div className={'profile-container'}>
            <div className={'profile-btns'}>
                {!isEditing ? <Button style={btnStyle} variant="contained"
                                      onClick={() => setIsEditing(true)}
                                      startIcon={<Edit/>}
                    >
                        Edit
                    </Button>
                    : <>
                        <Button style={btnStyle} variant="contained" onClick={() => handleSave()}>Save</Button>
                        <Button style={btnStyle} variant="contained" onClick={() => setIsEditing(false)}>Cancel</Button>
                    </>
                }
            </div>
            <div className={'profile-content'}>
                <div className={'profile-pic'}>
                    <Avatar className={'login-user-icon'} style={{width: 140, height: 140, cursor: 'pointer'}}
                            alt={user?.name || ""} src={user?.picture || ""}/>
                </div>
                <div className={'profile-content-item'}>
                    <label htmlFor={'profile-name'}>Name</label>
                    <input disabled={!isEditing} type={'text'} id={'profile-name'} name={'profile-name'}
                           placeholder={'Your name'}/>
                </div>
                <div className={'profile-content-item'}>
                    <label htmlFor={'profile-email'}>Email</label>
                    <input disabled={!isEditing} type={'email'} id={'profile-email'} name={'profile-email'}
                           placeholder={'Your email'}/>
                </div>
                <div className={'profile-content-item'}>
                    <label htmlFor={'profile-city'}>Country</label>
                    <CountryDropdown
                        value={country}
                        onChange={(val) => selectCountry(val)}
                        disabled={!isEditing}
                        style={{
                            width: '30%',
                            height: '40px',
                            padding: '5px',
                            borderRadius: '15px',
                            border: '1px solid #ccc',
                            outline: 'none'
                        }}
                    />
                </div>
                <div className={'profile-content-item'}>
                    <label htmlFor={'profile-currency'}>Currency</label>
                    <input disabled={!isEditing} type={'text'} id={'profile-currency'} name={'profile-currency'}
                           placeholder={'Currency (max 3 letters)'}
                           onChange={handleCurrencyChange} value={currency} maxLength={3}
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;