/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Potion

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
	//	ItemType(nLevel, sName, sType, sSubType, sUseage, nAtk, nWeight, nValue, bStack, nMax, bDrop, sStrong, sWeak, sDesc, sRace)
	
	/*	Templates for easy adding
	Items.add( new ItemType(null, "", "", null, "Invent", null, 0.00, 0.00, false, 0, true, "", "", "", "") );
	*/
	Items.add( new ItemType(null, "Jump Potion Lesser") );
	Items.add( new ItemType(null, "Jump Potion Greater") );
	Items.add( new ItemType(null, "Speed Potion Lesser") );
	Items.add( new ItemType(null, "Speed Potion Greater") );
	Items.add( new ItemType(null, "HP Boost Potion Lesser") );
	Items.add( new ItemType(null, "HP Boost Potion Greater") );
	Items.add( new ItemType(null, "Strength Potion Lesser") );
	Items.add( new ItemType(null, "Strength Potion Greater") );
	Items.add( new ItemType(null, "Avoidance Reduction Pill") );
	Items.add( new ItemType(null, "Avoidance Reduction Tablet") );
	Items.add( new ItemType(null, "Avoidance Reduction Potion", "One time use", null, "Invent", null, 1.00, 12.00, false, 15, true, null, null, "Reduces avoidance for one hour to get you power levelers a boost.") );
	Items.add( new ItemType(null, "Draconus's Netar of Life", "One time use", null, "Invent", null, 0.10, 125.00, true, 5, true, null, null, "Draconus's Netar is good to the very last drop, this nexctar is time delayed......but when it kicks in..man does it feel good.") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2405;
