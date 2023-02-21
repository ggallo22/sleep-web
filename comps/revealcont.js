import { useState } from "react";

const RevealCont = () => {
    const [hours, setHours] = useState('7-9');

    const handleClick = () => {
        setHours('Hours');
    }

    return (

        <div className='reveal'>
            <p>For young adults ages 18 to 25</p>
            <p>the range is need between {hours} hours</p>
            <button onClick={handleClick}>Reveal hour range</button>
        </div>
    );
}

export default RevealCont;