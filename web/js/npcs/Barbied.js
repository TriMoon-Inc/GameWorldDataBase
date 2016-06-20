/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Barbied

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
	NPCs.add( new NPCType("Barbied", 0, "CrossBow&acute;s for level 1-35") );
	NPCs.get().addItem("Beginner's Crossbow");
	NPCs.get().addItem("Worn Crossbow");
	NPCs.get().addItem("Crossbow");
	NPCs.get().addItem("King Dave's Crossbow");
	NPCs.get().addItem("Pine Crossbow");
	NPCs.get().addItem("Archer's Crossbow");
	NPCs.get().addItem("Light Wood Crossbow");
	NPCs.get().addItem("Moon Crossbow");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1578;
