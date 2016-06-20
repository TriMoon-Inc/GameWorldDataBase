/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Helm

	Contributed by:
	2005/01/21	Moonshade (6 helm levels. L45,50,7590,180,180)

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
	Items.add( new ItemType(0, "", "Armor", "Helm", "Head", 0.0, 0.00, 0.00, false, 5, true, "Sharpness", null, null, "!Paladrone") );
	*/
	Items.add( new ItemType(0, "&frac34; Leather Helm", "Armor", "Helm", "Head", 2.20, 0.02, 1500.00, false, 5, true, "Sharpness", null, null, "!Paladrone") );
	Items.add( new ItemType(0, "Blood Coif", "Armor", "Helm", "Head", 7.2, 0.06, 7500.00, false, 5, true, "Sharpness,Piercing", null, "This bulky armor is sure to provide you with protection from enemies.", "!Paladrone") );
	Items.add( new ItemType(0, "Blood Helm", "Armor", "Helm", "Head", null, null, null, null, null, null, null, null, null, "Triderians") );
	Items.add( new ItemType(0, "Blue Blaze Helm", "Armor", "Helm", "Head", 19.10, 0.15, 21750.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null, null, "Triderian male") );
	Items.add( new ItemType(0, "Blue Helm", "Armor", "Helm", "Head", null, null, null, null, null, null, null, null, null, "Triderians") );
	Items.add( new ItemType(0, "Chain Tri-Helm", "Armor", "Helm", "Head", 6.00, 0.06, 6000.00, false, 5, true, "Sharpness,Piercing", null, "A steel helm that can only be worn by Triderian males.", "Triderian male") );
	Items.add( new ItemType(0, "Forest Leather Helm", "Armor", "Helm", "Head", 3.50, 0.03, 3000.00, false, 5, true, "Sharpness", null, null, "!Paladrone") );
	Items.add( new ItemType(0, "Greater Half Leather Helm", "Armor", "Helm", "Head", 2.90, 0.01, 375.00, false, 5, true, "Sharpness", null) );
	Items.add( new ItemType(0, "Greater Old Patched Leather Helm", "Armor", "Helm", "Head") );
	Items.add( new ItemType(0, "Green Blaze Helm", "Armor", "Helm", "Head", 18.50, 0.15, 21000.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null, null, "Triderian male") );
	Items.add( new ItemType(0, "Green Tri-Helm", "Armor", "Helm", "Head", 10.40, 0.09, 11250.00, false, 5, true, "Bluntness,Sharpness,Piercing", null, "A steel helm that can only be worn by Triderian males that adds 2.5 to defense.", "Triderian male") );
	Items.add( new ItemType(0, "Half Leather Helm", "Armor", "Helm", "Head", 1.60, 0.01, 750.00, false, 5, true, "Sharpness", null, null, "!Paladrone") );
	Items.add( new ItemType(0, "Hard Leather Helm", "Armor", "Helm", "Head", 4.10, 0.03, 3750.00, false, 5, true, "Sharpness", null, null, "!Paladrone") );
	Items.add( new ItemType(0, "Holy Chain Tri-Helm", "Armor", "Helm", "Head", 7.90, 0.06, 8250.00, false, 5, true, "Sharpness,Piercing", null, "A steel helm that can only be worn by Triderian males.", "Triderian male") );
	Items.add( new ItemType(0, "Kings Tri-Helm", "Armor", "Helm", "Head", 8.50, 0.06, 9000.00, false, 5, true, "Sharpness,Piercing", null, "A steel helm that can only be worn by Triderian males.", "Triderian male") );
	Items.add( new ItemType(0, "Old Chain Helm", "Armor", "Helm", "Head", 5.40, 0.03, 5250.00, false, 5, true, "Sharpness", null, null, "!Paladrone") );
	Items.add( new ItemType(0, "Old Patched Leather Helm", "Armor", "Helm", "Head", 1.10, 0.00, 150.00, false, 5, true, "Sharpness", null, null, "!Paladrone") );
	Items.add( new ItemType(0, "Red Blaze Helm", "Armor", "Helm", "Head", 17.90, 0.15, 20250.00, false, 5, true, "Bluntness,Sharpness,Piercing,Crushing", null, null, "Triderian male") );
	Items.add( new ItemType(0, "Scale Helm", "Armor", "Helm", "Head") );
	Items.add( new ItemType(0, "Scale Tri-Helm", "Armor", "Helm", "Head", 9.10, 0.09, 9750.00, false, 5, true, "Bluntness,Sharpness,Piercing", null, "A steel helm that can only be worn by Triderian males.", "Triderian male") );
	Items.add( new ItemType(0, "Soft Leather Helm", "Armor", "Helm", "Head", 2.90, 0.03, 2250.00, false, 5, true, "Sharpness", null, null, "!Paladrone") );
	Items.add( new ItemType(0, "Studded Leather Helm", "Armor", "Helm", "Head", 4.80, 0.03, 4500.00, false, 5, true, "Sharpness", null, null, "!Paladrone") );
	Items.add( new ItemType(0, "Studded Leather Helm of Poison", "Armor", "Helm", "Head") );
	Items.add( new ItemType(0, "Sturdy Chain Tri-Helm", "Armor", "Helm", "Head", 6.60, 0.06, 6750.00, false, 5, true, "Sharpness,Piercing", null, "A steel helm that can only be worn by Triderian males.", "Triderian male") );
	Items.add( new ItemType(0, "Superior Old Patched Leather Helm", "Armor", "Helm", "Head") );
	Items.add( new ItemType(45, "Chain Mail Helm", "Armor", "Helm", "Head", 6.60, 0.06, 6750.00, false, 5, true, "Sharpness,Piercing", null, null, "!Paladrone") );
	Items.add( new ItemType(50, "Blood Chain Tri-Coif", "Armor", "Helm", "Head", 7.30, 0.06, 7500.00, false, 5, true, "Sharpness,Piercing", null, "A steel helm that can only be worn by Triderian males.", "Triderian male") );
	Items.add( new ItemType(75, "Green Elven Helm", "Armor", "Helm", "Head", 18.40, 0.09, 11250.00, false, 5, true, "Bluntness,Sharpness,Piercing", null, "This bulky armor is sure to provide you with protection from enemies.", "!Paladrone") );
	Items.add( new ItemType(90, "Gold Elven Helm", "Armor", "Helm", "Head", 12.20, 0.09, 13500.00, false, 5, true, "Bluntness,Sharpness,Piercing", null, null, "!Paladrone") );
	Items.add( new ItemType(180, "Fire Tribal Helm", "Armor", "Helm", "Head", 23.50, 0.20, 27500.00, false, 5, true, "Fire,Bluntness,Sharpness,Piercing,Crushing", "Ice", null, "!Paladrone") );
	Items.add( new ItemType(180, "Ice Tribal Helm", "Armor", "Helm", "Head", 23.50, 0.20, 27000.00, false, 5, true, "Ice,Bluntness,Sharpness,Piercing,Crushing", "Fire", null, "!Paladrone") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 6714;
