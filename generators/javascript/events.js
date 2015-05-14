// ITEM EVENT
// ----------------

// use item event
Blockly.JavaScript['use_item'] = function(block) {
  var statements_item_actions = Blockly.JavaScript.statementToCode(block, 'item_actions');
  var code = 'function useItem(x, y, z, itemId, blockId, side, itemDamage, blockDamage) {\n' + statements_item_actions + '}';
  return code;
};

// variables
Blockly.JavaScript['item_vars'] = function(block) {
  var dropdown_vars = block.getFieldValue('vars');
  return [dropdown_vars, Blockly.JavaScript.ORDER_ATOMIC];
};

// block selectable side variable
Blockly.JavaScript['select_side'] = function(block) {
  var dropdown_side = block.getFieldValue('sides');
  ints = {top: 1, bottom: 0, north: 2, south: 3, west: 4, east: 5 }
  var code = ints[dropdown_side];
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ATTACK EVENT
// ----------------

// attack event
Blockly.JavaScript['attack_hook'] = function(block) {
  var statements_item_actions = Blockly.JavaScript.statementToCode(block, 'item_actions');
  var code = 'function attackHook(attacker, victim) {\n' + statements_item_actions + '}';
  return code;
};

// attacker variable
Blockly.JavaScript['attack_attacker'] = function(block) {
  var code = 'attacker';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// victim variable
Blockly.JavaScript['attack_victim'] = function(block) {
  var code = 'victim';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// COMMAND EVENT
// ----------------

// command event
Blockly.JavaScript['command_event'] = function(block) {
  var statements_item_actions = Blockly.JavaScript.statementToCode(block, 'item_actions');
  var code = 'function procCmd(cmd) {\n  cmd = cmd.toLowerCase().split(" ");\n  args = cmd.splice(1, cmd.length);\n' + statements_item_actions + '}';
  return code;
};

// cmd variable
Blockly.JavaScript['command_cmd'] = function(block) {
  var code = 'cmd[0]';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// cmd args
Blockly.JavaScript['command_args'] = function(block) {
  var code = 'args';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// LEAVE/JOIN EVENT
// ----------------

// newLevel event
Blockly.JavaScript['new_level_event'] = function(block) {
  var statements_item_actions = Blockly.JavaScript.statementToCode(block, 'item_actions');
  var code = 'function newLevel() {\n' + statements_item_actions + '}';
  return code;
};

// leaveGame event
Blockly.JavaScript['leave_game_event'] = function(block) {
  var statements_item_actions = Blockly.JavaScript.statementToCode(block, 'item_actions');
  var code = 'function leaveGame() {\n' + statements_item_actions + '}';
  return code;
};

// SPAWN/REMOVE ENTITY EVENT
// ----------------

// added event
Blockly.JavaScript['entity_spawned_event'] = function(block) {
  var statements_item_actions = Blockly.JavaScript.statementToCode(block, 'item_actions');
  var code = 'function entityAddedHook(entity) {\n' + statements_item_actions + '}';
  return code;
};

// removal event
Blockly.JavaScript['entity_removed_event'] = function(block) {
  var statements_item_actions = Blockly.JavaScript.statementToCode(block, 'item_actions');
  var code = 'function entityRemovedHook(entity) {\n' + statements_item_actions + '}';
  return code;
};

// entity variable
Blockly.JavaScript['entity_rem_add_variable'] = function(block) {
  var code = 'entity';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// DEATH EVENT
// ----------------

// death event
Blockly.JavaScript['death_event'] = function(block) {
  var statements_item_actions = Blockly.JavaScript.statementToCode(block, 'item_actions');
  var code = 'function deathHook(murderer, victim) {\n' + statements_item_actions + '}';
  return code;
};

// murderer variable
Blockly.JavaScript['murderer_variable'] = function(block) {
  var code = 'murderer';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// victim variable
Blockly.JavaScript['victim_variable'] = function(block) {
  var code = 'victim';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// BREAK BLOCK EVENT
// ----------------

// use item event
Blockly.JavaScript['break_block_event'] = function(block) {
  var statements_item_actions = Blockly.JavaScript.statementToCode(block, 'item_actions');
  var code = 'function destroyBlock(x, y, z, side) {\n' + statements_item_actions + '}';
  return code;
};

// variables
Blockly.JavaScript['break_block_item_vars'] = function(block) {
  var dropdown_vars = block.getFieldValue('vars');
  return [dropdown_vars, Blockly.JavaScript.ORDER_ATOMIC];
};

// SEND CHAT EVENT
// ----------------

// sent event
Blockly.JavaScript['chat_message_event'] = function(block) {
  var statements_item_actions = Blockly.JavaScript.statementToCode(block, 'item_actions');
  var code = 'function chatHook(message) {\n' + statements_item_actions + '}';
  return code;
};

// message variable
Blockly.JavaScript['chat_message_event_variable'] = function(block) {
  var code = 'message';
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// RECEIVE CHAT EVENT
// ----------------

// receive event
Blockly.JavaScript['chat_receive_event'] = function(block) {
  var statements_item_actions = Blockly.JavaScript.statementToCode(block, 'item_actions');
  var code = 'function chatReceiveHook(str, sender) {\n' + statements_item_actions + '}';
  return code;
};

// message variable
Blockly.JavaScript['chat_receive_vars'] = function(block) {
  var dropdown_vars = block.getFieldValue('vars');
  return [dropdown_vars, Blockly.JavaScript.ORDER_ATOMIC];
};