// set item
Blockly.JavaScript['item_set'] = function (block) {
    var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC) || 459;
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC) || 'Magic Apple';
    var value_texture = Blockly.JavaScript.valueToCode(block, 'texture', Blockly.JavaScript.ORDER_ATOMIC) || 'apple';
    var code = 'ModPE.setItem(' + value_id + ',' + value_texture + ',0,' + value_name + ');\n';
    return code;
};

Blockly.JavaScript['item_set_food'] = function (block) {
    var value_id = Blockly.JavaScript.valueToCode(block, 'id', Blockly.JavaScript.ORDER_ATOMIC) || 281;
    var value_name = Blockly.JavaScript.valueToCode(block, 'name', Blockly.JavaScript.ORDER_ATOMIC) || 'Golden Apple';
    var value_texture = Blockly.JavaScript.valueToCode(block, 'texture', Blockly.JavaScript.ORDER_ATOMIC) || 'apple_golden';
    var value_heal = Blockly.JavaScript.valueToCode(block, 'heal', Blockly.JavaScript.ORDER_ATOMIC) || 10;
    var code = 'ModPE.setFoodItem(' + value_id + ',' + value_texture + ',0,' + value_heal + ',' + value_name + ');\n';
    return code;
};

function inIframe() {
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
}

// recipe

Blockly.JavaScript['item_recipe'] = function (block) {
    var value_item = Blockly.JavaScript.valueToCode(block, 'output_item', Blockly.JavaScript.ORDER_ATOMIC) || 280;
    var value_output_count = Blockly.JavaScript.valueToCode(block, 'output_count', Blockly.JavaScript.ORDER_ATOMIC) || 1;
    var value_output_data = Blockly.JavaScript.valueToCode(block, 'output_data', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var statements_inputs = Blockly.JavaScript.statementToCode(block, 'inputs');

    //split the statement into each array + we don't care about the 10+ values
    var inputs = statements_inputs.split("|").slice(0, 9);
    var value_keys = "";

    // get the items from the data
    var data = JSON.parse(block.data);
    for (var i = 0; i < inputs.length; i++) {
        // use try/catch to ignore the console warnings for the malformed json before it's finished
        try {
            // create the string for the code
            value_keys += i + ',' + JSON.parse(inputs[i])[0] + ',' + JSON.parse(inputs[i])[1] + ',';
            // update the values for the block's data
            data[i][0] = JSON.parse(inputs[i])[0];
            data[i][1] = JSON.parse(inputs[i])[1];
        } catch (e) {}
    }
    data[9] = [value_item, value_output_data, value_output_count];
    // push the value update
    block.data = JSON.stringify(data);

    // remove the trailing comma
    value_keys = value_keys.substring(0, value_keys.length - 1);
    var code = 'Item.addShapedRecipe(' + value_item + ',' + value_output_count + ',' + value_output_data + ',["012","345","678"],[' + value_keys + ']);\n';
    call_alert(block);


    return code;
};

//ingredient
Blockly.JavaScript['item_recipe_ingedient'] = function (block) {
    var value_item = Blockly.JavaScript.valueToCode(block, 'item', Blockly.JavaScript.ORDER_ATOMIC) || 0;
    var value_data = Blockly.JavaScript.valueToCode(block, 'data', Blockly.JavaScript.ORDER_ATOMIC) || 0;

    var code = "[" + value_item + "," + value_data + "]|";
    return code;
};