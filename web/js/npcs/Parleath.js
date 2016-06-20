/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Parleath

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Exception handling.
***************************************************************************/
try{
/***************************************************************************
						Fill ItemTypes
***************************************************************************/
	//	NPCType(sName, nVariant, sDesc)
	
	/*	Templates for easy adding
	NPCs.add( new NPCType("", 0, "") );
	NPCs.get().addItem("");
	*/
	NPCs.add( new NPCType("Parleath", 0, "Armour for level 5-10") );
	NPCs.get().addItem("Half Leather Arms");
	NPCs.get().addItem("Half Leather Boots");
	NPCs.get().addItem("Half Leather Chest");
	NPCs.get().addItem("Half Leather Legs");
	NPCs.get().addItem("&frac34; Leather Arms");
	NPCs.get().addItem("&frac34; Leather Boots");
	NPCs.get().addItem("&frac34; Leather Chest");
	NPCs.get().addItem("&frac34; Leather Legs");
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	ShowException(e);
}
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 1610;
