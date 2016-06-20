/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: Noruth City

	Contributed by:
	Arwen @ 2004/11/17 (inital)
	TriMoon @ 2004/12/17 updated and revised to current state.
	TriMoon @ 2005/01/30 updated and revised to current state.

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
	Universe.planet("Seregor").map("Noruth City").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("Noruth City").add( new Mark("Map|Portal|Map",		512, 0, "City-Gate", "South Gate") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("Map|Portal|Map",		512, 1024, "City-Gate", "North Gate") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("Map|Building|Church",	190, 800, "Church", "Brother Aeneas's Church") );
	//	NPC's
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Magic|Light",	114, 520, "Light Mage", "<b><u>Sells&nbsp;Scrolls</u>:</b>"
															+"<br>L2:&nbsp;<i>Attack Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Avoidance Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Climb Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Defence Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>HP Regen Increment Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Jump Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Mana Regen Increment Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Max HP Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Max Mana Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Radar Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Run Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Strength Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Swim Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Turn Boost 2 Scroll</i>"
															+",<br>L2:&nbsp;<i>Wisdom Boost 2 Scroll</i>"
															) );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Misc",		116, 403, "halloc|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Armor",		123, 352, "gulamok|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Weapon",	136, 327, "Macery|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Ammo",		144, 426, "Arrow Trader|1") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Misc",		145, 542, "Potion Trader|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Quest",		179, 825, "Aeneas|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Armor",		190, 306, "Helm Trader|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Weapon",	329, 312, "Wanda|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Weapon",	352, 809, "Toxra|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Weapon",	361, 919, "Staff Trader|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Quest", 		398, 539, "Stogg|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Armor",		402, 320, "Tanus|1") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Food",		414, 342, "Voramot|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Armor",		428, 969, "Old Stud|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Weapon",	467, 697, "Sword Trader|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Ammo",		494, 821, "Forkwar|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Quest",		503, 290, "Kelleran|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Weapon",	517, 921, "Barbied|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Pets|Horse",	529, 396, "Horse Breeder|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Quest",		534, 584, "Nemo|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Armor",		540, 705, "Spike|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Food",		567, 717, "Butcher|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Weapon",	727, 226, "Bow Trader|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor",		729, 746, "Ghoulish Rogue NPC") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Pets|Gagga",	730, 865, "Baltor|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Weapon",	733, 542, "Clawtor|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Bank",			840, 383, "FreeWorld Banker|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Portal",		854, 191, "Noruth Warp|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Quest",		866, 738, "Zed|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Armor",		879, 567, "Parleath|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Armor",		881, 832, "Artaxerces|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Weapon",	899, 388, "Polearm Trader|0") );
	Universe.planet("Seregor").map("Noruth City").add( new Mark("NPC|Vendor|Armor",		950, 197, "Fulleath|0") );
	//	Monsters
/***************************************************************************
				Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("Noruth City").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 6671;
