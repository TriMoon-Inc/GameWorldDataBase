/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Clawtor

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
	NPCs.add( new NPCType("Clawtor", 0, "Daggers for level 45-130") );
	NPCs.get().addItem("Dark Clawed Katar");
	NPCs.get().addItem("Flaming Clawed Katar");
	NPCs.get().addItem("Polar Clawed Katar");
	NPCs.get().addItem("Poison Clawed Katar");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1429;
