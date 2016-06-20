/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	NPCs

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
	gLoadScript.ToLoad += 37;
	gLoadScript.TotalSize += 65624;
	// Create Items Array.
	NPCs = new NPC();
	// Load Next files.
	LoadScript('js/npcs/Interactive.js',true);
	LoadScript('js/npcs/Pets.js',true);
	LoadScript('js/npcs/Armour_Trader.js',true);
	LoadScript('js/npcs/Arrow_Trader.js',true);
	LoadScript('js/npcs/Artaxerces.js',true);
	LoadScript('js/npcs/Bow_Trader.js',true);
	LoadScript('js/npcs/Barbied.js',true);
	LoadScript('js/npcs/Breati.js',true);
	LoadScript('js/npcs/Butcher.js',true);
	LoadScript("js/npcs/Cam'Dar.js",true);
	LoadScript('js/npcs/Clamme.js',true);
	LoadScript('js/npcs/Clawtor.js',true);
	LoadScript('js/npcs/elron.js',true);
	LoadScript('js/npcs/Forkwar.js',true);
	LoadScript('js/npcs/Fulleath.js',true);
	LoadScript('js/npcs/Furioso.js',true);
	LoadScript('js/npcs/gulamok.js',true);
	LoadScript('js/npcs/halloc.js',true);
	LoadScript('js/npcs/Helm_Trader.js',true);
	LoadScript('js/npcs/Lily.js',true);
	LoadScript('js/npcs/Macery.js',true);
	LoadScript('js/npcs/Magicos.js',true);
	LoadScript('js/npcs/Necessi.js',true);
	LoadScript('js/npcs/Old_Stud.js',true);
	LoadScript('js/npcs/Parleath.js',true);
	LoadScript('js/npcs/Patch.js',true);
	LoadScript('js/npcs/Polearm_Trader.js',true);
	LoadScript('js/npcs/Potion_Trader.js',true);
	LoadScript('js/npcs/Spheratos.js',true);
	LoadScript('js/npcs/Spike.js',true);
	LoadScript('js/npcs/Staff_Trader.js',true);
	LoadScript('js/npcs/Sword_Trader.js',true);
	LoadScript('js/npcs/Tanus.js',true);
	LoadScript('js/npcs/Toxra.js',true);
	LoadScript('js/npcs/Voramot.js',true);
	LoadScript('js/npcs/Wanda.js',true);
	LoadScript('js/npcs/Zorloc.js',true);
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
LoadScript('js/Monsters.js');
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 2925;
