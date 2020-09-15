var form1ele=54;
var form2ele=75;
var ufac=1;
var deci=1;
var mxpupd=6;

var lepcnt;
var lmm;
var lname;
var lfov;
var lfsd;
var lfsl;
var leyr;

var mepcnt;
var mmm;
var mname;
var mfov;
var mfsd;
var mfsl;
var meyr;

var hepcnt;	
var hmm;
var hname;
var hfov;
var hfsd;
var hfsl;
var heyr;

var lepfov=new Array();
var lepfsd=new Array();
var lepfsl=new Array();
var lepeyr=new Array();

var mepfov=new Array();
var mepfsd=new Array();
var mepfsl=new Array();
var mepeyr=new Array();

var hepfov=new Array();
var hepfsd=new Array();
var hepfsl=new Array();
var hepeyr=new Array();

// TELEVUE EYEPIECE SPECIFICATIONS

var tvepcnt=30;
var tvepmm=new Array(tvepcnt);
var tvepname=new Array(tvepcnt);
var tvepfov=new Array(tvepcnt);
var tvepfsd=new Array(tvepcnt);
var tvepfsl=new Array(tvepcnt);
var tvepeyr=new Array(tvepcnt);

tvepmm[0]=0;
tvepname[0]="--------TeleVue--------";
tvepfov[0]=0;
tvepfsd[0]=0;
tvepfsl[0]=0;
tvepeyr[0]="N/A";

tvepmm[1]=55;
tvepname[1]="55mm Plossl";
tvepfov[1]=50;
tvepfsd[1]=46;
tvepfsl[1]=rndoff(ufac*1.16, deci);
tvepeyr[1]=38;

tvepmm[2]=40;
tvepname[2]="40mm Plossl";
tvepfov[2]=43;
tvepfsd[2]=27;
tvepfsl[2]=rndoff(ufac*.7, deci);
tvepeyr[2]=28;

tvepmm[3]=35;
tvepname[3]="35mm Panoptic";
tvepfov[3]=68;
tvepfsd[3]=38.7;
tvepfsl[3]=rndoff(ufac*.17, deci);
tvepeyr[3]=24;

tvepmm[4]=32;
tvepname[4]="32mm Plossl";
tvepfov[4]=50;
tvepfsd[4]=27;
tvepfsl[4]=rndoff(ufac*.25, deci);
tvepeyr[4]=22;

tvepmm[5]=27;
tvepname[5]="27mm Panoptic";
tvepfov[5]=68;
tvepfsd[5]=30.5;
tvepfsl[5]=rndoff(ufac*.29, deci);
tvepeyr[5]=19;	

tvepmm[6]=25;
tvepname[6]="25mm Plossl";
tvepfov[6]=50;
tvepfsd[6]=21.2;
tvepfsl[6]=rndoff(ufac*.25, deci);
tvepeyr[6]=17;
	
tvepmm[7]=22;
tvepname[7]="22mm Panoptic";
tvepfov[7]=68;
tvepfsd[7]=25;
tvepfsl[7]=rndoff(ufac*.27, deci);
tvepeyr[7]=15;

tvepmm[8]=22;
tvepname[8]="22mm Nagler-4";
tvepfov[8]=82;
tvepfsd[8]=31.1;
tvepfsl[8]=rndoff(ufac*.25, deci);
tvepeyr[8]=19;

	
tvepmm[9]=20;
tvepname[9]="20mm Plossl";
tvepfov[9]=50;
tvepfsd[9]=17.1;
tvepfsl[9]=rndoff(ufac*.25, deci);
tvepeyr[9]=14;

tvepmm[10]=20;
tvepname[10]="20mm Nagler-2";
tvepfov[10]=82;
tvepfsd[109]=27.4;
tvepfsl[10]=rndoff(ufac*.14, deci);
tvepeyr[10]=12;
	
tvepmm[11]=19;
tvepname[11]="19mm Panoptic";
tvepfov[11]=68;
tvepfsd[11]=21.3;
tvepfsl[11]=rndoff(ufac*.25, deci);
tvepeyr[11]=13;

tvepmm[12]=17;
tvepname[12]="17mm Nagler-4";
tvepfov[12]=82;
tvepfsd[12]=24.3;
tvepfsl[12]=rndoff(ufac*.25, deci);
tvepeyr[12]=17;
	
tvepmm[13]=16;
tvepname[13]="16mm Nagler-2";
tvepfov[13]=82;
tvepfsd[13]=21.9;
tvepfsl[13]=rndoff(ufac*.76, deci);
tvepeyr[13]=10;
	
tvepmm[14]=15;
tvepname[14]="15mm Plossl";
tvepfov[14]=50;
tvepfsd[14]=12.6;
tvepfsl[14]=rndoff(ufac*.25, deci);
tvepeyr[14]=10;
		
tvepmm[15]=15;
tvepname[15]="15mm Panoptic";
tvepfov[15]=68;
tvepfsd[15]=17.1;
tvepfsl[15]=rndoff(ufac*.25, deci);
tvepeyr[15]=10;
	
tvepmm[16]=14;
tvepname[16]="14mm Radian";
tvepfov[16]=60;
tvepfsd[16]=14.4;
tvepfsl[16]="";
tvepeyr[16]=20;

tvepmm[17]=12;
tvepname[17]="12mm Radian";
tvepfov[17]=60;
tvepfsd[17]=12.6;
tvepfsl[17]="";
tvepeyr[17]=20;
	
tvepmm[18]=12;
tvepname[18]="12mm Nagler-2";
tvepfov[18]=82;
tvepfsd[18]=16.4;
tvepfsl[18]=rndoff(ufac*.85, deci);
tvepeyr[18]=11;

tvepmm[19]=12;
tvepname[19]="12mm Nagler-4";
tvepfov[19]=82;
tvepfsd[19]=17.1;
tvepfsl[19]=rndoff(ufac*.76, deci);
tvepeyr[19]=17;

tvepmm[20]=11;
tvepname[20]="11mm Plossl";
tvepfov[20]=50;
tvepfsd[20]=9.1;
tvepfsl[20]=rndoff(ufac*.25, deci);
tvepeyr[20]=8;
	
tvepmm[21]=10;
tvepname[21]="10mm Radian";
tvepfov[21]=60;
tvepfsd[21]=10.5;
tvepfsl[21]="";
tvepeyr[21]=20;
	
tvepmm[22]=9;
tvepname[22]="9mm Nagler";
tvepfov[22]=82;
tvepfsd[22]=12.3;
tvepfsl[22]=rndoff(ufac*.76, deci);
tvepeyr[22]=12;
	
tvepmm[23]=8;
tvepname[23]="8mm Plossl";
tvepfov[23]=50;
tvepfsd[23]=6.5;
tvepfsl[23]=rndoff(ufac*.25, deci);
tvepeyr[23]=6;

tvepmm[24]=8;
tvepname[24]="8mm Radian";
tvepfov[24]=60;
tvepfsd[24]=8.3;
tvepfsl[24]="";
tvepeyr[24]=20;
	
tvepmm[25]=7;
tvepname[25]="7mm Nagler";
tvepfov[25]=82;
tvepfsd[25]=9.4;
tvepfsl[25]=rndoff(ufac*.25, deci);
tvepeyr[25]=10;
	
tvepmm[26]=6;
tvepname[26]="6mm Radian";
tvepfov[26]=60;
tvepfsd[26]=6.3;
tvepfsl[26]="";
tvepeyr[26]=20;
	
tvepmm[27]=5;
tvepname[27]="5mm Radian";
tvepfov[27]=60;
tvepfsd[27]=5.3;
tvepfsl[27]="";
tvepeyr[27]=20;

tvepmm[28]=4.8;
tvepname[28]="4.8mm Nagler";
tvepfov[28]=82;
tvepfsd[28]=6.6;
tvepfsl[28]=rndoff(ufac*.25, deci);
tvepeyr[28]=7;

tvepmm[29]=4;
tvepname[29]="4mm Radian";
tvepfov[29]=60;
tvepfsd[29]=4.2;
tvepfsl[29]="";
tvepeyr[29]=20;
	
tvepmm[30]=3;
tvepname[30]="3mm Radian";
tvepfov[30]=60;
tvepfsd[30]=3.3;
tvepfsl[30]="";
tvepeyr[30]=20;

// TAKHASHI EYEPIECE SPECIFICATIONS

var tkepcnt=7;
var tkepmm=new Array(tkepcnt);
var tkepname=new Array(tkepcnt);
var tkepfov=new Array(tkepcnt);
var tkepfsd=new Array(tkepcnt);
var tkepfsl=new Array(tkepcnt);
var tkepeyr=new Array(tkepcnt);

tkepmm[0]=0;
tkepname[0]="-------Takahashi------";
tkepfov[0]=0;
tkepfsd[0]=0;
tkepfsl[0]=0;
tkepeyr[0]="N/A";

tkepmm[1]=50;
tkepname[1]="50mm LE";
tkepfov[1]=50;
tkepfsd[1]="c/k";
tkepfsl[1]="";
tkepeyr[1]="N/A";

tkepmm[2]=30;
tkepname[2]="30mm LE";
tkepfov[2]=52;
tkepfsd[2]="c/k";
tkepfsl[2]="";
tkepeyr[2]=20;

tkepmm[3]=24;
tkepname[3]="24 LE";
tkepfov[3]=52;
tkepfsd[3]="c/k";
tkepfsl[3]="";
tkepeyr[3]=17;

tkepmm[4]=18;
tkepname[4]="18mm LE";
tkepfov[4]=52;
tkepfsd[4]="c/k";
tkepfsl[4]="";
tkepeyr[4]=13;

