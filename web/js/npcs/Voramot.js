/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Voramot

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
	NPCs.add( new NPCType("Voramot", 0, "Food for the hungry mass") );
	NPCs.get().addItem("Orange");
	NPCs.get().addItem("Pear");
	NPCs.get().addItem("Roasted Pork");
	NPCs.get().addItem("Roasted Beef");
	NPCs.get().addItem("Red Apple");
	NPCs.get().addItem("Tomato");
	NPCs.get().addItem("Garlic");
	NPCs.get().addItem("Banana");
	NPCs.get().addItem("White Wine");
	NPCs.get().addItem("Beer");
	NPCs.get().addItem("Glass of Water");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1619;
