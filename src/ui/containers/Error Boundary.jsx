import { Component} from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;
        const { children } = this.props;
        return hasError
            ? <h1>&#128532; You need to reload the page</h1>
            : children;
    }
}

export default ErrorBoundary;