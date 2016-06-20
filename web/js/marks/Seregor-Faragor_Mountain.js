/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Faragor Mountain

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
	Universe.planet("Seregor").map("Faragor Mountain").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Faragor Mountain").add( new Mark("Map|Portal|Regen",	871, 434, "Regenpoint") );
	Universe.planet("Seregor").map("Faragor Mountain").add( new Mark("Map|Portal|Planet",	1513, 1942, "Portal", "To:<br><b>Glandatoo&nbsp;(Northern&nbsp;Dune&nbsp;Of&nbsp;Tourment)</b>") );
	//	NPC's
	Universe.planet("Seregor").map("Faragor Mountain").add( new Mark("NPC|Vendor|Misc",	1382, 1744, "Spheratos|0") );
	Universe.planet("Seregor").map("Faragor Mountain").add( new Mark("NPC|Pet Trainer",	4834, 3997, "Pet Trainer|0") );
	//	Monsters
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Faragor Mountain").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2018;
