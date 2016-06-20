/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Pet

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
	Items.add( new ItemType(null, "", "Pet", null, "Invent", 0.0, 0.00, 0.00, false, 5, true, "", "", "Starts with: ?HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF", "") );
	*/
	Items.add( new ItemType(null, "Archer Henchmen", "Pet", null, "Invent", 0.0, 0.00, 4000.00, false, 5, false, null, null, "Starts with: ?HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF<br>An Archer who will fight by your side.") );
	Items.add( new ItemType(null, "Chicken", "Pet", null, "Invent", 0.0, 0.00, 150.00, false, 5, true, "", "", "Starts with: ?HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF<br>A Pet Chicken.") );
	Items.add( new ItemType(null, "Cow", "Pet", null, "Invent", 0.0, 0.00, 800.00, false, 5, true, "", "", "Starts with: ?HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF<br>A pet Cow.") );
	Items.add( new ItemType(null, "Demon", "Pet", null, "Invent", 0.0, 0.00, 0.00, false, 5, true, "", "", "Starts with: ?HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF", "") );
	Items.add( new ItemType(null, "Gagga (Blue)", "Pet", null, "Invent", 0.0, 0.00, 400.00, false, 5, true, "Piercing", "Magical", "Starts with: 10HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF<br>Non-hostile creature that will play an important role later on. Keep them around or not?") );
	Items.add( new ItemType(null, "Horse (Black)", "Pet", null, "Invent", 0.0, 0.00, 1000.00, false, 5, false, "Fire,Water", "Poison,Acid", "Starts with: ?HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF<br>This horse is as good as a guard dog. You can train it to attack your enemies. He'll even fight monsters for you.", "Human,Paladrone") );
	Items.add( new ItemType(null, "Horse (Brown)", "Pet", null, "Invent", 0.0, 0.00, 1000.00, false, 5, false, "Fire,Water", "Poison,Acid", "Starts with: ?HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF<br>This pet horse is as good as a guard dog. You can train him to attack your enemies. He'll even fight monsters for you.", "Human,Paladrone") );
	Items.add( new ItemType(null, "Horse (White)", "Pet", null, "Invent", 0.0, 0.00, 1000.00, false, 5, false, "Fire,Water", "Poison,Acid", "Starts with: ?HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF<br>This pet horse is as good as a guard dog. You can train him to attack your enemies. He'll even help you fight monsters.", "Human,Paladrone") );
	Items.add( new ItemType(null, "Night Mare", "Pet", null, "Invent", 0.0, 0.00, 3500.00, false, 5, false, null, "Ice", "Starts with: ?HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF<br>Your very own pet Night Mare. Attack with your pet and gain him experience!!", "Human,Paladrone") );
	Items.add( new ItemType(null, "Pig", "Pet", null, "Invent", 0.0, 0.00, 300.00, false, 5, true, "", "", "Starts with: ?HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF") );
	Items.add( new ItemType(null, "Racing Spider", "Pet", null, "Invent", 0, 1.00, 20000.00, false, 5, false, "Acid,Crushing", "Energy,Bluntness", "Starts with: 131HP, 12ATK, ?DEF<br>Gains per level: +28HP, +2ATK, +?DEF", "Altrog") );
	Items.add( new ItemType(null, "War Horse", "Pet", null, "Invent", 0, 0, 7000.00, false, 5, false, null, "Bluntness,Sharpness,Piercing", "Starts with: ?HP, ?ATK, ?DEF<br>Gains per level: +?HP, +?ATK, +?DEF", "Human,Paladrone") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 4475;
