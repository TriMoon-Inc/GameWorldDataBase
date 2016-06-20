/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Solar System.
	Planet: Omus Prime

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Exception handling.
***************************************************************************/
try{
/***************************************************************************
						Fill Planet Maps.
***************************************************************************/
	// Templates for easy adding
	//Universe.planet("planetname").add( new Map("mapname", 5120,5120, null) );
	//Universe.planet("planetname").add( new Map("mapname", 5120,5120, "img") );
	
	// Fill Planet
	// Layout order by: Draconus.
	Universe.planet("Omus Prime").add( new Map("Omus Prime Level 2", 5120,5120, "OmusPrime_2") );
	Universe.planet("Omus Prime").add( new Map("Omus Prime Level 3", 5120,5120, "OmusPrime_3") );
	Universe.planet("Omus Prime").add( new Map("Omus Prime Level 4", 5120,5120, "OmusPrime_4") );
	Universe.planet("Omus Prime").add( new Map("Omus Prime Level 5", 5120,5120, "OmusPrime_5") );
	Universe.planet("Omus Prime").add( new Map("Omus Prime Level 1", 5120,5120, "OmusPrime_1") );
	Universe.planet("Omus Prime").add( new Map("Omus Prime Level 6", 5120,5120, "OmusPrime_6") );
	Universe.planet("Omus Prime").add( new Map("Omus Prime Level 7", 5120,5120, "OmusPrime_7") );
	Universe.planet("Omus Prime").add( new Map("Omus Prime Level 8", 5120,5120, "OmusPrime_8") );
	Universe.planet("Omus Prime").add( new Map("Omus Prime Level 9", 5120,5120, "OmusPrime_9") );
	/*
		Universe.planet("planetname").makeIMAP("img", aImageMap );
		where aImageMap is:
			Array(new ImageMapArea(), ...)
			Templates for easy adding
				,new ImageMapArea("shape",	Array(shape-coords),	"alt text")
				,new ImageMapArea("shape",	Array(shape-coords),	"alt text",	"Planet|Map")
	*/
/***************************************************************************
						Load Marks
***************************************************************************/
	// Increase numbers for mark files.
	gLoadScript.ToLoad += 0;
	gLoadScript.TotalSize += 0;
	/*	Virtual marks like City and Villages	*/
//	LoadScript('js/marks/Omus_Prime.js',true);
	/*	Load Map Marks	*/
//	LoadScript('js/marks/Omus_Prime-.js',true);
/***************************************************************************
						Exception handling.
***************************************************************************/
}
catch(e){
	var str, oError;
	str = 'Universe.planet("Omus Prime").add()\n\n';
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
if(gLoadScript)	gLoadScript.SizeLoaded += 3099;
