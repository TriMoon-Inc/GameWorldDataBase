/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Butcher

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
	NPCs.add( new NPCType("Butcher", 0, "Food for the hungry mass") );
	NPCs.get().addItem("Raw Shrimp (Un-Prepared)");
	NPCs.get().addItem("Raw Beef (Un-Prepared)");
	NPCs.get().addItem("Raw Fish (Un-Prepared)");
	NPCs.get().addItem("Raw Pork (Un-Prepared)");
	NPCs.get().addItem("Raw Chicken (Un-Prepared)");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1534;
