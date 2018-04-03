
/*
Compoenents require Jquery, bootstrap, web3.js and vue.js
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.0/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<script src="https://unpkg.com/vue"></script>

<script src="libs/web3.min.js"></script>

*/

//output ethereum addressses with an etherscan link
//shortenTo property shortens the length of the ethereum address
Vue.component('eth-address-output', {
  props: {
    address:{},
    shortenTo:{
      default:42 //full length of eth address is "0x" + 40 hex characters
    }
  },
  computed: {
    etherscanAddressURL: function() {
      let etherscanURL;
      let networkId;
      //ethereum mainnet
      if (networkId == 1) {
        etherscanURL = 'https://etherscan.io/';
      }
      //ethereum testnet
      else if (networkId == 3) {
        etherscanURL = 'https://ropsten.etherscan.io/';
      }
      //ethereum testnet
      else if (networkId == 4) {
        etherscanURL = 'https://rinkeby.etherscan.io/';
      }
      //ethereum testnet
      else if (networkId == 42) {
        etherscanURL = 'https://kovan.etherscan.io/';
      }
      else {
        etherscanURL = 'https://etherscan.io/';
        console.error('unsupported network ID: no block explorer for the current network');
      }
      return etherscanURL + "address/" + this.address;
    },
    popoverHtml: function() {
      return "<span style='font-size:0.6em'>" + this.address + "</span><br><div class='row' style='border:0;padding:0;display:inline-block'><div class='col-sm-6' style='border:0;padding:0;display:inline-block'><button class='btn btn-basic' style='background-color:white; outline:none' onclick='copyTextToClipboard(" + '"' + this.address + '"' + ")'><img src='resources/copy_icon.png' width=20></button></div><div class='col-sm-6' style='border:0;padding:0;display:inline-block'><a href='" + this.etherscanAddressURL + "' target='_blank' class='btn btn-basic' style='background-color:white;border:1'><img src='resources/chain_icon.png' width=20></button></div></div>";
    },
    formattedAddress: function() {
      if (this.shortenTo <42) {
        return this.address.toString().substring(0, this.shortenTo) + "...";
      } else {
        return this.address;
      }
    }
  },
  template: "<div class='popover-bubble' style='display: inline-block;'><span class='hover' onMouseOver='this.style.color=\"#005796\";this.style.textDecoration=\"underline\";' onMouseOut='this.style.color=\"#07C\";this.style.textDecoration=\"none\";' tabindex=0 data-trigger='focus' data-toggle='popover' data-placement='top' data-html='true' :data-content='popoverHtml' style='cursor:pointer; outline:none; color:#07C;'>{{formattedAddress}}</span></div>"
});
//ether-output helper function
function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");

    //
    // *** This styling is an extra step which is likely not required. ***
    //
    // Why is it here? To ensure:
    // 1. the element is able to have focus and selection.
    // 2. if element was to flash render it has minimal visual impact.
    // 3. less flakyness with selection and copying which **might** occur if
    //    the textarea element is not visible.
    //
    // The likelihood is the element won't even render, not even a flash,
    // so some of these are just precautions. However in IE the element
    // is visible whilst the popup box asking the user for permission for
    // the web page to copy to the clipboard.
    //

    // Place in top-left corner of screen regardless of scroll position.
    textArea.style.position = 'fixed';
    textArea.style.top = 0;
    textArea.style.left = 0;

    // Ensure it has a small width and height. Setting to 1px / 1em
    // doesn't work as this gives a negative w/h on some browsers.
    textArea.style.width = '2em';
    textArea.style.height = '2em';

    // We don't need padding, reducing the size if it does flash render.
    textArea.style.padding = 0;

    // Clean up any borders.
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';

    // Avoid flash of white box if rendered for any reason.
    textArea.style.background = 'transparent';


    textArea.value = text;

    document.body.appendChild(textArea);

    textArea.select();

    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copying text command was ' + msg);
    } catch (err) {
        console.log('Oops, unable to copy');
    }

    document.body.removeChild(textArea);
}

//outputs an Ether value
//first six decimals in Ether, next six in Gwei, last six in wei
Vue.component('ether-output', {
  props: ['wei'],
  computed: {
    formatted: function() {
      if (typeof web3 === "undefined") {
          var web3 = new Web3();
      }
      var ether = web3.fromWei(this.wei, "ether");
      if (ether < 0.000000000001)
          return this.wei.toString() + " wei";
      else if (ether < 0.000001)
          return (ether * 1000000000) + " Gwei";
      else
          return ether + " Ether";
    }
  },
  template: "<span>{{formatted}}</span>"
});


Vue.component('event-row', {
  props: ['event'],
  methods: {
    formattedMessage: function(argumentVal, argumentName) {
        return xssFilters.inHTMLData(argumentName + ' : ' + argumentVal ).replace(/(?:\r\n|\r|\n)/g, '<br />');
    },
  },
  template:
`
<div align='center'><blocknum-output :blocknum='event.blockNumber' :timestamp='event.timestamp'></blocknum-output><br><div class='well well-sm' style='background-color:#ccffcc;display:inline-block'>  <div><b>{{this.event.event}}</b></div> <div v-for='(argumentVal, argumentName ) in this.event.args' v-html='formattedMessage(argumentVal, argumentName)'></div>  </div></div>
`
});


Vue.component('blocknum-output', {
  props: ['blocknum','timestamp'],
  computed: {
    formattedBlocknum: function() {
      var blocknumStr = this.blocknum.toString();
      return blocknumStr.slice(-9,-6) +"_"+ blocknumStr.slice(-6,-3) +"_"+ blocknumStr.slice(-3);
    },
    formattedTimestamp: function() {
      return moment.unix(this.timestamp).format("YYYY.MM.DD HH:mm");
    }
  },
  template: `<span style="font-size:1.25rem">@block {{formattedBlocknum}} (~{{formattedTimestamp}})</span>`
});

Vue.component('address-book-entry', {
  props: ['person', 'index'],
  methods: {


  },
  template: `<div>
              <div class="col-md-3">
                {{person.tag}}
              </div>
              <div class="col-md-3">
                <eth-address-output :shorten-to=10 :address='person.address'></eth-address-output>
              </div>
              <div class="col-md-6">
                <input type="text" class="form-control etherAmountInput" placeholder="amount of Ether" style='display:inline-block;width:25%;' :data-id='index'>
                <button v-on:click="$emit('send-ether', index)" type="button" class="btn btn-primary" :data-id='index'>Send Ether</button>
                <button v-on:click="$emit('remove-entry', index)" type="button" class="btn btn-danger" :data-id='index'>Remove Entry</button>
              </div>
            </div>`
});
