/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Huge Wolf Spider

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
				Exception handling.
***************************************************************************/
try{
/***************************************************************************
				Fill MonsterTypes
***************************************************************************/
	//	MonsterType(sName, nLevel, nHP, nATK, nDef, nMoney, nExp, sStrong, sWeak, sDesc)
	//	Monsters.get(sName, nLevel)
	
	/*	Templates for easy adding
	Monsters.add( new MonsterType("", 1, 0, 0, 0, 0, 0, "", "", "") );
	Monsters.get().addDrop("");
	*/
	Monsters.add( new MonsterType("Huge Wolf Spider", 1, 58, 0, 0, 18, 352, "Wind,Poison", "Bluntness,Sharpness", "A bite from this arachnid can only be prevented by a blunt object.") );
	Monsters.add( new MonsterType("Huge Wolf Spider", 2, 78, 0, 0, 18, 459, "Wind,Poison", "Bluntness,Sharpness", "A bite from this arachnid can only be prevented by a blunt object.") );
	Monsters.add( new MonsterType("Huge Wolf Spider", 3, 98, 0, 0, 18, 572, "Wind,Poison", "Bluntness,Sharpness", "A bite from this arachnid can only be prevented by a blunt object.") );
	Monsters.get().addDrop("&frac34; Leather Shield");
	Monsters.get().addDrop("Gem of the Rat");
	Monsters.get().addDrop("Greater Iron Hammer");
	Monsters.get().addDrop("Greater Old Patched Leather Helm");
	Monsters.get().addDrop("Old Leather Belt");
	Monsters.get().addDrop("Spider Meat");
	Monsters.get().addDrop("Spider Web");
	Monsters.get().addDrop("Toe Ring of Wisdom");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2240;
