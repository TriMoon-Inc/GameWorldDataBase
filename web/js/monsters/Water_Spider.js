/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Water Spider

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
	Monsters.add( new MonsterType("Water Spider", 1, 621, 0, 0, 0, 0, "", "", "") );
	Monsters.add( new MonsterType("Water Spider", 2, 828, 0, 0, 0, 0, "", "", "") );
	Monsters.add( new MonsterType("Water Spider", 3, 1035, 0, 0, 0, 0, "", "", "") );
	Monsters.get().addDrop("Greater Copper Hammer");
	Monsters.get().addDrop("Spider Web");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 1645;
