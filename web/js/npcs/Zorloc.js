/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Zorloc

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
	NPCs.add( new NPCType("Zorloc", 0, "Armour for level 60-65") );
	NPCs.get().addItem("Royal Chain Armour Arms");
	NPCs.get().addItem("Royal Chain Armour Boots");
	NPCs.get().addItem("Royal Chain Armour Chest");
	NPCs.get().addItem("Royal Chain Armour Legs");
	NPCs.get().addItem("Scale Arms");
	NPCs.get().addItem("Scale Boots");
	NPCs.get().addItem("Scale Chest");
	NPCs.get().addItem("Scale Legs");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1587;
