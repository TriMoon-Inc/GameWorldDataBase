/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Muirdach

	Contributed by:

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
	Universe.planet("Seregor").map("Alamon Pass").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Muirdach").add( new Mark("Map|Portal|Map",		1637, 4211, "Portal", "To:<br><b>East Haunted Woods</b>") );
	Universe.planet("Seregor").map("Muirdach").add( new Mark("Map|Building|Hut",		1902, 291, "Hut", "Geocrom's Hut") );
	//	NPC's
	Universe.planet("Seregor").map("Muirdach").add( new Mark("NPC|Quest",			1934, 314, "Lucretia|0") );
	Universe.planet("Seregor").map("Muirdach").add( new Mark("NPC|Vendor|Maps",		1902, 291, "Geocrom", "<b><u>Sells Maps</u>:</b>"
															+"<br><a href=\"javascript:Navigate('Seregor|Alamon Pass')\">Alamon Pass</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Belrith')\">Belrith</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Faragor Mountain')\">Faragor Mountain</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Greymoore Meadow')\">Greymoore Meadow</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Haddoc Coast')\">Haddoc Coast</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Liyon Valley')\">Liyon Valley</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Lord Nevik\\'s Tomb')\">Lord Nevik's Tomb</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Morlock Keep')\">Morlock Keep</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Muirdach')\">Muirdach</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Northern Haddoc Coast')\">Northern Haddoc Coast</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Northern Orc Woods')\">Northern Orc Woods</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|South Galen Woods')\">South Galen Woods</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Taleron')\">Taleron</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Timberlin')\">Timberlin</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|West Haunted Woods')\">West Haunted Woods</a>"
															) );
	Universe.planet("Seregor").map("Muirdach").add( new Mark("NPC|Vendor|Pets|Spider",	4336, 3375, "Spitus|0") );
	//	Monsters
	Universe.planet("Seregor").map("Muirdach").add( new Mark("NPC|Monster",			921, 446, "Mountain Bunny|1") );
	Universe.planet("Seregor").map("Muirdach").add( new Mark("NPC|Monster",			921, 446, "Mountain Bunny|2") );
	Universe.planet("Seregor").map("Muirdach").add( new Mark("NPC|Monster",			921, 446, "Mountain Bunny|3") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Muirdach").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3905;
