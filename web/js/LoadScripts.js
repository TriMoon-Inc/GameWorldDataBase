/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Load Scripts dynamicaly with visual representation.

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Global Variables
***************************************************************************/
gLoadScript = new LoadScriptData;
// Redirect to index page, so things dont get messed up with last '/' appendings on root URL's when search strings are used.
if(document.location.href.lastIndexOf('/') == document.location.href.length-1 )
	document.location.replace("index.html" + document.location.search.substring(0, document.location.search.length-1) );
/***************************************************************************
						Suport Functions
***************************************************************************/
function LoadScriptData(){
	this.Shown = false;
	this.Loaded = 0;
	this.ToLoad = 0;
	this.TotalSize = 0;
	this.SizeLoaded = 0;
};
function genLoadScriptVisual(){
	var oFilesBar, oBytesBar;
	var intervalID, timeoutID;
	var nWidth = 400;

	if(!gLoadScript.Shown){
		with(document){
			write('<div id="LoadScriptVisual" align="center">');
				write('Loading extra Scripts, please wait....<br/>');
				write('When loading process does not finish and stays same for long try a refresh,<br/>');
				write('because then some script files may have been updated...<br/>');
				write('<div style="text-align:left;background-color:Red;width:'+nWidth+'px;">');
					write('<div id="FilesBar" style="background-color:Green;Color:Yellow;width:0px;"></div>');
					write('<div id="BytesBar" style="background-color:Green;Color:Yellow;width:0px;"></div>');
				write('</div>');
			write('</div>');
		};
		gLoadScript.Shown = true;
		timeoutID = window.setTimeout('genLoadScriptVisual()',500);
	}else{
		// Adjust FilesBar.
		oFilesBar = document.getElementById("FilesBar");
		oFilesBar.style.width = nWidth*(gLoadScript.Loaded/gLoadScript.ToLoad) + 'px';
		oFilesBar.innerHTML = 'Files:&nbsp;' + gLoadScript.Loaded + '/' + gLoadScript.ToLoad;
		// Adjust BytesBar.
		oBytesBar = document.getElementById("BytesBar");
		oBytesBar.style.width = nWidth*(gLoadScript.SizeLoaded/gLoadScript.TotalSize) + 'px';
		oBytesBar.innerHTML = 'Bytes:&nbsp;' + gLoadScript.SizeLoaded + '/' + gLoadScript.TotalSize;
		// Recall self when not ready.
		if(
			(gLoadScript.Loaded == gLoadScript.ToLoad)
			&& (gLoadScript.SizeLoaded == gLoadScript.TotalSize)
		){
			window.clearTimeout(timeoutID);
			document.getElementById("LoadScriptVisual").style.display = "none";
			init();
		}else{
			timeoutID = window.setTimeout('genLoadScriptVisual()',500);
		};
	};
};
/*	LoadScripts	*/
function LoadScript(sURL, bDefer){
	var oDoc, oHead, oScript;
	oDoc = document.documentElement;
	oHead = oDoc.firstChild;
//	alert(oHead.innerHTML);
	if(!gLoadScript.Shown)	genLoadScriptVisual();
	oScript = document.createElement("script");
	oScript.setAttribute("src", sURL);
	oScript.setAttribute("type", "text/javascript");
	oScript.setAttribute("language", "JavaScript");
	if(bDefer)	oScript.setAttribute("defer", true);
	oHead.appendChild( oScript );
	gLoadScript.Loaded++;
};
