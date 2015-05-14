/* Muffins Mod (Mo'Foods) by @PocketMinesYT Thanks to MrNoahz and
Zhuowei for putting up with my questions. Feel free to use parts of the
code for your own mods, but don't copy pretty much the whole thing.
That's stealing :p */
ModPE.overrideTexture("images/items-opaque.png","http://pocketmines.mcpestuffs.com/download/muffinscupupdate.png");
ModPE.overrideTexture("images/terrain-atlas.tga","http://pocketmines.mcpestuffs.com/download/muffinscupupdate.tga");
//setting foods ModPE.setFoodItem(349,"record_11",0,-4,"Eggplant");
ModPE.setFoodItem(350,"record_13",0,8,"Muffin");
ModPE.setFoodItem(368,"record_blocks",0,9,"Cupcake");
ModPE.setFoodItem(367,"record_cat",0,10,"Moldy Muffin");
ModPE.setFoodItem(460,"record_chirp",0,4,"Nutella");
ModPE.setFoodItem(461,"record_far",0,2,"Whipped Cream");
ModPE.setFoodItem(462,"record_mall",0,13,"Chocolate Muffin");
ModPE.setFoodItem(463,"record_mellohi",0,17,"Donut");
ModPE.setFoodItem(464,"record_stal",0,14,"Blueberry Muffin");
ModPE.setFoodItem(465,"record_strad",0,4,"Cheese");
ModPE.setFoodItem(466,"record_wait",0,10,"Cold Pizza");
ModPE.setFoodItem(467,"record_ward",0,20,"Hot Pizza");
ModPE.setFoodItem(468,"spider_eye_fermented",0,1,"Raw Bacon");
ModPE.setFoodItem(469,"spider_eye",0,4,"Cooked Bacon");
ModPE.setFoodItem(470,"ruby",0,15,"Nutella Sandwich");
ModPE.setFoodItem(471,"magma_cream",0,16,"Grass Sandwich");
ModPE.setFoodItem(472,"map_empty",0,17,"Grilled Cheese Sandwich");
ModPE.setFoodItem(473,"map_empty",0,19,"Ham & Cheese Sandwich");
ModPE.setFoodItem(474,"potion_bottle_drinkable",0,1,"Bottled Water");
ModPE.setFoodItem(475,"potion_bottle_empty",0,10,"Bacon Muffin");
ModPE.setFoodItem(476,"cookie",0,2,"Cookie");
ModPE.setItem(477,"seeds_beetroot",0,"Eggplant Seeds");
ModPE.setFoodItem(478,"potion_bottle_splash",0,8,"White Chocolate");
ModPE.setFoodItem(479,"fireworks_charge_overlay",0,20,"Butter Chicken");
ModPE.setFoodItem(480,"fireworks_charge",0,3,"Lollipop");
ModPE.setFoodItem(488,"saddle",0,6,"Chocolate");
ModPE.setItem(481,"blaze_powder",0,"Paper Cup"); //paper cup
ModPE.setFoodItem(482,"blaze_rod",0,12,"Coffee");
ModPE.setFoodItem(483,"brewing_stand",0,9,"Hot Chocolate");
ModPE.setItem(484,"cauldron",0,"Coffee Bean");
ModPE.setItem(485,"comparator",0,"Coffee Cherry");
ModPE.setFoodItem(486,"carrot_golden",0,12,"Fruit Juice");
ModPE.setFoodItem(487,"diamond_horse_armor",0,7,"Apple Juice");
//defining blocks //eggplants Block.defineBlock(143,"Eggplant
Stem",[["redstone_dust_line_overlay", 0]],59,false,6);
Block.setRenderLayer(143,1); Block.setDestroyTime(143,0.1);
Block.defineBlock(144,"Eggplant Stem",[["redstone_dust_cross_overlay",
0]],59,false,6); //filled Block.setRenderLayer(144,1);
Block.setDestroyTime(144,0.1); //empty cup Block.defineBlock(243,"Empty
Cup",[["quartz_block", 1],["cocoa_stage_x", 0],["quartz_block",
1],["quartz_block", 1],["quartz_block", 1],["quartz_block",
1]],171,true,7); Block.setShape(243,0.25,0,0.25,0.75,0.5,0.75);
Block.setDestroyTime(243,0.3); //coffee cup
Block.defineBlock(242,"Coffee Cup",[["quartz_block",
1],["cocoa_stage_x", 1],["quartz_block", 1],["quartz_block",
1],["quartz_block", 1],["quartz_block", 1]],171,true,7);
Block.setShape(242,0.25,0,0.25,0.75,0.5,0.75);
Block.setDestroyTime(242,0.3); //choc cup Block.defineBlock(241,"Hot
Chocolate",[["quartz_block", 1],["cocoa_stage_x", 2],["quartz_block",
1],["quartz_block", 1],["quartz_block", 1],["quartz_block",
1]],171,true,7); Block.setShape(241,0.25,0,0.25,0.75,0.5,0.75);
Block.setDestroyTime(241,0.3); //fruit cup Block.defineBlock(240,"Fruit
Juice",[["quartz_block", 1],["trip_wire", 0],["quartz_block",
1],["quartz_block", 1],["quartz_block", 1],["quartz_block",
1]],171,true,7); Block.setShape(240,0.25,0,0.25,0.75,0.5,0.75);
Block.setDestroyTime(240,0.3); //apple cup Block.defineBlock(239,"Apple
Juice",[["quartz_block", 1],["trip_wire_source", 0],["quartz_block",
1],["quartz_block", 1],["quartz_block", 1],["quartz_block",
1]],171,true,7); Block.setShape(239,0.25,0,0.25,0.75,0.5,0.75);
Block.setDestroyTime(239,0.3); var xx; var yy; var zz; //eggplant
destruction function destroyBlock(x,y,z,side){
if(Level.getTile(x,y,z)==143){ preventDefault(); Level.destroyBlock(x,
y, z, false); Level.dropItem(x, y, z, 0.5, 477, 1, 0); }
if(Level.getTile(x,y,z)==144){ preventDefault(); Level.destroyBlock(x,
y, z, false); Level.dropItem(x, y, z, 0.5, 477, 1, 0); //seeds
Level.dropItem(x, y, z, 0.5, 349, 2, 0); //eggplants }
if(Level.getTile(x,y,z)==243){ preventDefault(); Level.destroyBlock(x,
y, z, false); Level.dropItem(x, y, z, 0.5, 481, 1, 0); } //coffee cup
if(Level.getTile(x,y,z)==242){ preventDefault(); Level.destroyBlock(x,
y, z, false); Level.dropItem(x, y, z, 0.5, 482, 1, 0); } //choc cup
if(Level.getTile(x,y,z)==241){ preventDefault(); Level.destroyBlock(x,
y, z, false); Level.dropItem(x, y, z, 0.5, 483, 1, 0); } //fruit cup
if(Level.getTile(x,y,z)==240){ preventDefault(); Level.destroyBlock(x,
y, z, false); Level.dropItem(x, y, z, 0.5, 486, 1, 0); } //apple cup
if(Level.getTile(x,y,z)==239){ preventDefault(); Level.destroyBlock(x,
y, z, false); Level.dropItem(x, y, z, 0.5, 487, 1, 0); } //drop cherries
if(Level.getTile(x,y,z)==18){ var
cherrydrops=Math.floor(Math.random()*4) //1 in 4 if (cherrydrops==1) {
Level.destroyBlock(x, y, z, false); Level.dropItem(x, y, z, 0.5, 485, 1,
0); } } } function useItem(x, y, z, itemId, blockId, side, itemDamage) {
if (itemId == 477 && side == 1 && blockId == 2) { timerOn = true;
preventDefault(); Level.setTile(x, y+1, z, 143); xx = x; yy = y; zz = z;
if (Level.getGameMode() == 0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(),
Player.getCarriedItemCount() - 1); } } if (blockId == 144) {
preventDefault(); Level.setTile(x, y, z, 143); Level.dropItem(x, y, z,
0.5, 349, 2, 0); } if (itemId==351&&blockId==143&&itemDamage==15){
Level.setTile(x, y, z, 144); } if (side == 1) { //empty cup if (itemId
== 481) { Level.setTile(x,y+1,z,243); if (Level.getGameMode() == 0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(),
Player.getCarriedItemCount() - 1); } } //coffee cup if (itemId == 482) {
Level.setTile(x,y+1,z,242); if (Level.getGameMode() == 0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(),
Player.getCarriedItemCount() - 1); } } //choc cup if (itemId == 483) {
Level.setTile(x,y+1,z,241); if (Level.getGameMode() == 0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(),
Player.getCarriedItemCount() - 1); } } //fruit cup if (itemId == 486) {
Level.setTile(x,y+1,z,240); if (Level.getGameMode() == 0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(),
Player.getCarriedItemCount() - 1); } } //apple cup if (itemId == 487) {
Level.setTile(x,y+1,z,239); if (Level.getGameMode() == 0) {
Entity.setCarriedItem(Player.getEntity(), Player.getCarriedItem(),
Player.getCarriedItemCount() - 1); } } } } // Notes if you didn't know
// function modtick() runs every tick // the following script makes it
so that whenever you tap a block, 10 seconds later it put // "Timer is
done!" in chat var timerOn = false; var time = 480 * 20; //480 for 480
seconds and 20 since there are 20 ticks in a second function modTick() {
if(timerOn == true) { time--; if(time<=0) { Level.setTile(xx, yy+1, zz,
144); time = 480*20; timerOn = false; } } } //zombies drop eggplant
seeds function deathHook(attacker, victim){
if(Entity.getEntityTypeId(victim)==35) { var
eggplantseedsdrops=Math.floor(Math.random()*10) //1 in 10 if
(eggplantseedsdrops==1) { Level.dropItem(Entity.getX(victim),
Entity.getY(victim), Entity.getZ(victim), 0.5, 477, 1, 0); } } } //end
eggplant growth //coffee BURNS function attackHook(attacker, victim) {
if (getCarriedItem()==482) { Entity.setFireTicks(victim,60); //set mob
on fire Entity.setCarriedItem(Player.getEntity(),
Player.getCarriedItem(), Player.getCarriedItemCount() - 1);
Level.dropItem(Entity.getX(victim),Entity.getY(victim),Entity.getZ(victim),
0.3,481,1,0); } } //recipes //Item.addCraftRecipe(id, count, damage,
[inputid, inputcount, inputdamage, ...]); Item.addCraftRecipe(350, 3, 0,
[354, 1, 0]); //muffin Item.addCraftRecipe(368, 1, 0, [350, 1, 0, 353,
1, 0]); //cupcake Item.addCraftRecipe(367, 1, 0, [350, 1, 0, 349, 1,
0]); //moldy muffin Item.addCraftRecipe(460, 2, 0, [351, 1, 3, 332, 2,
0]); //nutella Item.addCraftRecipe(461, 2, 0, [325, 1, 1, 332, 1, 0]);
//cream Item.addCraftRecipe(462, 1, 0, [460, 1, 0, 350, 1, 0]); //choc
muffin Item.addCraftRecipe(463, 1, 0, [297, 1, 0, 461, 1, 0]); //donut
Item.addCraftRecipe(464, 1, 0, [350, 1, 0, 362, 1, 0]); //blueberry
muffin Item.addCraftRecipe(48, 2, 0, [349, 1, 0, 4, 2, 0]); //crafts
mossy cobble.... use for eggplant Item.addCraftRecipe(98, 2, 1, [349, 1,
0, 98, 2, 0]); //crafts mossy bricks... use for eggplant
Item.addFurnaceRecipe(465,0,461); //cheese Item.addCraftRecipe(465, 1,0,
[461, 1, 0]); //crafts cheese Item.addCraftRecipe(466, 1, 0, [297, 1, 0,
465, 1, 0, 468, 2, 0]); //uncooked pizza
Item.addFurnaceRecipe(466,0,[467,1,0,469,2]) //hot pizza
Item.addCraftRecipe(467, 1, 0, [466, 1, 0]); //crafts hot pizza
Item.addCraftRecipe(468, 4, 0, [319, 1, 0]); //raw bacon
Item.addFurnaceRecipe(468,0,469) //cooked bacon Item.addCraftRecipe(469,
1, 0,[468, 1, 0]); //crafts cooked bacon Item.addCraftRecipe(470, 2,
0,[297, 2, 0, 460, 1, 0]); //nutella sandwich Item.addCraftRecipe(471,
2, 0,[297, 2, 0, 31, 1, 0]); //grass sandwich Item.addCraftRecipe(472,
2, 0,[297, 2, 0, 465, 1, 0]); //cheese sandwich Item.addCraftRecipe(473,
1, 0,[472, 1, 0, 363, 1, 0]); //ham and cheese Item.addCraftRecipe(474,
10, 0,[325, 1, 8]); //bottled water Item.addCraftRecipe(475, 1, 0,[350,
1, 0, 469, 1, 0]); //bacon kufin Item.addCraftRecipe(476, 8, 0,[296, 2,
0, 351, 1, 3]); //cookie Item.addCraftRecipe(477, 2, 0,[349, 1, 0, ]);
//eggplant seeds from eggplant Item.addCraftRecipe(488, 5, 0,[461, 1, 0,
351, 1, 3]); //chocolate Item.addCraftRecipe(478, 1, 0,[477, 1, 0, 332,
2, 0]); //white chocolate Item.addCraftRecipe(479, 1, 0,[266, 1, 0, 366,
2, 0, 281, 1, 0]); //butter chicken Item.addCraftRecipe(480, 2, 0,[280,
2, 0, 353, 3, 0]); //lollipop Item.addCraftRecipe(458, 1, 0,[457, 1,
0]); //craft egglant seeds from eggplant Item.addCraftRecipe(482, 1,
0,[481, 1, 0, 474, 1, 0, 484, 1, 0]); //crafts coffe from one cup, one
bottle, one bean Item.addCraftRecipe(484, 1, 0,[485, 1, 0]); //bean from
cherry Item.addCraftRecipe(483, 2, 0,[481, 2, 0, 488, 1, 0]); //crafts
two hot chocs from 2 cups, one choclate Item.addCraftRecipe(486, 1,
0,[481, 1, 0, 360, 1, 0, 260, 1, 0]); //one juice from cup, melon,apple
Item.addCraftRecipe(487, 1, 0,[481, 1, 0, 260, 1, 0]); //one apple juice
from cup, apple Item.addCraftRecipe(481, 1, 0,[339, 3, 0]); //paper cup
//put some items in correct category
Item.setCategory(466,ItemCategory.FOOD); //uncooked pizza to food
Item.setCategory(477,ItemCategory.FOOD); //eggplant seeds to food
Item.setCategory(481,ItemCategory.FOOD); //paper cup to food
Item.setCategory(484,ItemCategory.FOOD); //bean to food
Item.setCategory(485,ItemCategory.FOOD); //coffee cherry to food
