import React from "react";
import { Button} from "react-bootstrap";
import '../src/Stopwatch.css';

function StopwatchButton({ text, action }) {

    return (
        <>

            <Button size="large" block
                className="Stopwatch-button"
                onClick={action}
            >
                {text}
            </Button>

        </>
    )
}

export default StopwatchButton;