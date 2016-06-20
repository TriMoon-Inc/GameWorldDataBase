/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Spike

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
	NPCs.add( new NPCType("Spike", 0, "Clubs &amp; Hammers for level 1-35") );
	NPCs.get().addItem("Iron Hammer");
	NPCs.get().addItem("Brass Hammer");
	NPCs.get().addItem("Spiked Club");
	NPCs.get().addItem("Copper Hammer");
	NPCs.get().addItem("Reinforced Spiked Club");
	NPCs.get().addItem("Spiked Blood Club");
	NPCs.get().addItem("Spiked Victory Club");
	NPCs.get().addItem("Valtor's Hammer");
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
