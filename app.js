let kirilLetters = ["ю", "Ю", "я", "Я", "ё", "Ё", "ш", "Ш", "ч", "Ч", "ў", "Ў",
"қ", "Қ", "ғ", "Ғ", "ц", "Ц", "й", "Й", "у", "У", "к", "К",
"е", "Е", "н", "Н", "г", "Г", "щ", "Щ", "з", "З", "х", "Х",
"э", "Э", "ж", "Ж", "д", "Д", "л", "Л", "о", "О", "р", "Р",
"п", "П", "а", "А", "в", "В", "ф", "Ф", "с", "С", "м", "М",
"и", "И", "т", "Т", "б", "Б", "қ", "Қ", "ҳ", "Ҳ", "ғ", "Ғ", "ъ", "ь", "ў", "Ў"];


let lotinLetters = ["yu", "Yu", "ya", "Ya", "yo", "Yo", "sh", "Sh", "ch", "Ch", "oʻ", "Oʻ",
    "q", "Q", "g'", "G'", "ts", "Ts", "y", "Y", "u", "U", "k", "K", "e", "E",
    "n", "N", "g", "G", "sh", "Sh", "z", "Z", "x", "X", "e", "E", "j", "J",
    "d", "D", "l", "L", "o", "O", "r", "R", "p", "P", "a", "A", "v", "V", "f",
    "F", "s", "S", "m", "M", "i", "I", "t", "T", "b", "B", "q", "Q", "h", "H",
    "g'", "G'", "'", "`", "o'", "O'"];



let result = document.querySelector(".result")
let kirilBtn = document.querySelector(".krill")
let lotinBtn = document.querySelector(".lotin");

kirilBtn.addEventListener('click', () => {
    let area1 = document.querySelector(".text__area1").value;

    for (let i = 0; i < kirilLetters.length; i++){
        area1 = area1.replaceAll(lotinLetters[i], kirilLetters[i])
    }

    result.innerHTML = area1
})

lotinBtn.addEventListener('click', () => {
    let area1 = document.querySelector(".text__area1").value;

    for (let i = 0; i < lotinLetters.length; i++){
        area1 = area1.replaceAll(kirilLetters[i], lotinLetters[i])
    }
    
    result.innerHTML = area1
})