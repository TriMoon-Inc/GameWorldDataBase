/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs: Polearm Trader

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
	NPCs.add( new NPCType("Polearm Trader", 0, "Polearms for level 0-35") );
	NPCs.get().addItem("Wooden Spontoon");
	NPCs.get().addItem("Tarnished Halbert");
	NPCs.get().addItem("Rusted Pitchfork");
	NPCs.get().addItem("Worn Halbert");
	NPCs.get().addItem("Old Trident");
	NPCs.get().addItem("PitchFork");
	NPCs.get().addItem("Corroded Spontoon");
	NPCs.get().addItem("Rusted Ranseur");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1579;
