// Code Keypad Component Here

function Keypad (){
    function change(){
        console.log('Entering password...')
    }
    return (
        // <div>hello2</div>
        <input type="password" onChange={change}></input>
    )
}

export default Keypad;