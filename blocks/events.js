// ITEM EVENT
// ----------------

// use item event
// https://blockly-demo.appspot.com/static/demos/blockfactory/index.html#atfydm
Blockly.Blocks['use_item'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("on item tap:");
        this.appendStatementInput("item_actions");
        this.setTooltip('');
    }
};

// variables
Blockly.Blocks['item_vars'] = {
    init: function () {
        this.setColour(0);
        this.setHelpUrl('http://www.example.com/');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["x coordinate", "x"], ["y coordinate", "y"], ["z coordinate", "z"], ["item id", "itemId"], ["block id", "blockId"], ["item damage", "itemDamage"], ["block damage", "blockDamage"], ["block side", "side"]]), "vars");
        this.setOutput(true);
        this.setTooltip('');
    }
};

// block_side select variable
Blockly.Blocks['select_side'] = {
    init: function () {
        this.setHelpUrl('http://www.example.com/');
        this.setColour(0);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["top", "top"], ["bottom", "bottom"], ["north/-z", "north"], ["south/+z", "south"], ["east/+x", "east"], ["west/-x", "west"]]), "sides")
            .appendField("side");
        this.setOutput(true, "Number");
        this.setTooltip('');
    }
};

// ATTACK EVENT
// ----------------

// attack event
Blockly.Blocks['attack_hook'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("on attack:");
        this.appendStatementInput("item_actions");
        this.setTooltip('');
    }
};

// attacker variable
Blockly.Blocks['attack_attacker'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("attacker");
        this.setOutput(true, "Entity");
        this.setTooltip('');
    }
};

// victim variable
Blockly.Blocks['attack_victim'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("victim");
        this.setOutput(true, "Entity");
        this.setTooltip('');
    }
};

// COMMAND EVENT
// ----------------

// cmd event
Blockly.Blocks['command_event'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("on command:");
        this.appendStatementInput("item_actions");
        this.setTooltip('Happens when the player enters a command');
    }
};

// cmd variable
Blockly.Blocks['command_cmd'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("command");
        this.setColour(0);
        this.setOutput(true, "String");
        this.setTooltip('Returns the command used');
    }
};

// cmd arguments
Blockly.Blocks['command_args'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("command arguments");
        this.setOutput(true, "Array");
        this.setColour(0);
        this.setTooltip('Returns a *list* of command arguments');
    }
};

// LEAVE/JOIN EVENT
// ----------------

// newLevel event
Blockly.Blocks['new_level_event'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("on game join:");
        this.appendStatementInput("item_actions");
        this.setTooltip('Happens when the player joins a world');
    }
};

// leaveGame event
Blockly.Blocks['leave_game_event'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("on game leave:");
        this.appendStatementInput("item_actions");
        this.setTooltip('Happens when the player leaves a world');
    }
};

// ENTITY SPAWN/REMOVED EVENT
// ----------------

Blockly.Blocks['entity_spawned_event'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("on entity spawn:");
        this.appendStatementInput("item_actions");
        this.setTooltip('Happens whenever a new entity is spawned- includes shot arrows and falling sand');
    }
};

Blockly.Blocks['entity_removed_event'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("on entity removal:");
        this.appendStatementInput("item_actions");
        this.setTooltip('Happens whenever a new entity is spawned- includes shot arrows and falling sand');
    }
};

// entity variable
Blockly.Blocks['entity_rem_add_variable'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("entity");
        this.setColour(0);
        this.setOutput(true, "Entity");
        this.setTooltip('Returns the command used');
    }
};

// DEATH EVENT
// ----------------

//death event
Blockly.Blocks['death_event'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("on entity death:");
        this.appendStatementInput("item_actions");
        this.setTooltip('Happens whenever an entity or player dies');
    }
};

// murderer variable
Blockly.Blocks['murderer_variable'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("murderer");
        this.setColour(0);
        this.setOutput(true, "Entity");
        this.setTooltip('Returns the murderer entity');
    }
};

// victim variable
Blockly.Blocks['victim_variable'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("victim");
        this.setColour(0);
        this.setOutput(true, "Entity");
        this.setTooltip('Returns the victim entity');
    }
};

// BREAK BLOCK EVENT
// ----------------

// break block event
Blockly.Blocks['break_block_event'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("on block break:");
        this.appendStatementInput("item_actions");
        this.setTooltip('Activates when a player breaks a block.');
    }
};

// variables
Blockly.Blocks['break_block_item_vars'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["x coordinate", "x"], ["y coordinate", "y"], ["z coordinate", "z"], /* Am unsure if these are available for this event: ["block id", "blockId"], ["block damage", "blockDamage"],*/ ["block side", "side"]]), "vars");
        this.setOutput(true);
        this.setTooltip('Variables for the break block event.');


    }
};

// CHAT MESSAGE EVENT
// ----------------

Blockly.Blocks['chat_message_event'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("on chat message sent:");
        this.appendStatementInput("item_actions");
        this.setTooltip('Happens whenever a a message is sent in chat from the player');
    }
};

// message variable
Blockly.Blocks['chat_message_event_variable'] = {
    init: function () {
        this.appendDummyInput()
            .appendField("message");
        this.setColour(0);
        this.setOutput(true, "String");
        this.setTooltip('Returns the message sent');
    }
};

// CHAT RECIEVE EVENT
// ----------------

Blockly.Blocks['chat_receive_event'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField("on chat message recieve:");
        this.appendStatementInput("item_actions");
        this.setTooltip('Happens whenever a a message is recieved in the chat');
    }
};

// variables
Blockly.Blocks['chat_receive_vars'] = {
    init: function () {
        this.setColour(0);
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown([["message", "str"], ["sender", "sender"]]), "vars");
        this.setOutput(true);
        this.setTooltip('Variables for a recieved chat message');
    }
};
