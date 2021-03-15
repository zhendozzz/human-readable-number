module.exports = function toReadable(number) {
    const n1 = {
        0: "",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };
    const n10_20 = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    };

    const n10_90 = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    };

    const getFirstHundredText = (number) => {
        if (number > 0 && number <= 9) {
            return n1[number];
        }
        if (number >= 10 && number <= 19) {
            return n10_20[number];
        }
        if (number >= 20) {
            const first = n10_90[Math.floor(number / 10)];
            const second = n1[number % 10];
            return first + (second ? " " + second : "");
        }
        return null;
    }
    if (number == 0) {
        return 'zero'
    }
    const firstHundredStr = getFirstHundredText(number % 100);
    const hundreds = Math.floor(number / 100);
    const hundredsStr = hundreds ? n1[hundreds] + " hundred " : "";
    return (hundredsStr + (firstHundredStr ? firstHundredStr : "")).trim();
}
