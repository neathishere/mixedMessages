// generating random messages
const randomMessage = {
    // set available string
    _myFeelings: ['I am happy', 'I am sad', 'I am angry',
                 'I am excited', 'I am surprised', 'I am annoyed'],
    _myThoughts: ['I am loved', 'I am worthwhile', 'I am valued',
                 'I have been undermined', 'I have been rejected'],
    _myBehaviors: ['I will eat chocolate', 'I will sleep',
                'I will go for a run', 'I will dance', 'I will treat myself',
                'I will cry', 'I will meditate'],
    // set getter functions
    get myFeelings(){
        return this._myFeelings;
    },
    get myThoughts(){
        return this._myThoughts;
    },
    get myBehaviors(){
        return this._myBehaviors;
    },
    // add a randomizer method
    pickRandom(stringArray){
        let randomIndex = Math.floor(Math.random() * stringArray.length);
        return stringArray[randomIndex];
    },
    // create message generator
    generateMessage(){
        let randomFeeling = this.pickRandom(this.myFeelings);
        let randomThought = this.pickRandom(this.myThoughts);
        let randomBehavior = this.pickRandom(this.myBehaviors);
        return `Today, ${randomFeeling} because my thought is that ${randomThought}.
                Therefore, ${randomBehavior}.`;
    }
}

console.log(randomMessage.generateMessage());