/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Artaxerces

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
	NPCs.add( new NPCType("Artaxerces", 0, "Axes for level 1-30") );
	NPCs.get().addItem("Orcen Axe");
	NPCs.get().addItem("Ice Breaker");
	NPCs.get().addItem("Skull Crusher");
	NPCs.get().addItem("Mangler");
	NPCs.get().addItem("Stone Axe");
	NPCs.get().addItem("Blood Drinker");
	NPCs.get().addItem("Branch Breaker");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1507;
