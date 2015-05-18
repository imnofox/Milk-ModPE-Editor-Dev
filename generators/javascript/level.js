Blockly.JavaScript['level_spawnmob'] = function (block) {
    var value_entity = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_ATOMIC);
    var value_x_coord = Blockly.JavaScript.valueToCode(block, 'x_coord', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y_coord = Blockly.JavaScript.valueToCode(block, 'y_coord', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z_coord = Blockly.JavaScript.valueToCode(block, 'z_coord', Blockly.JavaScript.ORDER_ATOMIC);
    var value_image = Blockly.JavaScript.valueToCode(block, 'image', Blockly.JavaScript.ORDER_ATOMIC).replace(/\W/g, '');
    var texture = ''
    if (value_image != '') {
        texture = ', "images/mob/' + value_image + '.png"';
    }
    var code = 'Level.spawnMob(' + value_x_coord + ', ' + value_y_coord + ', ' + value_z_coord + ', ' + value_entity + texture + ');\n';
    return code;
};

// EXPLOSIONS
Blockly.JavaScript['level_explode'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    var value_radius = Blockly.JavaScript.valueToCode(block, 'radius', Blockly.JavaScript.ORDER_ATOMIC);

    var code = 'Level.explode(' + value_x + ', ' + value_y + ', ' + value_z + ', ' + value_radius + ');\n';
    return code;
};

// get block
Blockly.JavaScript['get_tile'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'Level.getTile(' + value_x + ', ' + value_y + ', ' + value_z + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// get data
Blockly.JavaScript['get_data'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'Level.getData(' + value_x + ', ' + value_y + ', ' + value_z + ')';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// set block
Blockly.JavaScript['set_tile'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'Level.setTile(' + value_x + ', ' + value_y + ', ' + value_z + ', ' + value_id + ');\n';
    return code;
};

// get world name
Blockly.JavaScript['get_world_name'] = function (block) {
    var code = 'Level.getWorldName()';
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// destroy block
Blockly.JavaScript['destroy_tile'] = function (block) {
    var value_x = Blockly.JavaScript.valueToCode(block, 'x', Blockly.JavaScript.ORDER_ATOMIC);
    var value_y = Blockly.JavaScript.valueToCode(block, 'y', Blockly.JavaScript.ORDER_ATOMIC);
    var value_z = Blockly.JavaScript.valueToCode(block, 'z', Blockly.JavaScript.ORDER_ATOMIC);
    var value_drop = Blockly.JavaScript.valueToCode(block, 'drop', Blockly.JavaScript.ORDER_ATOMIC);
    var code = 'destroyBlock(' + value_x + ', ' + value_y + ', ' + value_z + ', ' + value_drop + ');\n';
    return code;
};
