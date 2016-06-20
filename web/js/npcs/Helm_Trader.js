/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Helm Trader

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
	NPCs.add( new NPCType("Helm Trader", 0) );
	NPCs.get().addItem("Old Patched Leather Helm");
	NPCs.get().addItem("Half Leather Helm");
	NPCs.get().addItem("&frac34; Leather Helm");
	NPCs.get().addItem("Soft Leather Helm");
	NPCs.get().addItem("Forest Leather Helm");
	NPCs.get().addItem("Hard Leather Helm");
	NPCs.get().addItem("Studded Leather Helm");
	NPCs.get().addItem("Old Chain Helm");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1584;
