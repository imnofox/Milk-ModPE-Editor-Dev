//builder object
Blockly.JavaScript['block_builder'] = function (block) {
    var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC) || 281;
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC) || "Cushion Block";
    var value_texture = Blockly.JavaScript.valueToCode(block, 'texture', Blockly.JavaScript.ORDER_ATOMIC) || "cake_bottom";
    var value_source = Blockly.JavaScript.valueToCode(block, 'source', Blockly.JavaScript.ORDER_ATOMIC) || 92;
    var value_opaque = Blockly.JavaScript.valueToCode(block, 'opaque', Blockly.JavaScript.ORDER_ATOMIC) || false;
    var statements_subs = Blockly.JavaScript.statementToCode(block, 'subs');
    var dropdown_render = block.getFieldValue('render') || 0;
    
    var id_var = 'var milk_def_block_id = ' + value_id + ';\n'
    var code =  id_var + 'Block.defineBlock(milk_def_block_id,' + value_name + ',[' + value_texture + ',0],' + value_source + ',' + value_opaque + ',' + dropdown_render + ');\n' + statements_subs;
    return code;
};

// set shape
Blockly.JavaScript['block_shape'] = function(block) {
  var value_x1 = Blockly.JavaScript.valueToCode(block, 'x1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_y1 = Blockly.JavaScript.valueToCode(block, 'y1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_z1 = Blockly.JavaScript.valueToCode(block, 'z1', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_x2 = Blockly.JavaScript.valueToCode(block, 'x2', Blockly.JavaScript.ORDER_ATOMIC) || 1;
  var value_y2 = Blockly.JavaScript.valueToCode(block, 'y2', Blockly.JavaScript.ORDER_ATOMIC) || 1;
  var value_z2 = Blockly.JavaScript.valueToCode(block, 'z2', Blockly.JavaScript.ORDER_ATOMIC) || 1;
  var code = 'Block.setShape(milk_def_block_id,' + value_x1 + ',' + value_y1 + ',' + value_z1 +','+ value_x2 + ',' + value_y2 + ',' + value_z2 + ');\n';
  return code;
};

// set colour
Blockly.JavaScript['block_colour'] = function(block) {
  var colour = block.getFieldValue('colour').replace("#", "0x");;
  var code = 'Block.setColor(milk_def_block_id,[' + colour + ']);\n';
  return code;
};

// set destroy time
Blockly.JavaScript['block_break_time'] = function(block) {
  var value_time = Blockly.JavaScript.valueToCode(block, 'time', Blockly.JavaScript.ORDER_ATOMIC) || 0.75;
  // TODO: Assemble JavaScript into code variable.
  var code = 'Block.setDestroyTime(milk_def_block_id,' + value_time + ');\n';
  return code;
};

// set explosion resistance
Blockly.JavaScript['block_explode'] = function(block) {
  var value_resistance = Blockly.JavaScript.valueToCode(block, 'resistance', Blockly.JavaScript.ORDER_ATOMIC) || 0.75;
  // TODO: Assemble JavaScript into code variable.
  var code = 'Block.setExplosionResistance(milk_def_block_id,' + value_resistance + ');\n';
  return code;
};

// set light level
Blockly.JavaScript['block_light'] = function(block) {
  var value_light = Math.min(15, Math.max(0, Blockly.JavaScript.valueToCode(block, 'light', Blockly.JavaScript.ORDER_ATOMIC))); 
  // TODO: Assemble JavaScript into code variable.
  var code = 'Block.setLightLevel(milk_def_block_id,' + value_light + ');\n';
  return code;
};

// set render layer
Blockly.JavaScript['block_opacity'] = function(block) {
  var dropdown_option = block.getFieldValue('option') | 0;
  var code = 'Block.setRenderLayer(milk_def_block_id,' + dropdown_option + ');\n';
  return code;
};