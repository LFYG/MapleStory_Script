
var status = -1;
var text;
var sel;
var rmb;
var aaa ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var cal = java.util.Calendar.getInstance();
var month = cal.get(java.util.Calendar.MONTH) + 1; //����·�
var year = cal.get(java.util.Calendar.YEAR); //������
var bosslogId = year+""+month+"���ۼƳ�ֵ���";
// ÿ���������ĳ�ֵ���
var condition = new Array(10, 100, 300, 500, 1000, 2000, 5000);
var reward = new Array(// �����š�����id������
	//10
	Array(1, 5062002, 1),
	Array(1, 5062000, 1),
	Array(1, 5062500, 1),
	//100
	Array(2, 5062002, 10),
	Array(2, 5062000, 10),
	Array(2, 5062500, 10),
	Array(2, 5064000, 2),
	Array(2, 2340000, 2),
	//300
	Array(3, 5062002, 15),
	Array(3, 5062000, 15),
	Array(3, 5062500, 15),
	Array(3, 5064000, 3),
	Array(3, 2340000, 3),
	Array(3, 2049116, 3),
	Array(3, 2049124, 3),
	//500
	Array(4, 2430640, 1),
	Array(4, 5062002, 30),
	Array(4, 5062000, 30),
	Array(4, 5062500, 30),
	Array(4, 5064000, 5),
	Array(4, 2049116, 5),
	Array(4, 2049124, 5),
	Array(4, 2340000, 5),
	//1000
	Array(5, 2431995, 1),
	Array(5, 5062002, 50),
	Array(5, 5062000, 50),
	Array(5, 5062500, 50),
	Array(5, 5064000, 10),
	Array(5, 2049116, 10),
	Array(5, 2049124, 10),
	Array(5, 2340000, 10),
	Array(5, 4310129, 200),
	//2000
	Array(6, 2431725, 1),
	Array(6, 5062002, 100),
	Array(6, 5062000, 100),
	Array(6, 5062500, 100),
	Array(6, 5062009, 100),
	Array(6, 5064000, 20),
	Array(6, 2049116, 20),
	Array(6, 2049124, 20),
	Array(6, 2340000, 20),
	Array(6, 2049323, 20),
	Array(6, 4310129, 400),
	Array(6, 4000517, 20),
	//5000
	Array(7, 2431996, 1),
	Array(7, 5062002, 150),
	Array(7, 5062000, 150),
	Array(7, 5062500, 150),
	Array(7, 5062009, 150),
	Array(7, 5064000, 50),
	Array(7, 2049116, 50),
	Array(7, 2049124, 50),
	Array(7, 2340000, 50),
	Array(7, 2049323, 50),
	Array(7, 4310129, 1000),
	Array(7, 4000517, 50)
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

	rmb = getMonthRMB();
	var curlevel = -1;

	if (status == 0) {
		text = "�������ۼƳ�ֵ���Ϊ�� #r" + rmb + "#k Ԫ\r\n\r\n";
		for (var i = 1; i <= condition.length; i++) {
			text += "#b#L" + i + "#"+aaa+" �����ۼƳ�ֵ #r" + condition[i-1] + " #bԪ����";
			if (cm.getBossLogAcc(bosslogId + i) == -1) {
				text += "(����ȡ)";
				curlevel = curlevel == -1 ? i : curlevel;
			}
			text += "#l\r\n";
		}
		text += "#k";
		cm.sendSimple(text);
	} else if (status == 1) {
		sel = selection;
		text = "\t\t\t#e#r- �����ۼƳ�ֵ" + condition[selection - 1] + "Ԫ���� -#k#n\r\n\r\n";
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == selection) {
				text += "\t\t\t#i" + reward[i][1] + "# #z" + reward[i][1] + "#[" + reward[i][2] + "��]\r\n";
			}
		}
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (cm.getBossLogAcc(bosslogId + sel) == -1) {
			cm.sendOk("���������Ѿ���ȡ����");
			cm.dispose();
			return;
		}
		if (rmb < condition[sel-1]) {
			cm.sendOk("�����ۼƳ�ֵ���㣬�޷���ȡ��");
			cm.dispose();
			return;
		}
		var rewardlist = new Array();
		for (var i = 0; i < reward.length; i++) {
			if (reward[i][0] == sel) {
				if (reward[i][3]==null)
					reward[i][3]=-1;
				rewardlist.push(new Array(reward[i][1], reward[i][2], reward[i][3]));
			}
		}
		if (!cm.canHoldSlots(rewardlist.length)) {
			cm.sendOk("�����ռ䲻�㣬��ȷ������ÿ����λ������ " + rewardlist.length + " ��ռ�");
			cm.dispose();
			return;
		}
		for (var i = 0; i < rewardlist.length; i++) {
			if (rewardlist[i][0]==2430865) {
				cm.gainItem(rewardlist[i][0], rewardlist[i][1], rewardlist[i][2]);
			} else {
				cm.gainItem(rewardlist[i][0], rewardlist[i][1]);
			}
		}
		cm.setBossLogAcc(bosslogId + sel, -2);
		cm.playerMessage(1, "��ȡ�ɹ���");
		cm.channelMessage(0x18, "�������ۼƳ�ֵ��" + " : " + "��� " + cm.getChar().getName() + " ��ȡ�˱����ۼƳ�ֵ " + condition[sel-1] + " Ԫ������");
		cm.dispose();
	}
}

function getMonthRMB() {
	var conn = cm.getConnection();
	var myAccountName =getAccountName(cm.getPlayer().getId());
	var sql = "select sum(rmb) as totalrmb from paylog where account=? and date_format(paytime,'%Y-%m')=date_format(now(),'%Y-%m');";
	var pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, myAccountName);
	var result = pstmt.executeQuery();
	var totalrmb = 0;
	if (result.next()) {
		totalrmb = result.getInt('totalrmb');
	}
	result.close();
	pstmt.close();
	return totalrmb;
}

function getAccountName(charid) {
	var sql = "select name from accounts where id = (select accountid from characters where id = "+charid+");";
	var accountQuery = cm.getConnection().prepareStatement(sql).executeQuery();
	var accountName = null;
	if (accountQuery.next())
		accountName = accountQuery.getString("name");
	accountQuery.close();
	return accountName;
}