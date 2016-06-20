/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Taleron

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
	Universe.planet("Seregor").map("Taleron").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Taleron").add( new Mark("Map|Building|Castle",	1531, 1636, "Castle", "Taleron CityHall") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("Map|Building|Village",	1531, 1554, "Village", "Taleron Village") );
	//	NPC's
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC|Vendor|Weapon",	932, 1714, "barton", "Sells: Staff's and Bows.") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC|Vendor|Misc",		1220, 1349, "Jam'Dor", "Sells: CampfireKit, Holy Chain Armory, Golden Plate Armory, Attack potions.") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC|Vendor|Misc",		1354, 1517, "Kelad", "Sells: CampfireKit, Tent, Blanket, Studded Leather Armory and helm.") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC|Vendor|Weapon",	1531, 1554, "Hexel", "Sells: Bows and Arrows.") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC|Vendor|Weapon",	1539, 1797, "haggon", "Sells: Bows.") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC|Vendor|Misc",		1608, 1636, "Loaric", "Sells: Swords, Bows and Taleron map.") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC",					1622, 1557, "Altrog NPC") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC|Vendor|Armor",		1680, 1727, "Damore", "Sells: Blue Elven Scale Armory.") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC|Vendor|Armor",		1837, 1849, "Ulus", "Sells: Tempered Full Plate Armory.") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC|Vendor|Weapon",	1919, 1445, "Spike", "Sells: Spiked Clubs, Triderian Blood Helm.") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC|Vendor|Weapon",	1954, 1389, "Vastor", "Sells: Swords Clubs, Triderian Blood Helm.") );
	Universe.planet("Seregor").map("Taleron").add( new Mark("NPC|Vendor|Weapon",	2108, 1443, "Merratos", "Sells: Shadow- Saphire- and Mere-Blade, Triderian Blue Helm.") );
	//	Monsters
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Taleron").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3478;
