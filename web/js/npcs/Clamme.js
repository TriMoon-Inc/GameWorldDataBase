/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Clamme

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
	NPCs.add( new NPCType("Clamme", 0, "Hammers for level 40-80") );
	NPCs.get().addItem("Hammer of Might");
	NPCs.get().addItem("Death Warrant");
	NPCs.get().addItem("Knights Bow");
	NPCs.get().addItem("Spine Crusher");
	NPCs.get().addItem("Royal Spiked Club");
	NPCs.get().addItem("Ice Mallet");
	NPCs.get().addItem("Brass War Hammer");
	NPCs.get().addItem("Iron War Hammer");
	NPCs.get().addItem("Midnight Mallet");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1602;
