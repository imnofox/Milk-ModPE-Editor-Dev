// ENTITY
// -------------------------------

//tp
Blockly.JavaScript['set_position'] = function(block) {
  var value_ent = Blockly.JavaScript.valueToCode(block, 'ent', Blockly.JavaScript.ORDER_ATOMIC) || 'getPlayerEnt()';
  var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var checkbox_is_relative = block.getFieldValue('is_relative') == 'TRUE';
  // TODO: Assemble JavaScript into code variable.
    var rel = "";
    if (checkbox_is_relative){
        rel = "Relative";
    }
  var code = 'setPosition' + rel + '(' + value_ent + ',' + value_x + ',' + value_y + ',' + value_z + ');';
  return code;
};

// get yaw
Blockly.JavaScript['get_yaw'] = function (block) {
    var value_yaw = Blockly.JavaScript.valueToCode(block, 'yaw', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'getYaw(' + value_yaw + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//set rot
Blockly.JavaScript['set_rot'] = function(block) {
  var value_ent = Blockly.JavaScript.valueToCode(block, 'ent', Blockly.JavaScript.ORDER_ATOMIC) || 'getPlayerEnt()';
  var value_yaw = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var value_pitch = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  var code = 'setRot(' + value_ent + ',' + value_yaw + ',' + value_pitch + ');';
  return code;
};

// get pitch
Blockly.JavaScript['get_pitch'] = function (block) {
    var value_pitch = Blockly.JavaScript.valueToCode(block, 'pitch', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'getPitch(' + value_pitch + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// ids
Blockly.JavaScript['entity_ids'] = function (block) {
    var dropdown_entities = block.getFieldValue('entities');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_entities;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// SPAWNING
// moved to level


// override texture
// TODO will likely move
Blockly.JavaScript['override_texture'] = function (block) {
    var text_name = block.getFieldValue('name').replace(/\W/g, '') || 'genericSkinName';
    var text_url = block.getFieldValue('url') || "'http://www.mcpestuffs.com/wp-content/uploads/2015/04/default_texture.png'";
    // TODO: Assemble JavaScript into code variable.
    var override_texture_func = Blockly.JavaScript.provideFunction_(
        'override_texture', ['ModPE.overrideTexture("images/mob/' + text_name + '.png", ' + text_url + ');']);
    return "";
};


//set mob skin
Blockly.JavaScript['entity_setmobskin'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC) || 'victim';
    var value_texture = Blockly.JavaScript.valueToCode(block, 'texture', Blockly.JavaScript.ORDER_ATOMIC) || 'genericSkinName';
    var code = 'Entity.setMobSkin(' + value_entity + ', "images/mob/' + value_texture + '.png");\n';
    return code;
};

// set nametag
Blockly.JavaScript['entity_set_name_tag'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC) || 'victim';
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC) || 'Ajay';
    var code = 'Entity.setNameTag(' + value_entity + ',' + value_name + ');\n';
    return code;
};

// get age
Blockly.JavaScript['entity_get_age'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC) || 'victim';
    var code = 'Entity.getAnimalAge(' + value_entity + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// set age
Blockly.JavaScript['entity_set_age'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC) || 'victim';
    var value_age = Blockly.JavaScript.valueToCode(block, 'age', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    value_age = Math.min(Math.max(value_age, -24000), 0);
    var code = 'Entity.setAnimalAge(' + value_entity + ',' + value_age + ');\n';
    return code;
};

// get entity id
Blockly.JavaScript['entity_get_id'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC) || 'victim';
    var code = 'Entity.getTypeId(' + value_entity + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// entity remove
Blockly.JavaScript['entity_remove'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC) || 'victim';
    var code = 'Entity.remove(' + value_entity + ');\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// entity ride
// (under player)
Blockly.JavaScript['entity_ride'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC) || 'victim';
    var code = 'Entity.rideAnimal(getPlayerEnt(),' + value_entity + ');\n';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

//set vel
Blockly.JavaScript['set_vel'] = function(block) {
  var dropdown_coord = block.getFieldValue('coord');
  var value_ent = Blockly.JavaScript.valueToCode(block, 'ent', Blockly.JavaScript.ORDER_ATOMIC) || 'getPlayerEnt()';
  var value_vel = Blockly.JavaScript.valueToCode(block, 'vel', Blockly.JavaScript.ORDER_ATOMIC) || 0;
  // TODO: Assemble JavaScript into code variable.
  var code = 'setVel' + dropdown_coord + '(' + value_ent + ',' + value_vel + ');';
  return code;
};