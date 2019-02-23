/*
 *
 *  �˽ű������������������
 * ������ҵ�ű����Ⱥ:1049548
 *
 */


importPackage(net.sf.odinms.client);

var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

//------------------------------------------------------------------------

var chosenMap = -1;
var monsters = 0;
var towns = 0;
var bosses = 0;
var fuben = 0;

//------------------------------------------------------------------------

var bossmaps = Array(
		Array(100000005,0,"������԰III"),
		Array(105070002,0,"Ģ����֮Ĺ"), 
		Array(105090900,0,"���������Ժ"), 																
		Array(230040420,0,"Ƥ��ū˹��Ѩ"), 
		Array(211042300,0,"�������"), 
                Array(551030100,0,"��ս������"),
		Array(220080001,0,"ʱ�����ı�Դ"), 
		Array(240020402,0,"�������Ϣ��"), 
		Array(240020101,0,"����Ҷ�ɭ��"), 						
		Array(240040700,0,"����������Ѩ"), 				
		Array(270050000,0,"��Ļƻ�:Ʒ���ͳ���")								
		);

//------------------------------------------------------------------------

var monstermaps = Array(
		Array(100040001,0,"�ϲ�ɭ��ѵ������8��-15��"), 
		Array(101010100,0,"��ľ�֢�8��-15��"), 
		Array(104040000,0,"����ѵ���� 1��-15��"), 
		Array(103000101,0,"����һ����<��1����> 20��-30��"), 
		Array(103000105,0,"����һ����<��4����> 50��-70��"), 
		Array(101030110,0,"��1��Ӫ"), 
		Array(106000002,0,"Σ�յ�Ͽ�Ȣ�"), 
		Array(101030103,0,"�ż�����آ�"), 
		Array(101040001,0,"Ұ������� 20��-35��"), 
		Array(101040003,0,"��֮�ڹ�֮��"), 
		Array(101030001,0,"Ұ���������"), 
		Array(104010001,0,"��ĺ��� 10��-20��"), 
		Array(930000100,0,"ɭ�ֳ���"),
		Array(930000200,0,"���ʵ�ɭ��"),
		Array(105070001,0,"���Ϲ㳡 20��-40��"), 
		Array(105090300,0,"��Ѩ"), 
		Array(105040306,0,"����֮�� 60��-80��"), 
		Array(230020000,0,"������·"), 
		Array(230010400,0,"������·"), 
		Array(211041400,0,"����֮�֢�"), 
		Array(222010000,0,"��ɽ���"),
		Array(220070301,0,"ʱ��ֹ֮ͣ��"), 
		Array(220070201,0,"��ʧ��ʱ��"), 
		Array(220050300,0,"ʱ��ͨ��"), 
		Array(220010500,0,"¶̨���� 40��-70��"), 
		Array(250020000,0,"���������� 50��-60��"), 
		Array(251010000,0,"ʮ��ҩ�ݵ�"), 
		Array(200040000,0,"�Ʋʹ�԰��"), 
		Array(200010301,0,"�ڰ�ͥԺ��"), 
		Array(240020100,0,"��������ս�� 100��-120��"), 
		Array(240040500,0,"��֮��Ѩ���"), 
		Array(240040000,0,"����Ͽ��"), 
		Array(600020300,0,"���붴Ѩ"), 
		Array(800020130,0,"��������"),
		Array(749020000,0,"���쵰���ͼ")
		); 

//------------------------------------------------------------------------

var townmaps = Array(
		Array(910000000,0,"�����г�"), 
		Array(280020000,0,"��2.�������ͼ"), 
		Array(1010000,0,"�ʺ�� �ʺ絺���ִ�"), 
		Array(60000,0,"�ϸ� �ʺ絺���ִ�"), 
		Array(104000000,0,"�����"), 
		Array(100000000,0,"���ִ�"), 
		Array(101000000,0,"ħ������"), 
		Array(180000001,0,"�ڰ�С��"), 
		Array(102000000,0,"��ʿ����"), 
		Array(103000000,0,"��������"), 
		Array(120000000,0,"ŵ����˹����ͷ"),
		Array(105040300,0,"����֮��"), 
		Array(200000000,0,"���֮��"),
		Array(211000000,0,"����ѩ��"), 
		Array(230000000,0,"ˮ������"),  
		Array(222000000,0,"ͯ����"), 
		Array(220000000,0,"��߳�"),
		Array(701000000,0,"��������"),
		Array(250000000,0,"����"), 
		Array(702000000,0,"������"), 
		Array(500000000,0,"̩��"),
		Array(260000000,0,"���ﰲ��"),  
		Array(600000000,0,"��Ҷ��"), 
		Array(240000000,0,"��ľ��"),  
		Array(261000000,0,"�������"), 
		Array(221000000,0,"�����������"), 
		Array(251000000,0,"�ٲ���"),
		Array(701000200,0,"�Ϻ�ԥ԰"),
		Array(550000000,0,"��¡����"),
		Array(130000000,0,"ʥ��"),
		Array(551000000,0,"�ʰ��"),
		Array(740000000,0,"�����"), 
		Array(801000000,0,"�Ѻʹ�"), 
		Array(540010000,0,"�¼��»���"),
		Array(541000000,0,"�¼�����ͷ"),
		Array(300000000,0,"����ɭ��"), 
		Array(270000100,0,"ʱ�����"), 
		Array(702100000,0,"�ؾ���"), 
		Array(800000000,0,"�Ŵ�����"), 
		Array(130000200,0,"ʥ�ز�·"),
		Array(741000208,0,"���㳡"),
		Array(925020000,0,"����������"),
		Array(930000000,0,"����ɭ��"),
		Array(930000010,0,"ɭ�����"),	
		Array(702090101,0,"Ӣ���"),  
		Array(700000000,0,"��𽹬")
		);

