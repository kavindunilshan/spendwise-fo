import React, {useContext, useEffect, useRef} from 'react';
import {SettingsContext} from "../../../settings/settings-context.jsx";
import Button from "@mui/material/Button";
import html2pdf from 'html2pdf.js';

function Reports(props) {

    const { setComponentData } = useContext(SettingsContext);

    useEffect(() => {
        setComponentData({"title": "Reports", "slogan": "Generate your spendWise reports"});
    }, []);

    const handleDownload = () => {
        window.print();
    };


    return (
        <div className={'printable'} ref={printableRef}>
            <Button variant="contained" color="primary"
                    onClick={handleDownload}
            >
                Download Report
            </Button>
        </div>
    );
}

export default Reports;