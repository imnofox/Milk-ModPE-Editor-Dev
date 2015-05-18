// spawn mob
Blockly.Blocks['level_spawnmob'] = { // change to dropdown later
    init: function () {
        this.setColour(210);
        this.setInputsInline(true);
        this.appendDummyInput()
            .appendField("spawn mob");
        this.appendValueInput("entity")
            .setCheck("Entity")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("mob");
        this.appendValueInput("x_coord")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("x");
        this.appendValueInput("y_coord")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("y");
        this.appendValueInput("z_coord")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("z");
        this.appendValueInput("image")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("texture");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Spawns a mob at the specified coordinates');
    }
};

// EXPLOSIONS
Blockly.Blocks['level_explode'] = {
    init: function () {
        this.setColour(210);
        this.appendDummyInput()
            .appendField("explode");
        this.appendValueInput("x")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("x");
        this.appendValueInput("y")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("y");
        this.appendValueInput("z")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("z");
        this.appendValueInput("radius")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("radius");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Creates a TNT explosion at the given coordinates');
    }
};

// get block
Blockly.Blocks['get_tile'] = {
    init: function () {
        this.setColour(210);
        this.appendDummyInput()
            .appendField("get block at");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("z");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip('Returns the block at the specified coordinates');
    }
};

// get data
Blockly.Blocks['get_data'] = {
    init: function () {
        this.setColour(210);
        this.appendDummyInput()
            .appendField("get damage of block at");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("z");
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip('Returns the data of the block at the specified coordinates');
    }
};

// set block
Blockly.Blocks['set_tile'] = {
    init: function () {
        this.setColour(210);
        this.appendDummyInput()
            .appendField("place block at");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("z");
        this.appendValueInput("id")
            .setCheck("Number")
            .appendField("block");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Places a block at the given coordinates');
    }
};

// get world name
Blockly.Blocks['get_world_name'] = {
    init: function () {
        this.setColour(210);
        this.appendDummyInput()
            .appendField("world name");
        this.setOutput(true, "String");
        this.setTooltip('Returns the name of the current world');
    }
};

// destroys block
Blockly.Blocks['destroy_tile'] = {
    init: function () {
        this.setColour(210);
        this.appendDummyInput()
            .appendField("destroy block at");
        this.appendValueInput("x")
            .setCheck("Number")
            .appendField("x");
        this.appendValueInput("y")
            .setCheck("Number")
            .appendField("y");
        this.appendValueInput("z")
            .setCheck("Number")
            .appendField("z");
        this.appendValueInput("drop")
            .setCheck("Boolean")
            .appendField("drop item");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Places a block at the given coordinates');
    }
};
