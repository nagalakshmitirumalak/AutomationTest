function isValidURL(url: string): boolean{
    if(url.startsWith("http://") || url.startsWith("https://")) return true;
    return false;
}

const url: string = "dhttp://www.google.com";
const URLIsValid = isValidURL(url);
console.log(`Given URL: ${url}, URL is Valid: ${URLIsValid}`);