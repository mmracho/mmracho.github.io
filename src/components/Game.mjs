import React, { useState } from "react";
import './css/Game.css';
import { fetchQuest } from "./javascript/fetchQuest.mjs";

function Game() {
    const [isChecked, setIsChecked] = useState(true);
    const [pickMode, setPickMode] = useState("0");
    const [levelJLPT, setLevel] = useState('');
    const [pickKanji, setPickKanji] = useState([]);
    const [pickKana, setPickKana] = useState([]);
    const [startButton, setStartButton] = useState('START!');
    const [inputField, setInputField] = useState('');
    const [inputFieldMap, setInputFieldMap] = useState('');
    const [currentStreak, setCurrentStreak] = useState(0);
    const [highestStreak, setHighestStreak] = useState(0);
    const [checkAns, setCheckAns] = useState(0);

    const onChangeValue = (changeEvent) => {
        if (levelJLPT.length === 0 && pickKanji.length === 0) {
            setIsChecked(!isChecked)
            setPickMode(changeEvent)
        } else if (levelJLPT.length === 0 && pickKanji.length !== 0) {
            // MODIFY ALERT LATER
            alert("Please select at least one from the options.")
        } else if (levelJLPT.length !== 0 && pickKanji.length === 0) {
            setIsChecked(!isChecked)
            setPickMode(changeEvent)
        } else {
            setIsChecked(!isChecked)
            setPickMode(changeEvent)
            showQuestion();
            setCurrentStreak(0);
        }

    }

    const handleStart = () => {
        showQuestion();
    }
    const handleSkip = () => {
        showQuestion();
        setCurrentStreak(0);
    }

    const handleOnCheckJLPT = (val, state) => {
        if (state) {
            setLevel(levelJLPT + val);
        } else {
            setLevel(levelJLPT.replace(val, ''));
        }
    }

    function clearField() {
        setInputField('');
        setInputFieldMap('');
    }

    function showQuestion() {
        if (levelJLPT.length === 0) {
            // MODIFY ALERT LATER
            alert("Please select at least one from the options.")
        } else {
            const quest = fetchQuest(levelJLPT);
            let divElementKanji = document.getElementById("hKanji");
            let divElementKana = document.getElementById("hKana");
            let divElementMeaning = document.getElementById("pMeaning");
            let divElementJLPT = document.getElementById("pJLPT");
            setStartButton('SKIP');
            divElementKanji.textContent = quest.kanji;
            divElementKana.textContent = quest.kana;
            divElementMeaning.textContent = quest.meaning;
            divElementJLPT.textContent = "JLPT N" + quest.JLPT;
            setPickKanji(quest.choiceKanji);
            setPickKana(quest.choiceKana);
            setInputField('');
            setInputFieldMap('');
        }
    }

    const handleOnPick = (val) => {
        const valId = val.target.id;
        const valText = val.target.textContent;
        if (inputFieldMap.search(valId) !== -1) {
            setInputFieldMap(inputFieldMap.replace(valId, ''))
            setInputField(inputField.replace(valText, ''))
        } else {
            setInputFieldMap(inputFieldMap + valId)
            setInputField(inputField + valText)
        }
    }

    function checkAnswer() {
        if (pickMode === "0") {
            let divElementKanji = document.getElementById("hKanji");
            if (divElementKanji.textContent === inputField) {
                setCheckAns(1);
                setTimeout(() => setCheckAns(0), 1000)
                showQuestion();
                setCurrentStreak(currentStreak + 1);
                if (currentStreak >= highestStreak) {
                    setHighestStreak(currentStreak + 1)
                }
            } else {
                setCheckAns(2);
                setTimeout(() => setCheckAns(0), 1000)
                setCurrentStreak(0);
            }
        } else {
            let divElementKana = document.getElementById("hKana");
            if (divElementKana.textContent === inputField) {
                setCheckAns(1);
                setTimeout(() => setCheckAns(0), 1000)
                showQuestion();
                setCurrentStreak(currentStreak + 1);
                if (currentStreak >= highestStreak) {
                    setHighestStreak(currentStreak + 1)
                }

            } else {
                setCheckAns(2);
                setTimeout(() => setCheckAns(0), 1000)
                setCurrentStreak(0);
            }
        }
    }

    return (
        <body className="cnameBodyDef">
            <h1>Welcome!</h1>
            <p id="inst"><br></br>Select your preferred JLPT level/s and press START<br></br><br></br>
                Instructions: After pressing start, select boxes to fill in the answer field then press CHECK to see if you're correct.<br></br>
                Note: Skipping or switching modes after starting resets your current streak! Go to Home to reset.
            </p>
            <div className="cnameFields">
                <fieldset className="fieldJLPT">
                    <legend>JLPT OPTIONS:</legend>
                    <div>
                        <input type="checkbox" id="N5" name="N5" value="5" onChange={val => handleOnCheckJLPT(val.target.value, val.target.checked)} />
                        <label for="N5">N5</label>
                        <input type="checkbox" id="N4" name="N4" value="4" onChange={val => handleOnCheckJLPT(val.target.value, val.target.checked)} />
                        <label for="N4">N4</label>
                        <input type="checkbox" id="N3" name="N3" value="3" onChange={val => handleOnCheckJLPT(val.target.value, val.target.checked)} />
                        <label for="N3">N3</label>
                        <input type="checkbox" id="N2" name="N2" value="2" onChange={val => handleOnCheckJLPT(val.target.value, val.target.checked)} />
                        <label for="N2">N2</label>
                        <input type="checkbox" id="N1" name="N1" value="1" onChange={val => handleOnCheckJLPT(val.target.value, val.target.checked)} />
                        <label for="N1">N1</label>
                    </div>
                </fieldset>
                <fieldset className="fieldMode">
                    <legend>MODE:</legend>
                    <div>
                        <input type="radio" id="radKanji" name="radKanji" value="0" checked={isChecked} onChange={val => onChangeValue(val.target.value)} />
                        <label for="radKanji">Solve For Kanji</label>
                        <input type="radio" id="radKana" name="radKana" value="1" checked={!isChecked} onChange={val => onChangeValue(val.target.value)} />
                        <label for="radKana">Solve For Kana</label>
                    </div>
                </fieldset>
            </div>
            <input id='btnInitial' type="button" value="START" className={startButton === 'START!' ? 'initialStart' : 'divElementHide'} onClick={handleStart} />
            <section className="cnameSection1">
                <div className={pickMode === "1" ? 'divQuestionActive' : 'divElementHide'}>
                    <h1 id="hKanji"> </h1>
                </div>
                <div className={pickMode === "0" ? 'divQuestionActive' : 'divElementHide'}>
                    <h1 id="hKana"> </h1>
                </div>
                <div>
                    <p id="pMeaning"></p>
                </div>
                <div>
                    <p id="pJLPT"></p>
                </div>
                <div className="divOptions">
                    <ul className={pickMode === "0" ? 'ulKanjiActive' : 'divElementHide'}>
                        {
                            pickKanji.map((item, index) => {
                                return (
                                    <li className="alternative" id={"kanji" + index} onClick={val => handleOnPick(val)}>{item}</li>
                                )
                            })
                        }
                    </ul>
                    <ul className={pickMode === "1" ? 'ulKanaActive' : 'divElementHide'}>
                        {
                            pickKana.map((item, index) => {
                                return (
                                    <li className="alternative" id={"kana" + index} onClick={val => handleOnPick(val)}>{item}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </section>
            <section className="cnameSection2">
                <div id='inputLeft' className={startButton === 'START!' ? 'divElementHide' : 'inputLeft'}>Highest Streak <br></br> <p>{highestStreak}</p></div>
                <div id='inputMid' className={startButton === 'START!' ? 'divElementHide' : 'inputMid'}>
                    <div id="answer">
                        <input id='btnStart' type="button" value="SKIP" className="cnameBtnSkip" onClick={handleSkip} />
                        <input id='field' type="text" placeholder="select from above" value={inputField} className="inputField" readOnly ></input>
                        <input id='btnClear' type="button" value="CLEAR" className="cnameBtnClear" onClick={clearField} />
                    </div>
                    <input id='btnCheck' type="button" value="CHECK" className="cnameBtnCheck" onClick={checkAnswer} />
                </div>
                <div id='inputRight' className={startButton === 'START!' ? 'divElementHide' : 'inputRight'}>Current Streak <br></br> <p>{currentStreak}</p></div>
            </section>
            <i id={checkAns === 1 ? 'correct' : 'iconInitial'} class="fa-solid fa-check-double fa-bounce fa-10x"></i>
            <i id={checkAns === 2 ? 'wrong' : 'iconInitial'} class="fa-solid fa-xmark fa-beat fa-10x"></i>
        </body>
    )
}

export default Game;