"use strict";

// 1. Data Initialization
let namesArr = ['Ben', 'Joel', 'Judy', 'Anne'];
let scoresArr = [88, 98, 77, 88];

// 2. Calculations
const getAvgScore = () => {
    const sum = scoresArr.reduce((a, b) => a + b, 0);
    return sum / scoresArr.length;
};

const getHighScore = () => {
    let max = 0;
    let name = '';
    for (let i = 0; i < scoresArr.length; i++) {
        if (scoresArr[i] > max) {
            max = scoresArr[i];
            name = namesArr[i];
        }
    }
    return `${name} with score of ${max}`;
};

// 3. Rendering / UI Updates
const initializeResults = () => {
    const high = getHighScore();
    const avg = getAvgScore().toFixed(1);

    document.getElementById('highScore').innerHTML = high;
    document.getElementById('avgScore').innerHTML = avg;
};

const insertNewTableElement = (newName, newScore) => {
    const table = document.getElementById("scores_table");
    const row = table.insertRow(-1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);

    cell1.innerHTML = newName;
    cell2.innerHTML = newScore;
};

const initializeScoresTable = () => {
    const table = document.getElementById("scores_table");

    while (table.rows.length > 1) {
        table.deleteRow(1);
    }

    scoresArr.forEach((score, i) => {
        insertNewTableElement(namesArr[i], score);
    });
};

// 4. User Interaction
const addScore = () => {
    const scoreInput = document.getElementById('score');
    const nameInput = document.getElementById('name');
    const errorMsg = document.getElementById('error_message');

    if (scoreInput.value === '' || nameInput.value === '') {
        errorMsg.innerHTML = 'Name and score must have values';
        return;
    }

    errorMsg.innerHTML = '';
    scoresArr.push(parseInt(scoreInput.value));
    namesArr.push(nameInput.value);

    initializeScoresTable();
    initializeResults();

    scoreInput.value = '';
    nameInput.value = '';
    nameInput.focus();
};

const displayResults = () => {
    const results = document.getElementById('avgs');
    results.style.display = (results.style.display === 'none') ? 'block' : 'none';
};

const displayScores = () => {
    const scores = document.getElementById('scores');
    scores.style.display = (scores.style.display === 'none') ? 'block' : 'none';
    document.getElementById('error_message').innerHTML = '';
};

// 5. Event Listeners
window.addEventListener('load', () => {
    document.getElementById('display_results').addEventListener('click', displayResults);
    document.getElementById('display_scores').addEventListener('click', displayScores);
    document.getElementById('add').addEventListener('click', addScore);

    document.getElementById('name').focus();
    initializeResults();
    initializeScoresTable();

    document.addEventListener('keypress', (e) => {
        if (e.key === "Enter" && e.target.tagName === "INPUT") {
            e.preventDefault();
            const focusables = Array.from(document.querySelectorAll(
                'a, button, input, select, [tabindex]:not([tabindex="-1"])'
            ));
            const index = focusables.indexOf(e.target);
            if (index > -1) {
                const nextElement = focusables[index + 1] || focusables[0];
                nextElement.focus();
            }
        }
    });
});
