/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Wanda

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
	NPCs.add( new NPCType("Wanda", 0, "Wands for level 1-35") );
	NPCs.get().addItem("Bladed Wand");
	NPCs.get().addItem("Blunt Wand");
	NPCs.get().addItem("Crushing Wand");
	NPCs.get().addItem("Fire Ball Wand");
	NPCs.get().addItem("Ice Wand");
	NPCs.get().addItem("Lightning Wand");
	NPCs.get().addItem("Piercing Wand");
	NPCs.get().addItem("Poison Wand");
	NPCs.get().addItem("Tornado Wand");
	NPCs.get().addItem("Water Wand");
	NPCs.add( new NPCType("Wanda", 1, "Wands for level 0-35") );
	NPCs.get().addItem("Bladed Wand");
	NPCs.get().addItem("Blunt Wand");
	NPCs.get().addItem("Crushing Wand");
	NPCs.get().addItem("Fire Ball Wand");
	NPCs.get().addItem("Ice Wand");
	NPCs.get().addItem("Lightning Wand");
	NPCs.get().addItem("Piercing Wand");
	NPCs.get().addItem("Poison Wand");
	NPCs.get().addItem("Water Wand");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2004;
