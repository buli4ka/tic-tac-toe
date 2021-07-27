import "./index.css";
import { useState } from "react"
import { checkWin } from "./functions/checkWin"
import { Board } from './components/board'
function App() {
    const [symbol, setSymbol] = useState('X');
    const [fieldSize, setFieldSize] = useState(3);
    const [field, setField] = useState(Array.from(Array(fieldSize), () => new Array(fieldSize).fill(' ')));



    const changeHandler = event => {
        let newSize = parseInt(event.target.value);
        if (newSize > 0) {
            setFieldSize(newSize);
            setField(Array.from(Array(newSize), () => new Array(newSize).fill(' ')));
            console.log(newSize)
        }
        else
            alert("Size couldn't be fewer than 1")

    }


    const moveHandler = (e) => {

        console.log(field)
        if (e.target.className === require("./config/config").classNames.cellClassName) {
            const button = e.target;
            let element = e.target.children[0];
            if (!element) {
                element = document.createElement('h1')
                button.appendChild(element);
                element.textContent = symbol;

                if (symbol === 'X') {
                    setSymbol('O');
                } else { setSymbol('X') };
            }
            if (checkWin(button.id, field, symbol, fieldSize) && window.confirm("WIN with current symbol: " + symbol)) {
                window.location.reload();
            }
        }

    }
    return (
        <div className="container" >
            <div className="user-input">
                <h2 className="user-input-title">Field size</h2>
                <div>
                    <div className="input-field">
                        <input id="size" type="number" value={fieldSize} onChange={changeHandler} />
                    </div>
                </div>
            </div>
            <div className={require("./config/config").classNames.gridClassName} >
                <Board fieldSize={fieldSize} moveHandler={moveHandler} setField={setField} />
            </div >

        </div>
    );
}
export default App;