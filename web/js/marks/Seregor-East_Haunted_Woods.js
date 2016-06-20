/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: East Haunted Woods

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
	Universe.planet("Seregor").map("East Haunted Woods").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	//	NPC's
	//	Monsters
	Universe.planet("Seregor").map("East Haunted Woods").add( new Mark("NPC|Monster", 2878, 1241, "Mortack|1") );
	Universe.planet("Seregor").map("East Haunted Woods").add( new Mark("NPC|Monster", 2878, 1241, "Mortack|2") );
	Universe.planet("Seregor").map("East Haunted Woods").add( new Mark("NPC|Monster", 2878, 1241, "Mortack|3") );
	Universe.planet("Seregor").map("East Haunted Woods").add( new Mark("NPC|Monster", 1300, 1600, "Taralac|1") );
	Universe.planet("Seregor").map("East Haunted Woods").add( new Mark("NPC|Monster", 1300, 1600, "Taralac|2") );
	Universe.planet("Seregor").map("East Haunted Woods").add( new Mark("NPC|Monster", 1300, 1600, "Taralac|3") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("East Haunted Woods").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2204;
