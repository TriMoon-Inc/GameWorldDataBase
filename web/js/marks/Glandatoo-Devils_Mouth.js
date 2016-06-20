/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Glandatoo
	Map: Devils Mouth

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
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("Map|Building|Hut",			1836, 608, "Hut") );
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("Map|Portal|Planet",			1785, 1715, "Portal", "To Seregor: Southern Haunted Woods") );
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("NPC",						1839, 608, "Ghoulish Rogue NPC") );
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("NPC|Vendor|Pets|Henchmen",	1851, 590, "Arcarow", "Sells: Archer henchmen @4000Kr") );
	// Monsters
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("NPC|Monster",				1467, 1611, "Sand Troll|1") );
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("NPC|Monster",				1467, 1611, "Sand Troll|2") );
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("NPC|Monster",				1467, 1611, "Sand Troll|3") );
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("NPC|Monster",				3568, 2534, "Water Sprite|1") );
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("NPC|Monster",				3568, 2534, "Water Sprite|2") );
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("NPC|Monster",				3568, 2534, "Water Sprite|3") );
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("NPC|Monster",				4746, 1043, "Sand Golem|1") );
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("NPC|Monster",				4746, 1043, "Sand Golem|2") );
	Universe.planet("Glandatoo").map("Devils Mouth").add( new Mark("NPC|Monster",				4746, 1043, "Sand Golem|3") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Glandatoo").map("Devils Mouth").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3065;
