function Keypad () {
 const handleInput = () => {
    console.log ("Entering password...")

 };
    return (
        <div>
            <input type="password" onChange={handleInput}></input>
        </div>
    );

};

export default Keypad;