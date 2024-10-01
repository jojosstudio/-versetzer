#include <iostream>
#include <unordered_map>
#include <string>

// Morse-Code-Tabelle
std::unordered_map<char, std::string> morseCode = {
    {'A', ".-"}, {'B', "-..."}, {'C', "-.-."}, {'D', "-.."},
    {'E', "."}, {'F', "..-."}, {'G', "--."}, {'H', "...."},
    {'I', ".."}, {'J', ".---"}, {'K', "-.-"}, {'L', ".-.."},
    {'M', "--"}, {'N', "-."}, {'O', "---"}, {'P', ".--."},
    {'Q', "--.-"}, {'R', ".-."}, {'S', "..."}, {'T', "-"},
    {'U', "..-"}, {'V', "...-"}, {'W', ".--"}, {'X', "-..-"},
    {'Y', "-.--"}, {'Z', "--.."},
    {'1', ".----"}, {'2', "..---"}, {'3', "...--"}, {'4', "....-"},
    {'5', "....."}, {'6', "-...."}, {'7', "--..."}, {'8', "---.."},
    {'9', "----."}, {'0', "-----"},
    {' ', "/"}  // Leerzeichen als /
};

// Funktion zur Umwandlung von Text in Morsecode
std::string textToMorse(const std::string& text) {
    std::string morse;
    for (char c : text) {
        c = toupper(c);  // Großbuchstaben
        if (morseCode.find(c) != morseCode.end()) {
            morse += morseCode[c] + " ";
        }
    }
    return morse;
}

extern "C" {
    const char* generateMorse(const char* input) {
        static std::string result;
        result = textToMorse(input);
        return result.c_str();
    }
}
