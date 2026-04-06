async function delayedMessage(message: string, ms: number): Promise<void>{
    await new Promise(resolve => setTimeout(resolve, ms));
    
    if(message.length === 0) console.log("Empty String");
    console.log(message);   
}

const msg: string = "Hello";
delayedMessage(msg, 10000);