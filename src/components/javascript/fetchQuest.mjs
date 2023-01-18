import { getVocabs, checkKanji } from './vocab.mjs';
import { getKRAD } from './krad.mjs';
import { getRADK } from './radk.mjs';
import { hiraganaList } from './hirgana.mjs';


function fetchQuest(level) {
    function createQuest(kanji, kana, meaning, JLPT, choiceKanji, choiceKana) {
        return {
            kanji: kanji,
            kana: kana,
            meaning: meaning,
            JLPT: JLPT,
            choiceKanji: choiceKanji,
            choiceKana: choiceKana
        };
    }
    const test = level.split("");
    const randLevel = test[Math.floor(Math.random() * level.length)];
    const randVocab = getVocab(parseInt(randLevel));
    const quest = createQuest(randVocab.kanji,
        randVocab.kana,
        randVocab.meaning,
        randVocab.JLPT,
        getChoiceKanji(randVocab.kanji),
        getChoiceKana(randVocab.kana))

    return quest;
}

function getVocab(level) {
    const list = getVocabs(level);
    const randVocabInd = Math.floor(Math.random() * list.length)
    return list[randVocabInd];
}

function getChoiceKanji(kanji) {
    // const vocabCount = kanji.length;
    const listChar = kanji.split("");
    const choices = [];
    let temp = [];
    let tally = [];

    for (let x in listChar) {
        if (hiraganaList.includes(listChar[x])) {
            choices.push(listChar[x]);
        } else {
            const listRadical = getKRAD(listChar[x]).split("");
            if (listRadical.length !== 0) {
                temp = [];
                for (let y in listRadical) {
                    const z = getRADK(listRadical[y]).split("");
                    temp = temp.concat(z.filter(a => checkKanji(a)))
                }
                shuffle(temp);
                tally = temp.reduce((t, v) => (t[v] = (t[v] || 0) + 1, t), {})
                temp = Object.fromEntries(
                    Object.entries(tally).sort(([, a], [, b]) => a - b)
                )
                tally = Object.entries(temp);
                temp = tally.slice(-3);
                for (let x in temp) {
                    choices.push(temp[x][0])
                }
                if (!choices.includes(listChar[x])) choices.push(listChar[x]);

            } else {
                choices.push(listChar[x])
            }

        }

    }
    shuffle(choices);
    return choices;
}

function getChoiceKana(kana) {
    const vocabCount = kana.length;
    let choices = kana.split("");
    let count = vocabCount;
    while (count < vocabCount * 2) {
        const randomIndex = Math.floor(Math.random() * hiraganaList.length);
        if (!choices.includes(hiraganaList[randomIndex])) choices.push(hiraganaList[randomIndex]);
        count++
    }
    shuffle(choices);
    return choices;
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

export { fetchQuest };
