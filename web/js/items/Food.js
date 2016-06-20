/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Food

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
	Items.add( new ItemType(null, "", "Food", null, "Invent", 0.0, 0.00, 0.00, true, 10, true, null, null, "") );
	*/
	Items.add( new ItemType(null, "Banana", "Food", null, "Invent", 10.0, 0.03, 1.25, true, 10, true, null, null, "A Banana.") );
	Items.add( new ItemType(null, "Beer", "Drink", null, "Invent", 7.0, 0.05, 1.00, true, 50, true, null, null, "Nice nottle of beer<br>Be carefull, its alcoholic (@4% vol).") );
	Items.add( new ItemType(null, "Eggs (Un-Prepared)", "Food", null, "Invent", 5.0, 0.00, 1.00, false, 5, false, null, null) );
	Items.add( new ItemType(null, "Eggs (Prepared)", "Food", null, "Invent", 10.0, 0.00, 1.00, false, 5, false, null, null) );
	Items.add( new ItemType(null, "Garlic", "Food", null, "Invent", 0.1, 0.02, 0.10, true, 10, true, null, null, "Garlic.") );
	Items.add( new ItemType(null, "Giant Spider Meat", "Food", null, "Invent", 20.0, 0.05, 8.00, true, 100, true, null, null, "If you're desperate, you could cook this up. Dont know how tasty it will be.") );
	Items.add( new ItemType(null, "Glass of Water", "Drink", null, "Invent", 5.0, 0.02, 0.50, true, 20, true, null, null, "A small glass of water.") );
	Items.add( new ItemType(null, "Larvae Skin", "Food", null, "Invent", 10.0, 0.25, 1.00, true, 100, true, null, null, "A piece of Larvae skin.") );
	Items.add( new ItemType(null, "Orange", "Food", null, "Invent", 5.0, 0.03, 1.00, true, 10, true, null, null, "A piece of Fruit.") );
	Items.add( new ItemType(null, "Pear", "Food", null, "Invent", 7.0, 0.03, 1.50, true, 10, true, null, null, "A piece of Fruit.") );
	Items.add( new ItemType(null, "Raw Beef (Un-Prepared)", "Food", null, "Invent", 25.0, 0.02, 4.25, false, 10, true, null, null, "Some Raw Neef.") );
	Items.add( new ItemType(null, "Raw Beef (Prepared)", "Food", null, "Invent", 50.0, 0.02, 4.46, false, 10, true, null, null, "Some Raw Neef.") );
	Items.add( new ItemType(null, "Raw Chicken (Un-Prepared)", "Food", null, "Invent", 12.0, 0.02, 2.75, false, 10, true, null, null, "Some Raw Chicken.") );
	Items.add( new ItemType(null, "Raw Chicken (Prepared)", "Food", null, "Invent", 24.0, 0.02, 2.88, false, 10, true, null, null, "Some Raw Chicken.") );
	Items.add( new ItemType(null, "Raw Fish (Un-Prepared)", "Food", null, "Invent", 16.0, 0.02, 3.25, false, 10, true, null, null, "Some Raw Fish.") );
	Items.add( new ItemType(null, "Raw Fish (Prepared)", "Food", null, "Invent", 32.0, 0.02, 0, false, 10, true, null, null, "Some Raw Fish.") );
	Items.add( new ItemType(null, "Raw Pork (Un-Prepared)", "Food", null, "Invent", 20.0, 0.02, 3.75, false, 10, true, null, null, "Some Raw Pork.") );
	Items.add( new ItemType(null, "Raw Pork (Prepared)", "Food", null, "Invent", 40.0, 0.02, 0, false, 10, true, null, null, "Some Raw Pork.") );
	Items.add( new ItemType(null, "Raw Shrimp (Un-Prepared)", "Food", null, "Invent", 7.5, 0.01, 2.25, false, 10, true, null, null, "Some Raw Shrimp.") );
	Items.add( new ItemType(null, "Raw Shrimp (Prepared)", "Food", null, "Invent", 15.0, 0.01, 0, false, 10, true, null, null, "Some Raw Shrimp.") );
	Items.add( new ItemType(null, "Red Apple", "Food", null, "Invent", 2.5, 0.03, 0.50, true, 10, true, null, null, "A Red Apple.") );
	Items.add( new ItemType(null, "Roasted Beef", "Food", null, "Invent", 32.0, 0.05, 6.00, true, 10, true, null, null, "A piece of Roasted Beef.") );
	Items.add( new ItemType(null, "Roasted Pork", "Food", null, "Invent", 16.0, 0.05, 3.00, true, 10, true, null, null, "A piece of Roasted Pork.") );
	Items.add( new ItemType(null, "Spider Meat", "Food", null, "Invent", 15.0, 0.05, 4.00, true, 100, true, null, null, "If you're desperate, you could cook this up. Dont know how tasty it will be.") );
	Items.add( new ItemType(null, "Tomato", "Food", null, "Invent", 1.25, 0.03, 0.25, true, 10, true, null, null, "A Rope Tomato.") );
	Items.add( new ItemType(null, "White Wine", "Drink", null, "Invent", 10.0, 0.04, 2.00, true, 20, true, null, null, "A glass of white wine. Keep one handy, you may want to party a little here and there. (Alcoholic @8% vol).") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 5239;
