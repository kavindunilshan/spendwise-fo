import React from 'react';
import '/src/styles/data-center/request-form.css';

function RequestForm(props) {
    return (
        <div className="request-form">
            <form>
                <div className="request-form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" className="form-control" />
                </div>
                <div className="request-form-group">
                    <label htmlFor="problem">Problem</label>
                    <textarea id="problem" name="problem" className="form-control problem-field"></textarea>
                </div>
                <button type="submit" className="btn-submit">Submit</button>
            </form>
        </div>
    );
}

export default RequestForm;
