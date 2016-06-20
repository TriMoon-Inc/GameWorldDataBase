/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Belrith

	Contributed by:
	Arwen @ 2004/11/17 (initial-data)
	TriMoon @ 2004/12/22 (Revised to current state)

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Exception handling.
***************************************************************************/
try{
/***************************************************************************
						Fill Map Marks.
***************************************************************************/
	/*	Templates for easy adding
	Universe.planet("Seregor").map("Belrith").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Building|City",		987, 974, "City", "Belrith City") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Building|Village",		215, 2350, "Village", "Belrith Village") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Building|Hut",			165, 138, "Hut", "Leather Armour Trader's Hut") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Building|Hut",			613, 315, "Hut") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Building|Hut",			1166, 211, "Hut", "Arrow Trader's Hut") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Building|Hut",			1076, 141, "Hut", "Magic Trader's Hut") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Building|Hut",			2063, 1458, "Hut", "Weapon Trader's Hut") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Portal|Map",			486, 2516, "Portal", "To: Tomb") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Portal|Map",			500, 2516, "Portal", "To: Galen Forest") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Portal|Map",			512, 2516, "Portal", "To: Snow Cavea") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Portal|Cave",			1071, 2298, "The Cave", "Iron Ore mines") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Portal|Planet",		1571, 600, "Portal", "To: Glandatoo Lilaci City") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Portal|Map",			1693, 1212, "Portal", "To: Liyon Valley") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("Map|Portal|Regen",			2257, 168, "Regenpoint") );
	//	NPC's
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor",				87, 2306, "Weapon Trader", "Sells: various items") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Armor",			139, 176, "Leather Boot Crafter", "Sells: Leather Boots") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Armor",			165, 138, "Leather Armour Trader", "Sells: Leather Armour") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Quest", 				212, 2445, "Old man", "1Beer + 10Xp + 3Kr per Gila tale.") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Armor",			361, 2400, "Helm Trader", "Sells: Helm's") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Armor",			400, 2350, "Helm Trader", "Sells: Helm's") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Weapon",		301, 1994, "Bow Maker", "Sells: Bows") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Weapon",		571, 1302, "Weapon Trader", "Sells: Weapons") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Misc",			605, 308, "Potion Trader", "Sells: potions") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Weapon",		636, 903, "Tip Tin", "Sells: various weapons") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Quest",				701, 805, "Metos", "Gems for Krona + Exp") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Weapon",		750, 939, "Weapon Trader", "Sells: various Weapons") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Weapon",		824, 1023, "Wantos", "Sells: Staffs") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Weapon",		872, 1027, "Zartor", "Sells: Hammer and Mace Weapons") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Misc",			900, 950, "Potion Trader", "Sells: Potions") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Armor",			920, 875, "Seth", "Sells: various Helms") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Misc",			921, 974, "Magic Trader", "Sells: Stones and Neclaces") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC",						984, 973, "Human Female NPC") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Bank",					1022.97, 854.766, "FreeWorld Banker") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Armor",			1039, 752, "Armour Trader", "Sells: Elven Scale Armour's") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Misc",			1076, 141, "Magic Trader", "Sells: stones and neclaces") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Quest",				1091, 944, "Bevan", "Ten arrows for one krona") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Pets|Horse",	1103.61, 749.046, "Horse Breeder", "Sells: Horse's") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Ammo",			1166, 211, "Arrow Trader", "Sells: arrows") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Portal",				1351, 1077, "Belrith Warp", "To: Barter Town") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Weapon",		2063, 1458, "Weapon Trader", "Sells: various weapons") );
	Universe.planet("Seregor").map("Belrith").add( new Mark("NPC|Vendor|Food",			1368, 957, "Butcher", null) );
	//	Monsters
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Belrith").add()\n\n';
	str += e.name + ' in: ';
	if(e.message)		str += e.message;
	if(e.description)	str += e.description;
	oError = new Error(str);
	oError.name = 'ParsingError';
	ShowException(oError);
}
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 6772;
