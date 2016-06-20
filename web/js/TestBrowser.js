/*
	(C)2004 TriMoon Inc.
	Author: Tri_Moon <tripple_moon_3m@yahoo.com>
	Test Browser Capabilities.

	This work is licensed under a Creative Commons License !
	See: http://creativecommons.org/licenses/by-nc-nd/2.0/
*/
/***************************************************************************
						Global Variables
***************************************************************************/

var bDebug=false, gTestBrowser=null, CapTestResults=false;
var noDOM=false, noDOM1HTML=false, noDOM2=false, noDOM2HTML=false;
var isIE4=false, isIE5=false, isIE6=false,
	isNS4=false,
	isMoz=false,
	isFF=false, isFF09=false, isFF010=false,
	isOp=false,
	isMac=false, isMacIE=false;
/***************************************************************************
						Capabilities Testing Functions
***************************************************************************/
/*	Detection Browser	*/
function DetectionBrowser(){
	// document interface.
	if(document){
		// navigator interface.
		if(navigator){
			if(navigator.appCodeName){
				isMoz = (navigator.appCodeName.indexOf("Mozilla")!=-1) ? true : false;
			};
			if(navigator.vendor){
				isFF = (navigator.vendor.indexOf("Firefox")!=-1) ? true : false;
				isFF09 = (isFF&&(navigator.vendorSub.indexOf("0.9.")!=-1)) ? true : false;
				isFF010 = (isFF&&(navigator.vendorSub.indexOf("0.10.")!=-1)) ? true : false;
			};
			if(navigator.appVersion){
				isMac = (navigator.appVersion.indexOf("Mac")!=-1) ? true : false;
			};
			if(navigator.userAgent){
				isOp = (navigator.userAgent.indexOf("Opera")!=-1) ? true : false;
			};
		};
		if(document.all){
			// navigator interface.
			if(navigator){
				if(navigator.appVersion){
					isIE4 = ((navigator.appVersion.indexOf("MSIE 4.")!=-1) && !isOp) ? true : false;
					isIE5 = ((navigator.appVersion.indexOf("MSIE 5")!=-1) && !isOp) ? true : false;
					isIE6 = ((navigator.appVersion.indexOf("MSIE 6.")!=-1) && !isOp) ? true : false;
					isMacIE = isMac ? true : false;
				};
			};
		};
		if(document.layers){
			isNS4 = true;
		};
	};
};
/*	Test DOM Implementations	*/
function TestDOM(){
	if( !document.implementation )	noDOM=true;
	else{
		if( !document.implementation.hasFeature("HTML", "1.0") )	noDOM1HTML=true;
		if( !document.implementation.hasFeature("Core", "2.0") )	noDOM2=true;
		if( !document.implementation.hasFeature("HTML", "2.0") )	noDOM2HTML=true;
	};
	if(noDOM||noDOM1HTML||noDOM2||noDOM2HTML)
		CapTestResults=true;
};
/***************************************************************************
						Suport Functions
***************************************************************************/
function GetCapTestResults(){
	var str = new Array();
	// Form Error messages.
	if(noDOM)		str[str.length] = "any DOM model";
	if(noDOM1HTML)	str[str.length] = "DOM Level1 HTML";
	if(noDOM2)		str[str.length] = "DOM Level2";
	if(noDOM2HTML)	str[str.length] = "DOM Level2 HTML";
//	if()	str[str.length] = "";
	return str;
};
function genCapTestResults(){
	var str, aRes = GetCapTestResults();
	// Form Output.
	str = '<div id="CapTestResults">';
	for(var loop=0; loop<aRes.length; loop++){
		str += 'Your Browser does not support: ' + aRes[loop] + ' !';
		if(loop<aRes.length-1)
			str += '<br/>';
	};
	str += '</div><br/>';
	if(aRes && aRes.length>0)	return str;
	else return null;
};
function genFFNotice(){
	var str, aRes = new Array();
	if(isIE4||isIE5)
					aRes[aRes.length] = "Your browser is <b>VERY</b> old, this site will look like crap";
	if(isIE6)		aRes[aRes.length] = "While this page does render semi-well for you, IE 6 is very, <b>very</b> old";
	// Form Output.
	str = '<div id="FFNotice">';
	str += 'NOTICE: !!!<br/>';
	for(var loop=0; loop<aRes.length; loop++){
		str += aRes[loop] + ' !';
		if(loop<aRes.length-1)
			str += '<br/>';
	};
	str += "<br/>Try upgrade to something new like <a href='";
	str += "http://www.spreadfirefox.com/?q=affiliates&amp;id=14994&amp;t=61"
	str += "'>Mozilla FireFox</a> and you'll <u>never</u> look back.";
	str += '</div>';
	if(aRes && aRes.length>0)	return str;
	else return null;
};

/***************************************************************************
						Exception handling.
		Show Exception message if global bDebug true.
***************************************************************************/
function ShowException(e){
	var str;
	str = e.name + ' in: ';
	if(e.message)		str += e.message;
	else if(e.description)	str += e.description;
	if(bDebug)	alert(str);
};
/***************************************************************************
						Perfrom Tests.
***************************************************************************/
function TestBrowser(){
	var sHTML="", str;
	DetectionBrowser();
	TestDOM();
	if( !isFF &&(isIE4||isIE5||isIE6) ){
		str=genFFNotice();
		if(str)	sHTML+=str;
	};
	if(CapTestResults){
		str=genCapTestResults();
		if(str)	sHTML+=str;
	};
	if(sHTML && sHTML.length>0)	return sHTML;
	else return null;
};
gTestBrowser = TestBrowser();
/***************************************************************************
	For 'Load Scripts dynamicaly with visual representation.'
***************************************************************************/
if(gLoadScript)	gLoadScript.SizeLoaded += 5223;
