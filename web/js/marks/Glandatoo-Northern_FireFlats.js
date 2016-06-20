/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Glandatoo
	Map: Northern FireFlats

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
	Universe.planet("Glandatoo").map("Northern FireFlats").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Glandatoo").map("Northern FireFlats").add( new Mark("Map|Building|Village",	1226, 502, "Northern FireFlats Village") );
	//	NPC's
	Universe.planet("Glandatoo").map("Northern FireFlats").add( new Mark("NPC|Vendor|Ammo",		1210, 449, "Arrow Trader|0") );
	Universe.planet("Glandatoo").map("Northern FireFlats").add( new Mark("NPC|Vendor|Misc",		1226, 502, "Potion Trader|0") );
	Universe.planet("Glandatoo").map("Northern FireFlats").add( new Mark("NPC|Vendor|Armor",	1222, 414, "Tanus|0") );
	Universe.planet("Glandatoo").map("Northern FireFlats").add( new Mark("NPC|Vendor|Armor",	1240, 397, "Armour Trader|0") );
	Universe.planet("Glandatoo").map("Northern FireFlats").add( new Mark("NPC|Vendor|Armor",	1249, 414, "Helm Trader|0") );
	Universe.planet("Glandatoo").map("Northern FireFlats").add( new Mark("NPC|Pet Trainer",		1289, 474, "Pet Trainer|0") );
	//	Monsters
	Universe.planet("Glandatoo").map("Northern FireFlats").add( new Mark("NPC|Monster",		1283, 2106, "Mud Troll|1") );
	Universe.planet("Glandatoo").map("Northern FireFlats").add( new Mark("NPC|Monster",		1283, 2106, "Mud Troll|2") );
	Universe.planet("Glandatoo").map("Northern FireFlats").add( new Mark("NPC|Monster",		1283, 2106, "Mud Troll|3") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Glandatoo").map("Northern FireFlats").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2709;
