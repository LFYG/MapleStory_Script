var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var status = -1;
var mySpoints = -1;
var typed = 0;
var I = null;

function start() {
	I = new Invitation();
	if (mySpoints < 0) mySpoints = I.getPoints();
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		var text = head + "��ӭ������#b����ð�յ�#k��������Ҫ����һ�����⣬���ǴӺε�֪#b����ð�յ�#k���أ�\r\n";
		text += "#b#L0#�������ѽ������ġ�#l\r\n";
		text += "#b#L1#�����Լ��ҵ��ġ�#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		typed = selection;
		
		if (selection == 0) {
			cm.sendGetText("�����������ѵ��˺ţ�");
		} else if (selection == 1) {
			cm.dispose();
			cm.gainNX(2, 10000);
			cm.gainItem(1142073, 1);
			cm.setBossLogAcc("�ƹ�����", -2);
			cm.openNpc(2008, 1);
		}
	} else if (status == 2) {
		if (typed == 0) {
			var invitation = cm.getText();
			var myAccount = cm.getC().getAccountName();
			//�ƹ��˺Ų���Ϊ�Լ�
			if (invitation == myAccount) {
				status = -1;
				cm.sendSimple("�޷�ʹ���Լ����˺š�");
				return;
			}
			var isExists = I.checkAccountVaild(invitation);
			if (isExists) {
				var isSuccess = I.setInvitation(invitation);
				if (isSuccess) {
					cm.dispose();
					cm.setBossLogAcc("�ƹ�����", -2);
					cm.gainNX(2, 10000);
					cm.gainItem(1142073, 1);
					cm.openNpc(2008, 1);
					return;
				//	status = -1;
				} else {
					cm.setBossLogAcc("�ƹ�����", -2);
					cm.sendSimple("���Ѿ����ù������ߵ��˺ţ��޷��ظ����á�");
					status = -1
				}
			} else {
				cm.sendSimple("#r���˺Ų����ڣ��޷����á�#k");
				status -= 2;
			}
		}
	}
}

var Invitation = function() {

	this.invitation = null;
	this.db = cm.getConnection();
	this.setInvitation = function(name) {
		var sql = "UPDATE accounts SET invitation = ? WHERE id = ? and (invitation is NULL or invitation = '')";
		var id = cm.getPlayer().getAccountID();
		var pstmt = this.db.prepareStatement(sql);
		pstmt.setString(1, name);
		pstmt.setInt(2, id);
		var isSuccess = (pstmt.executeUpdate() > 0) ? true: false;
		pstmt.close();
		return isSuccess;
	}

	//��ȡ�ҵ�������
	this.getInvitation = function() {
		if (this.invitation != null) return this.invitation;
		var sql = "SELECT invitation FROM accounts WHERE name = ?";
		var pstmt = this.db.prepareStatement(sql);
		var name = cm.getC().getAccountName();
		pstmt.setString(1, name);
		var rs = pstmt.executeQuery();
		if (rs.next()) this.invitation = rs.getString("invitation");
		rs.close();
		pstmt.close();
		return this.invitation;
	}

	//����˺źϷ���
	this.checkAccountVaild = function(name) {
		var sql = "SELECT count(id) as num FROM accounts WHERE name = ?";
		var pstmt = this.db.prepareStatement(sql);
		pstmt.setString(1, name);
		var count = 0;
		var rs = pstmt.executeQuery();
		if (rs.next()) count = rs.getInt("num");
		rs.close();
		pstmt.close();
		return (count > 0) ? true: false;
	}

	//��ȡ����
	this.getPoints = function() {
		var sql = "SELECT spoints FROM accounts WHERE name = ?";
		var pstmt = this.db.prepareStatement(sql);
		var name = cm.getC().getAccountName();
		pstmt.setString(1, name);
		var count = 0;
		var rs = pstmt.executeQuery();
		if (rs.next()) count = rs.getInt("spoints");
		rs.close();
		pstmt.close();
		return count;
	}

	//���ָ���
	this.gainPoints = function(quantity) {
		var sql = "UPDATE accounts SET spoints = spoints + ? WHERE id = ?";
		var id = cm.getPlayer().getAccountID();
		var pstmt = this.db.prepareStatement(sql);
		pstmt.setString(1, quantity);
		pstmt.setInt(2, id);
		var isSuccess = (pstmt.executeUpdate() > 0) ? true: false;
		pstmt.close();
		return isSuccess;
	}
}