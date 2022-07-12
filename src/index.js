module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    let numberToArray = number.toString().split('');
    let lastNumbers = Number(numberToArray.slice(1).join(''));
  
        if (number <= 19) {
            result = units[number];
        } 
            else if (number < 100) {
                result = `${tens[Number(numberToArray[0]) - 2]} ${units[Number(numberToArray[1])]}`.replace(' zero','');
            } 
                else if (number >= 100 && number % 100 === 0) {
                    result = `${units[Number(numberToArray[0])]} hundred`;
                } 
                    else if (number >= 100 && lastNumbers <= 19) {
                        result = `${units[Number(numberToArray[0])]} hundred ${units[lastNumbers]}`;
                    } 
                        else {
                            result = `${units[Number(numberToArray[0])]} hundred ${tens[Number(numberToArray[1]) - 2]} ${units[Number(numberToArray[2])]}`.replace(' zero','');
                        };
                            return result;
};
