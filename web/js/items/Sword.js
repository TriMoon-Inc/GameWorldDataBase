/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items: Sword

	Contributed by:
	2005/01/21	TriMoon (Initial-data and awk script)
	2005/01/21	Liz&Cap (Dev.team item-info)
	2005/01/23	Auto-Generated using GNU awk
	2005/01/23	TriMoon (Hand Edited)

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
	Items.add( new ItemType(0, "", "Weapon", "Sword", "Any Hand", 0.0, 0.00, 0.00, false, 5, true, "Sharpness", null, "") );
	*/
//	Iron Sword
	Items.add( new ItemType(1, "Iron Sword", "Weapon", "Sword", "Any Hand", 1.6, 0.75, 250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(10, "Greater Iron Sword", "Weapon", "Sword", "Any Hand", 7.2, 0.75, 125.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(20, "Superior Iron Sword", "Weapon", "Sword", "Any Hand", 13.5, 0.75, 125.00, false, 5, true, "Sharpness", null, "A beginner's best friend, this sword is lightweight and easy to learn to use. It doesn't take much practice to become good.") );
//	Stone Sword
	Items.add( new ItemType(5, "Stone Sword", "Weapon", "Sword", "Any Hand", 4.1, 0.75, 1250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(15, "Greater Stone Sword", "Weapon", "Sword", "Any Hand", 10.4, 0.75, 625.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(25, "Superior Stone Sword", "Weapon", "Sword", "Any Hand", 16.6, 0.75, 625.00, false, 5, true, "Sharpness", null, "") );
//	Sword of Noth
	Items.add( new ItemType(10, "Sword of Noth", "Weapon", "Sword", "Any Hand", 7.2, 1.00, 2500.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(20, "Greater Sword of Noth", "Weapon", "Sword", "Any Hand", 13.5, 1.00, 1250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(30, "Superior Sword of Noth", "Weapon", "Sword", "Any Hand", 75.0, 1.00, 1250.00, false, 5, true, "Sharpness", null, "") );
//	Crystal Sword
	Items.add( new ItemType(15, "Crystal Sword", "Weapon", "Sword", "Any Hand", 10.4, 1.00, 3750.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(25, "Greater Crystal Sword", "Weapon", "Sword", "Any Hand", 62.5, 1.00, 1875.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(35, "Superior Crystal Sword", "Weapon", "Sword", "Any Hand", 87.5, 1.00, 1875.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(185, "Mystic Crystal Sword", "Weapon", "Sword", "Any Hand", 116.6, 0.00, 46250.00, false, 5, true, "Sharpness", null, "") );
//	Solaris
	Items.add( new ItemType(20, "Solaris", "Weapon", "Sword", "Both Hand", 19.8, 1.25, 7500.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(30, "Greater Solaris", "Weapon", "Sword", "Both Hand", 29.1, 0.00, 3750.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(40, "Superior Solaris", "Weapon", "Sword", "Both Hand", 38.5, 0.00, 3750.00, false, 5, true, "Sharpness", null, "") );
//	Merr Blade
	Items.add( new ItemType(25, "Merr Blade", "Weapon", "Sword", "Any Hand", 62.5, 1.25, 6250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(25, "Cursed  Merr Blade of Greater Fire", "Weapon", "Sword", "Any Hand", 62.5, 1.25, 3125.00, false, 5, true, "Sharpness,Fire", null, "") );
	Items.add( new ItemType(25, "Cursed  Merr Blade of Greater Ice", "Weapon", "Sword", "Any Hand", 16.6, 1.25, 3125.00, false, 5, true, "Sharpness,Ice", null, "") );
	Items.add( new ItemType(28, "Merr Blade of Lesser Energy", "Weapon", "Sword", "Any Hand", 70.0, 1.25, 3125.00, false, 5, true, "Sharpness,Energy", null, "") );
	Items.add( new ItemType(28, "Merr Blade of Lesser Fire", "Weapon", "Sword", "Any Hand", 70.0, 1.25, 3125.00, false, 5, true, "Sharpness,Fire", null, "") );
	Items.add( new ItemType(28, "Merr Blade of Lesser Ice", "Weapon", "Sword", "Any Hand", 70.0, 1.25, 3125.00, false, 5, true, "Sharpness,Ice", null, "") );
	Items.add( new ItemType(28, "Merr Blade of Lesser Water", "Weapon", "Sword", "Any Hand", 70.0, 1.25, 3125.00, false, 5, true, "Sharpness,Water", null, "") );
	Items.add( new ItemType(28, "Merr Blade of Lesser Wind", "Weapon", "Sword", "Any Hand", 70.0, 1.25, 3125.00, false, 5, true, "Sharpness,Wind", null, "") );
	Items.add( new ItemType(31, "Merr Blade of Energy", "Weapon", "Sword", "Any Hand", 77.5, 1.25, 3125.00, false, 5, true, "Sharpness,Energy", null, "") );
	Items.add( new ItemType(31, "Merr Blade of Fire", "Weapon", "Sword", "Any Hand", 77.5, 1.25, 3125.00, false, 5, true, "Sharpness,Fire", null, "") );
	Items.add( new ItemType(31, "Merr Blade of Ice", "Weapon", "Sword", "Any Hand", 77.5, 1.25, 3125.00, false, 5, true, "Sharpness,Ice", null, "") );
	Items.add( new ItemType(31, "Merr Blade of Water", "Weapon", "Sword", "Any Hand", 77.5, 1.25, 3125.00, false, 5, true, "Sharpness,Water", null, "") );
	Items.add( new ItemType(31, "Merr Blade of Wind", "Weapon", "Sword", "Any Hand", 77.5, 1.25, 3125.00, false, 5, true, "Sharpness,Wind", null, "") );
	Items.add( new ItemType(33, "Merr Blade of Defense", "Weapon", "Sword", "Any Hand", 82.5, 1.25, 3125.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(33, "Merr Blade of Jumping", "Weapon", "Sword", "Any Hand", 82.5, 1.25, 3125.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(33, "Merr Blade of Speed", "Weapon", "Sword", "Any Hand", 82.5, 1.25, 3125.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(35, "Greater Merr Blade", "Weapon", "Sword", "Any Hand", 87.5, 1.25, 3125.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(45, "Superior Merr Blade", "Weapon", "Sword", "Any Hand", 112.5, 1.25, 3125.00, false, 5, true, "Sharpness", null, "") );
//	Sapphire Blade
	Items.add( new ItemType(30, "Sapphire Blade", "Weapon", "Sword", "Any Hand", 19.8, 1.50, 7500.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(38, "Greater Sapphire Blade", "Weapon", "Sword", "Any Hand", 95.0, 1.50, 3750.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(46, "Superior Sapphire Blade", "Weapon", "Sword", "Any Hand", 115.0, 1.50, 3750.00, false, 5, true, "Sharpness", null, "") );
//	Vastor's Blade
	Items.add( new ItemType(35, "Vastor's Blade", "Weapon", "Sword", "Any Hand", 22.9, 1.50, 8750.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(45, "Greater Vastor's Blade", "Weapon", "Sword", "Any Hand", 112.5, 1.50, 4375.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(55, "Superior Vastor's Blade ", "Weapon", "Sword", "Any Hand", 137.5, 1.50, 4375.00, false, 5, true, "Sharpness", null, "") );
//	Mage Slayer
	Items.add( new ItemType(40, "Mage Slayer", "Weapon", "Sword", "Any Hand", 26.0, 1.75, 10000.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(50, "Greater Mage Slayer", "Weapon", "Sword", "Any Hand", 125.0, 1.75, 5000.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(60, "Superior Mage Slayer", "Weapon", "Sword", "Any Hand", 150.0, 1.75, 5000.00, false, 5, true, "Sharpness", null, "") );
//	Spectrum Blade
	Items.add( new ItemType(45, "Spectrum Blade", "Weapon", "Sword", "Any Hand", 29.1, 1.75, 11250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(55, "Greater Spectrum Bllade", "Weapon", "Sword", "Any Hand", 137.5, 1.75, 5625.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(65, "Superior Spectrum Blade", "Weapon", "Sword", "Any Hand", 162.5, 1.75, 5625.00, false, 5, true, "Sharpness", null, "") );
//	Kraggsword
	Items.add( new ItemType(50, "Kraggsword", "Weapon", "Sword", "Both Hand", 47.9, 1.00, 18750.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(60, "Greater Kraggsword", "Weapon", "Sword", "Both Hand", 57.3, 1.00, 9375.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(70, "Superior Kraggsword", "Weapon", "Sword", "Both Hand", 66.6, 1.00, 9375.00, false, 5, true, "Sharpness", null, "") );
//	Angel Blade
	Items.add( new ItemType(55, "Angel Blade", "Weapon", "Sword", "Any Hand", 35.4, 2.00, 13750.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(65, "Greater Angel Blade", "Weapon", "Sword", "Any Hand", 162.5, 2.00, 6875.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(75, "Superior Angel Blade", "Weapon", "Sword", "Any Hand", 187.5, 2.00, 6875.00, false, 5, true, "Sharpness", null, "") );
//	Shadow Blade
	Items.add( new ItemType(60, "Shadow Blade", "Weapon", "Sword", "Any Hand", 38.5, 2.25, 15000.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(70, "Greater Shadow Blade", "Weapon", "Sword", "Any Hand", 175.0, 2.25, 7500.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(80, "Superior Shadow Blade", "Weapon", "Sword", "Any Hand", 200.0, 2.25, 7500.00, false, 5, true, "Sharpness", null, "") );
//	Sprite Blade
	Items.add( new ItemType(65, "Sprite Blade", "Weapon", "Sword", "Any Hand", 41.6, 2.25, 16250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(75, "Greater Sprite Blade", "Weapon", "Sword", "Any Hand", 187.5, 2.25, 8125.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(85, "Superior Sprite Blade", "Weapon", "Sword", "Any Hand", 212.5, 2.25, 8125.00, false, 5, true, "Sharpness", null, "") );
//	Vorpal Blade
	Items.add( new ItemType(75, "Vorpal Blade", "Weapon", "Sword", "Both Hand", 71.3, 2.50, 28125.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(85, "Greater Vorpal Blade", "Weapon", "Sword", "Both Hand", 80.7, 2.50, 14062.50, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(95, "Superior Vorpal Blade", "Weapon", "Sword", "Both Hand", 90.1, 2.50, 14062.50, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(175, "Flaming Vorpal Blade", "Weapon", "Sword", "Any Hand", 110.4, 5.25, 43750.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(175, "Ice Vorpal Blade", "Weapon", "Sword", "Any Hand", 110.4, 5.50, 43750.00, false, 5, true, "Sharpness", null, "") );
//	Blood Crystal Sword
	Items.add( new ItemType(80, "Blood Crystal Sword", "Weapon", "Sword", "Any Hand", 51.0, 1.50, 20000.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(90, "Greater Blood Crystal Sword", "Weapon", "Sword", "Any Hand", 225.0, 2.75, 10000.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(100, "Superior Blood Crystal Sword", "Weapon", "Sword", "Any Hand", 250.0, 2.75, 10000.00, false, 5, true, "Sharpness", null, "") );
//	Glandis
	Items.add( new ItemType(85, "Glandis", "Weapon", "Sword", "Any Hand", 54.1, 2.75, 21250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(95, "Greater Glandis", "Weapon", "Sword", "Any Hand", 237.5, 2.75, 10625.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(105, "Superior Gladis ", "Weapon", "Sword", "Any Hand", 262.5, 2.75, 10625.00, false, 5, true, "Sharpness", null, "") );
//	Void Sword
	Items.add( new ItemType(90, "Void Sword", "Weapon", "Sword", "Any Hand", 57.3, 3.00, 22500.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(100, "Void Vorpal", "Weapon", "Sword", "Both Hand", 94.8, 3.25, 62500.00, false, 5, true, "Sharpness", null, "") );
//	Sprite Spinner
	Items.add( new ItemType(95, "Sprite Spinner", "Weapon", "Sword", "Any Hand", 60.4, 3.00, 23750.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(105, "Greater Sprite Spinner", "Weapon", "Sword", "Any Hand", 66.6, 3.00, 11875.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(115, "Superior Sprite Spinner", "Weapon", "Sword", "Any Hand", 72.9, 3.00, 11875.00, false, 5, true, "Sharpness", null, "") );
//	Chill Bringer
	Items.add( new ItemType(105, "Chill Bringer", "Weapon", "Sword", "Both Hand", 99.4, 3.25, 26250.00, false, 5, true, "Sharpness", null, "") );
//	Warriors Sword
	Items.add( new ItemType(110, "Warriors Sword", "Weapon", "Sword", "Any Hand", 69.8, 3.00, 27500.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(115, "2- handed Warriors Sword", "Weapon", "Sword", "Both Hand", 108.8, 3.50, 28750.00, false, 5, true, "Sharpness", null, "") );
//	Leech Blade
	Items.add( new ItemType(125, "Leech Blade", "Weapon", "Sword", "Any Hand", 79.1, 3.75, 31250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(135, "Greater Leech Blade", "Weapon", "Sword", "Any Hand", 85.4, 3.75, 15625.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(145, "Superior Leech Blade", "Weapon", "Sword", "Any Hand", 91.6, 3.75, 15625.00, false, 5, true, "Sharpness", null, "") );
//	Knights Sword
	Items.add( new ItemType(130, "Knights Sword", "Weapon", "Sword", "Any Hand", 82.3, 4.00, 32500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(135, "2 handed knights sword", "Weapon", "Sword", "Both Hand", 127.6, 4.00, 33750.00, false, 5, true, null, null, "") );
//	Generals sword
	Items.add( new ItemType(150, "Generals sword", "Weapon", "Sword", "Any Hand", 94.8, 4.50, 37500.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(155, "2 handed Generals sword", "Weapon", "Sword", "Both Hand", 146.3, 4.50, 38750.00, false, 5, true, null, null, "") );
//	King's Blade
	Items.add( new ItemType(160, "King's Blade", "Weapon", "Sword", "Any Hand", 101.0, 4.75, 40000.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(165, "Greater King's Blade", "Weapon", "Sword", "Any Hand", 104.1, 4.75, 20000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(175, "Superior King's Blade", "Weapon", "Sword", "Any Hand", 110.4, 5.00, 20000.00, false, 5, true, null, null, "") );
//	Bone Blade
	Items.add( new ItemType(185, "Bone Blade", "Weapon", "Sword", "Any Hand", 116.6, 0.00, 46250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(195, "Greater Bone Blade", "Weapon", "Sword", "Any Hand", 122.9, 0.00, 23125.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(205, "Superior Bone Blade", "Weapon", "Sword", "Any Hand", 129.1, 0.00, 23125.00, false, 5, true, "Sharpness", null, "") );
//	death Blade
	Items.add( new ItemType(195, "death Blade", "Weapon", "Sword", "Any Hand", 122.9, 0.00, 48750.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(200, "2 handed death Blade", "Weapon", "Sword", "Both Hand", 188.5, 0.00, 50000.00, false, 5, true, "Sharpness", null, "") );
//	Grubtor Sword
	Items.add( new ItemType(205, "Grubtor Sword", "Weapon", "Sword", "Any Hand", 129.1, 0.00, 51250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(210, "2-handed Grubtor Sword", "Weapon", "Sword", "Both Hand", 197.9, 0.00, 52500.00, false, 5, true, "Sharpness", null, "") );
//	Double hardened Sword
	Items.add( new ItemType(215, "Double hardened Sword", "Weapon", "Sword", "Any Hand", 135.4, 0.00, 53750.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(220, "2-handed Double hardened Sword", "Weapon", "Sword", "Both Hand", 207.3, 0.00, 55000.00, false, 5, true, "Sharpness", null, "") );
//	Fallen Sword
	Items.add( new ItemType(225, "Fallen Sword", "Weapon", "Sword", "Any Hand", 141.6, 0.00, 56250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(230, "2- handed Fallen Sword", "Weapon", "Sword", "Both Hand", 216.6, 0.00, 57500.00, false, 5, true, "Sharpness", null, "") );
//	Champion's Sword
	Items.add( new ItemType(235, "Champion's Sword", "Weapon", "Sword", "Any Hand", 147.9, 0.00, 58750.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(240, "2-handed Champion's Sword", "Weapon", "Sword", "Both Hand", 226.0, 0.00, 60000.00, false, 5, true, "Sharpness", null, "") );
//	Titanium-Sword
	Items.add( new ItemType(245, "Titanium-Sword", "Weapon", "Sword", "Any Hand", 154.1, 0.00, 61250.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(250, "2-handed Titanium-Sword", "Weapon", "Sword", "Both Hand", 235.4, 0.00, 62500.00, false, 5, true, "Sharpness", null, "") );
//	Other
	Items.add( new ItemType(70, "Machete", "Weapon", "Sword", "Any Hand", 44.8, 2.50, 17500.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(120, "Hades Blade", "Weapon", "Sword", "Any Hand", 76.0, 2.25, 30000.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(140, "Dangles Sword", "Weapon", "Sword", "Any Hand", 88.5, 4.25, 35000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(145, "Tri-edge sword", "Weapon", "Sword", "Both Hand", 136.9, 4.25, 36250.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(165, "kilpers Blade", "Weapon", "Sword", "Both Hand", 155.7, 5.00, 10412.50, false, 5, true, null, null, "") );
	Items.add( new ItemType(170, "Serpent's Tongue", "Weapon", "Sword", "Both Hand", 160.4, 5.25, 42500.00, false, 5, true, "Sharpness", null, "") );
	Items.add( new ItemType(180, "Slayers Blade", "Weapon", "Sword", "Both Hand", 169.8, 5.50, 45000.00, false, 5, true, null, null, "") );
	Items.add( new ItemType(190, "Killer blade", "Weapon", "Sword", "Both Hand", 179.1, 0.00, 47500.00, false, 5, true, "Sharpness", null, "") );
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
if(gLoadScript)	gLoadScript.SizeLoaded += 18275;
