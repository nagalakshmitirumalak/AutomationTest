// Practice from Test 1

function capitalizeWords(str: string): string{
    
    if(str.length === 0) return "Empty string";
    const strSplitted = str.split(" ");

    let capitalizedEachWord: string = ""

    for(let st of strSplitted){
        let chars = st.split("");
        chars[0] = chars[0]!.toUpperCase();
        st = chars.join("");
        capitalizedEachWord += st+" "
    }

    return capitalizedEachWord.trim();

}

const strToCapEachWord : string = "hello world";
const capitalizedWord = capitalizeWords(strToCapEachWord);
console.log(`Given String: ${strToCapEachWord}, Capitalized Each Word in String: ${capitalizedWord}`);