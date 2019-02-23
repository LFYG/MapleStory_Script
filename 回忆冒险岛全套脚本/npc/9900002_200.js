var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var status = -1;
var mySpoints = -1;
var typed = 0;
var I = null;
var selects = 0;
var buynum=0;
var itemlist = Array(
	Array(4310014, 200), 
	Array(5062009, 100), 
	Array(5062002, 60), 
	Array(5062500, 80), 
	Array(5064000, 70)
);
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
		var text = head + "�����ƹ����Ĺ���Ա����ʲô��Ҫ��������\r\n\r\n";
		text += "#e#d����ǰ���ƹ���֣�#n#k" + mySpoints + "\r\n";
		if (I.getInvitation() == null) text += "#r#L0#�������˺Ų���[��ֹ3��31��]#l\r\n\r\n";
		text += "#b#L2#�鿴�ƹ�ϵͳ˵��#l\r\n";
		text += "#b#L1#�ƹ���ֶһ�#l\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		typed = selection;
		if (selection == 0) {
			cm.sendGetText("�����������ߵ��˺ţ�");
		} else if (selection == 1) {
			var text = head + "��ѡ����Ҫ�һ�����Ʒ��\r\n#b";
			for (var i = 0; i < itemlist.length; i++) {
				text += "#L" + (i) + "##i" + itemlist[i] + ":##t" + itemlist[i] + "# - #r" + itemlist[i][1] + "#b����  \r\n";
				if (i != 0 && (i + 1) % 5 == 0) {
					text += "\r\n";
				}
			}
			cm.sendSimple(text);
		} else if (selection == 2) {
			var text = head + "#e#d<�ƹ�ϵͳ����>#n#k\r\n";
			text += "\t��Ϊ#e#r��������#k#n������������һ�������ߵ��˺ţ�ֻ������һ�Σ�������ɺ��޷����ģ�������֮����������ȡ10000�����ȯ�Լ�һöѫ�£���#r�㣨�������ߣ�#k��ɻ�Ծ���������ȡ����ʱ�佱�����߳�ֵ��ʱ�򣬻�ʹ���#b������#k�����Ӧ���ƹ���֡�\r\n";
			text += "\t��Ϊ#e#r������#k#n����������ÿ��ֵ#r1Ԫ#k���Ϳ��Ի��#r1��#k���֣�ÿ���һ����Ծ�׶��������ȡ���߽���ʱҲ���Ի����Ӧ���֡�������ʹ���ƹ���ֶһ���Ӧ����Ʒ���ƹ����Ч����Խ�࣬��Ļ���һ�����������ϡ�";
			cm.sendSimple(text);
			status = -1;
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
					cm.gainNX(2, 10000);
					cm.gainItem(1142073, 1);
					cm.sendSimple("���óɹ������������״���д������������#r10000#k����ȯ�Լ�#b#t1142073##kһ����");
					status = -1;
				} else {
					cm.sendSimple("���Ѿ����ù������ߵ��˺ţ��޷��ظ����á�");
					status = -1
				}
			} else {
				cm.sendSimple("#r���˺Ų����ڣ��޷����á�#k");
				status -= 2;
			}
		} else if (typed == 1) {
			selects = selection;
			cm.sendGetNumber("������������������Ҫ�һ�������\r\n\r\n#r1����Ҫ" + itemlist[selects][1] + "��#b�ƹ����#k", 1, 1, 100);
		}
	} else if (status == 3) {
		buynum = selection;
		cm.sendNext("����һ�" + buynum + "��#r#i" + itemlist[selects][0] + "##k��\r\n�㽫ʹ�õ�" + (buynum * itemlist[selects][1]) + "���ƹ����");
	} else if (status == 4) {
		var itemid = itemlist[selects][0];
		if (cm.getSpace(Math.floor(itemid / 1000000)) < 1) {
			cm.sendOk("���ı����ռ䲻�㣬��������ٹ���");
			cm.dispose();
			return;
		}
		var price = buynum * itemlist[selects][1];
		if (mySpoints >= price) {
			I.gainPoints(-price);
			mySpoints+=-price;
			cm.gainItem(itemlist[selects][0], buynum);
			cm.sendSimple("�һ��ɹ��ˣ�");
			status = -1;
		} else {
			cm.sendSimple("�ƹ���ֲ��㣬�һ�ʧ�ܣ�");
			status = -1;
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