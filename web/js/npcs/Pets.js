/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Pets

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
	NPCs.add( new NPCType("Baltor", 0, "Take extra care of your pet, ya hear?") );
	NPCs.get().addItem("Gagga (Blue)");
	NPCs.add( new NPCType("Chicken Trader", 0, "Take extra care of your pet, ya hear?") );
	NPCs.get().addItem("Chicken");
	NPCs.add( new NPCType("Cow Trader", 0, "Take extra care of your pet, ya hear?") );
	NPCs.get().addItem("Cow");
	NPCs.add( new NPCType("Demon Trader", 0, "Take extra care of your pet, ya hear?") );
	NPCs.get().addItem("Demon");
	NPCs.add( new NPCType("Horse Breeder", 0, "Take extra care of your pet, ya hear?") );
	NPCs.get().addItem("Horse (Black)");
	NPCs.get().addItem("Horse (Brown)");
	NPCs.get().addItem("Horse (White)");
	NPCs.add( new NPCType("Landric", 0, "Take extra care of your pet, ya hear?") );
	NPCs.get().addItem("War Horse");
	NPCs.get().addItem("Wooden Arrow");
	NPCs.add( new NPCType("Pig Trader", 0, "Take extra care of your pet, ya hear?") );
	NPCs.get().addItem("Pig");
	NPCs.add( new NPCType("Spitus", 0, "Take extra care of your pet, ya hear?") );
	NPCs.get().addItem("Racing Spider");
	NPCs.add( new NPCType("Taralynn", 0, "Take extra care of your pet, ya hear?") );
	NPCs.get().addItem("Night Mare");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2343;
