var web3;
var address ="0x962aB4BdA859b3ECd5E5Fc511C8Da786B719F547";

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

var abi = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

var contract =new web3.eth.Contract(abi,address);

function transfer(){
    var inputval=document.getElementById("address").value;

    web3.eth.getaccount().then(function(account){
        return contract.methods.createVestingSchedule(inputval).send({from:account[0]});
    }).then(function(tmp){
        $('account').val("");

    }).catch(function(tmp){
        alert(tmp);
    })
}
