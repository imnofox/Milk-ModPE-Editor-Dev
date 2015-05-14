// set item
Blockly.Blocks['item_set'] = {
    init: function () {
        this.setHelpUrl("http://zhuoweizhang.net/mcpetexturenames/");
        this.appendDummyInput()
            .appendField("add item");
        this.appendValueInput("id")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("id");
        this.appendValueInput("name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("item name");
        this.appendValueInput("texture")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("texture");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Adds a new item to the game');
        this.setColour(65);
        this.setInputsInline(true);
    }
};

// set item food
Blockly.Blocks['item_set_food'] = {
    init: function () {
        this.setHelpUrl("http://zhuoweizhang.net/mcpetexturenames/");
        this.appendDummyInput()
            .appendField("add food");
        this.appendValueInput("id")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("id");
        this.appendValueInput("name")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("item name");
        this.appendValueInput("texture")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("texture");
        this.appendValueInput("heal")
            .setCheck("Number")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("half hearts healed");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Adds a new food item to the game');
        this.setColour(65);
        this.setInputsInline(true);
    }
};

// add recipe
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#ehrtuf
Blockly.Blocks['item_recipe'] = {
    init: function () {
        this.setHelpUrl('http://www.mcpestuffs.com/milk/help/item/');
        this.appendDummyInput()
            .appendField("shaped recipe")
            .setAlign(Blockly.ALIGN_LEFT);
        this.setColour(60);
        this.appendValueInput("output_item")
            .setCheck("Number")
            .appendField("output item");
        this.appendValueInput("output_count")
            .setCheck("Number")
            .appendField("output amount");
        this.appendValueInput("output_data")
            .setCheck("Number")
            .appendField("output data value");
        this.appendStatementInput("inputs")
            .setCheck("craft_input");
        this.setTooltip('Adds a new recipe to the game');

        this.data = JSON.stringify([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0,0,0]]);
    }
};

//ingredietn
Blockly.Blocks['item_recipe_ingedient'] = {
  init: function() {
    this.setHelpUrl('http://www.mcpestuffs.com/milk/help/item/');
    this.appendValueInput("item")
        .setCheck("Number")
        .appendField("item");
    this.appendValueInput("data")
        .setCheck("Number")
        .appendField("data");
    this.setColour(60);
    this.setInputsInline(true);
    this.setPreviousStatement(true, "craft_input");
    this.setNextStatement(true, "craft_input");
    this.setTooltip('An item for the recipe');
  }
};