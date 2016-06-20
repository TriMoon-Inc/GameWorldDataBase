/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Macery

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
	NPCs.add( new NPCType("Macery", 0, "Maces for level 1-70") );
	NPCs.get().addItem("Old Mace");
	NPCs.get().addItem("Brass Mace");
	NPCs.get().addItem("Iron Mace");
	NPCs.get().addItem("Orcen Mace");
	NPCs.get().addItem("Pain Maker");
	NPCs.get().addItem("Worn Scepter");
	NPCs.get().addItem("Decorative Brass Mace");
	NPCs.get().addItem("Basher");
	NPCs.get().addItem("Reinforced Brass Mace");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1581;
