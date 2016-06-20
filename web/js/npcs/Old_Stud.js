/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Old Stud

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
	NPCs.add( new NPCType("Old Stud", 0, "Armour for level 30-35") );
	NPCs.get().addItem("Studded Leather Arms");
	NPCs.get().addItem("Studded Leather Boots");
	NPCs.get().addItem("Studded Leather Chest");
	NPCs.get().addItem("Studded Leather Legs");
	NPCs.get().addItem("Old Chain Arms");
	NPCs.get().addItem("Old Chain Boots");
	NPCs.get().addItem("Old Chain Chest");
	NPCs.get().addItem("Old Chain Legs");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1595;
