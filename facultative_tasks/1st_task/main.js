const $dataEntry = document.querySelector("#data-entry");
const $dataOutput = document.querySelector("#data-output");
const $processBtn = document.querySelector("#process-data-btn");

function processEntry(e){
    e.preventDefault();
    if (!$dataEntry.value) {
        $dataEntry.setAttribute('placeholder', 'Enter some text, please');
        return;
    }
    const initTextArray = $dataEntry.value.split('');
    let maxString = '', interStr = '';

    initTextArray.forEach((currentSymbol) => {
        if(!interStr.includes(currentSymbol)) {
            interStr += currentSymbol;
            if(interStr.length > maxString.length) {
                maxString = interStr;
            }
        } else {
            interStr = currentSymbol;
        }
    }, '');

    $dataOutput.value=`Max unique string: ${maxString}\nUnique str length: ${maxString.length}`;
}

$processBtn.addEventListener('click', processEntry);

