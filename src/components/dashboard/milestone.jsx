import React, {useEffect, useState} from 'react';
import Trophy from "./tryphy.jsx";
import {useAuth0} from "@auth0/auth0-react";
import {useTokenManager} from "../../services/direct-tocken.js";
import {fetchMilestones} from "../../services/data-center.js";

function Milestone(props) {
    const { user, isAuthenticated } = useAuth0();
    const { getAccessToken } = useTokenManager();
    const [milestones, setMilestones] = useState([]);

    useEffect(() => {
        if (isAuthenticated) {
            fetchMilestones(user.sub.split('|')[1], getAccessToken).then((data) => {
                setMilestones(data);
            });
        }
    }, [user]);

    const styles = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '80%',
        width: '90%',
        margin: '0 10px',
    }
    return (
        <div className={'milestone-container'} style={styles}>
            {milestones.map((milestone, index) => {
                return <Trophy key={index} img={milestone.img} date={milestone.date} reason={milestone.reason}/>
            })
            }


            {
                milestones.length === 0 &&
                <>
                    <Trophy img={'/m1.png'} date={'Not achieved'} reason={'First Income Goal'}/>
                    <Trophy img={'/m1.png'} date={'Not achieved'} reason={'First Expense Goal'}/>
                    <Trophy img={'/m1.png'} date={'Not achieved'} reason={'100 Transactions'}/>
                </>
            }

        </div>
    );
}

export default Milestone;