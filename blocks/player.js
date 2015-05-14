// PLAYER
// -------------------------------

// player entity
Blockly.Blocks['player_ent'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField("player entity");
    this.setOutput(true, "Entity");
    this.setTooltip("Returns the player entity");
  }
};

// player x
Blockly.Blocks['player_x'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField("player x");
    this.setOutput(true, "Number");
    this.setTooltip("Returns the player's X position");
  }
};

// player y
Blockly.Blocks['player_y'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField("player y");
    this.setOutput(true, "Number");
    this.setTooltip("Returns the player's Y position");
  }
};

// player z
Blockly.Blocks['player_z'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField("player z");
    this.setOutput(true, "Number");
    this.setTooltip("Returns the player's Z position");
  }
};

// get carried item
Blockly.Blocks['carried_item'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField("player's held item");
    this.setOutput(true, "Number");
    this.setTooltip("Returns the player's held item");
  }
};

// set player health
Blockly.Blocks['set_player_health'] = {
  init: function() {
    this.appendValueInput("health")
        .setCheck("Number")
        .appendField("set player health to");
    this.appendDummyInput()
        .appendField("half hearts");
    this.setColour(180);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Sets the player\'s health to specified HALF hearts (20 = full health)');
  }
};

// give player item
Blockly.Blocks['add_item_inv'] = {
  init: function() {
    this.setColour(180);
    this.appendValueInput("amount")
        .setCheck("Number")
        .appendField("give");
    this.appendValueInput("item")
        .setCheck("Number")
        .appendField("of");
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField("with data value");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Gives the specified amount of items to the player.');
  }
};

// get gamemode
Blockly.Blocks['get_gamemode'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField("player's gamemode");
    this.setOutput(true, "Number");
    this.setTooltip("Returns the player's current gamemode (0/1)");
  }
};