var status = 0;
var typed=0;
//�н�ҵ���ƷID
var zjbid = 4310014;
var zmtid = 4310036;
var zyhzid = 4033356;
var zmtNum = java.lang.Math.floor(Math.random() * 100001 + 100000);
var zyhzNum = java.lang.Math.floor(Math.random() * 70001 + 30000);
var zjbNum = java.lang.Math.floor(Math.random() * 1500001 + 1500000);
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
			cm.sendSimple("������õ���ǿ���������\r\n#r#L999#�˺�����ͻ�Ƽ��#l\r\n\r\n#L1#[����]ѩ����ͻ�� (#kĿǰ״̬��#r�Ƽ�����#b)#l\r\n#L2#[����]�������ͻ�� (#kĿǰ״̬��#r������#b)#l\r\n#L3#[����]�����߱�ͻ�� #l");
		} else if (status == 1) {
			if (selection == 999) {
				cm.sendOk("\t���ܹ�Ϊ��������������������˺���������������Ǳ�����������ʹ�ò�ͬ�ĵ��߶������˺�����������Ч����ͬ��\r\n\t1.����100��#b#v4310014#ѩ����#kͻ�ƣ�ÿ�ο���Ϊ��������150W~300W�˺���\r\n\t2.����3��#b#v4033356#�������1#kͻ�ƣ�ÿ�ο���Ϊ��������3W~10W���˺���\r\n\t3.����5000��#b#v4310036#�����߱�#kͻ�ƣ�ÿ�ο���Ϊ��������10W~20W���˺���");
			} else {
				typed=selection;
				if (selection == 1) {
					cm.sendYesNo("�Ƿ񻨷�100��#bѩ����#k�Ե�ǰ���������������˺�����ͻ�ƣ�#r#eѩ���Ҳ���Ĳ��ֽ����Թ������Ҳ��㡣#n#k");
				} else if (selection == 2) { 
					cm.sendYesNo("�Ƿ񻨷�3��#b�������1#k�Ե�ǰ���������������˺�����ͻ�ƣ�");
				} else if (selection == 3) {
					cm.sendYesNo("�Ƿ񻨷�5000��#b�����߱�#k�Ե�ǰ���������������˺�����ͻ�ƣ�");
				}
			}
		} else if (status == 2) {
			if (selection = -1)
				selection = typed;
			if (selection == 3) {
				//��ĸͻ��
					if(cm.haveItem(zmtid, 5000)){
						if (cm.changeLimitBreak(zmtNum)) {
							
							cm.gainItem(zmtid,-5000);
								cm.sendOk("#b�˺�����ͻ�Ƴɹ�.\r\n\r\n����׷���˺�Ϊ��#r"+ zmtNum +"#b.");
							cm.worldSpouseMessage(0x20,"[�˺�ͻ��] ��� "+ cm.getChar().getName() +" ʹ�� �����߱� �������˺�����ͻ�Ƴɹ� ����׷�� "+ zmtNum +" �˺�ֵ ��");
						}else{
								cm.sendOk("#bͻ��ʧ��.\r\nϵͳΪ��⵽��ɫ����װ������.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#bͻ��ʧ��.\r\n��Ҫ 5000�� ������ �ſ���ͻ��.");
								cm.dispose();
						}
			} else if (selection == 1) {
					var _q = getNeeds(100);
					if(canBuy(_q)){
						pay(_q);
						if (cm.changeLimitBreak(zjbNum)) {
							pay(_q);
							cm.sendOk("#b�˺�����ͻ�Ƴɹ�.\r\n\r\n����׷���˺�Ϊ��#r"+ zjbNum +"#b.");
							cm.worldSpouseMessage(0x20,"[�˺�ͻ��] ��� "+ cm.getChar().getName() +" ʹ�� ѩ���� �������˺�����ͻ�Ƴɹ� ����׷�� "+ zjbNum +" �˺�ֵ ��");
						}else{
								cm.sendOk("#bͻ��ʧ��.\r\nϵͳΪ��⵽��ɫ����װ������.");
						}
								cm.dispose();
						}else{
								cm.sendOk("#bͻ��ʧ��.\r\nѩ���һ�������������ܺͲ��� 100 ��.");
								cm.dispose();
						}
			} else if (selection == 2) {
					if(cm.haveItem(4033356, 3)){
						if (cm.changeLimitBreak(zyhzNum)) {
							cm.gainItem(4033356,-3);
							cm.sendOk("#b�˺�����ͻ�Ƴɹ�.\r\n\r\n����׷���˺�Ϊ��#r"+ zyhzNum +"#b.");
							cm.worldSpouseMessage(0x20,"[�˺�ͻ��] ��� "+ cm.getChar().getName() +" ʹ�� �������1 �������˺�����ͻ�Ƴɹ� ����׷�� "+ zyhzNum +" �˺�ֵ ��");
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

function getNeeds(quantity) {
	var _xq = quantity;
	var _gq = 0;
	if (!cm.haveItem(4310014, quantity)) {
		_xq = cm.getItemQuantity(4310014);
		_gq = quantity-_xq;
	}
	return Array(_xq, _gq);
}
function pay(q) {
	if (q[0]>0)
		cm.gainItem(4310014, -q[0])
	if (q[1]>0)
		cm.gainItem(4000463, -q[1]);
}
function canBuy(q) {
	if (cm.haveItem(4000463, q[1]))
		return true;
	else
		return false;
}