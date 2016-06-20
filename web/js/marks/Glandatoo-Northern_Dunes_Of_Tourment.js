/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Glandatoo
	Map: Northern Dunes Of Tourment

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
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("Map|Building|Hut",		2027, 939, "Hut", "Butcher's Hut") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("Map|Building|Hut",		2064, 1012, "Hut", "Taralynn's Hut") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("Map|Building|Village",		2030, 985, "Village", "Dune Village") );
	//	NPC's
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Vendor|Pets|Cow",		316, 2154, "Cow Trader|0") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Vendor|Weapon",		2003, 998, "Lily|1") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Vendor|Food",			2027, 939, "Butcher|0") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Quest",			2054, 965, "Metos|0") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Vendor|Pets|Nightmare",	2064, 1012, "Taralynn|0") );
	//	Monsters
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Monster",			164, 2129, "Cow|1") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Monster",			164, 2129, "Cow|3") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Monster",			450, 640, "Bile Lilem|1") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Monster",			450, 640, "Bile Lilem|2") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Monster",			450, 640, "Bile Lilem|3") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Monster",			815, 1535, "Bile Lilem|1") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Monster",			815, 1535, "Bile Lilem|2") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Monster",			815, 1535, "Bile Lilem|3") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Monster",			1881, 1818, "Rock Golem|1") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Monster",			1881, 1818, "Rock Golem|2") );
	Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add( new Mark("NPC|Monster",			1881, 1818, "Rock Golem|3") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Glandatoo").map("Northern Dunes Of Tourment").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3939;