tkepmm[5]=12.5;
tkepname[5]="12.5mm LE";
tkepfov[5]=52;
tkepfsd[5]="c/k";
tkepfsl[5]="";
tkepeyr[5]=9;

tkepmm[6]=7.5;
tkepname[6]="7.5mm LE";
tkepfov[6]=52;
tkepfsd[6]="c/k";
tkepfsl[6]="";
tkepeyr[6]=10;
	
tkepmm[7]=5;
tkepname[7]="5mm LE";
tkepfov[7]=52;
tkepfsd[7]="c/k";
tkepfsl[7]="";
tkepeyr[7]=10;

// PENTAX EYEPIECE SPECIFICATIONS

var pxepcnt=7;
var pxepmm=new Array(pxepcnt);
var pxepname=new Array(pxepcnt);
var pxepfov=new Array(pxepcnt);
var pxepfsd=new Array(pxepcnt);
var pxepfsl=new Array(pxepcnt);
var pxepeyr=new Array(pxepcnt);

pxepmm[0]=0;
pxepname[0]="---------Pentax----------";
pxepfov[0]=0;
pxepfsd[0]=0;
pxepfsl[0]=0;
pxepeyr[0]="N/A";

pxepmm[1]=40;
pxepname[1]="40mm XL";
pxepfov[1]=65;
pxepfsd[1]="c/k";
pxepfsl[1]="";
pxepeyr[1]="20";

pxepmm[2]=28;
pxepname[2]="28mm XL";
pxepfov[2]=55;
pxepfsd[2]="c/k";
pxepfsl[2]="";
pxepeyr[2]="20";

pxepmm[3]=21;
pxepname[3]="21mm XL";
pxepfov[3]=65;
pxepfsd[3]="c/k";
pxepfsl[3]="";
pxepeyr[3]=20;

pxepmm[4]=14;
pxepname[4]="14mm XL";
pxepfov[4]=65;
pxepfsd[4]="c/k";
pxepfsl[4]="";
pxepeyr[4]=20;

pxepmm[5]=10.5;
pxepname[5]="10.5mm XL";
pxepfov[5]=65;
pxepfsd[5]="c/k";
pxepfsl[5]="";
pxepeyr[5]=20;

pxepmm[6]=7;
pxepname[6]="7mm XL";
pxepfov[6]=65;
pxepfsd[6]="c/k";
pxepfsl[6]="";
pxepeyr[6]=20;

pxepmm[7]=5.2;
pxepname[7]="5.2mm XL";
pxepfov[7]=65;
pxepfsd[7]="c/k";
pxepfsl[7]="";
pxepeyr[7]=20;

// MEADE EYEPIECE SPECIFICATIONS

var mdepcnt=28;
var mdepmm=new Array(mdepcnt);
var mdepname=new Array(mdepcnt);
var mdepfov=new Array(mdepcnt);
var mdepfsd=new Array(mdepcnt);
var mdepfsl=new Array(mdepcnt);
var mdepeyr=new Array(mdepcnt);

mdepmm[0]=0;
mdepname[0]="---------Meade---------";
mdepfov[0]=0;
mdepfsd[0]=0;
mdepfsl[0]=0;
mdepeyr[0]="N/A";

mdepmm[1]=56;
mdepname[1]="56mm Sup.Plossl";
mdepfov[1]=52;
mdepfsd[1]="c/k";
mdepfsl[1]="";
mdepeyr[1]=47;

mdepmm[2]=40;
mdepname[2]="40mm Sup.Wide";
mdepfov[2]=67;
mdepfsd[2]="c/k";
mdepfsl[2]="";
mdepeyr[2]=27;

mdepmm[3]=40;
mdepname[3]="40mm MA";
mdepfov[3]=36;
mdepfsd[3]="c/k";
mdepfsl[3]="";
mdepeyr[3]=18;

mdepmm[4]=40;
mdepname[4]="40mm Plossl";
mdepfov[4]=44;
mdepfsd[4]="c/k";
mdepfsl[4]="";
mdepeyr[4]=29;

mdepmm[5]=40;
mdepname[5]="40mm Sup.Plossl";
mdepfov[5]=44;
mdepfsd[5]="c/k";
mdepfsl[5]="";
mdepeyr[5]=30;	

mdepmm[6]=32;
mdepname[6]="32mm Sup.Wide";
mdepfov[6]=67;
mdepfsd[6]="c/k";
mdepfsl[6]="";
mdepeyr[6]=20;
	
mdepmm[7]=32;
mdepname[7]="32mm Sup.Plossl";
mdepfov[7]=52;
mdepfsd[7]="c/k";
mdepfsl[7]="";
mdepeyr[7]=20;
	
mdepmm[8]=26;
mdepname[8]="26mm Sup.Plossl";
mdepfov[8]=52;
mdepfsd[8]="c/k";
mdepfsl[8]="";
mdepeyr[8]=18;

mdepmm[9]=25;
mdepname[9]="25mm MA";
mdepfov[9]=40;
mdepfsd[9]="c/k";
mdepfsl[9]="";
mdepeyr[9]=16;
	
mdepmm[10]=25;
mdepname[10]="25mm Plossl";
mdepfov[10]=50;
mdepfsd[10]="c/k";
mdepfsl[10]="";
mdepeyr[10]=16;

mdepmm[11]=24.5;
mdepname[11]="24.5mm Sup.Wide";
mdepfov[11]=67;
mdepfsd[11]="c/k";
mdepfsl[11]="";
mdepeyr[11]=19;
	
mdepmm[12]=20;
mdepname[12]="20mm Sup.Plossl";
mdepfov[12]=52;
mdepfsd[12]="c/k";
mdepfsl[12]="";
mdepeyr[12]=13;

mdepmm[13]=18;
mdepname[13]="18mm Sup.Wide";
mdepfov[13]=67;
mdepfsd[13]="c/k";
mdepfsl[13]="";
mdepeyr[13]=14;
	
mdepmm[14]=16;
mdepname[14]="16mm Plossl";
mdepfov[14]=50;
mdepfsd[14]="c/k";
mdepfsl[14]="";
mdepeyr[14]=10;
		
mdepmm[15]=15;
mdepname[15]="15mm Sup.Plossl";
mdepfov[15]=52;
mdepfsd[15]="c/k";
mdepfsl[15]="";
mdepeyr[15]=9;

mdepmm[16]=14;
mdepname[16]="14mm Ultra Wide";
mdepfov[16]=84;
mdepfsd[16]="c/k";
mdepfsl[16]="";
mdepeyr[16]=23;

mdepmm[17]=13.8;
mdepname[17]="13.8mm Sup.Wide";
mdepfov[17]=67;
mdepfsd[17]="c/k";
mdepfsl[17]="";
mdepeyr[17]=14;
	
mdepmm[18]=12.4;
mdepname[18]="12.4mm Sup.Plossl";
mdepfov[18]=52;
mdepfsd[18]="c/k";
mdepfsl[18]="";
mdepeyr[18]=7;

mdepmm[19]=12;
mdepname[19]="12mm MA";
mdepfov[19]=40;
mdepfsd[19]="c/k";
mdepfsl[19]="";
mdepeyr[19]=8;
	
mdepmm[20]=9.7;
mdepname[20]="9.7mm Sup.Plossl";
mdepfov[20]=52;
mdepfsd[20]="c/k";
mdepfsl[20]="";
mdepeyr[20]=5;

mdepmm[21]=9.5;
mdepname[21]="9.5mm Plossl";
mdepfov[21]=50;
mdepfsd[21]="c/k";
mdepfsl[21]="";
mdepeyr[21]=6;
	
mdepmm[22]=9;
mdepname[22]="9mm MA";
mdepfov[22]=40;
mdepfsd[22]="c/k";
mdepfsl[22]="";
mdepeyr[22]=6;
	
mdepmm[23]=8.8;
mdepname[23]="8.8mm Ultra Wide";
mdepfov[23]=84;
mdepfsd[23]="c/k";
mdepfsl[23]="";
mdepeyr[23]=16;
	
mdepmm[24]=6.7;
mdepname[24]="6.7mm Plossl";
mdepfov[24]=50;
mdepfsd[24]="c/k";
mdepfsl[24]="";
mdepeyr[24]=4;

mdepmm[25]=6.7;
mdepname[25]="6.7mm Ultra Wide";
mdepfov[25]=84;
mdepfsd[25]="c/k";
mdepfsl[25]="";
mdepeyr[25]=11;

mdepmm[26]=6.4;
mdepname[26]="6.4mm Sup.Plossl";
mdepfov[26]=52;
mdepfsd[26]="c/k";
mdepfsl[26]="";
mdepeyr[26]=3;
	
mdepmm[27]=5;
mdepname[27]="5mm Plossl";
mdepfov[27]=50;
mdepfsd[27]="c/k";
mdepfsl[27]="";
mdepeyr[27]=3;

mdepmm[28]=4.7;
mdepname[28]="4.7mm Plossl";
mdepfov[28]=84;
mdepfsd[28]="c/k";
mdepfsl[28]="";
mdepeyr[28]=7;

// SET MAX EYPIECE COUNT TO TELEVIEW'S

var maxepcnt=tvepcnt;

function whenloads(form1, form2, graphcalc)
{	
inormmchk(form1);
setdefs1(form1, form2, graphcalc);
}

function inormmchk(form)
{	
	if	(form.inormm[0].checked)
		{
		ufac=1;
		deci=3;
		}
	else
		{
		ufac=25.43;
		deci=1;
		}
	return ufac, deci;
}

