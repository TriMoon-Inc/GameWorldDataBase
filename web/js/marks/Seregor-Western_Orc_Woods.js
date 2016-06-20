/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Western Orc Woods

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
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("Map|Building|Hut",		2032, 1637, "Hut", "Demon Trader's Hut") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("Map|Building|Hut",		2808, 3720, "Hut", "Magicos's Hut") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("Map|Building|Hut",		3648, 403, "Hut", "Kontar's Hut") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("Map|Building|Hut",		3949, 1454, "Hut", "Morblood's Hut") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("Map|Building|Village",	2079, 1666, "Village", "Western Orc Woods Village") );
	//	NPC's
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("NPC|Vendor|Pets|Demon",	2030, 1662, "Demon Trader|0") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("NPC|Vendor|Armor",		2043, 1595, "Cam'Dar|0") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("NPC|Vendor|Weapon",		2072, 1623, "Clamme|0") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("NPC|Vendor|Ammo",		2141, 1646, "Forkwar|0") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("NPC|Vendor|Ammo",		2145, 1623, "Arrow Trader|1") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("NPC|Portal",			2799, 3704, "warp Wizard", "To: ?") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("NPC|Vendor|Weapon",		2826, 3732, "Magicos|0") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("NPC|Quest",			3645, 396, "Kontar|0") );
	Universe.planet("Seregor").map("Western Orc Woods").add( new Mark("NPC|Quest",			3953, 1454, "Morblood|0") );
	//	Monsters
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Western Orc Woods").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3197;
