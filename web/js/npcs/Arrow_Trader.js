/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Arrow Trader

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
	NPCs.add( new NPCType("Arrow Trader", 0, "Arrows for Bow's, Level 0-25") );
	NPCs.get().addItem("Blunted Wooden Arrow");
	NPCs.get().addItem("Iron Blunted Arrow");
	NPCs.get().addItem("Iron Sharpened Arrow");
	NPCs.get().addItem("Iron Tipped Arrow");
	NPCs.get().addItem("Diamond Blunted Arrow");
	NPCs.get().addItem("Diamond Sharpened Arrow");
	NPCs.get().addItem("Diamond Tipped Arrow");
	NPCs.get().addItem("Sharpend Wooden Arrow");
	NPCs.get().addItem("Steel Blunted Arrow");
	NPCs.get().addItem("Steel Sharpened Arrow");
	NPCs.get().addItem("Steel Tipped Arrow");
	NPCs.get().addItem("Wooden Arrow");
	NPCs.add( new NPCType("Arrow Trader", 1, "Arrows for Bow's, Level 0-20") );
	NPCs.get().addItem("Sharpend Wooden Arrow");
	NPCs.get().addItem("Wooden Arrow");
	NPCs.get().addItem("Blunted Wooden Arrow");
	NPCs.get().addItem("Fire Arrow");
	NPCs.get().addItem("Ice Arrow");
	NPCs.get().addItem("Energy Arrow");
	NPCs.get().addItem("Acid Arrow");
	NPCs.get().addItem("Water Arrow");
	NPCs.get().addItem("Magical Arrow");
	NPCs.get().addItem("Poison Arrow");
	NPCs.get().addItem("Light Arrow");
	NPCs.get().addItem("Dark Arrow");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2327;
