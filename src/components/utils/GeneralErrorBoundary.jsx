import React, { Component } from 'react';
import "/src/styles/utils/error-boundary.css";

class GeneralErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
    }

    handleReload = () => {
        this.setState({ hasError: false });
        window.location.href = window.location.origin;
    };


    render() {
        if (this.state.hasError) {
            return (
                <div className="eb-error-container">
                    <img src="/logoa.png" alt="SpendWise Logo"/>
                    <h1>Something went wrong!</h1>
                    <p>
                        We apologize for the inconvenience.
                        Please try refreshing the page or come back later.
                    </p>
                    <button onClick={this.handleReload} className="eb-error-button">
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default GeneralErrorBoundary;
