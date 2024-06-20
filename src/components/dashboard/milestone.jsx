import React from 'react';
import Trophy from "./tryphy.jsx";

function Milestone(props) {
    // milestones use state
    const [milestones, setMilestones] = React.useState([]);

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
        </div>
    );
}

export default Milestone;