function setdefs1(form1, form2, graphcalc)
{	
	inormmchk(form1);
	for(num=0; num<=form1ele; num++)
		{
		if	(
			form1.elements[num].name=="dia"
			||form1.elements[num].name=="fl"
			||form1.elements[num].name=="edgthk"
			||form1.elements[num].name=="cellthk"
			||form1.elements[num].name=="cellrec"
			||form1.elements[num].name=="tubeod"
			||form1.elements[num].name=="tubethk"
			||form1.elements[num].name=="fcsmin"
			||form1.elements[num].name=="fcstrv"
			||form1.elements[num].name=="focsizs"
			||form1.elements[num].name=="drawlen"			
			||form1.elements[num].name=="spiderin"
			||form1.elements[num].name=="spdrtodia"
			||form1.elements[num].name=="fno"
			||form1.elements[num].name=="tubeid"
			||form1.elements[num].name=="fpdist"
			||form1.elements[num].name=="millum"
			||form1.elements[num].name=="diasizs"
			||form1.elements[num].name=="diasizc"
			||form1.elements[num].type=="select-one"
			||form1.elements[num].type=="button"
			||form1.elements[num].type=="checkbox"
			||form1.elements[num].type=="radio"
			)
			{continue;}
		else
			{form1.elements[num].value="calc'd";}
		}
		
	form1.dia.value=rndoff(ufac*8, deci);
	form1.edgthk.value=rndoff(ufac*1.25, deci);
	form1.cellthk.value=rndoff(ufac*2.25, deci);
	form1.cellrec.value=rndoff(ufac*0, deci);
	form1.tubeod.value=rndoff(ufac*10.75, deci);
	form1.fcsmin.value=rndoff(ufac*1.59, deci);
	form1.fcstrv.value=rndoff(ufac*1.85, deci);
	form1.drawlen.value=rndoff(ufac*3, deci);
	form1.spiderin.value=rndoff(ufac*1.375, deci);
	form1.spdrtodia.value=rndoff(ufac*3.75, deci);
	form1.fl.value=rndoff(ufac*47.375, deci);
	form1.tubethk.value=rndoff(ufac*.4375, deci);
		
	form1.focsizs[0].value=rndoff(ufac*.965, deci);
	form1.focsizs[0].text=form1.focsizs[0].value;
	form1.focsizs[1].value=rndoff(ufac*1.25, deci);
	form1.focsizs[1].text=form1.focsizs[1].value;
	form1.focsizs[2].value=rndoff(ufac*2.00, deci);
	form1.focsizs[2].text=form1.focsizs[2].value;
	form1.focsizs[3].value=rndoff(ufac*3.00, deci);
	form1.focsizs[3].text=form1.focsizs[3].value;
	form1.focsizs[4].value=rndoff(ufac*4.00, deci);
	form1.focsizs[4].text=form1.focsizs[4].value;
	form1.focsizs.selectedIndex=2;
	
	form1.diasizs[1].value=rndoff(ufac*.75, deci);
	form1.diasizs[1].text=form1.diasizs[1].value;
	form1.diasizs[2].value=rndoff(ufac*1.00, deci);
	form1.diasizs[2].text=form1.diasizs[2].value;
	form1.diasizs[3].value=rndoff(ufac*1.30, deci);
	form1.diasizs[3].text=form1.diasizs[3].value;
	form1.diasizs[4].value=rndoff(ufac*1.52, deci);
	form1.diasizs[4].text=form1.diasizs[4].value;
	form1.diasizs[5].value=rndoff(ufac*1.83, deci);
	form1.diasizs[5].text=form1.diasizs[5].value;
	form1.diasizs[6].value=rndoff(ufac*2.14, deci);
	form1.diasizs[6].text=form1.diasizs[6].value;
	form1.diasizs[7].value=rndoff(ufac*2.60, deci);
	form1.diasizs[7].text=form1.diasizs[7].value;
	form1.diasizs[8].value=rndoff(ufac*3.10, deci);
	form1.diasizs[8].text=form1.diasizs[8].value;
	form1.diasizs[9].value=rndoff(ufac*3.50, deci);
	form1.diasizs[9].text=form1.diasizs[9].value;
	form1.diasizs[10].value=rndoff(ufac*4.00, deci);
	form1.diasizs[10].text=form1.diasizs[10].value;
	form1.diasizs.selectedIndex=4;
	
	form1.millum.value=13;
	form1.fno.value="c/k";
	form1.fnomode.checked=0;
	form1.flmode.checked=1;
	form1.tubeid.value="c/k";
	form1.idmode.checked=0;
	form1.thkmode.checked=1;
	form1.fpdist.value="c/k";
	form1.fpdmode.checked=0;
	stddia(form1);
	
	for(num=0; num<=form2ele; num++)
		{
		if	(
			form2.elements[num].name=="lopowr"
			||form2.elements[num].name=="lofdia"
			||form2.elements[num].name=="midpowr"
			||form2.elements[num].name=="midfdia"
			||form2.elements[num].name=="barlox2"
			||form2.elements[num].name=="barlox3"
			||form2.elements[num].name=="hipowr"
			||form2.elements[num].name=="hifdia"
			||form2.elements[num].name=="mxpup"
			||form2.elements[num].name=="loepfov"
			||form2.elements[num].name=="midepfov"
			||form2.elements[num].name=="hiepfov"
			||form2.elements[num].name=="barlox1"
			||form2.elements[num].name=="leyrlf"
			||form2.elements[num].name=="meyrlf"
			||form2.elements[num].name=="heyrlf"			
			||form2.elements[num].type=="select-one"
			||form2.elements[num].type=="button"
			||form2.elements[num].type=="checkbox"
			||form2.elements[num].type=="radio"
			)
			{continue;}
		else
			{form2.elements[num].value="calc'd";}
		}
	
// SET LOW, MID & HIGH POWER DEFAULT EYEPIECE OPTION TO TELEVUE SPECS
	
	form2.lepbrand[0].click();
	lepopt(form2);
	form2.mepbrand[0].click();
	mepopt(form2);
	form2.hepbrand[0].click();
	hepopt(form2);
	
	form2.mxpup.value=mxpupd;
	form2.mxpupmode.checked=1;
	form2.lopowr.value="c/k";
	form2.lopowrmode.checked=0;
	form2.loepfov.value=68;
	form2.loepfovmode.checked=1;
	form2.lofdia.value="c/k";
	form2.lofdiamode.checked=0;
	form2.louse.checked=0;
	form2.barlox1.value=2;
	form2.midpowr.value="c/k";
	form2.midpowrmode.checked=0;
	form2.midepfov.value=82;
	form2.midepfovmode.checked=1;
	form2.midfdia.value="c/k";
	form2.midfdiamode.checked=0;
	form2.miduse.checked=0;
	form2.barlox2.value="c/k";
	form2.barlox2mode.checked=0;
	form2.barlox3.value="c/k";
	form2.barlox3mode.checked=0;
	form2.hipowr.value="c/k";
	form2.hipowrmode.checked=0;
	form2.hiepfov.value=82;
	form2.hiepfovmode.checked=1;
	form2.hifdia.value="c/k";
	form2.hifdiamode.checked=0;
	form2.hiuse.checked=0;
	
	if	(graphcalc.fdia00.value != "")
		{graphcalc.reset()}
}

function rndoff(n, d)
{	with (Math)
	{
	t=pow(10, d);
	z=round(n*t)/t;
	}
	return z;
}

function power(n, x)
{	with (Math)
	{
	z=pow(n, x);
	}
	return z;
}

function stddia(form)
{
	form.diasizc.value="STD";
}

function custdia(form)
{
	form.diasizs.selectedIndex=0;
	form.diasizc.value="";
	form.diasizc.focus();
}

function fnochk(form)
{form.fnomode.checked==1 ? fnoin(form) : flin(form);}

function fnoin(form)
{
	if(isNaN(form.fno.value)){form.fno.value="";}
	form.fno.focus();
	form.fnomode.checked=1;
	form.flmode.checked=0;
	form.fl.value="c/k";
}

function flchk(form)
{form.flmode.checked==1 ? flin(form) : fnoin(form);}

function flin(form)
{
	if(isNaN(form.fl.value)){form.fl.value="";}
	form.fl.focus();
	form.flmode.checked=1;
	form.fnomode.checked=0;
	form.fno.value="c/k";
}
	
function idchk(form)
{form.idmode.checked==1 ? idin(form) : thkin(form);}

function idin(form)
{
	if(isNaN(form.tubeid.value)){form.tubeid.value="";}
	form.idmode.checked=1;
	form.thkmode.checked=0;
	form.tubethk.value="c/k";
	form.tubeid.focus();
}

function thkchk(form)
{form.thkmode.checked==1 ? thkin(form): idin(form)}

function thkin(form)
{
	if(isNaN(form.tubethk.value)){form.tubethk.value="";}
	form.thkmode.checked=1;
	form.idmode.checked=0;
	form.tubeid.value="c/k";
	form.tubethk.focus();
}

function fpdchk(form)
{form.fpdmode.checked==1 ? fpdin(form) : form.fpdist.value="c/k";}

function fpdin(form)
{
	if(isNaN(form.fpdist.value)){form.fpdist.value="";}
	form.fpdmode.checked=1;
	form.fpdist.focus();
}

//  LOW POWER EYEPIECE FUNCTIONS  

function lopowrchk(form)
{
	form.lep.selectedIndex=0;
	form.louse.checked=0;
	form.lopowrmode.checked==1 ? lopowrin(form) : mxpupin(form);
}

