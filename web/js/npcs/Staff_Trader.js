/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Staff Trader

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
	NPCs.add( new NPCType("Staff Trader", 0, "Staffs for level 0-35") );
	NPCs.get().addItem("Pine Wood Staff");
	NPCs.get().addItem("Dead Wood Staff");
	NPCs.get().addItem("Fine Oak Staff");
	NPCs.get().addItem("Willow Wood Staff");
	NPCs.get().addItem("Frail Wood Staff");
	NPCs.get().addItem("Walking Staff");
	NPCs.get().addItem("Ceremonial Staff");
	NPCs.get().addItem("Rugged Staff");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1580;
