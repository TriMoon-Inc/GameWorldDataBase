/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Scroll

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
	//	ItemType(nLevel, sName, sType, sSubType, sUsa, nAtk, nWeight, nValue, bStack, nMax, bDrop, sStrong, sWeak, sDesc, sRace)
	
	/*	Templates for easy adding
	Items.add( new ItemType(0, "", "", "", "", 0.0, 0.00, 0.00, false, 0, true, "", "", "", "") );
	*/
	//	Soul Vortex
	Items.add( new ItemType(1, "Soul Vortex 1") );
	Items.add( new ItemType(5, "Soul Vortex 2") );
	Items.add( new ItemType(10, "Soul Vortex 3") );
	Items.add( new ItemType(15, "Soul Vortex 4") );
	Items.add( new ItemType(20, "Soul Vortex 5") );
	Items.add( new ItemType(25, "Soul Vortex 6") );
	Items.add( new ItemType(30, "Soul Vortex 7") );
	Items.add( new ItemType(35, "Soul Vortex 8") );
	//	Punishing Light
	Items.add( new ItemType(1, "Punishing Light 1") );
	Items.add( new ItemType(5, "Punishing Light 2") );
	Items.add( new ItemType(10, "Punishing Light 3") );
	Items.add( new ItemType(15, "Punishing Light 4") );
	Items.add( new ItemType(20, "Punishing Light 5") );
	Items.add( new ItemType(25, "Punishing Light 6") );
	Items.add( new ItemType(30, "Punishing Light 7") );
	Items.add( new ItemType(35, "Punishing Light 8") );
	//	Natures Curse
	Items.add( new ItemType(1, "Natures Curse 1") );
	Items.add( new ItemType(5, "Natures Curse 2") );
	Items.add( new ItemType(10, "Natures Curse 3") );
	Items.add( new ItemType(15, "Natures Curse 4") );
	Items.add( new ItemType(20, "Natures Curse 5") );
	Items.add( new ItemType(25, "Natures Curse 6") );
	Items.add( new ItemType(30, "Natures Curse 7") );
	Items.add( new ItemType(35, "Natures Curse 8") );
	//	Pain
	Items.add( new ItemType(1, "Pain 1") );
	Items.add( new ItemType(5, "Pain 2") );
	Items.add( new ItemType(10, "Pain 3") );
	Items.add( new ItemType(20, "Pain 5") );
	Items.add( new ItemType(25, "Pain 6") );
	Items.add( new ItemType(30, "Pain 7") );
	Items.add( new ItemType(35, "Pain 8") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2883;
