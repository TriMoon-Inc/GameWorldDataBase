/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Northern Orc Woods

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
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("Map|Building|Hut",		1859, 1512, "Hut", "Talon's Hut") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("Map|Building|Castle",	4192, 1989, "Castle", "Northern Orc Woods Castle") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("Map|Building|Hut",		191, 4189, "Hut", "Arrow Trader's Hut") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("Map|Building|Hut",		986, 960, "Hut", "Bow Maker's Hut") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("Map|Building|Hut",		1158, 2886, "Hut", "Damore's Hut") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("Map|Portal|Regen",		2757, 3215, "Regenpoint") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("Map|Portal|Map",		3253, 370, "Portal", "To: <b>The Void</b>") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("Map|Building|Castle",	4321.75, 4265.75, "Pyramid") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("Map|Portal|Cave",		4270, 4236, "The Maze") );
	//	NPC's
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Vendor|Ammo",		191, 4189, "Arrow Trader|1") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Quest",			377, 485, "Sunny|0") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Vendor|Armor",		989, 960, "Zorloc|0") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Vendor|Armor",		1159, 2886, "elron|0") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Quest",			1888, 1491, "Ruby|0") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Vendor|Ammo",		1859, 1512, "Forkwar|0") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Quest",			4190, 1966, "Webster|0") );
	//	Monsters
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Monster", 4470, 450, "Huge Wolf Spider|1") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Monster", 4470, 450, "Huge Wolf Spider|2") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Monster", 4470, 450, "Huge Wolf Spider|3") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Monster", 4489, 425, "Giant Tarantula|1") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Monster", 4489, 425, "Giant Tarantula|2") );
	Universe.planet("Seregor").map("Northern Orc Woods").add( new Mark("NPC|Monster", 4489, 425, "Giant Tarantula|3") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Northern Orc Woods").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 4142;
