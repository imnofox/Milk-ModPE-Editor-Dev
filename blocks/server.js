// join server
Blockly.Blocks['join_server'] = {
  init: function() {
    this.setColour(300);
    this.appendDummyInput()
        .appendField("join server");
    this.appendValueInput("address")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("address");
    this.appendValueInput("port")
        .setCheck(["String", "Number"])
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("port");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Joins the specified server');
  }
};

// send message
Blockly.Blocks['server_message'] = {
    init: function () {
        this.setColour(300);
        this.appendValueInput("message")
            .appendField("send chat message")
            .setCheck("String");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Sends a message in the chat from the player');
    }
};

//get address
Blockly.Blocks['server_address'] = {
  init: function() {
    this.setColour(300);
    this.appendDummyInput()
        .appendField("get address");
    this.setTooltip('Returns the current server address');
      this.setOutput(true, "String");
  }
};

//get port
Blockly.Blocks['server_port'] = {
  init: function() {
    this.setColour(300);
    this.appendDummyInput()
        .appendField("get port");
    this.setTooltip('Returns the current server port');
      this.setOutput(true, "Number");
  }
};