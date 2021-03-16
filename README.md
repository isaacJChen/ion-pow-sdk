# ion-pow-sdk

This repo contains the sdk for ION proof of work.

### How To Use It

1. npm install ion-pow-sdk
1. `import IonProofOfWork from 'ion-pow-sdk'`
1. call `IonProofOfWork.submitIonRequestUntilSuccess(getChallengeUri, solveChallengeUri, requestBody)`
1. The SDK will get the challenge, solve it, and submit the request for you.