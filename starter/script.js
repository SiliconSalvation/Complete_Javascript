'use strict';

let score1Dolphins = 44;
let score2Dolphins = 23;
let score3Dolphins = 71;

let score1Koalas = 65;
let score2Koalas = 54;
let score3Koalas = 49;

const calcAverage = (s1, s2, s3) => (s1 + s2 + s3) / 3;

let avgDolphins = calcAverage(score1Dolphins, score2Dolphins, score3Dolphins);
let avgKoalas = calcAverage(score1Koalas, score2Koalas, score3Koalas);

checkWinner(avgDolphins, avgKoalas);

score1Dolphins = 85;
score2Dolphins = 54;
score3Dolphins = 41;

score1Koalas = 23;
score2Koalas = 34;
score3Koalas = 27;

avgDolphins = calcAverage(score1Dolphins, score2Dolphins, score3Dolphins);
avgKoalas = calcAverage(score1Koalas, score2Koalas, score3Koalas);


checkWinner(avgDolphins, avgKoalas);

function checkWinner(avgDolphins, avgKoalas) {
    let winner;
    let score1, score2;
    
    if(avgDolphins >= 2 * avgKoalas) {
        score1 = avgDolphins;
        score2 = avgKoalas;
        winner = "Dolphins";
        console.log(message(winner, score1, score2));

    } else if(avgKoalas >= 2 * avgDolphins) {
        score1 = avgKoalas;
        score2 = avgDolphins;
        winner = "Koalas";

        console.log(message(winner, score1, score2));
    } else {
        console.log('No team wins!')
    }
}

function message(winner, score1, score2) {
    return `${winner} win (${score1} vs. ${score2})`;
}