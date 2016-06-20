/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Toxra

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
	NPCs.add( new NPCType("Toxra", 0, "Swords for level ?-?") );
	NPCs.get().addItem("Iron Sword");
	NPCs.get().addItem("Short Bow");
	NPCs.get().addItem("Wooden Arrow");
	NPCs.get().addItem("Wooden Shield");
	NPCs.get().addItem("Kraggsword");
	NPCs.get().addItem("Stone Sword");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1456;
