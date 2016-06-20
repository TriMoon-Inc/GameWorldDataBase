/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Tanus

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
	NPCs.add( new NPCType("Tanus", 0, "For level 40-120") );
	NPCs.get().addItem("Chain Mail Arms (blue and black)");
	NPCs.get().addItem("Chain Mail Arms (Purple and Black)");
	NPCs.get().addItem("Chain Mail Boots (purple)");
	NPCs.get().addItem("Chain Mail Legs (blue)");
	NPCs.get().addItem("Chain Mail Legs (Purple)");
	NPCs.get().addItem("Blood Arms");
	NPCs.get().addItem("Blood Boots");
	NPCs.get().addItem("Blood Chest");
	NPCs.get().addItem("Blood Legs");
	NPCs.get().addItem("Black Double Steel Chest");
	NPCs.add( new NPCType("Tanus", 1, "For level 100-105") );
	NPCs.get().addItem("Plate and Chain Arms");
	NPCs.get().addItem("Plate and Chain Boots");
	NPCs.get().addItem("Plate and Chain Chest");
	NPCs.get().addItem("Champion&acute;s Leg Armour");
	NPCs.get().addItem("Old Plate and Chain Arms");
	NPCs.get().addItem("Old Plate and Chain Boots");
	NPCs.get().addItem("Old Plate and Chain Chest");
	NPCs.get().addItem("Old Plate and Chain Leg Armour");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2148;
