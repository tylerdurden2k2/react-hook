import React from "react";
import { useState, useEffect } from "react";

class Timer extends React.Component {
    state = {
        countDown: 10,
    };

    componentDidMount() {
        this.handleCountDown = setInterval(() => {
            this.setState({
                countDown: this.state.countDown - 1,
            });
        }, 1000);
    }
    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.countDown !== this.state.countDown &&
            this.state.countDown === 0
        ) {
            this.setState({
                countDown: 10,
            });
        }
    }
    render() {
        return <div>{this.state.countDown} Class</div>;
    }
    componentWillUnmount() {
        if (this.handleCountDown) {
            clearInterval(this.handleCountDown);
        }
    }
}

const CountDownHook = () => {
    const [count, setCount] = useState(10);
    useEffect(() => {
        if (count === 0) {
            setCount(10);
        }
        let timer = setInterval(() => {
            setCount(count - 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [count]);
    return <div>{count} Hook</div>;
};

export { Timer, CountDownHook };
