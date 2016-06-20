/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: All
	All Cities and villages

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Exception handling.
***************************************************************************/
try{
/***************************************************************************
						Fill Planet Marks.
***************************************************************************/
	/*	Templates for easy adding
	Universe.planet("Seregor").map("").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("Map|Building|Hut",	1855,1700, "N.Galen Hut", null) );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("Map|Building|Castle",	3650, 3350, "N.Galen Castle", null) );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("Map|Building|Tower",	3949, 2036, "Maptor's Tower") );
	Universe.planet("Seregor").map("Northern Galen Woods").add( new Mark("Map|Portal|Regen", 	3994, 2307, "Regen point") );
	Universe.planet("Seregor").map("South Galen Woods").add( new Mark("Map|Building|Hut",	1000, 700, "S.Galen Hut", null) );
	Universe.planet("Seregor").map("South Galen Woods").add( new Mark("Map|Building|Castle",	2600, 1100, "S.Galen Castle", null) );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Any").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2248;
