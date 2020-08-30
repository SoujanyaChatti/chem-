var gamest=0;
var player1score=0;
var player2score=0;
var playerCount=0;
var allPlayers;
var database,Hydrogen,Hydrogen1,Iron,Iron2,sodium,sodium2,oxygen,oxygen2,chlo,chlo2,alum,alum2,copper,copper2;
var leftgroup,rightgroup;

var playerCount;
var distance=0;
var Hy,Li,Hd,Lid;
var car1,car2,car3,car4;
var form, player, game;
var cars=[];
var pertab,react,game,back,back2;
var im1,im2,im3,im4,track,ground,coins;
var gameoneLoaded = false; 
var box1selected = false;
var box2selected = false;
var reLoadCompound = false;
function preload(){
  bg=loadImage("images/bg.png");
  whitepage=loadImage("images/whitepage.jpg");
  Na2O=loadImage("images/Na2O.jpg");
water=loadImage("images/water.gif");
water2=loadImage("images/H2O.jpg");
CuO=loadImage("images/CuO.jpg");
Ironoxide=loadImage("images/Fe2O3,Fe3O4.jpg");
Al2O3=loadImage("images/Al2O3.jpg");
HCl=loadImage("images/HCl.jpg");
CuCl2=loadImage("images/CuCl2 with other halogens.jpg");
FeCl3=loadImage("images/FeCl3 .jpg");
NaCl=loadImage("images/NaCl.jpg");

  coins=loadImage("images/coin.jpg");
    periot=loadImage("images/periodic ta ww.png");
    track=loadImage("images/road.png");
   carimg1=loadImage("images/car1.png");
   carimg2=loadImage("images/car2.png");
   carimg3=loadImage("images/car3.png");
   carimg4=loadImage("images/car4.png");
   obtruck=loadImage("images/truck_1.png");

    H=loadImage("images/1.png");
    O=loadImage("images/8.png");
    Fer=loadImage("images/26.png");
    //Ca=loadImage("images/20.png");
    Na=loadImage("images/11.png");
   //Znc=loadImage("images/30.png");
    Cup=loadImage("images/29.png");
   Alu=loadImage("images/13.png");
    Cl=loadImage("images/17.png");
   // S=loadImage("images/16.png");
   // tabl=loadImage("images/wt.png");
    bgcover=loadImage("images/bgcover.jpg");


/*if(1==1){
    Hy=loadImage("images/Hydrogen.jpg");
//group 1
    Li=loadImage("images/Lithium.jpg");
    Sodium=loadImage("images/Sodium.jpg");
    K=loadImage("images/potassium.jpg");
    Rb=loadImage("images/Rb.jpg");
    Cs=loadImage("images/Cs.jpg");
    Fr=loadImage("images/Fr.jpg");
//group2
    Be=loadImage("images/Be.jpg");
    Mg=loadImage("images/mg.jpg");
    Ca=loadImage("images/ca.jpg");
    Sr=loadImage("images/Sr.jpg");
    Ba=loadImage("images/Ba.jpg");
    Ra=loadImage("images/Ra.jpg");
    Hd=loadImage("images/Hd.jpg");

 //group3
    Sc=loadImage("images/Sc.jpg");
    Y=loadImage("images/Y.jpg");
    Lanthst=loadImage("images/lanthanoids start.jpg");   
   
    //group4
    Ti=loadImage("images/Ti.jpg");
    Zr=loadImage("images/Zr.jpg");
    Hf=loadImage("images/Hf.jpg");

//group5
Va=loadImage("images/Va.jpg");
Nb=loadImage("images/Nb.jpg");
Ta=loadImage("images/Ta.jpg");

//group6
Cr=loadImage("images/Cr.jpg");
Mo=loadImage("images/Mo.jpg");
W=loadImage("images/W.jpg");

//group7
Mn=loadImage("images/Mn.jpg");
Tc=loadImage("images/Tc.jpg");
Re=loadImage("images/Re.jpg");

//group8
Fe=loadImage("images/Fe.jpg");
Ru=loadImage("images/Ru.jpg");
Os=loadImage("images/Os.jpg");

//group9
Co=loadImage("images/Co.jpg");
Rh=loadImage("images/Rh.jpg");
Ir=loadImage("images/Ir.jpg");

//group10
Ni=loadImage("images/Ni.jpg");
Pd=loadImage("images/Pd.jpg");
Pt=loadImage("images/Pt.jpg");

//group11
Cu=loadImage("images/Cu.jpg");
//Ag=loadImage("images/Ag.jpg");
Au=loadImage("images/Au.jpg");

//group12
Zn=loadImage("images/Zn.jpg");
Cd=loadImage("images/Cd.jpg");
Hg=loadImage("images/Hg.jpg");

//group13
B=loadImage("images/B.jpg");
Al=loadImage("images/Al.jpg");
Ga=loadImage("images/Ga.jpg");
In=loadImage("images/In.jpg");
Tl=loadImage("images/Tl.jpg");
Nh=loadImage("images/Nh.jpg");

//group 14
C=loadImage("images/C.jpg");
Si=loadImage("images/Si.jpg");
Ge=loadImage("images/Ge.jpg");
Sn=loadImage("images/Sn.jpg");
Pb=loadImage("images/Pb.jpg");
Fl=loadImage("images/Fl.jpg");

//group15
N=loadImage("images/N.jpg");
Pho=loadImage("images/Pho.jpg");
As=loadImage("images/As.jpg");
Sb=loadImage("images/Sb.jpg");
Bi=loadImage("images/Bi.jpg");
Mc=loadImage("images/Mc.jpg");
Lid=loadImage("images/Lid.jpg");

//group16
Ox=loadImage("images/O.jpg");
Sul=loadImage("images/S.jpg");
Se=loadImage("images/Se.jpg");
Te=loadImage("images/Te.jpg");
Po=loadImage("images/Po.jpg");
Lv=loadImage("images/Lv.jpg");

//group17
F=loadImage("images/F.jpg");
Clo=loadImage("images/Cl.jpg");
Br=loadImage("images/Br.jpg");
I=loadImage("images/I.jpg");
At=loadImage("images/At.jpg");
Ts=loadImage("images/Ts.jpg");

//group18
Ne=loadImage("images/Ne.jpg");
Ar=loadImage("images/Ar.jpg");
Kr=loadImage("images/Kr.jpg");
//Xe=loadImage("images/Xe.jpg");
Rn=loadImage("images/Rn.jpg");
Og=loadImage("images/Og.jpg");
Lid=loadImage("images/Lid.jpg")
}
*/
}

