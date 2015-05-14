//builder object
//https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ihsg76
Blockly.Blocks['block_builder'] = {
    init: function () {
        this.setHelpUrl("http://www.mcpestuffs.com/milk/help/block/");
        this.setColour(105);
        this.appendDummyInput()
            .appendField("add block");
        this.appendValueInput("id")
            .setCheck("Number")
            .appendField("id");
        this.appendValueInput("name")
            .setCheck("String")
            .appendField("name");
        this.appendValueInput("texture")
            .setCheck("String")
            .appendField("texture");
        this.appendValueInput("source")
            .setCheck("Number")
            .appendField("source block");
        this.appendValueInput("opaque")
            .setCheck("Boolean")
            .appendField("opaque");
        this.appendDummyInput()
            .appendField("render type")
            .appendField(new Blockly.FieldDropdown([["normal", 0], ["flower", 1], ["torch", 2], ["fire", 3], ["fluid", 4], ["wheat", 6], ["door", 7], ["ladder", 8], ["stairs", 10], ["fence", 11], ["cactus", 13], ["bed", 14], ["pane", 18], ["pumpkin stem", 19], ["gate", 21]]), "render");
        this.appendStatementInput("subs")
            .setCheck(["Block"]);
        this.setInputsInline(true);
        this.setTooltip('Build a custom block.');
    }
};

// set shape
Blockly.Blocks['block_shape'] = {
    init: function () {
        this.setHelpUrl('http://www.mcpestuffs.com/milk/help/block/');
        this.setColour(105);
        this.appendDummyInput()
            .appendField("shape");
        this.appendValueInput("x1")
            .setCheck("Number")
            .appendField("x1");
        this.appendValueInput("y1")
            .setCheck("Number")
            .appendField("y1");
        this.appendValueInput("z1")
            .setCheck("Number")
            .appendField("z1");
        this.appendValueInput("x2")
            .setCheck("Number")
            .appendField("x2");
        this.appendValueInput("y2")
            .setCheck("Number")
            .appendField("y2");
        this.appendValueInput("z2")
            .setCheck("Number")
            .appendField("z2");
        this.setInputsInline(true);
        this.setPreviousStatement(true, "Block");
        this.setNextStatement(true, "Block");
        this.setTooltip('Set the shape of a custom block. x1/y1/z1 is one coordinate of your block, x2/y2/z2 is the other. See the help button for help');
    }
};

// set colour
Blockly.Blocks['block_colour'] = {
    init: function () {
        this.setHelpUrl('http://www.mcpestuffs.com/milk/help/block/');
        this.setColour(105);
        this.appendDummyInput()
            .appendField("set colour")
            .appendField(new Blockly.FieldColour("#ffffff"), "colour");
        this.setPreviousStatement(true, ["Block"]);
        this.setNextStatement(true, ["Block"]);
        this.setTooltip('Sets the colour/tint of the block');
    }
};

// set destroy time
Blockly.Blocks['block_break_time'] = {
    init: function () {
        this.setHelpUrl('http://www.mcpestuffs.com/milk/help/block/');
        this.setColour(105);
        this.appendValueInput("time")
            .setCheck("Number")
            .appendField("set destroy time");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["Block"]);
        this.setNextStatement(true, ["Block"]);
        this.setTooltip('Sets the time it takes to destroy this block. See the help!');
    }
};

// set explosion resistance
Blockly.Blocks['block_explode'] = {
    init: function () {
        this.setHelpUrl('http://www.mcpestuffs.com/milk/help/block/');
        this.setColour(105);
        this.appendValueInput("resistance")
            .setCheck("Number")
            .appendField("set explosion resistance");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["Block"]);
        this.setNextStatement(true, ["Block"]);
        this.setTooltip('Sets the number of TNT explosions it takes to destroy the block');
    }
};

// set light level
Blockly.Blocks['block_light'] = {
    init: function () {
        this.setHelpUrl('http://www.mcpestuffs.com/milk/help/block/');
        this.setColour(105);
        this.appendValueInput("light")
            .setCheck("Number")
            .appendField("set light level");
        this.setInputsInline(true);
        this.setPreviousStatement(true, ["Block"]);
        this.setNextStatement(true, ["Block"]);
        this.setTooltip('Sets the light level. Must be between 0-15');
    }
};

// set render layer
Blockly.Blocks['block_opacity'] = {
  init: function() {
    this.setHelpUrl('http://www.mcpestuffs.com/milk/help/block/');
    this.setColour(105);
    this.appendDummyInput()
        .appendField("set transparency")
        .appendField(new Blockly.FieldDropdown([["opaque", 0], ["transparent", 1], ["translucent", 2]]), "option");
    this.setInputsInline(true);
    this.setPreviousStatement(true, ["Block"]);
    this.setNextStatement(true, ["Block"]);
    this.setTooltip('Sets the transparency level of the block (render layer)');
  }
};