console.clear();
require("dotenv").config();
const {
	AccountId,
	PrivateKey,
	Client,
	FileCreateTransaction,
	ContractCreateTransaction,
	ContractFunctionParameters,
	ContractExecuteTransaction,
	ContractCallQuery,
	Hbar,
} = require("@hashgraph/sdk");
const fs = require("fs");


const express = require('express')
let app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.listen(5004, () =>{
	console.log('Listgntoinbioernb on port 5004')
})

app.get('/init', async (req,res) => {
    console.log("init running");
	await init_contract();

    res.send('hi');

})

app.post("/write", async (req,res) => {

	let body = req.body;

    console.log(body);

	await(setNumber("noun", body.noun))
    await(setNumber("adj", body.adj))
    await(setNumber("verb", body.verb))
    await(setNumber("place", body.place))
    await(setNumber("event", body.thingy))

    res.send('hi')

})

app.get('/read', (req, res) => {


	let r = await(getNumber('alice'));

    res.send('hi');
})

// Configure accounts and client
const operatorId = AccountId.fromString(process.env.OPERATOR_ID);
const operatorKey = PrivateKey.fromString(process.env.OPERATOR_PVKEY);

const client = Client.forTestnet().setOperator(operatorId, operatorKey);
client.setMaxTransactionFee(new Hbar(2.75));
client.setMaxQueryPayment(new Hbar(0.01));


let contractInstantiateTx;
let contractId = "";
let contractInstantiateRx = "";
let contractInstantiateSubmit = "";
let contractAddress = "";

async function init_contract() {
	// Import the compiled contract bytecode
	const contractBytecode = fs.readFileSync("LookupContract_sol_LookupContract.bin");

	// Create a file on Hedera and store the bytecode
	const fileCreateTx = new FileCreateTransaction()
		.setContents(contractBytecode)
		.setKeys([operatorKey])
		.freezeWith(client);
	const fileCreateSign = await fileCreateTx.sign(operatorKey);
	const fileCreateSubmit = await fileCreateSign.execute(client);
	const fileCreateRx = await fileCreateSubmit.getReceipt(client);
	const bytecodeFileId = fileCreateRx.fileId;
	console.log(`- The bytecode file ID is: ${bytecodeFileId} \n`);

	// Instantiate the smart contract
	contractInstantiateTx = new ContractCreateTransaction()
		.setBytecodeFileId(bytecodeFileId)
		.setGas(100000)
		.setConstructorParameters(new ContractFunctionParameters().addString("Alice").addUint256(111111));
	contractInstantiateSubmit = await contractInstantiateTx.execute(client);
	contractInstantiateRx = await contractInstantiateSubmit.getReceipt(client);
	contractId = contractInstantiateRx.contractId;
	contractAddress = contractId.toSolidityAddress();
	console.log(`- The smart contract ID is: ${contractId} \n`);
	console.log(`- The smart contract ID in Solidity format is: ${contractAddress} \n`);
}

async function setNumber(id, number) {
	// Call contract function to update the state variable
	const contractExecuteTx = new ContractExecuteTransaction()
		.setContractId(contractId)
		.setGas(100000)
		.setFunction("setMobileNumber", new ContractFunctionParameters().addString(id).addUint256(number));
	const contractExecuteSubmit = await contractExecuteTx.execute(client);
	const contractExecuteRx = await contractExecuteSubmit.getReceipt(client);
	console.log(`- Contract function call status: ${contractExecuteRx.status} \n`);
}

async function getNumber(id) {
	// Query the contract to check changes in state variable
	const contractQueryTx1 = new ContractCallQuery()
		.setContractId(contractId)
		.setGas(100000)
		.setFunction("getMobileNumber", new ContractFunctionParameters().addString(id));
	const contractQuerySubmit1 = await contractQueryTx1.execute(client);
	const contractQueryResult1 = contractQuerySubmit1.getUint256(0);
	console.log(`- Here's the phone number that you asked for: ${contractQueryResult1} \n`);
	return contractQueryResult1;
}

// async function main() {
// 	await init_contract();

	
// }
// main();