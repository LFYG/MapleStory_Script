var status = 0;
var typed=0;
//�н�ҵ���ƷID
var zjbid = 4000463;
var zmtid = 3991045;
var zyhzid = 4033356;
var zmtNum = java.lang.Math.floor(Math.random() * 9501 + 500);
var zyhzNum = java.lang.Math.floor(Math.random() * 70001 + 30000);
var zjbNum = java.lang.Math.floor(Math.random() * 70001 + 80000);
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) { 
			cm.sendSimple("�װ���#r#h ##k���ã������˺�����ͻ��ϵͳ:\r\n#r#L999#�˺�����ͻ�Ƽ��#l\r\n\r\n#L1#[����]�н��ͻ�� (#kĿǰ״̬��#r�Ƽ�����#b)#l\r\n#L2#[����]�������ͻ�� (#kĿǰ״̬��#r������#b)#l\r\n#L3#[����]��ĸͻ�� #l");
		} else if (status == 1) {
			if (selection == 999) {
				cm.sendOk("���ܹ�Ϊ��������������������˺���������������Ǳ�����������ʹ�ò�ͬ�ĵ��߶������˺�����������Ч����ͬ��\r\n\t1.ʹ��#v4000463#�н��ͻ�ƣ�ÿ�ο���Ϊ��������8W~15W�˺���\r\n\t2.ʹ��#v4033356#�������ͻ�ƣ�ÿ�ο���Ϊ��������3W~10W���˺���\r\n\t3.ʹ��#v3991045#��ĸTͻ�ƣ�ÿ�ο���Ϊ��������500~10000���˺���");
			} else {
				typed=selection;
				if (selection == 1) {
					cm.sendYesNo("�Ƿ񻨷�50��#b�н��#k�Ե�ǰ���������������˺�����ͻ�ƣ�");
				} else if (selection == 2) { 
					cm.sendYesNo("�Ƿ񻨷�3��#b�������1#k�Ե�ǰ���������������˺�����ͻ�ƣ�");
				} else if (selection == 3) {
					cm.sendYesNo("�Ƿ񻨷�20��#b��ɫ��ĸT#k�Ե�ǰ���������������˺�����ͻ�ƣ�");
				}
			}
		} else if (status == 2) {
			if (selection = -1)
				selection = typed;
			if (selection == 3) {
				//��ĸͻ��
					if(cm.haveItem(zmtid, 20)){
						if (cm.changeLimitBreak(zmtNum)) {
							
							cm.gainItem(zmtid,-20);
								cm.sendOk("#b�˺�����ͻ�Ƴɹ�.\r\n\r\n����׷���˺�Ϊ��#r"+ zmtNum +"#b.");
							cm.worldSpouseMessage(0x20,"[�˺�ͻ��] ��� "+ cm.getChar().getName() +" ʹ�� ��ĸͻ�� �������˺�����ͻ�Ƴɹ� ����׷�� "+ zmtNum +" �˺�ֵ ��");
						}else{
								cm.sendOk("#bͻ��ʧ��.\r\nϵͳΪ��⵽��ɫ����װ������.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#bͻ��ʧ��.\r\n��Ҫ 20�� ��ɫ��ĸT �ſ���ͻ��.");
								cm.dispose();
						}
			} else if (selection == 1) {
					if(cm.haveItem(zjbid, 50)){
						if (cm.changeLimitBreak(zjbNum)) {
						
							cm.gainItem(zjbid,-50);
								cm.sendOk("#b�˺�����ͻ�Ƴɹ�.\r\n\r\n����׷���˺�Ϊ��#r"+ zjbNum +"#b.");
							cm.worldSpouseMessage(0x20,"[�˺�ͻ��] ��� "+ cm.getChar().getName() +" ʹ�� �н��ͻ�� �������˺�����ͻ�Ƴɹ� ����׷�� "+ zjbNum +" �˺�ֵ ��");
						}else{
								cm.sendOk("#bͻ��ʧ��.\r\nϵͳΪ��⵽��ɫ����װ������.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#bͻ��ʧ��.\r\n��Ҫ 50�� �н�� �ſ���ͻ��.");
								cm.dispose();
						}
			} else if (selection == 2) {
					
					if(cm.haveItem(4033356, 3)){
						if (cm.changeLimitBreak(zyhzNum)) {
							cm.gainItem(4033356,-3);
							cm.sendOk("#b�˺�����ͻ�Ƴɹ�.\r\n\r\n����׷���˺�Ϊ��#r"+ zyhzNum +"#b.");
							cm.worldSpouseMessage(0x20,"[�˺�ͻ��] ��� "+ cm.getChar().getName() +" ʹ�� ����ͻ�� �������˺�����ͻ�Ƴɹ� ����׷�� "+ zyhzNum +" �˺�ֵ ��");
						}else{
								cm.sendOk("#bͻ��ʧ��.\r\nϵͳΪ��⵽��ɫ����װ������.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#bͻ��ʧ��.\r\n��Ҫ 3�� �������1 �ſ���ͻ��.");
								cm.dispose();
						}
			}
		}
	}
}