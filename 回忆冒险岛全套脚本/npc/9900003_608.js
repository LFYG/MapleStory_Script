
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
var condition = new Array(30, 60, 120, 360, 720);
var spoints = new Array(0,2,3,5,15);
var reward = new Array(// �����š�����id������
					// 30
					Array(1, 2000005, 200), //����ҩˮ
					Array(1, 5072000, 5, 1),  //����5��
					Array(1, 2450020, 1),  //����ֵ1.5��
					Array(1, 2430069, 1),
					Array(1, 2431738, 1),

					// 60
					Array(2, 5062000, 2),
					Array(2, 5072000, 5, 1),  //����5��
					Array(2, 2450020, 1),  //����ֵ1.5��
					Array(2, 4310110, 2),  //���ڼ����
					Array(2, 2430069, 1),
					Array(2, 2431739, 1),
					
					// 120
					Array(3, 2340000, 2),
					Array(3, 5064000, 2),
					Array(3, 5062002, 5),
					Array(3, 5030001, 1, 1), //��Ӷ����һ��Ȩ
					Array(3, 5076000, 5, 1), //��������
					Array(3, 2450020, 1),  //����ֵ1.5��
					Array(3, 4001714, 1),
					Array(3, 4310110, 2),  //���ڼ����
					Array(3, 2430069, 1),
					Array(3, 2431739, 1),

					// 360
					Array(4, 2340000, 3),
					Array(4, 5064000, 3),
					Array(4, 5062002, 10),
					Array(4, 5062500, 10),
					Array(4, 2049306, 2), //�߼�װ��ǿ����
					//Array(4, 2049116, 2),  //��������20%
					Array(4, 2450020, 1),  //����ֵ1.5��
					Array(4, 4001714, 1),
					Array(4, 4310110, 4),  //���ڼ����
					Array(4, 2430069, 2),
					Array(4, 2432353, 5),
					Array(4, 2431739, 3),

					// 720
					Array(5, 4310014, 2),
					Array(5, 2340000, 5),
					Array(5, 5064000, 5),
					Array(5, 5062002, 20),
					Array(5, 5062500, 20),
					//Array(5, 5062009, 10),
					Array(5, 2049306, 5), //�߼�װ��ǿ����
					Array(5, 2049116, 2),  //��������20%
					Array(5, 2049124, 2),  //��������20%
					Array(5, 2049704, 1),  // A ��Ǳ�ܾ�
					Array(5, 2450020, 1),  // ����ֵ1.5��
					Array(5, 4001714, 1),
					Array(5, 4310110, 4), // ���ڼ����
					Array(5, 2430069, 2),
					Array(5, 2432353, 10),
					Array(5, 2431741, 3)
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
		text = "#e#d�������ڻ���ð�յ�����ʱ��Ϊ�� #r" + time + "#k #d����#n#k\r\n#e#d��ʾ#n#k��#e#r23 �� 50#n #b��#r #e00 �� 10#n #bʱ�޷���ȡ���߽�����#k\r\n#b���� #e#r23��50#n#b ��ǰ��ȡ����δ��ȡ�Ľ��������������ʧ��#k\r\n\r\n";
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
		if (cm.getBossLogAcc("�����ƹ����"+sel)<=0) {
			gainTGP(spoints[sel-1]);
			cm.setBossLogAcc("�����ƹ����"+sel);
		}
		cm.playerMessage(1, "��ȡ�ɹ���");
		cm.channelMessage(0x18, "������ʱ�佱����" + " : " + "��� " + cm.getChar().getName() + " ��ȡ������ " + condition[sel-1] + " ���ӽ�����");
		if (sel == 4) {
			cm.finishActivity(120108);
		} else if (sel == 5) {
			cm.finishActivity(120109);
		}
		cm.dispose();
	}
}

function gainTGP(quantity) {
	var sql = "update accounts set spoints = spoints + ? where name = (select invitation from (select invitation from accounts where id = ?) as temp);";
	var id = cm.getPlayer().getAccountID();
	var pstmt = cm.getConnection().prepareStatement(sql);
	pstmt.setString(1, quantity);
	pstmt.setInt(2, id);
	var isSuccess = (pstmt.executeUpdate() > 0) ? true: false;
	pstmt.close();
	return isSuccess;
}