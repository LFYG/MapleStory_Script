importPackage(java.util);
importPackage(net.sf.odinms.client);
importPackage(net.sf.odinms.server);
importPackage(net.sf.odinms.tools); 

var status = 0;    //��Ҫ��������һЩ���õ���Ʒ
var typed=0;
var fee=0; 
var chance3 = (Math.floor(Math.random()*8)+1);
var chance = Math.floor(Math.random()*4+1); 
var dianjuan=35;  //����20������Ҫ�������
var jindaizi=30;  //����2���������Ҫ�������
var vip1=1;  //���������Ա��Ҫ�������
var vip2=500;  //����߼���Ա��Ҫ�������
var vip3=1500; //�����ռ���Ա��Ҫ�������
var vip4=3000; //���������Ա��Ҫ�������
var vip1tovip2=500;  //������Ա���߼���Ա��Ҫ�������
var vip2tovip3=1000;  //�߼���Ա���ռ���Ա��Ҫ�������
var vip3tovip4=1500;  //�ռ���Ա�������Ա��Ҫ�������
var shuangbei=30;   //����˫�����鿨��Ҫ�������
var sibei=300;      //�����ı����鿨��Ҫ�������
var pksibei=500;    //�����ı�PK�޵п���Ҫ�������
var zjghm=50; //����װ����������ħ������Ҫ�������
var taocan100=50;   //����100�ײ���Ҫ�������
var taocan200=100;   //����200�ײ���Ҫ�������
var taocan300=150;   //����300�ײ���Ҫ�������
var taocan400=200;   //����300�ײ���Ҫ�������
var taocan1000=500;  //����1000�ײ���Ҫ�������
var wenduji=150;     //�����¶ȼ���Ҫ�������
var nanguadeng=130;  //�����Ϲϵ�����Ҫ�������
var bingdao=108;     //����ȼ�յı�����Ҫ�������
var huodao=100;      //����ȼ�յĻ��浶��Ҫ�������
var langya=65;       //������������Ҫ�������
var shengjics=10;    //����װ��������������Ҫ�������
var fbk=50;  //����PK��������Ҫ�������       
var zsb=1;  //����ת���������Ҫ�������
var pkqkk=60;//����PKս����տ���Ҫ�������
var qhten=20;        //����ǿ��10��װ���ĵ�����Ҫ�������
var qhfif=40;        //����ǿ��50��װ���ĵ�����Ҫ�������
var qhone=70;        //����ǿ��100��װ���ĵ�����Ҫ�������
var qhtwo=150;        //����ǿ��200��װ���ĵ�����Ҫ�������

var zjqh=10000;        //����װ���ռ�ǿ����Ҫ�������

var zbjs=10;        //����װ��װ��������Ҫ�������

var cjqhyyb=10;        //���г���ǿ����Ҫ�������
var cjqhjb=1;        //���г���ǿ����Ҫ�Ľ��

var gjqhyyb=30;        //���и߼�ǿ����Ҫ�������
var gjqhjb=1000000000;        //���и߼�ǿ����Ҫ�Ľ��

var chaojqhyyb=80;        //���г���ǿ����Ҫ�������
var chaojs=1000000000;        //���г���ǿ����Ҫ�Ľ��

var zzqhyyb=100;        //��������ǿ����Ҫ�������
var zzqhjb=1000000000;        //��������ǿ����Ҫ�Ľ��


var luk =0 ;
var beilv = 0.3;   //��װ��������Ӻ���˵ı���
var needap1 = 500; //��Ҫ�����Ե�
var aver = needap*0.1 ;
var needmon1 = 2000000000;  //��Ҫ�Ľ�Ǯ
var needdona1 = 200; //��Ҫ�������


var gmmima =55555 ;

var yyb;


var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*100);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*10+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*5+2);


var wqyoyo = Array(1452044, 1432038, 1372038, 1382036,1462039,1402037,1412026);//������ID
var change=Math.floor(Math.random()*3)+1;// ��������,.
var changed=Math.floor(Math.random()*10)+2;// ��������.
var changeo=Math.floor(Math.random()*6);// �����������,6��.
var changew=Math.floor(Math.random()*100)+5;// �����Ĺ�������
var changem=Math.floor(Math.random()*100)+5;// ������ħ������


var jkms;
var compchoice; 
var playerchoice; 
var Frock = "#fUI/UIWindow.img/RpsGame/Frock#"; 
var Fpaper = "#fUI/UIWindow.img/RpsGame/Fpaper#"; 
var Fscissor = "#fUI/UIWindow.img/RpsGame/Fscissor#"; 
var rock = "#fUI/UIWindow.img/RpsGame/rock#"; 
var paper = "#fUI/UIWindow.img/RpsGame/paper#"; 
var scissor = "#fUI/UIWindow.img/RpsGame/scissor#"; 
var win = "#fUI/UIWindow.img/RpsGame/win#"; 
var lose = "#fUI/UIWindow.img/RpsGame/lose#"; 
var draw = "#fUI/UIWindow.img/RpsGame/draw#"; 
var spacing = "                                   "; 
var beta = "#fUI/UIWindow.img/BetaEdition/BetaEdition#\r\n"; 
var winmatch = false; 
var losematch = false 
var drawmatch = false; 
var cost = 2000000; //��Ҫ����Ǯ��,�����.. �����Լ���..
var winmesos = 2000000; //ӮǮ�������Լ���
var items = new Array(2000005); //�Դ�����,��Щ��������������Ӯ����������,��д����Щ��������ӵ�,����Ҫ�Լ��ĵ�,�Ҳ�֪����û����Щ����..
var selectedType = -1; 
var selectedItem = -1; 
var map = 910000000; 
var textedd = new Array("ף����MapleWings�ҵ���������","ף����MapleWingsð�յ����ÿ���","ף����MapleWings�ҵ���������");

var test = 0;  //64
var wui = 0;
var fstype=0;
var selected = 1;
var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*2+1);
var itemchance = chance1 + chance2 + chance3 * chance4;
var itemamount = Math.floor(Math.random()*50+1);

var t=new Array("��Ǯ","ȡǮ","�鿴","����");
var money=new Array("100W","300W","500W","1000W","1E","10E","20E"); 
var money1=new Array("1000000","3000000","5000000","10000000","100000000","1000000000","2000000000"); 
var x=0;

var text;
var fee;
var chance = Math.floor(Math.random()*4+1);
var music = Array("Bgm00/SleepyWood", "Bgm00/FloralLife", "Bgm00/GoPicnic", "Bgm00/Nightmare", "Bgm00/RestNPeace",
"Bgm01/AncientMove", "Bgm01/MoonlightShadow", "Bgm01/WhereTheBarlogFrom", "Bgm01/CavaBien", "Bgm01/HighlandStar", "Bgm01/BadGuys",
"Bgm02/MissingYou", "Bgm02/WhenTheMorningComes", "Bgm02/EvilEyes", "Bgm02/JungleBook", "Bgm02/AboveTheTreetops",
"Bgm03/Subway", "Bgm03/Elfwood", "Bgm03/BlueSky", "Bgm03/Beachway", "Bgm03/SnowyVillage",
"Bgm04/PlayWithMe", "Bgm04/WhiteChristmas", "Bgm04/UponTheSky", "Bgm04/ArabPirate", "Bgm04/Shinin'Harbor", "Bgm04/WarmRegard",
"Bgm05/WolfWood", "Bgm05/DownToTheCave", "Bgm05/AbandonedMine", "Bgm05/MineQuest", "Bgm05/HellGate",
"Bgm06/FinalFight", "Bgm06/WelcomeToTheHell", "Bgm06/ComeWithMe", "Bgm06/FlyingInABlueDream", "Bgm06/FantasticThinking",
"Bgm07/WaltzForWork", "Bgm07/WhereverYouAre", "Bgm07/FunnyTimeMaker", "Bgm07/HighEnough", "Bgm07/Fantasia",
"Bgm08/LetsMarch", "Bgm08/ForTheGlory", "Bgm08/FindingForest", "Bgm08/LetsHuntAliens", "Bgm08/PlotOfPixie",
"Bgm09/DarkShadow", "Bgm09/TheyMenacingYou", "Bgm09/FairyTale", "Bgm09/FairyTalediffvers", "Bgm09/TimeAttack",
"Bgm10/Timeless", "Bgm10/TimelessB", "Bgm10/BizarreTales", "Bgm10/TheWayGrotesque", "Bgm10/Eregos",
"Bgm11/BlueWorld", "Bgm11/Aquarium", "Bgm11/ShiningSea", "Bgm11/DownTown", "Bgm11/DarkMountain",
"Bgm12/AquaCave", "Bgm12/DeepSee", "Bgm12/WaterWay", "Bgm12/AcientRemain", "Bgm12/RuinCastle", "Bgm12/Dispute",
"Bgm13/CokeTown", "Bgm13/Leafre", "Bgm13/Minar'sDream", "Bgm13/AcientForest", "Bgm13/TowerOfGoddess",
"Bgm14/DragonLoad", "Bgm14/HonTale", "Bgm14/CaveOfHontale", "Bgm14/DragonNest", "Bgm14/Ariant", "Bgm14/HotDesert",
"Bgm15/MureungHill", "Bgm15/MureungForest", "Bgm15/WhiteHerb", "Bgm15/Pirate", "Bgm15/SunsetDesert",
"BgmEvent/FunnyRabbit", "BgmEvent/FunnyRabbitFaster",
"BgmGL/amoria", "BgmGL/chapel", "BgmGL/cathedral", "BgmGL/Amorianchallenge",
"BgmJp/Feeling", "BgmJp/BizarreForest", "BgmJp/Hana", "BgmJp/Yume", "BgmJp/Bathroom", "BgmJp/BattleField", "BgmJp/FirstStepMaster");
var chanceo=(Math.floor(Math.random()*8)+1);
var selected;
var typedd=5120000;


var beauty = 0;
var hair = Array(34210, 34050, 34240, 33160);
var hairnew = Array();
var colors = Array();



var haircolor = Array();
var skin = Array(0, 1, 2, 3, 4);
var hair1 = Array(31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31570, 31580, 31590, 31600, 31610, 31620, 31630, 31640, 31650, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740);
var face1 = Array(21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21016, 21017, 21018, 21019, 21020, 21021, 21022);
var facenew = Array();


var face0 = Array(20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024);
var hair0 = Array(30000, 30010, 30020, 30030, 30040, 30050, 30060, 30070, 30090, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30580, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30680, 30690, 30700, 30710, 30720, 30730, 30750, 30760, 30780, 307090, 30800, 30810);


var maps = Array( 
Array("����ñ��",1002562,3000), 
Array("�ֹ�",1322006,1500), 
Array("��֮��ɡ",1302058,1200), 
Array("��߽��˵Ĵ���",1422036,2000), 
Array("���",1422011,1500), 
Array("�Ϲ��ǹ�",1302034,1500), 
Array("��߽���ñ",1002677,1500), 
Array("�����ռ���ͷ��",1002527,10000), 
Array("ʥ��¹ñ",1002717,15000), 
Array("ȼ�յĻ��浶",1302063,20000), 
Array("���ɳ��",3010012,18888) 
); 
var selectedMap = -1; 

var needyyb = 2;
var needjb = 100000000;

var needyyb1 = 1;
var needjb1 = 50000000;

var needap = 0;
var needsp = 0;
var needdona = 5;
var needmon = 100000000;
var slot;
var item;
var qty;
var display;
var playernumber = Math.floor(Math.random()*4+1);
var types=new Array("���T��װ������T��","���T����������T��","���T����������T��","���T����������T��","���T���ֽ�����T��");
var itemname;



function start() { 
status = -1; 
action(1, 0, 0); 
} 

function action(mode, type, selection) { 
if (mode == -1) {
cm.dispose(); 
} else { 
if (status >= 0 && mode == 0) {
                
cm.sendOk("\r\n#d�ټ�,����������Ҫ��ʲô,�һ�������Ϊ������..");
cm.dispose();
return;                    
}
if (mode == 1) {
status++; 
}
else {
status--;
}
if (status == 0) { 

cm.mapMessage("[��������Ա]:��������Ӻܶ��¹��ܣ������кܶ�ϡ�й���Ŷ����������!!");
if(cm.getHour()>=0 && cm.getHour()>=12){
cm.changeMusic("BgmJp/FirstStepMaster");
}else if(cm.getHour()>=18 && cm.getHour()>=23){
cm.changeMusic("BgmJp/FirstStepMaster");
}else{
cm.changeMusic("BgmJp/FirstStepMaster");
}


if(cm.getChar().getMapId()==970010000){//�ж�NPC���ڵ�ͼ
if (cm.getChar().getVip() >= 1) {
cm.sendSimple("#dVIP��ң� #e#r[   #h #  ]#k  #n#d��á���ӭ����VIPר����ͼ��\r\n#d����������#rMapleWingsw#dΪ#rVIP#d�ķ�����ѡ��\r\n#r#L100000#����-----����VIP ���� #l\r\n\r\n #r#L200000#����-----�߼�VIP ���� #l #e\r\n\r\n#r#L300000#����-----����VIP ���� #l \r\n\r\n#r#L400000#����-----����VIP ���� #l  \r\n\r\n#r#L500000#�������г� #l  "); 

}else{
cm.sendSimple("#d��ӭ����VIPר����ͼ��#r�㲻��VIP���Ҳ���Ϊ�����!��ѡ��\r\n\r\n#r#L500000#�������г� #l"); 
cm.dispose();
}


} else {
if(cm.getChar().getAccountID()==1){
cm.sendSimple("#d\r\n���Ĺ���Ա�� #e#r[   #h #  ]#k  #n#d���á�#e\r\n#r������#r�� 7 ��#e��������Ŀ����ѡ��#e\r\n#r#L1111#���������������T�����Ŀ�١�T�������������� #l   \r\n\r\n#n�١�#b�ں�#rVIP�һ�������#dʹ��ð�ձҹ��� ����� #b�ȷ���#r����#e\r\n#r#L2222#���������������T�����Ŀ�ڡ�T�������������� #l  \r\n\r\n#n�ڡ�#b�ں�#rת��תְ�����ܣ�#b���У�#d����ˢǮ��ͼ#b�ȷ���#r����#e\r\n#r#L3333#���������������T�����Ŀ�ۡ�T�������������� #l \r\n\r\n#n�ۡ�#d�ں�#r����PK��#b��PKս��,#d����Һͽ����ȡ#b�ȷ���#r����  #e\r\n#r#L4444#���������������T�����Ŀ�ܡ�T�������������� #l \r\n\r\n#n�ܡ�#b�ں�#r������ս��#dȤζ���֣����������⹦��#b�ȷ���#r����#e\r\n#r#L5555#���������������T�����Ŀ�ݡ�T�������������� #l  \r\n\r\n#n �ݡ�#b�ں�#r��ɫ���#d���Ʒ�һ��������װ��#b�ȷ���#r����#e\r\n#r#L6666#���������������T�����Ŀ�ޡ�T�������������� #l  \r\n\r\n#n �ޡ�#b�ں�#rװ������ǿ����#d����������#rװ�����ϳ�#b�ȷ���#r����#e\r\n#r#L7777#���������������T�����Ŀ�ߡ�T�������������� #l  \r\n\r\n#n �ߡ�#b�ں�#r��ɫ�(�齱����ע)��#d������ս(����)#b�ȷ���#r���� \r\n\r\n#n  #k����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.  #k��Ŀǰ�Ѿ�ɱ��#r"+cm.getChar().getPvpKills()+"#k��   ��ɱ����:#r"+cm.getChar().getPvpDeaths()+"#k��  VIP�ȼ�Ϊ��#r"+cm.getChar().getVip()+" #r\r\n#L888# ����---�ƹ�Աϵͳ   #r\r\n#L999# ����---�ռ�����Ա����(����)  "); 
cm.getChar().saveToDB(true,true);




 } else if(cm.getChar().getReborns()>=1){
cm.sendSimple("#d\r\n�װ��ģ� #e#r[#h #]#k  #n#d���,����MapleWings��������Ա��#e\r\n#d�������Ѿ�ת��:    #r"+cm.getChar().getReborns()+"#d     ��   #e\r\n#r������#r�� 7 ��#e��������Ŀ����ѡ��#e\r\n#r#L1111#���������������T�����Ŀ�١�T�������������� #l   \r\n\r\n#n�١�#b�ں�#rVIP�һ�������#dʹ��ð�ձҹ��� ����� #b�ȷ���#r����#e\r\n#r#L2222#���������������T�����Ŀ�ڡ�T�������������� #l  \r\n\r\n#n�ڡ�#b�ں�#rת��תְ�����ܣ�#b���У�#d����ˢǮ��ͼ#b�ȷ���#r����#e\r\n#r#L3333#���������������T�����Ŀ�ۡ�T�������������� #l \r\n\r\n#n�ۡ�#d�ں�#r����PK��#b��PKս��,#d����Һͽ����ȡ#b�ȷ���#r����  #e\r\n#r#L4444#���������������T�����Ŀ�ܡ�T�������������� #l \r\n\r\n#n�ܡ�#b�ں�#r������ս��#dȤζ���֣����������⹦��#b�ȷ���#r����#e\r\n#r#L5555#���������������T�����Ŀ�ݡ�T�������������� #l  \r\n\r\n#n �ݡ�#b�ں�#r��ɫ���#d���Ʒ�һ��������װ��#b�ȷ���#r����#e\r\n#r#L6666#���������������T�����Ŀ�ޡ�T�������������� #l  \r\n\r\n#n �ޡ�#b�ں�#rװ������ǿ����#d����������#rװ�����ϳ�#b�ȷ���#r����#e\r\n#r#L7777#���������������T�����Ŀ�ߡ�T�������������� #l  \r\n\r\n#n �ߡ�#b�ں�#r��ɫ�(�齱����ע)��#d������ս(����)#b�ȷ���#r���� \r\n\r\n#n  #k����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.  #k��Ŀǰ�Ѿ�ɱ��#r"+cm.getChar().getPvpKills()+"#k��   ��ɱ����:#r"+cm.getChar().getPvpDeaths()+"#k��  VIP�ȼ�Ϊ��#r"+cm.getChar().getVip()+" #r\r\n#L888# ����---�ƹ�Աϵͳ    #r\r\n#L999# ����---�ռ�����Ա����(����)  "); 
cm.getChar().saveToDB(true,true);



} else if(cm.getLevel() >= 200 ){

cm.sendSimple("#d\r\n�װ��ģ� #e#r[#h #]#k  #n#d���,����MapleWings��������Ա��#e\r\n#d������ĵȼ��Ѿ��� 200--255 ֮�䡣 #e\r\n#r������#r�� 7 ��#e��������Ŀ����ѡ��#e\r\n#r#L1111#���������������T�����Ŀ�١�T�������������� #l   \r\n\r\n#n�١�#b�ں�#rVIP�һ�������#dʹ��ð�ձҹ��� ����� #b�ȷ���#r����#e\r\n#r#L2222#���������������T�����Ŀ�ڡ�T�������������� #l  \r\n\r\n#n�ڡ�#b�ں�#rת��תְ�����ܣ�#b���У�#d����ˢǮ��ͼ#b�ȷ���#r����#e\r\n#r#L3333#���������������T�����Ŀ�ۡ�T�������������� #l \r\n\r\n#n�ۡ�#d�ں�#r����PK��#b��PKս��,#d����Һͽ����ȡ#b�ȷ���#r����  #e\r\n#r#L4444#���������������T�����Ŀ�ܡ�T�������������� #l \r\n\r\n#n�ܡ�#b�ں�#r������ս��#dȤζ���֣����������⹦��#b�ȷ���#r����#e\r\n#r#L5555#���������������T�����Ŀ�ݡ�T�������������� #l  \r\n\r\n#n �ݡ�#b�ں�#r��ɫ���#d���Ʒ�һ��������װ��#b�ȷ���#r����#e\r\n#r#L6666#���������������T�����Ŀ�ޡ�T�������������� #l  \r\n\r\n#n �ޡ�#b�ں�#rװ������ǿ����#d����������#rװ�����ϳ�#b�ȷ���#r����#e\r\n#r#L7777#���������������T�����Ŀ�ߡ�T�������������� #l  \r\n\r\n#n �ߡ�#b�ں�#r��ɫ�(�齱����ע)��#d������ս(����)#b�ȷ���#r���� \r\n\r\n#n  #k����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.  #k��Ŀǰ�Ѿ�ɱ��#r"+cm.getChar().getPvpKills()+"#k��   ��ɱ����:#r"+cm.getChar().getPvpDeaths()+"#k��  VIP�ȼ�Ϊ��#r"+cm.getChar().getVip()+" #r\r\n#L888# ����---�ƹ�Աϵͳ  "); 
cm.getChar().saveToDB(true,true);



} else if(cm.getLevel() >= 150 ){
cm.sendSimple("#d\r\n�װ��ģ� #e#r[#h #]#k  #n#d���,����MapleWings��������Ա��#e\r\n#d������ĵȼ��Ѿ��� 150--200 ֮�䡣 #e\r\n#r������#r�� 6 ��#e��������Ŀ����ѡ��#e\r\n#r#L1111#���������������T�����Ŀ�١�T�������������� #l   \r\n\r\n#n�١�#b�ں�#rVIP�һ�������#dʹ��ð�ձҹ��� ����� #b�ȷ���#r����#e\r\n#r#L2222#���������������T�����Ŀ�ڡ�T�������������� #l  \r\n\r\n#n�ڡ�#b�ں�#rת��תְ�����ܣ�#b���У�#d����ˢǮ��ͼ#b�ȷ���#r����#e\r\n#r#L3333#���������������T�����Ŀ�ۡ�T�������������� #l \r\n\r\n#n�ۡ�#d�ں�#r����PK��#b��PKս��,#d����Һͽ����ȡ#b�ȷ���#r����  #e\r\n#r#L4444#���������������T�����Ŀ�ܡ�T�������������� #l \r\n\r\n#n�ܡ�#b�ں�#r������ս��#dȤζ���֣����������⹦��#b�ȷ���#r����#e\r\n#r#L5555#���������������T�����Ŀ�ݡ�T�������������� #l  \r\n\r\n#n �ݡ�#b�ں�#r��ɫ���#d���Ʒ�һ��������װ��#b�ȷ���#r����#e\r\n#r#L6666#���������������T�����Ŀ�ޡ�T�������������� #l  \r\n\r\n#n �ޡ�#b�ں�#rװ������ǿ����#d����������#rװ�����ϳ�#b�ȷ���#r����\r\n\r\n#n  #k����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.  #k��Ŀǰ�Ѿ�ɱ��#r"+cm.getChar().getPvpKills()+"#k��   ��ɱ����:#r"+cm.getChar().getPvpDeaths()+"#k��  VIP�ȼ�Ϊ��#r"+cm.getChar().getVip()+" ");  
cm.getChar().saveToDB(true,true);


} else if(cm.getLevel() >= 120 ){
cm.sendSimple("#d\r\n�װ��ģ� #e#r[#h #]#k  #n#d���,����MapleWings��������Ա��#e\r\n#d������ĵȼ��Ѿ��� 120--150 ֮�䡣 #e\r\n#r������#r�� 5 ��#e��������Ŀ����ѡ��#e\r\n#r#L1111#���������������T�����Ŀ�١�T�������������� #l   \r\n\r\n#n�١�#b�ں�#rVIP�һ�������#dʹ��ð�ձҹ��� ����� #b�ȷ���#r����#e\r\n#r#L2222#���������������T�����Ŀ�ڡ�T�������������� #l  \r\n\r\n#n�ڡ�#b�ں�#rת��תְ�����ܣ�#b���У�#d����ˢǮ��ͼ#b�ȷ���#r����#e\r\n#r#L3333#���������������T�����Ŀ�ۡ�T�������������� #l \r\n\r\n#n�ۡ�#d�ں�#r����PK��#b��PKս��,#d����Һͽ����ȡ#b�ȷ���#r����  #e\r\n#r#L4444#���������������T�����Ŀ�ܡ�T�������������� #l \r\n\r\n#n�ܡ�#b�ں�#r������ս��#dȤζ���֣����������⹦��#b�ȷ���#r����#e\r\n#r#L5555#���������������T�����Ŀ�ݡ�T�������������� #l  \r\n\r\n#n �ݡ�#b�ں�#r��ɫ���#d���Ʒ�һ��������װ��#b�ȷ���#r����\r\n\r\n#n  #k����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.  #k��Ŀǰ�Ѿ�ɱ��#r"+cm.getChar().getPvpKills()+"#k��   ��ɱ����:#r"+cm.getChar().getPvpDeaths()+"#k��  VIP�ȼ�Ϊ��#r"+cm.getChar().getVip()+"#r\r\n#L888# ����---�ƹ�Աϵͳ   ");  
cm.getChar().saveToDB(true,true);


} else if(cm.getLevel() >= 100 ){
cm.sendSimple("#d\r\n�װ��ģ� #e#r[#h #]#k  #n#d���,����MapleWings��������Ա��#e\r\n#d������ĵȼ��Ѿ��� 100--120 ֮�䡣 #e\r\n#r������#r�� 4 ��#e��������Ŀ����ѡ��#e\r\n#r#L1111#���������������T�����Ŀ�١�T�������������� #l   \r\n\r\n#n�١�#b�ں�#rVIP�һ�������#dʹ��ð�ձҹ��� ����� #b�ȷ���#r����#e\r\n#r#L2222#���������������T�����Ŀ�ڡ�T�������������� #l  \r\n\r\n#n�ڡ�#b�ں�#rת��תְ�����ܣ�#b���У�#d����ˢǮ��ͼ#b�ȷ���#r����#e\r\n#r#L3333#���������������T�����Ŀ�ۡ�T�������������� #l \r\n\r\n#n�ۡ�#d�ں�#r����PK��#b��PKս��,#d����Һͽ����ȡ#b�ȷ���#r����  #e\r\n#r#L4444#���������������T�����Ŀ�ܡ�T�������������� #l \r\n\r\n#n�ܡ�#b�ں�#r������ս��#dȤζ���֣����������⹦��#b�ȷ���#r����\r\n\r\n#n  #k����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.  #k��Ŀǰ�Ѿ�ɱ��#r"+cm.getChar().getPvpKills()+"#k��   ��ɱ����:#r"+cm.getChar().getPvpDeaths()+"#k��  VIP�ȼ�Ϊ��#r"+cm.getChar().getVip()+"#r\r\n#L888# ����---�ƹ�Աϵͳ   ");  
cm.getChar().saveToDB(true,true);



} else if(cm.getLevel() >= 70 ){
cm.sendSimple("#d\r\n�װ��ģ� #e#r[#h #]#k  #n#d���,����MapleWings��������Ա��#e\r\n#d������ĵȼ��Ѿ��� 70--100 ֮�䡣 #e\r\n#r������#r�� 3 ��#e��������Ŀ����ѡ��#e\r\n#r#L1111#���������������T�����Ŀ�١�T�������������� #l   \r\n\r\n#n�١�#b�ں�#rVIP�һ�������#dʹ��ð�ձҹ��� ����� #b�ȷ���#r����#e\r\n#r#L2222#���������������T�����Ŀ�ڡ�T�������������� #l  \r\n\r\n#n�ڡ�#b�ں�#rת��תְ�����ܣ�#b���У�#d����ˢǮ��ͼ#b�ȷ���#r����#e\r\n#r#L3333#���������������T�����Ŀ�ۡ�T�������������� #l \r\n\r\n#n�ۡ�#d�ں�#r����PK��#b��PKս��,#d����Һͽ����ȡ#b�ȷ���#r���� \r\n\r\n#n  #k����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.  #k��Ŀǰ�Ѿ�ɱ��#r"+cm.getChar().getPvpKills()+"#k��   ��ɱ����:#r"+cm.getChar().getPvpDeaths()+"#k��  VIP�ȼ�Ϊ��#r"+cm.getChar().getVip()+" #r\r\n#L888# ����---�ƹ�Աϵͳ  ");  
cm.getChar().saveToDB(true,true);


} else if(cm.getLevel() >= 30 ){
cm.sendSimple("#d\r\n�װ��ģ� #e#r[#h #]#k  #n#d���,����MapleWings��������Ա��#e\r\n#d������ĵȼ��Ѿ��� 30--70 ֮�䡣 #e\r\n#r������#r�� 2 ��#e��������Ŀ��#e\r\n#r#L1111#���������������T�����Ŀ�١�T�������������� #l   \r\n\r\n#n�١�#b�ں�#rVIP�һ�������#dʹ��ð�ձҹ��� ����� #b�ȷ���#r����#e\r\n#r#L2222#���������������T�����Ŀ�ڡ�T�������������� #l \r\n\r\n#n�ڡ�#d�ں�#r����PK��#b��PKս��,#d����Һͽ����ȡ#b�ȷ���#r����\r\n\r\n#n  #k����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.  #k��Ŀǰ�Ѿ�ɱ��#r"+cm.getChar().getPvpKills()+"#k��   ��ɱ����:#r"+cm.getChar().getPvpDeaths()+"#k��  VIP�ȼ�Ϊ��#r"+cm.getChar().getVip()+" ");  
cm.getChar().saveToDB(true,true);


} else if(cm.getLevel() >= 10 ){
cm.sendSimple("#d\r\n�װ��ģ� #e#r[#h #]#k  #n#d���,����MapleWings��������Ա��#e\r\n#d������ĵȼ��Ѿ��� 10--30 ֮�䡣 #e\r\n#r������#r�� 1 ��#e��������Ŀ����ѡ��#e\r\n#r#L1111#���������������T�����Ŀ�١�T�������������� #l   \r\n\r\n#n�١�#b�ں�#rVIP�һ�������#dʹ��ð�ձҹ��� ����� #b�ȷ���#r����\r\n\r\n#n  #k����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.  #k��Ŀǰ�Ѿ�ɱ��#r"+cm.getChar().getPvpKills()+"#k��   ��ɱ����:#r"+cm.getChar().getPvpDeaths()+"#k��  VIP�ȼ�Ϊ��#r"+cm.getChar().getVip()+" #r\r\n#L888# ����---�ƹ�Աϵͳ  ");  
cm.getChar().saveToDB(true,true);



} else if(cm.getLevel() >= 1 ){

cm.sendSimple("#d\r\n�װ��ģ� #e#r[#h #]#k  #n#d���,����MapleWings��������Ա��#e\r\n#r�㻹��������������������������10���ϣ��Ҳ�Ϊ���ṩ����#e\r\n#r���������ṩ����Ҫ��#e\r\n#k1. ������10  �����ϣ��ṩ���񳬼���Ŀ1��#e\r\n#k2. ������30  �����ϣ��ṩ���񳬼���Ŀ2��#e\r\n#k3. ������70  �����ϣ��ṩ���񳬼���Ŀ3��#e\r\n#b4. ������100�����ϣ��ṩ���񳬼���Ŀ4��#e\r\n#g5. ������120�����ϣ��ṩ���񳬼���Ŀ5��#e\r\n#d6. ������150�����ϣ��ṩ���񳬼���Ŀ6��#e\r\n#r7. ������200�����ϣ��ṩ���񳬼���Ŀ7��#e\r\n#r8. ת��1�����Ϻ��ṩ���񳬼���Ŀ7��#d\r\n ���Ͱɣ�Ŭ��������������������Ȥ������Ҫ����������");  
cm.getChar().saveToDB(true,true);






}
}


} else if (status == 1) {


if (selection==999){
typed=999999999;
cm.sendGetText("#e\r\n�����������������T���ռ�����Ա��T��������������\r\n#r���������Ա���룺\r\n#d(ע�⣺����GM�벻Ҫ������)");

} else if (selection==100000){
if (cm.getChar().getVip() >= 1) {
typed=100100;
cm.sendSimple("#d\r\n����VIP��ң� #e#r[   #h #  ]#k  #n#d��á���ӭ����VIPר����ͼ��\r\n#d����������#rMapleWingsw#dΪ���ṩ�ķ�����ѡ��#e\r\n#r#L100001#����-----�ı䷢�ͺͷ�ɫ���� #l\r\n\r\n #r#L100002#����-----����VIP ר���̵� #l   "); 

}else{
cm.sendOk("#d��ӭ����VIPר����ͼ��#r�㲻��VIP���Ҳ���Ϊ�����!"); 
cm.dispose();
}

} else if (selection==200000){
if (cm.getChar().getVip() >= 2) {
typed=200100;
cm.sendSimple("#d\r\n�߼�VIP��ң� #e#r[   #h #  ]#k  #n#d��á���ӭ����VIPר����ͼ��\r\n#d����������#rMapleWingsw#dΪ���ṩ�ķ�����ѡ��#e\r\n#r#L200001#����-----�߼�VIPר������ #l\r\n\r\n #r#L200002#����-----�߼�VIP ר���̵� #l   "); 

}else{
cm.sendOk("#d��ӭ����VIPר����ͼ��#r�㲻�Ǹ߼�VIP���Ҳ���Ϊ�����!"); 
cm.dispose();
}

} else if (selection==300000){
if (cm.getChar().getVip() >= 3) {
typed=300100;
cm.sendSimple("#d\r\n����VIP��ң� #e#r[   #h #  ]#k  #n#d��á���ӭ����VIPר����ͼ��\r\n#d����������#rMapleWingsw#dΪ���ṩ�ķ�����ѡ��#e\r\n#r#L300001#����-----����VIPר������ #l\r\n\r\n #r#L300002#����-----����VIP ר���̵� #l   "); 

}else{
cm.sendOk("#d��ӭ����VIPר����ͼ��#r�㲻�ǳ���VIP���Ҳ���Ϊ�����!"); 
cm.dispose();
}
} else if (selection==400000){
if (cm.getChar().getVip() >= 4) {
typed=400100;
cm.sendSimple("#d\r\n��������VIP��ң� #e#r[   #h #  ]#k  #n#d���á���ӭ����VIPר����ͼ��\r\n#d����������#rMapleWingsw#dΪ���ṩ�ķ�����ѡ��#e\r\n#r#L400001#����-----����VIPר������ #l\r\n\r\n #r#L400002#����-----����VIP ר���̵� #l   "); 

}else{
cm.sendOk("#d��ӭ����VIPר����ͼ��#r�㲻�ǳ���VIP���Ҳ���Ϊ�����!"); 
cm.dispose();
}



} else if (selection==500000){
		cm.warp(910000000, 0);
		cm.dispose();
} else if (selection==888){
typed=888888888;
cm.sendSimple("#r#e\r\n�����������������T���ƹ�Աϵͳ��T��������������\r\n#n#r��:������μ����ƹ�Ա�ͽ����ƹ���?\r\n#k#d��:��ֻ��Ҫ�������ƹ�ID������,Ȼ���������ѽ��ܹ���,��������������֤�ƹ�Ա,�ڵ������Ŀ�����������ƹ�ID�Ϳ�����.����,������Ѿͱ������ƹ������.��Ȼ������ѻ����Լ����б��������,Ȼ����ƹ�ID�������ѵ�����Ҳ���Խ�����֤Ӵ.\r\n#r��:��֤�ƹ�Ա����ʲô�ô���?#k\r\n#d��:��������������Ѵﵽ#d5��ת��#r�Ժ�,���Ϳ����Զ����һ�㹱�׵�,������2�㹱�׵��Ժ�Ϳ������������һ��������(#r���Զһ�200�������Ŷ��#d).ͬʱ�㻹�ܵõ��ḻ�Ľ���.\r\n#r#e#L810000000#��ʼ��֤�ƹ�Ա#l                #L1#�һ������#l#n\r\n\r\n#k�����ƹ�ID��:#r"+cm.getChar().getAccountID()+"#k          ��Ŀǰ�Ĺ��׵���:#r"+cm.getgxd()+"#k...");

} else if (selection==1111){
cm.sendSimple("#r#e\r\n���������������T�����Ŀ�١�T��������������\r\n#d��ѡ������Ҫ�ķ���\r\n#n#L77777##r����-----#e�����ר����#n#l #L88888##r����-----#e��VIPר����#n #l\r\n#r#L0#����-----#e������ר����#n#l #r#L55555#����-----#e��ǿ��ר����#n#l \r\n\r\n(ʹ��#d�����#b���߹���#r��Ա�͵���#k��#d��ѳ�ΪVIP1)\r\n#n#L99999##dʹ��-----#e#r��ð�ձҡ�#d   #n����#e  #r������ҡ� #l#n\r\n#L19##d����-----#r#e���ƻ�����#n#l \r\n#L200000000##d����-----��ֵ����ð�ձ��Զ���ȡϵͳ(#rVIP3-4ר������)#l\r\n#L6012##d����-----#e#rװ���ռ�ǿ��#l#n\r\n#L6200##d����-----#e#rװ���ϳ� #l#n \r\n#d#L1#����-----#d������������ħ����#r(װ��Ҫ�ڵ�1��)#l \r\n#n#d#L2##b����-----#r����#b������������ħ�����ײ�#r(װ��Ҫ�ڵ�1��)#l \r\n#n#b#L4#ʹ��-----���������װ������������#r(װ��Ҫ�ڵ�1��) #l \r\n#n#L5006##dʹ��-----����ҹ���#r��� #l \r\n#n#r#L3##dʹ��-----������ҹ���#r�������#d[NEW] #l \r\n#n#r#L6#�鿴��λ������� #l \r\n#L7#�鿴��μ����Ա���Ա������ϸ����#l");
cm.getChar().saveToDB(true,true);
}else if (selection == 3333) {
cm.sendSimple("#r#e\r\n���������������T�����Ŀ�ۡ�T�������������� \r\n#d��ѡ������Ҫ�ķ���\r\n#n#L10#��ɱ[Ϊ����ɱ?]#l\r\n#d#L11#����-----��������PK[˭����������Ӣ��]#l#r \r\n#L12#��ȡ-----ת�������#l           #L13#����-----ʯͷ������#l\r\n#L14#����-----��������[�ѿ�ͨ]#l #L15#����------�����ָ#l\r\n#L16#ʹ��-----�����15�ڽ��#l  #L17#ʹ��-----15�ڽ�һ����#l\r\n#L18##b���-----PKս��#l\r\n#L21##d����------PK����(#rս������)#l");
cm.getChar().saveToDB(true,true);
}else if (selection == 2222) {
cm.sendSimple("#r#e\r\n���������������T�����Ŀ�ڡ�T��������������\r\n#d��ѡ��������Ҫ�ķ���\r\n#n#d#L2000#ת������#b [ת������ʹ�㵱�ø���ǿ��]#l\r\n#L2007##d1-4תתְ����#b [��Ҫת��1������]#l\r\n#L2008##d���д��ϵͳ#b [���Դ��±���������ð�ձ�]#l\r\n#L2009##d�������м���#b [��Ҫת��5������]#l\r\n#L2010##d����/�������#b [���ټӵ�/��������]#l\r\n#L2011##r��ҽ���VIPˢǮ��ͼ#b [ÿ��ֻ���Խ���10��] #r[Hot]#l\r\n#r#L2012##r�鿴�ۺ����а�#b [�����кܶ����͵�����Ŷ]#g [New]#l\r\n#r#L2013##r���� ����Ҷר����ͼ�� #b [������ר����Ҷ����]#l\r\n#r#L2014##r���˳齱 #b[���Գ鵽ϡ�����Ŷ��30�����/��]#g [New]#l");
cm.getChar().saveToDB(true,true);
}else if (selection == 4444) {
cm.sendSimple("#r#e\r\n���������������T�����Ŀ�ܡ�T��������������\r\n#d��ѡ������Ҫ�ķ���\r\n#r�����������������T�����ս��T����������������\r\n#n#r#L4001#��ս�������#l#L4002##d��սܽ����#l#L4003##r��սħ��֮��#l\r\n\r\n#r#e�����������������T��Ȥζ���֡�T����������������\r\n#n#L4004##d���˶Ĳ���#l#L4004##d�����ͲƵ㲥#l#L4006##r�Ƹ��ᱦ�ж�#l\r\n\r\n#r#e�����������������T������ܡ�T����������������\r\n#n#L4007##dȫ����������#l#L4008##rȫ�������޵к���#l#d#L4009#���ָ����㲥#l\r\n\r\n#r#e�����������������T�����⹦�ܡ�T����������������\r\n#L4010##k#n��������ݹ���#l#L4012##b������Ա����Ϣ#l");
cm.getChar().saveToDB(true,true);
}else if (selection == 5555) {
cm.sendSimple("#r#e\r\n���������������T�����Ŀ�ݡ�T��������������\r\n#d��ѡ��������Ҫ�ķ���\r\n#n#L5001##b����-----12��#d�ٺŷ�Ҷר����ͼ#r[HOT]#g[NEW]#b#l\r\n#b#L5002#����-----15��#d�ںŷ�Ҷר����ͼ#r[HOT]#g[NEW]#b��T����#l\r\n#L5003##b�μ��ռ�-----#d�˲α���#b� #r[HOT]#g[NEW]#l\r\n#n#L5004##d����-----��Ҷ�ٺŶһ���#l\r\n#L5005##d����-----��Ҷ�ںŶһ���#l\r\n#L5007##dʹ��-----Կ��  ��ȡ   #r����װ��#l\r\n#L5008##dʹ��-----#r�������   #d��ȡ   ����#dGM����[�ɹ���:100%]#l\r\n#L5009##dʹ��-----#r���Ե㻻ȡϡ������Լ�������Ʒ#l");
cm.getChar().saveToDB(true,true);
}else if (selection == 6666) {
cm.sendSimple("#r#e\r\n���������������T�����Ŀ�ޡ�T��������������\r\n#d��ѡ��������Ҫ�ķ���#n\r\n#L6001##d����-----#rװ����������#d#l#L6002##d����-----#rװ������ħ����#l\r\n#L6011##d����-----#rװ������������#l\r\n#L6003##d����-----#rװ������#l           #L6004##d����-----#rװ������#l\r\n#L6005##d����-----#rװ������#l           #L6006##d����-----#rװ������#l\r\n#L6013##d����-----#r���������װ��#l\r\n#L6007##d����-----#rװ��������#l       #L6008##d����-----#rװ�������#l\r\n#L6009##d����-----#rװ���������#l   #L6010##d����-----#rװ��ħ������#l\r\n#L6014##d����-----#b��������#l\n\r\n#L6015##d���-----#b������ʹ�ø���#l#L6016##d�޸�-----#rװ������#l\r\n\r\n\r\n#k#n��Ŀǰɱ��#r" + cm.getChar().getPvpKills() +"#k��  ��ɱ����:#r" + cm.getChar().getPvpDeaths() +"#k��  �����:#r" + cm.getDonatorPoints() + "#k��");
cm.getChar().saveToDB(true,true);
}else if (selection == 7777) {
cm.sendSimple("#r#e\r\n���������������T�����Ŀ�ߡ�T��������������\r\n#d��ѡ������Ҫ�ķ���#n\r\n#L7001##d����-----������ս(����) #r[Hot]#g[New]\r\n#L7002##d����-----��ɫ� #r[Hot]#g[New]\r\n#L7003##d����-----�齱� #r[Hot]#g[New]");
cm.getChar().saveToDB(true,true);


}
} else if (status == 2) {
if (selection==0){
typed=1;
cm.sendSimple("#r#e\r\n�����������������T�������ר����T����������������\r\n#n����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.\r\n #L10000##d��Ϊ------#r����VIP#d----------[��Ҫת��#r1#d������]#l\r\n #L1#��Ϊ------#r�߼�VIP#d----------[��Ҫ�����#r"+vip2+"#d��] #l \r\n #L2#��Ϊ------#r�ռ�VIP#d----------[��Ҫ�����#r"+vip3+"#d��] #l \r\n #L3#��Ϊ------#r����VIP#d----------[��Ҫ�����#r"+vip4+"#d��] #l\r\n #L1000##rVIP1#d-----#r������-VIP2#d-----[��Ҫ�����#r"+vip1tovip2+"#d��]#l\r\n #L4##rVIP2#d-----#r������-VIP3#d-----[��Ҫ�����#r"+vip2tovip3+"#d��] #l\r\n #L8##rVIP3#d-----#r������-VIP4#d-----[��Ҫ�����#r"+vip3tovip4+"#d��] #l\r\n #L10##k����-----#r20����#k---------[��Ҫ�����#r"+dianjuan+"#k��] #l\r\n #L11##k����-----#r���������#k-------[��Ҫ�����#r"+jindaizi+"#k��] #l\r\n #L5##d����-----#r2�����鿨#d--------[��Ҫ�����#r"+shuangbei+"#d��] #l\r\n #L6#����-----#r4�����鿨#d--------[��Ҫ�����#r"+sibei+"#d��] #l\r\n #L7#����-----#r4��PK�޵п�#d----[��Ҫ�����#r"+pksibei+"#d��] #l\r\n #L9#����-----#rװ��������#d-------[��Ҫ�����#r"+fbk+"#d��] #l\r\n #L12#����-----#rת�������#d-------[��Ҫ�����#r"+zsb+"#d��] #l\r\n #L13#����-----#rPKս����տ�#d---[��Ҫ�����#r"+pkqkk+"#d��] #l\r\n\r\n#rע��\r\n1.���鿨��VIPר��Ƶ���޷�������Ӧ��Ч��.\r\n2.��������VIP4������Vip3������Vip4��������4��PK��һ��..!"); 
}else if (selection==2000){
typed=3333;
var selStr = " #r#e\r\n�����������������T��ת�������T����������������\r\n#e�㵱ǰת������Ϊ��   #r"+cm.getChar().getReborns()+"   ��\r\n#e#r					#L2001#ת����ϸ����(�ؿ�)#l#n\r\n#k\r\n#L2002#��ͨ���(200��ת��)#b��Ʒ:1��ת����#v4001129#��5��ð�ձ�#l\r\n#L2003##r����VIP(190��ת��)#b��Ʒ:1��ת����#v4001129#��4��ð�ձ�#l\r\n#L2004##g�߼�VIP(180��ת��)#b��Ʒ:1��ת����#v4001129#��3��ð�ձ�#l\r\n#L2005##d����VIP(170��ת��)#b��Ʒ:1��ת����#v4001129#��2��ð�ձ�#l\r\n\r\n#L2006##d����VIP(160��ת��)#b��Ʒ:ֻ��1��ð�ձ�#l";
cm.sendSimple(selStr);


}else if (selection==55555){
typed=55000;
cm.sendSimple("#e#r\r\n�����������������T��ǿ��ר����T��������������\r\n#n#d��ң� #e#r[#h #]#k  #n#d��ӭ����ǿ��ר����������Ϊ��#r#e100%���쳬ǿװ��#n#d��������ŵ�ר������������Ҫ�Ĳ��Ϻܶ������еģ���Ҫ�ı�ʯҲ��ʮ��ϡ�еģ�������ȥ�ϳɣ���ǿ��֮���װ��������Ҳ�Ƿǳ�ǿ��ģ�������ȻҲ����ȡһ���ķ��ã�����ǿ����Ŀ����ʮ�ֶ࣬Ϊ�˷����λ��ҡ����ڷֳ���3��������\r\n#d��ѡ������Ҫ�Ľ���ķ�����#e\r\n#L55001##r   ����ǿ����   #l     #L55002#   �߼�ǿ����   #l\r\n\r\n#L55003##r   ����ǿ����   #l     #L55004#   ����ǿ����   #l#n");


}else if (selection==2007){
if(cm.getChar().getReborns()>=1){
typed=3334;
cm.sendNext("#e\r\n���������������T��תְ�����T��������������\r\n#e\r\n#e#r[#h #]#k#n#d���!!!#e\r\n�������ڵ�ְҵΪ��#r" + cm.getChar().getJob() + "\r\n#d�������ڵĻ�Ա�ȼ�Ϊ��#r" + cm.getChar().getVip() + "#d��   \r\n������ǰת������Ϊ��#r" + cm.getChar().getReborns() +"#d��\r\n��PvPɱ�˴���Ϊ��#r" + cm.getChar().getPvpKills() +"#d��\r\n��PvP��ɱ����Ϊ��#r" + cm.getChar().getPvpDeaths() +"#d��  ����������Ϊ:��(#r" + cm.getPlayer().getStr() + ")#d��(#r" + cm.getPlayer().getDex() + ")#d��(#r" + cm.getPlayer().getInt() + ")#d��(#r" + cm.getPlayer().getLuk() + ") \r\n  #e   \r\n ____________________________________________\r\nح #e#g����������������#e#b���ڵ�ʱ����: " + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "�� #e#g������������������#dح#d#eح#g������������������ #b#n����ǰ���������#e��" + cm.getDonatorPoints() + "��#g#e��������������������#dح       ____________________________________________");
}else{
cm.sendOk("�Բ��������ڻ�δת��1�����ϣ�����ʹ�ô˷���");
cm.dispose();
}


} else if(typed==888888888){

if(selection==810000000){

if(cm.getChar().getReborns()>=5){

if(cm.getgxded('tgy')==1){

cm.sendOk("���Ѿ���֤����,�����ڽ�����֤,��������԰�����ID�Ǻ�,�������������,Ȼ����������������IDӴ.������Ҳ������ѵõ������..!");
cm.dispose();
}else{
typed=800000000;
cm.sendGetNumber("#r#r����ϸȷ�Ϻ�,�����������ƹ�ԱID:",1,1,999999);
}
			
}else{
cm.sendOk("ʧ����,���ź��ĸ�����:\r\n��Ҫ��֤�ƹ�ԱID,��Ҫ��Ŀǰת���ȼ��ﵽ#r5�������ϵĴ���#k���ܽ�����֤..!");
cm.dispose();
}
}else if(selection==1){
if(cm.getgxd()>=2){
cm.sendOk("��ϲ,���Ѿ��ɹ�ʹ��2�����׵�һ���200�������.��Ŀǰ����"+cm.getDonatorPoints()+"�������.");
cm.gainDonatorPoints(200)
cm.setgxd(-2);
cm.dispose();
}else{
cm.sendOk("���ź�����Ŀǰû���㹻�Ĺ��׵㣬������Ҫ#r2��#k���ܻ�ȡ,���´�������.");
cm.dispose();
}
}



} else if(typed==999999999){

if (cm.getText() == gmmima) {
typed=900000000;
if(cm.getChar().getAccountID()==1){
cm.sendSimple("#e\r\n���������������T���ռ�����Ա�����T������������\r\n#r�װ��ģ�[   #h #  ]����ѡ������Ҫ�ķ�����Ŀ��#d\r\n#L98001#���ռ�GMר���̵�#l  #r\r\n#L98002#��VIP�ȼ�����#l #k\r\n#L98003#������ְҵ#l  #k\r\n#L98004#����ȡװ��#l  #k\r\n#L98005#�ݸ������Ե�����#l  #r\r\n#L98006#�޷���ר��#l");
} else {
cm.sendSimple("#e\r\n���������������T���ռ�����Ա�����T������������\r\n#r�װ��ģ�[   #h #  ]����ѡ������Ҫ�ķ�����Ŀ��#d\r\n#L98001#���ռ�GMר���̵�#l    #r\r\n#L98006#�ڷ���ר��#l");
}
    } else {                         
cm.sendOk("��������������");    
cm.dispose(); 
}



} else if(typed==400100){
if (selection == 400001) {
typed=400110;
cm.sendSimple("#r#e����������VIP������ѡ��:#k#k#b\r\n#L31#תְ��GM#v1322013##l#L1##rתְ�ɳ���GM#k#v1002140##l\r\n\r\n#L2##g��120��#k#v1902002##k#k#l#L3##dһ���������м���#v1602000##k#k#l\r\n#r#e#L4#�����̵�#v1702165##l\r\n\r\n#g#e#L0#һ������Ϊ1000����#k#k#k#v5050001##l#L33##r��ȡ����#v5390000##k#k\r\n\r\n#l\r\n\r\n#L5#��ʦװ��#s2311004##l#L6##rսʿװ��#k#s1311006##l\r\n#L7##g����װ��#k#s4111002##l#d#L8#������װ��#k#k#s3111004##l");
}else if (selection == 400002) {
typed=400210;
    cm.sendSimple("��ӭ��������VIPר���̵꣬��ѡ�����ͣ�"
	+ "#b\r\n#L0#ȫսʿװ��"
	+ "#b\r\n#L1#ȫ��ʦװ��"
	+ "#b\r\n#L2#ȫ����װ��"
	+ "#b\r\n#L3#ȫ����װ��"
	+ "#b\r\n#L4#����ۺϵ�"
	+ "#r\r\n#L5#GM�ۺϵ�"
	+ "#r\r\n#L6#ȫ��Ҷװ��"
	+ "#r\r\n#L7#ȫ��������"
	+ "#r\r\n#L8#ȫ�س̼�����Ʒ"
	+ "#r\r\n#L9#ȫGM����"
	+ "#d\r\n#L11#Cash ��ָ"
	+ "#d\r\n#L12#Cash ��Ч"
	+ "#d\r\n#L13#Cash ��װ"
	+ "#d\r\n#L14#Cash ����"
	+ "#d\r\n#L15#Cash ����"
	+ "#d\r\n#L21#Cash ����"
	+ "#d\r\n#L16#Cash ����"
	+ "#d\r\n#L17#Cash ����װ��"
	+ "#k\r\n#L18#������"
	+ "#k\r\n#L19#ȫҩˮ"
	+ "#k\r\n#L20#ȫ����"
	+ "#k\r\n#L30#ȫ����װ��"
	+ "#k\r\n#L31#ʥ����Ʒ"
	+ "#k\r\n#L32#ӡ�ڰ�װ��"
	+ "#k\r\n#L33#ȫ����"
	+ "#k\r\n#L34#ȫ��Ϣ"
	+ "#k\r\n#L35#����"
	+ "#k\r\n#L36#�����־"
	+ "#k\r\n#L37#��ȯ֮���Ʊ"
	+ "#k\r\n#L38#�����µ���"
	+ "#k\r\n#L39#ȫ״̬"
);
} 

} else if(typed==300100){
if (selection == 300002) {
typed=300210;
    cm.sendSimple("��ӭ���볬��VIPר��������ѡ��"
	+ "#b\r\n#L3#ð�շ�Ҷϵ��"
	+ "#b\r\n#L4#����Ա100%��ϵ��"
	+ "#r\r\n#L6#սʿװ��ϵ��"
	+ "#r\r\n#L7#��ʦװ��ϵ��"
	+ "#r\r\n#L8#����װ��ϵ��"
	+ "#r\r\n#L9#������װ��ϵ��"
	+ "#r\r\n#L10#ҩˮ/����ϵ��"
	+ "#d\r\n#L11#Cash��Чϵ��"
	+ "#d\r\n#L12#Cash��װϵ��"
	+ "#d\r\n#L13#Cash����ϵ��"
	+ "#d\r\n#L14#Cash��ָϵ��"
	+ "#d\r\n#L15#Cash����ϵ��");

}else if (selection == 300001) {

cm.sendOk("�ݲ�����");
cm.dispose();
} 

} else if(typed==200100){
if (selection == 200001) {
typed=200110;
cm.sendSimple ("#d��ӭ����߼�VIPר������,��ѡ��#r\r\n#L0#������#l\r\n#L1#����#l\r\n#L2#����#l");
}else if (selection == 200002) {
typed=200210;
cm.sendSimple ("#d��ӭ�������VIPר���̵꣡��������򵽸�ְҵ��װ��GM���ᡢ�ֽ���װ����ѡ��#r\r\n#L0#սʿװ��#l\r\n#L1#��ʦװ��#l\r\n#L2#������װ��#l\r\n#L3#����װ��#l\r\n#L4#100%GM��#l\r\n#L5#�Ķ�ϵ��#l\r\n#L6#͸��ϵ��#l\r\n#L7#ѩ��ϵ��#l\r\n#L8#ʥ��ϵ��#l\r\n#L9#��ϵ��#l\r\n#L10#��ħϵ��#l\r\n#L11#��ʹϵ��#l\r\n#L12#�ֽ�����#l");


} 

} else if(typed==100100){
if (selection == 100001) {
if(cm.getChar().getGender() == 1) {
typed=100110;
cm.sendSimple("#d��ѡ������Ҫ�ı�ķ���#r\r\n#L0#��ɫ#l\r\n#L1#����#l\r\n#L2#ͷ����ɫ#l\r\n#L3#�۾�#l\r\n#L4#�۾���ɫ#l");
}else {
typed=100120;
cm.sendSimple("#d��ѡ������Ҫ�ı�ķ���#r\r\n#L0#��ɫ#l\r\n#L1#����#l\r\n#L2#ͷ����ɫ#l\r\n#L3#�۾�#l\r\n#L4#�۾���ɫ#l");


}

}else if (selection == 100002) {
typed=100210;
	cm.sendSimple ("#d��ӭ�������VIPר���̵꣡��ѡ�����#r\r\n#L14#��Ч#l\r\n#L15#ף��#l\r\n#L0#����#l\r\n#L1#����#l\r\n#L2#����#l\r\n#L3#����#l\r\n#L4#����#l\r\n#L5#ñ��#l\r\n#L6#ñ��2#l\r\n#L7#��װ#l\r\n#L8#����#l\r\n#L9#����#l\r\n#L10#��ָ#l\r\n#L11#��#l\r\n#L12#Ь��#l\r\n#L13#����#l");

}

}else if (selection == 6200) {
typed=6210;
cm.sendAcceptDecline("#e\r\n���������������T������װ���ϳɡ�T��������������\r\n#n#r����Ҫ����װ���ں�ǿ��ô?#k\r\n#b����ǿ������Ҫ#r������ͬװ��!#k\r\n#g===================#dǿ��˵��#g===================\r\n#bÿ��ǿ����Ҫ#r"+needmon+" #b ð�ձ�,#r"+needap+"#b ���Ե�,#r"+needdona+"#b �����\r\n#bװ������һ��:����ǿ��װ��B#r(ǿ�����Զ���ʧ)\r\n#bװ�����ڶ���:����ǿ��װ��C#r(ǿ�����Զ���ʧ)\r\n#bװ����������:#r(��Ҫǿ����װ��A)\r\n#rע:װ������ǰ���񲻵�Ϊ��,������3����ͬ��װ��!\r\n#r����:λ�÷Ŵ�����������,����Ը�!\r\n#rPs:����װ�������Բ��ܳ���32767,����ᵼ��ǿ��ʧ��!\r\n#g===================#k#dǿ���㷨#k#g===================#k\r\nA����#r(װ�����ĵ�����)#k=A����+(B����+C����)*"+beilv*100+"%\r\n#g===================#k#dǿ������#k#g===================#k\r\nװ������������С��15,�ɹ���:#r30%#k\r\nװ����������������15С��25,�ɹ���:#r50%#k\r\nװ����������������25С��35,�ɹ���:#r90%");
cm.getChar().saveToDB(true,true);


}else if (selection==999){
typed=98000;
if (cm.getChar().getId() == 1) {
cm.sendSimple("#e\r\n���������������T���ռ�����Ա�����T������������\r\n#r�װ���GM����ѡ������Ҫ�ķ�����Ŀ��#d\r\n#L98001#���ռ�GMר���̵�#l  #r\r\n#L98002#��VIP�ȼ�����#l #k\r\n#L98003#������ְҵ#l  #k\r\n#L98004#��GMװ��#l  #k\r\n#L98005#�ݸ������Ե�����#l ");

    } else {                         
cm.sendOk("�Բ����㲻�ǹ���Ա��");    //����������ִ����������
cm.dispose(); 
}


}else if (selection==77777){
typed=77000;
cm.sendSimple("#e\r\n�����������������T�����ר����T��������������\r\n#d�װ��ģ� #e#r[#h #]#k  #n#d\r\n#d��ѡ������Ҫ�ķ�����Ŀ��\r\n#L77002##r������ҽ�ָר����#l #L77003##d����ת����ָר����#l\r\n\r\n#L77001##r��ȡ��ҹ���#l\r\n\r\n#d#L88005#�򿪰ٻ��̵�#L88006#�򿪼������̵�#L88007#�򿪾����̵�#l\r\n#L88008#�򿪳����̵�#l");



}else if (selection==88888){

if (cm.getChar().getVip() >= 1) {
typed=88000;
cm.sendSimple("#e\r\n�����������������T��VIPר����T��������������\r\n#d�װ��ģ� #e#r[#h #]#k  #n#d�����ڵ���VIP�ȼ�Ϊ��#r"+cm.getChar().getVip()+"\r\n#d��ѡ������Ҫ�ķ�����Ŀ��#e\r\n#L88800##r����VIPר����ָ��#l\r\n\r\n#L88001##r����VIPר����ͼ#l#n\r\n\r\n#d#L88005#�򿪰ٻ��̵�#L88006#�򿪼������̵�#L88007#�򿪾����̵�#l\r\n#L88008#�򿪳����̵�#l\r\n \r\n#e��������-------�����T����ȡVIP���ʡ�T����---------\r\n\r\n#r#L88012#VIP1����#l#L88013#VIP2����#l#L88014#����VIP����#l#L88015#����VIP����#l");

    } else {                         
cm.sendOk("�Բ����㲻��VIP��ң�Ҫ��ʹ�ô˷����뵽ǰ���ΪVIP���");    //����������ִ����������
cm.dispose(); 
}



}else if (selection==99999){
typed=99000;
cm.sendGetText("#e\r\n�����������������T�������ҡ�T��������������\r\n#r��������Ҫ����������������\r\n#d(ע���۸�1Eһ��)");


}else if (selection == 7001) {
if(cm.getChar().getMapId()==910000000){//�ж�NPC���ڵ�ͼ
typed=7100;
cm.sendSimple("#e\r\n�����������������T�����ս��T����������������\r\n#n#d��ѡ������Ҫ����#r\r\n#L0#��ս�������[�����Ǳ�]#l\r\n#L1#��սħ������[��ؾ���]#l\r\n#L2#��ս���[δ����]#l\r\n#L3#������ս��˵��[���˱ؿ�]#l");
}

}else if (selection == 7002) {
typed=7200;
cm.sendSimple("#e\r\n�����������������T����ɫ�(�齱)��T����������������\r\n#r���˴�齱#k\r\n#e���Ǳ�������ɫ֮һ,������Ա������Ȥ�Ļ�����������һ��,��Ҫ�ǲ����˾ͻ��д�(��Ʒװ��,���)����������Ӵ.������ѡ������Ҫ����ע�ķ���.\r\n#e#r#L0#�����T������50���[��Ҫ����Ʒ]#l\r\n#L1#�����T������10���[��Ҫ�����]#l");

}else if (selection == 7003) {
typed=7300;
cm.sendNext("#e\r\n�����������������T��齱���T����������������\r\n#d\r\n�������#e #b#v5220010##k#rһ�Ÿ߼����ְٱ�ȯ\r\n�����������������ȡ��ƷŶ~!\r\n�������ս��ʿ֮���ø߼��ٱ�ȯ\r\n����鵽��һ�޶��Ķ������ɲ�Ҫ͵����Ŷ��");





}else if (selection == 6016) {
typed=6160;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
cm.sendGetText("#e\r\n���������������T���޸�װ�����֡�T��������������\r\n��Ŀǰѡ�����#r�޸�װ������#b.\r\n�㵱ǰ�ĵ�һ��װ����:#v"+item.getItemId()+"\r\n\r\n�����׼������,������һ����ӡ�����װ���ϵ����ְ�,��ע����������ֱ���#r����1��,���6��#b.�޸��ɹ���Ứ����#r1�������#k\r\n#r��ʱ��֧������.");
itemname = cm.getText();

}else if (selection == 6014) {
typed=6140;
var a ="#r#e\r\n�����������������T����������T����������������\r\n��ע��:�˹�����������Ϊ�����������,������������ǰ����Ҫ�Ķ��������ڲֿ���:\r\n#b";
for(var i=0;i<types.length;i++) { 
a+= "\r\n#L" + i + "#" + types[ i ]+""; 
} 
cm.sendSimple(a);


}else if (selection == 6015) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getNextFreeSlot();
var use = cm.getChar().getInventory(MapleInventoryType.USE).getNextFreeSlot();
var etc = cm.getChar().getInventory(MapleInventoryType.ETC).getNextFreeSlot();
var cash = cm.getChar().getInventory(MapleInventoryType.CASH).getNextFreeSlot();
var g = "#e\r\n���������������T���ѯ�����ո��T��������������\r\nװ�������У�#r"+(item-1)+"#k����Ʒ\r\n���Ĵ����У�#r"+(use-1)+"#k����Ʒ\r\n���������У�#r"+(etc-1)+"#k����Ʒ\r\nCASH�����У�#r"+(cash-1)+"#k����Ʒ\r\n#b������ص���-2,����������������װ����!";
cm.sendOk(g);



}else if (selection == 6013) {
typed=6130;
cm.sendSimple("#e\r\n���������������T����������װ����T��������������\r\n#n��Ŀǰѡ�������������װ��,װ��������װ���޷�����,�޷�����.�����ʺ����뱻����֪��Ҳ����.��Ȼ,���������������װ��������,�һ����԰��������!��������װ�����ǽ�����?\r\n\r\n#b#L1#����װ�� #r[���]\r\n#b#L2#����װ�� #r[�շ�]");


}else if (selection == 6012) {
typed=6120;
var String = "#r#e\r\n���������������T��װ���ռ�ǿ����T��������������\r\n#n#d������ѡ�����װ���ռ�ǿ������.���԰������װ��ǿ����Ϊ�ռ�װ����\r\n�ռ�ǿ������˵������Ҫ#r"+zjqh+"#d�������\r\n��Ŀǰ��#e#r " + cm.getDonatorPoints() + "#n#d�����.\r\n#r#eǿ����,װ��ȫ���Ա��32000.\r\n\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));


}else if (selection == 6011) {
typed=6110;
cm.sendAcceptDecline("#r#e\r\n�������������T������װ������������T������������\r\n#n��Ŀǰѡ�����#r����װ���Ҿ����#k,�����Ŀǰ��Ҫ���ϣ�#r10#k����ˮ��(#v4021008#).�����ѣ�#r"+needyyb+"#k������Һ�#r"+needjb+"#k���.�������һ������:\r\n#b1.Ҫ������װ��������ڵ�һ��.\r\n#r2.������һ���Ļ���ʧ��,�뿼��������.\r\n#b3.�����ɹ���,��ĵ�һ��װ����������������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n5.װ�����ĵ�һ��һ������Ϊ��,�����㽫���ܽ���.\r\n#rע��:װ�����ĵ�һ����Ϊ��,�����㽫���ܵ������,����Ը�!");


}else if (selection == 6010) {
typed=6100;
cm.sendAcceptDecline("#e\r\n�����������������T������װ��ħ����T������������\r\n#n��Ŀǰѡ�����#r����װ��ħ������#k,�����Ŀǰ��Ҫ���ϣ�#r10#k���Ͽ�ʯ(#v4011005#).�����ѣ�#r"+needyyb+"#k������Һ�#r"+needjb+"#k���,�������һ������:\r\n#b1.Ҫ����װ��ħ�������������װ�����ĵ�һ��.\r\n#r2.����װ��ħ��������һ������ʧ��,�뿼�Ǻ�������.\r\n#b3.���ӳɹ���,���װ������10ħ������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��:װ�����ĵ�һ����Ϊ��,�����㽫���ܵ������,����Ը�!");


}else if (selection == 6009) {
typed=6090;
cm.sendAcceptDecline("#e\r\n�������������T����������װ�������T������������\r\n#n��Ŀǰѡ�����#r����װ���������#k,�����Ŀǰ��Ҫ���ϣ�#r10#k�����ʯ(#v4011003#).�����ѣ�#r"+needyyb+"#k������Һ�#r"+needjb+"#k���,�������һ������:\r\n#b1.Ҫ����װ����������������װ�����ĵ�һ��.\r\n#r2.����װ�����������һ������ʧ��,�뿼�Ǻ�������.\r\n#b3.���ӳɹ���,���װ������10�������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��:װ�����ĵ�һ����Ϊ��,�����㽫���ܵ������,����Ը�!");

}else if (selection == 6008) {
typed=6080;
cm.sendAcceptDecline("#e\r\n���������������T������װ����ܡ�T��������������\r\n#n��Ŀǰѡ�����#r����װ�������#k,�����Ŀǰ��Ҫ���ϣ�#r10#k������ʯ(#v4021004#).�����ѣ�#r"+needyyb+"#k������Һ�#r"+needjb+"#k���,�������һ������:\r\n#b1.Ҫ����װ������ʱ������װ�����ĵ�һ��.\r\n#r2.����װ���������һ������ʧ��,�뿼�Ǻ�������.\r\n#b3.���ӳɹ���,���װ������10������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��:װ�����ĵ�һ����Ϊ��,�����㽫���ܵ������,����Ը�!");


}else if (selection == 6007) {
typed=6070;
cm.sendAcceptDecline("#e\r\n���������������T������װ�����С�T��������������\r\n#n��Ŀǰѡ�����#r����װ��������#k,�����Ŀǰ��Ҫ���ϣ�#r10#k��ʯ��ʯ(#v4021000#).�����ѣ�#r"+needyyb+"#k������Һ�#r"+needjb+"#k���,�������һ������:\r\n#b1.Ҫ����װ�������ʱ������װ�����ĵ�һ��.\r\n#r2.����װ����������һ������ʧ��,�뿼�Ǻ�������.\r\n#b3.���ӳɹ���,���װ������10��������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��:װ�����ĵ�һ����Ϊ��,�����㽫���ܵ������,����Ը�!");

}else if (selection == 6006) {
typed=6060;
cm.sendAcceptDecline("#e\r\n���������������T������װ��������T��������������\r\n#n��Ŀǰѡ�����#r����װ������#k,�����Ŀǰ��Ҫ���ϣ�#r10#k������ˮ��(#v4005003#).�����ѣ�#r"+needyyb+"#k������Һ�#r"+needjb+"#k���,�������һ������:\r\n#b1.Ҫ����װ�������������װ�����ĵ�һ��.\r\n#r2.����װ��������һ������ʧ��,�뿼�Ǻ�������.\r\n#b3.���ӳɹ���,���װ������10������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��:װ�����ĵ�һ����Ϊ��,�����㽫���ܵ������,����Ը�!");



}else if (selection == 6005) {
typed=6050;
cm.sendAcceptDecline("#e\r\n���������������T������װ��������T��������������\r\n#n��Ŀǰѡ�����#r����װ������#k,�����Ŀǰ��Ҫ���ϣ�#r10#k���ǻ�ˮ��(#v4005001#).�����ѣ�#r"+needyyb+"#k������Һ�#r"+needjb+"#k���,�������һ������:\r\n#b1.Ҫ����װ�������������װ�����ĵ�һ��.\r\n#r2.����װ��������һ������ʧ��,�뿼�Ǻ�������.\r\n#b3.���ӳɹ���,���װ������10������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��:װ�����ĵ�һ����Ϊ��,�����㽫���ܵ������,����Ը�!");




}else if (selection == 6004) {
typed=6040;
cm.sendAcceptDecline("#e\r\n���������������T������װ�����ݡ�T��������������\r\n#n��Ŀǰѡ�����#r����װ������#k,�����Ŀǰ��Ҫ���ϣ�#r10#k������ˮ��(#v4005002#).�����ѣ�#r"+needyyb+"#k������Һ�#r"+needjb+"#k���,�������һ������:\r\n#b1.Ҫ����װ�����ݱ������װ�����ĵ�һ��.\r\n#r2.����װ��������һ������ʧ��,�뿼�Ǻ�������.\r\n#b3.���ӳɹ���,���װ������10������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��:װ�����ĵ�һ����Ϊ��,�����㽫���ܵ������,����Ը�!");




}else if (selection == 6003) {
typed=6030;
cm.sendAcceptDecline("#e\r\n���������������T������װ��������T��������������\r\n��Ŀǰѡ�����#r����װ������#k,�����Ŀǰ��Ҫ���ϣ�#r10#k������ˮ��(#v4005000#).�����ѣ�#r"+needyyb+"#k������Һ�#r"+needjb+"#k���,�������һ������:\r\n#b1.Ҫ����װ�������������װ�����ĵ�һ��.\r\n#r2.����װ��������һ������ʧ��,�뿼�Ǻ�������.\r\n#b3.���ӳɹ���,���װ������10������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��:װ�����ĵ�һ����Ϊ��,�����㽫���ܵ������,����Ը�!");


}else if (selection == 6002) {
typed=6020;
cm.sendAcceptDecline("#e\r\n���������������T������ħ������T��������������\r\n#n��Ŀǰѡ�����#r����װ��ħ��������#k,�����Ŀǰ��Ҫ���ϣ�#r10#k������ʯ(#v4021005#).�����ѣ�#r"+needyyb+"#k������Һ�#r"+needjb+"#k���,�������һ������:\r\n#b1.Ҫ����װ��ħ���������������װ�����ĵ�һ��.\r\n#r2.����װ��ħ����������һ������ʧ��,�뿼�Ǻ�������.\r\n#b3.���ӳɹ���,���װ������10ħ��������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��:װ�����ĵ�һ����Ϊ��,�����㽫���ܵ������,����Ը�!");


}else if (selection == 6001) {
typed=6010;
cm.sendAcceptDecline("#e\r\n���������������T�����ӹ�������T��������������\r\n#n��Ŀǰѡ�����#r����װ����������#k,�����Ŀǰ��Ҫ���ϣ�#r10#k����ʯ(#v4021007#).�����ѣ�#r"+needyyb+"#k������Һ�#r"+needjb+"#k���,�������һ������:\r\n#b1.Ҫ����װ�����������������װ�����ĵ�һ��.\r\n#r2.����װ������������һ������ʧ��,�뿼�Ǻ�������.\r\n#b3.���ӳɹ���,���װ������10������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rע��:װ�����ĵ�һ����Ϊ��,�����㽫���ܵ������,����Ը�!");



}else if (selection == 5009) {
typed=5090;
var selStr = "#e\r\n�������������T�����Ե㻻װ����T������������\r\n#n����Ҫʲô������?����,��ѡ��!˵����ʲôʱ����¼ܿ�,��ȻҲ���ܻ����¶����ϼ�Ŷ.#b"; 
for (var i = 0; i < maps.length; i++) { 
selStr += "\r\n#L" + i + "#" +"#i"+maps[i][1]+"#"+maps[i][0]+"["+maps[i][2]+"��]"; 
} 
selStr +="#k"; 
cm.sendSimple(selStr);


}else if (selection == 5008) {
typed=5080;
cm.sendSimple("#e\r\n���������������T��100%�سɾ�һ���T��������������\r\n#d#n�����һ�ž���,�����������#v4031612#,�������һ�����������һ�ȡ���µ��κ�һ��GM��,�Ҿ�ɹ���100%.#r�������#v4031612#������ʱ�����BOSS���,Ҳ���������ר��������ڻ�еõ���\r\n#L1##v2040006#ͷ�������������\r\n#L2##v2040303#���������������\r\n#L3##v2040403#���·����������\r\n#L4##v2040506#ȫ�����������������\r\n#L5##v2040507#ȫ�����׷����������\r\n#L6##v2040603#��/ȹ�����������\r\n#L7##v2040709#Ь�������������\r\n#L8##v2040710#Ь����Ծ�������\r\n#L9##v2040806#���������������\r\n#L10##v2040903#���Ʒ����������\r\n#L11##v2041024#����ħ���������\r\n#L12##v2041025#��������������\r\n#L13##v2041200#��������ʯ\r\n#L14##v2043003#���ֽ������������\r\n#L15##v2043103#���ָ������������\r\n#L16##v2043203#���ֶ��������������\r\n#L17##v2043303#�̽������������\r\n#L18##v2043703#����ħ���������\r\n#L19##v2043803#����ħ���������\r\n#L20##v2044003#˫�ֽ������������\r\n#L21##v2044103#˫�ָ������������\r\n#L22##v2044203#˫�ֶ��������������\r\n#L23##v2044303#ǹ�����������\r\n#L24##v2044403#ì�����������\r\n#L25##v2044503#�������������\r\n#L26##v2044603#�󹥻��������\r\n#L27##v2044703#ȭ�׹����������");



}else if (selection == 5007) {
typed=5070;
cm.sendSimple("#e\r\n���������������T��120�������һ���T��������������\r\n#n�����һ��������Կ��#v4031072#,�ҿ������ҵ��������㽻��.#rԿ�� #v4031072# #b������#r��#b��. -#d ��Ϊ�����ﲻ��VIP��ר����.������ֻ����һ��߼�װ��.\r\n#r#L1##v1372035#��������� \r\n#L2##v1372036#��������� \r\n#L3##v1372037#��������� \r\n#L4##v1372038#��������� \r\n#L5##v1372039#����֮�� \r\n#L6##v1372040#�綾֮�� \r\n#L7##v1372041#����֮�� \r\n#L8##v1372042#����֮��\r\n#L9##v1382045#�����鳤�� \r\n#L10##v1382046#�����鳤�� \r\n#L11##v1382047#�����鳤�� \r\n#L12##v1382048#�����鳤�� \r\n#L13##v1382049#��ȸ���� \r\n#L14##v1382050#���䳤�� \r\n#L15##v1382051#�׻����� \r\n#L16##v1382052#��������\r\n#L17##v1302081#�����Ƽ׽�\r\n#L18##v1312037#������Ÿ�\r\n#L19##v1322060#���㾪����\r\n#L20##v1322062#�����ͷ��\r\n#L21##v1482023#�����ȸ��\r\n#L22##v1412033#����������\r\n#L23##v1402046#������ڤ��");




}else if (selection == 5006) {
typed=5060;
cm.sendSimple("#e\r\n�������������T������Ҷһ���ߡ�T������������\r\n#n#d�����������Һ��һ�ȡ���¶���.\r\n#r��Ŀǰ�� " + cm.getDonatorPoints() + "�����\r\n#L0##v4001129#��ת����#k (20�����)\r\n#L1##v1002140#��GMñ��#k(400�����)\r\n#L3##v2340000#��ף����#k (5�����) \r\n#L6##v1402040#���Ҷ3����#k (30�����)\r\n#L7##v1302024#��ϱ�ֽ����#k (30�����)\r\n#L8##v1322003#������#k (10�����)\r\n#L9##v1432009#ľ����ǹ#k (20�����)\r\n#L10##v1302080#�ʺ����#k (50�����)\r\n#L11##v1372017#��·��#k (30�����)\r\n#L12##v1302107#��ɫ���۵�#k (50�����)\r\n#L13##v1302049#���߱���#k (35�����)\r\n#L14##v1402013#�ձ���ͼ#k (40�����)\r\n#L15##v1092022#��ɫ��#k (35�����)\r\n#L16##v1402014#�¶ȼ�#k (40�����)\r\n#L17##v1402044#�Ϲϵ���#k (40�����)\r\n#L18##v1402037#������#k (35�����)\r\n#L19##v5000053#���������#k(100�����)\r\n#L20##v1322027#ƽ����#k (35�����)\r\n#L21##v1012014#ʥ��¹����#k (10�����)\r\n#L22##v1302034#��ʥ�ڵ���#k (35�����)\r\n#L23##v1302063#ȼ�ջ��浶#k (35�����)\r\n#L24##v1422011#��ƿ#k (35�����)\r\n#L25##v1442046#��������#k (20�����)\r\n#L26##v1122014#������ʯ����#k (35�����)\r\n#L27##v1122006#��ɫ�������#k (35�����)\r\n#L28##v1122001#��ɫ�������#k (35�����)\r\n#L29##v1122002#��ɫ�������#k (35�����)\r\n#L30##v1122003#��ɫ�������#k (35�����)\r\n#L31##v1122004#��ɫ�������#k (35�����)\r\n#L32##v1122005#��ɫ�������#k (35�����)");



}else if (selection == 5005) {
typed=5050;
cm.sendSimple("#e\r\n���������������T���Ҷ�һ����ڡ�T������������\r\n#n#d�����Ƿ�Ҷ�һ�����,�����ʹ��#v4001126#���һ�ȡ����,��Ǯ,��Ʒ,װ���� #r \r\n#L500##v4001126#��2000=20�ڽ�Ǯ#l#L600##v4001126#��200=2�ڽ�Ǯ#l\r\n#L3##v4001126#��400=2�ھ���#l#L4##v4001126#��200=1�ھ���#l#d\r\n#L5##v4001126#��5000=VIP3ˢ����ͼƾ��#l\r\n#L9##v4001126#��200=2�������#L10##v4001126#��100=1�������#b\r\n#L12##v4001126#��3000=������");



}else if (selection == 5001) {
if (cm.getHour() < 12) {
cm.sendOk("�ʱ�仹û��.\r\n#r���ڷ�����ʱ��:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();
}else if (cm.getHour() > 13) {
cm.sendOk("�ʱ���Ѿ�����.\r\n#r���ڷ�����ʱ��:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();
}else{
cm.warp(910000018,0);
cm.dispose(); }
}else if (selection == 5002) {
if (cm.getHour() < 15) {
cm.sendOk("�ʱ�仹û��.\r\n#r���ڷ�����ʱ��:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();
}else if (cm.getHour() > 16) {
cm.sendOk("�ʱ���Ѿ�����.\r\n#r���ڷ�����ʱ��:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();
}else{
cm.warp(910000019,0);
cm.dispose(); }


}else if (selection == 5003) {
typed=5030;
cm.sendSimple("#r#e\r\n�����������������T����ɫ���T����������������\r\n#dGM��˵,���Ƿ�������̫����.��һ�����������.����GM���������Щ����ϵͳ...!����,�Ҿ������������������ص�.!�����������־���:�ռ��˲α�������.#d�������ÿ����,����ÿ�����ϵ�19:00�ֿ���.���ڷ�����ʱ����:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��μӵ�ʱ��ֻ��1Сʱ.������ʱ�������������20:00ʱ,�Ͳ��ܼ�����.�������Ҫ��ʱ�ϵ�����μ���!\r\n#r��ע��:���Ҫ�μ��ռ��˲α���������ʱ��,�������ǲ���Я����#v4000293#�۹���#v4000294#�Ͻ۹���.���һ���Ǹ���BOSS,��������ɱ����,��100%�ᱩGM��Ŷ(GM��ɹ���100%).\r\n\r\n#L1##g����ʱ�䵽��,��Ҫ��ȥ!\r\n#L2#ʱ�仹û������Ҫ����...");


}else if (selection == 5004) {
typed=5040;
cm.sendSimple("#e\r\n���������������T���Ҷ�һ����١�T��������������\r\n#n�����Ƿ�Ҷ�һ����������ʹ��3000ö#v4001126#���һ�ȡ����ϡ�е����Ŷ!.#r#L6##v1402040#���Ҷ3����#k#L7##v1302024#��ϱ�ֽ����#k#L8##v1322003#������#k#L9##v1432009#ľ����#k#L10##v1302080#�ʺ����#k#L11##v1372017#��·��#k#L12##v1302107#��ɫ���۵�#k#L13##v1302049#���߱���#k#L14##v1402013#���ս�#k#L15##v1092022#��ɫ��#k#L16##v1402014#�¶ȼ�#k#L17##v1402044#�Ϲϵ���#k#L18##v1402037#������#k#L20##v1322027#ƽ����#k#L21##v1012014#ʥ��¹����#k#L22##v1302034#��ʥ�ڵ���#k#L23##v1302063#ȼ�ջ��浶#k#L24##v1422011#��ƿ#k#L25##v1442046#��������#k#L26##v1122014#������ʯ����#k#L27##v1122006#��ɫ�������#k#L28##v1122001#��ɫ�������#k#L29##v1122002#��ɫ�������#k#L30##v1122003#��ɫ�������#k#L31##v1122004#��ɫ�������#k#L32##v1122005#��ɫ�������#k");



}else if (selection == 4012) {
typed=4120;
cm.sendYesNo("#e\r\n���������������T���GM�����š�T��������������\r\n#n���,#h #,������ϵ����Ա��?�ǲ����뷢�ʼ�����?����������Ư��,�������ҲҪ�յ�Ǯ��?��ô������100��ð�ձҺ���.");


}else if (selection == 4011) {
typed=4110;
cm.sendSimple("#e\r\n���������������T�����������T������������#n����ת��Ϊʲô�Ա���?\r\n#r#L16#תΪ����(��Ҫ5�������)#l\r\n#L17#תΪŮ��(��Ҫ5�������)#l");



}else if (selection == 4010) {
var h = "��ʱ������..";
cm.sendOk(h);
cm.dispose();

}else if (selection == 4009) {
typed=4090;
var jukebox = "#r#e\r\n���������������T�����ֵ㲥��T������������\r\n#n#d����Ҫ����ʲô����?\r\n";
for (var i = 0; i < music.length; i++)
jukebox += "\r\n#L" + i + "# " +music[i]+ "#l";
cm.sendSimple(jukebox);

}else if (selection == 4008) {
typed=4080;
cm.sendYesNo("#r#e\r\n���������������T��ȫ���������ȡ�T��������������\r\n#n#d����һ��[ȫ����������]��Ҫ����2�������Ŷ!");



}else if (selection == 4007) {
typed=4070;
cm.sendSimple("#r#e���������T����ѡ������Ҫ���������͵����͡�T��������\r\n#L0##v5120008##l#L1##v5120003##l#L2##v5120005##l#L3##v5120009#l#L4##v5121009#l");


}else if (selection == 4006) {
typed=4060;
cm.sendNext("#r#e\r\n���������������T��Ƹ��ᱦ�ж���T��������������\r\n#n���м�����װ����?���м���������װ��������߷ɹ���?���м�������װ������ֱ�Ӽ���?����,�������,ֻҪ����СС��������,�Ҿ��ܴ���ȥ�������Ʊ��ĵ�ͼ���㾡������.ע������:#b\r\n1.����ͼ����ֻ��1����ʱ��,װ��������������Ϸɳ���,����ĵ����������Χ.\r\n2.��������.5�������.\r\n3.���������,ͬʱ����ֻ����һ����.\r\n#r�˻�ű�����:ʱ���,������ս��,װ����,�п���ֱ���ǽ���ӻ����������ĺ����,�������벻��.");

}else if (selection == 4005) {
typed=4050;
cm.sendNext("#r#e\r\n�����������������T�����㲥��T����������������\r\n#nûǮ������ô��,�㲥һ��?�ȿ���ע�������:\r\n#r1.�㲥�ɹ���,�ڸ��������ˢ������,���Լ�Ҫȥ��Ӵ~\r\n2.�㲥һ����Ҫ200Ƭ#��Ҷ.\r\n3.�����п���ֱ�ӱ������(��ֵ15��).\r\n\r\n#bOK,ȷ���˾͵����һ����..!");



}else if (selection == 4004) {
typed=4040;
var c = "#r#e\r\n�����������������T��ð�յ��Ĳ�����T����������������\r\n#n#e#r������Ǯ���ֵ���Ϸ��?���� ������ע��!";
cm.sendNext(c);

}else if (selection == 4003) {
typed=4030;
cm.sendNext("#r#e\r\n�����������������T����սħ��֮����T����������������\r\n#n#b��ȥ��ս#rħ��֮��#b��?�����뿴һ��ע�������:\r\n#r1.�������ǰ��,����1��,�������~\r\n2.�����ɶӳ����룬��������Ϊ200Ƭ��Ҷ.\r\n3.���������5����,ʱ�䵽���Զ�����.\r\n4.�˸�������:���湲��10ֻ21��Ѫ����ħ��,��ʩ�Ÿ��ּ���,�ڴ˵�ͼ����ͬ���˵���һ��,ÿ������6000Ѫ,�����С��!\r\n\r\n#b׼������,��ʼ��ս��..!");


}else if (selection == 4002) {
typed=4020;
cm.sendNext("#r#e\r\n�����������������T����սܽ������T����������������\r\n#n#b��ȥ��ս#rܽ����#b��?�����뿴һ��ע�������:\r\n#r1.�������ǰ��,�������,����һ��~\r\n2.�㲥һ����Ҫ10Ƭ#r��Ҷ.\r\n3.���������3����,ʱ�䵽���Զ�����.\r\n4.�����ÿ������3000Ѫ,�����С�ģ�\r\n\r\n#bOK,��ʼ��ս��..!");

}else if (selection == 4001) {
typed=4010;
var a = "#r#e\r\n�����������������T����ս��������T����������������\r\n#n������η��Ӣ�����뎧������h��꠆Tȥ��ս #b�������#k ��?��ô��ͱ����������¼���:\r\n#r1.�ȼ�������150������!\r\n2.����Ҫ��һ������!\r\n3.�����������������1��!\r\n#b��������������ϼ���,������ս���������.";
cm.sendYesNo(a);


}else if (selection == 2014) {
var w = "#r#e\r\n�����������������T�����˳齱��T����������������\r\n#n#b������Գ鵽�����벻���Ķ���Ŷ.�������5����ҵĻ�,#b[  ����ҿ���ʹ��ð�ձҹ���  ],����������齱���ܳ鵽�ܶ�ϡ����ƷŶ������������õĻ�,���ܳ鵽�����,��ô���ڴ�ף��ף�����!";
cm.sendNext(w);
test=1;




}else if (selection == 2013) {
typed=3380;
cm.sendSimple("#r#e\r\n�����������������T���Ҷ�ǡ�T����������������\r\n#n����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k,�������뵽�ģ�#L43#���͵����ٺŷ�Ҷ�ǡ�[��Ҫһ��#v4000415#](һ��)#l\r\n#L44#���͵����ںŷ�Ҷ�ǡ�[��Ҫһ��#v4031470#](һ��)#l\r\n#L45#���͵�ˢ������ͼ[��Ҫһ��#v4031312#](һ��)#l\r\n#L46#���͵�ˢ������ͼ[��Ҫһ��#v4031311#](һ��)#l"); 



}else if (selection==2012){
typed=3370;
var g = "#r#e\r\n�����������������T�����а��T����������������\r\n#d#e#L33#��ת�����а�#l #L34#���������а�#l#g#L35#���Ƹ����С�#k\r\n\r\n#r#L36#���������а�#k #L37#��PK���а�#l\r\n\r\n#L38#���ȼ����а�#l#n #e#b#L39#����ɱ���а�#k#l";
cm.sendSimple(g);


}else if (selection==2008){
typed=3340;
cm.sendNext("#r#e\r\n�����������������T�����С�T����������������\r\n#n��ӭʹ�� #bMapleWings��ð�յ�����ϵͳ#k �ҵ�����!\r\n#rע�⣺Ҫ�����ſ��Դ�ǮŶ��"); 

}else if (selection==2009){
typed=3350;

cm.sendYesNo("#r#e\r\n���������������T������м��ܡ�T��������������\r\n#n#d����   #r�������м���  #bô? \r\n�����ڵ�ְҵΪ��#r" + cm.getChar().getJob() + " \r\n#dҪ�����ת������Ҫ��    #r5   #d�����ϡ� \r\n#k�������ת������Ϊ��  #r"+cm.getChar().getReborns()+" ");

}else if (selection==2010){
typed=3360;
var c ="#r#e\r\n�����������������T����������and�����ԡ�T����������������\r\n#n�����������������?\r\n#L19#���� ����(STR)#l\r\n#L20#��������(DEX)#l\r\n#L21#��������(INT)#l\r\n#L22#��������(LUK)#l\r\n#L23#������������㵽���� (STR)#l\r\n#L24#������������㵽����(DEX)#l\r\n#L25#������������㵽����(INT)#l\r\n#L26#������������㵽����(LUK)";
cm.sendSimple(c);

}else if (selection==2011){
if (cm.getLevel() < 120 ) {        
cm.sendOk("��ȼ���û��120��,����GM�����Ҳ�������ȥVIPˢǮ��ͼ.");     
cm.dispose();
}else if (cm.getBossLog('shuaqian') >= 10) {
cm.sendOk("������Ѿ��������10��VIPˢǮ��ͼ���������������Ұɣ�");
cm.dispose();
}else{
cm.setBossLog('shuaqian');
cm.warp(910500000, 0);
cm.dispose();  
}

}else if (selection==16){
if(cm.haveItem(5200002,1)==true && cm.getMeso()<=600000000){
cm.gainMeso(1500000000);
cm.sendOk("��ϲ���һ��ɹ���"); 
cm.gainItem(5200002,-1);
cm.dispose();
}else{
cm.sendOk("�һ�ʧ�ܣ���û�н�������������ϵ�Ǯ����������6��!"); 
cm.dispose();
}
}else if (selection == 17) {
if(cm.getMeso()>=1500000000){
cm.sendOk("��ϲ���һ��ɹ���"); 
cm.gainItem(5200002,1);
cm.gainMeso(-1500000000);
cm.dispose();
}else{
cm.sendOk("�һ�ʧ�ܣ���û���㹻�Ľ�ҡ�"); 
cm.dispose();
}

}else if (selection == 19) {
typed=168;
cm.sendSimple("#r#e\r\n�������T��MapleWingsð�յ���ʮ�ֻ��T������\r\n#n#d��ӭ����#rMapleWingsð�յ���ʮ�ֻ�  #d�ҿ��԰�����������������\r\n\r\n�㵱ǰ�ľ������Ϊ��#r"+cm.getjuankuan()+"  #d��\r\n#L1##r��Ҫ���#d(��С���� 1 ��)\r\n#L2##b�鿴�������а�");

}else if (selection == 15) {
typed=73;
cm.sendNext("#r#e\r\n���������������T��������ָ��T��������������\r\n#n���������ָע�����#b\r\n1.�����ɹ���,˫�����޷�����Ч��,ֻ���º����Ϻ�,�Ϳ��Կ���Ч����.\r\n2.������һ�������һ��.\r\n3.ÿ�������ƴ�һ��ֿ�ѽ�ָ��������Ѿ���һ���ˣ��Ͳ�Ҫ�������ˣ�������Ч��\r\n׼�����˵����һ����.\r\n#rPs:��Ȼ,��Ҳ�����������ͽ�ָ:@ring [�Է�����] [��ָ���] a��jΪ��ָ���.")



}else if (selection == 10) {
var statup = new java.util.ArrayList();
cm.getChar().setHp(0);
cm.getChar().setMp(0);
				statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.HP, java.lang.Integer.valueOf(0)));
	statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.MP, java.lang.Integer.valueOf(0)));
				cm.c.getPlayer().getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.serverNotice("���������ԡ���������   ��"+ cm.getChar().getName() +"�����鳡ʧ�⣬���г�������ɱ����Ұ�ο��ο���ɡ�"); 
cm.dispose();  

}else if (selection == 200000000) {
if (cm.getPlayer().getVip() < 3)
{
cm.sendOk("�㲻�Ǳ�����VIP3-4���������޷�Ϊ�����");
cm.dispose();
}
else
{
if (cm.getPlayer().getDropmeso() == 1)
{
cm.sendSimple("#r#e\r\n�����������T��ر��Զ���ȡð�ձҹ��ܡ�T����������\r\n#n#r�װ�����Ϸ��ң���������Ϊ#rVIP3���ϵĻ�Ա#b�ṩ��ֵ���ð�ձ��Զ���ȡ���񼴣�\r\n#r�����԰Ѵ�ֵõ��Ľ�Ǯ�Զ����뱳����\r\n#d�㵱ǰ�Ľ�Ǯ�Զ���ȡ״̬Ϊ��#r����\r\n\r\n#L0#����ҹر��Զ���ȡ��Ǯ����#l");
typed=171;
}
else if (cm.getPlayer().getDropmeso() == 0)
{
cm.sendSimple("#r#e\r\n�����������T����Զ���ȡð�ձҹ��ܡ�T����������\r\n#n#b#r�װ�����Ϸ��ң���������Ϊ#rVIP3���ϵĻ�Ա#b�ṩ��ֵ���ð�ձ��Զ���ȡ���񼴣�\r\n#r�����԰Ѵ�ֵõ��Ľ�Ǯ�Զ����뱳����\r\n#d�㵱ǰ�Ľ�Ǯ�Զ���ȡ״̬Ϊ��#r�ر�\r\n\r\n#L1#����ҿ����Զ���ȡ��Ǯ����#l");
typed=171;
}
}

}else if (selection == 21) {
typed=100000;
if (cm.getPlayer().getClan() == -1) {
cm.mapMessage("[��������Ա]���㻹������ʲô��?�������κ��,���Ǻ�ǿ�����.");
var text = "#fEffect/SetEff.img/14/effect/3##e#rκ��===[VS]===���#fEffect/SetEff.img/15/effect/3#\r\n#L0##n#b�����T��[����κ��]#L1#[�������]��T����#l\r\n������������������������������������������\r\n#e#r#L2#�����T��ȼ����а�#L3#�Ƹ����а��T����\r\n#L4#�����T��ɱ�����а�#L5#��ɱ���а��T����#l\r\n\r\n#k#n��ɱ��#r" + cm.getChar().getPvpKills() +"#k��|��ɱ#r" + cm.getChar().getPvpDeaths() +"#k��|�����:#r" + cm.getDonatorPoints() + "#k��|NpcID:#r" + cm.getNpc() + "\r\n#k��������:δ�����κι���  ������ϵ:δ�����κ���ϵ";
cm.sendSimple(text);
}else if (cm.getPlayer().getClan() == 0) {
var text = "#fEffect/SetEff.img/14/effect/3##e#rκ��===[VS]===���#fEffect/SetEff.img/15/effect/3#\r\n#L6##n#b�����T��[�鿴κ��״̬]#L7#[�鿴���״̬]��T����#l\r\n������������������������������������������\r\n#e#r#L2#�����T��ȼ����а�#L3#�Ƹ����а��T����\r\n#L4#�����T��ɱ�����а�#L5#��ɱ���а��T����#l\r\n\r\n#k#n��ɱ��#r" + cm.getChar().getPvpKills() +"#k��|��ɱ#r" + cm.getChar().getPvpDeaths() +"#k��|�����:#r" + cm.getDonatorPoints() + "#k��|NpcID:#r" + cm.getNpc() + "\r\n#k��������:κ��  ������ϵ:δ�����κ���ϵ";
cm.sendSimple(text);
}else if (cm.getPlayer().getClan() == 1) {
var text = "#fEffect/SetEff.img/15/effect/3##e#r���===[VS]===κ��#fEffect/SetEff.img/14/effect/3#\r\n#L7##n#b�����T��[�鿴���״̬]#L6#[�鿴κ��״̬]��T����#l\r\n������������������������������������������\r\n#e#r#L2#�����T��ȼ����а�#L3#�Ƹ����а��T����\r\n#L4#�����T��ɱ�����а�#L5#��ɱ���а��T����#l\r\n\r\n#k#n��ɱ��#r" + cm.getChar().getPvpKills() +"#k��|��ɱ#r" + cm.getChar().getPvpDeaths() +"#k��|�����:#r" + cm.getDonatorPoints() + "#k��|NpcID:#r" + cm.getNpc() + "\r\n#k��������:���  ������ϵ:δ�����κ���ϵ";
cm.sendSimple(text);
}








}else if (selection == 18) {
typed=167;
cm.sendSimple("#r#e\r\n�����������������T�����ս����T����������������\r\n#nֻҪ����#v4002000#���ҿ��԰����������PKս��Ŷ��\r\n\r\n#b����ǰ��ɱ�˴�����"+cm.getPvpKills()+"   #r��ɱ�Ĵ�����"+cm.getPvpDeaths()+"\r\n\r\n#L1#ʹ��ս������������ɱ��ս��#l\r\n\r\n#L2#ʹ��ս�����������ձ�ɱ����#l");
}else if (selection == 17) {
if(cm.getMeso()>=1500000000){
cm.sendOk("��ϲ���һ��ɹ���"); 
cm.gainItem(5200002,1);
cm.gainMeso(-1500000000);
cm.dispose();
}else{
cm.sendOk("�һ�ʧ�ܣ���û���㹻�Ľ�ҡ�"); 
cm.dispose();
}
}else if (selection == 14) {
if (cm.haveItem(5200002,2)==false){
cm.sendOk("�Բ�����û��2�������.Ŀǰ��������Ҫ2��.");
cm.dispose();
}else
if (cm.getChar().getGender() == 0) {
cm.getChar().setGender(1);
cm.sendOk("#b��ϲ�㣬�����ǳ��ĳɹ����۳����������\r\n#r���Ѿ���������Ů��Ŷ����ȥ�������ɡ�ȫ�������ҾͲ����ˣ����Ը���ȥ��.");
cm.gainItem(5200002,-2);
cm.dispose();
}else{
cm.getChar().setGender(0);
cm.sendOk("#b��ϲ�㣬�����ǳ��ĳɹ����۳����������\r\n#r���Ѿ�������������Ŷ�����Ժ�Ϳ����������ȫ�������ҾͲ����ˣ����Ը���ȥ��.");
cm.gainItem(5200002,-2);
cm.dispose();
}


}else if (selection==1){
typed=2;
cm.sendAcceptDecline("#r#e\r\n�����������T������װ���������ħ������T����������\r\n#n��Ŀǰѡ�����#r����װ����������ħ����#k.\r\n�����Ŀǰ��Ҫ�����#r"+zjghm+"#k��,�������һ������:\r\n#b1.Ҫ������װ��������ڵ�һ��.\r\n2.������һ������ʧ��,�뿼�Ǻ�������.\r\n3.�����ɹ���,���װ����������ħ������������10������,�Ҿ������1.\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#r����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"��          ��Ŀǰ��������:#r"+cm.getDonatorPoints()+"#k.");
}else if (selection==2){
typed=81;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
cm.sendSimple("#r#e\r\n�����������T������װ���������ħ������T����������\r\n#n����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.\r\n��Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#,�������Ҫ������װ��,�뽫��Ҫ�ҵ�װ������װ������һ��.#d\r\n #L0# ��ʼ����100�ײ�[��Ҫ"+taocan100+"�������] #l \r\n #L1# ��ʼ����200�ײ�[��Ҫ"+taocan200+"�������] #l \r\n #L2# ��ʼ����300�ײ�[��Ҫ"+taocan300+"�������] #l \r\n #L3# ��ʼ����400�ײ�[��Ҫ"+taocan400+"�������] #l\r\n #L4# ��ʼ����1000�ײ�[��Ҫ"+taocan1000+"�������] #l\r\n\r\n#rע�����Ϲ��ܶ��ǶԹ�������ħ����ͬʱ����..!"); 
}else if (selection==3){
typed=82;
cm.sendSimple("#r#e\r\n�����������������T�����ߡ�T����������������\r\n#n����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.\r\n\r\n #L0##d �����¶ȼ�[��Ҫ"+wenduji+"�������] #l \r\n #L1# �����Ϲϵ���[��Ҫ"+nanguadeng+"�������] #l \r\n #L2# ����ȼ�յı���[��Ҫ"+bingdao+"�������] #l \r\n #L3# ������浶[��Ҫ"+huodao+"�������] #l\r\n #L4# ����������[��Ҫ"+langya+"�������] #l\r\n\r\n#rע��������߶���ϡ���䱦..!"); 
}else if (selection==4){//����������
typed=111;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
cm.sendAcceptDecline("#r#e\r\n�������������T������װ������������T������������\r\n#n��Ŀǰѡ�����#r����װ������������#k.\r\n�����Ŀǰ��Ҫ�����#r"+shengjics+"#k��,�������һ������:\r\n1.Ҫ������װ��������ڵ�һ��.��Ŀǰװ���ǣ�#v"+item.getItemId()+"#,�������Ҫ������װ��,�뽫��Ҫ�ҵ�װ������װ������һ��.\r\n2.#b������һ������ʧ��,�뿼�Ǻ�������.#k\r\n3.�����ɹ���,��Ŀ�������������1 .\r\n4.����ʧ�ܺ�װ������ʧ.\r\n#rȷ��û����󣬵�����ܿ�ʼ����.\r\n����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"��          ��Ŀǰ��������:#r"+cm.getDonatorPoints()+"#k.");
}else if (selection==5){
typed=3;
cm.sendSimple("#r#e\r\n�����T���ϡ����ߡ�T����\r\n#n����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"�� ��Ŀǰ�����:#r"+cm.getDonatorPoints()+"#k.\r\n�������鿴װ�����Ժ���Ҫ�������.\r\n #L0##b ����GMñ #l \r\n #L1# ���򹤵����� #l");
}else if (selection==6){
cm.sendOk("#b���޻ظ�");
cm.dispose(); 
}else if (selection==7){
cm.sendOk("#r#r#e\r\n�����������������T��VIP����T����������������\r\n#n�ʣ���ô����VIP��\r\n#b����������Ҫ���㹻������ң�Ȼ����������루����ҿ���ʹ��ð�ձҹ���Ҳ����ͨ������~���ã���VIP1��1ת�������ѻ�ã�.\r\n#r�ʣ�VIP2�߼���Ա�������?#b\r\n��:VIP2Ϊ�����߼���Ա���������ܵ�PK2��������,ÿ��һ����7�����ԣ��ݵ�����ͨ��Ա��5����ÿ����2��ת����,6��ð�ձң��߼�VIP���ʣ�,ͬʱ���Ե�VIPר����ͼ����120��װ��,��GM����ȵȣ�Ӧ�о���!\r\n#r�ʣ�VIP3������Ա�������?#b\r\n��:VIP3������Ա����������VIP2�Ĺ������⣬3��PK������,ÿ��һ����8�����ԣ��ݵ�����ͨ��Ա��6��������ȥ�߼�ʥ������ˢBOSS������ף����ȣ�����ר������ͼ��ÿ����4��ת����,9��ð�ձ�.\r\n#r�ʣ�VIP4�����Ա�������?#b\r\n��:VIP4��Ա������������VIP2��VIP3�Ĺ����⣬����������4��PK����������ɱ�������Σ�ÿ��һ����9�����ԣ��ݵ�����ͨ��Ա��7��������ר�õ�VIP4������ͼ<�����BOSSˬ����Ӵ!>.ͬʱÿ�����������ȡ���,ÿ��������������(��ֵ30��ð�ձ�)�Ĺ���,����GM���ᣬ���������͹���,ֱ��ת���ȣ�\r\n��ô�����Ķ������ж���������VIP�����а�...!");
cm.dispose(); 
}


if (selection == 12) {
typed=26;
cm.sendSimple("#r#e\r\n�����������������T��һ�����ҡ�T����������������\r\n#n#d��ѡ��һ�ֻ�ȡ��ʽ:#r\r\n#L0#ʹ��1����Ҷ�齻��#l \r\n#L1#ʹ��100����Ҷ����#l\r\n\r\n #n\r\n#k��Ŀǰ�Ѿ�ɱ��#r"+cm.getChar().getPvpKills()+"#k��   ��ɱ����:#r"+cm.getChar().getPvpDeaths()+"#k��     �����:#r"+cm.getDonatorPoints()+"#k��");
} else if (selection == 13) {
typed=180;
cm.sendSimple("ע��,ʤ�������200����,ʧ����ʧȥ200��...\r\n" 
+ "#L0##fUI/UIWindow.img/RpsGame/Frock##l" 
+ "#L1##fUI/UIWindow.img/RpsGame/Fpaper##l" 
+ "#L2##fUI/UIWindow.img/RpsGame/Fscissor##l" 
); 
} else if (selection == 11) {
typed=5;
var selStr = "#r#e\r\n���������������T��1��1����PK���ܡ�T��������������\r\n#n����Ҫ��ս��Ķ������㹻ǿ����?����#e#r1��1#k#nPkϵͳ����Ա.�ҿ����ṩ���㵥����һ�������������ѽ���.��ô��?\r\n#e#bPs:(10-14)��2���г�Ϊ1��1PK����#k#n      #rע�⣺Ҫ��2�ߴ����ſ���Ŷ! "; 
var pvproom = new Array( 
"\r\n"+ 
cm.getPvpRoom(map+10, 10), 
cm.getPvpRoom(map+11, 11)+"\r\n", 
cm.getPvpRoom(map+12, 12), 
cm.getPvpRoom(map+13, 13)+"\r\n", 
cm.getPvpRoom(map+14, 14), 
cm.getPvpRoom(map+14, 14));
for (var i = 0; i < pvproom.length; i++) { 
selStr += "" + pvproom[i] + ""; 
} 
cm.sendSimple(selStr); 
} 








} else if (status == 3) {



if(typed==6210){
typed=6211;
if (cm.getMeso() < needmon) {
cm.sendOk("#b����ǿ����Ҫ#r"+needmon+"#bð�ձ�,����ð�ձҲ���!");
cm.dispose();                 
}
else if (cm.getDonatorPoints() < needdona)  {
cm.sendOk("#b����ǿ����Ҫ#r"+needdona+"#b�������,�������Ҳ���!");
cm.dispose();
}
else {
if (cm.getChar().getRemainingAp() < needap)
{
cm.sendOk("#b����ǿ����Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!"); 
cm.dispose();
} else {
var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).copy();
var item3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var newstr = (item1.getStr()+item2.getStr())* beilv;
var newdex = (item1.getDex()+item2.getDex())* beilv;
var newint = (item1.getInt()+item2.getInt())* beilv;
var newluk = (item1.getLuk()+item2.getLuk())* beilv;
var newspeed = (item1.getSpeed()+item2.getSpeed())* beilv;
var newwatk = (item1.getWatk()+item2.getWatk())* beilv;
var newmatk = (item1.getMatk()+item2.getMatk())* beilv;
var newwdef = (item1.getWdef()+item2.getWdef())* beilv;
var newmdef = (item1.getMdef()+item2.getMdef())* beilv;
var newacc = (item1.getAcc()+item2.getAcc())* beilv;
var newavoid = (item1.getAvoid()+item2.getAvoid())* beilv;
var sumstr = item3.getStr() + newstr ;
var sumdex = item3.getDex() + newdex ;
var sumint = item3.getInt() + newint ;
var sumluk = item3.getLuk() + newluk ;
var sumspeed = item3.getSpeed() + newspeed ;
var sumwatk = item3.getWatk() + newwatk ;
var summatk = item3.getMatk() + newmatk ;
var sumwdef = item3.getWdef() + newwdef ;
var summdef = item3.getMdef() + newmdef ;
var sumacc = item3.getAcc() + newacc ;
var sumavoid = item3.getAvoid() + newavoid ;

if (item3.getUpgradeSlots() <= 15) {
cm.sendAcceptDecline("#b����ǰװ��#v"+itemId3+"#�Ŀ���������Ϊ��#k#r("+item3.getUpgradeSlots()+"��)#k\r\n#b��ǰ����ǿ���ɹ���Ϊ��#k#r30%#k\r\n#b��������ǿ��ʧ�ܴ���Ϊ��#k#r"+cm.getExt('wqqhfail')+" ��#k\r\n#g===================#b���ԶԱ�#k#g===================#k\r\n#r  ��  ��              Ŀǰ����             ��������          ǿ��������#k\r\n#d��     ��                "+item3.getStr()+"                        "+newstr+"              "+sumstr+"\r\n��     ��                "+item3.getDex()+"                        "+newdex+"              "+sumdex+"\r\n��     ��                "+item3.getInt()+"                        "+newint+"              "+sumint+"\r\n��     ��                "+item3.getLuk()+"                        "+newluk+"              "+sumluk+"\r\n��     ��                "+item3.getSpeed()+"                           "+newspeed+"                       "+sumspeed+"\r\n�� �� ��               "+item3.getAcc()+"                          "+newacc+"                     "+sumacc+"\r\n�� �� ��               "+item3.getAvoid()+"                          "+newavoid+"                     "+sumavoid+"\r\n������             "+item3.getWatk()+"                           "+newwatk+"                       "+sumwatk+"\r\nħ������             "+item3.getMatk()+"                           "+newmatk+"                       "+summatk+"\r\n�������             "+item3.getWdef()+"                           "+newwdef+"                     "+sumwdef+"\r\nĦ������             "+item3.getMdef()+"                           "+newmdef+"                     "+summdef+"");


} else if ((item3.getUpgradeSlots() >= 16)&&(item3.getUpgradeSlots() <= 25)) {
cm.sendAcceptDecline("#b����ǰװ��#v"+itemId3+"#�Ŀ���������Ϊ��#k#r("+item3.getUpgradeSlots()+"��)#k\r\n#b��ǰ����ǿ���ɹ���Ϊ��#k#r50%#k\r\n#b��������ǿ��ʧ�ܴ���Ϊ��#k#r"+cm.getExt('wqqhfail')+" ��#k\r\n#g===================#b���ԶԱ�#k#g===================#k\r\n#r  ��  ��              Ŀǰ����             ��������          ǿ��������#k\r\n#d��     ��                "+item3.getStr()+"                        "+newstr+"              "+sumstr+"\r\n��     ��                "+item3.getDex()+"                        "+newdex+"              "+sumdex+"\r\n��     ��                "+item3.getInt()+"                        "+newint+"              "+sumint+"\r\n��     ��                "+item3.getLuk()+"                        "+newluk+"              "+sumluk+"\r\n��     ��                "+item3.getSpeed()+"                           "+newspeed+"                       "+sumspeed+"\r\n�� �� ��               "+item3.getAcc()+"                          "+newacc+"                     "+sumacc+"\r\n�� �� ��               "+item3.getAvoid()+"                          "+newavoid+"                     "+sumavoid+"\r\n������             "+item3.getWatk()+"                           "+newwatk+"                       "+sumwatk+"\r\nħ������             "+item3.getMatk()+"                           "+newmatk+"                       "+summatk+"\r\n�������             "+item3.getWdef()+"                           "+newwdef+"                     "+sumwdef+"\r\nĦ������             "+item3.getMdef()+"                           "+newmdef+"                     "+summdef+"");


} else if (item3.getUpgradeSlots() > 25) {

cm.sendAcceptDecline("#b����ǰװ��#v"+itemId3+"#�Ŀ���������Ϊ��#k#r("+item3.getUpgradeSlots()+"��)#k\r\n#b��ǰ����ǿ���ɹ���Ϊ��#k#r90%#k\r\n#b��������ǿ��ʧ�ܴ���Ϊ��#k#r"+cm.getExt('wqqhfail')+" ��#k\r\n#g===================#b���ԶԱ�#k#g===================#k\r\n#r  ��  ��              Ŀǰ����             ��������          ǿ��������#k\r\n#d��     ��                "+item3.getStr()+"                        "+newstr+"              "+sumstr+"\r\n��     ��                "+item3.getDex()+"                        "+newdex+"              "+sumdex+"\r\n��     ��                "+item3.getInt()+"                        "+newint+"              "+sumint+"\r\n��     ��                "+item3.getLuk()+"                        "+newluk+"              "+sumluk+"\r\n��     ��                "+item3.getSpeed()+"                           "+newspeed+"                       "+sumspeed+"\r\n�� �� ��               "+item3.getAcc()+"                          "+newacc+"                     "+sumacc+"\r\n�� �� ��               "+item3.getAvoid()+"                          "+newavoid+"                     "+sumavoid+"\r\n������             "+item3.getWatk()+"                           "+newwatk+"                       "+sumwatk+"\r\nħ������             "+item3.getMatk()+"                           "+newmatk+"                       "+summatk+"\r\n�������             "+item3.getWdef()+"                           "+newwdef+"                     "+sumwdef+"\r\nĦ������             "+item3.getMdef()+"                           "+newmdef+"                     "+summdef+"");

}
}
}

} else if(typed==55000){
if (selection == 55001) {
typed=55100;
cm.sendSimple("#r#e\r\n�����������������T�����ǿ������T������������\r\n#n#d����ǿ��˵����\r\n#e#rǿ���ɹ���100%��#n��ǿ����������#e 111 #n  \r\n#d���ã���Ҫ#e#r"+cjqhyyb+"#d#n�����  ��  #e#r"+cjqhjb+"#d#n ���. \r\n#d��ѡ������Ҫ��ǿ����Ŀ��#r#e\r\n#L55101##rǿ��-----װ����������#l  #L55102#ǿ��-----װ��ħ��������   #l\r\n#L55103##rǿ��-----װ������������#l#n\r\n\r\n#L55104##rǿ��-----װ����������#l        #L55105#ǿ��-----װ����������#l\r\n#L55106##rǿ��-----װ����������#l        #L55107#ǿ��-----װ����������#l#d\r\n#L55108##rǿ��-----װ����������#l        #L55109#ǿ��-----װ���ر�����#l\r\n#L55110#ǿ��-----װ���������#l        #L55111#ǿ��-----װ��ħ������#l");

} else if (selection == 55002) {
typed=55200;
cm.sendSimple("#e#r\r\n�����������������T��߼�ǿ������T������������\r\n#n#d�߼�ǿ��˵����\r\n#e#rǿ���ɹ���100%��#n��ǿ����������#e 333 #n\r\n���ã���Ҫ#e#r"+gjqhyyb+"#n#d����� ��  #e#r"+gjqhjb+"#d#n ���.\r\n#d��ѡ������Ҫ��ǿ����Ŀ��#r#e\r\n#L55201##rǿ��-----װ����������#l  #L55202#ǿ��-----װ��ħ��������#l\r\n#L55203##rǿ��-----װ������������#l#n\r\n\r\n#L55204##rǿ��-----װ����������#l        #L55205#ǿ��-----װ����������#l\r\n#L55206##rǿ��-----װ����������#l        #L55207#ǿ��-----װ����������#l#d\r\n#L55208##rǿ��-----װ����������#l        #L55209#ǿ��-----װ���ر�����#l\r\n#L55210##rǿ��-----װ���������#l        #L55211#ǿ��-----װ��ħ������#l");

} else if (selection == 55003) {
typed=55300;
cm.sendSimple("#e#r\r\n�����������������T���ǿ������T������������\r\n#n#d����ǿ��˵����\r\n#e#rǿ���ɹ���100%��#n��ǿ����������#e 888 #n\r\n���ã���Ҫ#e#r"+chaojqhyyb+"#n#d����� ��  #e#r"+chaojqhjb+"#d#n ���.\r\n#d��ѡ������Ҫ��ǿ����Ŀ��#r#e\r\n#L55301##rǿ��-----װ����������#l  #L55302#ǿ��-----װ��ħ��������#l\r\n#L55303##rǿ��-----װ������������#l#n\r\n\r\n#L55304##rǿ��-----װ����������#l        #L55305#ǿ��-----װ����������#l\r\n#L55306##rǿ��-----װ����������#l        #L55307#ǿ��-----װ����������#l#d\r\n#L55308##rǿ��-----װ����������#l        #L55309#ǿ��-----װ���ر�����#l\r\n#L55310##rǿ��-----װ���������#l        #L55311#ǿ��-----װ��ħ������#l");

} else if (selection == 55004) {
typed=55400;
cm.sendSimple("#e#r\r\n�����������������T������ǿ������T������������\r\n#n#d����ǿ��˵����\r\n#e#rǿ���ɹ���100%��#n��ǿ����������#e 1818 #n\r\n���ã���Ҫ#e#r"+zzqhyyb+"#n#d����� ��  #e#r"+zzqhjb+"#d#n ���.\r\n#d��ѡ������Ҫ��ǿ����Ŀ��#r#e\r\n#L55401##rǿ��-----װ����������#l  #L55402#ǿ��-----װ��ħ��������#l\r\n#L55403##rǿ��-----װ������������#l#n\r\n\r\n#L55404##rǿ��-----װ����������#l        #L55405#ǿ��-----װ����������#l\r\n#L55406##rǿ��-----װ����������#l        #L55407#ǿ��-----װ����������#l#d\r\n#L55408##rǿ��-----װ����������#l        #L55409#ǿ��-----װ���ر�����#l\r\n#L55410##rǿ��-----װ���������#l        #L55411#ǿ��-----װ��ħ������#l");

}

} else if(typed==800000000){

qty=selection;
cm.addgxd(selection);
cm.setgxded('tgy');
cm.sendOk("��ϲ,��֤�ɹ�.����ر���,ע�����Ӵ,ͬʱ,������ѽ����һ�㹱�׵�.��ȥ֪ͨ������Ѱ�..!");
cm.dispose();



} else if(typed==400210){
	if (selection == 0) {
            cm.openShop(501);
	} else if (selection == 1) {
            cm.openShop(502);
	} else if (selection == 2) {
            cm.openShop(503);
	} else if (selection == 3) {
            cm.openShop(504);
	} else if (selection == 4) {
            cm.openShop(800);
	} else if (selection == 5) {
            cm.openShop(900);
	} else if (selection == 6) {
            cm.openShop(901);
	} else if (selection == 7) {
            cm.openShop(902);
	} else if (selection == 8) {
            cm.openShop(903);
	} else if (selection == 9) {
            cm.openShop(904);
	} else if (selection == 10) {
            cm.openShop(905);
	} else if (selection == 11) {
            cm.openShop(906);
	} else if (selection == 12) {
            cm.openShop(907);
	} else if (selection == 13) {
            cm.openShop(908);
	} else if (selection == 14) {
            cm.openShop(909);
	} else if (selection == 15) {
            cm.openShop(911);
	} else if (selection == 16) {
            cm.openShop(912);
	} else if (selection == 17) {
            cm.openShop(913);
	} else if (selection == 18) {
            cm.openShop(105);
	} else if (selection == 19) {
            cm.openShop(910);
	} else if (selection == 20) {
            cm.openShop(108);
    } else if (selection == 21) {
            cm.openShop(914);
    } else if (selection == 30) {
            cm.openShop(505);
    } else if (selection == 31) {
            cm.openShop(915);
    } else if (selection == 32) {
            cm.openShop(916);
    } else if (selection == 33) {
            cm.openShop(917);
    } else if (selection == 34) {
            cm.openShop(918);
    } else if (selection == 35) {
            cm.openShop(919);
    } else if (selection == 36) {
            cm.openShop(920);
    } else if (selection == 37) {
            cm.openShop(921);
    } else if (selection == 38) {
            cm.openShop(922);
    } else if (selection == 39) {
            cm.openShop(923);

	} 


} else if(typed==400110){
if (selection == 0) {
wui = 1;
        var statup = new java.util.ArrayList();
        var p = cm.c.getPlayer();
        var totAp = p.getRemainingAp() + p.getStr() + p.getDex() + p.getInt() + p.getLuk();
        p.setStr(1000);
        p.setDex(1000);
        p.setInt(1000);
        p.setLuk(1000);
        p.setRemainingAp (totAp - 3);
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(1000)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(1000)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(1000)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(1000)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));

        p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
        	cm.dispose();
			} else if (selection == 1) {
           cm.changeJob(net.sf.odinms.client.MapleJob.SUPERGM);
			} else if (selection == 2) {
                        cm.getPlayer().setLevel(120);
			} else if (selection == 3) {
                          cm.getPlayer().maxAllSkills();
                         cm.sendOk("�ɹ�~!");
			} else if (selection == 4) {
                         cm.openShop(1);
			} else if (selection == 5) {
                         cm.gainItem(1052076,1);
                         cm.gainItem(1072268,1);
                         cm.gainItem(1082164,1);
                         cm.gainItem(2041200,7);
                         cm.gainItem(1122002,1);
                         cm.gainItem(1382036,1);
			} else if (selection == 6) {
                         cm.gainItem(1002551,1);
                         cm.gainItem(1052075,1);
                         cm.gainItem(1072273,1);
                         cm.gainItem(1082168,1);
                         cm.gainItem(2041200,7);
                         cm.gainItem(1122002,1);
                         cm.gainItem(1402036,1);
                         cm.gainItem(1312031,1);
                         cm.gainItem(1412026,1);
                         cm.gainItem(1432038,1);
                         cm.gainItem(1322052,1);
                         cm.gainItem(1442045,1);
                         cm.gainItem(1402037,1);
			} else if (selection == 7) {
                         cm.gainItem(1002550,1);
                         cm.gainItem(1052072,1);
                         cm.gainItem(1072272,1);
                         cm.gainItem(1082167,1);
                         cm.gainItem(1092049,1);
                         cm.gainItem(2041200,7);
                         cm.gainItem(1122002,1);
                         cm.gainItem(1332050,1);
                         cm.gainItem(1472053,1);
                         cm.gainItem(1092049,1);
			} else if (selection == 8) {
                         cm.gainItem(1002547,1);
                         cm.gainItem(1052071,1);
                         cm.gainItem(1072269,1);
                         cm.gainItem(1082163,1);
                         cm.gainItem(2041200,7);
                         cm.gainItem(1122002,1);
                         cm.gainItem(1452044,1);
                         cm.gainItem(1462039,1);
			} else if (selection == 9) {
                         cm.gainMeso(100000000);
			} else if (selection == 10) {
                         cm.gainItem(1302024,1)
			} else if (selection == 11) {
                         cm.gainItem(1302021,1);
			} else if (selection == 12) {
                         cm.gainItem(1302049,1);
			} else if (selection == 13) {
                         cm.gainItem(1312012,1);
			} else if (selection == 14) {
                         cm.gainItem(1322003,1);
			} else if (selection == 15) {
                         cm.gainItem(1322012,1);
			} else if (selection == 16) {
                         cm.gainItem(1322027,1);
			} else if (selection == 17) {
                         cm.gainItem(1332021,1);
			} else if (selection == 18) {
                         cm.gainItem(1332032,1);
			} else if (selection == 19) {
                         cm.gainItem(1332053,1);
			} else if (selection == 20) {
                         cm.gainItem(1372017,1);
			} else if (selection == 21) {
                         cm.gainItem(1382015,1);
			} else if (selection == 22) {
                         cm.gainItem(1332030,1);
			} else if (selection == 23) {
                         cm.gainItem(1382016,1);
			} else if (selection == 24) {
                         cm.gainItem(1402013,1);
			} else if (selection == 25) {
                         cm.gainItem(1402014,1);
			} else if (selection == 26) {
                         cm.gainItem(1402017,1);
			} else if (selection == 27) {
                         cm.gainItem(1422011,1);
			} else if (selection == 28) {
                         cm.gainItem(1432009,1);
			} else if (selection == 29) {
                         cm.gainItem(1442018,1);
			} else if (selection == 30) {
                         cm.gainItem(1432039,1);
			} else if (selection == 32) {
                         cm.gainItem(1442023,1);
			} else if (selection == 31) {
                        cm.changeJob(net.sf.odinms.client.MapleJob.GM);
			} else if (selection == 33) {
                         cm.gainItem(5390000,100);
                         cm.gainItem(5390001,100);
                         cm.gainItem(5390002,100);
			} else if (selection == 34) {
                         cm.warp(100000000,0)
			} else if (selection == 35) {
                         cm.gainItem(1322013,1);
                         cm.gainItem(1042003,1);
                         cm.gainItem(1062007,1);
                         cm.gainItem(1002140,1);
} 



} else if(typed==300210){
	if (selection == 0) {
            cm.openShop(1337);
	} else if (selection == 1) {
            cm.openShop(901);
	} else if (selection == 2) {
            cm.openShop(901);
	} else if (selection == 3) {
            cm.openShop(901);
	} else if (selection == 4) {
            cm.openShop(904);
	} else if (selection == 5) {
            cm.openShop(1341);
	} else if (selection == 6) {
            cm.openShop(2000);
	} else if (selection == 7) {
            cm.openShop(2001);
	} else if (selection == 8) {
            cm.openShop(2003);
	} else if (selection == 9) {
            cm.openShop(2002);
	} else if (selection == 10) {
            cm.openShop(910);
	} else if (selection == 11) {
            cm.openShop(907);
	} else if (selection == 12) {
            cm.openShop(908);
	} else if (selection == 13) {
            cm.openShop(909);
	} else if (selection == 14) {
            cm.openShop(906);
	} else if (selection == 15) {
            cm.openShop(914);
	} else if (selection == 16) {
            cm.openShop(1352);
	} 



} else if(typed==200210){
if (selection == 0) {
		cm.openShop (2000);
	} else if (selection == 1) {
		cm.openShop (2001);
	} else if (selection == 2) {
		cm.openShop (2002);
	} else if (selection == 3) {
		cm.openShop (2003);
	} else if (selection == 4) {
		cm.openShop (2004);
	} else if (selection == 5) {
		cm.openShop (2005);
	} else if (selection == 6) {
		cm.openShop (2006);
	} else if (selection == 7) {
		cm.openShop (2007);
	} else if (selection == 8) {
		cm.openShop (2008);
	} else if (selection == 9) {
		cm.openShop (2009);
	} else if (selection == 10) {
		cm.openShop (2010);
	} else if (selection == 11) {
		cm.openShop (2011);
	} else if (selection == 12) {
		cm.openShop (2012);
	} else if (selection == 13) {
		cm.warp(910000000, 0);
		cm.dispose();
	} else {
		cm.dispose();
	}


} else if(typed==200110){
if (selection == 0) {
		cm.openShop (4001);
	} else if (selection == 1) {
		cm.openShop (4002);
	} else if (selection == 2) {
		cm.openShop (4003);
	} else {
		cm.dispose();
	}


} else if(typed==100210){
	if (selection == 0) {
		cm.openShop (1000);
	} else if (selection == 1) {
		cm.openShop (1001);
	} else if (selection == 2) {
		cm.openShop (1002);
	} else if (selection == 3) {
		cm.openShop (1003);
	} else if (selection == 4) {
		cm.openShop (1004);
	} else if (selection == 5) {
		cm.openShop (1005);
	} else if (selection == 6) {
		cm.openShop (1006);
	} else if (selection == 7) {
		cm.openShop (1007);
	} else if (selection == 8) {
		cm.openShop (1008);
	} else if (selection == 9) {
		cm.openShop (1009);
	} else if (selection == 10) {
		cm.openShop (1010);
	} else if (selection == 11) {
		cm.openShop (1011);
	} else if (selection == 12) {
		cm.openShop (1012);
	} else if (selection == 13) {
		cm.openShop (1013);
	} else if (selection == 14) {
		cm.openShop (1015);
	} else if (selection == 15) {
		cm.openShop (1016);
	} else {
		cm.dispose();
	}

} else if(typed==100120){
typed=100121;
if (selection == 0) {
				beauty = 11;
				cm.sendStyle("ѡ����ϲ����?", skin);
			} else if (selection == 1) {
				beauty = 12;
				hairnew = Array();
				for(var i = 0; i < hair0.length; i++) {
					hairnew.push(hair0[i] + parseInt(cm.getChar().getHair()
 % 10));
				}
				cm.sendStyle("ѡ����ϲ����?", hairnew);
			} else if (selection == 2) {
				beauty = 13;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("ѡ����ϲ����?", haircolor);
			} else if (selection == 3) {
				beauty = 14;
				facenew = Array();
				for(var i = 0; i < face0.length; i++) {
					facenew.push(face0[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
				}
				cm.sendStyle("ѡ����ϲ����?", facenew);
			} else if (selection == 4) {
				beauty = 15;
				var current = cm.getChar().getFace()
 % 100 + 20000;
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendStyle("ѡ����ϲ����?", colors);
			}


} else if(typed==100110){
typed=100111;
			if (selection == 0) {
				beauty = 6;
				cm.sendStyle("ѡ����ϲ����?", skin);
			} else if (selection == 1) {
				beauty = 7;
				hairnew = Array();
				for(var i = 0; i < hair1.length; i++) {
					hairnew.push(hair1[i] + parseInt(cm.getChar().getHair()
 % 10));
				}
				cm.sendStyle("ѡ����ϲ����?", hairnew);
			} else if (selection == 2) {
				beauty = 8;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("ѡ����ϲ����?", haircolor);
			} else if (selection == 3) {
				beauty = 9;
				facenew = Array();
				for(var i = 0; i < face1.length; i++) {
					facenew.push(face1[i] + cm.getChar().getFace()
 % 1000 - (cm.getChar().getFace()
 % 100));
				}
				cm.sendStyle("ѡ����ϲ����?", facenew);
			} else if (selection == 4) {
				beauty = 10;
				var current = cm.getChar().getFace()
 % 100 + 21000;
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendStyle("ѡ����ϲ����?", colors);
			}



} else if(typed==900000000){

if (selection == 98001) {
cm.openShop(1091003);
cm.dispose();

} else if (selection == 98002) {
typed=98200000;
cm.sendSimple("#e\r\n�����������������T��VIP�ȼ�������T��������������\r\n #e#r��ѡ��  #d\r\n#L1# VIP -- 5 #l \r\n#L2# VIP -- 4 #l \r\n#L3# VIP -- 3 #l \r\n#L4# VIP -- 2 #l \r\n#L5# VIP -- 1 #l  ");


} else if (selection == 98003) {
typed=98300000;
cm.sendSimple("#e\r\n�����������������T������ְҵ��T��������������\r\n #e#r��ѡ������ı��ְҵ��  #d\r\n#L1# ����GM #l \r\n#L2# ����Ա #l \r\n#L3# Ӣ�� #l \r\n#L4# ���� #l \r\n#L5# ���� #l   \r\n#L6# ���� #l  \r\n#L7# ��ħ��ʦ #l  \r\n#L8# ����ħ��ʦ #l  \r\n#L9# ����ʿ #l  \r\n#L10# ʥ��ʿ #l  \r\n#L11# ������ #l  \r\n#L12# ����� #l  \r\n#L13# ���ӳ� #l  \r\n#L14# ���� #l ");


} else if (selection == 98004) {
typed=98400000;
cm.sendSimple("#e\r\n�����������������T����ȡװ����T��������������\r\n #e#r��ѡ������Ҫ����װ��#r\r\n#L6# ȫ����ȡ #l #d\r\n#L1# GMһ�� #l  #r#L5# ��ȡ--����֮�� #l  #d\r\n#L2# ��װ #l \r\n#L3# ��� #l   \r\n#L4# ���� #l ");

} else if (selection == 98005) {
typed=98500000;
cm.sendSimple("#e\r\n�����������������T�����������ԡ�T������������\r\n #e#r��ѡ������Ҫ�����ӵ����ԣ�#r\r\n#L1# ����ȫ�� #l #d\r\n#L2# ����ȫ�� #l  #r#L3# ����ȫ�� #l  #d\r\n#L4# ����ȫ�� #l \r\n#L5# ����ȫ�� #l  ");



} else if (selection == 98006) {
typed=98600000;
cm.sendSimple("#e\r\n�����������������T���ר����T������������\r\n #e#r��ѡ������Ҫ�ķ���#r\r\n#L1# ������ #l #d\r\n#L2# ��������ɫ #l   ");


}



} else if(typed==6160){
typed=6161;
itemname = cm.getText();
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ#r�޸�����#k��װ��.\r\n�㵱ǰҪ#r�޸�����#k��װ����:#v"+item.getItemId()+"#,�޸��ɹ���װ�������ֽ���Ϊ#r"+itemname+".\r\n#r���ȷ����ϵĻ�,������һ��!");


} else if(typed==6140){
cm.deleteItem(selection+1);
cm.sendOk("��ϲ,�Ѿ�Ϊ���������!");  
cm.dispose();



} else if(typed==7300){
typed=7301;
if (cm.haveItem(5220010)) {
			cm.sendYesNo("#d�ҿ�������#b#v5220010##k,��Ҫʹ����?");
			}
			else if (!cm.haveItem(5220010)) {
			cm.sendOk("#d������û��#b#v5220010##k�������Ҳ��ܰ���!.");
			cm.dispose();
			}



} else if(typed==7200){
if(selection==0){
typed=7201;
cm.sendNext("#r��ע��������˵��:#b\r\n1.��Ҫ#��Ҷ30Ƭ,���˵���1��(�������ӱ�)\r\n2.ÿ���޶���ÿ����עһ��.��ƷΪ�������(Ǯ�ͳ�����Ʒװ��).\r\n3.��ע��,��ϵͳ���������ʮ��������������ȡ.����ڱ��ڹ涨ʱ����δ��ȡ��.ϵͳ����Ϊ�Լ�������Ʒ.\r\n4.������������������,��û�й��������ʱ��,��Ϊ��Ч,���˻�����Ʒ,������������,������������,��������������ȡ��Ʒ.");
}else if(selection==1){
typed=7202;
cm.sendNext("#r��ע��������˵��:#b\r\n1.��Ҫ5�������.\r\n2.ÿ���޶���ÿ����עһ��.��ƷΪ�������(Ǯ�ͳ�����Ʒװ�������).\r\n3.��ע��,��ϵͳ���������ʮ��������������ȡ.����ڱ��ڹ涨ʱ����δ��ȡ��.ϵͳ����Ϊ�Լ�������Ʒ.\r\n4.������������������,��û�й��������ʱ��,��Ϊ��Ч,���˻�����Ʒ,������������,������������,��������������ȡ��Ʒ.");
}


} else if(typed==77000){
if (selection == 77001) {
if (cm.getBossLog('playergz') >= 1) {
cm.sendOk("������Ѿ��������ͨ��ҹ��ʡ������Ҳ����ڸ����ˣ��������������Ұɣ�");
cm.dispose(); 
}else{
cm.gainMeso(200000000); 
cm.gainItem(4001129,1);
cm.gainItem(4021007,1);
cm.setBossLog('playergz');
cm.getPlayer().modifyCSPoints(1, 1000);
cm.sendOk("HOHO�����Ѿ��ɹ���ȡ����ͨ���ÿ��ֻ����2�ڵĹ���+1��ת����+1000���+1����ȡ������Ա����Ʒ��");
cm.dispose();
}


} else if (selection == 77002) {
typed=77777772000;
cm.sendSimple("#e\r\n�������������T����ҽ�ָר������T������������\r\n#d�װ��ģ� #e#r[#h #]#k  #n ��ӭ������ҽ�ָר������\r\n���ר����ָ��ȡҪ��\r\n����ȡ�������ר����ָ#v1112309#,�����ȡ.\r\n#d����ȡ�߼����ר����ָ#v1112310#,#r��Ҫ�ȼ��ﵽ100������.\r\n#d����ȡ�������ר����ָ#v1112311#,#r��Ҫ�ȼ��ﵽ150������.\r\n#r����ȡ�������ר����ָ#v1112300#,#d��Ҫ�ȼ��ﵽ200��.\r\n#d�����ڵĵȼ�Ϊ��#r"+cm.getChar().getLevel()+"#d\r\n#d��ѡ������Ҫ����ȡ�Ľ�ָ��\r\n#L77701##r������ҽ�ָ#v1112309# #l #L77702##r�߼���ҽ�ָ#v1112310# #l\r\n#L77703##r������ҽ�ָ#v1112311# #l #L77704##r������ҽ�ָ#v1112300# #l");

} else if (selection == 77003) {
typed=77777773000;

cm.sendSimple("#e\r\n�������������T��ת����ָר������T������������\r\n#d�װ��ģ� #e#r[#h #]#k  #n ��ӭ����ת����ָר������\r\nת��ר����ָ��ȡҪ��\r\n����ȡ����ת����ָ#v1112303#,��Ҫת�������ﵽ10������.\r\n#d����ȡ�߼�ת����ָ#v1112304#,#r��Ҫת�������ﵽ50������.\r\n#d����ȡ����ת����ָ#v1112305#,#r��Ҫת�������ﵽ100������.\r\n#r����ȡ����ת����ָ#v1112302#,#d��Ҫת�������ﵽ200������.\r\n#d�������Ѿ�ת��:    #r"+cm.getChar().getReborns()+"#k     ��#d\r\n#d��ѡ������Ҫ����ȡ�Ľ�ָ��\r\n#L77701##r����ת����ָ#v1112303# #l #L77702##r�߼�ת����ָ#v1112304# #l\r\n#L77703##r����ת����ָ#v1112305# #l #L77704##r����ת����ָ#v1112302# #l");

}else if (selection == 88005) {
cm.openShop(800);
cm.dispose();
}else if (selection == 88006) {
cm.openShop(109);
cm.dispose();
}else if (selection == 88007) {
cm.openShop(108);
cm.dispose();
}else if (selection == 88008) {
cm.openShop(912);
cm.dispose();
}

} else if(typed==88000){
if (selection == 88001) {
if(cm.getChar().getVip() < 1 ) {
cm.sendOk("�Բ����㲻�ǳ���VIP��Ա�������޷����㵽����VIP��ͼ.");
cm.dispose();
}else{
cm.warp(970010000, 0); 
cm.dispose();
}
}else if (selection == 88002) {
if(cm.getChar().getVip() < 2 ) {
cm.sendOk("�Բ����㲻�Ǹ߼�VIP��Ա�������޷����㵽�߼�VIP��ͼ.");
cm.dispose();
}else{
cm.warp(809050016, 0);
cm.dispose(); 
}
}else if (selection == 88003) {
if(cm.getChar().getVip() < 3 ) {
cm.sendOk("�Բ����㲻�ǳ���VIP��Ա�������޷����㵽����VIP��ͼ.");
cm.dispose();
}else{
cm.warp(920010000, 0);
cm.dispose(); 
}
}else if (selection == 88004) {
if(cm.getChar().getVip() < 4 ) {
cm.sendOk("�Բ����㲻������VIP��Ա�������޷����㵽����VIP��ͼ.");
cm.dispose();
}else{
cm.warp(922020300, 0);
cm.dispose(); 
}


} else if (selection == 88800) {
typed=77777774000;
cm.sendSimple("#e\r\n�������������T��VIP��ָר������T������������\r\n#d�װ��ģ� #e#r[#h #]#k  #n ��ӭ����VIP��ָר������\r\nVIPר����ָ��ȡҪ��\r\n����ȡ����VIPר����ָ#v1112306#,#r��ҪVIP�ȼ��ﵽ2������.\r\n#d����ȡ�߼�VIPר����ָ#v1112307#,#r��ҪVIP�ȼ��ﵽ2������.\r\n#d����ȡ����VIPר����ָ#v1112308#,#r��ҪVIP�ȼ��ﵽ3������.\r\n#r����ȡ����VIPר����ָ#v1112301#,#d��ҪVIP�ȼ��ﵽ4��.\r\n#d�����ڵ�VIP�ȼ�Ϊ��#r"+cm.getChar().getVip()+"#d\r\n#d��ѡ������Ҫ����ȡ�Ľ�ָ��\r\n#L77701##r����VIP��ָ#v1112306# #l #L77702##r�߼�VIP��ָ#v1112307# #l\r\n#L77703##r����VIP��ָ#v1112308# #l #L77704##r����VIP��ָ#v1112301# #l");




}else if (selection == 88005) {
cm.openShop(800);
cm.dispose();
}else if (selection == 88006) {
cm.openShop(109);
cm.dispose();
}else if (selection == 88007) {
cm.openShop(108);
cm.dispose();
}else if (selection == 88008) {
cm.openShop(912);
cm.dispose();


}else if (selection == 88012) {
if(cm.getChar().getVip() < 1 ) {
cm.sendOk("#e�Բ����㲻��VIP��Ա�����޷���ȡ����.");
} else if (cm.getBossLog('vipgz') >= 1) {
cm.sendOk("��Ǹ����VIP��Ա����켺����ȡ���ʣ��������������Ұɣ�");
cm.dispose(); 
}else{
cm.gainMeso(500000000); 
cm.gainItem(4001129,1);
cm.getPlayer().modifyCSPoints(1, 5000);
cm.setBossLog('vipgz');
cm.sendOk("�ɹ���ȡ");
cm.dispose();
}
}else if (selection == 88013) {
if(cm.getChar().getVip() < 2 ) {
cm.sendOk("�Բ����㲻�Ǹ߼�VIP��Ա�޷���ȡ����.");
} else if (cm.getBossLog('vipgz') >= 1) {
cm.sendOk("��Ǹ���𾴸߼�VIP�������켺����ȡ���ʣ��������������Ұɣ�");
cm.dispose(); 
}else{
cm.gainMeso(700000000); 
cm.gainItem(4001129,2);
cm.getPlayer().modifyCSPoints(1, 10000);
cm.setBossLog('vipgz');
cm.sendOk("�ɹ���ȡ");
cm.dispose();
}
}else if (selection == 88014) {
if(cm.getChar().getVip() < 3 ) {
cm.sendOk("�Բ����㲻�ǳ���VIP��Ա�޷���ȡ����.");
} else if (cm.getBossLog('vipgz') >= 1) {
cm.sendOk("��Ǹ���𾴵ĳ���VIP�������켺����ȡ���ʣ��������������Ұɣ�");
cm.dispose(); 
}else{
cm.gainMeso(1000000000); 
cm.gainItem(4001129,3);
cm.getPlayer().modifyCSPoints(1, 20000);
cm.setBossLog('vipgz');
cm.sendOk("�ɹ���ȡ");
cm.dispose();
}
}else if (selection == 88015) {
if(cm.getChar().getVip() < 4 ) {
cm.sendOk("�Բ����㲻������VIP��Ա�޷���ȡ����.");
} else if (cm.getBossLog('vipgz') >= 1) {
cm.sendOk("��Ǹ���𾴵�����VIP�������켺����ȡ���ʣ��������������Ұɣ�");
cm.dispose(); 
}else{
cm.gainMeso(1500000000); 
cm.getPlayer().modifyCSPoints(1, 50000);
cm.gainItem(4001129,4);
cm.setBossLog('vipgz');
cm.sendOk("�ɹ���ȡ");
cm.dispose();
}
}

} else if(typed==98000){

if (selection == 98001) {
cm.openShop(1091003);
cm.dispose();

} else if (selection == 98002) {
typed=98200;
cm.sendSimple("#e\r\n�����������������T��VIP�ȼ�������T��������������\r\n #e#r��ѡ��  #d\r\n#L1# VIP -- 5 #l \r\n#L2# VIP -- 4 #l \r\n#L3# VIP -- 3 #l \r\n#L4# VIP -- 2 #l \r\n#L5# VIP -- 1 #l  ");




}


} else if(typed==7100){
if(selection==0){
typed=7101;
cm.sendYesNo("����Ҫ���� #r����ս�������[�����Ǳ�]#k ��?\r\n�۸����:#b�ȼ� x 1000000#k��Һ�20Ƭ#r��Ҷ.");
}else if(selection==1){
typed=7102;
cm.sendYesNo("����Ҫ���� #r����սħ������[��ؾ���]#k ��?\r\n�۸����:#b�ȼ� x 1000000#k��Һ�10Ƭ#r��Ҷ.");
}else if(selection==2){
cm.dispose();
}else if(selection==3){
cm.sendOk("#r��:�������[�����Ǳ�]��һ��ʲô���ĸ���,�����ս?\r\n#b��:�����Ǳ�,�Ǳ�������ɫ����֮һ,�˸�������ʱ��Ϊÿһ��Сʱ����һ��,���ź�,��ҿ���ƾ����Ʒ����,����󽫻�ˢ�������Ĺ��﹩������,���л��ᱩ����װ�������.ͬʱ��������е�һ��������ѡ��һλ�������,��λ�������м���,����Ϊ����Ӯ��һ��������.\r\n#r��:ħ������[��ؾ���]��һ��ʲô���ĸ���?\r\n#b��:��������������Ǳ����,����������Ʒ�͹��ﶼ��һ��,�����Լ�ȥ�����.\r\n#r��:��ս���[δ����]��ʱ����˵��..\r\n#b��:��ʱ��˵��,�������ʲô�õĽ������������Ϊ�������ս����,�����Ը��ͷ����,���ɺ����轱��.");
cm.dispose();
}

}else if(typed==7200){
if(selection==0){
typed=7201;
cm.sendNext("#r��ע��������˵��:#b\r\n1.��Ҫ#r��Ҷ30Ƭ,���˵���1��(���˳�)\r\n2.ÿ���޶���ÿ����עһ��.��ƷΪ�������(Ǯ�ͳ�����Ʒװ��).\r\n3.��ע��,��ϵͳ���������ʮ��������������ȡ.����ڱ��ڹ涨ʱ����δ��ȡ��.ϵͳ����Ϊ�Լ�������Ʒ.\r\n4.������������������,��û�й��������ʱ��,��Ϊ��Ч,���˻�����Ʒ,������������,������������,��������������ȡ��Ʒ.");
}else if(selection==1){
typed=7202;
cm.sendNext("#r��ע��������˵��:#b\r\n1.��Ҫ5�������.\r\n2.ÿ���޶���ÿ����עһ��.��ƷΪ�������(Ǯ�ͳ�����Ʒװ�������).\r\n3.��ע��,��ϵͳ���������ʮ��������������ȡ.����ڱ��ڹ涨ʱ����δ��ȡ��.ϵͳ����Ϊ�Լ�������Ʒ.\r\n4.������������������,��û�й��������ʱ��,��Ϊ��Ч,���˻�����Ʒ,������������,������������,��������������ȡ��Ʒ.");
}


} else if(typed==99000){
typed=99001;
yyb = cm.getText();
cm.sendYesNo("#d��ȷ��Ҫ���� #r"+yyb+"#k #d������������ȼ������û����ô��ǮŶ��");





} else if(typed==6130){
if (selection == 1) {
typed=6131;
cm.sendGetNumber("������װ����˳������,�ҽ�Ϊ�������.\r\n#bװ��������װ�����Խ���,���Զ���.\r\n#r[ע��:�˹���ֻ��ʹ����װ����!]",1,1,100);
slot = selection;

} else if (selection == 2) {
typed=6132;
cm.sendGetNumber("������װ����˳������,�ҽ�Ϊ�������.\r\n#bװ��������װ�����Խ���,���Զ���.\r\n#d��Ҫ#r"+zbjs+"#d���������Ϊ������.\r\n#r[ע��:�˹���ֻ��ʹ����װ����!]",1,1,100);
slot = selection;
}


} else if(typed==6120){
if (cm.getDonatorPoints() < zjqh) {
cm.sendOk("#d��û��#r"+zjqh+"#d�����,�����Ҳ��ܰ���ǿ��"); 
cm.dispose();
}else{
selected = selection;
cm.MakeGMItem(selected, cm.getP());
cm.gainDonatorPoints(-zjqh);
cm.sendOk("#rǿ���ɹ�,����������,����.Ȼ��鿴����װ����");
cm.dispose();
}

} else if(typed==6110){
typed=6111;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newslots = (item.getUpgradeSlots()+1);
cm.sendAcceptDecline("#b������������Ҿ������װ������װ�����ڵĵ�һ��,����װ�����ĵ�һ����Ϊ��.�����㽫���ܳɹ�.\r\n#r�㵱ǰ��Ҫ�����Ҿ������װ����:#v"+item.getItemId()+"#.�Ҿ����Ϊ:("+item.getUpgradeSlots()+"��)#k.��������ɹ�,��ôװ���Ŀ�������������Ϊ:"+newslots+"��");



} else if(typed==6100){
typed=6101;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newMdef = (item.getMdef()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ#r����ħ������#k��װ��.\r\n�㵱ǰҪ#r����ħ������#k��װ����:#v"+item.getItemId()+"#\r\n\r\n#bĿǰװ��ħ������:#r"+item.getMdef()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"    #b����������:#r"+item.getLevel()+"\r\n\r\n��������ɹ�,��ôװ��ħ����������Ϊ:#r"+newMdef+",������������Ϊ:"+newslots+"");

} else if(typed==6090){
typed=6091;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newWdef = (item.getWdef()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ#r�����������#k��װ��.\r\n�㵱ǰҪ#r�����������#k��װ����:#v"+item.getItemId()+"#\r\n\r\n#bĿǰװ���������:#r"+item.getWdef()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"    #b����������:#r"+item.getLevel()+"\r\n\r\n��������ɹ�,��ôװ�������������Ϊ:#r"+newWdef+",������������Ϊ:"+newslots+"");

} else if(typed==6080){
typed=6081;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newAvoid = (item.getAvoid()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ#r���Ӷ����#k��װ��.\r\n�㵱ǰҪ#r���Ӷ����#k��װ����:#v"+item.getItemId()+"#\r\n\r\n#bĿǰװ�������:#r"+item.getAvoid()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"    #b����������:#r"+item.getLevel()+"\r\n\r\n��������ɹ�,��ôװ������ʽ���Ϊ:#r"+newAvoid+",������������Ϊ:"+newslots+"");



} else if(typed==6070){
typed=6071;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newAcc = (item.getAcc()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ#r����������#k��װ��.\r\n�㵱ǰҪ#r����������#k��װ����:#v"+item.getItemId()+"#\r\n\r\n#bĿǰװ��������:#r"+item.getAcc()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"    #b����������:#r"+item.getLevel()+"\r\n\r\n��������ɹ�,��ôװ�������ʽ���Ϊ:#r"+newAcc+",������������Ϊ:"+newslots+"");

} else if(typed==6060){
typed=6061;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newLuk = (item.getLuk()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ#r��������#k��װ��.\r\n�㵱ǰҪ#r��������#k��װ����:#v"+item.getItemId()+"#\r\n\r\n#bĿǰװ������:#r"+item.getLuk()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"    #b����������:#r"+item.getLevel()+"\r\n\r\n��������ɹ�,��ôװ����������Ϊ:#r"+newLuk+",������������Ϊ:"+newslots+"");



} else if(typed==6050){
typed=6051;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newInt = (item.getInt()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ#r��������#k��װ��.\r\n�㵱ǰҪ#r��������#k��װ����:#v"+item.getItemId()+"#\r\n\r\n#bĿǰװ������:#r"+item.getInt()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"    #b����������:#r"+item.getLevel()+"\r\n\r\n��������ɹ�,��ôװ����������Ϊ:#r"+newInt+",������������Ϊ:"+newslots+"");


} else if(typed==6040){
typed=6041;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newDex = (item.getDex()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ#r��������#k��װ��.\r\n�㵱ǰҪ#r��������#k��װ����:#v"+item.getItemId()+"#\r\n\r\n#bĿǰװ������:#r"+item.getDex()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"    #b����������:#r"+item.getLevel()+"\r\n\r\n��������ɹ�,��ôװ�����ݽ���Ϊ:#r"+newDex+",������������Ϊ:"+newslots+"");


} else if(typed==6030){
typed=6031;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newStr = (item.getStr()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ#r��������#k��װ��.\r\n�㵱ǰҪ#r��������#k��װ����:#v"+item.getItemId()+"#\r\n\r\n#bĿǰװ������:#r"+item.getStr()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"    #b����������:#r"+item.getLevel()+"\r\n\r\n��������ɹ�,��ôװ����������Ϊ:#r"+newStr+",������������Ϊ:"+newslots+"");



} else if(typed==6020){
typed=6021;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newMatk = (item.getMatk()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ#r����ħ����#k��װ��.\r\n�㵱ǰҪ#r����ħ����#k��װ����:#v"+item.getItemId()+"#\r\n\r\n#bĿǰװ��ħ����:#r"+item.getMatk()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"    #b����������:#r"+item.getLevel()+"\r\n\r\n��������ɹ�,��ôװ��ħ��������Ϊ:#r"+newMatk+",������������Ϊ:"+newslots+"");


} else if(typed==6010){
typed=6011;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var newWatk = (item.getWatk()+10);
var newslots = (item.getUpgradeSlots()-1);
cm.sendAcceptDecline("��һ������Ҫ,��ȷ��һ����Ҫ#r���ӹ�����#k��װ��.\r\n�㵱ǰҪ#r���ӹ�����#k��װ����:#v"+item.getItemId()+"#\r\n\r\n#bĿǰװ��������:#r"+item.getWatk()+"   #b����������Ϊ:#r"+item.getUpgradeSlots()+"    #b����������:#r"+item.getLevel()+"\r\n\r\n��������ɹ�,��ôװ������������Ϊ:#r"+newWatk+",������������Ϊ:"+newslots+"");



} else if(typed==5090){
typed=5091;
selectedMap= selection; 
cm.sendYesNo("#e�������Ҫ #b#i" + maps[selection][1] +"#"+ maps[selection][0]+ "#k ��?��Ứ����#r"+maps[selection][2]+"#k���Ե�"); 




} else if(typed==5080){
if (selection == 1) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040006,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 2) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040303,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 3) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040403,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 4) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040506,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 5) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040507,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 6) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040603,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 7) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040709,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 8) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040710,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 9) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040806,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 10) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2040903,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 11) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2041024,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 12) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2041025,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 13) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2041200,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 14) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043003,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 15) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043103,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 16) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043203,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 17) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043303,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 18) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043703,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 19) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2043803,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 20) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044003,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 21) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044103,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 22) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044203,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 23) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044303,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 24) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044403,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 25) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044503,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 26) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044603,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}else if (selection == 27) {
if (cm.haveItem(4031612) == false){
cm.sendOk("�Բ�����û��������ᡣ");
}else{
cm.gainItem(4031612,-1);
cm.gainItem(2044703,1);
cm.sendOk("��ȡ�ɹ�,��ȥ�Ҽ�Ʒװ����");
cm.dispose(); }
}






} else if(typed==5070){
if (selection == 1) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372035,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 2) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372036,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 3) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372037,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 4) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372038,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 5) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372039,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 6) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372040,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 7) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372041,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 8) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1372042,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 9) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382045,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 10) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382046,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 11) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382047,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 12) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382048,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 13) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382049,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 14) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382050,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 15) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382051,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 16) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1382052,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 17) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1302081,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 18) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1312037,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 19) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1322060,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 20) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1322062,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 21) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1482023,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 22) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1412033,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }

} else if (selection == 23) {
if (cm.haveItem(4031072) == false){ 
cm.sendOk("#e��Ǹ��û��#v4031072#.�����Ҳ��ܰ�װ��������");
cm.dispose();
  }else{
cm.gainItem(4031072,-1);
cm.gainItem(1402046,1);
cm.sendOk("��ȡ�ɹ�");
cm.dispose(); }
}







} else if(typed==5060){
if (selection == 0) {
if (cm.getDonatorPoints() >= 20) {
cm.gainItem(4001129,1);
cm.gainDonatorPoints(-20);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 1) {
if (cm.getDonatorPoints() >= 400) {
cm.gainItem(1002140,1);
cm.gainDonatorPoints(-400);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 3) {
if (cm.getDonatorPoints() >= 5) {
cm.gainItem(2340000,1);
cm.gainDonatorPoints(-5);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 6) {
if (cm.getDonatorPoints() >= 30) {
cm.gainItem(1402040,1);
cm.gainDonatorPoints(-30);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 7) {
if (cm.getDonatorPoints() >= 30) {
cm.gainItem(1302024,1);
cm.gainDonatorPoints(-30);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 8) {
if (cm.getDonatorPoints() >= 10) {
cm.gainItem(1322003,1);
cm.gainDonatorPoints(-10);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 9) {
if (cm.getDonatorPoints() >= 20) {
cm.gainItem(1432009,1);
cm.gainDonatorPoints(-20);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 10) {
if (cm.getDonatorPoints() >= 50) {
cm.gainItem(1302080,1);
cm.gainDonatorPoints(-50);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 11) {
if (cm.getDonatorPoints() >= 30) {
cm.gainItem(1372017,1);
cm.gainDonatorPoints(-30);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 12) {
if (cm.getDonatorPoints() >= 50) {
cm.gainItem(1302107,1);
cm.gainDonatorPoints(-50);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 13) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1302049,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 14) {
if (cm.getDonatorPoints() >= 40) {
cm.gainItem(1402013,1);
cm.gainDonatorPoints(-40);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 15) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1092022,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 16) {
if (cm.getDonatorPoints() >= 40) {
cm.gainItem(1402014,1);
cm.gainDonatorPoints(-40);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 17) {
if (cm.getDonatorPoints() >= 40) {
cm.gainItem(1402044,1);
cm.gainDonatorPoints(-40);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 18) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1402037,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 19) {
if (cm.getDonatorPoints() >= 100) {
cm.gainItem(5000053,1);
cm.gainDonatorPoints(-100);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 20) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1322027,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 21) {
if (cm.getDonatorPoints() >= 10) {
cm.gainItem(1012014,1);
cm.gainDonatorPoints(-10);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 22) {
if (cm.getDonatorPoints() >= 32) {
cm.gainItem(1302034,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 23) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1302063,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 24) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1422011,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 25) {
if (cm.getDonatorPoints() >= 20) {
cm.gainItem(1442046,1);
cm.gainDonatorPoints(-20);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 26) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122014,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 27) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122006,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 28) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122001,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 29) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122002,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 30) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122003,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 31) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122004,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}else if (selection == 32) {
if (cm.getDonatorPoints() >= 35) {
cm.gainItem(1122005,1);
cm.gainDonatorPoints(-35);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("�������Ҳ���");
cm.dispose(); }
}





} else if(typed==5050){
switch(selection) {
case 500:
if (cm.haveItem(4001126,2000)) {
cm.gainItem(4001126,-2000);
cm.gainMeso(2000000000);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��2000��#v4001126#.");
cm.dispose(); }
break;
case 600:
if (cm.haveItem(4001126,200)) {
cm.gainItem(4001126,-200);
cm.gainMeso(200000000);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��200��#v4001126#.");
cm.dispose(); }
break;



case 1000:
if (cm.haveItem(4001126,200)) {
cm.gainItem(4001126,-200);
cm.gainItem(4000415,1);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��200��#v4001126#.");
cm.dispose(); }
break;
case 1001:
if (cm.haveItem(4001126,100)) {
cm.gainItem(4001126,-100);
cm.gainItem(4031470,1);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��100��#v4001126#.");
cm.dispose(); }
break;

case 1002:
if (cm.haveItem(4001126,100)) {
cm.gainItem(4001126,-100);
cm.gainItem(4031311,1);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��100��#v4001126#.");
cm.dispose(); }
break;

case 1003:
if (cm.haveItem(4001126,100)) {
cm.gainItem(4001126,-100);
cm.gainItem(4031312,1);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��100��#v4001126#.");
cm.dispose(); }
break;


case 3:
if (cm.haveItem(4001126,40)) {
cm.gainItem(4001126,-40);
cm.gainExp([200000000]);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��40��#v4001126#.");
cm.dispose(); }
break;
case 4:
if (cm.haveItem(4001126,20)) {
cm.gainItem(4001126,-20);
cm.gainExp([100000000]);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��20��#v4001126#.");
cm.dispose(); }
break;
case 5:
if (cm.haveItem(4001126,5000)) {
cm.gainItem(4001126,-5000);
cm.gainItem(4031325,1);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��5000��#v4001126#.");
cm.dispose(); }
break;
case 6:
if (cm.haveItem(4001126,2000)) {
cm.gainItem(4001126,-2000);
cm.gainItem(2040006,1);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��2000��#v4001126#.");
cm.dispose(); }
break;
case 7:
if (cm.haveItem(4001126,3000)) {
cm.gainItem(4001126,-3000);
cm.gainItem(1002551,1);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��3000��#v4001126#.");
cm.dispose(); }
break;
case 8:
if (cm.haveItem(4001126,3000)) {
cm.gainItem(4001126,-3000);
cm.gainItem(1082230,1);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��3000��#v4001126#.");
cm.dispose(); }
break;
case 9:
if (cm.haveItem(4001126,200)) {
cm.gainItem(4001126,-200);
cm.gainDonatorPoints(2);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��200��#v4001126#.");
cm.dispose(); }
break;
case 10:
if (cm.haveItem(4001126,100)) {
cm.gainItem(4001126,-100);
cm.gainDonatorPoints(1);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��100��#v4001126#.");
cm.dispose(); }
break;
case 11:
if (cm.haveItem(4001126,10000)) {
cm.gainItem(4001126,-10000);
cm.haveItem(4001120,1);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��10000��#v4001126#.");
cm.dispose(); }
break;
case 12:
if (cm.haveItem(4001126,3000)) {
cm.gainItem(4001126,-3000);
cm.haveItem(1402037,1);
cm.sendOk("�ɹ�.");
cm.dispose();
}else{
cm.sendOk("��û��3000��#v4001126#.");
cm.dispose(); }
}







} else if(typed==5040){
if (selection == 6) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1402040,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 7) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302024,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 8) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1322003,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 9) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1432009,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 10) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302080,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 11) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1372017,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 12) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302107,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 13) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302049,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 14) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1402013,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 15) {
if (cm.haveItem(4001007,3000)) {
cm.gainItem(1092022,1);
cm.gainItem(4001007,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 16) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1402014,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 17) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1402044,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 18) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1402037,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 20) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1322027,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 21) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1012014,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 22) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302034,1);
cm.gainItem(4001007,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 23) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1302063,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 24) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1422011,1);
cm.gainItem(4001007,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 25) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1442046,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 26) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122014,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 27) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122006,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 28) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122001,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 29) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122002,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 30) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122003,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 31) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122004,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}else if (selection == 32) {
if (cm.haveItem(4001126,3000)) {
cm.gainItem(1122005,1);
cm.gainItem(4001126,-3000);
cm.sendOk("��ȡ�ɹ�");
}else{
cm.sendOk("��û��3000��#v4001126#..");
cm.dispose(); }
}


 

} else if(typed==5030){
if (selection == 1) {
if (cm.getHour() < 19) {
cm.sendOk("�ʱ�仹û��Ŷ!��ʱ�䵽����������Ŷ!\r\n#r���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();
}else if (cm.getHour() > 20) {
cm.sendOk("�ʱ���Ѿ�����..��һ����ע��ʱ��Ŷ!\r\n#r���ڷ�����ʱ��Ϊ:" + cm.getHour() + "ʱ:" + cm.getMin() + "��:" + cm.getSec() + "��");
cm.dispose();
}else if (cm.haveItem(4000293)) {
cm.sendOk("��������Ѿ�Я����#v4000293#.���ӵ�����������,лл!~");
cm.dispose();
}else if (cm.haveItem(4000294)) {
cm.sendOk("��������Ѿ�Я����#v4000294#.���ӵ�����������,лл!~");
cm.dispose();
}else{
cm.warp(251010200,0);
cm.sendOk("����,���Ѿ������͵��˻��ͼ..!���Ͱ�!");
cm.dispose(); }
}else if (selection == 2) {
cm.dispose();
}





} else if(typed==4120){
typed=4121;
cm.sendGetText("�ð�,����Ҫ˵�Ļ�����������.");

} else if(typed==4110){

if (selection == 16) {
if (cm.getDonatorPoints() < 5) {
cm.sendOk("��û���㹻�������.����ϵGM����");
cm.dispose();
}else if (cm.getChar().getGender() == 0) {
cm.sendOk("����ʧ��,���Ѿ�������.");
}else{
cm.gainDonatorPoints(-5);
cm.getChar().setGender(0);
cm.sendOk("���Գɹ�,�ɹ�����������");
cm.dispose(); 
}

} else if (selection == 17) {
if (cm.getDonatorPoints() < 5) {
cm.sendOk("��û���㹻�������.����ϵ��GM����");
cm.dispose();
}else if (cm.getChar().getGender() == 1) {
cm.sendOk("����ʧ��,���Ѿ���Ů��.");
}else{
cm.gainDonatorPoints(-5);
cm.getChar().setGender(1);
cm.sendOk("���Գɹ�,�ɹ�������Ů��");
cm.dispose();
}
}


} else if(typed==4090){
cm.changeMusic(music[selection]);
cm.sendOk("�ɹ�����.");
cm.dispose();


} else if(typed==4080){
typed=4081;
cm.sendGetText("��������������");
message = cm.getText();



} else if(typed==4070){
if(selection==0){
typedd=5120008;
}else if(selection==1){
typedd=5120003;
}else if(selection==2){
typedd=5120005;
}else if(selection==3){
typedd=5120009;
}else if(selection==4){
typedd=5121009;
}
typed=4071;
cm.sendGetText("#r#r#e\r\n���������������T�������(ף��)��T��������������\r\n���ĵ�һ���ֿ�ʼ��!~~~\r\n#b���Ǳ���#r��������ʹ��#b,�����ͷ�һ��֮����,���ͺ�ȫ�����˶�����ף������ʽ��ʾ,�ȹ������͸���,��һ��?\r\n��������ߺ�,1�������1��..."); 


} else if(typed==4060){
if (cm.getDonatorPoints() < 5) {
cm.sendOk("�Բ�����û���㹻�������.");
cm.dispose();
}
else if (cm.getParty() == null) {
cm.sendOk("#e#r�����û��һ������,���ǲ��������ȥ��."); 
cm.dispose();
}
else if(cm.getParty().getMembers().size() > 1){
cm.sendOk("#e#r��ֻ�ܵ���ǰ��������ֻ����һ����."); 
cm.dispose(); 
}
else if (!cm.isLeader()) {
cm.sendOk("#e#r��ӳ�������̸��."); 
cm.dispose(); 
}else{
var em = cm.getEventManager("wgquestitemdrop");
if (em == null) {
cm.sendOk("������,����ϵGM.");
cm.dispose();
} else {
em.startInstance(cm.getParty(), cm.getChar().getMap());
}
cm.gainDonatorPoints(-5);
cm.serverNotice("[NPC][��������Ա]���:" + cm.c.getPlayer().getName() + " �ɹ������˲Ƹ����,��ʼ����Ʊ�! ~"); 
cm.serverNotice("[NPC][��������Ա]���:" + cm.c.getPlayer().getName() + " �ɹ������˲Ƹ����,��ʼ����Ʊ�! ~");
cm.dispose();
}

} else if(typed==4050){
if(cm.haveItem(4001126,200)==true){
cm.summonMob(9500167,1,1000,1);
if (chanceo>=1 && chanceo <=200){
cm.zaohuanjz(9500167,400000000,100000000,1,100000000);
}else{
cm.zaohuanjz(9500167,400000000,100000000,1,101000000);
}
cm.serverNotice("[NPC][��������Ա]�����:"+cm.getChar().getName()+"�ɹ��ٻ����Ͳƽ���,��ҿ�ȥ���Ҳ���������~~");
cm.serverNotice("[NPC][��������Ա]�����:"+cm.getChar().getName()+"�ɹ��ٻ����Ͳƽ���,��ҿ�ȥ���Ҳ���������~~");
cm.serverNotice("[NPC][��������Ա]�����:"+cm.getChar().getName()+"�ɹ��ٻ����Ͳƽ���,��ҿ�ȥ���Ҳ���������~~");
cm.sendOk("��ϲ,�ٻ��ɹ�.");
cm.gainItem(4001126,-200);
cm.dispose();
}else{
cm.sendOk("�Բ���,��û���㹻��Ҷ,�������ӿ�������:#v4001126#..");
cm.dispose();
}


} else if (test == 1) {
if (cm.getDonatorPoints() >= 5) {
cm.gainDonatorPoints(-5);
if ((itemchance >= 1) && (itemchance <= 20)) {
cm.gainItem(2000004, itemamount);
}
else if ((itemchance >= 21) && (itemchance <= 40)) {
cm.gainItem(2020012, itemamount);
}
else if ((itemchance >= 41) && (itemchance <= 50)) {
cm.gainItem(2000005, itemamount);
}
else if ((itemchance >= 51) && (itemchance <= 60)) {
cm.gainItem(2030007, itemamount);
}
else if ((itemchance >= 61) && (itemchance <= 70)) {
cm.gainItem(2022027, itemamount);
}
else if (itemchance == 71) {
cm.gainItem(2040001, 1);
}
else if (itemchance == 72) {
cm.gainItem(2041002, 1);
}
else if (itemchance == 73) {
cm.gainItem(2040805, 1);
}
else if (itemchance == 74) {
cm.gainItem(2040702, 1);
}
else if (itemchance == 75) {
cm.gainItem(2043802, 1);
}
else if (itemchance == 76) {
cm.gainItem(2040402, 1);
}
else if (itemchance == 77) {
cm.gainItem(1002139, 1);
}
else if (itemchance == 78) {
cm.gainItem(1302022, 1);
}
else if (itemchance == 79) {
cm.gainItem(1322021, 1);
}	
else if (itemchance == 80) {
cm.gainItem(1322026, 1);
}	
else if (itemchance == 81) {
cm.gainItem(1302026, 1);
}
else if (itemchance == 82) {
cm.gainItem(1442017, 1);
}
else if (itemchance == 83) {
cm.gainItem(1082147, 1);
}	
else if (itemchance == 84) {
cm.gainItem(1102043, 1);
}
else if (itemchance == 85) {
cm.gainItem(1442016, 1);
}
else if (itemchance == 86) {
cm.gainItem(1402012, 1);
}
else if (itemchance == 87) {
cm.gainItem(1302027, 1);
}	
else if (itemchance == 88) {
cm.gainItem(1322027, 1);
}
else if (itemchance == 89) {
cm.gainItem(1322025, 1);
}
else if (itemchance == 90) {
cm.gainItem(1312012, 1);
}
else if (itemchance == 91) {
cm.gainItem(1062000, 1);
}
else if (itemchance == 92) {
cm.gainItem(1332020, 1);
}
else if (itemchance == 93) {
cm.gainItem(1402037, 1);
}
else if (itemchance == 94) {
cm.gainItem(1372002, 1);
}
else if (itemchance == 95) {
cm.gainItem(1002033, 1);
}
else if (itemchance == 96) {
cm.gainItem(1092022, 1);
}
else if (itemchance == 97) {
cm.gainItem(1302021, 1);
}
else if (itemchance == 98) {
cm.gainItem(1102041, 1);
}
else if (itemchance == 99) {
cm.gainItem(1102042, 1);
}
else if (itemchance == 100) {
cm.gainItem(1322024, 1);
}
else if (itemchance == 101) {
cm.gainItem(1082148, 1);
}
else if (itemchance == 102) {
cm.gainItem(1002012, 1);
}
else if (itemchance == 103) {
cm.gainItem(1322012, 1);
}
else if (itemchance == 104) {
cm.gainItem(1322022, 1);
}
else if (itemchance == 105) {
cm.gainItem(1002020, 1);
}
else if (itemchance == 106) {
cm.gainItem(1302013, 1);
}
else if (itemchance == 107) {
cm.gainItem(1082146, 1);
}
else if (itemchance == 108) {
cm.gainItem(1442014, 1);
}
else if (itemchance == 109) {
cm.gainItem(1002096, 1);
}
else if (itemchance == 110) {
cm.gainItem(1302017, 1);
}
else if (itemchance == 111) {
cm.gainItem(1442012, 1);
}
else if (itemchance == 112) {
cm.gainItem(1322010, 1);
}
else if (itemchance == 113) {
cm.gainItem(1442011, 1);
}
else if (itemchance == 114) {
cm.gainItem(1442018, 1);
}
else if (itemchance == 115) {
cm.gainItem(1092011, 1);
}
else if (itemchance == 116) {
cm.gainItem(1092014, 1);
}
else if (itemchance == 117) {
cm.gainItem(1302003, 1);
}
else if (itemchance == 118) {
cm.gainItem(1432001, 1);
}
else if (itemchance == 119) {
cm.gainItem(1312011, 1);
}
else if (itemchance == 120) {
cm.gainItem(1002088, 1);
}
else if (itemchance == 121) {
cm.gainItem(1041020, 1);
}
else if (itemchance == 122) {
cm.gainItem(1322015, 1);
}
else if (itemchance == 123) {
cm.gainItem(1442004, 1);
}
else if (itemchance == 124) {
cm.gainItem(1422008, 1);
}
else if (itemchance == 125) {
cm.gainItem(3010009, 1);
}
else if (itemchance == 126) {
cm.gainItem(1432000, 1);
}
else if (itemchance == 127) {
cm.gainItem(1382001, 1);
}
else if (itemchance == 128) {
cm.gainItem(1041053, 1);
}
else if (itemchance == 129) {
cm.gainItem(1060014, 1);
}
else if (itemchance == 130) {
cm.gainItem(1050053, 1);
}
else if (itemchance == 131) {
cm.gainItem(1051032, 1);
}
else if (itemchance == 132) {
cm.gainItem(1050073, 1);
}
else if (itemchance == 133) {
cm.gainItem(1061036, 1);
}
else if (itemchance == 134) {
cm.gainItem(1002253, 1);
}
else if (itemchance == 135) {
cm.gainItem(1002034, 1);
}
else if (itemchance == 136) {
cm.gainItem(1051025, 1);
}
else if (itemchance == 137) {
cm.gainItem(1050067, 1);
}
else if (itemchance == 138) {
cm.gainItem(1051052, 1);
}
else if (itemchance == 139) {
cm.gainItem(1002072, 1);
}
else if (itemchance == 140) {
cm.gainItem(1002144, 1);
}
else if (itemchance == 141) { 
cm.gainItem(1051054, 1);
}
else if (itemchance == 142) { 
cm.gainItem(1050069, 1);
}
else if (itemchance == 143) { 
cm.gainItem(1372007, 1);
}
else if (itemchance == 144) { 
cm.gainItem(1050056, 1);
}
else if (itemchance == 145) { 
cm.gainItem(1050074, 1);
}
else if (itemchance == 146) { 
cm.gainItem(1002254, 1);
}
else if (itemchance == 147) {
cm.gainItem(1002274, 1);
}
else if (itemchance == 148) { 
cm.gainItem(1002218, 1);
}
else if (itemchance == 149) { 
cm.gainItem(1051055, 1);
}
else if (itemchance == 150) { 
cm.gainItem(1382010, 1);
}
else if (itemchance == 151) { 
cm.gainItem(1002246, 1);
}
else if (itemchance == 152) { 
cm.gainItem(1050039, 1);
}
else if (itemchance == 153) { 
cm.gainItem(1382007, 1);
}
else if (itemchance == 154) { 
cm.gainItem(1372000, 1);
}
else if (itemchance == 155) { 
cm.gainItem(1002013, 1);
}
else if (itemchance == 156) { 
cm.gainItem(1050072, 1);
}
else if (itemchance == 157) { 
cm.gainItem(1002036, 1);
}
else if (itemchance == 158) { 
cm.gainItem(1002243, 1);
}
else if (itemchance == 159) { 
cm.gainItem(1372008, 1);
}
else if (itemchance == 160) { 
cm.gainItem(1382008, 1);
}
else if (itemchance == 161) { 
cm.gainItem(1382011, 1);
}
else if (itemchance == 162) { 
cm.gainItem(1092021, 1);
}
else if (itemchance == 163) { 
cm.gainItem(1051034, 1);
}
else if (itemchance == 164) { 
cm.gainItem(1050047, 1);
}
else if (itemchance == 165) { 
cm.gainItem(1040019, 1);
}
else if (itemchance == 166) { 
cm.gainItem(1041031, 1);
}
else if (itemchance == 167) { 
cm.gainItem(1051033, 1);
}
else if (itemchance == 168) { 
cm.gainItem(1002153, 1);
}
else if (itemchance == 169) { 
cm.gainItem(1002252, 1);
}
else if (itemchance == 170) { 
cm.gainItem(1051024, 1);
}
else if (itemchance == 171) { 
cm.gainItem(1002153, 1);
}
else if (itemchance == 172) { 
cm.gainItem(1050068, 1);
}
else if (itemchance == 173) { 
cm.gainItem(1382003, 1);
}
else if (itemchance == 174) { 
cm.gainItem(1382006, 1);
}
else if (itemchance == 175) { 
cm.gainItem(1050055, 1);
}
else if (itemchance == 176) { 
cm.gainItem(1051031, 1);
}
else if (itemchance == 177) { 
cm.gainItem(1050025, 1);
}
else if (itemchance == 178) { 
cm.gainItem(1002155, 1);
}
else if (itemchance == 179) { 
cm.gainItem(1002245, 1);
}
else if (itemchance == 180) { 
cm.gainItem(13720013, 1);
}
else if (itemchance == 181) { 
cm.gainItem(1452004, 1);
}
else if (itemchance == 182) { 
cm.gainItem(1452023, 1);
}
else if (itemchance == 183) { 
cm.gainItem(1060057, 1);
}
else if (itemchance == 184) { 
cm.gainItem(1040071, 1);
}
else if (itemchance == 185) { 
cm.gainItem(1002137, 1);
}
else if (itemchance == 186) { 
cm.gainItem(1462009, 1);
}
else if (itemchance == 187) { 
cm.gainItem(1452017, 1);
}
else if (itemchance == 188) { 
cm.gainItem(1040025, 1);
}
else if (itemchance == 189) { 
cm.gainItem(1041027, 1);
}
else if (itemchance == 190) { 
cm.gainItem(1452005, 1);
}
else if (itemchance == 191) { 
cm.gainItem(1452007, 1);
}
else if (itemchance == 192) { 
cm.gainItem(1061057, 1);
}
else if (itemchance == 193) { 
cm.gainItem(1472006, 1);
}
else if (itemchance == 194) { 
cm.gainItem(1472019, 1);
}
else if (itemchance == 195) { 
cm.gainItem(1060084, 1);
}
else if (itemchance == 196) { 
cm.gainItem(1472028, 1);
}
else if (itemchance == 197) { 
cm.gainItem(1002179, 1);
}
else if (itemchance == 198) { 
cm.gainItem(1082074, 1);
}
else if (itemchance == 199) { 
cm.gainItem(1332015, 1);
}
else if (itemchance == 200) { 
cm.gainItem(1432001, 1);
}
else if (itemchance == 201) { 
cm.gainItem(1060071, 1);
}
else if (itemchance == 202) { 
cm.gainItem(1472007, 1);
}
else if (itemchance == 203) { 
cm.gainItem(1472002, 1);
}
else if (itemchance == 204) { 
cm.gainItem(1051009, 1);
}
else if (itemchance == 205) { 
cm.gainItem(1061037, 1);
}
else if (itemchance == 206) { 
cm.gainItem(1332016, 1);
}
else if (itemchance == 207) { 
cm.gainItem(1332034, 1);
}
else if (itemchance == 208) { 
cm.gainItem(1472020, 1);
}
else if ((itemchance >= 209) && (itemchance <= 215)) { 
cm.gainItem(3010025, 1);
}
else if ((itemchance >= 216) && (itemchance <= 221)) { 
cm.gainItem(1302107, 1);
}
else if ((itemchance >= 222) && (itemchance <= 228)) { 
cm.gainItem(2022176, 100);
}
else if ((itemchance >= 228) && (itemchance <= 240)) { 
cm.gainItem(1442047, 1);
}
else if (itemchance >= 228) { 
cm.gainItem(1002140, 1);
}
else if (itemchance >= 234) { 
cm.gainItem(4001120, 1);
cm.sendOk("����������,��Ȼ�鵽�˳���VIP�һ�ƾ��#v4001120#.");
cm.serverNotice("���齱���桻����ϲ"+ cm.getChar().getName() +" ���,�����ǵ��¹��ܳ齱�г鵽�˳���VIP�һ�ƾ��,���һ��ף������!");
}
else if (itemchance >= 260) { 
cm.gainItem(4001121, 1);
cm.sendOk("����������,��Ȼ�鵽�˸߼�VIP�һ�ƾ��#v4001121#.");
cm.serverNotice("���齱���桻����ϲ"+ cm.getChar().getName() +" ���,�����ǵ��¹��ܳ齱�г鵽�˸߼�VIP�һ�ƾ��,���һ��ף������!");
}
else if (itemchance >= 279) { 
cm.gainItem(4001122, 1);
cm.sendOk("����������,��Ȼ�鵽�˳���VIP�һ�ƾ��#v4001122#.");
cm.serverNotice("���齱���桻����ϲ"+ cm.getChar().getName() +" ���,�����ǵ��¹��ܳ齱�г鵽�˳���VIP�һ�ƾ��,���һ��ף������!");
                       }
else if (itemchance >= 287) { 
cm.gainItem(4001125, 1);
cm.sendOk("����������,��Ȼ�鵽������VIP�һ�ƾ��#v4001125#.");
cm.serverNotice("���齱���桻����ϲ"+ cm.getChar().getName() +" ���,�����ǵ��¹��ܳ齱�г鵽������VIP�һ�ƾ��,���һ��ף������!");
}
cm.dispose();
}else{
cm.sendOk("��û��5�������.");
cm.dispose();
}

} else if(typed==4040){
typed=4041;
var k = "������ע���ٽ����?���Ӯ�˵Ļ����Ի��˫��������,�������������!";
cm.sendGetText(k);

} else if(typed==4030){
if(cm.haveItem(4001126,200)==false){
cm.sendOk("�Բ���,��û���㹻�ķ�Ҷ��#v4001126#..");
cm.dispose();
}
else if (cm.getParty() == null) {
cm.sendOk("#e#r�����û��һ������,���ǲ��������ȥ��."); 
cm.dispose();
}
else if(!cm.isLeader()){
cm.sendOk("#e#r��ӳ�������̸��.");
cm.dispose();
}
else if (cm.getParty().getMembers().size() < 1){
cm.sendOk("�Բ��𣬴˴���ս����������1����Ա."); 
cm.dispose();
}else{
var em = cm.getEventManager("wgquestmj");
if (em == null) {
cm.sendOk("������,����ϵGM.");
cm.dispose();
}else{
em.startInstance(cm.getParty(), cm.getChar().getMap());
}
cm.gainItem(4001126,-200);
cm.serverNotice("[NPC][��ս����Ա]�����:" + cm.c.getPlayer().getName() + " Ϊ�׵�ǿ�ӿ�ʼ��ħ��֮��չ���˾���! ~"); 
cm.serverNotice("[NPC][��ս����Ա]�����:" + cm.c.getPlayer().getName() + " Ϊ�׵�ǿ�ӿ�ʼ��ħ��֮��չ���˾���! ~");
cm.dispose();
}



} else if(typed==4020){
if(cm.haveItem(4001126,10)==false) {
cm.sendOk("�Բ���,��û���㹻�ķ�Ҷ��#v4001126#..");
cm.dispose();
}
else if (cm.getParty() == null) {
cm.sendOk("#e#r�����û��һ������,���ǲ��������ȥ��."); 
cm.dispose();
}
else if(!cm.isLeader()){
cm.sendOk("#e#r��ӳ�������̸��."); 
cm.dispose();
}
else if (cm.getParty().getMembers().size() < 1){
cm.sendOk("�Բ����㵱ǰֻ����1����Ա��"); 
cm.dispose();
}else{
var em = cm.getEventManager("wgquestwdc");
if (em == null) {
cm.sendOk("�����Ƴ�.");
cm.dispose();
}else{
em.startInstance(cm.getParty(), cm.getChar().getMap());
}
cm.gainItem(4001126,-10);
cm.serverNotice("[NPC][���ֹ���Ա]���:" + cm.c.getPlayer().getName() + " ���ž���,������BOSS��ͼ��ʼ��սܽ����~"); 
cm.dispose();
}


} else if(typed==4010){
if(cm.getLevel() < 150 ) {
cm.sendOk("��ĵȼ�����150��,�����Ҳ��������ȥ!");
cm.dispose();
}
else if (cm.getPlayer().getParty() == null) { 
cm.sendOk("�����û��һ������,���ǲ��������ȥ��."); 
cm.dispose();
}
else if (!cm.isLeader()) { 
cm.sendSimple("���������սһ�����, ��ô�����ӳ�������̸"); 
cm.dispose();
}else{
var party = cm.getParty().getMembers();
var next = true; 
if (party.size() < 1){
cm.sendOk("��Ҫ1�����ϲſ�����ս.");
cm.dispose();
next = false;
}
if (next) { 
var em = cm.getEventManager("wgquest");
if (em == null) { 
cm.sendOk("�˸����Ѿ��ر�!"); 
} else {  
em.startInstance(cm.getParty(),cm.getChar().getMap()); 
party = cm.getChar().getEventInstance().getPlayers(); 
cm.removeFromParty(4001008, party); 
cm.removeFromParty(4001007, party);  
} 
cm.serverNotice("��������ս������."+ cm.getChar().getName() +" ��� Զ���ӵ�Ӣ���Ǵ������ǵĶ�Աȥ��ս�����,���Ƿ��ܴ�������?");
cm.dispose(); 
}
}



} else if(typed==3380){

if (selection == 43) {
if (cm.haveItem(4000415) >= 1){
cm.gainItem(4000415,-1);
cm.warp(910000018,0); 
}else{
cm.sendOk("#e#b��û��1��#v4000415#.�뵽#r������Ŀ��  d��Ҷ�һ����� #b�һ�");
cm.dispose(); 
}

} else if (selection == 44) {
if (cm.haveItem(4031470) >= 1){
cm.gainItem(4031470,-1);
cm.warp(910000015,0); 
}else{
cm.sendOk("#e#b��û��1��#v4031470#.�뵽#r������Ŀ��  d��Ҷ�һ����� #b�һ�");
cm.dispose(); 
}

} else if (selection == 45) {
if (cm.haveItem(4031312) >= 1){ 
cm.gainItem(4031312,-1);
cm.warp(910000016,0);
}else{
cm.sendOk("#e#b��û��#v4031312#.�뵽#r������Ŀ��  d��Ҷ�һ����� #b�һ��һ�");
cm.dispose();
}

} else if (selection == 46) {
if (cm.haveItem(4031311) >= 1){
cm.gainItem(4031311,-1);
cm.warp(910000017,0); 
}else{
cm.sendOk("#e#b��û��#v4031311#.�뵽#r������Ŀ��  d��Ҷ�һ����� #b�һ��һ�");
cm.dispose(); 
}

}


} else if(typed==3370){

if (selection == 33) {
cm.MapleMSzs();
cm.dispose();

} else if (selection == 34) {
cm.displayGuildRanks();
cm.dispose();  

} else if (selection == 35) {
cm.MapleMSmeso(); 
cm.dispose(); 

} else if (selection == 36) {
cm.MapleMSfame(); 
cm.dispose(); 

} else if (selection == 37) {
cm.MapleMSpvpkills();
cm.dispose();  

} else if (selection == 38) {
cm.MapleMSlvl(); 
cm.dispose();  

} else if (selection == 39) {
cm.MapleMSpvpdeaths();
cm.dispose();  
}



} else if(typed==3360){

if (selection == 19) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getStr();
if (totAp < 30004) {
p.setStr(4);
p.setRemainingAp (totAp - 4);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õ�.��������Ѿ�������!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk("�Բ�������ʣ��AP����30004��������.");
cm.dispose();
}

}else if (selection == 20) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getDex();
if (totAp < 30004) {
p.setDex(4);
p.setRemainingAp (totAp - 4);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õ�.��������Ѿ�������!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("�Բ�������ʣ��AP����30004��������.");
cm.dispose();
}

}else if (selection == 21) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getInt();
if (totAp < 30004) {
p.setInt(4);
p.setRemainingAp (totAp - 4);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õģ���������Ѿ�����!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("�Բ�������ʣ��AP����30004��������.");
cm.dispose();
}

}else if (selection == 22) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var totAp = p.getRemainingAp() + p.getLuk();
if (totAp < 30004) {
p.setLuk(4);
p.setRemainingAp (totAp - 4);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õģ���������Ѿ�����!");
cm.dispose();
} else if (totAp  >= 30004) {
cm.sendOk ("�Բ�������ʣ��AP����30004��������.");
cm.dispose();
}

}else if (selection == 23) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newStr = p.getRemainingAp() + p.getStr();
if (newStr < 30000) {
p.setStr(newStr);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õģ���������Ѿ�����!");
cm.dispose();
} else if (newStr >= 30000) {
p.setStr(29999);
p.setRemainingAp (newStr - 29999);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õģ���������Ѿ�����!");
cm.dispose();
}

}else if (selection == 24) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newDex = p.getRemainingAp() + p.getDex();
if (newDex < 30000) {
p.setDex(newDex);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õģ���������Ѿ�����!");
cm.dispose();
} else if (newDex >= 30000) {
p.setDex(29999);
p.setRemainingAp (newDex - 29999);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õģ���������Ѿ�����!");
cm.dispose();
}

}else if (selection == 25) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newInt = p.getRemainingAp() + p.getInt();
if (newInt < 30000) {
p.setInt(newInt);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õģ���������Ѿ�����!");
cm.dispose();
} else if (newInt >= 30000) {
p.setInt(29999);
p.setRemainingAp (newInt - 29999);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õģ���������Ѿ�����!");
cm.dispose();
}

}else if (selection == 26) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newLuk = p.getRemainingAp() + p.getLuk();
if (newLuk < 30000) {
p.setLuk(newLuk);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õģ���������Ѿ�����!");
cm.dispose();
} else if (newLuk >= 30000) {
p.setLuk(29999);
p.setRemainingAp (newLuk - 29999);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�õģ���������Ѿ�����!");
cm.dispose();
}
}



} else if(typed==3350){

if(cm.getChar().getReborns()>=5){

cm.clearSkills(); 
cm.teachSkill(8,1,1);//Multipet skill 
cm.teachSkill(1003,1,1); 
cm.teachSkill(9001000,1,1); //Start of max-level "1" skills 
cm.teachSkill(9001001,1,1); 
cm.teachSkill(1006,1,1); 
cm.teachSkill(1004,1,1); 
cm.teachSkill(9001002,1,1); 
cm.teachSkill(9101000,1,1); 
cm.teachSkill(9101001,1,1); 
cm.teachSkill(9101002,1,1); 
cm.teachSkill(9101003,1,1); 
cm.teachSkill(9101004,1,1); 
cm.teachSkill(9101005,1,1); 
cm.teachSkill(9101006,1,1); 
cm.teachSkill(9101007,1,1); 
cm.teachSkill(9101008,1,1); 
cm.teachSkill(1121011,1,1); 
cm.teachSkill(1221012,1,1); 
cm.teachSkill(1321010,1,1); 
cm.teachSkill(2121008,1,1); 
cm.teachSkill(2221008,1,1); 
cm.teachSkill(2321009,1,1); 
cm.teachSkill(3121009,1,1); 
cm.teachSkill(3221008,1,1); 
cm.teachSkill(4121009,1,1); 
cm.teachSkill(4221008,1,1); //End of max-level "1" skills 
cm.teachSkill(1000002,8,8); //Start of max-level "8" skills 
cm.teachSkill(3000002,8,8); 
cm.teachSkill(4000001,8,8); //End of max-level "8" skills 
cm.teachSkill(1000001,10,10); //Start of max-level "10" skills 
cm.teachSkill(2000001,10,10); //End of max-level "10" skills 
cm.teachSkill(1000000,16,16); //Start of max-level "16" skills 
cm.teachSkill(2000000,16,16); 
cm.teachSkill(3000000,16,16); //End of max-level "16" skills 
cm.teachSkill(1001003,20,20); //Start of max-level "20" skills 
cm.teachSkill(1001004,20,20); 
cm.teachSkill(1001005,20,20); 
cm.teachSkill(2001002,20,20); 
cm.teachSkill(2001003,20,20); 
cm.teachSkill(2001004,20,20); 
cm.teachSkill(2001005,20,20); 
cm.teachSkill(3000001,20,20); 
cm.teachSkill(3001003,20,20); 
cm.teachSkill(3001004,20,20); 
cm.teachSkill(3001005,20,20); 
cm.teachSkill(4000000,20,20); 
cm.teachSkill(4001344,20,20); 
cm.teachSkill(4001334,20,20); 
cm.teachSkill(4001002,20,20); 
cm.teachSkill(4001003,20,20); 
cm.teachSkill(1101005,20,20); 
cm.teachSkill(1100001,20,20); //Start of mastery's 
cm.teachSkill(1100000,20,20); 
cm.teachSkill(1200001,20,20); 
cm.teachSkill(1200000,20,20); 
cm.teachSkill(1300000,20,20); 
cm.teachSkill(1300001,20,20); 
cm.teachSkill(3100000,20,20); 
cm.teachSkill(3200000,20,20); 
cm.teachSkill(4100000,20,20); 
cm.teachSkill(4200000,20,20); //End of mastery's 
cm.teachSkill(4201002,20,20); 
cm.teachSkill(4101003,20,20); 
cm.teachSkill(3201002,20,20); 
cm.teachSkill(3101002,20,20); 
cm.teachSkill(1301004,20,20); 
cm.teachSkill(1301005,20,20); 
cm.teachSkill(1201004,20,20); 
cm.teachSkill(1201005,20,20); 
cm.teachSkill(1101004,20,20); //End of boosters 
cm.teachSkill(1101006,20,20); 
cm.teachSkill(1201006,20,20); 
cm.teachSkill(1301006,20,20); 
cm.teachSkill(2101001,20,20); 
cm.teachSkill(2100000,20,20); 
cm.teachSkill(2101003,20,20); 
cm.teachSkill(2101002,20,20); 
cm.teachSkill(2201001,20,20); 
cm.teachSkill(2200000,20,20); 
cm.teachSkill(2201003,20,20); 
cm.teachSkill(2201002,20,20); 
cm.teachSkill(2301004,20,20); 
cm.teachSkill(2301003,20,20); 
cm.teachSkill(2300000,20,20); 
cm.teachSkill(2301001,20,20); 
cm.teachSkill(3101003,20,20); 
cm.teachSkill(3101004,20,20); 
cm.teachSkill(3201003,20,20); 
cm.teachSkill(3201004,20,20); 
cm.teachSkill(4100002,20,20); 
cm.teachSkill(4101004,20,20); 
cm.teachSkill(4200001,20,20); 
cm.teachSkill(4201003,20,20); //End of second-job skills and first-job 
cm.teachSkill(4211005,20,20); 
cm.teachSkill(4211003,20,20); 
cm.teachSkill(4210000,20,20); 
cm.teachSkill(4110000,20,20); 
cm.teachSkill(4111001,20,20); 
cm.teachSkill(4111003,20,20); 
cm.teachSkill(3210000,20,20); 
cm.teachSkill(3110000,20,20); 
cm.teachSkill(3210001,20,20); 
cm.teachSkill(3110001,20,20); 
cm.teachSkill(3211002,20,20); 
cm.teachSkill(3111002,20,20); 
cm.teachSkill(2210000,20,20); 
cm.teachSkill(2211004,20,20); 
cm.teachSkill(2211005,20,20); 
cm.teachSkill(2111005,20,20); 
cm.teachSkill(2111004,20,20); 
cm.teachSkill(2110000,20,20); 
cm.teachSkill(2311001,20,20); 
cm.teachSkill(2311005,30,30); 
cm.teachSkill(3100001,30,30);//Final Attack : Bow 
cm.teachSkill(3200001,30,30);//Final Attack : XBow 
cm.teachSkill(4120002,30,30);//Shadow Shifter 
cm.teachSkill(4220002,30,30);//Shadow Shifter 
cm.teachSkill(2310000,20,20); 
cm.teachSkill(1311007,20,20); 
cm.teachSkill(1310000,20,20); 
cm.teachSkill(1311008,20,20); 
cm.teachSkill(1210001,20,20); 
cm.teachSkill(1211009,20,20); 
cm.teachSkill(1210000,20,20); 
cm.teachSkill(1110001,20,20); 
cm.teachSkill(1111007,20,20); 
cm.teachSkill(1110000,20,20); //End of 3rd job skills 
cm.teachSkill(1121000,20,20); 
cm.teachSkill(1221000,20,20); 
cm.teachSkill(1321000,20,20); 
cm.teachSkill(2121000,20,20); 
cm.teachSkill(2221000,20,20); 
cm.teachSkill(2321000,20,20); 
cm.teachSkill(3121000,20,20); 
cm.teachSkill(3221000,20,20); 
cm.teachSkill(4121000,20,20); 
cm.teachSkill(4221000,20,20); //End of Maple Warrior // Also end of max-level "20" skills 
cm.teachSkill(1321007,10,10); 
cm.teachSkill(1320009,25,25); 
cm.teachSkill(1320008,25,25); 
cm.teachSkill(2321006,10,10); 
cm.teachSkill(1220010,10,10); 
cm.teachSkill(1221004,19,19); 
cm.teachSkill(1221003,19,19); 
cm.teachSkill(1100003,30,30); 
cm.teachSkill(1100002,30,30); 
cm.teachSkill(1101007,30,30); 
cm.teachSkill(1200003,30,30); 
cm.teachSkill(1200002,30,30); 
cm.teachSkill(1201007,30,30); 
cm.teachSkill(1300003,30,30); 
cm.teachSkill(1300002,30,30); 
cm.teachSkill(1301007,30,30); 
cm.teachSkill(2101004,30,30); 
cm.teachSkill(2101005,30,30); 
cm.teachSkill(2201004,30,30); 
cm.teachSkill(2201005,30,30); 
cm.teachSkill(2301002,30,30); 
cm.teachSkill(2301005,30,30); 
cm.teachSkill(3101005,30,30); 
cm.teachSkill(3201005,30,30); 
cm.teachSkill(4100001,30,30); 
cm.teachSkill(4101005,30,30); 
cm.teachSkill(4201005,30,30); 
cm.teachSkill(4201004,30,30); 
cm.teachSkill(1111006,30,30); 
cm.teachSkill(1111005,30,30); 
cm.teachSkill(1111002,30,30); 
cm.teachSkill(1111004,30,30); 
cm.teachSkill(1111003,30,30); 
cm.teachSkill(1111008,30,30); 
cm.teachSkill(1211006,30,30); 
cm.teachSkill(1211002,30,30); 
cm.teachSkill(1211004,30,30); 
cm.teachSkill(1211003,30,30); 
cm.teachSkill(1211005,30,30); 
cm.teachSkill(1211008,30,30); 
cm.teachSkill(1211007,30,30); 
cm.teachSkill(1311004,30,30); 
cm.teachSkill(1311003,30,30); 
cm.teachSkill(1311006,30,30); 
cm.teachSkill(1311002,30,30); 
cm.teachSkill(1311005,30,30); 
cm.teachSkill(1311001,30,30); 
cm.teachSkill(2110001,30,30); 
cm.teachSkill(2111006,30,30); 
cm.teachSkill(2111002,30,30); 
cm.teachSkill(2111003,30,30); 
cm.teachSkill(2210001,30,30); 
cm.teachSkill(2211006,30,30); 
cm.teachSkill(2211002,30,30); 
cm.teachSkill(2211003,30,30); 
cm.teachSkill(2311003,30,30); 
cm.teachSkill(2311002,30,30); 
cm.teachSkill(2311004,30,30); 
cm.teachSkill(2311006,30,30); 
cm.teachSkill(3111004,30,30); 
cm.teachSkill(3111003,30,30); 
cm.teachSkill(3111005,30,30); 
cm.teachSkill(3111006,30,30); 
cm.teachSkill(3211004,30,30); 
cm.teachSkill(3211003,30,30); 
cm.teachSkill(3211005,30,30); 
cm.teachSkill(3211006,30,30); 
cm.teachSkill(4111005,30,30); 
cm.teachSkill(4111006,20,20); 
cm.teachSkill(4111004,30,30); 
cm.teachSkill(4111002,30,30); 
cm.teachSkill(4211002,30,30); 
cm.teachSkill(4211004,30,30); 
cm.teachSkill(4211001,30,30); 
cm.teachSkill(4211006,30,30); 
cm.teachSkill(1120004,30,30); 
cm.teachSkill(1120003,30,30); 
cm.teachSkill(1121008,30,30); 
cm.teachSkill(1121010,30,30); 
cm.teachSkill(1121006,30,30); 
cm.teachSkill(1121002,30,30); 
cm.teachSkill(1220005,30,30); 
cm.teachSkill(1221009,30,30); 
cm.teachSkill(1221007,30,30); 
cm.teachSkill(1221011,30,30); 
cm.teachSkill(1221002,30,30); 
cm.teachSkill(1320005,30,30); 
cm.teachSkill(1320006,30,30); 
cm.teachSkill(1321003,30,30); 
cm.teachSkill(1321002,30,30); 
cm.teachSkill(2121005,30,30); 
cm.teachSkill(2121003,30,30); 
cm.teachSkill(2121004,30,30); 
cm.teachSkill(2121002,30,30); 
cm.teachSkill(2121007,30,30); 
cm.teachSkill(2121006,30,30); 
cm.teachSkill(2221007,30,30); 
cm.teachSkill(2221006,30,30); 
cm.teachSkill(2221003,30,30); 
cm.teachSkill(2221005,30,30); 
cm.teachSkill(2221004,30,30); 
cm.teachSkill(2221002,30,30); 
cm.teachSkill(2321007,30,30); 
cm.teachSkill(2321003,30,30); 
cm.teachSkill(2321008,30,30); 
cm.teachSkill(2321005,30,30); 
cm.teachSkill(2321004,30,30); 
cm.teachSkill(2321002,30,30); 
cm.teachSkill(3120005,30,30); 
cm.teachSkill(3121008,30,30); 
cm.teachSkill(3121003,30,30); 
cm.teachSkill(3121007,30,30); 
cm.teachSkill(3121006,30,30); 
cm.teachSkill(3121002,30,30); 
cm.teachSkill(3121004,30,30); 
cm.teachSkill(3221006,30,30); 
cm.teachSkill(3220004,30,30); 
cm.teachSkill(3221003,30,30); 
cm.teachSkill(3221007,30,30);//snipe 
cm.teachSkill(3221005,30,30); 
cm.teachSkill(3221001,30,30); 
cm.teachSkill(3221002,30,30); 
cm.teachSkill(4121004,30,30); 
cm.teachSkill(4121008,30,30); 
cm.teachSkill(4121003,30,30); 
cm.teachSkill(4121006,30,30); 
cm.teachSkill(4121007,30,30); 
cm.teachSkill(4120005,30,30); 
cm.teachSkill(4221001,30,30); 
cm.teachSkill(4221007,30,30); 
cm.teachSkill(4221004,30,30); 
cm.teachSkill(4221003,30,30); 
cm.teachSkill(4221006,30,30); 
cm.teachSkill(4220005,30,30); 
cm.teachSkill(1221001,30,30); 
cm.teachSkill(1121001,30,30); 
cm.teachSkill(1321001,30,30); 
cm.teachSkill(2121001,30,30); 
cm.teachSkill(2221001,30,30); 
cm.teachSkill(2321001,30,30); 
cm.teachSkill(5000000,20,20); // Started PIRATE Job Skills for v62 // Started 1st Job PIRATE Skills 
cm.teachSkill(5001001,20,20); 
cm.teachSkill(5001002,20,20); 
cm.teachSkill(5001003,20,20); 
cm.teachSkill(5001005,10,10); // Ended 1st Job PIRATE Skills 
cm.teachSkill(5100000,10,10); // Started BRAWLER Skills 
cm.teachSkill(5100001,20,20); 
cm.teachSkill(5101002,20,20); 
cm.teachSkill(5101003,20,20); 
cm.teachSkill(5101004,20,20); 
cm.teachSkill(5101005,10,10); 
cm.teachSkill(5101006,20,20); 
cm.teachSkill(5101007,10,10); // Ended BRAWLER Skills 
cm.teachSkill(5200000,20,20); // Started GUNSLINGER Skills 
cm.teachSkill(5201001,20,20); 
cm.teachSkill(5201002,20,20); 
cm.teachSkill(5201003,20,20); 
cm.teachSkill(5201004,20,20); 
cm.teachSkill(5201005,10,10); 
cm.teachSkill(5201006,20,20); // Ended GUNSLINGER Skills 
cm.teachSkill(5110000,20,20); // Started MARAUDER Skills 
cm.teachSkill(5110001,40,40); 
cm.teachSkill(5111002,30,30); 
cm.teachSkill(5111004,20,20); 
cm.teachSkill(5111005,20,20); 
cm.teachSkill(5111006,30,30); // Ended MARAUDER Skills 
cm.teachSkill(5210000,20,20); // Started OUTLAW Skills 
cm.teachSkill(5211001,30,30); 
cm.teachSkill(5211002,30,30); 
cm.teachSkill(5211004,30,30); 
cm.teachSkill(5211005,30,30); 
cm.teachSkill(5211006,30,30); // Ended OUTLAW Skills 
cm.teachSkill(5121000,20,20); // Started BUCCANEER Skills 
cm.teachSkill(5121001,30,30); 
cm.teachSkill(5121002,30,30); 
cm.teachSkill(5121003,20,20); 
cm.teachSkill(5121004,30,30); 
cm.teachSkill(5121005,30,30); 
cm.teachSkill(5121007,30,30); 
cm.teachSkill(5121008,1,1); 
cm.teachSkill(5121009,20,20); 
cm.teachSkill(5121010,30,30); // Ended BUCCANEER Skills 
cm.teachSkill(5221000,20,20); // Started CORSAIR Skills 
cm.teachSkill(5220001,30,30); 
cm.teachSkill(5220002,20,20); 
cm.teachSkill(5221003,30,30); 
cm.teachSkill(5221004,30,30); 
cm.teachSkill(5221006,10,10); 
cm.teachSkill(5221007,30,30); 
cm.teachSkill(5221008,30,30); 
cm.teachSkill(5221009,20,20); 
cm.teachSkill(5221010,1,1); 
cm.teachSkill(5220011,20,20);
cm.getPlayer().maxAllSkills();
cm.sendOk("�ɹ��ˣ��Ժ���������תְ�����õ��ļӼ��ܡ�");

}else{
cm.sendOk("�Բ����������ת��������û�� #r5 #k�����ϡ�");

cm.dispose();
}




} else if(typed==3340){
typed=3341;
var a = "��ѡ������Ҫ�Ĺ���.#b"; 
                    for (var i=0; i < t.length; i++) { 
                    a += "\r\n#L" + i + "#" + t[ i ]+""; 
                    } 
                  cm.sendSimple(a); 



} else if(typed==3334){
typed=3335;
if (cm.getLevel() < 255 && cm.getJob().equals(net.sf.odinms.client.MapleJob.BEGINNER)) {
                if (cm.getLevel() < 8) {
                    cm.sendNext("#d�Բ���,������Ҫ�ﵽ #r[8��#k] #d�Ҳ���Ϊ�����!");
                    status = 98;
                } else if (cm.getLevel() < 10) {
                    cm.sendYesNo("#d������Ҫ����ħ��ʦ�ľ�����ȥ��ӡħ��������,#r����Ա#k #d������ħ���Կ�,����Ӧ�þ���Ϲ�ȥ֧Ԯ��,�������������ְҵ��ǰ��������������ħ���ľ���,����һ�����ĵ�·,��ô�����Ϊ #rħ��ʦ#k #dô?");
                    status = 150;
                    
                } else {
                    cm.sendNext("#dף����ﵽ�� #r[10��]#k . #d��ô����ѡ��� #r[��һְҵ]#k #d��?");
                    status = 153;
                }
            } else if (cm.getLevel() < 30) {
                cm.sendNext("#d�Բ���,�����ﵽ #r[30��]#k #d���ܽ��� #r[�ڶ���תְ]#k #d!");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
                cm.sendSimple("#dף����ﵽ�� #r[30��]#k ,#d����תְΪ:\r\n#L0##r�̿�#l\r\n#L1##r����#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
                cm.sendSimple("#dף����ﵽ�� #r[30��]#k ,#d����תְΪ:\r\n#L2##r����#l\r\n#L3##r׼��ʿ#l\r\n#L4##rǹսʿ#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
                cm.sendSimple("#dף����ﵽ�� #r[30��]#k ,#d����תְΪ:\r\n#L5##r���׷�ʦ#l\r\n#L6##r�𶾷�ʦ#l\r\n#L7##r��ʦ#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
                cm.sendSimple("#dף����ﵽ�� #r[30��]#k ,#d����תְΪ:\r\n#L8##r����#l\r\n#L9##r����#l#k");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {
                cm.sendSimple("#dף����ﵽ�� #r[30��]#k ,#d����תְΪ:\r\n#L10##rȭ��#l\r\n#L11##r��ǹ��#l");

            } else if (cm.getLevel() < 70) {
                cm.sendNext("#d�Բ���,�����ﵽ #r[70��]#k #d���ܽ��� #r[������תְ]#k #d!");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                status = 93;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                status = 96;
                cm.sendYesNo("#dף����ﵽ�� #r[70��]#k ,#d�����ھ�Ҫ��� #r[������תְ]#k #dô?");
            } else if (cm.getLevel() < 120) {
                cm.sendNext("#d�Բ���,�����ﵽ #r[120��]#k #d���ܽ��� #r[���Ĵ�תְ]#k #d!");
                status = 98;
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
                status = 135;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
                status = 138;
                cm.sendYesNo("#dף����ﵽ�� #r[120��]#k ,#d�����ھ�Ҫ��� #r[���Ĵ�תְ]#k #dô?");
            } else if (cm.getLevel() < 255) {
                cm.sendNext("#d�Բ���,���Ѿ���������е�תְ!\r\n#d��������� #r[ת��]#k ,#d�������Ҫת��������ѡ��ת������!");
                status = 98;
            } else if (cm.getLevel() >= 200) {
                cm.sendOk("#d����... ΰ��� #r[#h #]#k #d,���Ѿ�ͨ��һ��������������ս�ĵ�·,���ڳ�Ϊ�˷�����ӿ������.����������������,�� #r[����Ա]#k #d��ӡ��ħ������������,���Ĳ��������ܼ�,����Ҫ�����ĸ���ǿ������������еľ���!"); 
                cm.dispose();
            } else {
                cm.dispose();
            }







}else if(typed==82){
if (selection==0){
if(cm.getDonatorPoints()>=wenduji){
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.gainDonatorPoints(-wenduji);
cm.gainItem(1402014,1);
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][����ҹ�����Ա]����ϲ~���:"+cm.getChar().getName()+"��������ҹ�����ϡ���䱦��������ȥ������~~");
cm.dispose();
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==1){
if(cm.getDonatorPoints()>=nanguadeng){
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.gainDonatorPoints(-nanguadeng);
cm.gainItem(1402044,1);
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][����ҹ�����Ա]����ϲ~���:"+cm.getChar().getName()+"��������ҹ�����ϡ���䱦��������ȥ������~~");
cm.dispose();
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==2){
if(cm.getDonatorPoints()>=bingdao){
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.gainDonatorPoints(-bingdao);
cm.gainItem(1302106,1);
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][����ҹ�����Ա]����ϲ~���:"+cm.getChar().getName()+"��������ҹ�����ϡ���䱦��������ȥ������~~");
cm.dispose();
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==3){
if(cm.getDonatorPoints()>=huodao){
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.gainDonatorPoints(-huodao);
cm.gainItem(1302063,1);
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][����ҹ�����Ա]����ϲ~���:"+cm.getChar().getName()+"��������ҹ�����ϡ���䱦��������ȥ������~~");
cm.dispose();
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==4){
if(cm.getDonatorPoints()>=langya){
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.gainDonatorPoints(-langya);
cm.gainItem(1402029,1);
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][����ҹ�����Ա]����ϲ~���:"+cm.getChar().getName()+"��������ҹ�����ϡ���䱦��������ȥ������~~");
cm.dispose();
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}

}else if(typed==180){
if (selection == 0) { 
 playerchoice = "rock"; 
} else if (selection == 1) { 
playerchoice = "paper"; 
} else if (selection == 2) { 
playerchoice = "scissor"; 
} 
var random = Math.floor(Math.random()*4); 
if (random <= 1) { 
compchoice = "rock"; 
} else if (random <= 2) { 
compchoice = "paper"; 
} else if (random <= 4) { 
compchoice = "scissor"; 
} 
typed=181;
cm.sendNext("��εĽ����...");

}else if(typed==171){
if (selection == 0)
{
cm.getPlayer().setDropmeso(0);
cm.sendOk("�رմ�ֵõ���Ǯ�Զ����뱳���ɹ���");
cm.dispose();
}
else if (selection == 1)
{
cm.getPlayer().setDropmeso(1);
cm.sendOk("������ֵõ���Ǯ�Զ����뱳���ɹ���");
cm.dispose();
}
}else if(typed==168){
if (selection == 1) 
{
cm.sendGetText("#r����������أ����İ��Ĵ�����ң����������ľ����\r\n#b��λ����Ԫ");
typed=169;
}
else if (selection == 2) {
cm.MapleMSjk();
cm.dispose();
}
}else if(typed==167){
if (selection == 1)
{
if (cm.haveItem(4001110))
{
cm.gainItem(4002000,-1);
cm.getPlayer().setPvpKills(0);
cm.sendOk("���ɱ��ս���ɹ���");
cm.dispose();
}
else
{
cm.sendOk("�Բ�����û������Ҫ�Ķ������Ҳ��ܰ��㡣");
cm.dispose();
}
}
else if (selection == 2) 
{
if (cm.haveItem(4001110))
{
cm.gainItem(4002000,-1);
cm.getPlayer().setPvpDeaths(0);
cm.sendOk("�����ɱս���ɹ���");
cm.dispose();
}
else
{
cm.sendOk("�Բ�����û������Ҫ�Ķ������Ҳ��ܰ��㡣");
cm.dispose();
}
}
}else if(typed==73){
typed=74;
cm.sendSimple("��ѡ����Ҫ�����Ľ�ָ���ͣ�\r\n#b#L0#��Ҷֿ�ѽ�ָ#l\r\n#L1#����ֿ�ѽ�ָ#l\r\n#L2#����ֿ�ѽ�ָ#l");
}else if(typed==26){
if (selection == 0) { 
if (cm.haveItem(4031456,1)==true) {
cm.sendOk("��Ǹ��û��1����Ҷ��,�����޷��һ�ת�������."); 
cm.dispose();
}else{
cm.gainItem(4031456,-1);
cm.gainItem(4001129,1);
cm.sendOk(",��ϲ�һ��ɹ���.");
cm.dispose();
}
}else if (selection == 1) {
if (cm.haveItem(4001126,100)==true) {
cm.sendOk("��ϲ��ϲ����ȡ�ɹ���"); 
cm.gainItem(4001126,-100);
cm.gainItem(4001129,1);
cm.dispose();
}else{

cm.sendOK("�Բ�����û���㹻�� #r��Ҷ #b,����Ʒ��������#v4001126#.");
cm.dispose();
}
}else if (selection == 2) {	
cm.warp(211040800,0);
cm.dispose();
}



}else if(typed==100000){
typed=100001;
if (selection == 0) {
cm.setClan(0);
cm.sendOk("��ϲ,���Ѿ��ɹ�����κ��!");
cm.dispose();

} else if (selection == 1) {
cm.setClan(1);
cm.sendOk("��ϲ,���Ѿ��ɹ��������!");
cm.dispose();

} else if (selection == 2) {
cm.MapleMSlvl();
cm.dispose();

} else if (selection == 3) {
cm.MapleMSmeso(); 
cm.dispose();

} else if (selection == 4) {
cm.MapleMSpvpkills();
cm.dispose();

} else if (selection == 5) {
cm.MapleMSpvpdeaths();
cm.dispose();

} else if (selection == 6) {
text = "\t\t\t\t\t\t\t\t#bκ��[Blue Selection]#k\r\n";
text += "========������������˽�κ��[Blue]�ĸ������========#b\r\n";
text += "#L0#��ѯκ������� #e����#n ����#l\r\n";
text += "#L1#��ѯκ������� #eȫ��#n ����#l\r\n";
text += "#L2#��ѯκ������� #eȫ��#n ���#l\r\n\r\n";
text += "#k#L3#��һҳ.#l  #L4#�뿪.#l";
cm.sendSimple(text);

} else if (selection == 7) {
text = "\t\t\t\t\t\t\t\t#r���[Red Selection]#k\r\n";
text += "========������������˽����[Red]�ĸ������========#r\r\n";
text += "#L5#��ѯ�������� #e����#n ����#l\r\n";
text += "#L6#��ѯ�������� #eȫ��#n ����#l\r\n";
text += "#L7#��ѯ�������� #eȫ��#n ���#l\r\n\r\n";
text += "#k#L8#��һҳ.#l  #L9#�뿪.#l";
cm.sendSimple(text);
}



}else if(typed==5){
selectedroom = selection; 
var pvproom2 = new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14); 
if (cm.getCharQuantity(map+pvproom2[selectedroom]) == 0) { 
cm.warp(map+pvproom2[selection]); 
cm.Charnotice(1, "�ɹ�����һ�����䡣"); 
cm.dispose(); 
} else if (cm.getCharQuantity(map+pvproom2[selectedroom]) == 2) { 
cm.sendOk("����"+pvproom2[selectedroom]+"��׼����ϣ�"); 
cm.dispose(); 
} else { 
cm.warp(map+pvproom2[selectedroom]); 
cm.dispose(); 
}




}else if(typed==111){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
if(cm.getDonatorPoints()>=shengjics){
if(chance3==2 || chance3==5 || chance3==7 || chance3==9){
cm.sendOk("�Բ��𣬺�����,����ʧ��!..");
cm.gainDonatorPoints(-shengjics);
cm.dispose();
}else{
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-shengjics);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[��������Ա]���ղ����:"+cm.getChar().getName()+"�ɹ���������ҽ�װ����������~");
cm.dispose();
}
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if(typed==81){
if (selection==0){
if(cm.getDonatorPoints()>=taocan100){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setMatk((item.getMatk() + 100));
item.setWatk((item.getWatk() + 100));
item.setLevel((item.getLevel() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-40);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[��������Ա]���ղ����:"+cm.getChar().getName()+"�ɹ���������ҽ�װ����������~");
cm.dispose();
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==1){
if(cm.getDonatorPoints()>=taocan200){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setMatk((item.getMatk() + 200));
item.setWatk((item.getWatk() + 200));
item.setLevel((item.getLevel() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-taocan200);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[��������Ա]���ղ����:"+cm.getChar().getName()+"�ɹ���������ҽ�װ����������~");
cm.dispose();
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==110){
cm.dispose();
}else if (selection==2){
if(cm.getDonatorPoints()>=taocan300){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setMatk((item.getMatk() + 300));
item.setWatk((item.getWatk() + 300));
item.setLevel((item.getLevel() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-taocan300);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[��������Ա]���ղ����:"+cm.getChar().getName()+"�ɹ���������ҽ�װ����������~");
cm.dispose();
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==3){
if(cm.getDonatorPoints()>=taocan400){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setMatk((item.getMatk() + 400));
item.setWatk((item.getWatk() + 400));
item.setLevel((item.getLevel() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-taocan400);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[��������Ա]���ղ����:"+cm.getChar().getName()+"�ɹ���������ҽ�װ����������~");
cm.dispose();
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==4){
if(cm.getDonatorPoints()>=taocan1000){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setMatk((item.getMatk() + 1000));
item.setWatk((item.getWatk() + 1000));
item.setLevel((item.getLevel() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-taocan1000);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[��������Ա]���ղ����:"+cm.getChar().getName()+"�ɹ���������ҽ�װ����������~");
cm.dispose();
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}

}else if(typed==3333){
if (selection == 2001) {
cm.sendOk("��ͨ�������ת������Ϊ70��,ת�������ܱ���100��+ת������*100������\r\n\r\n����VIP����ת������Ϊ120��,ת�������ܱ���200��+ת������*200������\r\n\r\n�߼�VIP����ת������Ϊ180��,ת�������ܱ���300��+ת������*300������\r\n\r\n����VIP����ת������Ϊ245��,ת�������ܱ���400��+ת������*400������\r\n\r\n����VIP����ת������Ϊ300��,ת�������ܱ���500��+ת������*500������\r\n\r\n\r\n         #r#e��ע��:����ʣ�µ�����,���Ȱ�������.����,ת���󽫻����!");

}else if (selection == 2002) {
if (cm.getChar().getLevel() < 200) {
cm.sendOk("#e�ܱ�Ǹ,����ѡ����ͨ���ת��,���ĵȼ�����200��,�������޷�Ϊ��ת��!");
cm.dispose(); 
}else if (cm.getMeso() < 500000000) {
cm.sendOk("#e�ܱ�Ǹ,��û��5�ڽ��,�����Ҳ��ܰ����æŶ.");
cm.dispose();
}else if (cm.getChar().getReborns() > 70) {
cm.sendOk("������ͨ���,ת�������ѳ���70,���Բ�����ת��.");
cm.dispose();
}else if (cm.haveItem(4001129) == false){ 
cm.sendOk("#e��Ǹ��û��#v4001129#.�����޷�����ת��\r\n#b��ȥ�һ�����  #b(����ȥ��������)"); 
cm.dispose();
}else{      
wui = 1;
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
cm.getChar().setLevel(2);
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
cm.gainItem(4001129,-1);
cm.gainReborns(1);
cm.gainMeso(-500000000);
p.setStr(4);
p.setDex(4);
p.setInt(4);
p.setLuk(4);  
var totAp = (cm.getChar().getReborns()+1)*100;
p.setRemainingAp (totAp+100);
cm.serverNotice("��ת����Ϣ������ϲ��ͨ��� "+ cm.getChar().getName() +" ,ת����,���ף��һ������!");
cm.sendOk("#e�����÷ǳ���,�����Ѿ��ɹ�#eת��#n�ˡ�.���˰�!");
cm.dispose();
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
		p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();  

}


}else if (selection == 2003) {
if(cm.getChar().getLevel() < 190){ 
cm.sendOk("#e�ܱ�Ǹ,��ѡ����ǳ���VIPת��,������Ҫ190���ſ���ת��."); 
cm.dispose(); 
}else if(cm.getChar().getVip() < 1) {
cm.sendOk("#e�ܱ�Ǹ,�㲻�ǳ���VIP,�����Ҳ���Ϊ���������VIPת��.");
cm.dispose();
}else if (cm.getChar().getReborns() > 120) {
cm.sendOk("���ǳ���VIP,ת�������ѳ���120,���Բ�����ת��.");
cm.dispose();
}else if (cm.haveItem(4001129) == false){ 
cm.sendOk("#e��Ǹ��û��#v4001129#.�����޷�����ת������ȥ�һ�����  #b(����ȥ��������)"); 
cm.dispose();
}else if (cm.getMeso() < 400000000) {
cm.sendOk("���Ǯ����4��.����."); 
cm.dispose();
}else if (cm.haveItem(4001129) == false){  
cm.sendOk("#e��Ǹ��û��#v4001129#,�������޷�����ת������ȥ�һ�����    \r\n#b(����ȥ��������)"); 
cm.dispose();
}else{ 
wui = 1;
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
cm.getChar().setLevel(2);
p.setStr(4);
p.setDex(4);
p.setInt(4);
p.setLuk(4); 
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
cm.gainItem(4001129,-1);
cm.gainReborns(1);
cm.gainMeso(-400000000);
var totAp = (cm.getChar().getReborns()+1)*200;
p.setRemainingAp (totAp+200);
cm.serverNotice("��ת����Ϣ������ϲ����VIP "+ cm.getChar().getName() +" ,ת����,���ף��һ������!");
cm.sendOk("#e�����÷ǳ���,�����Ѿ��ɹ�#eת��#n�ˡ�.���˰�!");
cm.dispose();
 		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
		p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}

}else if (selection == 2004) {
if (cm.getChar().getLevel() < 180) {
cm.sendOk("�ܱ�Ǹ,��ĵȼ�����180���޷�Ϊ��Ͷ̥ת��");
cm.dispose(); 
}else if(cm.getChar().getVip() < 2) {
cm.sendOk("#e�ܱ�Ǹ,�㲻�Ǹ߼�VIP,�����Ҳ���Ϊ������߼�VIPת��.");
cm.dispose(); 
}else if (cm.haveItem(4001129) == false){ 
cm.sendOk("#e��Ǹ��û��#v4001129#.�����޷�����ת������ȥ�һ�����  #b(����ȥ��������)"); 
cm.dispose();
}else if (cm.getChar().getReborns() > 180) {
cm.sendOk("���Ǹ߼�VIP,ת�������ѳ���180,���Բ�����ת��.");
cm.dispose();
}else if (cm.getMeso() < 300000000) {
cm.sendOk("���Ǯ����3��.����."); 
cm.dispose();
}else{
wui = 1;
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
cm.getChar().setLevel(2);
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
cm.gainMeso(-300000000); 
cm.gainItem(4001129,-1);
cm.gainReborns(1);
p.setStr(4);
p.setDex(4);
p.setInt(4);
p.setLuk(4); 
var totAp = (cm.getChar().getReborns()+1)*300;
p.setRemainingAp (totAp+300);
cm.serverNotice("��ת����Ϣ������ϲ�߼�VIP "+ cm.getChar().getName() +" ת����,���ף������!");
cm.sendOk("#e�����÷ǳ���, ���Ѿ��ɹ�#eת��#n���˰ɣ�");
cm.dispose();    
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
		p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose(); 
}

}else if (selection == 2005) {
if (cm.getChar().getLevel() < 170) {
cm.sendOk("�ܱ�Ǹ,��ĵȼ�����170���޷�Ϊ��Ͷ̥ת��");
cm.dispose(); 
}else if(cm.getChar().getVip() < 3) {
cm.sendOk("#e�ܱ�Ǹ,�㲻�ǳ���VIP,�����Ҳ���Ϊ�����񳬼�VIPת��.");
cm.dispose(); 
}else if (cm.haveItem(4001129) == false){ 
cm.sendOk("#e��Ǹ��û��#v4001129#.�����޷�����ת������ȥ�һ�����  #b(����ȥ��������)"); 
cm.dispose();
}else if (cm.getChar().getReborns() > 245) {
cm.sendOk("���ǳ���VIP,ת�������ѳ���245,���Բ�����ת��.");
cm.dispose();
}else if (cm.getMeso() < 200000000) {
cm.sendOk("���Ǯ����2��.����."); 
cm.dispose();
}else{
wui = 1;
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
cm.getChar().setLevel(2);
//cm.unequipEverything()  (��װ�������)
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
cm.gainMeso(-200000000); 
cm.gainReborns(1);
p.setStr(4);
p.setDex(4);
p.setInt(4);
p.setLuk(4); 
var totAp = (cm.getChar().getReborns()+1)*400;
p.setRemainingAp (totAp+400);
cm.gainItem(4001129,-1);
cm.serverNotice("��ת����Ϣ������ϲ����VIP "+ cm.getChar().getName() +" ת����,���ף������!");
cm.sendOk("#e�����÷ǳ���, ���Ѿ��ɹ�#eת��#n���˰ɣ�");
cm.dispose();    
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
		p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}


}else if (selection == 2006) {
if (cm.getChar().getLevel() < 160) {
cm.sendOk("�ܱ�Ǹ,��ĵȼ�����160���޷�Ϊ��Ͷ̥ת��");
cm.dispose(); 
}else if(cm.getChar().getVip() < 4) {
cm.sendOk("#e�ܱ�Ǹ,�㲻������VIP,�����Ҳ���Ϊ����������VIPת��.");
cm.dispose(); 
}else if (cm.getChar().getReborns() >= 300) {
cm.sendOk("��������VIP,ת�������ѳ���300,���Բ�����ת��.");
cm.dispose();
}else if (cm.getMeso() < 100000000) {
cm.sendOk("���Ǯ����1��.����."); 
cm.dispose();
}else{
wui = 1;
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
cm.getChar().setLevel(2);
//cm.unequipEverything()  (��װ�������)
cm.changeJob(net.sf.odinms.client.MapleJob.BEGINNER);
cm.gainMeso(-100000000); 
cm.gainReborns(1);
p.setStr(4);
p.setDex(4);
p.setInt(4);
p.setLuk(4); 
var totAp = (cm.getChar().getReborns()+1)*500;
p.setRemainingAp (totAp+500);
cm.serverNotice("��ת����Ϣ������ϲ����VIP "+ cm.getChar().getName() +" ת����,���ף������!");
cm.sendOk("#e�����÷ǳ���, ���Ѿ��ɹ�#eת��#n���˰ɣ�");
cm.dispose();    
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LEVEL, java.lang.Integer.valueOf(1)));
        statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0))); 
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(4)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.EXP, java.lang.Integer.valueOf(0)));
		statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(p.getRemainingAp())));
		p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}



}


}else if(typed==1){
if (selection==0){
cm.dispose();


}else if (selection==10000){

if(cm.getChar().getVip()>=2){
cm.sendOk("#r�Բ������Ѿ���VIP1���ϵ�VIP�ˣ�.");
cm.dispose();
}else{

if(cm.getChar().getReborns()>=1){
cm.getChar().setVip(1);
cm.sendOk("#r��ϲ�����Ѿ��ɹ��������VIP����!\r\n�����ڵ�VIP�ȼ���"+cm.getChar().getVip()+".��������:"+cm.getDonatorPoints());
cm.dispose();
cm.getChar().saveToDB(true,true);
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�Ѿ��ɹ��ĳ�Ϊ�ĳ���VIP��");
}else{
cm.sendOk("#r�Բ�����û�л�û��ת��1������.");
cm.dispose();
}
}

}else if (selection==1){
if(cm.getChar().getVip()>=3){
cm.sendOk("#r�Բ������Ѿ���VIP2���ϵ�VIP�ˣ�.");
cm.dispose();
}else{

if(cm.getDonatorPoints()>=vip2){
cm.getChar().setVip(2);
cm.gainDonatorPoints(-vip2);
cm.sendOk("#r��ϲ�����Ѿ��ɹ�����߼�VIP����!\r\n�����ڵ�VIP�ȼ���"+cm.getChar().getVip()+".��������:"+cm.getDonatorPoints());
cm.dispose();
cm.getChar().saveToDB(true,true);
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�Ѿ��ɹ��ĳ�Ϊ�߼�VIP����");
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}

}else if (selection==2){
if(cm.getChar().getVip()>=4){

cm.sendOk("#r�Բ������Ѿ���VIP3���ϵ�VIP�ˣ�.");
cm.dispose();
}else{
if(cm.getDonatorPoints()>=vip3){
cm.gainDonatorPoints(-vip3);
cm.getChar().setVip(3);
cm.sendOk("#r��ϲ����ɹ������ռ�VIP����!\r\n�����ڵ�VIP�ȼ���"+cm.getChar().getVip()+".��������:"+cm.getDonatorPoints());
cm.dispose();
cm.getChar().saveToDB(true,true);
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�Ѿ��ɹ��ĳ�Ϊ�ռ�VIP������");
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}

}


}else if (selection==3){
if(cm.getChar().getVip()>=4){
cm.sendOk("#r�Բ������Ѿ�������VIP��.");
cm.dispose();

}else{
if(cm.getDonatorPoints()>=vip4){
cm.gainDonatorPoints(-vip4);
cm.getChar().setVip(4);
cm.sendOk("#r��ϲ����ɹ���������VIP����!\r\n�����ڵ�VIP�ȼ���"+cm.getChar().getVip()+".��������:"+cm.getDonatorPoints());
cm.gainItem(5221000,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�Ѿ��ɹ��ĳ�Ϊ����VIP��������");
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�Ѿ��ɹ��ĳ�Ϊ����VIP��������");
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�Ѿ��ɹ��ĳ�Ϊ����VIP��������");
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�Ѿ��ɹ��ĳ�Ϊ����VIP��������");
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
} 

}

}else if (selection==4){
typed=15;
cm.sendNext("��Ŀǰѡ�����#rV2������V3#k.\r\n�����Ŀǰ��Ҫ�����#r"+vip2tovip3+"#k��.\r\n���ȷ���˾Ϳ�ʼ������.\r\n#r����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"��          ��Ŀǰ��������:#r"+cm.getDonatorPoints()+"#k.");
}else if (selection==5){
if(cm.getDonatorPoints()>=shuangbei){
cm.gainDonatorPoints(-shuangbei);
cm.sendOk("#r��ϲ������ɹ�.��������:"+cm.getDonatorPoints());
cm.gainItem(5211018,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ�����˫�����鿨�������޵��!..��");

}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==1000){
typed=1000;
cm.sendNext("��Ŀǰѡ�����#rV1������V2#k.\r\n�����Ŀǰ��Ҫ�����#r"+vip1tovip2+"#k��.\r\n���ȷ���˾Ϳ�ʼ������.\r\n#r����ʱ��:"+cm.getHour()+"��"+cm.getMin()+"��          ��Ŀǰ��������:#r"+cm.getDonatorPoints()+"#k.");
}else if (selection==6){
if(cm.getDonatorPoints()>=sibei){
if (cm.haveItem(5211018) == false){
cm.gainDonatorPoints(-sibei);
cm.sendOk("#r��ϲ������ɹ���������:"+cm.getDonatorPoints());
cm.gainItem(5211003,1);
cm.gainItem(5211018,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ������ı����鿨�������޵��!..��");

}else{
cm.gainDonatorPoints(-sibei);
cm.sendOk("#r��ϲ������ɹ���������:"+cm.getDonatorPoints());
cm.gainItem(5211003,1);

cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ������ı����鿨�������޵��!..��");
}

}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==7){
if(cm.getDonatorPoints()>=pksibei){
cm.gainDonatorPoints(-pksibei);
cm.sendOk("#r��ϲ������ɹ�.��������:"+cm.getDonatorPoints());
cm.gainItem(5211003,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ������ı�PK�޵п�������");


}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==8){
if(cm.getDonatorPoints()>=vip3tovip4){
if(cm.getChar().getVip()>=3){
cm.gainDonatorPoints(-vip3tovip4);
cm.getChar().setVip(4);
cm.sendOk("#r��ϲ����ɹ���������VIP����!\r\n�����ڵ�VIP�ȼ���"+cm.getChar().getVip()+".��������:"+cm.getDonatorPoints());
cm.gainItem(5221000,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�Ѿ��ɹ��ĳ�Ϊ����VIP��������");
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�Ѿ��ɹ��ĳ�Ϊ����VIP��������");
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�Ѿ��ɹ��ĳ�Ϊ����VIP��������");
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�Ѿ��ɹ��ĳ�Ϊ����VIP��������");
}else{
cm.sendOk("#r�Բ�����ĿǰVIP�ȼ�����VIP3.����������VIP3");
cm.dispose();
} 
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection == 9) {
if(cm.getDonatorPoints()>=fbk){
cm.gainDonatorPoints(-fbk);
cm.sendOk("��ϲ�����Ѿ��ɹ�����PK��������");
cm.gainItem(5060001,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ���������ҹ�����PK������������");
}else{
cm.sendOk("#r�Բ�����û���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection == 12) {
if(cm.getDonatorPoints()>=zsb){
cm.gainDonatorPoints(-zsb);
cm.sendOk("��ϲ�����Ѿ��ɹ�����ת������ҡ�");
cm.gainItem(4001129,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ���������ҹ�����ת������ң�����");
}else{
cm.sendOk("#r�Բ�����û���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection == 13) {
if(cm.getDonatorPoints()>=pkqkk){
cm.gainDonatorPoints(-pkqkk);
cm.sendOk("��ϲ�����Ѿ��ɹ�����PKս�����Ʊ��");
cm.gainItem(4002000,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ���������ҹ�����PKս�����Ʊ������");
}else{
cm.sendOk("#r�Բ�����û���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection == 14) {
if(cm.getDonatorPoints()>=qhten){
cm.gainDonatorPoints(-qhten);
cm.sendOk("��ϲ�����Ѿ��ɹ�����ǿ��װ��10�εĵ��ߡ�");
cm.gainItem(4001120,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ���������ҹ�����ǿ��װ��10�εĵ��ߣ�����");
}else{
cm.sendOk("#r�Բ�����û���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection == 15) {
if(cm.getDonatorPoints()>=qhfif){
cm.gainDonatorPoints(-qhfif);
cm.sendOk("��ϲ�����Ѿ��ɹ�����ǿ��װ��50�εĵ��ߡ�");
cm.gainItem(4001121,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ���������ҹ�����ǿ��װ��50�εĵ��ߣ�����");
}else{
cm.sendOk("#r�Բ�����û���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection == 16) {
if(cm.getDonatorPoints()>=qhone){
cm.gainDonatorPoints(-qhone);
cm.sendOk("��ϲ�����Ѿ��ɹ�����ǿ��װ��100�εĵ��ߡ�");
cm.gainItem(4001122,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ���������ҹ�����ǿ��װ��100�εĵ��ߣ�����");
}else{
cm.sendOk("#r�Բ�����û���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection == 17) {
if(cm.getDonatorPoints()>=qhtwo){
cm.gainDonatorPoints(-qhtwo);
cm.sendOk("��ϲ�����Ѿ��ɹ�����ǿ��װ��200�εĵ��ߡ�");
cm.gainItem(4001126,1);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ���������ҹ�����ǿ��װ��200�εĵ��ߣ�����");
}else{
cm.sendOk("#r�Բ�����û���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if (selection==11){
if(cm.getDonatorPoints()>=jindaizi){
cm.gainDonatorPoints(-jindaizi);
cm.sendOk("#r��ϲ����ɹ�����2�������.��������:"+cm.getDonatorPoints());
cm.gainItem(5200002,2);
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ���������ҹ����˽���ӣ���������");

}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
} 
}else if (selection==10){
if(cm.getDonatorPoints()>=dianjuan){
cm.gainDonatorPoints(-dianjuan);
cm.getPlayer().modifyCSPoints(1, 200000);
cm.sendOk("#r��ϲ����ɹ�����20����,�뵽�̳ǲ���.��������:"+cm.getDonatorPoints());

cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[��������Ա]���ղ����"+cm.getChar().getName()+"�ɹ���������ҹ����˵��");

}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}
}else if(typed==2){
typed=67;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
//var statup = new java.util.ArrayList();
cm.sendAcceptDecline("��Ҫ�ҵ�װ���ǣ�#v"+item.getItemId()+"#\r\n#b\r\n#gĿǰװ������:\r\n#b��������:#r"+item.getWatk()+"#b   ħ����:#r"+item.getMatk()+"  #b����������Ϊ:#r"+item.getUpgradeSlots()+"#b ����������:#r"+item.getLevel()+"\r\n#r----------------------------------------------------------------------\r\n#g��������ɹ�,��ô���Խ���Ϊ:\r\n#b������:#r"+(item.getWatk()+10)+"#b   ħ��������:#r"+(item.getMatk()+10)+"#b   ����������:#r"+(item.getUpgradeSlots()-1)+"#d\r\nȷ����Ϻ󣬵�����ܿ�ʼ����..");

}







} else if (status == 4) {



if (typed==7101){//�����Ǳ�
var em = cm.getEventManager("wgquestxscb");
if (em == null || !em.getProperty("entryPossible").equals("true")) {
cm.sendOk("�Բ���,Ŀǰ #r�����Ǳ�#k �Ѿ��ر�[�۸�Ԥ��:#b"+cm.getChar().getLevel()*1000000+"#k���].\r\n#r�����Ǳ�#k�ֻ�����㿪��,����ǰ5���ӷ��͹���.");
} else if (cm.getMeso() < cm.getChar().getLevel()*100000 || cm.haveItem(4001126,20)==false) {
cm.sendOk("��û���㹻�Ľ�һ���#d20#bƬ#��Ҷ.");
} else if (cm.getChar().getLevel() < 21) {
cm.sendOk("������Ҫ21�����ܽ��� #r��صľ���.#k");
} else if (cm.getChar().getLevel() >= 21 && cm.getChar().getLevel() < 31) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-20);
em.getInstance("lolcastle1").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 31 && cm.getChar().getLevel() < 51) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-20);
em.getInstance("lolcastle2").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 51 && cm.getChar().getLevel() < 71) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-20);
em.getInstance("lolcastle3").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 71 && cm.getChar().getLevel() < 91) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-20);
em.getInstance("lolcastle4").registerPlayer(cm.getChar());
} else {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-20);
em.getInstance("lolcastle5").registerPlayer(cm.getChar());
}
cm.dispose();


}else if (typed==7102){//���
var em = cm.getEventManager("lolcastle");
if (em == null || !em.getProperty("entryPossible").equals("true")) {
cm.sendOk("�Բ���,��Ϊ #r��صľ���#k �Ѿ��ر�[�۸�Ԥ��:#b"+cm.getChar().getLevel()*1000000+"#k���].\r\n#r��صľ���#k�ֻ�����㿪��,����ǰ5���ӷ��͹���.");
} else if (cm.getMeso() < cm.getChar().getLevel()*100000 || cm.haveItem(4001126,10)==false) {
cm.sendOk("��û���㹻�Ľ�һ���10Ƭ   #r��Ҷ  .");
} else if (cm.getChar().getLevel() < 21) {
cm.sendOk("������Ҫ21�����ܽ��� #r��صľ���.#k");
} else if (cm.getChar().getLevel() >= 21 && cm.getChar().getLevel() < 31) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-10);
em.getInstance("lolcastle1").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 31 && cm.getChar().getLevel() < 51) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-10);
em.getInstance("lolcastle2").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 51 && cm.getChar().getLevel() < 71) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-10);
em.getInstance("lolcastle3").registerPlayer(cm.getChar());
} else if (cm.getChar().getLevel() >= 71 && cm.getChar().getLevel() < 91) {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-10);
em.getInstance("lolcastle4").registerPlayer(cm.getChar());
} else {
cm.gainMeso(-cm.getChar().getLevel()*100000);
cm.gainItem(4001126,-10);
em.getInstance("lolcastle5").registerPlayer(cm.getChar());
}
cm.dispose();





} else if(typed==99001){
if (cm.getMeso() < yyb * 100000000) {
cm.sendOk("#d�ޣ�sorry���㻹����ô��Ǯ�أ�ȥ׬��Ǯ�����ɣ�#eҪ1Eһ��Ŷ");
cm.dispose();
}else{
cm.gainMeso(-yyb * 100000000);
cm.gainDonatorPoints(yyb);
cm.sendOk("��ϲ���ɹ�����");
cm.serverNotice("[����]�����   [     "+ cm.getChar().getName() +"    ]  �ɹ�����  "+yyb+" �������");	
cm.dispose();
}





} else if(typed==6211){
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var itemId2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).getItemId();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
if ((itemId1 == itemId2)&&(itemId1 == itemId3)) {
if (item.getUpgradeSlots() <= 15) {

if (chance <= 1) {
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk("#bǿ��ʧ��,ף���´κ���!#k");
cm.setBossLog('wqqhfail');
cm.dispose();
}
else if (chance == 2) {
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk("#bǿ��ʧ��,ף���´κ���!#k");
cm.setBossLog('wqqhfail');
cm.dispose();
}
else if (chance == 3) {
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.setBossLog('wqqhfail');
cm.sendOk("#bǿ��ʧ�ܣ�ף���´κ���!#k");
cm.dispose();
}
else if (chance == 4) { 
cm.sendNext("#rȷ��Ҫ��ʼǿ������?");
typed=654321;
luk = 1 ;
}




}
else if ((item.getUpgradeSlots() >= 16)&&(item.getUpgradeSlots() <= 25))
{
if (chance <= 1) {        
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk("#bǿ��ʧ��,ף���´κ���!");
cm.setBossLog('wqqhfail');
cm.dispose();
}
else if (chance == 2) {
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.setBossLog('wqqhfail');
cm.sendOk("#bǿ��ʧ��,ף���´κ���!#k");
cm.dispose();
}
else if (chance >= 3) {
cm.sendNext("ǿ���ɹ�,�밴��һ��#r����װ������.");
typed=654322;
luk = 1 ;
}
}
else if (item.getUpgradeSlots() > 25){

if (chance <= 1) {
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
cm.sendOk("#bǿ��ʧ��,ף���´κ���!");
cm.setBossLog('wqqhfail');
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}
else if (chance >= 2) {
cm.sendNext("ǿ���ɹ�,�밴��һ��#r����װ������.");
typed=654322;
luk = 1 ;
}

}
} else{
cm.sendOk("#r��Ǹ,��û���ռ�������ͬ����������������λ�ô���!");
cm.dispose();   
}




} else if(typed==77777774000){

if (selection==77701){

if(cm.getChar().getVip() >= 1 ){

if (cm.haveItem(1112306) == false){
cm.gainItem(1112306,1);
cm.gainItem(1112306,1);
cm.gainItem(1112306,1);
cm.gainItem(1112306,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r����VIP��ָ#v1112306#");
cm.dispose();
}
}else{
cm.sendOk("���VIP�ȼ�û�дﵽҪ��#r��ҪVIP�ȼ��ﵽ1����");
cm.dispose();
}


}else if (selection==77702){
if(cm.getChar().getVip() >= 2 ){
if (cm.haveItem(1112307) == false){
cm.gainItem(1112307,1);
cm.gainItem(1112307,1);
cm.gainItem(1112307,1);
cm.gainItem(1112307,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r�߼�VIP��ָ#v1112307#");
cm.dispose();
}
}else{
cm.sendOk("���VIP�ȼ�û�дﵽҪ��#r��ҪVIP�ȼ��ﵽ2����");
cm.dispose();
}

}else if (selection==77703){
if(cm.getChar().getVip() >= 3 ){
if (cm.haveItem(1112308) == false){
cm.gainItem(1112308,1);
cm.gainItem(1112308,1);
cm.gainItem(1112308,1);
cm.gainItem(1112308,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r����VIP��ָ#v1112308#");
cm.dispose();
}
}else{
cm.sendOk("���VIP�ȼ�û�дﵽҪ��#r��ҪVIP�ȼ��ﵽ3����");
cm.dispose();
}

}else if (selection==77704){
if(cm.getChar().getVip() >= 4 ){
if (cm.haveItem(1112302) == false){
cm.gainItem(1112301,1);
cm.gainItem(1112301,1);
cm.gainItem(1112301,1);
cm.gainItem(1112301,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r����VIP��ָ#v1112301#");
cm.dispose();
}
}else{
cm.sendOk("���VIP�ȼ�û�дﵽҪ��#r��ҪVIP�ȼ��ﵽ4����");
cm.dispose();
}


}



} else if(typed==77777773000){

if (selection==77701){
if(cm.getChar().getReborns() >= 10 ){
if (cm.haveItem(1112303) == false){
cm.gainItem(1112303,1);
cm.gainItem(1112303,1);
cm.gainItem(1112303,1);
cm.gainItem(1112303,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r����ת����ָ#v1112303#");
cm.dispose();
}
}else{
cm.sendOk("���ת������û�дﵽҪ��#r��Ҫת�������ﵽ10����");
cm.dispose();
}


}else if (selection==77702){
if(cm.getChar().getReborns() >= 50 ){
if (cm.haveItem(1112304) == false){
cm.gainItem(1112304,1);
cm.gainItem(1112304,1);
cm.gainItem(1112304,1);
cm.gainItem(1112304,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r�߼�ת����ָ#v1112304#");
cm.dispose();
}
}else{
cm.sendOk("���ת������û�дﵽҪ��#r��Ҫת�������ﵽ50����");
cm.dispose();
}

}else if (selection==77703){
if(cm.getChar().getReborns() >= 100 ){
if (cm.haveItem(1112305) == false){
cm.gainItem(1112305,1);
cm.gainItem(1112305,1);
cm.gainItem(1112305,1);
cm.gainItem(1112305,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r����ת����ָ#v1112305#");
cm.dispose();
}
}else{
cm.sendOk("���ת������û�дﵽҪ��#r��Ҫת�������ﵽ100����");
cm.dispose();
}

}else if (selection==77704){
if(cm.getChar().getReborns() >= 200 ){
if (cm.haveItem(1112301) == false){
cm.gainItem(1112302,1);
cm.gainItem(1112302,1);
cm.gainItem(1112302,1);
cm.gainItem(1112302,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r����ת����ָ#v1112302#");
cm.dispose();
}
}else{
cm.sendOk("���ת������û�дﵽҪ��#r��Ҫת�������ﵽ200����");
cm.dispose();
}


}



} else if(typed==77777772000){

if (selection==77701){
if(cm.getLevel() >= 1 ){
if (cm.haveItem(1112309) == false){
cm.gainItem(1112309,1);
cm.gainItem(1112309,1);
cm.gainItem(1112309,1);
cm.gainItem(1112309,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r������ҽ�ָ#v1112309#");
cm.dispose();
}
}else{
cm.sendOk("��ĵȼ�û�дﵽҪ��#r��Ҫ�ȼ��ﵽ1������");
cm.dispose();
}


}else if (selection==77702){
if(cm.getLevel() >= 100 ){
if (cm.haveItem(1112310) == false){
cm.gainItem(1112310,1);
cm.gainItem(1112310,1);
cm.gainItem(1112310,1);
cm.gainItem(1112310,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r�߼���ҽ�ָ#v1112310#");
cm.dispose();
}
}else{
cm.sendOk("��ĵȼ�û�дﵽҪ��#r��Ҫ�ȼ��ﵽ100������");
cm.dispose();
}

}else if (selection==77703){
if(cm.getLevel() >= 150 ){
if (cm.haveItem(1112311) == false){
cm.gainItem(1112311,1);
cm.gainItem(1112311,1);
cm.gainItem(1112311,1);
cm.gainItem(1112311,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r������ҽ�ָ#v1112311#");
cm.dispose();
}
}else{
cm.sendOk("��ĵȼ�û�дﵽҪ��#r��Ҫ�ȼ��ﵽ150������");
cm.dispose();
}

}else if (selection==77704){
if(cm.getLevel() >= 200 ){
if (cm.haveItem(1112300) == false){
cm.gainItem(1112300,1);
cm.gainItem(1112300,1);
cm.gainItem(1112300,1);
cm.gainItem(1112300,1);
cm.sendOk("�ɹ���ȡ��");
cm.dispose();
}else{
cm.sendOk("��Ǹ,���Ѿ�ӵ���� #r������ҽ�ָ#v1112300#");
cm.dispose();
}
}else{
cm.sendOk("��ĵȼ�û�дﵽҪ��#r��Ҫ�ȼ��ﵽ200��");
cm.dispose();
}


}





} else if(typed==98200){

if (selection == 1) {
cm.setVip(5);
cm.sendOk("�����ɹ���");
cm.dispose();
}else if (selection == 2) {
cm.setVip(4);
cm.sendOk("�����ɹ���");
cm.dispose();
}else if (selection == 3) {
cm.setVip(3);
cm.sendOk("�����ɹ���");
cm.dispose();
}else if (selection == 4) {
cm.setVip(2);
cm.sendOk("�����ɹ���");
cm.dispose();
}else if (selection == 5) {
cm.setVip(1);
cm.sendOk("�����ɹ���");
cm.dispose();
}




} else if(typed==7201){
typed=7203;
cm.sendSimple("��ӭ��������50,��ѡ����Ŀǰ������:#b\r\n#L0#��ʼ��ע#l#L1#��ȡ���ڽ�Ʒ#l#L2#�鿴������������#l");
}else if (typed==7202){
typed=7204;
cm.sendSimple("��ӭ��������10,��ѡ����Ŀǰ������:#b\r\n#L0#��ʼ��ע#l#L1#��ȡ���ڽ�Ʒ#l#L2#�鿴������������#l");




} else if(typed==7301){
cm.gainItem(5220010, -1);

			
			
			if ((itemchance >= 1) && (itemchance <= 71)) {
 cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ô�˵�е�  ����ƱN��!!!");
			cm.gainItem(4110010, itemamount);
			}
			else if (itemchance == 72) {
 cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ����֮��!");
			cm.gainItem(1702207 , 1);
			}
			else if (itemchance == 73) {
 cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ð�ҹ����!");
			cm.gainItem(1702180 , 1);
			}
			else if (itemchance == 74) {
 cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�������ƤѼ��!");
			cm.gainItem(1702181 , 1);
			}
			else if (itemchance == 75) {
 cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ������!");
			cm.gainItem(1702211 , 1);
			}
			else if (itemchance == 76) {
 cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����Ϧ������!");
			cm.gainItem(1702183  , 1);
			}
			else if (itemchance == 77) {
 cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ħŮ�ķ�ɨ��!");
			cm.gainItem(3010043, 1);
			}
			else if (itemchance == 78) {
 cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  �������!");
			cm.gainItem(1702226 , 1);
			}
			else if (itemchance == 79) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ú�ˮ�鸽��!");
			cm.gainItem(1702186 , 1);
			}	
			else if (itemchance == 80) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����÷�ɫ����!");
			cm.gainItem(1702188 , 1);
			}	
			else if (itemchance == 81) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ����!");
			cm.gainItem(1702237, 1);
			}
			else if (itemchance == 82) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����͸��ȭ��!");
			cm.gainItem(1702190 , 1);
			}
			else if (itemchance == 83) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�������ɫ����!");
			cm.gainItem(1702191 , 1);
			}	
			else if (itemchance == 84) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����ë���!");
			cm.gainItem(1702193 , 1);
			}
			else if (itemchance == 85) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����������!");
			cm.gainItem(1702195 , 1);
			}
			else if (itemchance == 86) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����С������!");
			cm.gainItem(1702196 , 1);
			}
			else if (itemchance == 87) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����òʺ���ɡ!");
			cm.gainItem(1702199, 1);
			}	
			else if (itemchance == 88) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����͸����ɡ!");
			cm.gainItem(1702200 , 1);
			}
			else if (itemchance == 89) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"��������ð�!");
			cm.gainItem(1702201 , 1);
			}
			else if (itemchance == 90) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����÷��ུ���!");
			cm.gainItem(1702202 , 1);
			}
			else if (itemchance == 91) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����ֽ��!");
			cm.gainItem(1702204 , 1);
			}
			else if (itemchance == 92) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"���������!");
			cm.gainItem(1702208, 1);
			}
			else if (itemchance == 93) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����ѱ¹����!");
			cm.gainItem(1702209 , 1);
			}
			else if (itemchance == 94) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����ʥ����үү");
			cm.gainItem(1702210, 1);
			}
			else if (itemchance == 95) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"���������!");
			cm.gainItem(1702212, 1);
			}
			else if (itemchance == 96) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"���������ǹ!");
			cm.gainItem(1702213 , 1);
			}
			else if (itemchance == 97) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����!");
			cm.gainItem(5010005, 1);
			}
			else if (itemchance == 98) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ƽ����!");
			cm.gainItem(5010012, 1);
			}
			else if (itemchance == 99) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �̻�!");
			cm.gainItem(5010013, 1);
			}
			else if (itemchance == 100) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��������!");
                        cm.gainItem(5010020, 1);
			}
			else if (itemchance == 101) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����С����!");
			cm.gainItem(5010022, 1);
			}
			else if (itemchance == 102) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����С����!");
			cm.gainItem(5010023, 1);
			}
			else if (itemchance == 103) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��������!");
			cm.gainItem(5010028, 1);
			}
			else if (itemchance == 104) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���涷��!");
			cm.gainItem(5010029, 1);
			}
			else if (itemchance == 105) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �׵綷��!");
			cm.gainItem(5010030, 1);
			}
			else if (itemchance == 106) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �ҵ�����!");
			cm.gainItem(5010031, 1);
			}
			else if (itemchance == 107) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �ҵ�Ů��!");
			cm.gainItem(5010032, 1);
			}
			else if (itemchance == 108) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��֮��!");
			cm.gainItem(5010046, 1);
			}
			else if (itemchance == 109) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��֮��!");
			cm.gainItem(5010048, 1);
			}
			else if (itemchance == 110) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��֮��!");
			cm.gainItem(5010049, 1);
			}
			else if (itemchance == 111) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��˹��!");
			cm.gainItem(5010066, 1);
			}
			else if (itemchance == 112) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �����������!");
			cm.gainItem(5010086, 1);
			}
			else if (itemchance == 113) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ҹ��!");
			cm.gainItem(5010999, 1);
			}
			else if (itemchance == 114) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����ţţ���곤��!");
			cm.gainItem(1052179 , 1);
			}
			else if (itemchance == 115) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����һ֦÷ҹ�з�!");
			cm.gainItem(1052183 , 1);
			}
			else if (itemchance == 116) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"������ſ�װ!");
			cm.gainItem(1052185 , 1);
			}
			else if (itemchance == 117) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�����ѧ����!");
			cm.gainItem(1052201 , 1);
			}
			else if (itemchance == 118) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"�������ɫѧ����!");
			cm.gainItem(1052204 , 1);
			}
			else if (itemchance == 119) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��Ч��!");
			cm.gainItem(4290000, 1);
			}
			else if (itemchance == 120) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ������!");
			cm.gainItem(3010021, 1);
			}
			else if (itemchance == 121) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ������!");
			cm.gainItem(3010027, 1);
			}
			else if (itemchance == 122) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����ר��!");
			cm.gainItem(3010028, 1);
			}
			else if (itemchance == 123) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��������!");
			cm.gainItem(3010029, 1);
			}
			else if (itemchance == 124) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���˺ڻ�!");
			cm.gainItem(3010030, 1);
			}
			else if (itemchance == 125) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���˺컷!");
			cm.gainItem(3010031, 1);
			}
			else if (itemchance == 126) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���˻ƻ�!");
			cm.gainItem(3010032, 1);
			}
			else if (itemchance == 127) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �����̻�!");
			cm.gainItem(3010033, 1);
			}
			else if (itemchance == 128) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� Ʈ����!");
			cm.gainItem(3010037, 1);
			}
			else if (itemchance == 129) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ͸������!");
			cm.gainItem(3010038, 1);
			}
			else if (itemchance == 130) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ������!");
			cm.gainItem(3010045, 1);
			}
			else if (itemchance == 131) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �������ػ�!");
			cm.gainItem(3010046, 1);
			}
			else if (itemchance == 132) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �������ػ�!");
			cm.gainItem(3010047, 1);
			}
			else if (itemchance == 133) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����!");
			cm.gainItem(3010049, 1);
			}
			else if (itemchance == 134) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ������!");
			cm.gainItem(3010050, 1);
			}
			else if (itemchance == 135) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���ܴ�!");
			cm.gainItem(3010054, 1);
			}
			else if (itemchance == 136) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �ɿ�������!");
			cm.gainItem(3010059, 1);
			}
			else if (itemchance == 137) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �ߴ���ػ�!");
			cm.gainItem(3010069, 1);
			}
			else if (itemchance == 138) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ������!");
			cm.gainItem(3012003, 1);
			}
			else if (itemchance == 139) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���ı�!");
			cm.gainItem(1012137, 1);
			}
			else if (itemchance == 140) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��֮ӡ!");
			cm.gainItem(1012137, 1);
			}
			else if (itemchance == 141) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����!");
			cm.gainItem(1012159, 1);
			}
			else if (itemchance == 142) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �����۾�!");
			cm.gainItem(1022020, 1);
			}
			else if (itemchance == 143) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �ǹ��۾�!");
			cm.gainItem(1022075, 1);
			}
			else if (itemchance == 144) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �Ժ��۾�!");
			cm.gainItem(1022077, 1);
			}
			else if (itemchance == 145) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ������!");
			cm.gainItem(1022078, 1);
			}
			else if (itemchance == 146) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ī��!");
			cm.gainItem(1022083, 1);
			}
			else if (itemchance == 147) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �������!");
			cm.gainItem(1022084, 1);
			}
			else if (itemchance == 148) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �������!");
			cm.gainItem(1022085, 1);
			}
			else if (itemchance == 149) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �������!");
			cm.gainItem(1022086, 1);
			}
			else if (itemchance == 150) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �������!");
			cm.gainItem(1022087, 1);
			}
			else if (itemchance == 151) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �ϻ���!");
			cm.gainItem(1022090, 1);
			}
			else if (itemchance == 152) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ѩ������!");
			cm.gainItem(1032038, 1);
			}
			else if (itemchance == 153) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��������!");
			cm.gainItem(1032063, 1);
			}
			else if (itemchance == 154) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �������!");
			cm.gainItem(1032073, 1);
			}
			else if (itemchance == 155) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ������ɴ!"); 
			cm.gainItem(1000029, 1);
			}
			else if (itemchance == 156) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ĵ������!");
			cm.gainItem(1000034, 1);
			}
			else if (itemchance == 157) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �þ�!");
			cm.gainItem(1702214 , 1);
			}
			else if (itemchance == 158) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ͸��������!");
			cm.gainItem(1702230, 1);
			}
			else if (itemchance == 159) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �����ɴ!");
			cm.gainItem(1001043, 1);
			}
			else if (itemchance == 160) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���ུ���!");
			cm.gainItem(1702231, 1);
			}
			else if (itemchance == 161) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ñ��!");
			cm.gainItem(1001010, 1);
			}
			else if (itemchance == 162) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���ƴ���ñ!");
			cm.gainItem(1002266, 1);
			}
			else if (itemchance == 163) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ҡ��ñ!");
			cm.gainItem(1002299, 1);
			}
			else if (itemchance == 164) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ʹ֮��!");
			cm.gainItem(1002333, 1);
			}
                        else if (itemchance == 165) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���ڱ�!");
			cm.gainItem(1702215, 1);
			}
			else if (itemchance == 166) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����ñ!");
			cm.gainItem(1002451, 1);
			}
			else if (itemchance == 167) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ˮ�鷢��!");
			cm.gainItem(1002477, 1);
			}
			else if (itemchance == 168) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��Ģ������!");
			cm.gainItem(1002478, 1);
			}
			else if (itemchance == 169) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����ñ!");
			cm.gainItem(1002493, 1);
			}
			else if (itemchance == 170) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ������ë��ñ!");
			cm.gainItem(1002495, 1);
			}
			else if (itemchance == 171) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ͷ��!");
			cm.gainItem(1002498, 1);
			}
			else if (itemchance == 172) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���Ŷ���!");
			cm.gainItem(1002542, 1);
			}
			else if (itemchance == 173) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���!");
			cm.gainItem(1702233, 1);
			}
			else if (itemchance == 174) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����ͷ!");
			cm.gainItem(1002543, 1);
			}
			else if (itemchance == 175) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �Ϲ����!");
			cm.gainItem(1002544, 1);
			}
			else if (itemchance == 176) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ˮ��ñ!");
			cm.gainItem(1002545, 1);
			}
			else if (itemchance == 177) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ˮ��ñ!");
			cm.gainItem(1002546, 1);
			}
			else if (itemchance == 178) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ������!");
			cm.gainItem(1702238, 1);
			}
			else if (itemchance == 179) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��è���!");
			cm.gainItem(1002549, 1);
			}
			else if (itemchance == 180) {
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����ñ!"); 
			cm.gainItem(1002558, 1);
			}
			else if (itemchance == 181) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ƻ��ñ!");
			cm.gainItem(1002562, 1);
			}
			else if (itemchance == 182) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���ú�ɫСԲñ!");
			cm.gainItem(1002566, 1);
			}
			else if (itemchance == 183) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� а����!");
			cm.gainItem(1002581, 1);
			}
			else if (itemchance == 184) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��֮��!");
			cm.gainItem(1702216, 1);
			}
			else if (itemchance == 185) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� С��ñ!");
			cm.gainItem(1002596, 1);
			}
			else if (itemchance == 186) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ѩȮñ!");
			cm.gainItem(1002597, 1);
			}
			else if (itemchance == 187) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ѾѾ����Ȧ!");
			cm.gainItem(1702217, 1);
			}
			else if (itemchance == 188) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �˽�ñ!");
			cm.gainItem(1002607, 1);
			}
			else if (itemchance == 189) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �α�ñ!");
			cm.gainItem(1002653, 1);
			}
			else if (itemchance == 190) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� �����깽�����!");
			cm.gainItem(1002654, 1);
			}
			else if (itemchance == 191) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� С��ñ!");
			cm.gainItem(1002684, 1);
			}
			else if (itemchance == 192) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ݮñ!");
			cm.gainItem(1002685, 1);
			}
			else if (itemchance == 193) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����!");
			cm.gainItem(1702218, 1);
			}
			else if (itemchance == 194) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����ɡ!");
			cm.gainItem(1002726, 1);
			}
			else if (itemchance == 195) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� С���Ƿ���!");
			cm.gainItem(1002699, 1);
			}
			else if (itemchance == 196) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ʥ���Ϲ�ñ��!");
			cm.gainItem(1472028, 1);
			}
			else if (itemchance == 197) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� С�ܻ���!");
			cm.gainItem(1002722, 1);
			}
			else if (itemchance == 198) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ñ!");
			cm.gainItem(1002729, 1);
			}
			else if (itemchance == 199) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� С��!");
			cm.gainItem(1702178, 1);
			}
			else if (itemchance == 200) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ñ!");
			cm.gainItem(1002731, 1);
			}
			else if (itemchance == 201) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ΢Цñ!");
			cm.gainItem(1002735, 1);
			}
			else if (itemchance == 202) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����ñ!");
			cm.gainItem(1002736, 1);
			}
			else if (itemchance == 203) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���û���!");
			cm.gainItem(1002738, 1);
			}
			else if (itemchance == 204) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ��ñ!");
			cm.gainItem(1002742, 1);
			}
			else if (itemchance == 205) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ���Ƕ���!");
			cm.gainItem(1002747, 1);
			}
			else if (itemchance == 206) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����ñ!");
			cm.gainItem(1002759, 1);
			}
			else if (itemchance == 207) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ����ñ!");
			cm.gainItem(1002760, 1);
			}
			else if (itemchance == 208) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ��� ŷҮʤ������!");
			cm.gainItem(1002774, 1);
			}
			else if (itemchance == 209) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �ɰ�С����ñ��!");
			cm.gainItem(1002796, 1);
			}
			else if (itemchance == 210) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  С��ħ��!");
			cm.gainItem(1002820, 1);
			}
			else if (itemchance == 211) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����!");
			cm.gainItem(1002822, 1);
			}
			else if (itemchance == 212) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �׶�ͷ��!");
			cm.gainItem(1002823, 1);
			}
			else if (itemchance == 213) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002825, 1);
			}
			else if (itemchance == 214) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002826, 1);
			}
			else if (itemchance == 215) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002827, 1);
			}
			else if (itemchance == 216) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002828, 1);
			}
			else if (itemchance == 217) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002829, 1);
			}
			else if (itemchance == 218) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002830, 1);
			}
			else if (itemchance == 219) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002831, 1);
			}
			else if (itemchance == 220) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002832, 1);
			}
			else if (itemchance == 221) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002833, 1);
			}
			else if (itemchance == 222) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002834, 1);
			}
			else if (itemchance == 223) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002835, 1);
			}
			else if (itemchance == 224) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1002836, 1);
			}
			else if (itemchance == 225) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ������!");
			cm.gainItem(1002837, 1);
			}
			else if (itemchance == 226) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  С������!");
			cm.gainItem(1002840, 1);
			}
			else if (itemchance == 227) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  è��!");
			cm.gainItem(1002842, 1);
			}
			else if (itemchance == 228) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  è��!");
			cm.gainItem(1002843, 1);
			}
			else if (itemchance == 229) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  è��!");
			cm.gainItem(1002844, 1);
			}
			else if (itemchance == 230) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  С��������ñ!");
			cm.gainItem(1002845, 1);
			}
			else if (itemchance == 231) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���챴��ñ!");
			cm.gainItem(1002846, 1);
			}
			else if (itemchance == 232) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����ͷ��!");
			cm.gainItem(1002847, 1);
			}
			else if (itemchance == 233) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ������!");
			cm.gainItem(1002848, 1);
			}
			else if (itemchance == 234) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��è����è!");
			cm.gainItem(1002849, 1);
			}
			else if (itemchance == 235) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ʥ���췢��!");
			cm.gainItem(1002876, 1);
			}
			else if (itemchance == 236) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ţţ����ñ!");
			cm.gainItem(1002877, 1);
			}
			else if (itemchance == 237) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����������ñ!");
			cm.gainItem(1002878, 1);
			}
			else if (itemchance == 238) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �ڷ羵!");
			cm.gainItem(1002882, 1);
			}
			else if (itemchance == 239) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ȭ������!");
			cm.gainItem(1702219, 1);
			}
			else if (itemchance == 240) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ˿������!");
			cm.gainItem(1002888, 1);
			}
			else if (itemchance == 241) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ͸����!");
			cm.gainItem(1702220, 1);
			}
			else if (itemchance == 242) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ˿������!");
			cm.gainItem(1002890, 1);
			}
			else if (itemchance == 243) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �ۺ�����!");
			cm.gainItem(1702220, 1);
			}
			else if (itemchance == 244) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ˿������!");
			cm.gainItem(1002892, 1);
			}
			else if (itemchance == 245) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���ڹ�!");
			cm.gainItem(1702222, 1);
			}
			else if (itemchance == 246) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ʱ�з�ɫͷ��!");
			cm.gainItem(1002903, 1);
			}
			else if (itemchance == 247) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���и���ñ!");
			cm.gainItem(1002907, 1);
			}
			else if (itemchance == 248) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����ñ!");
			cm.gainItem(1002912, 1);
			}
			else if (itemchance == 249) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ������!");
			cm.gainItem(1002913, 1);
			}
			else if (itemchance == 250) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �̻���!");
			cm.gainItem(1702223, 1);
			}
			else if (itemchance == 251) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ɫ��ʿñ!");
			cm.gainItem(1002921, 1);
			}
			else if (itemchance == 252) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ������ͷñ!");
			cm.gainItem(1002923, 1);
			}
			else if (itemchance == 253) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����ñ!");
			cm.gainItem(1002928, 1);
			}
			else if (itemchance == 254) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �Ųʰٴ�ñ!");
			cm.gainItem(1002929, 1);
			}
			else if (itemchance == 255) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �������ñ!");
			cm.gainItem(1002930, 1);
			}
			else if (itemchance == 256) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����ñ!");
			cm.gainItem(1002936, 1);
			}
			else if (itemchance == 257) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ͸������!");
			cm.gainItem(1702224, 1);
			}
			else if (itemchance == 258) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �۷�ͷ��!");
			cm.gainItem(1002944, 1);
			}
			else if (itemchance == 259) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �ĵ��Ӧñ!");
			cm.gainItem(1002945, 1);
			}
			else if (itemchance == 260) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �ɿ����㽶!");
			cm.gainItem(1702228, 1);
			}
			else if (itemchance == 261) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����Ȧ!");
			cm.gainItem(1002951, 1);
			}
			else if (itemchance == 262) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����Ȧ!");
			cm.gainItem(1002952, 1);
			}
			else if (itemchance == 263) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ñ!");
			cm.gainItem(1002953, 1);
			}
			else if (itemchance == 264) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  Ʒ����ñ��!");
			cm.gainItem(1002957, 1);
			}
			else if (itemchance == 265) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���ڻʹ�!");
			cm.gainItem(1002960, 1);
			}
			else if (itemchance == 266) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �����˷���!");
			cm.gainItem(1002961, 1);
			}
			else if (itemchance == 267) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ĵ������!");
			cm.gainItem(1002962, 1);
			}
			else if (itemchance == 268) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���ñ��!");
			cm.gainItem(1002968, 1);
			}
			else if (itemchance == 269) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  С�ƹ���Ȧ!");
			cm.gainItem(1002969, 1);
			}
			else if (itemchance == 270) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����!");
			cm.gainItem(1002973, 1);
			}
			else if (itemchance == 271) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ɫ��ʨñ!");
			cm.gainItem(1002974, 1);
			}
			else if (itemchance == 272) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ķ����!");
			cm.gainItem(1002976, 1);
			}
			else if (itemchance == 273) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��è��!");
			cm.gainItem(1002978, 1);
			}
			else if (itemchance == 274) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �����ͷ��!");
			cm.gainItem(1002979, 1);
			}
			else if (itemchance == 275) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ʹ֮��!");
			cm.gainItem(1002983, 1);
			}
			else if (itemchance == 276) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���껪ñ!");
			cm.gainItem(1002984, 1);
			}
			else if (itemchance == 277) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �������˽�!");
			cm.gainItem(1102060, 1);
			}
			else if (itemchance == 278) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1102062, 1);
			}
			else if (itemchance == 279) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ʥ������!");
			cm.gainItem(1102065, 1);
			}
			else if (itemchance == 280) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  аħ����!");
			cm.gainItem(1102066, 1);
			}
			else if (itemchance == 281) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ɫ��ͯ��!");
			cm.gainItem(1102070, 1);
			}
			else if (itemchance == 282) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  Ѽ�ޱ�!");
			cm.gainItem(1102077, 1);
			}
			else if (itemchance == 283) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ɫ��ͯ��!");
			cm.gainItem(1102088, 1);
			}
			else if (itemchance == 284) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ɫ��ͯ��!");
			cm.gainItem(1102089, 1);
			}
			else if (itemchance == 285) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ɫ��ͯ��!");
			cm.gainItem(1102090, 1);
			}
			else if (itemchance == 289) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1102093, 1);
			}
			else if (itemchance == 290) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����β��!");
			cm.gainItem(1102094, 1);
			}
			else if (itemchance == 291) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �����!");
			cm.gainItem(1102107, 1);
			}
			else if (itemchance == 292) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �ⵣˮͰ���!");
			cm.gainItem(1102143, 1);
			}
			else if (itemchance == 293) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �����ú�����!");
			cm.gainItem(1102152, 1);
			}
			else if (itemchance == 294) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1702229, 1);
			}
			else if (itemchance == 295) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ɫ��ʹ����!");
			cm.gainItem(1102169, 1);
			}
			else if (itemchance == 296) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  3��������!");
			cm.gainItem(1102171, 1);
			}
			else if (itemchance == 297) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �ɰ�С��������!");
			cm.gainItem(1102175, 1);
			}
			else if (itemchance == 298) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ʹ֮��!");
			cm.gainItem(1102184, 1);
			}
			else if (itemchance == 299) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��èè˫���!");
			cm.gainItem(1102186, 1);
			}
			else if (itemchance == 300) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����β��!");
			cm.gainItem(1102187, 1);
			}
			else if (itemchance == 301) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����β��!");
			cm.gainItem(1102188, 1);
			}
			else if (itemchance == 302) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����ʵ�!");
			cm.gainItem(1102199, 1);
			}
			else if (itemchance == 303) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �������!");
			cm.gainItem(1102202, 1);
			}
			else if (itemchance == 304) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �����!");
			cm.gainItem(1102203, 1);
			}
			else if (itemchance == 305) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  õ���!");
			cm.gainItem(1102204, 1);
			}
			else if (itemchance == 306) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �۷�ƨ��!");
			cm.gainItem(1102210, 1);
			}
			else if (itemchance == 307) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����!");
			cm.gainItem(1102211, 1);
			}
			else if (itemchance == 308) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  Сǿ����!");
			cm.gainItem(1102212, 1);
			}
			else if (itemchance == 309) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  Ʒ���͵�Сβ��!");
			cm.gainItem(1102213, 1);
			}
			else if (itemchance == 310) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  Ʒ��������!");
			cm.gainItem(1102214, 1);
			}
			else if (itemchance == 311) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����!");
			cm.gainItem(1102215, 1);
			}
			else if (itemchance == 312) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��β��!");
			cm.gainItem(1102216, 1);
			}
			else if (itemchance == 313) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����β!");
			cm.gainItem(1102217, 1);
			}
			else if (itemchance == 314) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���   ��ŮƮƮ!");
			cm.gainItem(1102218, 1);
			}
			else if (itemchance == 315) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  4��������!");
			cm.gainItem(1102219, 1);
			}
			else if (itemchance == 316) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �ҽ�!");
			cm.gainItem(1102222, 1);
			}
			else if (itemchance == 317) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��֮β!");
			cm.gainItem(1102223, 1);
			}
			else if (itemchance == 318) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ˮϴ����ţ�п�!");
			cm.gainItem(1062076, 1);
			}
			else if (itemchance == 319) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��̲�����ָ!");
			cm.gainItem(1112803, 1);
			}
			else if (itemchance == 320) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �ɿ��������ָ!");
			cm.gainItem(1112806, 1);
			}
			else if (itemchance == 321) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �ۺ��ǹ������ָ!");
			cm.gainItem(1112807, 1);
			}
			else if (itemchance == 322) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ������Ļ��ƽ�ָ!");
			cm.gainItem(1112905, 1);
			}
			else if (itemchance == 323) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����ף����ָ!");
			cm.gainItem(1112906, 1);
			}
			else if (itemchance == 324) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  С���ָ!");
			cm.gainItem(1112907, 1);
			}
			else if (itemchance == 325) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����!");
			cm.gainItem(1092032, 1);
			}
			else if (itemchance == 326) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  а�����ս��!");
			cm.gainItem(1092034, 1);
			}
			else if (itemchance == 327) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����ս��!");
			cm.gainItem(1092035, 1);
			}
			else if (itemchance == 328) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���!");
			cm.gainItem(1092043, 1);
			}
			else if (itemchance == 329) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �޵�ʯ�����!");
			cm.gainItem(1092053, 1);
			}
			else if (itemchance == 330) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ͸����!");
			cm.gainItem(1092064, 1);
			}
			else if (itemchance == 331) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ֹ���̶�!");
			cm.gainItem(1092063, 1);
			}
			else if (itemchance == 332) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ʽľ��!");
			cm.gainItem(1070002, 1);
			}
			else if (itemchance == 333) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ������!");
			cm.gainItem(1072257 , 1);
			}
			else if (itemchance == 334) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  С����!");
			cm.gainItem(1072259 , 1);
			}
			else if (itemchance == 335) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �����!");
			cm.gainItem(1072260 , 1);
			}
			else if (itemchance == 336) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ɫ����Ь!");
			cm.gainItem(1072276, 1);
			}
			else if (itemchance == 337) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ʥ��¹��Ь!");
			cm.gainItem(1072278 , 1);
			}
			else if (itemchance == 338) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �������Ь!");
			cm.gainItem(1072281 , 1);
			}
			else if (itemchance == 339) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ҮĪ�ص�Ь!");
			cm.gainItem(1072282 , 1);
			}
			else if (itemchance == 340) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��Ŭ˹��Ь!");
			cm.gainItem(1072283, 1);
			}
			else if (itemchance == 341) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���Ь!");
			cm.gainItem(1072322 , 1);
			}
			else if (itemchance == 342) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ������Ь!");
			cm.gainItem(1072323 , 1);
			}
			else if (itemchance == 343) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ������!");
			cm.gainItem(1072324 , 1);
			}
			else if (itemchance == 344) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ˮ����Ь!");
			cm.gainItem(1072326 , 1);
			}
			else if (itemchance == 345) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����Ь!");
			cm.gainItem(1072336 , 1);
			}
			else if (itemchance == 346) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ϲ������Ь!");
			cm.gainItem(1072337 , 1);
			}
			else if (itemchance == 347) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���ུ�����!");
			cm.gainItem(1072348, 1);
			}
			else if (itemchance == 348) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����Ь!");
			cm.gainItem(1072384, 1);
			}
			else if (itemchance == 349) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����Ь!");
			cm.gainItem(1072385, 1);
			}
			else if (itemchance == 350) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ɫľ��!");
			cm.gainItem(1072386 , 1);
			}
			else if (itemchance == 351) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����Ь!");
			cm.gainItem(1072407, 1);
			}
			else if (itemchance == 352) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �����!");
			cm.gainItem(1702072, 1);
			}
			else if (itemchance == 353) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ɫǦ��!");
			cm.gainItem(1702087, 1);
			}
			else if (itemchance == 354) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü������  ͬ�ں�ɡ��!");
			cm.gainItem(3010044, 1);
			}
			else if (itemchance == 355) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����!");
			cm.gainItem(1702095, 1);
			}
			else if (itemchance == 356) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1082169, 1);
			}
			else if (itemchance == 357) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���ӱ�!");
			cm.gainItem(1082170, 1);
			}
			else if (itemchance == 358) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���ӱ�!");
			cm.gainItem(1082171, 1);
			}
			else if (itemchance == 359) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �������!");
			cm.gainItem(1082172, 1);
			}
			else if (itemchance == 360) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��Ե����!");
			cm.gainItem(1082173, 1);
			}
			else if (itemchance == 361) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1082224, 1);
			}
			else if (itemchance == 362) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1082225, 1);
			}
			else if (itemchance == 363) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����������!");
			cm.gainItem(1082227, 1);
			}
			else if (itemchance == 364) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ƮƮ������!");
			cm.gainItem(1082229, 1);
			}
			else if (itemchance == 365) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ������Ʒ����!");
			cm.gainItem(1082231, 1);
			}
			else if (itemchance == 366) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ţţ������!");
			cm.gainItem(1082233, 1);
			}
			else if (itemchance == 367) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �ɰ�С��������!");
			cm.gainItem(1082247, 1);
			}
			else if (itemchance == 368) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ӫ����������!");
			cm.gainItem(1082249, 1);
			}
			else if (itemchance == 369) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��������!");
			cm.gainItem(1082250, 1);
			}
			else if (itemchance == 370) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �������!");
			cm.gainItem(1082251, 1);
			}
			else if (itemchance == 371) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ˮϴ����ţ�п�!");
			cm.gainItem(1050065, 1);
			}
			else if (itemchance == 372) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ʥ����!");
			cm.gainItem(3010048 , 1);
			}
			else if (itemchance == 373) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  �������䷢�� !");
			cm.gainItem(1002812 , 1);
			}
			else if (itemchance == 374) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ʥ����!");
			cm.gainItem(1702100 , 1);
			}
			else if (itemchance == 375) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ѩƬΧ��!");
			cm.gainItem(1102196 , 1);
			}
			else if (itemchance == 376) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �й��ᣨ�죩!");
			cm.gainItem(1702116, 1);
			}
			else if (itemchance == 377) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �й��ᣨ����!");
			cm.gainItem(1702117, 1);
			}
			else if (itemchance == 378) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��Ŭ˹֮�� !");
			cm.gainItem(1702118, 1);
			}
			else if (itemchance == 379) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �����֮��!");
			cm.gainItem(1702119, 1);
			}
			else if (itemchance == 380) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ��ҮĪ��֮��!");
			cm.gainItem(1702120 , 1);
			}
			else if (itemchance == 381) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ��ùЧ��!");
			cm.gainItem(4290001 , 1);
			}
			else if (itemchance == 382) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �������İ�!");
			cm.gainItem(1702125 , 1);
			}
			else if (itemchance == 383) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ��ϲ������!");
			cm.gainItem(1702133 , 1);
			}
			else if (itemchance == 384) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����ȭ!");
			cm.gainItem(1102197 , 1);
			}
			else if (itemchance == 385) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ѩ֮��!");
			cm.gainItem(1702136 , 1);
			}
			else if (itemchance == 386) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ѾѾ����Ȧ!");
			cm.gainItem(1702137 , 1);
			}
			else if (itemchance == 387) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  �𻪻���!");
			cm.gainItem(1702138 , 1);
			}
			else if (itemchance == 388) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����ȭ��!");
			cm.gainItem(1702139 , 1);
			}
			else if (itemchance == 389) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ͯ�����ǧ!");
			cm.gainItem(3010036 , 1);
			}
			else if (itemchance == 390) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ��֮���!");
			cm.gainItem(1092062 , 1);
			}
			else if (itemchance == 391) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ��ˮ��!");
			cm.gainItem(1102208 , 1);
			}
			else if (itemchance == 392) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ������ָ!");
			cm.gainItem(1702167 , 1);
			}
			else if (itemchance == 393) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ����ʥ����!");
			cm.gainItem(1702168 , 1);
			}
			else if (itemchance == 394) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е� ���Ļ��ƽ�ָ!");
			cm.gainItem(1112902 , 1);
			}
			else if (itemchance == 395) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ���ȭ��!");
			cm.gainItem(1702170 , 1);
			}
			else if (itemchance == 396) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ������ɳ̲��Ь!");
			cm.gainItem(1072360 , 1);
			}
			else if (itemchance == 397) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  �ױ�����!");
			cm.gainItem(1702187 , 1);
			}
			else if (itemchance == 398) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ü���ϡ�е�  ��֮С��!");
			cm.gainItem(1702203 , 1);
			}
			else if (itemchance == 399) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����þ���  ɱ���!");
			cm.gainItem(1702177, 1);
			}
			else if (itemchance >= 400) { 
cm.serverNotice("���߼��ٱ��䡻����ϲ"+ cm.getChar().getName() +"����ô�˵�е�  ����ƱN��!!!");
			cm.gainItem(4110010, itemamount);
			}





                        cm.dispose();



} else if(typed==98600000){
typed=98600100;
 if (selection == 1) {
				beauty = 1;
				hairnew = Array();
				for(var i = 0; i < hair.length; i++) {
					hairnew.push(hair[i] + parseInt(cm.getChar().getHair()
 % 10));
				}
				cm.sendStyle("ѡ����ϲ����?", hairnew);
			} else if (selection == 2) {
				beauty = 2;
				haircolor = Array();
				var current = parseInt(cm.getChar().getHair()
/10)*10;
				for(var i = 0; i < 8; i++) {
					haircolor.push(current + i);
				}
				cm.sendStyle("ѡ����ϲ����?", haircolor);

}


} else if(typed==98500000){


if (selection == 1) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newStr = p.getRemainingAp() + p.getStr();
var newDex = p.getRemainingAp() + p.getDex();
var newInt = p.getRemainingAp() + p.getInt();
var newLuk = p.getRemainingAp() + p.getLuk();
if (newStr < 30000) {
p.setStr(30000);
p.setDex(30000);
p.setInt(30000);
p.setLuk(30000);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#e#d�ɹ������#r ��������#d �Ѿ�����Ϊ30000!");
cm.dispose();
} else if (newStr >= 30000) {

cm.sendOk ("#e�Բ������ #r���� #d�Ѿ�����30000����������");
cm.dispose();

} else if (newDex >= 30000) {

cm.sendOk ("#e�Բ������ #r���� #d�Ѿ�����30000����������");
cm.dispose();

} else if (newInt >= 30000) {

cm.sendOk ("#e�Բ������ #r���� #d�Ѿ�����30000����������");
cm.dispose();

} else if (newLuk >= 30000) {

cm.sendOk ("#e�Բ������ #r���� #d�Ѿ�����30000����������");
cm.dispose();
}



}else if (selection == 2) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newStr = p.getRemainingAp() + p.getStr();

if (newStr < 30000) {
p.setStr(30000);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.STR, java.lang.Integer.valueOf(p.getStr())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("�ɹ�����������Ѿ�����Ϊ30000!");
cm.dispose();
} else if (newStr >= 30000) {

cm.sendOk ("�Բ�����������Ѿ�����30000����������");
cm.dispose();
}


}else if (selection == 3) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();
var newDex = p.getRemainingAp() + p.getDex();

if (newDex < 30000) {
p.setDex(30000);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.DEX, java.lang.Integer.valueOf(p.getDex())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#e#d�ɹ������#r ����#d �Ѿ�����Ϊ30000!");
cm.dispose();

} else if (newDex >= 30000) {

cm.sendOk ("#e�Բ������ #r���� #d�Ѿ�����30000����������");
cm.dispose();

}


}else if (selection == 4) {

var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();

var newInt = p.getRemainingAp() + p.getInt();

if (newInt < 30000) {

p.setInt(30000);

p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.INT, java.lang.Integer.valueOf(p.getInt())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#e#d�ɹ������#r ����#d �Ѿ�����Ϊ30000!");
cm.dispose();


} else if (newInt >= 30000) {

cm.sendOk ("#e�Բ������ #r���� #d�Ѿ�����30000����������");
cm.dispose();

}
}else if (selection == 5) {
var statup = new java.util.ArrayList();
var p = cm.c.getPlayer();

var newLuk = p.getRemainingAp() + p.getLuk();
if (newLuk < 30000) {

p.setLuk(30000);
p.setRemainingAp (0);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.LUK, java.lang.Integer.valueOf(p.getLuk())));
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(0)));
                    p.getClient().getSession().write (net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.sendOk ("#e#d�ɹ������#r ����#d �Ѿ�����Ϊ30000!");
cm.dispose();

} else if (newLuk >= 30000) {

cm.sendOk ("#e�Բ������ #r���� #d�Ѿ�����30000����������");
cm.dispose();
}




}


} else if(typed==55100){
if (selection == 55101) {
typed=551010;
var String = "#r#e\r\n���������������T��ǿ��װ���﹥��T��������������\r\n#n#d������ѡ�����#r#eǿ��װ����������#n#d\r\n#dǿ������˵������Ҫ#r#e10#n#d���µ���ʯ(#v4250000#)\r\n#d��Ŀǰ��#e#r " + cm.getDonatorPoints() + "#n#d�����.\r\n#rǿ����   #eװ������������  #n����   #e111  #n.\r\n��ѡ������Ҫǿ����װ����\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55102) {
typed=551020;
var String = "#r#e\r\n���������������T��ǿ��װ��ħ����T��������������\r\n#n#d������ѡ�����#r#eǿ��װ��ħ��������#n#d\r\n#dǿ������˵������Ҫ#r#e10#n#d���µ�����ʯ(#v4250100#)\r\n#d��Ŀǰ��#e#r " + cm.getDonatorPoints() + "#n#d�����.\r\n#rǿ����   #eװ��ħ����������  #n����   #e111  #n.\r\n��ѡ������Ҫǿ����װ����\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55103) {
typed=551030;
var String = "#r#e\r\n�������������T��ǿ��װ��������������T����������\r\n#n#d������ѡ�����#r#eǿ��װ������������#n#d\r\n#dǿ������˵������Ҫ#r#e10#n#d���µȺ�ˮ��(#v4251300#)\r\n#d��Ŀǰ��#e#r " + cm.getDonatorPoints() + "#n#d�����.\r\n#rǿ����   #eװ������������  #n����   #e10  #n.\r\n��ѡ������Ҫǿ����װ����\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55104) {
typed=551040;
var String = "#r#e\r\n�������������T��ǿ��װ���������ԡ�T������������\r\n#n#d������ѡ�����#r#eǿ��װ����������#n#d\r\n#dǿ������˵������Ҫ#r#e10#n#d���µ�����ˮ��(#v4250800#)\r\n#d��Ŀǰ��#e#r " + cm.getDonatorPoints() + "#n#d�����.\r\n#rǿ����   #eװ����������  #n����   #e111  #n.\r\n��ѡ������Ҫǿ����װ����\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55105) {
typed=551050;
var String = "#r#e\r\n�������������T��ǿ��װ���������ԡ�T������������\r\n#n#d������ѡ�����#r#eǿ��װ����������#n#d\r\n#dǿ������˵������Ҫ#r#e10#n#d���µ�������ˮ��(#v4251100#)\r\n#d��Ŀǰ��#e#r " + cm.getDonatorPoints() + "#n#d�����.\r\n#rǿ����   #eװ����������  #n����   #e111  #n.\r\n��ѡ������Ҫǿ����װ����\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55106) {
typed=551060;
var String = "#r#e\r\n�������������T��ǿ��װ���������ԡ�T������������\r\n#n#d������ѡ�����#r#eǿ��װ����������#n#d\r\n#dǿ������˵������Ҫ#r#e10#n#d���µ����ǻ�ˮ��(#v4250900#)\r\n#d��Ŀǰ��#e#r " + cm.getDonatorPoints() + "#n#d�����.\r\n#rǿ����   #eװ����������  #n����   #e111  #n.\r\n��ѡ������Ҫǿ����װ����\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));

}else if (selection == 55107) {
typed=551070;
var String = "#r#e\r\n�������������T��ǿ��װ���������ԡ�T������������\r\n#n#d������ѡ�����#r#eǿ��װ����������#n#d\r\n#dǿ������˵������Ҫ#r#e10#n#d���µ�������ˮ��(#v4251000#)\r\n#d��Ŀǰ��#e#r " + cm.getDonatorPoints() + "#n#d�����.\r\n#rǿ����   #eװ����������  #n����   #e111  #n.\r\n��ѡ������Ҫǿ����װ����\r\n";
cm.sendSimple(String+cm.EquipList(cm.getC()));



}

} else if(typed==100121){
if (beauty == 11){
				cm.setSkin(skin[selection]);
			}
			if (beauty == 12){
				cm.setHair(hairnew[selection]);
			}
			if (beauty == 13){
				cm.setHair(haircolor[selection]);
			}
			if (beauty == 14){
				cm.setFace(facenew[selection]);
			}
			if (beauty == 15){
				cm.setFace(colors[selection]);
			}



} else if(typed==100111){
if (beauty == 6){
				cm.setSkin(skin[selection]);
			}
			if (beauty == 7){
				cm.setHair(hairnew[selection]);
			}
			if (beauty == 8){
				cm.setHair(haircolor[selection]);
			}
			if (beauty == 9){
				cm.setFace(facenew[selection]);
			}
			if (beauty == 10){
				cm.setFace(colors[selection]);
			}


} else if(typed==98400000){
if (selection == 1) {
cm.gainItem(1002140,1);
cm.gainItem(1042003,1);
cm.gainItem(1062007,1);
cm.gainItem(1322013,1);
cm.sendOk("��ȡ�ɹ���");
cm.dispose();
}else if (selection == 2) {
cm.gainItem(1702211,1);
cm.gainItem(1702299,1);
cm.gainItem(1002667,1);
cm.gainItem(1032053,1);
cm.gainItem(1012028,1);
cm.gainItem(1051155,1);
cm.gainItem(1071020,1);
cm.gainItem(1051154,1);
cm.gainItem(1071007,1);
cm.gainItem(1112116,1);
cm.gainItem(1112226,1);
cm.gainItem(1082102,1);
cm.gainItem(1102184,1);
cm.gainItem(1051073,1);
cm.gainItem(1402063,1);
cm.sendOk("��ȡ�ɹ���");
cm.dispose();
}else if (selection == 3) {
cm.gainItem(1302080,1);
cm.gainItem(1302081,1);
cm.gainItem(1402046,1);
cm.gainItem(1382057,1);
cm.gainItem(1032019,1);
cm.gainItem(1902024,1);
cm.gainItem(1912017,1);
cm.gainItem(1902025,1);
cm.gainItem(1912018,1);
cm.sendOk("��ȡ�ɹ���");
cm.dispose();


}else if (selection == 4) {
cm.gainItem(3010018,1);
cm.gainItem(3010014,1);
cm.gainItem(3010048,1);
cm.gainItem(3012003,1);
cm.gainItem(3010045,1);
cm.gainItem(3010068,1);
cm.gainItem(3010048,1);
cm.gainItem(3010106,1);
cm.gainItem(3010044,1);
cm.gainItem(3010036,1);
cm.gainItem(3010025,1);
cm.gainItem(3010146,1);
cm.gainItem(3010145,1);
cm.sendOk("��ȡ�ɹ���");
cm.dispose();

}else if (selection == 5) {
cm.gainItem(1402061,1);
cm.sendOk("��ȡ�ɹ���");
cm.dispose();
}else if (selection == 6) {
cm.gainItem(1002140,1);
cm.gainItem(1042003,1);
cm.gainItem(1062007,1);
cm.gainItem(1322013,1);

cm.gainItem(1002667,1);
cm.gainItem(1032053,1);
cm.gainItem(1012028,1);
cm.gainItem(1051155,1);
cm.gainItem(1071020,1);
cm.gainItem(1051154,1);
cm.gainItem(1071007,1);
cm.gainItem(1112116,1);
cm.gainItem(1112226,1);
cm.gainItem(1082102,1);
cm.gainItem(1102184,1);
cm.gainItem(1051073,1);
cm.gainItem(1402063,1);


cm.gainItem(1302080,1);
cm.gainItem(1302081,1);
cm.gainItem(1402046,1);
cm.gainItem(1382057,1);
cm.gainItem(1032019,1);

cm.gainItem(3010018,1);
cm.gainItem(3010014,1);
cm.gainItem(3010048,1);
cm.gainItem(3012003,1);
cm.gainItem(3010045,1);
cm.gainItem(3010068,1);
cm.gainItem(3010048,1);
cm.gainItem(3010106,1);
cm.gainItem(3010044,1);
cm.gainItem(3010036,1);
cm.gainItem(3010025,1);
cm.gainItem(3010146,1);
cm.gainItem(3010145,1);

cm.gainItem(1402061,1);

cm.gainItem(2000005,2000);
cm.gainItem(2050004,500);
cm.sendOk("��ȡ�ɹ���");
cm.dispose();


}

} else if(typed==98300000){


if (selection == 1) {
cm.changeJob(MapleJob.SUPERGM);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 2) {
cm.changeJob(MapleJob.GM);
cm.sendOk("תְ�ɹ���");
cm.dispose();


}else if (selection == 3) {
cm.changeJob(MapleJob.HERO);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 4) {
cm.changeJob(MapleJob.NIGHTLORD);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 5) {
cm.changeJob(MapleJob.SHADOWER);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 6) {
cm.changeJob(MapleJob.BISHOP);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 7) {
cm.changeJob(MapleJob.FP_ARCHMAGE);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 8) {
cm.changeJob(MapleJob.IL_ARCHMAGE);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 9) {
cm.changeJob(MapleJob.DARKKNIGHT);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 10) {
cm.changeJob(MapleJob.PALADIN);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 11) {
cm.changeJob(MapleJob.BOWMASTER);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 12) {
cm.changeJob(MapleJob.MARKSMAN);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 13) {
cm.changeJob(MapleJob.BUCCANEER);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}else if (selection == 14) {
cm.changeJob(MapleJob.CORSAIR);
cm.sendOk("תְ�ɹ���");
cm.dispose();
}



} else if(typed==98200000){

if (selection == 1) {
cm.setVip(5);
cm.sendOk("�����ɹ���");
cm.dispose();
}else if (selection == 2) {
cm.setVip(4);
cm.sendOk("�����ɹ���");
cm.dispose();
}else if (selection == 3) {
cm.setVip(3);
cm.sendOk("�����ɹ���");
cm.dispose();
}else if (selection == 4) {
cm.setVip(2);
cm.sendOk("�����ɹ���");
cm.dispose();
}else if (selection == 5) {
cm.setVip(1);
cm.sendOk("�����ɹ���");
cm.dispose();
}













} else if(typed==6161){
if (cm.getDonatorPoints() >= 1) {
itemname = cm.getText();
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setOwner(itemname);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-1);
cm.sendOk("�ɹ��޸�װ�����֣�");
cm.dispose();
}else{
cm.sendOk("��û���㹻�������");
cm.dispose();
}



} else if(typed==6131){
typed=6133;
slot = selection;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
if (item==0) {
cm.sendOk("���������Ʒλ��û��װ��!")
cm.dispose();
}
else
cm.sendYesNo("��ȷ��Ҫ�����������װ����?\r\n#v"+item.getItemId()+"")


} else if (typed==6132) {
if (cm.getDonatorPoints() < zbjs) {
cm.sendOk("#d��û��#r"+zbjs+"#d�����,�����Ҳ��ܰ������"); 
cm.dispose();
}else{
typed=6134;
slot = selection;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
if (item==0) {
cm.sendOk("���������Ʒλ��û��װ��!")
cm.dispose();
} else
cm.sendYesNo("��ȷ��Ҫ�����������װ����?\r\n#v"+item.getItemId()+"")

}




} else if(typed==6111){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b�����Ҿ������Ҫ#r"+needap+"#b����ֵ,��������ֵ����!");
cm.dispose();
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d����װ������������Ҫ#r"+needyyb+"#d�������,�������Ҳ���!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d����װ������������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
}
else if (!cm.haveItem(4021008,10)) {
cm.sendOk("��ı�����û��#r10#k����ˮ��(#v4021008#)");
cm.dispose();
}
else
{
if (playernumber <= 1) {
cm.gainItem(4021008,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d����װ����������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣����оͲ���ȡ������ˡ�#dף���´κ���!");
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}
else if (playernumber >= 2) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
cm.gainItem(4021008,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
}
else if (playernumber == 2) {
cm.gainItem(4021008,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d����װ����������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ�������,Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ����ˡ�#dף���´κ���!");
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}
else if (playernumber == 3) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
cm.gainItem(4021008,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
}
else if (playernumber >= 3) {
cm.gainItem(4021008,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d����װ����������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣����оͲ���ȡ������ˡ�#dף���´κ���!");
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();
}
else if (playernumber == 4) {
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
cm.gainItem(4021008,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
item.setUpgradeSlots((item.getUpgradeSlots() + 1));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!");
cm.dispose();
}
}


} else if(typed==6101){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ��ħ��������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b����װ��ħ��������Ҫ#r"+needsp+"#b�㼼��ֵ,��ʣ��ļ���ֵ����!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d����װ��ħ����Ҫ#r"+needyyb+"#d�������,�������Ҳ���!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d����װ��ħ����Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
}
else if (!cm.haveItem(4011005,10)) {
cm.sendOk("��ı�����û��#r10#k�����ʯ(#v4011005#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011005,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setMdef(item.getMdef() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,����ħ�������ɹ�.\r\n�Ҿ����-1,ħ��������10!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011005,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d����װ��ħ��ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣����оͲ���ȡ������ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011005,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d����װ��ħ��ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ�������,Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ����ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011005,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setMdef(item.getMdef() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,����ħ�������ɹ�.\r\n�Ҿ����-1,ħ��������10!");
cm.dispose();
}
}


} else if(typed==6091){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ�����������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b����װ�����������Ҫ#r"+needsp+"#b�㼼��ֵ,��ʣ��ļ���ֵ����!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d����װ�������Ҫ#r"+needyyb+"#d�������,�������Ҳ���!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d����װ�������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
}
else if (!cm.haveItem(4011003,10)) {
cm.sendOk("��ı�����û��#r10#k�����ʯ(#v4011003#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011003,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d����װ�����ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ�������,Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ����ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011003,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d����װ�����ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ������ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011003,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setWdef(item.getWdef() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,������������ɹ�.\r\n�Ҿ����-1,���������10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4011003,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setWdef(item.getWdef() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,������������ɹ�.\r\n�Ҿ����-1,���������10!");
cm.dispose();
}
}



} else if(typed==6081){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ���������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b����װ���������Ҫ#r"+needsp+"#b�㼼��ֵ,��ʣ��ļ���ֵ����!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d����װ��������Ҫ#r"+needyyb+"#d�������,�������Ҳ���!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d����װ��������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
}
else if (!cm.haveItem(4021004,10)) {
cm.sendOk("��ı�����û��#r10#k��ʯ��ʯ(#v4021004#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021004,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d����װ�����ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ�������,Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ����ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021004,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d����װ������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ������ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021004,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setAvoid(item.getAvoid() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,���Ӷ���ʳɹ�.\r\n�Ҿ����-1,����ʼ�10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021004,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setAvoid(item.getAvoid() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,���Ӷ���ʳɹ�.\r\n�Ҿ����-1,����ʼ�10!");
cm.dispose();
}
}


} else if(typed==6071){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ����������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b����װ����������Ҫ#r"+needsp+"#b�㼼��ֵ,��ʣ��ļ���ֵ����!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d����װ��������Ҫ#r"+needyyb+"#d�������,�������Ҳ���!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d����װ��������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
}
else if (!cm.haveItem(4021000,10)) {
cm.sendOk("��ı�����û��#r10#k��ʯ��ʯ(#v4021000#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021000,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d����װ������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ�������,Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ����ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021000,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d����װ������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ������ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021000,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setAcc(item.getAcc() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,���������ʳɹ�.\r\n�Ҿ����-1,�����ʼ�10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021000,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setAcc(item.getAcc() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,���������ʳɹ�.\r\n�Ҿ����-1,�����ʼ�10!");
cm.dispose();
}
}



} else if(typed==6061){

if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ��������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b����װ��������Ҫ#r"+needsp+"#b�㼼��ֵ,��ʣ��ļ���ֵ����!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d����װ��������Ҫ#r"+needyyb+"#d�������,�������Ҳ���!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d����װ��������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
}
else if (!cm.haveItem(4005003,10)) {
cm.sendOk("��ı�����û��#r10#k������ˮ��(#v4005003#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005003,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d����װ������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ�������,Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ����ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005003,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d����װ������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ������ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005003,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setLuk(item.getLuk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,���������ɹ�.\r\n�Ҿ����-1,������10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005003,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setLuk(item.getLuk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,���������ɹ�.\r\n�Ҿ����-1,������10!");
cm.dispose();
}
}

} else if(typed==6051){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ��������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b����װ��������Ҫ#r"+needsp+"#b�㼼��ֵ,��ʣ��ļ���ֵ����!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d����װ��������Ҫ#r"+needyyb+"#d�������,�������Ҳ���!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d����װ��������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
}
else if (!cm.haveItem(4005001,10)) {
cm.sendOk("��ı�����û��#r10#k���ǻ�ˮ��(#v4005001#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005001,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d����װ������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ�������,Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ����ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005001,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d����װ������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ������ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005001,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setInt(item.getInt() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,���������ɹ�.\r\n�Ҿ����-1,������10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005001,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setInt(item.getInt() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,���������ɹ�.\r\n�Ҿ����-1,������10!");
cm.dispose();
}
}


} else if(typed==6041){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ��������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b����װ��������Ҫ#r"+needsp+"#b�㼼��ֵ,��ʣ��ļ���ֵ����!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d����װ��������Ҫ#r"+needyyb+"#d�������,�������Ҳ���!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d����װ��������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
}
else if (!cm.haveItem(4005002,10)) {
cm.sendOk("��ı�����û��#r10#k������ˮ��(#v4005002#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005002,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d������װ������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ�������,Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ����ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005002,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d����װ������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ������ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005002,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setDex(item.getDex() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,�������ݳɹ�.\r\n�Ҿ����-1,���ݼ�10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005002,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setDex(item.getDex() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,�������ݳɹ�.\r\n�Ҿ����-1,���ݼ�10!");
cm.dispose();
}
}


} else if(typed==6031){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ��������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b����װ��������Ҫ#r"+needsp+"#b�㼼��ֵ,��ʣ��ļ���ֵ����!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d����װ��������Ҫ#r"+needyyb+"#d�������,�������Ҳ���!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d����װ��������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
}
else if (!cm.haveItem(4005000,10)) {
cm.sendOk("��ı�����û��#r10#k������ˮ��(#v4005000#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005000,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d����װ������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ�������,Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ����ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005000,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d����װ������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ������ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005000,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setStr(item.getStr() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,���������ɹ�.\r\n�Ҿ����-1,������10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4005000,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setStr(item.getStr() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,���������ɹ�.\r\n�Ҿ����-1,������10!");
cm.dispose();
}
}


} else if(typed==6021){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ��ħ������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b����װ��ħ������Ҫ#r"+needsp+"#b�㼼��ֵ,��ʣ��ļ���ֵ����!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d����װ��ħ������Ҫ#r"+needyyb+"#d�������,�������Ҳ���!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d����װ��ħ������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
}
else if (!cm.haveItem(4021005,10)) {
cm.sendOk("��ı�����û��#r10#k������ʯ(#v4021005#)");
cm.dispose();
}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021005,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d����װ��ħ����ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ������ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021005,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d����װ��ħ����ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ�������,Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ����ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021005,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setMatk(item.getMatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,��������ħ���ɹ�.\r\n�Ҿ����-1,����ħ����10!");
cm.dispose();
}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021005,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setMatk(item.getMatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,��������ħ���ɹ�.\r\n�Ҿ����-1,����ħ����10!");
cm.dispose();
}
}



} else if(typed==6011){
if (cm.getChar().getRemainingAp() < needap) {
cm.sendOk("#b����װ����������Ҫ#r"+needap+"#b������ֵ,��ʣ�������ֵ����!");
cm.dispose();
}
else if (cm.getChar().getRemainingSp() < needsp) {
cm.sendOk("#b����װ����������Ҫ#r"+needsp+"#b�㼼��ֵ,��ʣ��ļ���ֵ����!");
}
else if (cm.getDonatorPoints() < needyyb) {
cm.sendOk("#d����װ����������Ҫ#r"+needyyb+"#d�������,�������Ҳ���!");
cm.dispose();
}
else if (cm.getMeso() < needjb) {
cm.sendOk("#d����װ����������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
}
else if (!cm.haveItem(4021007,10)) {
cm.sendOk("��ı�����û��#r10#k����ʯ(#v4021007#)");
cm.dispose();

}
else
{
if (playernumber == 1) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021007,-5);
cm.gainDonatorPoints(-needyyb1);
cm.sendOk("#d������������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ�������,Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ����ˡ�#dף���´κ���!");
cm.dispose();

}
else if (playernumber == 4) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021007,-5);
cm.gainMeso(-needjb1);
cm.sendOk("#d������������ʧ�ܣ���ʯû��ȫ������װ����#r��ȡ��һ��Ĳ��Ϻ������ѣ�Ϊ�˸�л�������MapleWings��֧�֣��Ͳ���ȡ������ˡ�#dף���´κ���!");
cm.dispose();
}
else if (playernumber == 3) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021007,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setWatk(item.getWatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,�����������ɹ�.\r\n�Ҿ����-1,��������10!");
cm.dispose();


}
else if (playernumber == 2) {
var statup = new java.util.ArrayList();
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.getChar().setRemainingSp (cm.getChar().getRemainingSp() - needsp);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingSp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.gainItem(4021007,-10);
cm.gainDonatorPoints(-needyyb);
cm.gainMeso(-needjb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
item.setUpgradeSlots(item.getUpgradeSlots()-1);
item.setWatk(item.getWatk() + 10);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,�����������ɹ�.\r\n�Ҿ����-1,��������10!");
cm.dispose();
}
}






} else if(typed==5091){
if (cm.getChar().getRemainingAp() < maps[selectedMap][2]) { 
cm.sendOk("��û���㹻�����Ե�."); 
cm.dispose(); 
} else { 
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - maps[selectedMap][2]); 
cm.gainItem(maps[selectedMap][1],1); 
var statup = new java.util.ArrayList(); 

statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp()))); 
cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup)); 

cm.dispose(); 
} 





} else if(typed==4121){
typed=4122;
shout = cm.getText();
cm.sendYesNo("��ȷ��Ҫ����ȥ������Ա��? \r\n<#b" + shout + "#k>ȷ������Щ������?\r\n�������˵�����ǾͰ����͵�����!");


} else if(typed==4081){
typed=4082;
message = cm.getText();
cm.sendYesNo("��ȷ��Ҫ�� <" + message +">����ȥ��?��Ҫ2�������Ŷ!");


} else if(typed==4071){
if(cm.getDonatorPoints()>=1){
selected = cm.getText();
cm.superlaba(selected,typedd);
cm.gainDonatorPoints(-1);
cm.dispose();
}else{
cm.sendOk("#r�Բ���,��Ŀǰû���㹻�������.");
cm.dispose();
}

} else if(typed==4041){
typed=4042;
fee = cm.getText();
cm.sendYesNo("��ȷ��Ҫ��ע #r" + fee + "#k ð�ձ���?���ȼ������û����ô��ǮŶ!");


} else if(typed==3341){
typed=3342;
 x=selection;
          if(x==2)
          {
            cm.sendOk("���Ĵ����"+cm.getMoney()+" ");
            cm.dispose();
          }
          else if (x==3)
            {
                if(cm.addBank()>0)
                {
                    cm.sendOk("��ϲ��,�����ɹ�!"); 
                    }
                    else
                    {
                        cm.sendOk("�ܱ�Ǹ,����ʧ��!�������Ѿ���������Ŷ!");
                    }
                    cm.dispose();
            }
          else
          {
          
          var b = " ��ѡ������.#b"; 
                        for (var i=0; i < money.length; i++) { 
                        b += "\r\n#L" + i + "#" + money[ i ]+""; 
                        } 
                        cm.sendSimple(b); 
          }


} else if(typed==3335){
typed=3336;
if (selection == 0) {
                jobName = "�̿�";
                job = net.sf.odinms.client.MapleJob.ASSASSIN;
            }
            if (selection == 1) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.BANDIT;
            }
            if (selection == 2) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.FIGHTER;
            }
            if (selection == 3) {
                jobName = "׼��ʿ";
                job = net.sf.odinms.client.MapleJob.PAGE;
            }
            if (selection == 4) {
                jobName = "ǹսʿ";
                job = net.sf.odinms.client.MapleJob.SPEARMAN;
            }
            if (selection == 5) {
                jobName = "���׷�ʦ";
                job = net.sf.odinms.client.MapleJob.IL_WIZARD;
            }
            if (selection == 6) {
                jobName = "�𶾷�ʦ";
                job = net.sf.odinms.client.MapleJob.FP_WIZARD;
            }
            if (selection == 7) {
                jobName = "��ʦ";
                job = net.sf.odinms.client.MapleJob.CLERIC;
            }
            if (selection == 8) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.HUNTER;
            }
            if (selection == 9) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.CROSSBOWMAN;
            }
            if (selection == 10) {
                jobName = "ȭ��";
                job = net.sf.odinms.client.MapleJob.BRAWLER;
            }
            if (selection == 11) {
                jobName = "��ǹ��";
                job = net.sf.odinms.client.MapleJob.GUNSLINGER;
            }
            cm.sendYesNo("#d�����Ϊ #r[" + jobName + "] #d��?");






} else if(typed==100001){
if (selection == 0) {
cm.sendNextPrev("����Ŀǰ�� #b"+cm.getOnlineClanCount(0)+" #k��������.");

} else if (selection == 1) {
cm.sendNextPrev("һ���� #b"+cm.getOfflineClanCount(0)+" #k���������������.");

} else if (selection == 2) {
var clanText = cm.getAllOfflineNamesFromClan(0);
if (clanText.equals(""))
cm.sendNextPrev("�Բ���,û��һ�������������!");
else
cm.sendNextPrev("������������������¼���:\r\n#b" +clanText);

} else if (selection == 3) {
cm.sendNext("����,�밴��һҳ.�Ϳ��Իص���һҳ��!");
status = -1;

} else if (selection == 4) {
cm.sendOk("�ټ�,�Ժ��������ǵĲ���Ŷ!");
cm.dispose();

} else if (selection == 5) {
cm.sendNextPrev("����Ŀǰ�� #r"+cm.getOnlineClanCount(1)+" #k��������.");

} else if (selection == 6) {
cm.sendNextPrev("һ���� #r"+cm.getOfflineClanCount(1)+" #k���������������.");

} else if (selection == 7) {
var clanText = cm.getAllOfflineNamesFromClan(1);
if (clanText.equals(""))
cm.sendNextPrev("�Բ���,û��һ�������������!");
else
cm.sendNextPrev("������������������¼���:\r\n#b" +clanText);

} else if (selection == 8) {
cm.sendNext("����,�밴��һҳ.�Ϳ��Իص���һҳ��!");
status = -1;

} else if (selection == 9) {
cm.sendOk("�ټ�,�Ժ��������ǵĲ���Ŷ!");
cm.dispose();
}







} else if(typed==67){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
if (item.getUpgradeSlots()>0){
if(cm.getDonatorPoints()>=zjghm){
if(chance3>=1 && chance3<=3){
cm.sendOk("�Բ��𣬺�����,����ʧ��!..");
cm.gainDonatorPoints(-zjghm);
cm.dispose();
}else if(chance3>=4 && chance3<=6){
item.setUpgradeSlots((item.getUpgradeSlots() - 1));
item.setMatk((item.getMatk() + 10));
item.setWatk((item.getWatk() + 10));
item.setLevel((item.getLevel() + 1));
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.gainDonatorPoints(-zjghm);
cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][����ҹ�����Ա]����ϲ������ϲ��~���:"+cm.getChar().getName()+"�ɹ���������ҽ�װ������..��Ҽ��ף�ذ�~~");
cm.dispose();
}else if(chance3>=7 && chance3<=9){
cm.sendOk("�Բ��𣬺�����,����ʧ��!..");
cm.gainDonatorPoints(-zjghm);
cm.dispose();
}

}else{
cm.sendOk("�Բ�����û���㹻�������!..");
cm.dispose();
}
}else{
cm.sendOk("�Բ�����Ŀǰװ������������Ϊ0�Σ���������..");
cm.dispose();
}
}else if (selection==10000){
if(cm.haveItem(4021007)){
cm.getChar().setVip(1);
cm.gainItem(4021007, -1);
cm.sendOk("#r��ϲ�����Ѿ��ɹ�����߼�VIP����!\r\n�����ڵ�VIP�ȼ���"+cm.getChar().getVip()+".��������:"+cm.getDonatorPoints());
cm.dispose();
cm.getChar().saveToDB(true,true);
cm.serverNotice("[NPC][VIPʹ��]:���"+cm.getChar().getName()+"�Ѿ��ɹ��ļ����˱����ĳ���VIP��");
}else{
cm.sendOk("#r�Բ�����û��һ��#v4021007#.");
cm.dispose();
}
}else if(typed==74){
if (selection == 0) {
if (cm.haveItem(5200002)==true){
typed=75;
cm.sendGetText("������Է������֣������򲻳��Է������֣���ô������Ҽ������Ȼ�������ִ��棬��ͰѶԺõ����ָ��ƺ��ˣ��ڵ����ﰴctrl+v��ճ������.\r\n#r���ѣ�����������ˣ�����Ǯ���ƣ���ȫ����.������Ѹ���"); 
}else{
cm.sendOk("�Բ�����û�н����.Ŀǰ��������Ҫһ��.");
cm.dispose();
}
}else if (selection == 1) {
if (cm.haveItem(5200002)==true){
typed=76;
cm.sendGetText("������Է������֣������򲻳��Է������֣���ô������Ҽ������Ȼ�������ִ��棬��ͰѶԺõ����ָ��ƺ��ˣ��ڵ����ﰴctrl+v��ճ������.\r\n#r���ѣ�����������ˣ�����Ǯ���ƣ���ȫ����.������Ѹ���"); 
}else{
cm.sendOk("�Բ�����û�н����.Ŀǰ��������Ҫһ��.");
cm.dispose();
}
}else if (selection == 2) {
if (cm.haveItem(5200002)==true){
typed=77;
cm.sendGetText("������Է������֣������򲻳��Է������֣���ô������Ҽ������Ȼ�������ִ��棬��ͰѶԺõ����ָ��ƺ��ˣ��ڵ����ﰴctrl+v��ճ������.\r\n#r���ѣ�����������ˣ�����Ǯ���ƣ���ȫ����.������Ѹ���"); 
}else{
cm.sendOk("�Բ�����û�н����.Ŀǰ��������Ҫһ��.");
cm.dispose();
}
}
}else if(typed==169){
jkms = cm.getText();
cm.sendYesNo("��ȷ��Ҫ��� #r"+jkms+"#k ��ð�ձ������ȼ������û����ô��ǮŶ��");
typed=170;
}else if(typed==230){
cm.warp(211040800,0);
cm.dispose();

}else if(typed==181){
if (playerchoice == "rock" && compchoice == "rock") { 
cm.sendOk(Frock + spacing + rock + draw); 
drawmatch = true; 
cm.gainMeso(-cost);
} else if (playerchoice == "rock" && compchoice == "paper") { 
cm.sendOk(Frock + spacing + paper + lose); 
losematch = true; 
cm.gainMeso(-cost);
cm.serverNotice("�����ֹ��桻:��.������"+ cm.getChar().getName() +"����ʯͷ���������ʧ����,���һ��Ϊ������!");
} else if (playerchoice == "rock" && compchoice == "scissor") { 
cm.sendOk(Frock + spacing + scissor + win); 
winmatch = true; 
cm.gainMeso(winmesos);
cm.serverNotice("�����ֹ��桻:��ϲ"+ cm.getChar().getName() +",��ʯͷ���������ʤ����!");
} else if (playerchoice == "paper" && compchoice == "rock") { 
cm.sendOk(Fpaper + spacing + rock + win); 
winmatch = true; 
cm.gainMeso(winmesos);
cm.serverNotice("�����ֹ��桻:��ϲ"+ cm.getChar().getName() +",��ʯͷ���������ʤ����!");
} else if (playerchoice == "paper" && compchoice == "paper") { 
cm.sendOk(Fpaper + spacing + paper + draw); 
drawmatch = true; 
cm.gainMeso(-cost);
} else if (playerchoice == "paper" && compchoice == "scissor") { 
cm.sendOk(Fpaper + spacing + scissor + lose); 
losematch = true; 
cm.gainMeso(-cost);
cm.serverNotice("�����ֹ��桻:��.������"+ cm.getChar().getName() +",��ʯͷ���������ʧ����,���һ��Ϊ������!");
} else if (playerchoice == "scissor" && compchoice == "rock") { 
cm.sendOk(Fscissor + spacing + rock + lose); 
losematch = true; 
cm.gainMeso(-cost);
cm.serverNotice("�����ֹ��桻:��.������"+ cm.getChar().getName() +",��ʯͷ���������ʧ����,���һ��Ϊ������!");
} else if (playerchoice == "scissor" && compchoice == "paper") { 
cm.sendOk(Fscissor + spacing + paper + win); 
winmatch = true; 
cm.gainMeso(winmesos);
cm.serverNotice("�����ֹ��桻:��ϲ"+ cm.getChar().getName() +",��ʯͷ���������ʤ����!");
} else if (playerchoice == "scissor" && compchoice == "scissor") { 
cm.sendOk(Fscissor + spacing + scissor + draw); 
drawmatch = true; 
cm.gainMeso(-cost);
} else { 
cm.sendOk("������..��й���Ա�޸���"); 
}
}

}else if(typed==1000){
if(cm.getDonatorPoints()>=vip1tovip2){
if(cm.getChar().getVip()>=1){
cm.gainDonatorPoints(-vip2tovip3);
cm.getChar().setVip(2);
cm.sendOk("#r��ϲ����ɹ�����߼�VIP����!\r\n�����ڵ�VIP�ȼ���"+cm.getChar().getVip()+".��������:"+cm.getDonatorPoints());
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[NPC][����ҽ���Ա]:���"+cm.getChar().getName()+"�Ѿ��ɹ��ļ����˱����ĸ߼�VIP����Ҽ�У�");
}else{
cm.sendOk("#r�Բ�����ĿǰVIP�ȼ�����VIP1.����������VIP1");
cm.dispose();
}
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}
}else if(typed==15){
if(cm.getDonatorPoints()>=vip2tovip3){
if(cm.getChar().getVip()>=2){
cm.gainDonatorPoints(-vip2tovip3);
cm.getChar().setVip(3);
cm.sendOk("#r��ϲ����ɹ������ռ�VIP����!\r\n�����ڵ�VIP�ȼ���"+cm.getChar().getVip()+".��������:"+cm.getDonatorPoints());
cm.getChar().saveToDB(true,true);
cm.dispose();
cm.serverNotice("[NPC][VIP����Ա]:���"+cm.getChar().getName()+"�Ѿ��ɹ��ļ����˱������ռ�VIP����Ҽ�У�");
}else{
cm.sendOk("#r�Բ�����ĿǰVIP�ȼ�����VIP2.����������VIP2");
cm.dispose();
}
}else{
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.��鿴��λ�������.");
cm.dispose();
}






} else if (status == 5) {


if(typed==7203){
var em = cm.getEventManager("wgquestluck");
if(selection==0){
if (em == null){
cm.sendOk("�������!");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("true")) {
cm.sendOk("�Բ���Ŀǰ�Ѿ���ϵͳ����Ϊ #r��ֹ#k ��ע�׶�.\r\n#b������ע�ѱ�ϵͳֹͣ,������������ע��");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("linjiang")) {
cm.sendOk("#r�Բ���Ŀǰ���콱ʱ��,���Ժ�������ע.");
cm.dispose();
} else if (cm.haveItem(4001126,30)==false || cm.haveItem(4001113,1)==false){
cm.sendOk("#r�Բ�����Ŀǰû���㹻����Ʒ�����д˴���ע..\r\n����Ҫ��30��#v4001126#��1��#v4001113#�ſ�����ע...");
cm.dispose();
} else if (cm.getBossLog('luk50')>0){
cm.sendOk("#r�Բ����ڱ������Ѿ���ע��.�����ظ���ע...");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("false")) {
typed=7205;
cm.sendGetNumber("#r����������Ͷע�ĺ���:",1,1,50);
}
}else if(selection==2){
cm.sendOk("#r��������������:"+cm.getnumluck(1)+".");
cm.dispose();
}else if(selection==1){
if(em.getProperty("entryPossible").equals("linjiang")==true){
if(cm.getluck(1)==cm.getnumluck(1)){
cm.delluck(1);
cm.sendOk("#r��ϲ��,�콱�ɹ�,��ȥ�鿴�����������ʲô��!");
if(change==1){
cm.gainItem(5200002,changed+5);
cm.gainItem(4001126,60);
}else if(change==2){
var newitems = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
var item = newitems.getEquipById(wqyoyo[changeo]);
item.setMatk((item.getMatk() + changem));
item.setWatk((item.getWatk() + changew));
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
}else if(change==3){
cm.gainItem(5200002,changed);
}
cm.serverNotice("[����]��ϲ,���:"+cm.getChar().getName()+"������50���ϲ�г�����,���һ��ף������..");
cm.dispose();
}else{
cm.sendOk("#r�����û���н�..!");
cm.dispose();
}
}else{
cm.sendOk("#r���ڲ����콱ʱ��..!");
cm.dispose();
}
}





}else if (typed==7204){
var em = cm.getEventManager("wgquestlucked");
if(selection==0){
if (em == null){
cm.sendOk("�������!");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("true")) {
cm.sendOk("�Բ���Ŀǰ�Ѿ���ϵͳ����Ϊ #r��ֹ#k ��ע�׶�.\r\n#b������ע�ѱ�ϵͳֹͣ,������������ע��");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("linjiang")) {
cm.sendOk("#r�Բ���Ŀǰ���콱ʱ��,���Ժ�������ע.");
cm.dispose();
} else if (cm.getDonatorPoints()<5){
cm.sendOk("#r�Բ�����Ŀǰû���㹻�������.");
cm.dispose();
} else if (cm.getBossLog('luk10')>0){
cm.sendOk("#r�Բ����ڱ������Ѿ���ע��.�����ظ���ע...");
cm.dispose();
} else if (em.getProperty("entryPossible").equals("false")) {
typed=7206;
cm.sendGetNumber("#r����������Ͷע�ĺ���:",1,1,10);
}
}else if(selection==2){
cm.sendOk("#r��������������:"+cm.getnumluck(2)+".");
cm.dispose();
}else if(selection==1){
if(em.getProperty("entryPossible").equals("linjiang")==true){
if(cm.getluck(2)==cm.getnumluck(2)){
cm.delluck(2);
cm.sendOk("#r��ϲ��,�콱�ɹ�,��ȥ�鿴�����������ʲô��!");
if(change==1){
cm.gainItem(5200002,changed+5);
cm.gainItem(4001126,100);
}else if(change==2){
var newitems = net.sf.odinms.server.MapleItemInformationProvider.getInstance();
var item = newitems.getEquipById(wqyoyo[changeo]);
item.setMatk((item.getMatk() + changem));
item.setWatk((item.getWatk() + changew));
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
}else if(change==3){
cm.gainItem(5200002,changed);
}
cm.serverNotice("[����]��ϲ,���:"+cm.getChar().getName()+"������10���ϲ�г�����,���һ��ף������..");
cm.dispose();
}else{
cm.sendOk("#r�����û���н�..!");
cm.dispose();
}
}else{
cm.sendOk("#r���ڲ����콱ʱ��..!");
cm.dispose();
}
}

} else if(typed==654322){
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var itemId2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).getItemId();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).copy();
var item3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var newstr = (item1.getStr()+item2.getStr())* beilv;
var newdex = (item1.getDex()+item2.getDex())* beilv;
var newint = (item1.getInt()+item2.getInt())* beilv;
var newluk = (item1.getLuk()+item2.getLuk())* beilv;
var newspeed = (item1.getSpeed()+item2.getSpeed())* beilv;
var newwatk = (item1.getWatk()+item2.getWatk())* beilv;
var newmatk = (item1.getMatk()+item2.getMatk())* beilv;
var newwdef = (item1.getWdef()+item2.getWdef())* beilv;
var newmdef = (item1.getMdef()+item2.getMdef())* beilv;
var newacc = (item1.getAcc()+item2.getAcc())* beilv;
var newavoid = (item1.getAvoid()+item2.getAvoid())* beilv;
var sumstr = item3.getStr() + newstr ;
var sumdex = item3.getDex() + newdex ;
var sumint = item3.getInt() + newint ;
var sumluk = item3.getLuk() + newluk ;
var sumspeed = item3.getSpeed() + newspeed ;
var sumwatk = item3.getWatk() + newwatk ;
var summatk = item3.getMatk() + newmatk ;
var sumwdef = item3.getWdef() + newwdef ;
var summdef = item3.getMdef() + newmdef ;
var sumacc = item3.getAcc() + newacc ;
var sumavoid = item3.getAvoid() + newavoid ;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() + 5); // SPEED
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 3,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,����ǿ���ɹ�\r\nװ��������ֵ����!");
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();



} else if(typed==654321){
var itemId1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId();
var itemId2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).getItemId();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var item1 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
var item2 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(2).copy();
var item3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
var itemId3 = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).getItemId();
var newstr = (item1.getStr()+item2.getStr())* beilv;
var newdex = (item1.getDex()+item2.getDex())* beilv;
var newint = (item1.getInt()+item2.getInt())* beilv;
var newluk = (item1.getLuk()+item2.getLuk())* beilv;
var newspeed = (item1.getSpeed()+item2.getSpeed())* beilv;
var newwatk = (item1.getWatk()+item2.getWatk())* beilv;
var newmatk = (item1.getMatk()+item2.getMatk())* beilv;
var newwdef = (item1.getWdef()+item2.getWdef())* beilv;
var newmdef = (item1.getMdef()+item2.getMdef())* beilv;
var newacc = (item1.getAcc()+item2.getAcc())* beilv;
var newavoid = (item1.getAvoid()+item2.getAvoid())* beilv;
var sumstr = item3.getStr() + newstr ;
var sumdex = item3.getDex() + newdex ;
var sumint = item3.getInt() + newint ;
var sumluk = item3.getLuk() + newluk ;
var sumspeed = item3.getSpeed() + newspeed ;
var sumwatk = item3.getWatk() + newwatk ;
var summatk = item3.getMatk() + newmatk ;
var sumwdef = item3.getWdef() + newwdef ;
var summdef = item3.getMdef() + newmdef ;
var sumacc = item3.getAcc() + newacc ;
var sumavoid = item3.getAvoid() + newavoid ;
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(3).copy();
item.setStr(sumstr); // STR     
item.setDex(sumdex); // DEX     
item.setInt(sumint); // INT 
item.setLuk(sumluk); // INT       
item.setWatk(sumwatk); //WATK    
item.setMatk(summatk); //MATK    
item.setWdef(sumwdef); //WDEF    
item.setMdef(summdef); //MDEF    
item.setAcc(sumacc); // ACC     
item.setAvoid(sumavoid); // AVOID 
item.setSpeed(item.getSpeed() + 5); // SPEED 
item.setUpgradeSlots((item.getUpgradeSlots() + 2));
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 2,1, true);
MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 3,1, true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, true);
cm.sendOk("#r��ϲ��,����ǿ���ɹ�\r\nװ������������+2,������ֵ����!");
var statup = new java.util.ArrayList();
cm.gainMeso(-needmon);
cm.gainDonatorPoints(-needdona);
cm.getChar().setRemainingAp (cm.getChar().getRemainingAp() - needap);
                    statup.add (new net.sf.odinms.tools.Pair(net.sf.odinms.client.MapleStat.AVAILABLEAP, java.lang.Integer.valueOf(cm.getChar().getRemainingAp())));
                    cm.getChar().getClient().getSession().write(net.sf.odinms.tools.MaplePacketCreator.updatePlayerStats(statup));
cm.dispose();




} else if(typed==98600100){
cm.dispose();

			
			if (beauty == 1){
				cm.setHair(hairnew[selection]);
			}
			if (beauty == 2){
				cm.setHair(haircolor[selection]);
			}


} else if(typed==551010){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d��û��#r"+cjqhyyb+"#d�����,�����Ҳ��ܰ���ǿ��"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#dǿ��װ��������������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
} else if (!cm.haveItem(4250000,10)) {
cm.sendOk("��ı�����û��#r10#k���µ���ʯ(#v4250000#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4250000,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setWatk(item.getWatk() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r��ϲ��ǿ��װ���ɹ���װ�������������� 111 .");
}

} else if(typed==551020){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d��û��#r"+cjqhyyb+"#d�����,�����Ҳ��ܰ���ǿ��"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#dǿ��װ��ħ������������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
} else if (!cm.haveItem(4250100,10)) {
cm.sendOk("��ı�����û��#r10#k���µ�����ʯ(#v4250100#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4250100,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setMatk(item.getMatk() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r��ϲ��ǿ��װ���ɹ���װ��ħ������������ 111 .");
}

} else if(typed==551030){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d��û��#r"+cjqhyyb+"#d�����,�����Ҳ��ܰ���ǿ��"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#dǿ��װ��������������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
} else if (!cm.haveItem(4251300,10)) {
cm.sendOk("��ı�����û��#r10#k���µȺ�ˮ��(#v4251300#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4251300,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setUpgradeSlots((item.getUpgradeSlots() + 10));
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r��ϲ��ǿ��װ���ɹ���װ���������������� 10 .");
}

} else if(typed==551040){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d��û��#r"+cjqhyyb+"#d�����,�����Ҳ��ܰ���ǿ��"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#dǿ��װ������������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
} else if (!cm.haveItem(4250800,10)) {
cm.sendOk("��ı�����û��#r10#k���µ�����ˮ��(#v4250800#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4250800,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setStr(item.getStr() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r��ϲ��ǿ��װ���ɹ���װ�������������� 111 .");
}

} else if(typed==551050){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d��û��#r"+cjqhyyb+"#d�����,�����Ҳ��ܰ���ǿ��"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#dǿ��װ������������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
} else if (!cm.haveItem(4251100,10)) {
cm.sendOk("��ı�����û��#r10#k���µ�����ˮ��(#v4251100#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4251100,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setDex(item.getDex() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r��ϲ��ǿ��װ���ɹ���װ�������������� 111 .");
}

} else if(typed==551060){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d��û��#r"+cjqhyyb+"#d�����,�����Ҳ��ܰ���ǿ��"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#dǿ��װ������������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
} else if (!cm.haveItem(4250900,10)) {
cm.sendOk("��ı�����û��#r10#k���µ��ǻ�ˮ��(#v4250900#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4250900,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setInt(item.getInt() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r��ϲ��ǿ��װ���ɹ���װ�������������� 111 .");
}

} else if(typed==551070){
if (cm.getDonatorPoints() < cjqhyyb) {
cm.sendOk("#d��û��#r"+cjqhyyb+"#d�����,�����Ҳ��ܰ���ǿ��"); 
cm.dispose();
} else if (cm.getMeso() < cjqhjb) {
cm.sendOk("#dǿ��װ������������Ҫ#r"+needjb+"#d���,��Ľ�Ҳ���!");
cm.dispose();
} else if (!cm.haveItem(4251000,10)) {
cm.sendOk("��ı�����û��#r10#k���µ�����ˮ��(#v4251000#)");
cm.dispose();
}else{
selected = selection;
cm.gainItem(4251000,-10);
cm.gainMeso(-cjqhjb);
cm.gainDonatorPoints(-cjqhyyb);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(selected).copy();
item.setLuk(item.getLuk() + 111);
MapleInventoryManipulator.removeFromSlot(cm.getC(),MapleInventoryType.EQUIP,1,1,true);
MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(),item,true);
cm.sendOk("#r��ϲ��ǿ��װ���ɹ���װ���������� 111 .");
}




} else if(typed==6133){
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
cm.getChar().lockitem1(slot,true)
cm.sendOk("װ��:#v"+item.getItemId()+"# �����ɹ�!");
cm.dispose();




} else if(typed==6134){
cm.gainDonatorPoints(-zbjs);
var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(slot);
cm.getChar().lockitem1(slot,false)
cm.sendOk("װ��:#v"+item.getItemId()+"# �����ɹ�!");
cm.dispose();



} else if(typed==4122){

if (cm.getMeso() >= 1000000) {
cm.gainMeso(-1000000);
cm.callGM(shout);
cm.sendOk("�ɹ�����.");
cm.dispose();
}else{
cm.sendOk("��û��100��ð�ձ�."); 
cm.dispose();
}


} else if(typed==4082){

if (cm.getDonatorPoints() < 2) {
cm.sendOk("�Ҽ��������Ĵ���,��ôû��2���������?");
cm.dispose();
}else{
cm.gainDonatorPoints(-2);
cm.sendOk("�ɹ�����,�뿴��������!");
cm.serverNotice("[ȫ������������]" + cm.getChar().getName() + " : " + message+ "");
cm.serverNotice("[ȫ������������]" + cm.getChar().getName() + " : " + message+ "");
cm.serverNotice("[ȫ������������]" + cm.getChar().getName() + " : " + message+ "");
cm.serverNotice("[ȫ������������]" + cm.getChar().getName() + " : " + message+ "");
cm.serverNotice("[ȫ������������]" + cm.getChar().getName() + " : " + message+ "");
cm.dispose();
}

} else if(typed==4042){


if (cm.getMeso() < fee) {
cm.sendOk("Ŷ�ǣ�������˼��û��ô��Ǯ�ˣ�ȥ׬��Ǯ�����ɣ���ɲ�����ѵ�!");
cm.dispose();
} else if (cm.getMeso() >= 1050000000) {
cm.sendOk("�Բ���,��Ľ�Ҵ�����10.5��,���Բ��ܲ��ڴ˴���ע!");
cm.dispose();
} else if (cm.getText() < 0) {
cm.sendOk("������ó�������Ȼ���븺����һ��ȥ!");
cm.dispose();
} else {
if (chance <= 1) { 
cm.gainMeso(-fee); 
cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڶĳ�������⣬���һ��Ϊ�����ɣ�"); 
cm.dispose(); 
} 
else if (chance == 2) { 
cm.gainMeso(-fee); 
cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڶĳ�������⣬���һ��Ϊ�����ɣ�"); 
cm.dispose(); 
} 
else if (chance == 3) { 
cm.gainMeso(-fee); 
cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڶĳ�������⣬���һ��Ϊ�����ɣ�"); 
cm.dispose(); 
} 
else if (chance >= 4) { 
cm.gainMeso(fee * 2); 
cm.sendNext("#r��������ϲ��#k! ��Ӯ��! ������������������һ�ѹ�!"); 
cm.serverNotice("���ĳ����桻����ϲ"+ cm.getChar().getName() +"���ڶĳ�Ӯ�ô�����ң����һ��Ϊ��ף�ذɣ�"); 
cm.dispose();
}
}




} else if(typed==3342){
var choose=money1[selection];
          if(x==0)//�� 
            { 
            if(cm.getMeso()<choose)
            {
                cm.sendOk("Oh,Sorry,����Ǯ����!");    
            }
            else if(cm.addMoney(choose,0)>0)
                {
                cm.gainMeso(-choose);
                cm.sendOk("�õ�,�Ѿ�����!");
                }
                else
                {
                cm.sendOk("Error:�뷴��������Ա!");

                }
                cm.dispose();
            } 
            else if(x==1)//ȡ 
            { 
            if(cm.getMoney()<choose)
            {
                cm.sendOk("Oh,Sorry,�����û����ô����!");    
            }
                else if(cm.addMoney(-choose,1)>0)
                {
                cm.gainMeso(choose);
                cm.sendOk("�õ�,���պ�����Ǯ!");
                }
                else
                {
                cm.sendOk("Error:�뷴��������Ա!");
                }
                cm.dispose();
              }
            
      
      
      else
      {
      cm.dispose();
      }







} else if(typed==3336){
            cm.changeJob(job);
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) { 
                // cm.teachSkill(4100000,20,20); //Claw Mastery
                // cm.teachSkill(4100001,30,30); //Critical Throw
                // cm.teachSkill(4100002,20,20); //Endure
                // cm.teachSkill(4101003,20,20); //Claw Booster
                // cm.teachSkill(4101004,20,20); //Haste
                // cm.teachSkill(4101005,30,30); //Drain
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                // cm.teachSkill(4200000,20,20); //Dagger Mastery
                // cm.teachSkill(4200001,20,20); //Endure
                // cm.teachSkill(4201002,20,20); //Dagger Booster
                // cm.teachSkill(4201003,20,20); //Haste
                // cm.teachSkill(4201004,30,30); //Steal
                // cm.teachSkill(4201005,30,30); //Savage Blow
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                // cm.teachSkill(1100000,20,20); //Sword Mastery
                // cm.teachSkill(1100001,20,20); //Axe Mastery
                // cm.teachSkill(1100002,30,30); //Final Attack: Sword
                // cm.teachSkill(1100003,30,30); //Final Attack: Axe
                // cm.teachSkill(1101004,20,20); //Sword Booster
                // cm.teachSkill(1101005,20,20); //Axe Booster
                // cm.teachSkill(1101006,20,20); //Rage
                // cm.teachSkill(1101007,30,30); //Power Guard
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                // cm.teachSkill(1200000,20,20); //Sword Mastery
                // cm.teachSkill(1200001,20,20); //BW Mastery
                // cm.teachSkill(1200002,30,30); //Final Attack: Sword
                // cm.teachSkill(1200003,30,30); //Final Attack: BW
                // cm.teachSkill(1201004,20,20); //Sword Booster
                // cm.teachSkill(1201005,20,20); //BW Booster
                // cm.teachSkill(1201006,20,20); //Threaten
                // cm.teachSkill(1201007,30,30); //Power Guard
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                // cm.teachSkill(1300000,20,20); //Spear Mastery
                // cm.teachSkill(1300001,20,20); //Polearm Mastery
                // cm.teachSkill(1300002,30,30); //Final Attack: Spear
                // cm.teachSkill(1300003,30,30); //Final Attack: Polearm
                // cm.teachSkill(1301004,20,20); //Spear Booster
                // cm.teachSkill(1301005,20,20); //Polearm Booster
                // cm.teachSkill(1301006,20,20); //Iron Will
                // cm.teachSkill(1301007,30,30); //Hyper Body
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                // cm.teachSkill(2200000,20,20); //MP Eater
                // cm.teachSkill(2201001,20,20); //Meditation
                // cm.teachSkill(2201002,20,20); //Teleport
                // cm.teachSkill(2201003,20,20); //Slow
                // cm.teachSkill(2201004,30,30); //Cold Bean
                // cm.teachSkill(2201005,30,30); //Thunderbolt
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                // cm.teachSkill(2100000,20,20); //MP Eater
                // cm.teachSkill(2101001,20,20); //Meditation
                // cm.teachSkill(2101002,20,20); //Teleport
                // cm.teachSkill(2101003,20,20); //Slow
                // cm.teachSkill(2101004,30,30); //Fire Arrow
                // cm.teachSkill(2101005,30,30); //Poison Brace
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                // cm.teachSkill(2300000,20,20); //MP Eater
                // cm.teachSkill(2301001,20,20); //Teleport
                // cm.teachSkill(2301002,30,30); //Heal
                // cm.teachSkill(2301003,20,20); //Invincible
                // cm.teachSkill(2301004,20,20); //Bless
                // cm.teachSkill(2301005,30,30); //Holy Arrow
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                // cm.teachSkill(3100000,20,20); //Bow Mastery
                // cm.teachSkill(3100001,30,30); //Final Attack: Bow
                // cm.teachSkill(3101002,20,20); //Bow Booster
                // cm.teachSkill(3101003,20,20); //Power Knock-Back
                // cm.teachSkill(3101004,20,20); //Soul Arrow: Bow
                // cm.teachSkill(3101005,30,30); //Arrow Bomb
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                // cm.teachSkill(3200000,20,20); //Crossbow Mastery
                // cm.teachSkill(3200001,30,30); //Final Attack: Crossbow
                // cm.teachSkill(3201002,20,20); //Crossbow Booster
                // cm.teachSkill(3201003,20,20); //Power Knock-Back
                // cm.teachSkill(3201004,20,20); //Soul Arrow: Crossbow
                // cm.teachSkill(3201005,30,30); //Iron Arrow
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {

            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {

            }

            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
            cm.dispose();



} else if(typed==75){
cm.gainItem(5200002,-1);
cm.makeRing(cm.getText(),1112800);
cm.sendOk("��ϲ�������ɹ�!");
cm.dispose();
}else if(typed==76){
cm.gainItem(5200002,-1);
cm.makeRing(cm.getText(),1112801);
cm.sendOk("��ϲ�������ɹ�!");
cm.dispose();
}else if(typed==77){
cm.gainItem(5200002,-1);
cm.makeRing(cm.getText(),1112802);
cm.sendOk("��ϲ�������ɹ�!");
cm.dispose();
}else if(typed==170){
if (cm.getMeso() < jkms * 100000000) {
cm.sendOk("�ޣ�sorry���㻹����ô��Ǯ�أ�ȥ׬��Ǯ�����ɣ�");
cm.dispose();
}else{
cm.gainMeso(-jkms * 100000000);
cm.gainjuankuan(jkms);
cm.sendOk("#r�ɹ���");
cm.dispose();
}
} 


} else if (status == 6) {
if(typed==7205){
qty=selection;
cm.setluck(qty,1);
cm.sendOk("#r��ϲ,��ע�ɹ�,���עϵͳ����֪ͨ!");
cm.setBossLog('luk50');
cm.gainItem(4001126,-30);
cm.gainItem(4001113,-1);
cm.dispose();
}else if (typed==7206){
qty=selection;
cm.setluck(qty,2);
cm.sendOk("#r��ϲ,��ע�ɹ�,���עϵͳ����֪ͨ!");
cm.setBossLog('luk10');
cm.gainDonatorPoints(-5);
cm.dispose();
}


        } else if (status == 61) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.ASSASSIN)) {
                status = 63;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BANDIT)) {
                status = 66;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HUNTER)) {
                status = 69;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CROSSBOWMAN)) {
                status = 72;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_WIZARD)) {
                status = 75;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_WIZARD)) {
                status = 78;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CLERIC)) {
                status = 81;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FIGHTER)) {
                status = 84;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PAGE)) {
                status = 87;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SPEARMAN)) {
                status = 90;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BRAWLER)) {
                status = 93;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.GUNSLINGER)) {
                status = 960;
                cm.sendYesNo("#dף����ﵽ�� #r[XXX��]#k #d,�����ھ�Ҫ��� #r[��XXX��תְ]#k #dô?");
            } else { 
                cm.dispose();
            }  
 








 } else if (status == 64) {
            // cm.teachSkill(4110000,20,20); //Alchemist
            // cm.teachSkill(4111001,20,20); //Meso Up
            // cm.teachSkill(4111002,30,30); //Shadow Partner
            // cm.teachSkill(4111003,20,20); //Shadow Web
            // cm.teachSkill(4111004,30,30); //Shadow Meso
            // cm.teachSkill(4111005,30,30); //Avenger
            // cm.teachSkill(4111006,20,20); //Flash Jump
            cm.changeJob(MapleJob.HERMIT);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
            cm.dispose();
        } else if (status == 67) {
            // cm.teachSkill(4210000,20,20); //Shield Mastery
            // cm.teachSkill(4211001,30,30); //Chakra
            // cm.teachSkill(4211002,30,30); //Assaulter
            // cm.teachSkill(4211003,20,20); //Pickpocket
            // cm.teachSkill(4211004,30,30); //Band of Thieves
            // cm.teachSkill(4211005,20,20); //Meso Guard
            // cm.teachSkill(4211006,30,30); //Meso Explosion
            cm.changeJob(MapleJob.CHIEFBANDIT);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
            cm.dispose();
        } else if (status == 70) {
            // cm.teachSkill(3110000,20,20); //Thrust
            // cm.teachSkill(3110001,20,20); //Mortal Blow
            // cm.teachSkill(3111002,20,20); //Puppet
            // cm.teachSkill(3111003,30,30); //Inferno
            // cm.teachSkill(3111004,30,30); //Arrow Rain
            // cm.teachSkill(3111005,30,30); //Silver Hawk
            // cm.teachSkill(3111006,30,30); //Strafe
            cm.changeJob(MapleJob.RANGER);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
            cm.dispose();
        } else if (status == 73) {
            // cm.teachSkill(3210000,20,20); //Thrust
            // cm.teachSkill(3210001,20,20); //Mortal Blow
            // cm.teachSkill(3211002,20,20); //Puppet
            // cm.teachSkill(3211003,30,30); //Blizzard
            // cm.teachSkill(3211004,30,30); //Arrow Eruption
            // cm.teachSkill(3211005,30,30); //Golden Eagle
            // cm.teachSkill(3211006,30,30); //Strafe
            cm.changeJob(MapleJob.SNIPER);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
            cm.dispose();
        } else if (status == 76) {
            // cm.teachSkill(2110000,20,20); //Partial Resistance
            // cm.teachSkill(2110001,30,30); //Element Amplification
            // cm.teachSkill(2111002,30,30); //Explosion
            // cm.teachSkill(2111003,30,30); //Poison Mist
            // cm.teachSkill(2111004,20,20); //Seal
            // cm.teachSkill(2111005,20,20); //Spell Booster
            // cm.teachSkill(2111006,30,30); //Element Composition
            cm.changeJob(MapleJob.FP_MAGE);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
            cm.dispose();
        } else if (status == 79) {
            // cm.teachSkill(2210000,20,20); //Partial Resistance
            // cm.teachSkill(2210001,30,30); //Element Amplification
            // cm.teachSkill(2211002,30,30); //Ice Strike
            // cm.teachSkill(2211003,30,30); //Thunder Spear
            // cm.teachSkill(2211004,20,20); //Seal
            // cm.teachSkill(2211005,20,20); //Spell Booster
            // cm.teachSkill(2211006,30,30); //Element Composition
            cm.changeJob(MapleJob.IL_MAGE);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
            cm.dispose();
        } else if (status == 82) {
            // cm.teachSkill(2310000,20,20); //Elemental Resistance
            // cm.teachSkill(2311001,20,20); //Dispel
            // cm.teachSkill(2311002,20,20); //Mystic Door
            // cm.teachSkill(2311003,30,30); //Holy Symbol
            // cm.teachSkill(2311004,30,30); //Shining Ray
            // cm.teachSkill(2311005,30,30); //Doom
            // cm.teachSkill(2311006,30,30); //Summon Dragon
            cm.changeJob(MapleJob.PRIEST);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
            cm.dispose();
        } else if (status == 85) {
            // cm.teachSkill(1110000,20,20); //Improving MP Recovery
            // cm.teachSkill(1110001,20,20); //Shield Mastery
            // cm.teachSkill(1111002,30,30); //Combo Attack
            // cm.teachSkill(1111003,30,30); //Panic: Sword
            // cm.teachSkill(1111004,30,30); //Panic: Axe
            // cm.teachSkill(1111005,30,30); //Coma: Sword
            // cm.teachSkill(1111006,30,30); //Coma: Axe
            // cm.teachSkill(1111007,20,20); //Armor Crash
            // cm.teachSkill(1111008,30,30); //Shout
            cm.changeJob(MapleJob.CRUSADER);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
            cm.dispose();
        } else if (status == 88) {
            // cm.teachSkill(1210000,20,20); //Improving MP Recovery
            // cm.teachSkill(1210001,20,20); //Shield Mastery
            // cm.teachSkill(1211002,30,30); //Charged Blow
            // cm.teachSkill(1211003,30,30); //Fire Charge: Sword
            // cm.teachSkill(1211004,30,30); //Flame Charge: BW
            // cm.teachSkill(1211005,30,30); //Ice Charge: Sword
            // cm.teachSkill(1211006,30,30); //Blizzard Charge: BW
            // cm.teachSkill(1211007,30,30); //Thunder Charge: Sword
            // cm.teachSkill(1211008,30,30); //Lightning Charge: BW
            // cm.teachSkill(1211009,20,20); //Magic Crash
            cm.changeJob(MapleJob.WHITEKNIGHT);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
            cm.dispose();
        } else if (status == 91) {
            // cm.teachSkill(1310000,20,20); //Elemental Resistance
            // cm.teachSkill(1311001,30,30); //Dragon Crusher: Spear
            // cm.teachSkill(1311002,30,30); //Dragon Crusher: Polearm
            // cm.teachSkill(1311003,30,30); //Dragon Fury: Spear
            // cm.teachSkill(1311004,30,30); //Dragon Fury: Polearm
            // cm.teachSkill(1311005,30,30); //Sacrifice
            // cm.teachSkill(1311006,30,30); //Dragon Roar
            // cm.teachSkill(1311007,20,20); //Power Crash
            // cm.teachSkill(1311008,20,20); //Dragon Blood
            cm.changeJob(MapleJob.DRAGONKNIGHT);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
        } else if (status == 94) {

            cm.changeJob(MapleJob.MARAUDER);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
        } else if (status == 97) {

            cm.changeJob(MapleJob.OUTLAW);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
            cm.dispose();
        } else if (status == 99) {
            cm.sendOk("#dף��һ·����!");
            cm.dispose();

        } else if (status == 102) {
            if (cm.getJob().equals(net.sf.odinms.client.MapleJob.HERMIT)) {
                status = 105;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CHIEFBANDIT)) {
                status = 108;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.RANGER)) {
                status = 111;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.SNIPER)) {
                status = 114;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.FP_MAGE)) {
                status = 117;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.IL_MAGE)) {
                status = 120;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PRIEST)) {
                status = 123;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.CRUSADER)) {
                status = 126;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WHITEKNIGHT)) {
                status = 129;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.DRAGONKNIGHT)) {
                status = 132;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MARAUDER)) {
                status = 135;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.OUTLAW)) {
                status = 137;
                cm.sendYesNo("#dף����ﵽ�� #r[XXXX��]#k #d,�����ھ�Ҫ��� #r[��XXXX��תְ]#k #dô?");
            } else { 
                cm.dispose();
            }


        } else if (status == 106) {
            cm.changeJob(MapleJob.NIGHTLORD);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 109) {
            cm.changeJob(MapleJob.SHADOWER);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 112) {
            cm.changeJob(MapleJob.BOWMASTER);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 115) {
            cm.changeJob(MapleJob.CROSSBOWMASTER);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 118) {
            cm.changeJob(MapleJob.FP_ARCHMAGE);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 121) {
            cm.changeJob(MapleJob.IL_ARCHMAGE);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 124) {
            cm.changeJob(MapleJob.BISHOP);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 127) {
            cm.changeJob(MapleJob.HERO);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 130) {
            cm.changeJob(MapleJob.PALADIN);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 133) {
            cm.changeJob(MapleJob.DARKKNIGHT);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 136) {
            cm.changeJob(MapleJob.BUCCANEER);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 139) {
            cm.changeJob(MapleJob.CORSAIR);
            cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                        cm.dispose();
        } else if (status == 151) {
            if (cm.c.getPlayer().getInt() >= 20) {
                cm.changeJob(net.sf.odinms.client.MapleJob.MAGICIAN);
                cm.sendOk("#d��ȥ��,ϣ�����Ϊ��ɫ�� #r[ħ��ʦ]#k #d,Ҳ���õ�δ�����ܼ�����!");
                cm.dispose();
            } else {
                cm.sendOk("#d��û�з�����С����: #r[20 ����]#k #d!");
                cm.dispose();
            }
            
        } else if (status == 154) {
            cm.sendSimple("#d�����Ϊ:#r\r\n#L0#սʿ#l\r\n#L1#ħ��ʦ#l\r\n#L2#������#l\r\n#L3#����#l\r\n#L4#����#l#k");


        } else if (status == 155) {
            if (selection == 0) {
                jobName = "սʿ";
                job = net.sf.odinms.client.MapleJob.WARRIOR;
            }
            if (selection == 1) {
                jobName = "ħ��ʦ";
                job = net.sf.odinms.client.MapleJob.MAGICIAN;
            }
            if (selection == 2) {
                jobName = "������";
                job = net.sf.odinms.client.MapleJob.BOWMAN;
            }
            if (selection == 3) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.THIEF;
            }
            if (selection == 4) {
                jobName = "����";
                job = net.sf.odinms.client.MapleJob.PIRATE;
            }
            cm.sendYesNo("#d�����Ϊ: #r[" + jobName + "]#k #d��?");
                        
                        
        } else if (status == 156) {
            if (job == net.sf.odinms.client.MapleJob.WARRIOR && cm.c.getPlayer().getStr() < 35) {
                cm.sendOk("#d��û�з�����С����: #r[35 ����]#k #d!");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.MAGICIAN && cm.c.getPlayer().getInt() < 20) {
                cm.sendOk("#d��û�з�����С����: #r[20 ����]#k #d!");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.BOWMAN && cm.c.getPlayer().getDex() < 25) {
                cm.sendOk("#d��û�з�����С����: #r[25 ����]#k #d!");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.THIEF && cm.c.getPlayer().getDex() < 25) {
                cm.sendOk("#d��û�з�����С����: #r[25 ����]#k #d!");
                cm.dispose();
            } else if (job == net.sf.odinms.client.MapleJob.PIRATE && cm.c.getPlayer().getDex() < 25) {
                cm.sendOk("#d��û�з�����С����: #r[25 ����]#k #d!");
                cm.dispose();
            } else {
                cm.changeJob(job);
                if (cm.getJob().equals(net.sf.odinms.client.MapleJob.WARRIOR)) {
                    // cm.teachSkill(1000000,16,16); //Improving HP Recovery
                    // cm.teachSkill(1000001,10,10); //Improving Max HP Increase
                    // cm.teachSkill(1000002,8,8);   //Endure
                    // cm.teachSkill(1001003,20,20); //Iron Body
                    // cm.teachSkill(1001004,20,20); //Power Strike
                    // cm.teachSkill(1001005,20,20); //Slash Blast
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.MAGICIAN)) {
                    // cm.teachSkill(2000000,16,16); //Improving MP Recovery
                    // cm.teachSkill(2000001,10,10); //Improving Max MP Increase
                    // cm.teachSkill(2001002,20,20); //Magic Guard
                    // cm.teachSkill(2001003,20,20); //Magic Armor
                    // cm.teachSkill(2001004,20,20); //Energy Bolt
                    // cm.teachSkill(2001005,20,20); //Magic Claw
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.BOWMAN)) {
                    // cm.teachSkill(3000000,16,16); //The Blessing of Amazon
                    // cm.teachSkill(3000001,20,20); //Critical Shot
                    // cm.teachSkill(3000002,8,8);   //The Eye of Amazon
                    // cm.teachSkill(3001003,20,20); //Focus
                    // cm.teachSkill(3001004,20,20); //Arrow Blow
                    // cm.teachSkill(3001005,20,20); //Double Shot
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.THIEF)) {
                    // cm.teachSkill(4000000,20,20); //Nimble Body
                    // cm.teachSkill(4000001,8,8);   //Keen Eyes
                    // cm.teachSkill(4001002,20,20); //Disorder
                    // cm.teachSkill(4001003,20,20); //Dark Sight
                    // cm.teachSkill(4001334,20,20); //Double Stab
                    // cm.teachSkill(4001344,20,20); //Lucky Seven
                } else if (cm.getJob().equals(net.sf.odinms.client.MapleJob.PIRATE)) {

                }
                cm.sendOk("#d��ȥ��,ϣ�����ܺú�����,Ҳ���õ�δ�����ܼ�����!");
                cm.dispose();
            }
            
          } else {
            cm.dispose();
          



















}







} 
}