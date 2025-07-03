const lowerVowels = ["a", "e", "i", "o", "u"];
const upperVowels = ["A", "E", "I", "O", "U"];

export const translateToOO = (inputValue: string): string => {
    return inputValue
        .split("")
        .map((char) => {
            if (lowerVowels.includes(char)) return "oo";
            if (upperVowels.includes(char)) return "OO";
            return char;
        })
        .join("");
}

/*export async function translateToEnglish(inputValue: string): Promise<string> {
    const tokens = inputValue.split(/(oo|Oo)/g); // split on 'oo' and 'Oo' while preserving
    const permutations = generatePermutations(tokens);

    for (const word of permutations) {
        if (await isValidWord(word)) {
            return word;
        }
    }

    return permutations[0] || inputValue;
}


function generatePermutations(tokens: string[]): string[] {
    const options = tokens.map((token) => {
        if (token === "oo") return lowerVowels;
        if (token === "Oo") return upperVowels;
        return [token];
    });

    return options.reduce<string[]>(
        (acc, curr) => acc.flatMap((prefix) => curr.map((c) => prefix + c)),
        [""]
    );
}

async function isValidWord(word: string): Promise<boolean> {
    try {
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        return res.ok;
    } catch {
        return false;
    }
}*/