function lopowrin(form)
{
	if(isNaN(form.lopowr.value)){form.lopowr.value="";}
	form.lopowrmode.checked=1;
	form.mxpupmode.checked=0;
	form.mxpup.value="c/k";
	form.lep.selectedIndex=0;
	form.leyrlf.value=lepeyr[form.lep.selectedIndex];
	form.lopowr.focus();
}

function mxpupchk(form)
{form.mxpupmode.checked==1 ? mxpupin(form) : lopowrin(form);}

function mxpupin(form)
{
	if(isNaN(form.mxpup.value)){form.mxpup.value="";}
	form.mxpupmode.checked=1;
	form.lopowrmode.checked=0;
	form.lopowr.value="c/k";
	form.lep.selectedIndex=0;
	form.leyrlf.value=lepeyr[form.lep.selectedIndex];
	form.mxpup.focus();
}

function loepfovchk(form)
{form.loepfovmode.checked==1 ? loepfovin(form) : lofdiain(form);}

function loepfovin(form)
{
	if(isNaN(form.loepfov.value)){form.loepfov.value="";}
	form.loepfovmode.checked=1;
	form.lofdiamode.checked=0;
	form.lofdia.value="c/k";
	form.lep.selectedIndex=0;
	form.leyrlf.value=lepeyr[form.lep.selectedIndex];
	form.louse.checked=0;
	form.loepfov.focus();
}

function lofdiachk(form)
{form.lofdiamode.checked==1 ? lofdiain(form) : loepfovin(form);}

function lofdiain(form)
{
	if(isNaN(form.lofdia.value)){form.lofdia.value="";}
	form.lofdiamode.checked=1;
	form.loepfovmode.checked=0;
	form.loepfov.value="c/k";
	form.lep.selectedIndex=0;
	form.leyrlf.value=lepeyr[form.lep.selectedIndex];
	form.lofdia.focus();
}

function lepin(form)
{
if	((form.lep[form.lep.selectedIndex].text=="-----"||form.lep.selectedIndex==0)&&form.louse.checked)
	{
	alert("Your eyepiece selection is invalid.\nPlease reselect another eyepiece.");
	form.lep.selectedIndex=0;
	form.louse.checked=0;
	return;
	}
if	(form.louse.checked != 1)
	{
	return;
	}
form.leyrlf.value=lepeyr[form.lep.selectedIndex];
if	(form.lep.selectedIndex != 0)
	{
	form.lopowr.value=form.lep[form.lep.selectedIndex].value;
	form.lopowrmode.checked=1;
	form.mxpupmode.checked=0;
	form.mxpup.value="c/k";
	if(isNaN(lepfsd[form.lep.selectedIndex]))
		{
		form.lofdiamode.checked=0;
		form.loepfovmode.checked=1;
		form.loepfov.value=lepfov[form.lep.selectedIndex];
		form.lofdia.value="c/k";
		}
	else
		{
		form.lofdiamode.checked=1;
		form.loepfovmode.checked=0;
		form.loepfov.value="c/k";
		form.lofdia.value=lepfsd[form.lep.selectedIndex];
		}
	}
// form.calc4.click();
}

function lepopt(form)
{
if	(form.lepbrand[0].checked)
	{
	lepcnt=tvepcnt;
	lmm="tvepmm";
	lname="tvepname";
	lfov="tvepfov";
	lfsd="tvepfsd";
	lfsl="tvepfsl";
	leyr="tvepeyr";
	}
if	(form.lepbrand[1].checked)
	{
	lepcnt=tkepcnt;
	lmm="tkepmm";
	lname="tkepname";
	lfov="tkepfov";
	lfsd="tkepfsd";
	lfsl="tkepfsl";
	leyr="tkepeyr";
	}
if	(form.lepbrand[2].checked)
	{
	lepcnt=pxepcnt;
	lmm="pxepmm";
	lname="pxepname";
	lfov="pxepfov";
	lfsd="pxepfsd";
	lfsl="pxepfsl";
	leyr="pxepeyr";
	}
if	(form.lepbrand[3].checked)
	{
	lepcnt=mdepcnt;
	lmm="mdepmm";
	lname="mdepname";
	lfov="mdepfov";
	lfsd="mdepfsd";
	lfsl="mdepfsl";
	leyr="mdepeyr";
	}
	

for	(num=0; num<=lepcnt; num++)
	{
	form.lep[num].value=eval(lmm+"[num]");
	form.lep[num].text=eval(lname+"[num]");
	lepfov[num]=eval(lfov+"[num]");
	lepfsd[num]=eval(lfsd+"[num]");
	lepfsl[num]=eval(lfsl+"[num]");
	lepeyr[num]=eval(leyr+"[num]");
	}
for	(num=lepcnt+1; num<=maxepcnt+1; num++)
	{
	form.lep[num].value="";
	form.lep[num].text="-----";
	lepfov[num]="";
	lepfsd[num]="";
	lepfsl[num]="";
	lepeyr[num]="";
	}
form.lep.selectedIndex=0;
form.louse.checked=0;
form.leyrlf.value=lepeyr[form.lep.selectedIndex];
if	(form.lopowrmode.checked)
	{
	form.lopowrmode.click();
	form.mxpup.value=mxpupd;
	}
}

// SELECT NEAREST LOW POWER TYPE

function lepsel(form,lopowr)
{
if	(lopowr>=form.lep[1].value)
	{
	form.lep.selectedIndex=1;
	return;
	}
for	(num=1; num<=lepcnt; num++)
	{
	if	(form.lep[num].value=="")
		{
		form.lep.selectedIndex=num-1;
		break;
		}
	if	(lopowr<form.lep[num].value)
		{
		continue;
		}
	else
		{
		if	(2*lopowr-form.lep[num].value-form.lep[num-1].value<=0)
			{
			if	(form.lep[num].value=="")
				{form.lep.selectedIndex=num-1}
			else
				{form.lep.selectedIndex=num;}
			}
		else{form.lep.selectedIndex=num-1;}
			break;
		}
	}
}

// CHECK FOR LOW POWER EYEPIECE SELECTION USE

function lousechk(form)
{
if	(form.louse.checked)
	{
	lepin(form);
	}
else
	{return;}
}

//  MID POWER EYEPIECE FUNCTIONS

function midpowrchk(form)
{
	form.mep.selectedIndex=0;
	form.miduse.checked=0;
	form.midpowrmode.checked==1 ? midpowrin(form) : form.midpowr.value="c/k";
}

function midpowrin(form)
{
	if(isNaN(form.midpowr.value)){form.midpowr.value="";}
	form.midpowrmode.checked=1;
	form.mep.selectedIndex=0;
	form.meyrlf.value=mepeyr[form.mep.selectedIndex];
	form.midpowr.focus();
}

function midepfovchk(form)
{form.midepfovmode.checked==1 ? midepfovin(form) : midfdiain(form);}

function midepfovin(form)
{
	if(isNaN(form.midepfov.value)){form.midepfov.value="";}
	form.midepfovmode.checked=1;
	form.midfdiamode.checked=0;
	form.midfdia.value="c/k";
	form.mep.selectedIndex=0;
	form.meyrlf.value=mepeyr[form.mep.selectedIndex];
	form.miduse.checked=0;
	form.midepfov.focus();
}

function midfdiachk(form)
{form.midfdiamode.checked==1 ? midfdiain(form) : midepfovin(form);}

function midfdiain(form)
{
	if(isNaN(form.midfdia.value)){form.midfdia.value="";}
	form.midfdiamode.checked=1;
	form.midepfovmode.checked=0;
	form.midepfov.value="c/k";
	form.mep.selectedIndex=0;
	form.meyrlf.value=mepeyr[form.mep.selectedIndex];
	form.midfdia.focus();
}

function mepin(form)
{
if	((form.mep[form.mep.selectedIndex].text=="-----"||form.mep.selectedIndex==0)&&form.miduse.checked)
	{
	alert("Your eyepiece selection is invalid.\nPlease reselect another eyepiece.");
	form.mep.selectedIndex=0;
	form.miduse.checked=0;
	return;
	}
if	(form.miduse.checked != 1)
	{
	return;
	}
form.meyrlf.value=mepeyr[form.mep.selectedIndex];
if	(form.mep[form.mep.selectedIndex].text=="N/A")
	{
	alert("Your eyepiece selection is invalid.\nPlease reselect another eyepiece.");
	form.mep.selectedIndex=0;
	return;
	}
if	(form.mep.selectedIndex != 0)
	{
	form.midpowr.value=form.mep[form.mep.selectedIndex].value;
	form.midpowrmode.checked=1;
		
	if(isNaN(mepfsd[form.mep.selectedIndex]))
		{
		form.midfdiamode.checked=0;
		form.midepfovmode.checked=1;
		form.midepfov.value=mepfov[form.mep.selectedIndex];
		form.midfdia.value="c/k";
		}
	else
		{
		form.midfdiamode.checked=1;
		form.midepfovmode.checked=0;
		form.midepfov.value="c/k";
		form.midfdia.value=mepfsd[form.mep.selectedIndex];
		}
	}
// form.calc5.click();
}

function barlox2chk(form)
{form.barlox2mode.checked==1 ? barlox2in(form) : form.barlox2.value="c/k";}

function barlox2in(form)
{
	if(isNaN(form.barlox2.value)){form.barlox2.value="";}
	form.barlox2mode.checked=1;
	form.barlox2.focus();
}