function setup(){
 createCanvas(displayWidth,displayHeight-140);
 database = firebase.database();
 
leftgroup=new Group();
rightgroup=new Group();
 background(32,42,64);
 

m=createSprite(mouseX,mouseY,1,1);

       pertab=createButton("GO TO PERIODIC TABLE")
        pertab.position(displayWidth/2-100,displayHeight/2);
       pertab.style('width', '200px');
       pertab.style('height', '40px');
        pertab.style('background', 'lightpink');

        react=createButton("GO TO REACTION CENTRE")
        react.position(displayWidth/2-100,displayHeight/2-200);
        react.style('width', '200px');
        react.style('height', '40px');
        react.style('background', 'lightpink');

        back2=createButton("REFRESH")
  back2.position(displayWidth/3,displayHeight/13)
  back2.style('width','70px');
  back2.style('height','40px');
  back2.style('background','yellow');

  back=createButton("BACK")
  back.position(displayWidth/6,displayHeight/13)
  back.style('width','70px');
  back.style('height','40px');
  back.style('background','yellow');

      game=createButton("GO TO THE GAME")
      game.position(displayWidth/2-100,displayHeight/2-100);
      game.style('width', '200px');
      game.style('height', '40px');
      game.style('background', 'lightpink');
 creategame1();
 
}
function creategame1(){
  Hydrogen=createSprite(100,displayHeight/10);
  Hydrogen.addImage(H);
  Hydrogen.scale=0.2;
  Hydrogen1=createSprite(displayWidth/1.07,displayHeight/10);
  Hydrogen1.addImage(H);
  Hydrogen1.scale=0.2;
  
  oxygen2=createSprite(displayWidth/1.07,displayHeight/5);
  oxygen2.addImage(O);
  oxygen2.scale=0.2;
  oxygen=createSprite(100,displayHeight/5,30,30);
  oxygen.addImage(O);
  oxygen.scale=0.2;
  
  Iron=createSprite(100,displayHeight/3.3);
  Iron.addImage(Fer);
  Iron.scale=0.2;
  Iron2=createSprite(displayWidth/1.07,displayHeight/3.3);
  Iron2.addImage(Fer);
  Iron2.scale=0.2;
  
  sodium=createSprite(100,displayHeight/2.45);
  sodium.addImage(Na);
  sodium.scale=0.2;
  sodium2=createSprite(displayWidth/1.07,displayHeight/2.45);
  sodium2.addImage(Na);
  sodium2.scale=0.2;
  
  chlo=createSprite(100,displayHeight/1.95);
  chlo.addImage(Cl);
  chlo.scale=0.2;
  chlo2=createSprite(displayWidth/1.07,displayHeight/1.95);
  chlo2.addImage(Cl);
  chlo2.scale=0.2;
  
  copper=createSprite(100,displayHeight/1.62);
  copper.addImage(Cup);
  copper.scale=0.2;
  copper2=createSprite(displayWidth/1.07,displayHeight/1.62);
  copper2.addImage(Cup);
  copper2.scale=0.2;
  
  alum=createSprite(100,displayHeight/1.38,30,30);
  alum.addImage(Alu);
  alum.scale=0.2;
  alum2=createSprite(displayWidth/1.07,displayHeight/1.38);
  alum2.addImage(Alu);
  alum2.scale=0.2;
  
  
  //console.log(mouseX);
  //console.log(mouseY);
  leftgroup.add(Hydrogen);
  leftgroup.add(oxygen);
  leftgroup.add(Iron);
  leftgroup.add(chlo);
  leftgroup.add(alum);
  leftgroup.add(copper);
  leftgroup.add(sodium);
  
  rightgroup.add(Hydrogen1);
  rightgroup.add(oxygen2);
  rightgroup.add(Iron2);
  rightgroup.add(chlo2);
  rightgroup.add(alum2);
  rightgroup.add(copper2);
  rightgroup.add(sodium2);
  
}
function initializeGameOne()
{

  background("white");
 showgame1();
  
  
  Box1=createSprite(displayWidth/2-30,displayHeight/10,100,80);
  Box1.visible=false;

  Box2=createSprite(displayWidth/2+60,displayHeight/10,100,80);
  Box2.visible=false;
  Box1.setCollider("rectangle",0,0,100,80)
  Box1.debug = true
  Box2.setCollider("rectangle",0,0,100,80)
  Box2.debug = true
//  Hydrogen.visible=true;
 //Hydrogen1.visible=true;

}
function showgame1(){
  Hydrogen.visible=true;
  Hydrogen1.visible=true;
  oxygen.visible=true;
  oxygen2.visible=true;
  alum.visible=true;
  alum2.visible=true;
  sodium.visible=true;
  sodium2.visible=true;
  copper.visible=true;
  copper2.visible=true;
  chlo.visible=true;
  chlo2.visible=true;
  Iron.visible=true;
  Iron2.visible=true;
}
function hidegame1(){
  Hydrogen.visible=false;
  Hydrogen1.visible=false;
  oxygen.visible=false;
  oxygen2.visible=false;
  alum.visible=false;
  alum2.visible=false;
  sodium.visible=false;
  sodium2.visible=false;
  copper.visible=false;
  copper2.visible=false;
  chlo.visible=false;
  chlo2.visible=false;
  Iron.visible=false;
  Iron2.visible=false;

}
/*function hidegame2(){
  H.visible=false;
  Lit.visible=false;
  Sod.visible=false;
 Rubidium.visible=false;
  Pot.visible=false;
  Cesium.visible=false;
  fr

}*/
function draw(){
    //console.log(gamest);
   
    back.mousePressed(gamest0);
    if(gamest==0){
        background(bgcover);
        
       pertab.mousePressed(gamest2)
       back.hide();
       back2.hide();
     
      react.mousePressed(gamest1)

      gameoneLoaded=false;
      game.mousePressed(gamest3)
           
        
    }
    if(gamest==1 && !gameoneLoaded){
   initializeGameOne();
   react.hide();
    game.hide();
    pertab.hide();
    back.show();
    back2.show();
     //game.hide();
  //game.style('display','none');
  //pertab.style('display','none');
   gameoneLoaded = true;
    drawSprites();
 
    }
function refreshCompound()
{

Hydrogen.x=100;
oxygen.x=100
sodium.x=100;
chlo.x=100;
Iron.x=100;
copper.x=100;
alum.x=100;
Hydrogen.y=displayHeight/10;
oxygen.y=displayHeight/5;
sodium.y=displayHeight/2.45;
Iron.y=displayHeight/3.3;
chlo.y=displayHeight/1.95;
alum.y=displayHeight/1.62;
copper.y=displayHeight/1.38;


Hydrogen1.x=displayWidth/1.07;
oxygen2.x=displayWidth/1.07;
sodium2.x=displayWidth/1.07;
chlo2.x=displayWidth/1.07;
Iron2.x=displayWidth/1.07;
copper2.x=displayWidth/1.07;
alum2.x=displayWidth/1.07;
Hydrogen1.y=displayHeight/10;
oxygen2.y=displayHeight/5;
sodium2.y=displayHeight/2.45;
Iron2.y=displayHeight/3.3;
chlo2.y=displayHeight/1.95;
alum2.y=displayHeight/1.62;
copper2.y=displayHeight/1.38;

image(whitepage,displayWidth/4,displayHeight/5);


}
 
    if(gameoneLoaded && mouseIsPressed)
    {


      if(back2.mousePressed(refreshCompound))
      {

      
      }

     for(var i1=0;i1<leftgroup.length;i1++){
        if(mousePressedOver(leftgroup.get(i1))){
         gamest=9;
           leftgroup.get(i1).position.x=Box1.position.x;
           leftgroup.get(i1).position.y=Box1.position.y;
           box1selected= true;
           console.log(i1);
  
         }  
     }
    for(var i2=0;i2<rightgroup.length;i2++){
        if(mousePressedOver(rightgroup.get(i2))){
            rightgroup.get(i2).position.x=Box2.position.x;
           gamest=9;
            rightgroup.get(i2).position.y=Box2.position.y;  
            console.log(i2)  
             box2selected=true;
         } 
    }
    
  
 

if((box1selected && box2selected) || reLoadCompound)
{
//equation0=createSprite(displayWidth/2,displayHeight/2);
 // equation0.addImage(whitepage);
  reLoadCompound = true;
  box2selected = false;
  box1selected = false;

if(alum.x==Box1.x&&oxygen2.x==Box2.x||(oxygen.x==Box1.x&&alum2.x==Box2.x)){

image(Al2O3,displayWidth/4,displayHeight/5);
console.log("al2o3");

}
if(Hydrogen.x==Box1.x&&oxygen2.x==Box2.x||(oxygen.x==Box1.x&&Hydrogen1.x==Box2.x)){

  image(water2,displayWidth/4,displayHeight/5);
  console.log("water");
}  
if(sodium.x==Box1.x&&chlo2.x==Box2.x||(chlo.x==Box1.x&&sodium2.x==Box2.x)){
 
image(NaCl,displayWidth/4,displayHeight/5);
console.log("nacl");


}
if(sodium.x==Box1.x&&oxygen2.x==Box2.x||(oxygen.x==Box1.x&&sodium2.x==Box2.x)){

  image(Na2O,displayWidth/4,displayHeight/5)
  console.log("na2o");
 
}    
if(copper.x==Box1.x&&oxygen2.x==Box2.x||(copper2.x==Box2.x&&oxygen.x==Box1.x)){
  image(CuO,displayWidth/4,displayHeight/5);
  console.log("cuo")
}  
if(copper.x==Box1.x&&chlo2.x==Box2.x||(copper2.x==Box2.x&&chlo.x==Box1.x)){
  image(CuCl2,displayWidth/4,displayHeight/5);
  console.log("cucl2");
}


if(Iron.x==Box1.x&&oxygen2.x==Box2.x||(Iron2.x==Box2.x&&oxygen.x==Box1.x)){
 
image(Ironoxide,displayWidth/4,displayHeight/5);
console.log("ironoxide");
 
}  

if(Hydrogen.x==Box1.x&&chlo2.x==Box2.x||(chlo.x==Box1.x&&Hydrogen1.x==Box2.x)){
image(HCl,displayWidth/4,displayHeight/5);
console.log("hcl");
   
}


if(Iron.x==Box1.x&&chlo2.x==Box2.x||(chlo.x==Box1.x&&Iron2.x==Box2.x)){
  image(FeCl3,displayWidth/4,displayHeight/5);
console.log("fecl3");
}
if(alum.x==Box1.x&&chlo2.x==Box2.x||(chlo.x==Box1.x&&alum2.x==Box2.x)){
  
console.log("alcl3");
}
  
}//end of box1 and box2 selection
    

drawSprites();
 }




if(gamest==2){
    background(65,68,94);
   
    react.hide();
    game.hide();
    pertab.hide();
    hidegame1();
    back.show();
   gameoneLoaded=false;
    
   d=createSprite(displayWidth/2,displayHeight/2,100,100);
   d.visible=false;

    H=createSprite(displayWidth/2,displayHeight/10);
    H.addImage(Hy);
    H.scale=0.8;
    
    if(mousePressedOver(H)){
      d.addImage(Hd)
      Lit.visible=false;
      d.visible=true;
      console.log("Hey");
  
    }
   var Cross=createSprite(displayWidth/2,displayHeight/6,40,40);
    Cross.visible=false;

    Lit=createSprite(displayWidth/11,displayHeight/5);
    Lit.addImage(Li);
    Lit.scale=0.8;
    
       /* if(mousePressedOver(Lit)){
        var sprite=createSprite(displayWidth/2,displayHeight/2,100,100);
    
      
       d.visible=false;
console.log("Heyy");
         
        }*/
      
  

        Sod=createSprite(displayWidth/11,displayHeight/3.75);
         Sod.addImage(Sodium);
         Sod.scale=0.8;

         Pot=createSprite(displayWidth/11,displayHeight/2.95);
         Pot.addImage(K);
         Pot.scale=0.8;
         

         Rubidium=createSprite(displayWidth/11,displayHeight/2.46);
         Rubidium.addImage(Rb);
        Rubidium.scale=0.8;

        Cesium=createSprite(displayWidth/11,displayHeight/2.1);
        Cesium.addImage(Cs);
        Cesium.scale=0.8;

        Fran=createSprite(displayWidth/11,displayHeight/1.84);
        Fran.addImage(Fr);
        Fran.scale=0.8;

         Ber=createSprite(displayWidth/7.5,displayHeight/5);
         Ber.addImage(Be);
         Ber.scale=0.8;

         Mag=createSprite(displayWidth/7.5,displayHeight/3.75);
         Mag.addImage(Mg);
         Mag.scale=0.8;
        
         Cal=createSprite(displayWidth/7.5,displayHeight/2.952);
         Cal.addImage(Ca);
         Cal.scale=0.8;
         
         Str=createSprite(displayWidth/7.5,displayHeight/2.46);
         Str.addImage(Sr);
        Str.scale=0.8;

        Barium=createSprite(displayWidth/7.5,displayHeight/2.1);
        Barium.addImage(Ba);
        Barium.scale=0.8;
        
        Radium=createSprite(displayWidth/7.5,displayHeight/1.84);
        Radium.addImage(Ra);
        Radium.scale=0.8;
        

       //group 3
       Scandium=createSprite(displayWidth/5.7,displayHeight/2.95);
       Scandium.addImage(Sc);
       Scandium.scale=0.8;
       
       Yttrium=createSprite(displayWidth/5.7,displayHeight/2.46);
       Yttrium.addImage(Y);
       Yttrium.scale=0.8;

       Lanst=createSprite(displayWidth/5.7,displayHeight/2.1);
      Lanst.addImage(Lanthst);
      Lanst.scale=0.8;


      //group4
      Titan=createSprite(displayWidth/4.6,displayHeight/2.95);
      Titan.addImage(Ti);
      Titan.scale=0.8;
      
     Zirc=createSprite(displayWidth/4.6,displayHeight/2.46);
     Zirc.addImage(Zr);
     Zirc.scale=0.8;

     Haf=createSprite(displayWidth/4.6,displayHeight/2.1);
     Haf.addImage(Hf);
     Haf.scale=0.8;

     //group5

    Vanad=createSprite(displayWidth/3.85,displayHeight/2.95);
    Vanad.addImage(Va);
    Vanad.scale=0.8;
     
    Niob=createSprite(displayWidth/3.85,displayHeight/2.46);
    Niob.addImage(Nb);
    Niob.scale=0.8;

    Tal=createSprite(displayWidth/3.85,displayHeight/2.1);
    Tal.addImage(Ta);
    Tal.scale=0.8;
    

  //  group6
    
  Crom=createSprite(displayWidth/3.32,displayHeight/2.95);
  Crom.addImage(Cr);
  Crom.scale=0.8;
   
 Moly=createSprite(displayWidth/3.32,displayHeight/2.46);
 Moly.addImage(Mo);
 Moly.scale=0.8;

  Tung=createSprite(displayWidth/3.32,displayHeight/2.1);
  Tung.addImage(W);
  Tung.scale=0.8;
  
 // group7

 Mang=createSprite(displayWidth/2.9,displayHeight/2.95);
 Mang.addImage(Mn);
 Mang.scale=0.8;
   
 Tech=createSprite(displayWidth/2.9,displayHeight/2.46);
 Tech.addImage(Tc);
 Tech.scale=0.8;

  Rhen=createSprite(displayWidth/2.9,displayHeight/2.1);
 Rhen.addImage(Re);
  Rhen.scale=0.8;
  
//group8
Ferr=createSprite(displayWidth/2.58,displayHeight/2.95);
Ferr.addImage(Fe);
Ferr.scale=0.8;
   
 Ruth=createSprite(displayWidth/2.58,displayHeight/2.46);
 Ruth.addImage(Ru);
 Ruth.scale=0.8;

  Osm=createSprite(displayWidth/2.58,displayHeight/2.1);
  Osm.addImage(Os);
  Osm.scale=0.8;
  
//group9
Coba=createSprite(displayWidth/2.32,displayHeight/2.95);
Coba.addImage(Co);
Coba.scale=0.8;
   
 Rho=createSprite(displayWidth/2.32,displayHeight/2.46);
 Rho.addImage(Rh);
 Rho.scale=0.8;

  Iri=createSprite(displayWidth/2.32,displayHeight/2.1);
  Iri.addImage(Ir);
  Iri.scale=0.8;
  
//group10
Nick=createSprite(displayWidth/2.11,displayHeight/2.95);
Nick.addImage(Ni);
Nick.scale=0.8;
   
Pall=createSprite(displayWidth/2.11,displayHeight/2.46);
Pall.addImage(Pd);
Pall.scale=0.8;

Plat=createSprite(displayWidth/2.11,displayHeight/2.1);
Plat.addImage(Pt);
Plat.scale=0.8;
  
//group11
Cop=createSprite(displayWidth/1.94,displayHeight/2.95);
Cop.addImage(Cu);
Cop.scale=0.8;
   
//Silver=createSprite(displayWidth/2.32,displayHeight/2.46);
//Silver.addImage(Ag);
//Silver.scale=0.8;

Gold=createSprite(displayWidth/1.94,displayHeight/2.1);
Gold.addImage(Au);
Gold.scale=0.8;

//group12
Zinc=createSprite(displayWidth/1.79,displayHeight/2.95);
Zinc.addImage(Zn);
Zinc.scale=0.8;
   
Cadm=createSprite(displayWidth/1.79,displayHeight/2.46);
Cadm.addImage(Cd);
Cadm.scale=0.8;

Mercury=createSprite(displayWidth/1.79,displayHeight/2.1);
Mercury.addImage(Hg);
Mercury.scale=0.8;

//group 13
        Bor=createSprite(displayWidth/1.66,displayHeight/5);
        Bor.addImage(B);
        Bor.scale=0.8;

         Alumi=createSprite(displayWidth/1.66,displayHeight/3.74);
         Alumi.addImage(Al);
         Alumi.scale=0.8;
         

         Gall=createSprite(displayWidth/1.66,displayHeight/2.96);
         Gall.addImage(Ga);
         Gall.scale=0.8;

        Ind=createSprite(displayWidth/1.659,displayHeight/2.46);
        Ind.addImage(In);
        Ind.scale=0.8;

        Tla=createSprite(displayWidth/1.66,displayHeight/2.1);
        Tla.addImage(Tl);
        Tla.scale=0.8;
        Nih=createSprite(displayWidth/1.66,displayHeight/1.84);
        Nih.addImage(Nh);
        Nih.scale=0.8;
    
//group14
        Carb=createSprite(displayWidth/1.55,displayHeight/5);
        Carb.addImage(C);
        Carb.scale=0.8;

         Sili=createSprite(displayWidth/1.55,displayHeight/3.74);
         Sili.addImage(Si);
         Sili.scale=0.8;
         

         Germa=createSprite(displayWidth/1.55,displayHeight/2.96);
         Germa.addImage(Ge);
         Germa.scale=0.8;

       Tin=createSprite(displayWidth/1.55,displayHeight/2.46);
        Tin.addImage(Sn);
        Tin.scale=0.8;

        Lead=createSprite(displayWidth/1.55,displayHeight/2.1);
        Lead.addImage(Pb);
        Lead.scale=0.8;

        Fler=createSprite(displayWidth/1.55,displayHeight/1.84);
        Fler.addImage(Fl);
        Fler.scale=0.8;
    
      //  group15
      Nitr=createSprite(displayWidth/1.458,displayHeight/5);
      Nitr.addImage(N);
      Nitr.scale=0.8;

       Phos=createSprite(displayWidth/1.458,displayHeight/3.74);
       Phos.addImage(Pho);
       Phos.scale=0.8;
       

     Arsenic=createSprite(displayWidth/1.458,displayHeight/2.96);
     Arsenic.addImage(As);
       Arsenic.scale=0.8;

     Anti=createSprite(displayWidth/1.458,displayHeight/2.46);
     Anti.addImage(Sb);
     Anti.scale=0.8;

     Bismuth=createSprite(displayWidth/1.458,displayHeight/2.1);
     Bismuth.addImage(Bi);
     Bismuth.scale=0.8;

      Mosc=createSprite(displayWidth/1.458,displayHeight/1.835);
      Mosc.addImage(Mc);
      Mosc.scale=0.8;

      //  group16
      Oxygen=createSprite(displayWidth/1.37,displayHeight/5);
      Oxygen.addImage(Ox);
      Oxygen.scale=0.8;

     Sulp=createSprite(displayWidth/1.37,displayHeight/3.74);
     Sulp.addImage(Sul);
     Sulp.scale=0.8;
       

    Selen=createSprite(displayWidth/1.37,displayHeight/2.96);
    Selen.addImage(Se);
    Selen.scale=0.8;

     Tel=createSprite(displayWidth/1.37,displayHeight/2.46);
     Tel.addImage(Te);
     Tel.scale=0.8;

    Polo=createSprite(displayWidth/1.37,displayHeight/2.1);
    Polo.addImage(Po);
    Polo.scale=0.8;

      Liver=createSprite(displayWidth/1.37,displayHeight/1.835);
      Liver.addImage(Lv);
      Liver.scale=0.8;

       //  group17
       Florine=createSprite(displayWidth/1.292,displayHeight/5);
       Florine.addImage(F);
       Florine.scale=0.8;
 
     Chlorine=createSprite(displayWidth/1.292,displayHeight/3.74);
     Chlorine.addImage(Clo);
     Chlorine.scale=0.8;
        
 
     Bromi=createSprite(displayWidth/1.292,displayHeight/2.96);
     Bromi.addImage(Br);
     Bromi.scale=0.8;
 
      Iodi=createSprite(displayWidth/1.292,displayHeight/2.46);
      Iodi.addImage(I);
      Iodi.scale=0.8;
 
     Astat=createSprite(displayWidth/1.292,displayHeight/2.1);
     Astat.addImage(At);
     Astat.scale=0.8;
 
      Tennes=createSprite(displayWidth/1.292,displayHeight/1.835);
      Tennes.addImage(Ts);
      Tennes.scale=0.8;
 
 //  group18
Neon=createSprite(displayWidth/1.223,displayHeight/5);
Neon.addImage(Ne);
Neon.scale=0.8;

Argon=createSprite(displayWidth/1.223,displayHeight/3.74);
Argon.addImage(Ar);
Argon.scale=0.8;
  

Kryp=createSprite(displayWidth/1.223,displayHeight/2.96);
Kryp.addImage(Kr);
Kryp.scale=0.8;

//Xenon=createSprite(displayWidth/1.292,displayHeight/2.46);
//Xenon.addImage(Xe);
//Xenon.scale=0.8;

Radon=createSprite(displayWidth/1.223,displayHeight/2.1);
Radon.addImage(Rn);
Radon.scale=0.8;

Ogna=createSprite(displayWidth/1.223,displayHeight/1.835);
Ogna.addImage(Og);
Ogna.scale=0.8;

if(mousePressedOver(Lit)){
  image(Lid,displayWidth/2,displayHeight/2);

   }
  

    drawSprites();

}
 if(gamest==3){

background("yellow");
react.hide();
pertab.hide();
game.hide();
game = new Game();
 game.getState();
 game.start();
 if(playerCount==4){
    game.update(4);
   }
   if(gamest==4){
  clear();

  game.play();
   }
   if(gamest==5){
     game.end();
   }
   drawSprites();
 }

}//end of draw function



function gamest1(){
    gamest=1;
    redraw();
}
function gamest2(){
    gamest=2;
    
}
function gamest0(){
    gamest=0;
  // game.style('display','block');
  //  pertab.style('display','block')
  //  react.style('display','block');
  game.show();
  pertab.show();
  react.show();
  
}
function gamest3(){
    gamest=3;
    
}
