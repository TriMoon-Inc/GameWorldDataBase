/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Bow Trader

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
	NPCs.add( new NPCType("Bow Trader", 0, "Bows for level 1-35") );
	NPCs.get().addItem("Short Bow");
	NPCs.get().addItem("Worn Beginner's Bow");
	NPCs.get().addItem("Long Bow");
	NPCs.get().addItem("Oak Long Bow");
	NPCs.get().addItem("Forest Bow");
	NPCs.get().addItem("Archer's Bow");
	NPCs.get().addItem("Rock Bow");
	NPCs.get().addItem("Moon Bow");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1542;