function mepopt(form)
{
if	(form.mepbrand[0].checked)
	{
	mepcnt=tvepcnt;
	mmm="tvepmm";
	mname="tvepname";
	mfov="tvepfov";
	mfsd="tvepfsd";
	mfsl="tvepfsl";
	meyr="tvepeyr";
	}
if	(form.mepbrand[1].checked)
	{
	mepcnt=tkepcnt;
	mmm="tkepmm";
	mname="tkepname";
	mfov="tkepfov";
	mfsd="tkepfsd";
	mfsl="tkepfsl";
	meyr="tkepeyr";
	}
if	(form.mepbrand[2].checked)
	{
	mepcnt=pxepcnt;
	mmm="pxepmm";
	mname="pxepname";
	mfov="pxepfov";
	mfsd="pxepfsd";
	mfsl="pxepfsl";
	meyr="pxepeyr";
	}
if	(form.mepbrand[3].checked)
	{
	mepcnt=mdepcnt;
	mmm="mdepmm";
	mname="mdepname";
	mfov="mdepfov";
	mfsd="mdepfsd";
	mfsl="mdepfsl";
	meyr="mdepeyr";
	}

for	(num=0; num<=mepcnt; num++)
	{
	form.mep[num].value=eval(mmm+"[num]");
	form.mep[num].text=eval(mname+"[num]");
	mepfov[num]=eval(mfov+"[num]");
	mepfsd[num]=eval(mfsd+"[num]");
	mepfsl[num]=eval(mfsl+"[num]");
	mepeyr[num]=eval(meyr+"[num]");
	}
for	(num=mepcnt+1; num<=maxepcnt+1; num++)
	{
	form.mep[num].value="";
	form.mep[num].text="-----";
	mepfov[num]="";
	mepfsd[num]="";
	mepfsl[num]="";
	mepeyr[num]="";
	}
form.mep.selectedIndex=0;
form.miduse.checked=0;
form.meyrlf.value=mepeyr[form.mep.selectedIndex];
if	(form.midpowrmode.checked)
	{
	form.midpowrmode.click();
	}
}

// SELECT NEAREST MID POWER EYEPIECE TYPE

function mepsel(form, midpowr)
{
if	(midpowr>=form.mep[1].value)
	{
	form.mep.selectedIndex=1;
	return;
	}
for	(num=1; num<=mepcnt; num++)
	{
	if	(form.mep[num].value=="")
		{
		form.mep.selectedIndex=num-1;
		break;
		}
	if	(midpowr<form.mep[num].value)
		{
		continue;
		}
	else
		{
		if	(2*midpowr-form.mep[num].value-form.mep[num-1].value<=0)
			{
			if	(form.mep[num].value=="")
				{form.mep.selectedIndex=num-1}
			else
				{form.mep.selectedIndex=num;}
			}
		else{form.mep.selectedIndex=num-1;}
		break;
		}
	}
}

// CHECK FOR MID POWER EYEPIECE SELECTION USE

function midusechk(form)
{
if	(form.miduse.checked)
	{
	mepin(form);
	}
else
	{return;}
}

//  HIGH POWER EYEPIECE FUNCTIONS

function hipowrchk(form)
{
	form.hep.selectedIndex=0;
	form.hiuse.checked=0;
	form.hipowrmode.checked==1 ? hipowrin(form) : form.hipowr.value="c/k";
}

function hipowrin(form)
{
	if(isNaN(form.hipowr.value)){form.hipowr.value="";}
	form.hipowrmode.checked=1;
	form.hep.selectedIndex=0;
	form.heyrlf.value=hepeyr[form.hep.selectedIndex];
	form.hipowr.focus();
}

function hiepfovchk(form)
{form.hiepfovmode.checked==1 ? hiepfovin(form) : hifdiain(form);}

function hiepfovin(form)
{
	if(isNaN(form.hiepfov.value)){form.hiepfov.value="";}
	form.hiepfovmode.checked=1;
	form.hifdiamode.checked=0;
	form.hifdia.value="c/k";
	form.hep.selectedIndex=0;
	form.heyrlf.value=hepeyr[form.hep.selectedIndex];
	form.hiuse.checked=0;
	form.hiepfov.focus();
}

function hifdiachk(form)
{form.hifdiamode.checked==1 ? hifdiain(form) : hiepfovin(form);}

function hifdiain(form)
{
	if(isNaN(form.hifdia.value)){form.hifdia.value="";}
	form.hifdiamode.checked=1;
	form.hiepfovmode.checked=0;
	form.hiepfov.value="c/k";
	form.hep.selectedIndex=0;
	form.heyrlf.value=hepeyr[form.hep.selectedIndex];
	form.hifdia.focus();
}

function hepin(form)
{
if	((form.hep[form.hep.selectedIndex].text=="-----"||form.hep.selectedIndex==0)&&form.hiuse.checked)
	{
	alert("Your eyepiece selection is invalid.\nPlease reselect another eyepiece.");
	form.hep.selectedIndex=0;
	form.hiuse.checked=0;
	return;
	}
if	(form.hiuse.checked != 1)
	{
	return;
	}
form.heyrlf.value=hepeyr[form.hep.selectedIndex];
if	(form.hep[form.hep.selectedIndex].text=="N/A")
	{
	alert("Your eyepiece selection is invalid.\nPlease reselect another eyepiece.");
	form.hep.selectedIndex=0;
	return;
	}
if(form.hep.selectedIndex != 0)
	{
	form.hipowr.value=form.hep[form.hep.selectedIndex].value;
	form.hipowrmode.checked=1;
	if(isNaN(hepfsd[form.hep.selectedIndex]))
		{
		form.hifdiamode.checked=0;
		form.hiepfovmode.checked=1;
		form.hiepfov.value=hepfov[form.hep.selectedIndex];
		form.hifdia.value="c/k";
		}
	else
		{
		form.hifdiamode.checked=1;
		form.hiepfovmode.checked=0;
		form.hiepfov.value="c/k";
		form.hifdia.value=hepfsd[form.hep.selectedIndex];
		}
	}
// alert("One or more eyepiece variables have changed.\nClick [CALCULATE] to update associated data.")
// form.calc6.click();
}

function barlox3chk(form)
{form.barlox3mode.checked==1 ? barlox3in(form) : form.barlox3.value="c/k";}

function barlox3in(form)
{
	if(isNaN(form.barlox3.value)){form.barlox3.value="";}
	form.barlox3mode.checked=1;
	form.barlox3.focus();
}

function hepopt(form)
{
if	(form.hepbrand[0].checked)
	{
	hepcnt=tvepcnt;
	hmm="tvepmm";
	hname="tvepname";
	hfov="tvepfov";
	hfsd="tvepfsd";
	hfsl="tvepfsl";
	heyr="tvepeyr";
	}
if	(form.hepbrand[1].checked)
	{
	hepcnt=tkepcnt;
	hmm="tkepmm";
	hname="tkepname";
	hfov="tkepfov";
	hfsd="tkepfsd";
	hfsl="tkepfsl";
	heyr="tkepeyr";
	}
if	(form.hepbrand[2].checked)
	{
	hepcnt=pxepcnt;
	hmm="pxepmm";
	hname="pxepname";
	hfov="pxepfov";
	hfsd="pxepfsd";
	hfsl="pxepfsl";
	heyr="pxepeyr";
	}
if	(form.hepbrand[3].checked)
	{
	hepcnt=mdepcnt;
	hmm="mdepmm";
	hname="mdepname";
	hfov="mdepfov";
	hfsd="mdepfsd";
	hfsl="mdepfsl";
	heyr="mdepeyr";
	}

for	(num=0; num<=hepcnt; num++)
	{
	form.hep[num].value=eval(hmm+"[num]");
	form.hep[num].text=eval(hname+"[num]");
	hepfov[num]=eval(hfov+"[num]");
	hepfsd[num]=eval(hfsd+"[num]");
	hepfsl[num]=eval(hfsl+"[num]");
	hepeyr[num]=eval(heyr+"[num]");
	}
for	(num=hepcnt+1; num<=maxepcnt+1; num++)
	{
	form.hep[num].value="";
	form.hep[num].text="-----";
	hepfov[num]="";
	hepfsd[num]="";
	hepfsl[num]="";
	hepeyr[num]="";
	}
form.hep.selectedIndex=0;
form.hiuse.checked=0;
form.heyrlf.value=hepeyr[form.hep.selectedIndex];
if	(form.hipowrmode.checked)
	{
	form.hipowrmode.click();
	}
}

// SELECT NEAREST HI POWER EYEPIECE TYPE

function hepsel(form, hipowr)
{
if	(hipowr>=form.hep[1].value)
	{
	form.hep.selectedIndex=1;
	return;
	}
for	(num=1; num<=hepcnt+1; num++)
	{
	if	(form.hep[num].value=="")
		{
		form.hep.selectedIndex=num-1;
		break;
		}
	if	(hipowr<form.hep[num].value)
		{
		continue;
		}
	else
		{
		if	(2*hipowr-form.hep[num].value-form.hep[num-1].value<=0)
			{
			if	(form.hep[num].value=="")
				{form.hep.selectedIndex=num-1}
			else
				{form.hep.selectedIndex=num;}
			}
		else{form.hep.selectedIndex=num-1;}
		break;
		}
	}
}

// CHECK FOR HI POWER EYEPIECE SELECTION USE

function hiusechk(form)
{
if	(form.hiuse.checked)
	{
	hepin(form);
	}
else
	{return;}
}

