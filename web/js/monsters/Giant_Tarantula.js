/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Monsters: Giant Tarantula

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
	Monsters.add( new MonsterType("Giant Tarantula", 1, 1777, 106, 0, 41, 10698, "Acid,Crushing", "Energy,Bluntness", "This archanid&acute;s teeth spew poisonous acid as he bites. Beware!") );
	Monsters.add( new MonsterType("Giant Tarantula", 2, 2353, 106, 0, 41, 14155, "Acid,Crushing", "Energy,Bluntness", "This archanid&acute;s teeth spew poisonous acid as he bites. Beware!") );
	Monsters.add( new MonsterType("Giant Tarantula", 3, 2929, 115, 0, 41, 17608, "Acid,Crushing", "Energy,Bluntness", "This archanid&acute;s teeth spew poisonous acid as he bites. Beware!") );
	Monsters.get().addDrop("Giant Spider Meat");
	Monsters.get().addDrop("Giant Spider Web");
	Monsters.get().addDrop("Gem of Iron");
	Monsters.get().addDrop("Gem of Wood");
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
if(gLoadScript)	gLoadScript.SizeLoaded += 2053;
