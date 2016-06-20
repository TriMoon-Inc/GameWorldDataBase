/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Items

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
	// Increase numbers for map+mark files.
	gLoadScript.ToLoad += 22;
	gLoadScript.TotalSize += 306477;
	// Create Items Array.
	Items = new Item();
	// Load Next files.
	LoadScript('js/items/Misc.js',true);
	LoadScript('js/items/Armor.js',true);
	LoadScript('js/items/Arrow.js',true);
	LoadScript('js/items/Axe.js',true);
	LoadScript('js/items/Bolt.js',true);
	LoadScript('js/items/Bow.js',true);
	LoadScript('js/items/CrossBow.js',true);
	LoadScript('js/items/Dagger.js',true);
	LoadScript('js/items/Food.js',true);
	LoadScript('js/items/Hammer.js',true);
	LoadScript('js/items/Helm.js',true);
	LoadScript('js/items/Mace.js',true);
	LoadScript('js/items/Pet.js',true);
	LoadScript('js/items/Polearm.js',true);
	LoadScript('js/items/Potion.js',true);
	LoadScript('js/items/Powerband.js',true);
	LoadScript('js/items/Scroll.js',true);
	LoadScript('js/items/Shield.js',true);
	LoadScript('js/items/Staff.js',true);
	LoadScript('js/items/Sword.js',true);
	LoadScript('js/items/Wand_Charge.js',true);
	LoadScript('js/items/Wand.js',true);
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	ShowException(e);
}
/***************************************************************************
						Load Next file.
***************************************************************************/
LoadScript('js/NPCs.js');
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 2281;
