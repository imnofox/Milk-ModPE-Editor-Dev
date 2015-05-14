// PLAYER
// -------------------------------

// player entity
Blockly.JavaScript['player_ent'] = function(block) {
  var code = 'Player.getEntity()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// player x
Blockly.JavaScript['player_x'] = function(block) {
  var code = 'Player.getX()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// player y
Blockly.JavaScript['player_y'] = function(block) {
  var code = 'Player.getY()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// player z
Blockly.JavaScript['player_z'] = function(block) {
  var code = 'Player.getZ()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// carried item
Blockly.JavaScript['carried_item'] = function(block) {
  var code = 'getCarriedItem()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// set player health
Blockly.JavaScript['set_player_health'] = function(block) {
  var value_health = Blockly.JavaScript.valueToCode(block, 'health', Blockly.JavaScript.ORDER_ATOMIC) || 20;
  var code = 'setPlayerHealth(' + value_health + ');\n';
  return code;
};

// give player item
Blockly.JavaScript['add_item_inv'] = function(block) {
  var value_amount = Blockly.JavaScript.valueToCode(block, 'amount', Blockly.JavaScript.ORDER_ATOMIC) || 1;
  var value_item = Blockly.JavaScript.valueToCode(block, 'item', Blockly.JavaScript.ORDER_ATOMIC) || 280;
  var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'Player.addItemInventory('+ value_item + ', ' + value_amount + ', ' + value_data + ');\n';
  return code;
};

// get gamemode
Blockly.JavaScript['get_gamemode'] = function(block) {
  var code = 'Level.getGameMode()';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};