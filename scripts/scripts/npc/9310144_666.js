var status = 0;
var typed = 0;
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
			var text = "��Ҫ����ֵ������\r\n";
			text += "#b#L1#�˽�ʲô�Ǹ���#l\r\n";
			text += "#b#L2#����С�����ײ�[300ѩ����]#l\r\n";
			text += "#b#L3#����޴󸣴��ײ�[500ѩ����]#l\r\n";
			cm.sendSimple(text);
		} else if (status == 1) {
			if (selection == 1) {
				var text = "#e#dʲô��С�����ײͣ�#n#k\r\n";
				text += "\t����С�����ײͿ������̻��#r��������[������]#k��#r45#k��#b����߼�װ��ǿ����#k��������#r30#k��#b����#k��ÿ��#b����#k�򿪿ɻ��#r15#k��#bѩ����#k��ÿ��ֻ��ʹ��һ�����ܼ�ֵ�ߴ�#e#r800Ԫ��#k#n���ۼ�Ϊ#b300ѩ����#k��\r\n";
				text += "#e#dʲô�Ǿ޴󸣴��ײͣ�#n#k\r\n";
				text += "\t����޴󸣴��ײͿ������̻��#r��������[����]#k�������Ƿ�ӵ�л��輼�ܣ������Խ��л��裬#r75#k��#b����߼�װ��ǿ����#k��������#r30#k��#b�޴󸣴�#k��ÿ��#b�޴󸣴�#k�򿪿ɻ��#r25#k��#bѩ����#k��ÿ��ֻ��ʹ��һ�����ܼ�ֵ�ߴ�#e#r1300Ԫ��#k#n���ۼ�Ϊ#b500ѩ����#k��\r\n";
				cm.sendOk(text);
				cm.dispose();
			} else if (selection == 2) {
				cm.sendYesNo("�Ƿ�Ҫ����#r300#kѩ���ҹ���С�����ײͣ�");
				typed=1;
			} else if (selection == 3) {
				cm.sendYesNo("�Ƿ�Ҫ����#r500#kѩ���ҹ���޴󸣴��ײͣ�");
				typed=2;
			}
		} else if (status == 2) {
			var paylog = cm.getSevenDayPayLog(7);
			var totalPay = 0;
			for(i=0; i<7; i++) {
				totalPay+=parseInt(paylog.get(i));
			}
			if (typed==1) {
				if (totalPay<300) {
					cm.sendOk("���������ĳ�ֵ�ۼƽ��Ϊ��#r"+totalPay+"#kԪ��δ�ﵽ#r300#kԪ���޷�����С�����ײ͡�");
					cm.dispose();
					return;
				}
								
				if (cm.haveItem(4310014, 300) && !cm.haveItem(2432529)) {
					if (cm.getBossLogAcc("С�����ײ�")==-1) {
						cm.sendOk("һ���˺�ֻ�ܰ���һ��#bС����#k�ײͣ��޷��ٰ���");
						cm.dispose();
						return;
					}
					cm.gainItem(2432529, 30);
					cm.gainItem(2049323, 45);
					cm.gainItem(2430297, 1);
					cm.gainItem(4310014, -300);
					cm.worldMessage(0x18, "�������ײ͡� : ��Ǯ�����ԣ���� " + cm.getChar().getName() + " ������С��������ײ�.");
					cm.getPlayer().dropMessage(1, "����ɹ���");
					cm.setBossLogAcc("С�����ײ�", -2);
					cm.dispose();
				} else {
					cm.sendOk("����ʧ�ܣ�����ѩ���Ҳ���������ϻ���δʹ����ĸ������޷�����");
					cm.dispose();
				}
			} else if (typed==2) {
				if (totalPay<500) {
					cm.sendOk("���������ĳ�ֵ�ۼƽ��Ϊ��#r"+totalPay+"#kԪ��δ�ﵽ#r500#kԪ���޷�����޴󸣴��ײ͡�");
					cm.dispose();
					return;
				}
				if (cm.haveItem(4310014, 500) && !cm.haveItem(2431481)) {
					if (cm.getBossLogAcc("�޴󸣴��ײ�")==-1) {
						cm.sendOk("һ���˺�ֻ�ܰ���һ��#b�޴󸣴�#k�ײͣ��޷��ٰ���");
						cm.dispose();
						return;
					}
					cm.gainItem(2431481, 30);
					cm.gainItem(2049323, 75);
					cm.gainItem(2431137, 1);
					cm.gainItem(4310014, -500);
					cm.worldMessage(0x18, "�������ײ͡� : ��Ǯ�����ԣ���� " + cm.getChar().getName() + " �����˾޴󸣴�����ײ�.");
					cm.setBossLogAcc("�޴󸣴��ײ�", -2);
					cm.getPlayer().dropMessage(1, "����ɹ���");
					cm.dispose();
				} else {
					cm.sendOk("����ʧ�ܣ�����ѩ���Ҳ���������ϻ���δʹ����ľ޴󸣴����޷�����");
					cm.dispose();
				}
			}
		}
   }
}