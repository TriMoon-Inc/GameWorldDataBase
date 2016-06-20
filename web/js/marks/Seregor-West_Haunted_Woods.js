/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: West Haunted Woods

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
	Universe.planet("Seregor").map("West Haunted Woods").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("West Haunted Woods").add( new Mark("Map|Building|Church",	1351, 1202, "Church", "Lily's Church") );
	Universe.planet("Seregor").map("West Haunted Woods").add( new Mark("Map|Building|Hut",		2237, 2071, "Hut", "Landric's Stable") );
	Universe.planet("Seregor").map("West Haunted Woods").add( new Mark("Map|Building|Hut",		2401, 1935, "Hut", "Breati's Hut") );
	Universe.planet("Seregor").map("West Haunted Woods").add( new Mark("Map|Portal|Regen",		2340, 2198, "RegenPoint") );
	Universe.planet("Seregor").map("West Haunted Woods").add( new Mark("Map|Portal|Map",		1322, 1264, "Portal", "To:<br><i><b>Keep Basement</b></i>") );
	//	NPC's
	Universe.planet("Seregor").map("West Haunted Woods").add( new Mark("NPC|Vendor|Armor",		1351, 1202, "Lily|0") );
	Universe.planet("Seregor").map("West Haunted Woods").add( new Mark("NPC|Vendor|Pets|WarHorse",	2233, 2088, "Landric|0") );
	Universe.planet("Seregor").map("West Haunted Woods").add( new Mark("NPC|Vendor|Magic|Light",	2366, 1927, "Light Mage", "<b><u>Sells Scrolls</u>:</b><br><i>L50:&nbsp;Stacker Spells</i>") );
	Universe.planet("Seregor").map("West Haunted Woods").add( new Mark("NPC|Vendor|Armor",		2401, 1935, "Breati|0") );
	Universe.planet("Seregor").map("West Haunted Woods").add( new Mark("NPC|Vendor|Magic|Light",	2418, 1962, "Light Mage", "<b><u>Sells Scrolls</u>:</b><br><i>L40:&nbsp;Stacker Spells</i><br><i>Stacker 5 Spells</i>") );
	//	Monsters
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("West Haunted Woods").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2912;
