/*
 *
 *  �˽ű������������������
 * ������ҵ�ű����Ⱥ:1049548
 *
 */

importPackage(net.sf.odinms.client);

var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";


var status = 0;
var nx = 1000;
var jilv = 0;
var costa;
var xx = -1;



	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function GetRandomNum(Min,Max){  
		var Range = Max - Min;  
		var Rand = Math.random();  
		return(Min + Math.round(Rand * Range));  
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
		if (mode == 1)
		status++;
		else
		status--;





	if (status == 0) {
		
   	    var add = "#r"+cm.mxdmz()+"ð�յ�#k,#r�Ĳ�ϵͳ#k\r\n ";

		add += ""+xxx+"-������ע���#e#b[��ע]#n#k\r\n ";

		add += ""+xxx+"-�ӱ��Ĳ��������������ʵ���,�������Ӹ��ʽ���.\r\n ";

		add += ""+xxx+"-��ǰ��עѺ��:#b<#e#r ���Ĳ� #n#b>#b<#e#r "+nx+" ���#n#b >#k\r\n";

		add += "#L0#"+ttt+"-[#r��ע#k]#l\r\n\r\n";

		add += "#L1#"+ttt+"-[#b1:1������#k]#l";

		add += "#L2#"+ttt+"-[#b1:2������#k]#l";

		add += "#L3#"+ttt+"-[#b1:3������#k]#l";

		cm.sendSimple (add,2);

	} else if (status == 1) {

	if (selection == 0){
		cm.sendOk("#b�ɹ���ע#r1000���#b,���ȷ����鿴.");
		nx = nx + 1000
		status = -1; 

	} else if (selection == 1){

   	    var add = "#b<#e#r ���Ĳ� #n#b>\r\n\r\n";

		add += ""+ttt+"-��ѡ�����[#r����1:1#b].\r\n";

		add += ""+ttt+"-����ѺעΪ[#r"+nx+"�����#b].\r\n";

		add += ""+ttt+"-���ʤ������ȡ[#r��������"+nx*1+"���#b]�Ľ���.\r\n";

		add += ""+ttt+"-���[#r��#b]��ʼ�Ĳ�,���[#r����#b]�����Ĳ�.";

		cm.sendYesNo (add); 

		jilv = 1; 

		xx=0

	} else if (selection == 2){

   	    var add = "#b<#e#r ���Ĳ� #n#b>\r\n\r\n";

		add += ""+ttt+"-��ѡ�����[#r����1:2#b].\r\n";

		add += ""+ttt+"-����ѺעΪ[#r"+nx+"�����#b].\r\n";

		add += ""+ttt+"-���ʤ������ȡ[#r��������"+nx*2+"���#b]�Ľ���.\r\n";

		add += ""+ttt+"-���[#r��#b]��ʼ�Ĳ�,���[#r����#b]�����Ĳ�.";

		cm.sendYesNo (add); 

		jilv = 2; 

		xx=0

	} else if (selection == 3){

   	    var add = "#b<#e#r ���Ĳ� #n#b>\r\n\r\n";

		add += ""+ttt+"-��ѡ�����[#r����1:3#b].\r\n";

		add += ""+ttt+"-����ѺעΪ[#r"+nx+"�����#b].\r\n";

		add += ""+ttt+"-���ʤ������ȡ[#r��������"+nx*3+"���#b]�Ľ���.\r\n";

		add += ""+ttt+"-���[#r��#b]��ʼ�Ĳ�,���[#r����#b]�����Ĳ�.";

		cm.sendYesNo (add); 

		jilv = 3; 

		xx=0

		}

	} else if (status == 2) {

	if (xx == 0){
		if (jilv == 0){
		} else if (jilv != 0){
		if (cm.getPlayer().getNX() < nx) {
		cm.sendOk("#b���ĵ����,���ܲμӶĲ�.....");
		status = -1; 
		}else {
		jiaru = GetRandomNum(0,jilv);
		if (jiaru == 0) {
		nx = nx * jilv
		cm.gainNX(nx);
		cm.sendOk("#b��ϲ,���Ѿ����ȫʤ...");
		cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"[�Ĳ�ϵͳ]" + " : " + "��ϲ��� [" + cm.getPlayer().getName() + "] �ڵ���ƴ��ʤ����,TA�����["+nx+"���]",true).getBytes());
		status = -1; 
		} else {
		cm.gainNX(-nx);
		cm.sendOk("#b���簡.������....");
		cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.odinms.tools.MaplePacketCreator.serverNotice(12,cm.getC().getChannel(),"[�Ĳ�ϵͳ]" + " : " + "�������� [" + cm.getPlayer().getName() + "] �ڵ���ƴ��ʧ����,TAʧȥ��["+nx+"���]",true).getBytes());
		status = -1; 
		}
		}
		}





		









		}					
		}
		}
		}

