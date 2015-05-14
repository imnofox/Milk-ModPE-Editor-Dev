// prevent default
Blockly.JavaScript['prevent_default'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'preventDefault();\n';
  return code;
};

// add furnace recipe
Blockly.JavaScript['add_furnace_recipe'] = function (block) {
    var value_output = Blockly.JavaScript.valueToCode(block, 'output', Blockly.JavaScript.ORDER_ATOMIC);
    var value_damage = Blockly.JavaScript.valueToCode(block, 'damage', Blockly.JavaScript.ORDER_ATOMIC);
    var value_input = Blockly.JavaScript.valueToCode(block, 'input', Blockly.JavaScript.ORDER_ATOMIC);
    if (value_damage == "") {
        value_damage = 0;
    }
    if (value_output == "") {
        value_output = 0;
    }
    if (value_input == "") {
        value_input = 0;
    }
    if (value_damage > 15) {
        value_damage = 15;
    }
    var code = 'Item.addFurnaceRecipe(' + value_output + ', ' + value_damage + ', ' + value_input + ');\n';
    return code;
};

// set game speed
Blockly.JavaScript['set_game_ticks'] = function (block) {
    var value_ticks = Blockly.JavaScript.valueToCode(block, 'ticks', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'ModPE.setGameSpeed(' + value_ticks + ');\n';
    return code;
};

// take screenie
Blockly.JavaScript['take_screenshot'] = function (block) {
    var value_filename = Blockly.JavaScript.valueToCode(block, 'filename', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    var code = 'ModPE.takeScreenshot(' + value_filename + ');\n';
    return code;
};

// set blocks/items texture
Blockly.JavaScript['set_texture'] = function (block) {
    var dropdown_texture = block.getFieldValue('texture');
    var text_name = block.getFieldValue('url');
    var code;
    if (dropdown_texture == 'Terrain') {
        code = 'ModPE.setTerrain("' + text_name + '");\n';
    } else {
        code = 'ModPE.setItems("' + text_name + '");\n';
    }
    return code;
};

//leave game
Blockly.JavaScript['modpe_leave_game'] = function(block) {
  var code = 'ModPE.leaveGame();';
  return code;
};

//save data
Blockly.JavaScript['modpe_save_data'] = function(block) {
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC) || "'" + value_data.replace(/\W/g, '_').substring(1, 10) + "'";
  var code = 'ModPE.saveData(' + value_key + ',' + value_data + ');';
  return code;
};
//rem data
Blockly.JavaScript['modpe_read_data'] = function(block) {
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = 'ModPE.readData(' + value_key + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};
//read data
Blockly.JavaScript['modpe_rem_data'] = function(block) {
  var value_key = Blockly.JavaScript.valueToCode(block, 'key', Blockly.JavaScript.ORDER_ATOMIC) || "''";
  var code = 'ModPE.removeData(' + value_key + ')';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//reset images
Blockly.JavaScript['modpe_reset_images'] = function(block) {
  var code = 'ModPE.resetImages();';
  return code;
};

// version
Blockly.JavaScript['modpe_version'] = function(block) {
  var code = 'ModPE.getMinecraftVersion()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};