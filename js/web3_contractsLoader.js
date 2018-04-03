var instanceAddress = "0x2a998917e9e949e63da39b9269c523eb08eac26d";
var eventStartBlock = 2709613;


var contract1Address = "0x2a998917e9e949e63da39b9269c523eb08eac26d";
var contract1Abi = [{"constant":true,"inputs":[],"name":"totalContributed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"string"}],"name":"producerStatement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"producer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"recallAmount","type":"uint256"},{"name":"message","type":"string"}],"name":"recall","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contributors","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"maxLoops","type":"uint256"}],"name":"tryRoundEnd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"previewStageEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"burnAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minPreviewInterval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFullState","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint8"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minContribution","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"proposalString","type":"string"},{"name":"previewStageInterval","type":"uint256"},{"name":"roundInterval","type":"uint256"}],"name":"beginProjectRound","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRecalled","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"contribute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"roundEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"burnAmount","type":"uint256"},{"name":"message","type":"string"}],"name":"contributorStatement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_producer","type":"address"},{"name":"_minPreviewInterval","type":"uint256"},{"name":"_minContribution","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposalString","type":"string"},{"indexed":false,"name":"previewStageEndTime","type":"uint256"},{"indexed":false,"name":"roundEndTime","type":"uint256"}],"name":"RoundBegun","type":"event"},{"anonymous":false,"inputs":[],"name":"RoundEnding","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amountRecalled","type":"uint256"},{"indexed":false,"name":"amountWithdrawn","type":"uint256"}],"name":"RoundEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contributor","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Contribution","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contributor","type":"address"},{"indexed":false,"name":"amountBurned","type":"uint256"},{"indexed":false,"name":"amountReturned","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"FundsRecalled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contributor","type":"address"},{"indexed":false,"name":"amountBurned","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"ContributorStatement","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message","type":"string"}],"name":"ProducerStatement","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"}];

var contract2Address = "0x4e0c0fa27ec8411b97489c32b78fd31ca3276e75";
var contract2Abi = [{"constant":true,"inputs":[],"name":"totalContributed","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"string"}],"name":"producerStatement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"producer","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"recallAmount","type":"uint256"},{"name":"message","type":"string"}],"name":"recall","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"contributors","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"maxLoops","type":"uint256"}],"name":"tryRoundEnd","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"previewStageEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"who","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"burnAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"minPreviewInterval","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getFullState","outputs":[{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"address"},{"name":"","type":"uint8"},{"name":"","type":"bool"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"minContribution","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"proposalString","type":"string"},{"name":"previewStageInterval","type":"uint256"},{"name":"roundInterval","type":"uint256"}],"name":"beginProjectRound","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"transfer","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"state","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalRecalled","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"contribute","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"roundEndTime","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"burnAmount","type":"uint256"},{"name":"message","type":"string"}],"name":"contributorStatement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_producer","type":"address"},{"name":"_minPreviewInterval","type":"uint256"},{"name":"_minContribution","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"name":"proposalString","type":"string"},{"indexed":false,"name":"previewStageEndTime","type":"uint256"},{"indexed":false,"name":"roundEndTime","type":"uint256"}],"name":"RoundBegun","type":"event"},{"anonymous":false,"inputs":[],"name":"RoundEnding","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"amountRecalled","type":"uint256"},{"indexed":false,"name":"amountWithdrawn","type":"uint256"}],"name":"RoundEnded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contributor","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Contribution","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contributor","type":"address"},{"indexed":false,"name":"amountBurned","type":"uint256"},{"indexed":false,"name":"amountReturned","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"FundsRecalled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"contributor","type":"address"},{"indexed":false,"name":"amountBurned","type":"uint256"},{"indexed":false,"name":"message","type":"string"}],"name":"ContributorStatement","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"message","type":"string"}],"name":"ProducerStatement","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"from","type":"address"},{"indexed":true,"name":"to","type":"address"},{"indexed":false,"name":"value","type":"uint256"},{"indexed":false,"name":"data","type":"bytes"}],"name":"Transfer","type":"event"}];

loadContracts(contract1Address, contract1Abi , contract2Address, contract2Abi);

//takes arguments by pairs of 2
//function will load the contracts
//function returns an array of loaded contracts in the same order that they were input
//by default provides a loadedContracts[i].getAllEvents() utility method
//function emits the event 'contract_loaded' when contracts are loaded
function loadContracts() {
    window.loadedContracts = [];
    if (arguments.length <2 || arguments.length %2 == 1) {
      console.error('loadContracts: not enough arguments in function!' );
    }

    window.addEventListener(("load"), () => {

      // Checking i Web3 has been injected by the browser (Mist/MetaMask)
      if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
      }

      //create contracts array
      for (var i =0; i<arguments.length; i+=2 ){
        var contract = web3.eth.contract(arguments[i+1]).at(arguments[i]);
        window.loadedContracts.push(contract);
      }
      /////////adding getAllEvents utility method (async)//////////////////////////////////////
      for (var i = 0; i < loadedContracts.length; i++) {
        loadContract(i);
      }

      var contractEvent = new Event('contracts_loaded');
      window.dispatchEvent(contractEvent);

    });

    //used in contract.getAllEvents() for the correct parsing of BigNumber arguments of events
    var parseEventArguments = (eventArguments) => {
        var argsObject = {};
        for (var key in eventArguments){
          if(eventArguments.hasOwnProperty(key)){
            argumentValue = eventArguments[key];
            if(typeof argumentValue === "object"){
              argsObject[key] = Number(new web3.BigNumber(argumentValue));
            } else{
              argsObject[key] = argumentValue;
            }
          }
        }
        return argsObject;
    }

    function loadContract(index){
      window.loadedContracts[index].getAllEvents = () => {
        var allEvents = window.loadedContracts[index].allEvents({fromBlock: eventStartBlock, toBlock: 'latest'});
        return new Promise((resolve, reject) => {
          allEvents.get((err, res) => {
            if(err){
              reject(err);
            } else{
              var allEventsArray = [];
              var tsPromiseArray = [];
              res.forEach((element) => {
                var parsedArgsObject = parseEventArguments(element.args);
                var eventObject = {event: element.event, transactionHash: element.transactionHash, blockNumber:element.blockNumber, args: parsedArgsObject};
                var tsPromise = new Promise((tsResolve, reject) => {
                  getBlockTimeStamp(element.blockHash).then(timestamp => {
                    eventObject.timestamp = timestamp;
                    tsResolve();
                  });
                });
                tsPromiseArray.push(tsPromise);
                allEventsArray.push(eventObject);
              });
              Promise.all(tsPromiseArray).then(function() {
                resolve(allEventsArray);
              });
            }
          });
        });
      }
    }
}

function getBlockTimeStamp(blockHash) {
    return new Promise((resolve, reject) => {
      this.web3.eth.getBlock(blockHash, false, (err, res) => {
        if(err){
          reject(err);
        }
        if(res){
          resolve(res.timestamp);
        }
      })
    })
}