//------------------------------------------------------------------------

var fubenmaps = Array(
		Array(800020400,0,"����PK��ͼ"),
		Array(193000000,0,"���ɵ�ͼ")						
		);

//------------------------------------------------------------------------

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		return;
		}
	if (mode == 1) {
		status++;
		} else {
		status--;
		}

//------------------------------------------------------------------------

	if (status == 0) {

   	    var add = "#r"+cm.mxdmz()+"ð�յ�#k,����Ա\r\n\r\n";

		add += "#L0##b������ >>>> �۹�����#l \r\n";

		add += "#L1#�������� >>>> �弶ʥ��#l \r\n";

		add += "#L2#BOSS���� >>>> ��������#l \r\n";

		add += "#L3##rBOSS״̬ >>>> Ԥ֪δ��#l \r\n";
 
		cm.sendSimple (add);    

//------------------------------------------------------------------------
				
	} else if (status == 1) {

	if (selection == 0){
		var selStr = "ѡ�����Ŀ�ĵذ�.#b";
		for (var i = 0; i < townmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + townmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		towns = 1;
		}

	if (selection == 1) {
		var selStr = "ѡ�����Ŀ�ĵذ�.#b";
		for (var i = 0; i < monstermaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + monstermaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		monsters = 1;
		}

	if (selection == 2) {
		var selStr = "ѡ�����Ŀ�ĵذ�.#b";
		for (var i = 0; i < bossmaps.length; i++) {
		selStr += "\r\n#L" + i + "#" + bossmaps[i][2] + "";
		}
		cm.sendSimple(selStr);
		bosses = 1;
		}

	if (selection == 3) {
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(280030000);
		var zha1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(280030000);
		var zha2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(280030000);
		var zha3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(280030000);
		var zha4 = map.getCharacters().toArray().length;

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(240060200);
		var hei1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(240060200);
		var hei2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(240060200);
		var hei3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(240060200);
		var hei4 = map.getCharacters().toArray().length

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(270050100);
		var pb1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(270050100);
		var pb2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(270050100);
		var pb3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(270050100);
		var pb4 = map.getCharacters().toArray().length

		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(1).getMapFactory().getMap(220080001);
		var nao1 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(2).getMapFactory().getMap(220080001);
		var nao2 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(3).getMapFactory().getMap(220080001);
		var nao3 = map.getCharacters().toArray().length;
		var map = net.sf.odinms.net.channel.ChannelServer.getInstance(4).getMapFactory().getMap(220080001);
		var nao4 = map.getCharacters().toArray().length

   	    var add = "������ʾΪ���ߵ�BOSSս��#b\r\n";

		add += ""+aaa+"[#rƵ��һ#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha1+"#b��  [#d����#b]��#r"+hei1+"#b��  [#dPB#b]��#r"+pb1+"#b��  [#d����#b]��#r"+nao1+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha2+"#b��  [#d����#b]��#r"+hei2+"#b��  [#dPB#b]��#r"+pb2+"#b��  [#d����#b]��#r"+nao2+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha3+"#b��  [#d����#b]��#r"+hei3+"#b��  [#dPB#b]��#r"+pb3+"#b��  [#d����#b]��#r"+nao3+"#b��\r\n\r\n";

		add += ""+aaa+"[#rƵ����#b]\r\n";

		add += ""+zzz+"[#d����#b]��#r"+zha4+"#b��  [#d����#b]��#r"+hei4+"#b��  [#dPB#b]��#r"+pb4+"#b��  [#d����#b]��#r"+nao4+"#b��\r\n\r\n";
 
		cm.sendOk (add); 

		cm.dispose();

                   }

//------------------------------------------------------------------------

	} else if (status == 2) {

	if (towns == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + townmaps[selection][2] + "?");
		chosenMap = selection;
		towns = 2;

	} else if (monsters == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + monstermaps[selection][2] + "?");
		chosenMap = selection;
		monsters = 2;

	} else if (bosses == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + bossmaps[selection][2] + "?");
		chosenMap = selection;
		bosses = 2;

	} else if (fuben == 1) {
		cm.sendYesNo("��ȷ��Ҫȥ " + fubenmaps[selection][2] + "?");
		chosenMap = selection;
		fuben = 2;

		}

//----------------------------------------------------------------------

	} else if (status == 3) {

	if (towns == 2) {
		if(cm.getMeso()>=townmaps[chosenMap][1]){
		cm.warp(townmaps[chosenMap][0], 0);
		cm.gainMeso(-townmaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (monsters == 2) {
		if(cm.getMeso()>=monstermaps[chosenMap][1]){
		cm.warp(monstermaps[chosenMap][0], 0);
		cm.gainMeso(-monstermaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (bosses == 2) {
		if(cm.getMeso()>=bossmaps[chosenMap][1]){
		cm.warp(bossmaps[chosenMap][0], 0);
		cm.gainMeso(-bossmaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

	} else if (fuben == 2) {
		if(cm.getMeso()>=fubenmaps[chosenMap][1]){
		cm.warp(fubenmaps[chosenMap][0], 0);
		cm.gainMeso(-fubenmaps[chosenMap][1]);
		}else{
		cm.sendOk("��û���㹻�Ľ��Ŷ!");
		}
		cm.dispose();

                }

//------------------------------------------------------------------------

		}
		}
		}

