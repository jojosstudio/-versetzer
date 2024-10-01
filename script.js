const morseCodeMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '—.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
    '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', ' ': '/'
};

const reverseMorseCodeMap = Object.fromEntries(Object.entries(morseCodeMap).map(([k, v]) => [v, k]));

function convertToMorse() {
    const inputText = document.getElementById('inputText').value.toUpperCase();
    let morseCode = '';

    for (let char of inputText) {
        if (morseCodeMap[char]) {
            morseCode += morseCodeMap[char] + ' ';
        } else {
            morseCode += char + ' ';
        }
    }

    document.getElementById('outputText').value = morseCode.trim();
}

function convertFromMorse() {
    const inputText = document.getElementById('inputText').value.trim();
    const morseWords = inputText.split(' / ');
    let normalText = '';

    for (let morseWord of morseWords) {
        const morseChars = morseWord.split(' ');
        for (let morseChar of morseChars) {
            if (reverseMorseCodeMap[morseChar]) {
                normalText += reverseMorseCodeMap[morseChar];
            } else {
                normalText += morseChar;
            }
        }
        normalText += ' ';
    }

    document.getElementById('outputText').value = normalText.trim();
}

function convertToReverse() {
    const inputText = document.getElementById('inputText').value;
    const reversedText = inputText.split('').reverse().join('');
    document.getElementById('outputText').value = reversedText;
}

function convertFromReverse() {
    const inputText = document.getElementById('inputText').value;
    const originalText = inputText.split('').reverse().join('');
    document.getElementById('outputText').value = originalText;
}