function validate(form1, form2, graphcalc)
{	
	if	((form1.inormm[0].checked && ufac>1)||(form1.inormm[1].checked && ufac==1))
		{
		setdefs1(form1);
		}
	else
		{
		inormmchk(form1);
		}
		
// VALIDATE "SCOPCALC" FORM

	for(num=0; num<=form1ele; num++)
		{
		if	(
			form1.elements[num].value=="calc'd"
			||form1.elements[num].value=="c/k"
			||form1.elements[num].value=="STD"
			||form1.elements[num].value=="CUST"
			||form1.elements[num].value=="N/A"
			||form1.elements[num].type=="button"
			||form1.elements[num].type=="checkbox"
			||form1.elements[num].type=="radio"
			)
			{continue;}
		else
			{
			test=form1.elements[num].value;
			if	(isNaN(test)
				||test==""
				)
				{
				alert("One or more fields contain invalid entries.\nCheck for blank fields or values entered incorrectly.");
				break;
				}
			else
				{continue;}
			}
		}
		
// VALIDATE "EYEPCALC" FORM

	for(num=0; num<=form2ele; num++)
		{
		if	(
			form2.elements[num].value=="calc'd"
			||form2.elements[num].value=="c/k"
			||form2.elements[num].value=="STD"
			||form2.elements[num].value=="CUST"
			||form2.elements[num].value=="N/A"
			||form2.elements[num].type=="button"
			||form2.elements[num].type=="checkbox"
			||form2.elements[num].type=="radio"
			)
			{continue;}
		else
			{
			test=form2.elements[num].value;
			if	(isNaN(test)
				||test==""
				)
				{
				alert("One or more fields contain invalid entries.\nCheck for blank fields or values entered incorrectly.");
				break;
				}
			else
				{continue;}
			}
		}	
	if (num==form2ele+1)
	{calcform1(form1, form2, graphcalc);}
}

// MAIN CALCULATIONS

function calcform1(form1, form2, graphcalc)
{
//	graphcalc.reset();

	var tubeod=form1.tubeod.value/ufac;
	var cellthk=form1.cellthk.value/ufac;
	var cellrec=form1.cellrec.value/ufac;
	var spiderin=form1.spiderin.value/ufac;
	var spdrtodia=form1.spdrtodia.value/ufac;
	var dia=form1.dia.value/ufac;
	var edgthk=form1.edgthk.value/ufac;
	var fcsmin=form1.fcsmin.value/ufac;
	var fcstrv=form1.fcstrv.value/ufac;
	var focsizs=form1.focsizs[form1.focsizs.selectedIndex].value/ufac;
	var drawlen=form1.drawlen.value/ufac;
	
	var millum=form1.millum.value/1;
	var barlox1=form2.barlox1.value/1;
	var pi=Math.PI;
	
	var sparrows=115/dia/25.43
	form1.sparrows.value=rndoff(sparrows, 3)

	var dawes=4.56/dia
	form1.dawes.value=rndoff(dawes, 3)

	var rayleigh=140/dia/25.43
	form1.rayleigh.value=rndoff(rayleigh, 3)
	
// PRIMARY "F" & FOCAL LENGTH
	if (form1.flmode.checked)
		{
		var fl=form1.fl.value/ufac;
		var fno=fl/dia;
		form1.fno.value=rndoff(fno, 3);
		}
	else
		{
		var fno=form1.fno.value/1;
		var fl=dia*fno;
		form1.fl.value=rndoff(fl*ufac, deci);
		}
		
// TUBE ID & THICKNESS
	if (form1.thkmode.checked)
		{
		var tubethk=form1.tubethk.value/ufac;
		var tubeid=tubeod-2*tubethk;
		form1.tubeid.value=rndoff(tubeid*ufac, deci);
		}
	else
		{
		var tubeid=form1.tubeid.value/ufac;
		var tubethk=(tubeod-tubeid)/2;
		form1.tubethk.value=rndoff(tubethk*ufac, deci+1);
		}

// FOCAL PLANE TO DIAGONAL DISTANCE
	if	(form1.fpdmode.checked==0)
		{
		var fpdist=tubeod/2+fcsmin+fcstrv/2;
		form1.fpdist.value=rndoff(fpdist*ufac, deci);
		}
	else{
		var fpdist=form1.fpdist.value/ufac;	
		}
		
// MIRROR SAGGITA & CENTER THICKNESS
	var s=dia*dia/16/fl;
	var ctrthk=edgthk-s;
	form1.ctrthk.value=rndoff(ctrthk*ufac, deci);
	
// MISCELLANEOUS OTA GEOMETRY DIMENSIONS
	var otatofc=fl+cellthk+ctrthk+cellrec-fpdist;
	form1.otatofc.value=rndoff(otatofc*ufac, deci);

	var otatosp=otatofc+spdrtodia;
	form1.otatosp.value=rndoff(otatosp*ufac, deci);

	var tubelen=otatosp+spiderin;
	form1.tubelen.value=rndoff(tubelen*ufac, deci);

// LOW POWER EYEPIECE CALCULATIONS
	if (form2.lopowrmode.checked==0)
		{
		var mxpup=form2.mxpup.value/1;
		var lopowr=mxpup*fno;
		form2.lopowr.value=rndoff(lopowr, 2);
		
		// CALL "NEAREST MM EYEPIECE SELECTION" SUBROUTINE
	
		lepsel(form2, lopowr)
	
		}
	else
		{
		var lopowr=form2.lopowr.value/1;
		var mxpup=lopowr/fno;
		form2.mxpup.value=rndoff(mxpup, 3);
		}
	
	var lomag=fl*25.43/lopowr;
	form2.lomag.value=rndoff(lomag, 1);
	
	// LOW POWER EYEPIECE APPARENT FOV & FIELD MM DIAMETER
	if (form2.lofdiamode.checked==0)
		{
		var loepfov=form2.loepfov.value/1;
		var lofdia=loepfov*lopowr*2*pi/360;
		form2.lofdia.value=rndoff(lofdia, 1);
		}
	else
		{
		var lofdia=form2.lofdia.value/1;
		var loepfov=lofdia/lopowr*360/2/pi;
		form2.loepfov.value=rndoff(loepfov, 1);
		}	
	
	var loacfovd=loepfov/lomag;
	form2.loacfovd.value=rndoff(loacfovd, 2);
	
	var loacfova=loacfovd*60;
	form2.loacfova.value=rndoff(loacfova, 2);
	
	var lomagb=lomag*barlox1;
	form2.lomagb.value=rndoff(lomagb, 1);
	
	var loxpupb=mxpup/barlox1;
	form2.loxpupb.value=rndoff(loxpupb, 2);
	
	var loepfovb=loepfov/barlox1;
	form2.loepfovb.value=rndoff(loepfovb, 1);
	
	var loacfovdb=loacfovd/barlox1;
	form2.loacfovdb.value=rndoff(loacfovdb, 2);
	
	var loacfovab=loacfova/barlox1;
	form2.loacfovab.value=rndoff(loacfovab, 2);
	
// MID POWER EYEPIECE CALCULATIONS

	if (form2.midpowrmode.checked==0)
		{
		var midpowr=lopowr/power(barlox1, 2)
		form2.midpowr.value=rndoff(midpowr, 2);
		
		// CALL "NEAREST MM EYEPIECE SELECTION" SUBROUTINE
	
		mepsel(form2, midpowr)
		}
	else{
		var midpowr=form2.midpowr.value/1;
		}
		
	var midxpup=midpowr/fno;
	form2.midxpup.value=rndoff(midxpup, 2);
	
	var midmag=fl*25.43/midpowr;
	form2.midmag.value=rndoff(midmag, 1);
	
	// MID POWER EYEPIECE APPARENT FOV & FIELD MM DIAMETER
	
	if (form2.midfdiamode.checked==0)
		{
		var midepfov=form2.midepfov.value/1;
		var midfdia=midepfov*midpowr*2*pi/360;
		form2.midfdia.value=rndoff(midfdia, 1);
		}
	else
		{
		var midfdia=form2.midfdia.value/1;
		var midepfov=midfdia/midpowr*360/2/pi;
		form2.midepfov.value=rndoff(midepfov, 1);
		}
		
	var midacfovd=midepfov/midmag;
	form2.midacfovd.value=rndoff(midacfovd, 2);
	
	var midacfova=midacfovd*60;
	form2.midacfova.value=rndoff(midacfova, 2);
	
	if (form2.barlox2mode.checked==0)
		{
		var barlox2=barlox1;
		form2.barlox2.value=rndoff(barlox2, 1);
		}
	else{
		var barlox2=form2.barlox2.value/1;
		}
	
	var midmagb=midmag*barlox2;
	form2.midmagb.value=rndoff(midmagb, 1);
	
	var midxpupb=midxpup/barlox2;
	form2.midxpupb.value=rndoff(midxpupb, 2);
	
	var midepfovb=midepfov/barlox2;
	form2.midepfovb.value=rndoff(midepfovb, 1);
	
	var midacfovdb=midacfovd/barlox2;
	form2.midacfovdb.value=rndoff(midacfovdb, 2);
	
	var midacfovab=midacfova/barlox2;
	form2.midacfovab.value=rndoff(midacfovab, 2);	

// HI POWER EYEPIECE CALCULATIONS

	if (form2.hipowrmode.checked==0)
		{
		var hipowr=midpowr/power(barlox2, 2)
		form2.hipowr.value=rndoff(hipowr, 2);
		
	// CALL "NEAREST MM EYEPIECE SELECTION" SUBROUTINE
	
		hepsel(form2, hipowr)
		}
	else{
		var hipowr=form2.hipowr.value/1;
		}
		
	var hixpup=hipowr/fno;
	form2.hixpup.value=rndoff(hixpup, 2);
		
	var himag=fl*25.43/hipowr;
	form2.himag.value=rndoff(himag, 1);
	
	// HI POWER EYEPIECE APPARENT FOV & FIELD MM DIAMETER
	
	if (form2.hifdiamode.checked==0)
		{
		var hiepfov=form2.hiepfov.value/1;
		var hifdia=hiepfov*hipowr*2*pi/360;
		form2.hifdia.value=rndoff(hifdia, 1);
		}
	else
		{
		var hifdia=form2.hifdia.value/1;
		var hiepfov=hifdia/hipowr*360/2/pi;
		form2.hiepfov.value=rndoff(hiepfov, 1);
		}
		
	var hiacfovd=hiepfov/himag;
	form2.hiacfovd.value=rndoff(hiacfovd, 2);
	
	var hiacfova=hiacfovd*60;
	form2.hiacfova.value=rndoff(hiacfova, 2);
	
	if (form2.barlox3mode.checked==0)
		{
		var barlox3=barlox1;
		form2.barlox3.value=rndoff(barlox3, 1);
		}
	else{
		var barlox3=form2.barlox3.value/1;
		}
	
	var himagb=himag*barlox3;
	form2.himagb.value=rndoff(himagb, 1);
	
	var hixpupb=hixpup/barlox3;
	form2.hixpupb.value=rndoff(hixpupb, 2);
	
	var hiepfovb=hiepfov/barlox3;
	form2.hiepfovb.value=rndoff(hiepfovb, 1);
	
	var hiacfovdb=hiacfovd/barlox3;
	form2.hiacfovdb.value=rndoff(hiacfovdb, 2);
	
	var hiacfovab=hiacfova/barlox3;
	form2.hiacfovab.value=rndoff(hiacfovab, 2);
	
// ALERT IF ANY EXIT PUPILS ARE LARGER THAN 7MM.

//if	(mxpup>7||midxpup>7||hixpup>7)
//	{
//	alert("One of the selected eyepieces will result in an exit pupil larger than //7mm.\nThis will likely result in field vignetting");
//	}
	
// EDBERG(3) MINIMUM 100% ILLUMINATION MM DIAMETER
	//(equ.2 solved for "a")
	var m100d1=2*fl*Math.tan(millum/60/360*pi)*25.43;
	form1.m100d1.value=rndoff(m100d1, 1);

// BERRY(1) MINIMUM 100% ILLUMINATION MM DIAMETER
	var m100d2=2*fl*pi*millum/60/360*25.43;
	form1.m100d2.value=rndoff(m100d2, 1);
	
// PETERS & PIKE(6) MINIMUM FOCUSER ID
	var maxdtl=fpdist-dia/2+tubethk+fcsmin-drawlen;
	var mindtdia=maxdtl*(dia-m100d1/25.43)/fl+m100d1/25.43;
	form1.mindtdia.value=rndoff(mindtdia*ufac, deci);

// BERRY(1) MINIMUM DIAGONAL MINOR AXIS
	var minaxis1=fl*millum/60/360*2*pi+dia/fl*fpdist;
	form1.minaxis1.value=rndoff(minaxis1*ufac, deci);

// EDBERG(3) MINIMUM DIAGONAL MINOR AXIS
	//(equ.6)
	var minaxis3=(m100d1/25.43*(fl-fpdist)+fpdist*dia)/fl;
	form1.minaxis3.value=rndoff(minaxis3*ufac, deci);

// DAKIN(2) MINIMUM DIAGONAL MINOR AXIS
	var P=m100d1/25.43*(fl-s)+fpdist*(dia-m100d1/25.43);
	var Q=2*(fl-s)-(dia-m100d1/25.43);
	var R=2*(fl-s)+(dia-m100d1/25.43);
	var minaxis2=(P/Q+P/R);
	form1.minaxis2.value=rndoff(minaxis2*ufac, deci);

// PETERS & PIKE(6) MINIMUM DIAGONAL MINOR AXIS
	var minaxis4=fpdist*(dia-m100d1/25.43)/fl+m100d1/25.43;
	form1.minaxis4.value=rndoff(minaxis4*ufac, deci);
	
// CHECK FOR VALID DIAGONAL SIZE SELECTION
var dindex=form1.diasizs.selectedIndex
var diasizs=form1.diasizs[dindex].value/ufac;
var diasizc=form1.diasizc.value/ufac;

if (isNaN(diasizc)&&isNaN(diasizs))
	{
	form1.diasizc.value="";
	form1.diasizc.focus();
	alert("Enter a valid CUSTOM diagonal size or select a standard size.");
	}
else
	{

// DETERMINE DIAGONAL SIZE SELECTION (STANDARD OR CUSTOM)
		
	var diasiz = (isNaN(diasizc)) ? diasizs : diasizc;


// EDBERG(3) ACTUAL 100% ILLUMINATION FIELD ANGLE & MM DIAMETER

	//(equ.2 set equal to equ.3 & solved for "theta" & doubled)
	
	var a100i1=60*360/pi*Math.atan((diasiz*fl-fpdist*dia)/(2*fl*(fl-fpdist)));
	form1.a100i1.value=rndoff(a100i1, 2);
	
	//(equ.4)
	
	var a100d1=(fl*diasiz-fpdist*dia)/(fl-fpdist)*25.43;
	form1.a100d1.value=rndoff(a100d1, 2);
		
// BERRY(1) ACTUAL 100% ILLUMINATION MM DIAMETER & ANGLE
	var a100d2=(diasiz-dia/fl*fpdist)*25.43;
	form1.a100d2.value=rndoff(a100d2, 2);
	
	var a100i2=(diasiz-dia/fl*fpdist)*360/2/pi/fl*60;
	form1.a100i2.value=rndoff(a100i2, 2);

// PETERS & PIKE(6) ACTUAL 100% ILLUMINATION MM DIAMETER		
	var a100d3=(diasiz-fpdist*dia/fl)/(1-fpdist/fl)*25.43;
	form1.a100d3.value=rndoff(a100d3, 2);

// ACTUAL DIAGONAL PERCENT APERATURE OBSTRUCTION
	var pctblka=power(diasiz, 2)/power(dia, 2)*100;
	form1.pctblka.value=rndoff(pctblka, 2);
	
	var pctblkd=diasiz/dia*100;
	form1.pctblkd.value=rndoff(pctblkd, 2);

// FRANCIS(4) ACTUAL DIAGONAL OFFSET
	var offset1=dia*diasiz/4/fl;
	form1.offset1.value=rndoff(offset1*ufac, deci);

// DAKIN(2) ACTUAL DIAGONAL OFFSET
	var L=a100d1*(fl-s)+fpdist*(dia-a100d1);
	var M=2*(fl-s)-(dia-a100d1);
	var N=2*(fl-s)+(dia-a100d1);
	var offset2=(L/M-L/N)/2;
	form1.offset2.value=rndoff(offset2*ufac, deci);

// MASSON(5) ACTUAL DIAGONAL OFFSET
	var offset3=diasiz*(dia-diasiz)/4/(fl-fpdist);
	form1.offset3.value=rndoff(offset3*ufac, deci);

// DETERMINE MINIMUM DIAGONAL SIZE FOR 100% ILLUMINATION AT CENTER POINT ONLY AND ALERT IF DIAGONAL SIZE SELECTED IS SMALLER
	var mindia=fpdist*dia/fl;
	if (diasiz<=mindia)
		{
		alert("WARNING - The selected diagonal size is too small to permit ANY field of 100% illumination!");
		}
	
// DETERMINE IF FOCUSER SIZE SELECTION WILL CAUSE VIGNETTING OF FIELD
	if (focsizs<=mindtdia)
		{
		alert("WARNING - The selected focuser size is too small and will likely cause some field vignetting!");
		}
	}
	
calcform2(graphcalc, dia, fl, fpdist, lofdia, diasiz, ufac, deci)
}

