import React, { useState } from "react";
import { Form, FormGroup, Button, ButtonGroup, FormLabel } from "react-bootstrap";
import StopwatchButton from "./StopwatchButton";
import '../src/Stopwatch.css';

function StopwatchContainer() {

    const [tick, setTick] = useState(null);
    const [totalSeconds, setTotalSeconds] = useState(0);

    const Separator = () => {
        return <FormLabel>:</FormLabel>;
    }

    const startCounter = () => {
        clearInterval(tick);
        setTick(setInterval(() => incrementCount(), 1000))
    }

    const incrementCount = () => {
        setTotalSeconds((prevState) => prevState += 1);
    }

    const getHours = () => {
        return parseInt(totalSeconds / 60 / 60) % 24;
    }

    const getMinutes = () => {
        return parseInt(totalSeconds / 60) % 60;
    }

    const getSeconds = () => {
        return totalSeconds % 60;
    }

    const stopCounter = () => {
        clearInterval(tick);
        setTick(null);
    }

    const resetCounter = () => {
        clearInterval(tick);
        setTotalSeconds(0);
        setTick(null);
    }

    const resumeCounter = () => {
        clearInterval(tick);
        setTick((setInterval(() => incrementCount()), 1000))
    }

    let buttons = null;
    let started = getHours() > 0 || getMinutes > 0 || getSeconds() > 0;

    const leadingZero = (num) => {
        return num < 10 ? '0' + num : num;
    }

    return (
        <>
            
                <Form>
                    <FormGroup>
                        <FormLabel>{leadingZero(getHours())}</FormLabel>
                        <Separator />
                        <FormLabel>{leadingZero(getMinutes())}</FormLabel>
                        <Separator />
                        <FormLabel>{leadingZero(getSeconds())}</FormLabel>
                    </FormGroup>
                    <FormGroup size="large">
                        <StopwatchButton text="Start" action={startCounter} />
                        <StopwatchButton text="Resume" action={resumeCounter} />
                        <StopwatchButton text="Reset" action={resetCounter} />
                        <StopwatchButton text="Stop" action={stopCounter} />
                    </FormGroup>
                    <FormGroup>

                    </FormGroup>
                </Form>


        </>


    )

}

export default StopwatchContainer;