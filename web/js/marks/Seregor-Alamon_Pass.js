/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Alamon Pass

	Contributed by:

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
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("Map|Portal|Map",		275, 1820, "Portal", "To Muirdach.") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("Map|Portal|Regen",		2225, 2199, "Regenpoint") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("Map|Building|Hut",		1376, 971, "Hut", "Maul's Red Hut") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("Map|Building|Tower",	1572, 1873, "Tower", "Bow Maker's Tower") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("Map|Building|Tower",	1829, 1318, "Tower", "Tacrom's Tower") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("Map|Building|Village",	1250, 1250, "Village", "Alamon Village") );
	//	NPC's
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("NPC|Vendor|Pets|Pig",	1029, 1319, "Pig Trader", "Sells: Pet Pig's.") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("NPC|Vendor|Weapon",	1001, 887, "Bow Maker", "Sells: Bows.") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("NPC|Vendor|Misc",		1067, 924, "Potion Trader", "Sells: Potions.") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("NPC|Vendor|Misc",		1082, 907, "Potion Trader", "Sells: Potions.") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("NPC|Vendor|Weapon",	1376, 971, "Maul", "Sells: Katars (Hammer).") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("NPC|Vendor|Weapon",	1526, 742, "Blad", "Sells: Katars (sword), Silver coins.") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("NPC|Vendor|Weapon",	1572, 1873, "Bow Maker", "Sells: Bows.") );
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark("NPC|Vendor|Weapon",	1829, 1318, "Tacrom", "Sells: Axes.") );
	//	Monsters
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Alamon Pass").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3324;
