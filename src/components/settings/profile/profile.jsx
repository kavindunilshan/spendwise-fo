import React, {useContext, useEffect} from 'react';
import {SettingsContext} from "../settings-context.jsx";
import '/src/styles/settings/components/profile.css';
import {CountryDropdown} from "react-country-region-selector";
import Button from "@mui/material/Button";

function Profile({}) {

    const { setComponentData } = useContext(SettingsContext);

    const [country, setCountry] = React.useState('');
    const [isEditing, setIsEditing] = React.useState(false);

    useEffect(() => {
        setComponentData({"title": "Profile", "slogan": "View and edit your profile information"});
    }, []);

    const selectCountry = (val) => {
        setCountry(val);
    }

    const handleSave = () => {
        setIsEditing(false);
    }

    return (
        <div className={'profile-container'}>
            <div className={'profile-content'}>
                <div className={'profile-pic'}>
                    <img src={'/src/assets/images/profile.png'} alt={'profile'}/>
                </div>
                <div className={'profile-content-item'}>
                    <label htmlFor={'profile-name'}>Name</label>
                    <input type={'text'} id={'profile-name'} name={'profile-name'} placeholder={'Your name'}/>
                </div>
                <div className={'profile-content-item'}>
                    <label htmlFor={'profile-email'}>Email</label>
                    <input type={'email'} id={'profile-email'} name={'profile-email'} placeholder={'Your email'}/>
                </div>
                <div className={'profile-content-item'}>
                    <label htmlFor={'profile-city'}>Country</label>
                    <CountryDropdown
                        value={country}
                        onChange={(val) => selectCountry(val)}
                        // blue when focus
                        style={{width: '30%', height: '40px', padding: '5px', borderRadius: '5px', border: '1px solid #ccc', outline: 'none'}}
                    />
                </div>
                <div className={'profile-content-item'}>
                    <label htmlFor={'profile-zip'}>Currency</label>
                    <input type={'text'} id={'profile-zip'} name={'profile-currency'} placeholder={'Your currency'}/>
                </div>
                <div className={'profile-content-item'}>
                </div>
            </div>

            <div className={'profile-btns'}>
                {!isEditing ? <Button variant="contained" onClick={() => setIsEditing(true)}>Edit</Button>
                    : <>
                        <Button variant="contained" onClick={() => handleSave()}>Save</Button>
                        <Button variant="contained" onClick={() => setIsEditing(false)}>Cancel</Button>
                     </>
                }
            </div>
        </div>
    );
}

export default Profile;