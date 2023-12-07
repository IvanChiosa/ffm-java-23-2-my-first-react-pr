import { useState, useEffect } from 'react';

function YourComponent() {
    const [age, setAge] = useState<number>(17);

    function birthday() {
        setAge(18);
    }

    useEffect(() => {
        console.log(age);
    }, [age]); // useEffect wird immer dann aufgerufen, wenn sich der "age"-Zustand ändert

    return (
        <div>
            <p>Age: {age}</p>
            <button onClick={birthday}>Celebrate Birthday</button>
        </div>
    );
}

export default YourComponent;
