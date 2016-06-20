/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Forkwar

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
	NPCs.add( new NPCType("Forkwar", 0, "Bolts for crossbows") );
	NPCs.get().addItem("Wooden Bolt");
	NPCs.get().addItem("Iron Tipped Bolt");
	NPCs.get().addItem("Steel Tipped Bolt");
	NPCs.get().addItem("Diamond Tipped Bolt");
	NPCs.get().addItem("Blunted Wooden Bolt");
	NPCs.get().addItem("Iron Blunted Bolt");
	NPCs.get().addItem("Steel Blunted Bolt");
	NPCs.get().addItem("Diamond Blunted Bolt");
	NPCs.get().addItem("Sharpened Wooden Bolt");
	NPCs.get().addItem("Iron Sharpened Bolt");
	NPCs.get().addItem("Steel Sharpened Bolt");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1722;
