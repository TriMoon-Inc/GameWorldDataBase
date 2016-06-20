/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Keep Basement

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
	Universe.planet("Seregor").map("Keep Basement").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	//	NPC's
	Universe.planet("Seregor").map("Keep Basement").add( new Mark("NPC|Vendor|Armor",	250, 581, "Fire Mage", "<b><u>Sells Ammo</u>:</b><br><i>L0:&nbsp;Fire&nbsp;Wand&nbsp;Charges</i>") );
	//	Monsters
	Universe.planet("Seregor").map("Keep Basement").add( new Mark("NPC|Monster",		250, 600, "Armoured Ghoul|1") );
	Universe.planet("Seregor").map("Keep Basement").add( new Mark("NPC|Monster",		250, 600, "Armoured Ghoul|2") );
	Universe.planet("Seregor").map("Keep Basement").add( new Mark("NPC|Monster",		250, 600, "Armoured Ghoul|3") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Keep Basement").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2042;
