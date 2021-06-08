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
    get myFeeling(){
        return this._myFeelings;
    },
    get myThoughts(){
        return this._myThoughts;
    },
    get myBehaviors(){
        return this._myBehaviors;
    }

}