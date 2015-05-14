// ENTITY
// -------------------------------

//tp
Blockly.Blocks['set_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("teleport");
    this.appendValueInput("ent")
        .setCheck("Entity")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("entity");
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
    this.appendDummyInput()
        .appendField("relative coords")
        .appendField(new Blockly.FieldCheckbox("FALSE"), "is_relative");
    
    this.setColour(180);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Teleports an entity to the given coords.');
  }
};

// get entity yaw
Blockly.Blocks['get_yaw'] = {
    init: function () {
        this.appendValueInput("yaw")
            .setCheck("Entity")
            .appendField("get rotation");
        this.setOutput(true, "Number");
        this.setColour(180);
        this.setTooltip('Gets the horizontal rotation of the head (e.g. left to right).');
    }
};


// set rot
Blockly.Blocks['set_rot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set rotation");
    this.appendValueInput("ent")
        .setCheck("Entity")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("entity");
    this.appendValueInput("yaw")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("yaw");
    this.appendValueInput("pitch")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("pitch");    
    this.setColour(180);
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Sets an entity\'s head rotation.');
  }
};


// get entity pitch
Blockly.Blocks['get_pitch'] = {
    init: function () {
        this.appendValueInput("pitch")
            .setCheck("Entity")
            .appendField("get pitch");
        this.setOutput(true, "Number");
        this.setColour(180);
        this.setTooltip('Gets the vertical rotation of the head (e.g. up to down).');
    }
};

// ids
Blockly.Blocks['entity_ids'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("entity")
            .appendField(new Blockly.FieldDropdown([["chicken", "10"], ["cow", "11"], ["pig", "12"], ["sheep", "13"], ["wolf", "14"], ["mooshroom", "16"], ["villager", "15"], ["silverfish", "39"], ["enderman", "38"], ["slime", "37"], ["zombie pigman", "36"], ["spider", "35"], ["skeleton", "34"], ["creeper", "33"], ["zombie", "32"]]), "entities");
        this.setOutput(true, "Entity");
        this.setColour(180);
        this.setTooltip('Returns an entity.');
    }
};


// override texture
// TODO will probably move later
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#gfsrng
Blockly.Blocks['override_texture'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.appendDummyInput()
            .appendField("save as:")
            .appendField(new Blockly.FieldTextInput("name"), "name");
        this.appendDummyInput()
            .appendField("texture url:")
            .appendField(new Blockly.FieldTextInput("http://link.to/image.png"), "url");
        this.setTooltip('');
    }
};

Blockly.Blocks['entity_setmobskin'] = {
    init: function () {
        this.setColour(180);
        this.appendDummyInput()
            .appendField("set mob skin");
        this.appendValueInput("entity")
            .setCheck("Entity")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("mob");
        this.appendValueInput("texture")
            .setCheck("String")
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("texture");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Sets the mob\'s texture.');
    }
};

// set nametag
Blockly.Blocks['entity_set_name_tag'] = {
    init: function () {
        this.setColour(180);
        this.appendValueInput("entity")
            .setCheck("Entity")
            .appendField("give entity");
        this.appendValueInput("name")
            .setCheck("String")
            .appendField("the name");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Gives an entity a nametag.');
    }
};

// get age
Blockly.Blocks['entity_get_age'] = {
    init: function () {
        this.setColour(180);
        this.appendValueInput("entity")
            .setCheck("Entity")
            .appendField("get age of");
        this.setOutput(true, "Number");
        this.setTooltip('Returns the age of an entity. Ranges from -24000 to 0, where -24000 is a \'baby\' mob, and 0 is an \'adult\' mob.');
    }
};

// set age
Blockly.Blocks['entity_set_age'] = {
    init: function () {
        this.setColour(180);
        this.appendValueInput("entity")
            .setCheck("Entity")
            .appendField("set age of");
        this.appendValueInput("age")
            .setCheck("Number")
            .appendField("to");
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Sets the age of an entity. Doesn\'t work with hostile mobs or players.');
    }
};

// get entity id
Blockly.Blocks['entity_get_id'] = {
    init: function () {
        this.setColour(180);
        this.appendValueInput("entity")
            .setCheck("Entity")
            .appendField("get entity id");
        this.setOutput(true, "Number");
        this.setTooltip('Returns the entity ID of an entity.');
    }
};

// entity remove
Blockly.Blocks['entity_remove'] = {
    init: function () {
        this.setColour(180);
        this.appendValueInput("entity")
            .setCheck("Entity")
            .appendField("remove");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Removes the mob.');
    }
};

// entity ride
// (under player)
Blockly.Blocks['entity_ride'] = {
    init: function () {
        this.setColour(180);
        this.appendValueInput("entity")
            .setCheck("Entity")
            .appendField("ride");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('Make the player ride the mob.');
    }
};

//set vel
Blockly.Blocks['set_vel'] = {
  init: function() {
    this.setColour(180);
    this.appendDummyInput()
        .appendField("set velocity")
        .appendField(new Blockly.FieldDropdown([["x", "X"], ["y", "Y"], ["z", "Z"]]), "coord");
    this.appendValueInput("ent")
        .setCheck("Entity")
        .appendField("entity");
    this.appendValueInput("vel")
        .setCheck("Number")
        .appendField("velocity");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Set\'s the entity\'s velocity.');
  }
};