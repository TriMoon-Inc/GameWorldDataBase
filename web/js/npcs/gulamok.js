/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: gulamok

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
	NPCs.add( new NPCType("gulamok", 0, "Shields for level 0-35") );
	NPCs.get().addItem("Wooden Shield");
	NPCs.get().addItem("Reinforced Wooden Shield");
	NPCs.get().addItem("&frac34; Leather Shield");
	NPCs.get().addItem("Soft Leather Shield");
	NPCs.get().addItem("Forest Leather Shield");
	NPCs.get().addItem("Hard Leather Shield");
	NPCs.get().addItem("Studded Leather Shield");
	NPCs.get().addItem("Metal Shield");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1606;
