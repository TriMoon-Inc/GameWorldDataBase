/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Cam'Dar

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
	NPCs.add( new NPCType("Cam'Dar", 0, "Armour for level 50-55") );
	NPCs.get().addItem("Blood Chain Mail Arms");
	NPCs.get().addItem("Blood Chain Mail Boots");
	NPCs.get().addItem("Blood Chain Mail Chest");
	NPCs.get().addItem("Blood Chain Mail Legs");
	NPCs.get().addItem("Holy Chain Mail Arms");
	NPCs.get().addItem("Holy Chain Mail Boots");
	NPCs.get().addItem("Holy Chain Mail Chest");
	NPCs.get().addItem("Holy Chain Mail Legs");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1621;
