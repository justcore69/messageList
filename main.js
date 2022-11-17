//message submiting input
const fmess = document.getElementById('form-message')
const fbutt = document.getElementById('form-button')
//
const xbutt = document.getElementById('x-button')
//setting input
const sdelay = document.getElementById('setting-delay')
//top displaying message
const curMessText = document.getElementById('current-message')

//settings
let messageDisplayDelay = 2.5


let allMessageArray = ['Default message 123', 'I wanna some pizza', 'Free coffee!!!']
let displayingMessageArray = allMessageArray;

let currentMessage = ''
let currentMessageID = 0

sdelay.value = messageDisplayDelay

displayNextMessage()
updateMessageList()

xbutt.onclick = function(){ //remove displaying message from list
    for(let i = 0; i < displayingMessageArray.length; i++){
        if(currentMessage === displayingMessageArray[i]){
            displayingMessageArray.splice(i, 1)
            curMessText.innerHTML = ''
            break;
        }
    }
}

fbutt.onclick = function(){ //add a new message to list
    displayingMessageArray.push(fmess.value)
}

async function displayNextMessage(){ //update displaying message to next

    messageDisplayDelay = sdelay.value

    if(currentMessageID >= displayingMessageArray.length){
        currentMessageID = 0;
    }

    currentMessage = displayingMessageArray[currentMessageID]

    curMessText.innerHTML === undefined ? curMessText.innerHTML = 'No allowed message' : curMessText.innerHTML = currentMessage

    console.log(currentMessageID)
    currentMessageID++
    await delay(messageDisplayDelay)
    displayNextMessage()
}

async function updateMessageList(){ //update list of all messages
    const _allDiv = document.getElementById('all-div')

    _allDiv.innerHTML = ''

    for(let i = 0; i < allMessageArray.length; i++){
        let _pmess = document.createElement('p')
        let _pmessContent = document.createTextNode(allMessageArray[i])
        
        _pmess.appendChild(_pmessContent)
        _pmess.classList = 'message'

        _allDiv.appendChild(_pmess)
    }
    await delay(0.001)
    updateMessageList()
}

function delay(time){
    return new Promise(resolve => setTimeout(resolve, time*1000));
}