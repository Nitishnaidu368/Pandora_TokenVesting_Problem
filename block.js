var web3;
var address ="";

async function connect() {
    await window.web3.currentprovider.enable();
    web3=new Web3(window.web3.currentprovider);
}

if(typeof web3 !== "undefined"){
    web3=new Web3(window.web3.currentprovider);
}
else {
    web3=new Web3(window.web3.provider.HttpProvider("HTTP://127.0.0.1:7545"));
}

var abi = [];

var contract =new web3.eth.Contract(abi,address);

function transfer(){
    var inputval=document.getElementById("address").value;
    web3.eth.getaccount().then(function(account){
        return contract.deposit()
    })
}