function calcform2(form, dia, fl, fpdist, lofdia, diasiz, ufac, deci)
{

// ILLUMINATION GRAPH VARIABLES AND ALGORITHM
	
	var mindia=fpdist*dia/fl;
	var pi=Math.PI;
	var x;
	var A;
	var B;
	var r=diasiz*fl/fpdist/dia;
	var tblsiz=21;
	
//	OLD VLAUES FOR HIGH RESOLUTION GRAPH
//	var mminc=.05;
//	var end=Math.floor(lofdia/mminc);
//	var tblinc=Math.floor(end/tblsiz);

	var mminc=lofdia/tblsiz;
	var end=tblsiz;
	var tblinc=1;
	var maxill=0;

// ASSIGN DATABASE ELEMENT VALUES FOR SELECTING ILLUMINATION DATABASE VALUES FOR FORM TABLE
	var tel=new Array(tblsiz);
	tel[0]=0;
	for(num=1; num<=tblsiz; num++)
	{
	tel[num]=tel[num-1]+tblinc;
	}

// CALCULATE ILLUMINATION DATABASE FOR BOTH GRAPHING AND TABLE ACCESS
	
	var fdia=new Array(end);
	var ang=new Array(end);
	var I=new Array(end);
	var mag=new Array(end);
	var xx=new Array(end);
	var AA=new Array(end);
	var BB=new Array(end);

	fdia[0]=0;
	ang[0]=0;
	for(num=1; num<=end-1; num++)
	{
	fdia[num]=fdia[num-1]+mminc;
	ang[num]=fdia[num]/25.43*360*60/2/pi/fl;
	}

	fdia[end]=lofdia;
	ang[end]=fdia[end]/25.43*360*60/2/pi/fl;
	x=fdia[end]/25.43*(fl-fpdist)/fpdist/dia;
	A=(x*x+1-r*r)/2/x;
	B=(x*x+r*r-1)/2/x/r;
//TEST	
	xx[end]=x;
	AA[end]=A;
	BB[end]=B;
//TEST		
	I[end]=100*(Math.acos(A)-x*Math.sqrt(1-A*A)+r*r*Math.acos(B))/pi;
	mag[end]=2.5*Math.log(100/I[end])/Math.LN10;
	
	for(num=end-1; num>=0; num--)
	{
	x=fdia[num]/25.43*(fl-fpdist)/fpdist/dia;
	A=(x*x+1-r*r)/2/x;
	B=(x*x+r*r-1)/2/x/r;
//TEST		
	xx[num]=x;
	AA[num]=A;
	BB[num]=B;
//TEST			
	I[num]=100*(Math.acos(A)-x*Math.sqrt(1-A*A)+r*r*Math.acos(B))/pi;

		if (isNaN(I[num])!=(isNaN(I[num+1])))
		{
			if (diasiz>=mindia)
			{
			maxill=100;
			}
			else
			{
			maxill=I[num+1];
			}
		I[num]=maxill;
		}
		if (isNaN(I[num])&&(isNaN(I[num+1])))
		{
		I[num]=maxill;
		}

		mag[num]=2.5*Math.log(100/I[num])/Math.LN10;
	}

// ASSIGN ILLUMINATION TABLE VALUES

	form.fdia00.value=rndoff(fdia[tel[0]], 1);
	form.ang00.value=rndoff(ang[tel[0]], 1);
	form.ill00.value=rndoff(I[tel[0]], 1);
	form.mag00.value=rndoff(mag[tel[0]], 2);	

	form.fdia01.value=rndoff(fdia[tel[1]], 1);
	form.ang01.value=rndoff(ang[tel[1]], 1);
	form.ill01.value=rndoff(I[tel[1]], 1);
	form.mag01.value=rndoff(mag[tel[1]], 2);

	form.fdia02.value=rndoff(fdia[tel[2]], 1);
	form.ang02.value=rndoff(ang[tel[2]], 1);
	form.ill02.value=rndoff(I[tel[2]], 1);
	form.mag02.value=rndoff(mag[tel[2]], 2);
	
	form.fdia03.value=rndoff(fdia[tel[3]], 1);
	form.ang03.value=rndoff(ang[tel[3]], 1);
	form.ill03.value=rndoff(I[tel[3]], 1);
	form.mag03.value=rndoff(mag[tel[3]], 2);

	form.fdia04.value=rndoff(fdia[tel[4]], 1);
	form.ang04.value=rndoff(ang[tel[4]], 1);
	form.ill04.value=rndoff(I[tel[4]], 1);
	form.mag04.value=rndoff(mag[tel[4]], 2);

	form.fdia05.value=rndoff(fdia[tel[5]], 1);
	form.ang05.value=rndoff(ang[tel[5]], 1);
	form.ill05.value=rndoff(I[tel[5]], 1);
	form.mag05.value=rndoff(mag[tel[5]], 2);

	form.fdia06.value=rndoff(fdia[tel[6]], 1);
	form.ang06.value=rndoff(ang[tel[6]], 1);
	form.ill06.value=rndoff(I[tel[6]], 1);
	form.mag06.value=rndoff(mag[tel[6]], 2);

	form.fdia07.value=rndoff(fdia[tel[7]], 1);
	form.ang07.value=rndoff(ang[tel[7]], 1);
	form.ill07.value=rndoff(I[tel[7]], 1);
	form.mag07.value=rndoff(mag[tel[7]], 2);

	form.fdia08.value=rndoff(fdia[tel[8]], 1);
	form.ang08.value=rndoff(ang[tel[8]], 1);
	form.ill08.value=rndoff(I[tel[8]], 1);
	form.mag08.value=rndoff(mag[tel[8]], 2);

	form.fdia09.value=rndoff(fdia[tel[9]], 1);
	form.ang09.value=rndoff(ang[tel[9]], 1);
	form.ill09.value=rndoff(I[tel[9]], 1);
	form.mag09.value=rndoff(mag[tel[9]], 2);

	form.fdia10.value=rndoff(fdia[tel[10]], 1);
	form.ang10.value=rndoff(ang[tel[10]], 1);
	form.ill10.value=rndoff(I[tel[10]], 1);
	form.mag10.value=rndoff(mag[tel[10]], 2);

	form.fdia11.value=rndoff(fdia[tel[11]], 1);
	form.ang11.value=rndoff(ang[tel[11]], 1);
	form.ill11.value=rndoff(I[tel[11]], 1);
	form.mag11.value=rndoff(mag[tel[11]], 2);

	form.fdia12.value=rndoff(fdia[tel[12]], 1);
	form.ang12.value=rndoff(ang[tel[12]], 1);
	form.ill12.value=rndoff(I[tel[12]], 1);
	form.mag12.value=rndoff(mag[tel[12]], 2);

	form.fdia13.value=rndoff(fdia[tel[13]], 1);
	form.ang13.value=rndoff(ang[tel[13]], 1);
	form.ill13.value=rndoff(I[tel[13]], 1);
	form.mag13.value=rndoff(mag[tel[13]], 2);

	form.fdia14.value=rndoff(fdia[tel[14]], 1);
	form.ang14.value=rndoff(ang[tel[14]], 1);
	form.ill14.value=rndoff(I[tel[14]], 1);
	form.mag14.value=rndoff(mag[tel[14]], 2);

	form.fdia15.value=rndoff(fdia[tel[15]], 1);
	form.ang15.value=rndoff(ang[tel[15]], 1);
	form.ill15.value=rndoff(I[tel[15]], 1);
	form.mag15.value=rndoff(mag[tel[15]], 2);

	form.fdia16.value=rndoff(fdia[tel[16]], 1);
	form.ang16.value=rndoff(ang[tel[16]], 1);
	form.ill16.value=rndoff(I[tel[16]], 1);
	form.mag16.value=rndoff(mag[tel[16]], 2);

	form.fdia17.value=rndoff(fdia[tel[17]], 1);
	form.ang17.value=rndoff(ang[tel[17]], 1);
	form.ill17.value=rndoff(I[tel[17]], 1);
	form.mag17.value=rndoff(mag[tel[17]], 2);

	form.fdia18.value=rndoff(fdia[tel[18]], 1);
	form.ang18.value=rndoff(ang[tel[18]], 1);
	form.ill18.value=rndoff(I[tel[18]], 1);
	form.mag18.value=rndoff(mag[tel[18]], 2);

	form.fdia19.value=rndoff(fdia[tel[19]], 1);
	form.ang19.value=rndoff(ang[tel[19]], 1);
	form.ill19.value=rndoff(I[tel[19]], 1);
	form.mag19.value=rndoff(mag[tel[19]], 2);

	form.fdia20.value=rndoff(fdia[tel[20]], 1);
	form.ang20.value=rndoff(ang[tel[20]], 1);
	form.ill20.value=rndoff(I[tel[20]], 1);
	form.mag20.value=rndoff(mag[tel[20]], 2);

	form.fdia21.value=rndoff(fdia[end], 1);
	form.ang21.value=rndoff(ang[end], 1);
	form.ill21.value=rndoff(I[end], 1);
	form.mag21.value=rndoff(mag[end], 2);

}

