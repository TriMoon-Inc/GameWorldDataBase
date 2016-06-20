/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Eastern Orc Woods

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
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark("Map|Building|Hut", 1769, 1124, "Hut", "Taipa's Hut") );
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark("Map|Building|Hut", 2349, 2617, "Hut", "Powerband's Hut") );
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark("Map|Building|Village", 3054, 863, "Village", "Orc Village") );
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark("Map|Portal|Regen", 3054, 863, "Regenpoint") );
	//	NPC's
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark("NPC|Quest", 1769, 1124, "Taipa", "Thread for spools") );
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark("NPC|Quest", 2845, 775, "Gemmy", "20 EXP or 14 Krona per 'Small bag of Gems'") );
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark("NPC|Quest", 3092, 885, "Lowe", "Bleudiamonds: 10Exp + 3Krona per diamond.") );
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark("NPC|Vendor|Weapon", 1354, 1660, "Sharpa", "Sells: Crossbows and arrows.") );
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark("NPC|Vendor|Armor", 2365, 2629, "Powerband trader") );
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark("NPC|Vendor|Magic|Light", 2991, 749, "Lightmage", "Sells: Level-4 Stacker spells.") );
	Universe.planet("Seregor").map("Eastern Orc Woods").add( new Mark("NPC|Vendor|Magic|Light", 3186, 609, "Lightmage", "Sells: Level-3 spells.") );
	//	Monsters
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Eastern Orc Woods").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3026;
