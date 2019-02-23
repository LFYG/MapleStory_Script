/*
	��Ծ����� 5��
*/

var status;
var maxtimes = 3;
var reward = Array(
					//Array(2431988, 1, 1, 10),
					Array(2028175, 1, 1, 20),		// �������������
					Array(2049300, 2, 5, 30),		// �߼�װ��ǿ������
					Array(2048307, 2, 5, 40),		// ���⸽��Ǳ�ܸ��Ӿ���
					Array(4310030, 10, 20, 45),		// �˶����
					Array(4310036, 100, 500, 50),		// �����߱�
					Array(4310058, 3, 5, 55),		//�����˹
					Array(5064000, 1, 3, 60),		// ��������
					//Array(4001832, 50, 100, 65),
					Array(4000313, 50, 100, 65),
					Array(4001839, 10, 20, 65),
					Array(5062000, 1, 3, 90),		// ����ħ��
					Array(5062009, 1, 2, 95),		// ��������ħ��
					Array(2049323, 1, 1, 100)		// �߼�װ��ǿ������ ����
					);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode <= 0) {
		im.dispose();
		return;
	} else {
		if (mode == 1) {
			status++;
		} else {
			status--;
		}
	}

	if (status == 0) {
		if (im.getSpace(2) < maxtimes) {
			im.sendOk("�������ռ䲻�㣬��������ٴ�");
			im.dispose();
			return;
		} else if (im.getSpace(5) < maxtimes) {
			im.sendOk("�������ռ䲻�㣬��������ٴ�");
			im.dispose();
			return;
		}
		var togain = new Array();
		for (; maxtimes > 0; maxtimes--) {
			var chance = Math.floor(Math.random() * 999999);
			for (var i in reward) {
				if (Math.floor(chance / 999999 * 100) < reward[i][3] && !contains(togain, reward[i][0])) {
					var quantity = Math.floor(Math.random() * (reward[i][2] - reward[i][1]) + reward[i][1]);
					togain.push(new Array(reward[i][0], quantity));
					break;
				}
			}
		}
		im.gainItem(2431981, -1);
		var message = "[��Ծ�����] : [" + im.getPlayer().getName() + "]�ӻ�Ծ��5������л��";
		for (var item in togain) {
			message += "[" + im.getItemName(togain[item][0]) + togain[item][1] + "��] ";
			im.gainItem(togain[item][0], togain[item][1]);
		}
		if (im.getBossLogAcc("�ƹ����5")<=0) {
			gainTGP(11);
			im.setBossLogAcc("�ƹ����5");
		}
		im.showEffect(true, "Yut/goal");
		im.worldSpouseMessage(0x15, message);
		im.dispose();
	}
}

function contains(togain, itemid) {
	for (var i in togain) {
		if (togain[i][0] == itemid) {
			return true;
		}
	}
	return false;
}

function gainTGP(quantity) {
	var sql = "update accounts set spoints = spoints + ? where name = (select invitation from (select invitation from accounts where id = ?) as temp);";
	var id = im.getPlayer().getAccountID();
	var pstmt = im.getConnection().prepareStatement(sql);
	pstmt.setString(1, quantity);
	pstmt.setInt(2, id);
	var isSuccess = (pstmt.executeUpdate() > 0) ? true: false;
	pstmt.close();
	return isSuccess;
}