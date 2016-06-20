/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Sword Trader

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
	NPCs.add( new NPCType("Sword Trader", 0, "Swords for level 1-35") );
	NPCs.get().addItem("Iron Sword");
	NPCs.get().addItem("Stone Sword");
	NPCs.get().addItem("Sword of Noth");
	NPCs.get().addItem("Crystal Sword");
	NPCs.get().addItem("Solaris");
	NPCs.get().addItem("Merr Blade");
	NPCs.get().addItem("Sapphire Blade");
	NPCs.get().addItem("Vastor's Blade");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1554;
