/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Glandatoo
	Map: Lilaci City

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
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("Map|Portal|Regen",	735, 2162, "Regenpoint") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("Map|Building|City",	860.5, 2195.75, "Lilaci City") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("Map|Portal|Regen",	2666, 2319, "Regenpoint") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("Map|Portal|Planet",	1147, 1966, "Portal", "To: <b>Liyon Valey</b> (Seregor)") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("Map|Portal|Map",		1272, 2532, "Portal", "To: <b>NW Lilaci map.</b>") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("Map|Building|Hut",	1539, 2555, "Mage Hut") );
	//	NPC's
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Weapon",	675, 2230, "Bow Trader|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Weapon",	676, 2181, "Staff Trader|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Weapon",	679, 2240, "Polearm Trader|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Weapon",	679, 2192, "Sword Trader|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Misc",	681, 2210, "Potion Trader|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Repair",		747, 2182, "Repair Smith|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Quest",		765, 2251, "Morblood|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Weapon",	766, 2131, "Clawtor", "<b><u>Sells Claws (Dagger)</u>:</b>"
															+"<br>L45:&nbsp;<i>Polar&nbsp;Clawed&nbsp;Katar</i>"
															+",<br>L60:&nbsp;<i>Poison&nbsp;Clawed&nbsp;Katar</i>"
															+",<br>L65:&nbsp;<i>Dark&nbsp;Clawed&nbsp;Katar</i>"
															+",<br>L130:&nbsp;<i>Flaming&nbsp;Clawed&nbsp;Katar</i>") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Quest",		779, 2228, "Stogg", "25Exp + Krona per <i>Rabbit Fur</i>.") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Armor",	786, 2239, "Powerband Trader", "<b><u>Sells Powerbands</u>:</b>"
																+"<br><i>Glass&nbsp;of&nbsp;Water</i>"
																+",<br>L1,5,10,15,20,25,30:&nbsp;<i>Powerbands</i>") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Magic|Light",	810, 2161, "Light Mage", "<b><u>Sells Scrolls</u>:</b><br>Level 1 Light Spells") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Weapon",	805, 2179, "Macery|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Weapon",	829, 2268, "Spike|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Weapon",	840, 2285, "Artaxerces", "<b><u>Sells Axes</u>:</b>"
																+"<br>L0:&nbsp;<i>Stone</i> (DH)"
																+",<br>L5:&nbsp;<i>Orcen</i>"
																+",<br>L10:&nbsp;<i>Branch&nbsp;Breaker</i> (DH)"
																+",<br>L15:&nbsp;<i>Ice&nbsp;Breaker</i> (DH)"
																+",<br>L20:&nbsp;<i>Blood&nbsp;Drinker</i> (DH)"
																+",<br>L25:&nbsp;<i>Mangler</i> (DH)"
																+",<br>L30:&nbsp;<i>Skull&nbsp;Crusher</i> (DH)") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Armor",	841, 2255, "gulamok|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Pets|Pig",	855, 2182, "Pig Trader|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Weapon",	855, 2162, "Wanda|1") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Ammo",	861, 2155, "Charges", "<b><u>Sells Wand Charges</u>:</b>"
															+"<br>L0:&nbsp;<i>Fire&nbsp;Ball</i>"
															+",<br>L0:&nbsp;<i>Ice</i>"
															+",<br>L0:&nbsp;<i>Lightning</i>"
															+",<br>L0:&nbsp;<i>Water</i>"
															+",<br>L0:&nbsp;<i>Tornado</i>"
															+",<br>L0:&nbsp;<i>Blunt</i>"
															+",<br>L0:&nbsp;<i>Bladed</i>"
															+",<br>L0:&nbsp;<i>Piercing</i>"
															+",<br>L0:&nbsp;<i>Crushing</i>") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Ammo",	917, 2195, "Arrow Trader|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Ammo",	935, 2212, "Forkwar|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Weapon",	943, 2199, "Barbied", "<b><u>Sells CrossBows</u>:</b>"
															+"<br>L0:&nbsp;<i>Beginner's</i>"
															+",<br>L5:&nbsp;<i>Worn</i>"
															+",<br>L10:&nbsp;<i>Crossbow</i>"
															+",<br>L15:&nbsp;<i>King&nbsp;Dave's</i>"
															+",<br>L20:&nbsp;<i>Pine</i>"
															+",<br>L25:&nbsp;<i>Archer's</i>"
															+",<br>L30:&nbsp;<i>Light&nbsp;Wood</i>"
															+",<br>L35:&nbsp;<i>Moon</i>") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Armor",	959, 2241, "Fulleath", "<b><u>Sells Armory</u>:</b>"
															+"<br>L15:&nbsp;<i>Full&nbsp;Soft&nbsp;Leather</i>"
															+",<br>L25:&nbsp;<i>Full&nbsp;Hard&nbsp;Leather</i>") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Armor",	976, 2231, "TriHelm", "<b><u>Sells Helms</u>:</b>"
															+"<br><b>Triderian male only</b>"
															+"<br>L0:&nbsp;<i>Chain</i>"
															+",<br>L0:&nbsp;<i>Sturdy&nbsp;Chain</i>"
															+",<br>L0:&nbsp;<i>Blood&nbsp;Chain</i>"
															+",<br>L0:&nbsp;<i>Holy&nbsp;Chain</i>"
															+",<br>L0:&nbsp;<i>Kings</i>"
															+",<br>L0:&nbsp;<i>Scale</i>"
															+",<br>L0:&nbsp;<i>Green</i>") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Armor",	989, 2244, "Parleath", "<b><u>Sells Armory</u>:</b>"
															+"<br>L5:&nbsp;<i>Half&nbsp;Leather</i>"
															+",<br>L10:&nbsp;<i>&frac34;&nbsp;Leather</i>") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Magic|War",	996, 2148, "Combat Mage", "<b><u>Sells Scrolls</u>:</b>"
																+"<br>L1,5,10,15:&nbsp;<i>Soul&nbsp;Vortex</i>"
																+",<br>L1,5,10,15:&nbsp;<i>Punishing&nbsp;Light</i>"
																+",<br>L1,5,10,15:&nbsp;<i>Natures&nbsp;Curse</i>"
																+",<br>L1,5,10:&nbsp;<i>Pain</i>") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Misc",	1029, 2196, "Magic Trader", "<b><u>Sells Magic Items</u>:</b>"
																+"<br><i>Strength&nbsp;Stone</i> (Lesser,Greater)"
																+",<br><i>Jump&nbsp;Stone</i> (Lesser,Greater)"
																+",<br><i>Speed&nbsp;Stone</i> (Lesser,Greater)"
																+",<br><i>HP&nbsp;Delay&nbsp;Enhancing&nbsp;Neclace</i> (Lesser,Greater)") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Armor",	1031, 2212, "Old Stud", "<b><u>Sells Armory</u>:</b>"
															+"<br>L30:&nbsp;<i>Studed Leather</i>"
															+",<br>L35:&nbsp;<i>Old&nbsp;Chain</i>") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Food",	1061, 2195, "Butcher|0") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Food",	1241, 2549, "Voramot", "<b><u>Sells Food</u>:</b>"
															+"<br><i>Orange</i>"
															+",<br><i>Pear</i>"
															+",<br>Roasted <i>Pork</i>"
															+",<br>Roasted <i>Beef</i>"
															+",<br>Red <i>Apple</i>"
															+",<br><i>Tomato</i>"
															+",<br><i>Garlic</i>"
															+",<br><i>Banana</i>"
															+",<br><i>White&nbsp;Whine</i>"
															+",<br><i>Beer</i>"
															+",<br><i>Glass&nbsp;of&nbsp;water</i>") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Magic|Light",	1530, 2561, "Light Mage", "<b><u>Sells Scrolls</u>:</b><br>Level 2 Light Spells") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Vendor|Magic|Light",	1550, 2560, "Light Mage", "<b><u>Sells Scrolls</u>:</b><br>Level 3 Light Spells") );
	//	Monsters
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Monster",	1259, 654, "Gartos|1") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Monster",	1259, 654, "Gartos|2") );
	Universe.planet("Glandatoo").map("Lilaci City").add( new Mark("NPC|Monster",	1259, 654, "Gartos|3") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Glandatoo").map("Lilaci City").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 9951;
