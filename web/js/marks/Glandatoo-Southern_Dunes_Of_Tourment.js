/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Glandatoo
	Map: Southern Dunes Of Tourment

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
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("Map|Building|Hut",	1990, 852, "Spike's Hut") );
	//	NPC's
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Vendor|Armor",	1962, 870, "gulamok|0") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Vendor|Weapon",	1990, 852, "Spike|0") );
	//	Monsters
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	621, 418, "Worker Wasp|1") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	621, 418, "Worker Wasp|2") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	621, 418, "Worker Wasp|3") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	941, 1758, "Wild Horse|1") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	941, 1758, "Wild Horse|2") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	941, 1758, "Wild Horse|3") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	1290, 1926, "Wild Horse|1") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	1290, 1926, "Wild Horse|2") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	1290, 1926, "Wild Horse|3") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	1406, 1795, "Wild Pony|1") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	1406, 1795, "Wild Pony|2") );
	Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add( new Mark("NPC|Monster",	1406, 1795, "Wild Pony|3") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Glandatoo").map("Southern Dunes Of Tourment").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3377;
