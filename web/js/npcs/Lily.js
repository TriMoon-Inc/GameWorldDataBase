/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Lily

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
	NPCs.add( new NPCType("Lily", 0) );
	NPCs.get().addItem("Red Blaze Helm");
	NPCs.get().addItem("Heavy Plate Arms");
	NPCs.get().addItem("Heavy Plate Boots");
	NPCs.get().addItem("Heavy Plate Chest");
	NPCs.get().addItem("Heavy Plate Legs");
	NPCs.add( new NPCType("Lily", 1, "Polearms for level 80-110") );
	NPCs.get().addItem("Bill Hook");
	NPCs.get().addItem("Bardiche");
	NPCs.get().addItem("Golden Spontoon of Lesser Earth");
	NPCs.get().addItem("Reinforced Trident");
	NPCs.get().addItem("Royal Halbert");
	NPCs.get().addItem("Vouge");
	NPCs.get().addItem("Knight's Bardiche");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1768;
