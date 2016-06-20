/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Potion Trader

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
	NPCs.add( new NPCType("Potion Trader", 0, "Potions to aid players") );
	NPCs.get().addItem("Jump Potion Lesser");
	NPCs.get().addItem("Jump Potion Greater");
	NPCs.get().addItem("Speed Potion Lesser");
	NPCs.get().addItem("Speed Potion Greater");
	NPCs.get().addItem("HP Boost Potion Lesser");
	NPCs.get().addItem("HP Boost Potion Greater");
	NPCs.get().addItem("Strength Potion Lesser");
	NPCs.get().addItem("Strength Potion Greater");
	NPCs.get().addItem("Avoidance Reduction Pill");
	NPCs.get().addItem("Avoidance Reduction Tablet");
	NPCs.get().addItem("Avoidance Reduction Potion");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1782;
