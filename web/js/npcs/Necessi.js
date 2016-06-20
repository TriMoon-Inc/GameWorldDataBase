/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Necessi

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
	NPCs.add( new NPCType("Necessi", 0, "General and level 0-10 Items") );
	NPCs.get().addItem("Bladed Wand");
	NPCs.get().addItem("Blanket");
	NPCs.get().addItem("Branch Breaker");
	NPCs.get().addItem("Brass Hammer");
	NPCs.get().addItem("Brass Mace");
	NPCs.get().addItem("Campfire Kit");
	NPCs.get().addItem("Crossbow");
	NPCs.get().addItem("Dead Wood");
	NPCs.get().addItem("Dead Wood Staff");
	NPCs.get().addItem("Fine Oak Staff");
	NPCs.get().addItem("Glass of Water");
	NPCs.get().addItem("Iron Mace");
	NPCs.get().addItem("Iron Sword");
	NPCs.get().addItem("Long Bow");
	NPCs.get().addItem("Orcen Axe");
	NPCs.get().addItem("Piercing Wand");
	NPCs.get().addItem("Rusted Pitchfork");
	NPCs.get().addItem("Tarnished Halbert");
	NPCs.get().addItem("Tent");
	NPCs.get().addItem("Spiked Club");
	NPCs.get().addItem("Sword of Noth");
	NPCs.get().addItem("Wooden Arrow");
	NPCs.get().addItem("Worn Beginner's Bow");
	NPCs.get().addItem("Worn Crossbow");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2139;
