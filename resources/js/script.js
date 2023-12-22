let memory = 0;

function clearVisor() {
    document.getElementById('visorText').value = "";
}

function mc() {
    memory = 0;
}

function mr() {
    document.getElementById('visorText').value = memory;
}

function mm() {
    memory -= parseFloat(document.getElementById('visorText').value);
}

function mp() {
    memory += parseFloat(document.getElementById('visorText').value);
}

function digits(num) {
    switch(num) {
        case 'nine':
            document.getElementById('visorText').value += '9';
            break;
        case 'eight':
            document.getElementById('visorText').value += '8';
            break;
        case 'seven':
            document.getElementById('visorText').value += '7';
            break;
        case 'six':
            document.getElementById('visorText').value += '6';
            break;
        case 'five':
            document.getElementById('visorText').value += '5';
            break;
        case 'four':
            document.getElementById('visorText').value += '4';
            break;
        case 'three':
            document.getElementById('visorText').value += '3';
            break;
        case 'two':
            document.getElementById('visorText').value += '2';
            break;
        case 'one':
            document.getElementById('visorText').value += '1';
            break;
        case 'zero':
            document.getElementById('visorText').value += '0';
            break;
        case 'dot':
            document.getElementById('visorText').value += '.';
            break;
        case 'mult':
            document.getElementById('visorText').value += '*';
            break;
        case 'divi':
            document.getElementById('visorText').value += '/';
            break;
        case 'sum':
            document.getElementById('visorText').value += '+';
            break;
        case 'sub':
            document.getElementById('visorText').value += '-';
            break;
        case 'neg':
            let visorText = document.getElementById('visorText').value;
    
            if (!isNaN(visorText)) {
                var numero = parseFloat(visorText);
                
                if (numero < 0) {
                    document.getElementById('visorText').value = Math.abs(numero);
                } else {
                    document.getElementById('visorText').value = -Math.abs(numero);
                }
            }
            break;
    }
}

function srqrrt() {
    let num = document.getElementById('visorText').value;
    num = parseFloat(num);
    
    if (!isNaN(num)) {
        const result = Math.sqrt(num);
        document.getElementById('visorText').value = parseFloat(result.toFixed(2));
    } else {
        alert('not a valid number');
    }
}

function operation() {
    const expressionString = document.getElementById('visorText').value;

    try {
      const result = math.evaluate(expressionString);
      document.getElementById('visorText').value = parseFloat(result.toFixed(2));
      console.log('(log) answer is: '+parseFloat(result.toFixed(2)));
    } catch (error) {
      document.getElementById('visorText').value = 'ERROR';
      console.error(error);
    }
}

function deleteLast() {
    document.getElementById('visorText').value = document.getElementById('visorText').value.substring(0,document.getElementById('visorText').value.length-1);
}
