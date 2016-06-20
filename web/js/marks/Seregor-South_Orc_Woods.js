/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Seregor
	Map: South Orc Woods

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
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("Map|Building|Hut",		2734, 2425, "Hut", "Void Smith's Hut") );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("Map|Building",			2789, 2606, "Building", "Emerson's Building") );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("Map|Building",			2901, 2412, "Building", "Sonny's Building") );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("Map|Building|Village",	2795, 2401, "Village", "South Orc village") );
	//	NPC's
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("NPC|Vendor|Weapon",	2734, 2321, "Pola", "<b><u>Sells Polearms</u>:</b>"
																											+"<br>L0:&nbsp;<i>Wooden Spontoon</i>"
																											+",<br>L5:&nbsp;<i>Tarnished Halbert</i>"
																											+",<br>L10:&nbsp;<i>Rusted Pitchfork</i>"
																											+",<br>L15:&nbsp;<i>Worn Halbert</i>"
																											+",<br>L20:&nbsp;<i>Old Trident</i>"
																											+",<br>L25:&nbsp;<i>Pitchfork</i>"
																											+",<br>L30:&nbsp;<i>Corroded Spontoon</i>"
																											+",<br>L35:&nbsp;<i>Rusted Ranseur</i>"
																											) );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("NPC|Quest", 			2734, 2425, "Void Smith", "Creates <i>void armory</i> from <i>void fragments</i>.") );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("NPC|Vendor|Armor",		2760, 2441, "TriHelm", "<b><u>Sells Helms</u>:</b>"
																											+" <i>For triderians</i>"
																											+"<br>L0:&nbsp;<i>Chain Tri-Helm</i>"
																											+",<br>L0:&nbsp;<i>Sturdy Chain Tri-Helm</i>"
																											+",<br>L0:&nbsp;<i>Blood Chain Tri-Coif</i>"
																											+",<br>L0:&nbsp;<i>Holy Chain Tri-Helm</i>"
																											+",<br>L0:&nbsp;<i>Kings Tri-Helm</i>"
																											+",<br>L0:&nbsp;<i>Scale Tri-Helm</i>"
																											+",<br>L0:&nbsp;<i>Green Tri-Helm</i>"
																											) );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("NPC|Vendor|Weapon",	2763, 2422, "Chopin", "<b><u>Sells Axes</u>:</b>"
																											+"<br>L40:&nbsp;<i>Woofcutter's Delight</i>"
																											+",<br>L45:&nbsp;<i>Old War Axe</i>"
																											+",<br>L50:&nbsp;<i>Vile Axe</i>"
																											+",<br>L55:&nbsp;<i>Death Warrent</i>"
																											+",<br>L60:&nbsp;<i>Iron Axe</i>"
																											+",<br>L65:&nbsp;<i>Old Battle Axe</i>"
																											+",<br>L70:&nbsp;<i>Crumbler</i>"
																											+",<br>L75:&nbsp;<i>Emerald Axe</i>"
																											) );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("NPC|Quest", 			2789, 2606, "Emerson", "<i><u>2 pieces of fancy leather</u></i> and <i><u>3 spools of thread</u></i> plus 100Kr for ?.") );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("NPC|Vendor|Armor",		2824, 2600, "Helm Trader", "<b><u>Sells Helms</u>:</b>"
																											+"<br>L0:&nbsp;<i>Chain Mail Helm</i>"
																											+",<br>L0:&nbsp;<i>Ice Tribal Helm</i>"
																											+",<br>L0:&nbsp;<i>Green Elven Helm</i>"
																											+",<br>L0:&nbsp;<i>Fire Tribal Helm</i>"
																											+",<br>L0:&nbsp;<i>Blood Coif</i>"
																											+",<br>L0:&nbsp;<i>Gold Elven Helm</i>"
																											) );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("NPC|Quest", 			2901, 2412, "Sonny", "<i>\"They say the power of the sun heats the earth beneath the water's surface to create boiling ooze."
																													+"<br>Then the ooze shoots up from the volcano and spreads across the earth. It is as if the sun has become angry with us. If the anger of the sun is that potent, I wonder what a source it could be for forging weapons.\"</i>"
																													+"<br>You can help this NPC to prove the suns power with:"
																													+"<br><i><u>25 Wings</u></i> from <i><u>Lava Sprites</u></i> and <i><u>5 precious Gems she caries</u></i>."
																													+"<br>The npc will try to make a powerfull weapon.") );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("NPC|Vendor|Weapon",	2913, 2543, "Forkwar", "<b><u>Sells Bolts</u>: for crossbows</b>"
																											+"<br>L0:&nbsp;<i>Wooden Bolt</i>"
																											+",<br>L0:&nbsp;<i>Iron Tipped Bolt</i>"
																											+",<br>L0:&nbsp;<i>Steel Tipped Bolt</i>"
																											+",<br>L0:&nbsp;<i>Diamond Tippled Bolt</i>"
																											+",<br>L0:&nbsp;<i>Blunted Wooden Bolt</i>"
																											+",<br>L0:&nbsp;<i>Iron Blunted Bolt</i>"
																											+",<br>L0:&nbsp;<i>Steel Blunted Bolt</i>"
																											+",<br>L0:&nbsp;<i>Diamond Blunted Bolt</i>"
																											+",<br>L0:&nbsp;<i>Sharpened Wooden Bolt</i>"
																											+",<br>L0:&nbsp;<i>Iron Sharpened Bolt</i>"
																											+",<br>L0:&nbsp;<i>Steel Sharpened Bolt</i>"
																											) );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("NPC|Vendor|Weapon",	2929, 2517, "Arrow Trader", "<b><u>Sells Arrows</u>:</b>"
																											+"<br>L0:&nbsp;<i>Sharpened Wooden Arrow</i>"
																											+",<br>L0:&nbsp;<i>Wooden Arrow</i>"
																											+",<br>L0:&nbsp;<i>Blunted Wooden Arrow</i>"
																											+",<br>L11:&nbsp;<i>Iron Tipped Arrow</i>"
																											+",<br>L11:&nbsp;<i>Iron Blunted Arrow</i>"
																											+",<br>L11:&nbsp;<i>Iron Sharpened Arrow</i>"
																											+",<br>L11:&nbsp;<i>Steel Tipped Arrow</i>"
																											+",<br>L11:&nbsp;<i>Steel Sharpened Arrow</i>"
																											+",<br>L11:&nbsp;<i>Diamond Tippled Arrow</i>"
																											+",<br>L11:&nbsp;<i>Diamond Blunted Arrow</i>"
																											+",<br>L11:&nbsp;<i>Diamond Sharpened Arrow</i>"
																											+",<br>L25:&nbsp;<i>Steel Blunted Arrow</i>"
																											) );
	Universe.planet("Seregor").map("South Orc Woods").add( new Mark("NPC|Vendor|Weapon",	2950, 2496, "Sharpa", "<b><u>Sells Crossbows</u>:</b>"
																											+"<br>L40:&nbsp;<i>Emerald Crossbow</i>"
																											+",<br>L45:&nbsp;<i>Blood Crossbow</i>"
																											+",<br>L50:&nbsp;<i>Assassin Crossbow</i>"
																											+",<br>L55:&nbsp;<i>Royal Crossbow</i>"
																											+",<br>L60:&nbsp;<i>Shadow Crossbow</i>"
																											+",<br>L65:&nbsp;<i>Ruby Crossbow</i>"
																											) );
	//	Monsters
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Seregor").map("South Orc Woods").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 8510;
