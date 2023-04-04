function callback(){
    return 'Spy';
}

function receivesAFunction(callback){
    console.log(callback());
}

receivesAFunction();

function returnsANamedFunction(){
    return function kazi(){
        console.log("kazi")
    }
}

function returnsAnAnonymousFunction(){
    return function (){}
}