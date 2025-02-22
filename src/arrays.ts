/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    //    let newArray: number[] = [];

    //    if (numbers.length == 0) {
    //        return [];
    //    } else if (numbers.length == 1) {
    //        newArray.push(numbers[0]);
    //        newArray.push(numbers[0]);
    //    } else {
    //        newArray.push(numbers[0]);
    //        newArray.push(numbers[numbers.length - 1]);
    //    }

    //    return newArray;
    if (numbers.length === 0) {
        return [];
    }
    return [
        numbers[0],
        numbers.length > 1 ? numbers[numbers.length - 1] : numbers[0],
    ];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    // let arr: number[] = [];

    // for (let i = 0; i < numbers.length; i++) {
    //     arr.push(numbers[i] * 3);
    // }

    // return arr;

    return numbers.map((num) => num * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // let newList: number[] = [];
    // for (let i = 0; i < numbers.length; i++) {
    //     if (isNaN(Number(numbers[i]))) {
    //         newList.push(0);
    //     } else {
    //         newList.push(Number(numbers[i]));
    //     }
    // }
    // return newList;

    return numbers.map((num) => (isNaN(Number(num)) ? 0 : Number(num)));
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // let nList: number[] = [];

    // //if it has '$' remove it then check if it can be converted or not
    // for (let i = 0; i < amounts.length; i++) {
    //     if (amounts[i][0] == "$") {
    //         let number1 = Number(amounts[i].slice(1));
    //         if (isNaN(number1)) {
    //             nList.push(0);
    //         } else {
    //             nList.push(number1);
    //         }
    //     }

    //     //THIS CHECKS IF THE STRING CAN BE CONVERTED IF IT DOES NOT BEGIN WITH '$'
    //     else {
    //         let num = Number(amounts[i]);
    //         if (isNaN(num)) {
    //             nList.push(0);
    //         } else {
    //             nList.push(num);
    //         }
    //     }
    // }
    // return nList;

    return amounts.map((stringAmount) => {
        let num =
            stringAmount.startsWith("$") ?
                Number(stringAmount.slice(1))
            :   Number(stringAmount);
        return isNaN(num) ? 0 : num;
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // let sArray: string[] = [];
    // for (let i = 0; i < messages.length; i++) {
    //     if (!messages[i].endsWith("?")) {
    //         if (messages[i].endsWith("!")) {
    //             sArray.push(messages[i].toUpperCase());
    //         } else {
    //             sArray.push(messages[i]);
    //         }
    //     }
    // }
    // return sArray;

    return messages
        .filter((mssg) => !mssg.endsWith("?"))
        .map((mssg) => (mssg.endsWith("!") ? mssg.toUpperCase() : mssg));
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    // let count: number = 0;
    // for (let i = 0; i < words.length; i++) {
    //     if (words[i].length < 4) {
    //         count += 1;
    //     }
    // }

    // return count;

    return words.reduce(
        (count, finalWord) => count + (finalWord.length < 4 ? 1 : 0),
        0,
    );
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // let defaultValue = true;

    // for (let i = 0; i < colors.length; i++) {
    //     if (colors[i] == "red" || colors[i] == "blue" || colors[i] == "green") {
    //         defaultValue = true;
    //     } else if (colors.length == 0) {
    //         defaultValue = true;
    //     } else {
    //         defaultValue = false;
    //     }
    // }

    // return defaultValue;

    return colors.every((correctColor) =>
        ["red", "blue", "green"].includes(correctColor),
    );
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // let fString: string = "";
    // let total: number = 0;
    // let s: string[] = [];
    if (addends.length == 0) {
        return "0=0";
    }
    // for (let i = 0; i < addends.length; i++) {
    //     total += addends[i];
    //     s.push(addends[i].toString());
    // }
    // fString = total.toString() + "=" + s.join("+");

    // return fString;

    const sum = addends.reduce((final, num1) => final + num1, 0);
    return `${sum}=${addends.join("+")}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // let fNumbers: number[] = values;
    //let finalNum: number = 0;
    if (values.length == 0) {
        return [0];
    }
    // for (let i = 0; i < values.length; i++) {
    //     finalNum += values[i];
    //     if (values[i] < 0) {
    //         fNumbers.push(finalNum);
    //     } else {
    //         fNumbers.push(finalNum);
    //     }
    // }
    // return fNumbers;

    const negativeIndex = values.findIndex((val) => val < 0); //find the negative numbers index
    const totalOfNumbers = values
        .slice(0, negativeIndex === -1 ? values.length : negativeIndex)
        .reduce((acc, num) => acc + num, 0);

    return negativeIndex === -1 ?
            [...values, totalOfNumbers]
        :   [
                ...values.slice(0, negativeIndex + 1),
                totalOfNumbers,
                ...values.slice(negativeIndex + 1),
            ];
}
