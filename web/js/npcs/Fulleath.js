/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Fulleath

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
	NPCs.add( new NPCType("Fulleath", 0, "Armour for level 15-25") );
	NPCs.get().addItem("Full Soft Leather Arms");
	NPCs.get().addItem("Full Soft Leather Boots");
	NPCs.get().addItem("Full Soft Leather Chest");
	NPCs.get().addItem("Full Soft Leather Legs");
	NPCs.get().addItem("Full Hard Leather Arms");
	NPCs.get().addItem("Full Hard Leather Boots");
	NPCs.get().addItem("Full Hard Leather Chest");
	NPCs.get().addItem("Full Hard Leather Legs");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1635;
