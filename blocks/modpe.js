// prevent default
Blockly.Blocks['prevent_default'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("http://www.mcpestuffs.com/wp-content/uploads/2015/04/prevent_default.png", 15, 15, "⚠"))
        .appendField("prevent default")
        .appendField(new Blockly.FieldImage("http://www.mcpestuffs.com/wp-content/uploads/2015/04/prevent_default.png", 15, 15, "⚠"));
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Prevents the default procedures of the action.');
  }
};


// add furnace recipe
Blockly.Blocks['add_furnace_recipe'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("add furnace recipe");
    this.appendValueInput("output")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("output item");
    this.appendValueInput("damage")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("output damage");
    this.appendValueInput("input")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("input item");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

// set game speed
Blockly.Blocks['set_game_ticks'] = {
  init: function() {
    this.setColour(330);
    this.appendValueInput("ticks")
        .setCheck("Number")
        .appendField("set game speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Sets the number of ticks a second. Default is 20. Using this will reduce the time the mod tick event takes to do stuff.');
  }
};

// take screenie
Blockly.Blocks['take_screenshot'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("take screenshot");
    this.appendValueInput("filename")
        .setCheck("String")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("save name as");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Takes a screenshot');
  }
};

// set blocks/items texture
Blockly.Blocks['set_texture'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("set")
        .appendField(new Blockly.FieldDropdown([["blocks", "Terrain"], ["items", "Items"]]), "texture")
        .appendField("texture to")
        .appendField(new Blockly.FieldTextInput("http://milk.mcpestuffs.com/texture.tga"), "url");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Replaces the blocks/items texture to the specified file. See the help for more info');
  }
};

//leave game
Blockly.Blocks['modpe_leave_game'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("leave game");
    this.setTooltip('Leaves the game.');
  }
};

//save data
Blockly.Blocks['modpe_save_data'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("save data");
    this.appendValueInput("key")
        .setCheck("String")
        .appendField("key");
    this.appendValueInput("data")
        .setCheck("String")
        .appendField("string");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Saves a string for future use.');
  }
};
//read data
Blockly.Blocks['modpe_read_data'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("get data");
    this.appendValueInput("key")
        .setCheck("String")
        .appendField("key");
    this.setInputsInline(true);
    this.setTooltip('Saves a string for future use.');
      this.setOutput(true, "String");
  }
};
//remove data
Blockly.Blocks['modpe_rem_data'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("delete data");
    this.appendValueInput("key")
        .setCheck("String")
        .appendField("key");
    this.setInputsInline(true);
    this.setTooltip('Saves a string for future use.');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
  }
};

//reset images
Blockly.Blocks['modpe_reset_images'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("reset textures");
    this.setTooltip('Resets all textures and images to their defaults.');
      this.setPreviousStatement(true);
      this.setNextStatement(true);
  }
};

//get version
Blockly.Blocks['modpe_version'] = {
  init: function() {
    this.setColour(330);
    this.appendDummyInput()
        .appendField("get version");
    this.setInputsInline(true);
    this.setTooltip('Returns the game version.');
      this.setOutput(true, "String");
  }
};
