/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Northern Galen Woods

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
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("Map|Portal|Regen",			2186, 2105, "RegenPoint") );
	//	NPC's
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Vendor|Pets|Henchmen",	1855, 1700, "Arcarrow", "Sells: Archer Henchmen @4000 Kr.") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Vendor|Armor",			2162, 2080, "Chainalac", "Sells: Royal Chain Armor") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Quest",					3606, 3465, "Buck", "10Kr per Sand bucket") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Quest",					3689, 3243, "Faryt", "Hilts for Iron Ore") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Quest",					3712, 3306, "Andreza", "Krona and exp for spider webs") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Vendor|Maps",				3949, 2036, "Maptor", "Sells: Attack Potions and maps: [2,3], [3,3], [3,5], [3,6], [4,3], [4,4], [4,5], [5,3]") );
	//	Monsters
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Monster",					1386, 1535, "Mud Troll|1") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Monster",					1386, 1535, "Mud Troll|2") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Monster",					1386, 1535, "Mud Troll|3") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Monster",					2200, 2400, "Water Spider|1") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Monster",					2200, 2400, "Water Spider|2") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Monster",					2200, 2400, "Water Spider|3") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Monster",					1138, 3703, "Worker Wasp|1") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Monster",					1138, 3703, "Worker Wasp|2") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("NPC|Monster",					1138, 3703, "Worker Wasp|3") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Northern Galen Woods").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3690;
