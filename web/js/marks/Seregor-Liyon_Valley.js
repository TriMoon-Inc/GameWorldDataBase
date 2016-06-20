/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Liyon Valley

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
	Universe.planet("planetname").map("mapname").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	//Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Nr|Purple|1", 0, 0, "", "") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Building|City",	2978.5, 2918, "City", "Noruth City") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Building|Village",	900, 775, "Village", "Liyon Village") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Building",		672, 1108, "Building", "A Building") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Building",		788, 1116, "Building", "A Building") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Building",		884, 702, "Building", "A 2-Floor Building") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Building|WaterPut",	943, 828, "WaterPut", "Drink some from it") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Building",		1072, 797, "Building", "Drunken Horse") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Building",		3706, 2308, "Building", "A Building") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Building",		3834, 2250, "Building", "A Building") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Building|Hut",	598, 1050, "Building", "A Building") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Portal",		582, 1388, "Portal", "To:<br><b>Liyon&nbsp;Valley</b><br>MW near Cave.") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Portal",		670, 1407, "Portal", "To:<br><b>Liyon&nbsp;Valley</b><br>NE near Crypt.") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Portal|Cave",		867, 2896, "The Cave", "<i>Iron&nbsp;Ore</i> mines") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Portal|Regen",	934, 945, "Regenpoint") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Portal|Planet",	1181, 544, "WorldPortal", "To:<br><b>Glandatoo (Lilaci&nbsp;City)</b>") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Portal|Regen",	3546, 2356, "Regenpoint") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Portal",		3689, 2393, "Portal", "To:<br><b>Liyon&nbsp;Valley</b><br>SW near Archery range.") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Portal",		3689, 2495, "Portal", "To:<br><b>Liyon&nbsp;Valley</b><br>NW.") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("Map|Portal|Cave",		3995, 3885, "The Crypt", "Mortacks Crypt") );
	//	NPC's
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Vendor|Ammo",		613, 1078, "Forkwar|0") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Vendor|Armor",	631, 1059, "Furioso|0") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Quest",		703, 1091, "Bevan|0") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Vendor|Magic|Light",	784, 797, "Light Mage", "<b><u>Sells&nbsp;Scrolls</u>:</b>"
															+"<br>L1:&nbsp;<i>Attack Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Avoidance Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Climb Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Defence Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>HP Regen Increment Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Jump Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Mana Regen Increment Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Max HP Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Max Mana Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Radar Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Run Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Strength Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Swim Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Turn Boost 1 Scroll</i>"
															+",<br>L1:&nbsp;<i>Wisdom Boost 1 Scroll</i>"
															) );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Vendor|Misc",		796, 750, "Necessi|0") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Vendor|Weapon",	825, 689, "Wanda|0") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Quest",		838, 733, "Abner|0") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Vendor|Ammo",		862, 733, "Forkwar|0") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Vendor|Armor",	991, 749, "Patch|0") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Vendor|Magic|Life",	1077, 778, "healnor", "<b><u>Sells&nbsp;Scrolls</u>:</b>"
															+"<br>L1,2,3,4,5,6,7,8:&nbsp;<i>Heal</i>"
															) );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Vendor|Pets|Chicken",	1102, 1133, "Chicken Trader|0") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Vendor|Magic|War",	1169, 501, "Combat Mage", "<b><u>Sells Scrolls</u>:</b><br>"
																+"L1,5,10,15:&nbsp;<i>Soul&nbsp;Vortex</i>"
																+",<br>L1,5,10,15:&nbsp;<i>Punishing&nbsp;Light</i>"
																+",<br>L1,5,10,15:&nbsp;<i>Natures&nbsp;Curse</i>"
																+",<br>L1,5,10:&nbsp;<i>Pain</i>") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Vendor|Maps",		3029, 2061, "Maptor", "<b><u>Sells Maps</u>:</b>"
															+"<br><a href=\"javascript:Navigate('Seregor|Eastern Galen Woods')\">Eastern&nbsp;Galen&nbsp;Woods</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|East Haunted Woods')\">East&nbsp;Haunted&nbsp;Woods</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Eastern Orc Woods')\">Eastern&nbsp;Orc&nbsp;Woods</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Liyon Valley')\">Liyon&nbsp;Valley</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Muirdach')\">Muirdach</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Northern Galen Woods')\">Northern&nbsp;Galen&nbsp;Woods</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|North Haunted Woods')\">North&nbsp;Haunted&nbsp;Woods</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Northern Orc Woods')\">Northern&nbsp;Orc&nbsp;Woods</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Southern Haunted Woods')\">Southern&nbsp;Haunted&nbsp;Woods</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|South Orc Woods')\">South&nbsp;Orc&nbsp;Woods</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Western Galen Woods')\">Western&nbsp;Galen&nbsp;Woods</a>"
															+",<br><a href=\"javascript:Navigate('Seregor|Western Orc Woods')\">Western&nbsp;Orc&nbsp;Woods</a>"
															) );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Repair",		3857, 2286, "Repair Man|0") );
	//	Monsters
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Monster",		407, 847, "Sand Troll|1") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Monster",		407, 847, "Sand Troll|2") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Monster",		407, 847, "Sand Troll|3") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Monster",		1056, 1167, "Chicken|1") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Monster",		1056, 1167, "Chicken|2") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Monster",		1056, 1167, "Chicken|3") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Monster",		3484, 585, "Bunny|2") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Monster",		3484, 585, "Bunny|3") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Monster",		3484, 585, "Bunny|4") );
	Universe.planet("Seregor").map("Liyon Valley").add( new Mark("NPC|Monster",		3432, 1188, "Bunny|5") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Liyon Valley").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 9442;
