const fetch = require('node-fetch');
const hash = require('hash-wasm');

export default class IonProofOfWork {
    static async submitIonRequest(getChallengeUri, solveChallengeUri, requestBody) {
        console.log(`Getting challenge from: ${getChallengeUri}`);
        const getChallengeResponse = await fetch(getChallengeUri);
        if (!getChallengeResponse.ok) {
            throw new Error('Get challenge service not available')
        }
        const challengeBody = getChallengeResponse.json();

        const challengeNonce = challengeBody.challengeNonce;
        const largestAllowedHash = challengeBody.largestAllowedHash;
        
        let hash = '';
        





        
        const answerNonce = '';
        const response = await fetch(solveChallengeUri, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'content-type': 'application/json',
                'challenge-nonce': challengeNonce,
                'answer-nonce': answerNonce
            }
        });

        if (response.status > 500) {
            console.log(`Unexpected 5xx response: ${response.text()}`);
        } else if (response.status > 400) {
            // 400 means bad request, so should retry with a new challenge
            console.log(`Bed request: ${response.text()}`);
            console.log('Retrying with new challenge and difficulty');
        } else if (response.status > 300) {
            console.log(`Unexpected 3xx response: ${response.text()}`);
        } else {
            //success
            console.log(`Successful registration`);
        };
    }
}