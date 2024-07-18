import React from 'react';
import {ClipLoader, GridLoader} from "react-spinners";

function Loading(props) {

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    }

    return (
        <div>
            <div className="loading" style={style}>
                <GridLoader
                    color={'#320440'}
                    loading={true}
                    size={8}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                <img src={"./src/assets/loading.svg"} alt="Loading..." style={{width: '150px'}}/>
            </div>
        </div>
    );
}

export default Loading;