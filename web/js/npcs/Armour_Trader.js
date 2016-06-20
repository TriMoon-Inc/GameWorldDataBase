/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Armour Trader

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
	NPCs.add( new NPCType("Armour Trader", 0, "Armour for level 75-90") );
	NPCs.get().addItem("Green Elven Scale Arms");
	NPCs.get().addItem("Green Elven Scale Boots");
	NPCs.get().addItem("Green Elven Scale Chest");
	NPCs.get().addItem("Green Elven Scale Legs");
	NPCs.get().addItem("Blue Elven Scale Arms");
	NPCs.get().addItem("Blue Elven Scale Boots");
	NPCs.get().addItem("Blue Elven Scale Chest");
	NPCs.get().addItem("Blue Elven Scale Legs");
	NPCs.get().addItem("Gold Elven Scale Arms");
	NPCs.get().addItem("Gold Elven Scale Boots");
	NPCs.get().addItem("Gold Elven Scale Chest");
	NPCs.get().addItem("Gold Elven Scale Legs");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1827;
