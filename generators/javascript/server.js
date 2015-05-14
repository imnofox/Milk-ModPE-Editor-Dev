
// join server
Blockly.JavaScript['join_server'] = function (block) {
    var value_address = Blockly.JavaScript.valueToCode(block, 'address', Blockly.JavaScript.ORDER_ATOMIC);
    var value_port = Blockly.JavaScript.valueToCode(block, 'port', Blockly.JavaScript.ORDER_ATOMIC);
    if (value_port == "") {
        value_port = "19132";
    }
    var code = 'ModPE.joinServer(' + value_address + ', ' + value_port + ');\n';
    return code;
};

// send message
Blockly.JavaScript['server_message'] = function(block) {
  var value_client_message = Blockly.JavaScript.valueToCode(block, 'message', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'Server.sendChat(' + value_client_message + ');\n';
  return code;
};

// get address
Blockly.JavaScript['server_address'] = function(block) {
  var code = 'Server.getAddress()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// get port
Blockly.JavaScript['server_port'] = function(block) {
  var code = 'Server.getPort()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};