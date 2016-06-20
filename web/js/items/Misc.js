/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Misc

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
				Exception handling.
***************************************************************************/
try{
/***************************************************************************
				Fill ItemTypes
***************************************************************************/
	//	ItemType(nLevel, sName, sType, sSubType, sUseage, nAtk, nWeight, nValue, bStack, nMax, bDrop, sStrong, sWeak, sDesc, sRace)
	
	/*	Templates for easy adding
	Items.add( new ItemType(null, "", "Special", null, "Invent", null, 0.00, 0.00, true, 100, true, null, null, "") );
	*/
	//	Other
	Items.add( new ItemType(null, "Bucket of Sand", "Special", null, null, null, 0.00, 1.00, false, 5, false) );
	Items.add( new ItemType(null, "Blanket", "Map object", null, "Ground", null, 0.10, 1.00, false, 5, true, null, null, "This blanket is made out of old patchwork cloth, 'tis a bit more comfy than the hard ground, one would think.") );
	Items.add( new ItemType(null, "blue crystal fragment", "Special", null, "Invent", null, 0.05, 15.00, true, 200, true, null, null, "a wonderful crystal fragment.") );
	Items.add( new ItemType(null, "Blue Diamond", "Special", null, "Bonus", null, 0.05, 6.00, true, 100, true, null, null, "Shimmering blue diamond dropped by the Water Sprite.") );
	Items.add( new ItemType(null, "Campfire Kit", "Camping kit", null, "Ground", null, 0.35, 750.00, false, 5, true, null, null, "Fancy a night out under the stars in a monster infested area?<br>This and a few bits of wood means you can...<br><br>Still take caution, monsters could approach while you're sleeping.<br>You can pickup this kit after use to put out your fire. Never leave a fire unattended, you'll ruin everyone's party.") );
	Items.add( new ItemType(null, "Cape (Red)", "Armor", "Special", "", null, 1.00, 100.00, false, 5, true, null, null, "Only human males have the priviledge of using this cape.", "Human male") );
	Items.add( new ItemType(null, "Cowhide", "Special", null, "Invent", null, 1.00, 1.00, true, 200, true, null, null, "") );
	Items.add( new ItemType(null, "Emerald", "Special", null, "Bonus", null, 0.05, 7.00, true, 100, true, null, null, "Lava sprites drop these green jewels.") );
	Items.add( new ItemType(null, "Giant Spider Web", "Special", null, "Bonus", null, 0.02, 6.00, true, 100, true, null, null, "A Giant Spider&acute;s web will put a tangle on your other inventory.") );
	Items.add( new ItemType(null, "Gila Tail", "Special", null, "Invent", null, 0.03, 4.00, true, 100, true, null, null, "Gila's tail may ne stolen if you're not too drunk by the time you run into the Gilas.") );
	Items.add( new ItemType(null, "Golem Skull", "Special", null, null, null, 0.03, 6.00, true, 100, true, null, null, "A few blows to the head of a Golem gave you his skull.") );
	Items.add( new ItemType(null, "Ghoul Mask", "Armor", "Special", "", null, 2.90, 2250.00, false, 5, true, null, null, "Mask made from the skin of a Ghoul&acute;s head. i bet thet&acute;re fun to make.", "!Paladrone") );
	Items.add( new ItemType(null, "Hilt") );
	Items.add( new ItemType(null, "Horse Hide", "Special", null, "Invent", null, 0.40, 1.00, true, 200, true, null, null, "Some Hide to make leather Armour.") );
	Items.add( new ItemType(null, "Iron Ore", "Special", null, null, null, 0.05, 15.00, true, 200, true, null, null, "This is usefull for repairing. It is also usefull for crafting.") );
	Items.add( new ItemType(null, "Invisible Head Mask", "Armor", "Special", "", null, 1.40, 450.00, false, 5, true, null, null, "Ever wonder what you would look like without a head? Try on this mask, then look in the mirror. Your head has vanished.", "!Paladrone") );
	Items.add( new ItemType(null, "King's Coin Zinc", "Special", null, "Invent", null, 0.01, 5.00, false, 1, false, null, null, "One of the King's Coins.") );
	Items.add( new ItemType(null, "Lantern", "Light", null, "Any Hand", null, 0.02, 10.00, false, 5, true, null, null, "A covered candle that will emit small area of light when used. Not for long term use.") );
	Items.add( new ItemType(null, "List from Aeneas to Brax", "Special", null, "Invent", null, 0.01, 1.00, false, 5, false, null, null, "To Brax:<br>Please, can you make me some wooden crosses for my fravels?<br>From Brother Aeneas.") );
	Items.add( new ItemType(null, "Orc Tooth", "Special", null, "Bonus", null, 0.02, 4.00, true, 200, true, null, null, "One hit to the head will knock out the Orc's tooth. Well done.") );
	Items.add( new ItemType(null, "Rabbit Fur", "Special", null, "Invent", null, 0.01, 4.00, true, 100, true, null, null, "Fur of a Rabbit") );
	Items.add( new ItemType(null, "Rabbit's Ear", "Special", null, "Bonus", null, 0.02, 4.00, true, 100, true, null, null, "Find someone to buy or trade this worthless piece for some armour.") );
	Items.add( new ItemType(null, "Rabbit's Foot", "Special", null, "Bonus", null, 0.03, 2.00, true, 100, true, null, null, "You just killed a poor bunny. Take his foot for good luck.") );
	Items.add( new ItemType(null, "Red Sprite Wing") );
	Items.add( new ItemType(null, "Sand Golem Leg Bone", "Special", null, null, null, 0.03, 4.00, true, 100, true, null, null, "A sand golem leg bone may be used in a quest.") );
	Items.add( new ItemType(null, "Sand Troll Bones", "Special", null, null, null, 0.25, 1.00, false, 1, true, null, null, "The bones of a sand troll. Do they realy have bones, hmm?") );
	Items.add( new ItemType(null, "Spider Web", "Special", null, "Bonus", null, 0.01, 2.00, true, 100, true, null, null, "The web of a spider is a sticky thing.") );
	Items.add( new ItemType(null, "Small Bag of Gems", "Special", null, null, null, 0.03, 14.00, true, 100, true, null, null, "This small bag of value come in pretty handy.") );
	Items.add( new ItemType(null, "Tanzinite", "Special", null, "Bonus", null, 0.05, 6.00, true, 100, true, null, null, "This gem is an Orc drop.") );
	Items.add( new ItemType(null, "Tent", "Map object", null, "Ground") );
	Items.add( new ItemType(null, "Void Tent", "Map object", null, "Ground", null, 1.00, 3000.00, false, 1, true, null, null, "This tent is made out of Void Material<br>It keeps you dry and out of sight of wandering monsters<br>And it&acute;s better than just a blanket to sleep in.") );
	Items.add( new ItemType(null, "Water Sprite Wing", "Special", null, "Bonus", null, 0.01, 6.00, true, 100, true, null, null, "A small treasure from a dead fairy.") );
	Items.add( new ItemType(null, "Wasp Eye", "Special", null, "Invent", null, 0.02, 5.00, true, 100, true, null, null, "An eye from a wasp, shouldn't I get two?") );
	Items.add( new ItemType(null, "Wasp Scale", "Special", null, "Invent", null, 0.04, 7.50, true, 100, true, null, null, "Poece of armour from a wasp.") );
	Items.add( new ItemType(null, "Yumma Flower", "Special", null, "Invent", null, 0.00, 0.01, true, 250, true) );
	//	Wood's
	Items.add( new ItemType(null, "Dead Wood", "Special", null, "CampfireKit", null, 0.00, 0.00, true, 100, true, null, null, "") );
	Items.add( new ItemType(null, "Light Wood", "Special", null, "CampfireKit", null, 0.01, 6.00, true, 100, true, null, null, "A light piece of wood.") );
	Items.add( new ItemType(null, "Medium Hard Wood", "Special", null, "CampfireKit", null, 0.01, 8.00, true, 100, true, null, null, "A piece of semi-hard wood.") );
	//	Orb's
	Items.add( new ItemType(null, "Ghost Orb", "Special", null, "Bonus", null, 0.00, 300.00, false, 3, true, null, null, "") );
	Items.add( new ItemType(null, "Light Orb", "Special", null, "Head", null, 0.00, 1500.00, false, 0, true, null, null, "") );
	Items.add( new ItemType(null, "Polar Orb", "Special", null, "Bonus", null, 0.02, 300.00, false, 3, true, null, null, "An Orb from the polar creatures.") );
	//	Meck Band's
	Items.add( new ItemType(11, "Class 1 Neck Band", "Special", null, "Head", null, 0.05, 10.00, false, 3, true, null, null, "+1.2AC") );
	//	Arm Band's
	Items.add( new ItemType(16, "Blue Spiked Arm Band", "Special", null, "Any Leg", null, 0.05, 50.00, false, 3, true, null, null, "+1.2AC, +1.2ATK") );
	Items.add( new ItemType(11, "Small Leather Armband", "Special", null, "Any Arm", null, 0.05, 50.00, false, 3, true, null, null, "+1.2AC") );
	//	Belt's
	Items.add( new ItemType(0, "Old Leather Belt", "Special", null, "Waist") );
	Items.add( new ItemType(6, "Belt of Rage", "Special", null, "Waist", null, 0.02, 50.00, false, 3, true, null, null, "+1.2Atk") );
	Items.add( new ItemType(16, "Belt of Might", "Special", null, "Waist", null, 0.02, 75.00, false, 3, true, null, null, "+2.0STR, +1.5ATK") );
	Items.add( new ItemType(16, "Hard Leather Belt", "Special", null, "Waist", null, null, null, null, null, null, null, null, "+1.5AC") );
	Items.add( new ItemType(21, "Belt of Speed", "Special", null, "Waist", null, 0.02, 90.00, false, 3, true, null, null, "+0.2Run") );
	//	Gem's
	Items.add( new ItemType(11, "Gem of the Rat", "Special", null, "Chest", null, 0.08, 50.00, false, 3, true, null, null, "+5STR") );
	Items.add( new ItemType(11, "Gem of Wood", "Special", null, "Chest", null, 0.08, 50.00, false, 3, true, null, null, "+1.2AC") );
	Items.add( new ItemType(16, "Gem of Lead", "Special", null, "Chest", null, 0.08, 60.00, false, 3, true, null, null, "+1.5AC") );
	Items.add( new ItemType(21, "Gem of Iron", "Special", null, "Chest", null, 0.08, 50.00, false, 3, true, null, null, "+1.7AC") );
	Items.add( new ItemType(26, "Gem of Ice", "Armor", "Special", "Bonus", 1.0, 0.08, 50.00, false, 5, true, "Ice", null, "+1.0AC") );
	//	Leg Band's
	Items.add( new ItemType(16, "Blue Spiked Leg Band", "Special", null, "Any Leg", null, 0.05, 50.00, false, 3, true, null, null, "+1.2AC, +1.2ATK") );
	//	Toe Ring's
	Items.add( new ItemType(6, "Toe Ring of Sight", "Special", null, "Any Foot", null, 0.02, 50.00, false, 3, true, null, null, "+15Radar") );
	Items.add( new ItemType(6, "Toe Ring of Wisdom", "Special", null, "Any Foot", null, 0.02, 50.00, false, 3, true, null, null, "+5WIS") );
/***************************************************************************
				Exception handling.
***************************************************************************/
}
catch(e){
	ShowException(e);
}
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 10639;