// CALL "graph" APPLET TO PLOT ILLUMINATION

function graphi(form)
{
	var x=-form.fdia21.value/2;
	var y=form.ill21.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia20.value/2;
	var y=form.ill20.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia19.value/2;
	var y=form.ill19.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia18.value/2;
	var y=form.ill18.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia17.value/2;
	var y=form.ill17.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia16.value/2;
	var y=form.ill16.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia15.value/2;
	var y=form.ill15.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia14.value/2;
	var y=form.ill14.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia13.value/2;
	var y=form.ill13.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia12.value/2;
	var y=form.ill12.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia11.value/2;
	var y=form.ill11.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia10.value/2;
	var y=form.ill10.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia09.value/2;
	var y=form.ill09.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia08.value/2;
	var y=form.ill08.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia07.value/2;
	var y=form.ill07.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia06.value/2;
	var y=form.ill06.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia05.value/2;
	var y=form.ill05.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia04.value/2;
	var y=form.ill04.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia03.value/2;
	var y=form.ill03.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia02.value/2;
	var y=form.ill02.value;
	window.document.graph.addPoint(x,y);

	var x=-form.fdia01.value/2;
	var y=form.ill01.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia00.value/2;
	var y=form.ill00.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia01.value/2;
	var y=form.ill01.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia03.value/2;
	var y=form.ill03.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia03.value/2;
	var y=form.ill03.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia04.value/2;
	var y=form.ill04.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia05.value/2;
	var y=form.ill05.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia06.value/2;
	var y=form.ill06.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia07.value/2;
	var y=form.ill07.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia08.value/2;
	var y=form.ill08.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia09.value/2;
	var y=form.ill09.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia10.value/2;
	var y=form.ill10.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia11.value/2;
	var y=form.ill11.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia12.value/2;
	var y=form.ill12.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia13.value/2;
	var y=form.ill13.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia14.value/2;
	var y=form.ill14.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia15.value/2;
	var y=form.ill15.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia16.value/2;
	var y=form.ill16.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia17.value/2;
	var y=form.ill17.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia18.value/2;
	var y=form.ill18.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia19.value/2;
	var y=form.ill19.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia20.value/2;
	var y=form.ill20.value;
	window.document.graph.addPoint(x,y);

	var x=form.fdia21.value/2;
	var y=form.ill21.value;
	window.document.graph.addPoint(x,y);
}