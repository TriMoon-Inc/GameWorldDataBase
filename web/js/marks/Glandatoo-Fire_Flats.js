/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Glandatoo
	Map: Fire Flats

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Exception handling.
***************************************************************************/
try{
/***************************************************************************
						Fill Map Marks.
***************************************************************************/
	/*	Templates for easy adding
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark(sType, nX, nY, sName, sDesc) );
	*/
	//	NPC's
	//	Monsters
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				572, 555, "Huge Wolf Spider|1") );
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				572, 555, "Huge Wolf Spider|2") );
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				572, 555, "Huge Wolf Spider|3") );
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				700, 950, "Night Mare|1") );
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				700, 950, "Night Mare|2") );
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				700, 950, "Night Mare|3") );
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				1283, 2106, "Lava Sprite|1") );
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				1283, 2106, "Lava Sprite|2") );
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				1283, 2106, "Lava Sprite|3") );
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				1831, 779, "Worker Wasp|1") );
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				1831, 779, "Worker Wasp|2") );
	Universe.planet("Glandatoo").map("Fire Flats").add( new Mark("NPC|Monster",				1831, 779, "Worker Wasp|3") );
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Glandatoo").map("Fire Flats").add()\n\n';
	str += e.name + ' in: ';
	if(e.message)		str += e.message;
	if(e.description)	str += e.description;
	oError = new Error(str);
	oError.name = 'ParsingError';
	ShowException(oError);
}
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 2867;
