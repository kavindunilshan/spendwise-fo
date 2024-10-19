// src/components/ErrorBoundary.js
import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = { hasError: false };

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    handleReload = () => {
        this.setState({ hasError: false });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h1>Something went wrong!</h1>
                    <p>
                        We apologize for the inconvenience.
                        Please try refreshing the page or come back later.
                    </p>
                    <button onClick={this.handleReload} style={{ padding: '10px 20px', cursor: 'pointer' }}>
                        Reload Page
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
