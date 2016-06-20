/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Powerband

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
	Items.add( new ItemType(0, "", "Armor", "Powerband", "Head", 0.0, 0.00, 0.00, false, 5, true, "", "", "", "Altrog,Paladrone") );
	*/
	Items.add( new ItemType(0, "Powerband Level 1", "Armor", "Powerband", "Head", 1.10, 0.03, 150.00, false, 5, true, "Sharpness", null, "This item is worn on the head and provides protection.", "Altrog,Paladrone") );
	Items.add( new ItemType(5, "Powerband Level 5", "Armor", "Powerband", "Head", 1.60, 0.03, 750.00, false, 5, true, "Sharpness", null, "This item is worn on the head and provides protection.", "Altrog,Paladrone") );
	Items.add( new ItemType(10, "Powerband Level 10", "Armor", "Powerband", "Head", 2.20, 0.03, 1500.00, false, 5, true, "Sharpness", null, "This item is worn on the head and provides protection.", "Altrog,Paladrone") );
	Items.add( new ItemType(15, "Powerband Level 15", "Armor", "Powerband", "Head", 2.90, 0.03, 2250.00, false, 5, true, "Sharpness", null, "This item is worn on the head and provides protection.", "Altrog,Paladrone") );
	Items.add( new ItemType(16, "Greater Powerband Level 1", "Armor", "Powerband", "Head", 2.20, 0.00, 75.00, false, 5, true, "Sharpness", null, "This item is worn on the head and provides protection.", "Altrog,Paladrone") );
	Items.add( new ItemType(16, "Superior Powerband Level 1", "Armor", "Powerband", "Head", 3.50, 0.00, 75.00, false, 5, true, "Sharpness", null, "This item is worn on the head and provides protection.", "Altrog,Paladrone") );
	Items.add( new ItemType(20, "Powerband Level 20", "Armor", "Powerband", "Head", 3.50, 0.03, 3000.00, false, 5, true, "Sharpness", null, "This item is worn on the head and provides protection.", "Altrog,Paladrone") );
	Items.add( new ItemType(25, "Powerband Level 25", "Armor", "Powerband", "Head", 4.10, 0.03, 3750.00, false, 5, true, "Earth,Sharpness", null, "This item is worn on the head and provides protection.", "Altrog,Paladrone") );
	Items.add( new ItemType(30, "Powerband Level 30", "Armor", "Powerband", "Head", 4.80, 0.00, 4500.00, false, 5, true, "Sharpness", null, "This item is worn on the head and provides protection.", "Altrog,Paladrone") );
	Items.add( new ItemType(36, "Superior Powerband Level 20", "Armor", "Powerband", "Head", 6.00, 0.03, 1500.00, false, 5, true, "Sharpness", null, "This item is worn on the head and provides protection.", "Altrog,Paladrone") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3544;
