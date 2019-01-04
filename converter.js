(() => {
    function convertToSnowingdayKeyboard(codeString) {
        let result = '"';
        for (let i = 0; i < codeString.length; i++) {
            result += '\\' + codeString.charCodeAt(i).toString(8);
        }
        result += '"';
        document.getElementById('output').innerHTML = result;
        return result;
    }

    document.getElementById('input').addEventListener('input',() => {
        let input = document.getElementById('input').value;
        document.getElementById('output').value = convertToSnowingdayKeyboard(input);
    });
})();
