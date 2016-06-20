/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Eastern Galen Woods

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
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("Map|Building|Village",	1676, 1190, "Village", "East Galen Village") );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("Map|Building|Hut",		2239, 708, "Hut", "Portal Hub") );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("Map|Portal|Map",		2218, 700, "Portal", "To: <b>Liyon&nbsp;Valley</b>") );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("Map|Portal|Map",		2218, 722, "Portal", "To: <b>West&nbsp;Haunted&nbsp;Woods</b><br>Near <i>Landric's</i> Stable") );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("Map|Portal|Map",		2263, 700, "Portal", "To: <b>Timberlin</b><br>Near portal to <i>KD&acute;s Castle</i>") );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("Map|Portal|Map",		2263, 722, "Portal", "To: <b>Taleron&nbsp;City</b>") );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("Map|Building|Hut",		2663, 934, "Hut", "Arrow Trader's Hut") );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("Map|Portal|Regen",		1580, 1276, "Regenpoint") );
	//	NPC's
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("NPC|Quest",		1563, 1258, "Dole", "Exp + krona for 'Sand Golem Legg Bones' or 'Orc teeth'") );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("NPC|Vendor|Food",		1631, 1272, "Butcher", "Sells: food.") );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("NPC|Vendor|Magic|War",	1680, 1275, "Combat Mage", "<b><u>Sells Scrolls</u>:</b>"
																	+"<br>L20,25,30,35:&nbsp;<i>Soul&nbsp;Vortex</i>"
																	+",<br>L20,25,30,35:&nbsp;<i>Punishing&nbsp;Light</i>"
																	+",<br>L20,25,30,35:&nbsp;<i>Natures&nbsp;Curse</i>"
																	+",<br>L20,25,30,35:&nbsp;<i>Pain</i>"
																	) );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("NPC|Repair",		1709, 1168, "Repair Smith") );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("NPC|Quest",		1867, 1158, "Angel", "Exp + krona for 'Water Sprite Wings'") );
	Universe.planet("Seregor").map("Eastern Galen Woods").add( new Mark("NPC|Vendor|Ammo",		2665, 934, "Arrow Trader", "Sells: Arrows.") );
	//	Monsters
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Eastern Galen Woods").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3799;
