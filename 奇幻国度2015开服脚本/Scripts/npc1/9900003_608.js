
var status = -1;
var text;
var sel;
var time;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ca = java.util.Calendar.getInstance();
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����

// ÿ��������������ʱ��
var condition = new Array(10, 30, 60, 120, 300, 600, 800, 1000);
var reward = new Array(// �����š�����id������
					// ���1
					Array(1, 2000005, 100), //����ҩˮ
					Array(1, 2450020, 1),

					// ���2
					Array(2, 2000005, 100),  //����ҩˮ
					Array(2, 5130002, 1, 30 * 1000 * 60),  //ǿЧ�����
					Array(2, 5072000, 5, 1),  //����5��
					Array(2, 2450020, 2),  //����ֵ1.5��

					// ���3
					Array(3, 5062500, 5),  //��ʦ��������ħ��
					Array(3, 5062000, 5),  //����ħ��
					Array(3, 5062002, 5),  //�߼�����ħ��
					Array(3, 5030001, 1, 1), //��Ӷ����һ��Ȩ
					Array(3, 5076000, 5, 1), //��������
					Array(3, 2049306, 5), //�߼�װ��ǿ����
					Array(3, 4001713, 10),

					// ���4
					Array(4, 5062000, 8),
					Array(4, 5062002, 8),
					Array(4, 5062500, 8),
					Array(4, 2049306, 1), //�߼�װ��ǿ����
					Array(4, 2049124, 3),  //����������
					Array(3, 4001713, 5),
					Array(4, 4310110, 1),  //���ڼ����
					

					// ���5
					Array(5, 5062000, 10),
					Array(5, 5062002, 10),
					Array(5, 5062500, 10),
					Array(5, 2340000, 1),
					Array(5, 2049124, 3),  //����������
					Array(5, 2049306, 1), //�߼�װ��ǿ����
					Array(5, 4310110, 1),  //���ڼ����
					
					// ���6 
					Array(6, 5062000, 12),
					Array(6, 5062002, 12),
					Array(6, 5062500, 12),
					Array(6, 5062010, 1),  // �ռ�����ħ��
					Array(6, 2049704, 1),  // A ��Ǳ�ܾ�
					Array(6, 2340000, 2),
					Array(6, 5064000, 2),  //��������
					Array(6, 2049306, 1), //�߼�װ��ǿ����
					Array(6, 2049124, 3), //����������
					Array(6, 4310110, 2), //���ڼ����
					
				
					//���7
					Array(7, 5062000, 15),
					Array(7, 5062002, 15),
					Array(7, 5062500, 15),
					Array(7, 5062010, 5),  // �ռ�����ħ��
					Array(7, 2340000, 3),
					Array(7, 5064000, 3),  //��������
					Array(7, 2049306, 2), //�߼�װ��ǿ����
					Array(7, 2049124, 3), //����������
					Array(7, 4310110, 4), //���ڼ����
					
					//���8
					Array(8, 4001714, 15),
					Array(8, 5064000, 10),  //��������
				    Array(8, 2450022, 2),
					Array(8, 2022709, 2),
					Array(8, 4310110, 5),  //���ڼ����
					Array(8, 5062010, 5),  // �ռ�����ħ��
		            Array(8, 5062000, 15),
					Array(8, 5062002, 15),
					Array(8, 5062500, 15)
			);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0)
	{
		cm.dispose();
		return;
	}
	if (mode == 1)
	{
		status++;
	} else {
		status--;
	}

	var time = cm.getPlayer().getTodayOnlineTime();
	var curlevel = -1;

	if (status == 0) {
		text = "#e#d�������ڴҴ�ð�յ�����ʱ��Ϊ�� #r" + time + "#k #d����#n#k\r\n#e#d��ʾ#n#k��#e#r23 �� 50#n #b��#r #e00 �� 10#n #bʱ�޷���ȡ���߽�����#k\r\n#b���� #e#r23��50#n#b ��ǰ��ȡ����δ��ȡ�Ľ��������������ʧ��#k\r\n\r\n";
		for (var i = 1; i <= condition.length; i++) {
			text += "#b#L" + i + "#"+aaa+" ��ȡ����" + condition[i-1] + "���ӽ���";
			if (cm.getBossLog("�������" + i) > 0) {
				text += "(����ȡ)";
				curlevel = curlevel == -1 ? i : curlevel;
			}
			text += "#l\r\n";
		}
		text += "#k";
		cm.sendSimple(text);
	} else if (status == 1) {
		// 23:50 ~ 23: 59 ǰһ�첻��ȡ��ʱ��  00:00 ~ 00:10 �ڶ��첻��ȡ��ʱ��  
		if ((hour == 23 && (minute >= 50 && minute <= 59)) || (hour == 0 && (minute >= 0 && minute <= 10))){
			cm.sendOk("#d��������ǰʱ�䣺 #r" + hour +" ʱ " + minute + " �� " + second + " ��#k\r\n\r\n#e#d��ʾ#n#k��#r23 �� 50 #b��#r 00 �� 10 #bʱ�޷���ȡ���߽�����#k");
			cm.dispose();
			return;
		}
		if (cm.getBossLog("�������" + selection) > 0) {
			cm.sendOk("���������Ѿ���ȡ����");
			cm.dispose();
			return;
		}
		sel = selection;
		text = "\t\t\t\t#e#r- ���� " + condition[selection - 1] + " ���ӽ��� -#k#n\r\n\r\n";
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == selection) {
				text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "��]\r\n";
			}
		}
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (time < condition[sel-1]) {
			cm.sendOk("����ʱ�䲻�㣬�޷���ȡ��");
			cm.dispose();
			return;
		}
		var rewardlist = new Array();
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == sel) {
				if (reward[i][3] == null || reward[i][3] == '')
					reward[i][3]=0;
				rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
			}
		}
		if (!cm.canHoldSlots(rewardlist.length)) {
			cm.sendOk("�����ռ䲻�㣬��ȷ������ÿ����λ������ " + rewardlist.length + " ��ռ�");
			cm.dispose();
			return;
		}
		for (var i = 0; i < rewardlist.length; i++) {
			if (rewardlist[i][2] != 0) {
				//�����޵���
				cm.gainItemPeriod(rewardlist[i][0], rewardlist[i][1], rewardlist[i][2]);
				//java.lang.System.out.println("��");
			} else {
				//�����޵���
				cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
			}
		}
		cm.setBossLog("�������" + sel);
		cm.playerMessage(1, "��ȡ�ɹ���");
		cm.channelMessage(0x18, "������ʱ�佱����" + " : " + "��� " + cm.getChar().getName() + " ��ȡ������ " + condition[sel-1] + " ���ӽ�����");
		if (sel == 5) {
			cm.finishActivity(120108);
		} else if (sel == 6) {
			cm.finishActivity(120109);
		}
		cm.dispose();
	}
}