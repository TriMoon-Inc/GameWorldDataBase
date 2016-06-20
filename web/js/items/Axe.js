/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Axe

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
	Items.add( new ItemType(0, "", "Weapon", "Axe", "Any Hand", 0.0, 0.00, 0.00, false, 5, true, "Sharpness,Crushing", null, "") );
	*/
	Items.add( new ItemType(1, "Stone Axe", "Weapon", "Axe", "Both Hand", 1.90, 0.90, 375.00, false, 5, true, "Sharpness,Crushing", null, "An axe made from stone.") );
	Items.add( new ItemType(5, "Orcen Axe", "Weapon", "Axe", "Any Hand", 4.10, 0.90, 1250.00, false, 5, true, "Sharpness", null, "An Orcen blacksmith forged this Axe. If you are strong enough to wield this weapon, you could easily pulverize your enemy with half a blow.") );
	Items.add( new ItemType(10, "Branch Breaker", "Weapon", "Axe", "Both Hand", 10.40, 1.25, 3750.00, false, 5, true, "Sharpness,Crushing", null) );
	Items.add( new ItemType(15, "Ice Breaker", "Weapon", "Axe", "Both Hand", 15.10, 1.25, 5625.00, false, 5, true, "Ice,Sharpness,Piercing,Crushing", "Fire", "This is an axe worth having.") );
	Items.add( new ItemType(20, "Blood Drinker", "Weapon", "Axe", "Both Hand", 19.80, 1.80, 7500.00, false, 5, true, "Sharpness,Crushing", null, "Stained with the blood of its past victims, this axe is thirsty for more.") );
	Items.add( new ItemType(25, "Mangler", "Weapon", "Axe", "Both Hand", 24.40, 1.60, 9375.00, false, 5, true, "Sharpness,Piercing,Crushing", null, "Your foes will be unrecognizable after you use this axe.") );
	Items.add( new ItemType(30, "Skull Crusher", "Weapon", "Axe", "Both Hand", 29.10, 1.95, 11250.00, false, 5, true, "Sharpness,Piercing,Crushing", null, "Bash their bloody brains in.") );
	Items.add( new ItemType(36, "Skull Crusher of Poison", "Weapon", "Axe", "Both Hand", 29.10, 6.75, 5625.00, false, 5, true, "Poison,Sharpness,Piercing,Crushing", null, "Bash their bloody brains in with this axe that does Crush and Pierce damage.") );
	Items.add( new ItemType(40, "Woofcutter's Delight", "Weapon", "Axe", "Both Hand", 38.50, 2.30, 15000.00, false, 5, true, "Sharpness,Crushing", null, "An axe great for choping down trees..") );
	Items.add( new ItemType(45, "Old War Axe", "Weapon", "Axe", "Both Hand", 43.20, 2.30, 16875.00, false, 5, true, "Sharpness,Crushing", null, "An axe made from stone. Used long ago in the old wars on Seregor.") );
	Items.add( new ItemType(50, "Vile Axe", "Weapon", "Axe", "Both Hand", 47.90, 2.30, 18750.00, false, 5, true, "Poison,Sharpness,Piercing,Crushing", null, "Attack increased by 187.5.") );
	Items.add( new ItemType(55, "Death Warrant", "Weapon", "Axe", "Any Hand", 35.40, 2.30, 13750.00, false, 5, true, "Sharpness", null, "An Orcen blacksmith forged this Axe. If you are strong enough to wield this weapon, you could easily pulverize your enemy with half a blow.") );
	Items.add( new ItemType(60, "Iron Axe", "Weapon", "Axe", "Both Hand", 57.20, 2.65, 11250.00, false, 5, true, "Sharpness,Piercing,Crushing", null, "This is an axe worth having.") );
	Items.add( new ItemType(65, "Old Battle Axe", "Weapon", "Axe", "Both Hand", 61.90, 2.65, 24375.00, false, 5, true, "Sharpness,Piercing,Crushing", null) );
	Items.add( new ItemType(70, "Crumbler", "Weapon", "Axe", "Both Hand", 66.60, 3.00, 26250.00, false, 5, true, "Sharpness,Crushing", null, "Attack increased by 262.5.") );
	Items.add( new ItemType(75, "Emerald Axe", "Weapon", "Axe", "Any Hand", 47.90, 3.00, 18750.00, false, 5, true, "Sharpness", null) );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 4494;
