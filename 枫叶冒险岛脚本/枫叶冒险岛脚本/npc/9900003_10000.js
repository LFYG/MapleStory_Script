/* ϴװ��Ǳ�� */

var status = -1;
var potList = Array(
Array(40603, "����BOSSʱ�˺���+40%", 1),
Array(40292, "���ӹ���40%�ķ�����", 1),
Array(42051, "��������+12%", 1),
Array(60001, "���˺���+12% (�����޸ĸ���Ǳ��)", 1),
Array(60002, "�������ԣ�+20% (�����޸ĸ���Ǳ��)", 1),
Array(60007, "MaxHP : +10% (�����޸ĸ���Ǳ��)", 1),
Array(60008, "������/ħ����+10% (�����޸ĸ���Ǳ��)", 1),
Array(40055, "������ 12%", 1));
var potId = -1; //Ǳ�ܵ�ID
var depict = ""; //Ǳ�ܵ�����
var points = 5; //ÿ�εļ۸�
var potline = 1; //�޸ĵ�Ǳ���ǵڼ���
var oldEquip;
var newEquip;
var count = 1; //����ϴ���Ǹ����ԵĴ���
var slot = 1; //������Ҫ�޸ĵ�װ���ڱ�����λ��
var potline = 1; //������Ҫ�޸ĵ��ǵڼ���Ǳ�� [1-3] Ϊ��ͨ [4-6] Ϊ����
var Nx = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n\r\n�װ���#r#h ##k���ã�һ��Ǳ�ܿ��Խ�װ���ĵ�һ�������޸�Ϊ����ѡ������ԣ��뽫װ��������װ������һ�����иò�����\r\nһ��Ǳ�ܽ�����#r5��Ԫ��#k��#r25��-100��#k֮��ĵ����������#r100��#k���ſ��Խ��С�";
        for (var i = 0; i < potList.length; i++) {
            selStr += "\r\n#L" + i + "##b " + potList[i][1] + "#k#l";
        }
        cm.sendSimple(selStr + " \r\n ");
    } else if (status == 1) {
        oldEquip = cm.getEquipBySlot(slot);
        if (oldEquip == null || oldEquip.getState() != 0x14) { //oldEquip.getState() != 0x14 ���װ����ͨǱ���Ƿ� SS
            cm.sendOk("���ִ���: \r\n��������1��λ�õ�װ��Ϊ�� ���� װ����Ǳ�ܵȼ���Ϊ SS");
            cm.dispose();
            return; //���ִ���ֱ�ӷ��� ��ִ������Ĳ��� �������ע��
        }
        var pot = potList[selection];
        if (pot != null) {
            potId = pot[0];
            depict = pot[1];
            cm.sendYesNo("���Ƿ�Ҫ��#bװ������һ��װ��\r\n��һ��Ǳ������(����ı�����Ǳ������)#k\r\nһ��ϴǱ������Ϊ #b" + depict + "#k��");
        } else {
            cm.sendOk("���ִ���...");
            cm.dispose();
        }
    } else if (status == 2) {
		if(getMyRmb() < points) {
			cm.sendOk("��ȷ�ϳ�ֵ����Ƿ���5Ԫ");
			cm.dispose();
			return;
		}
		if (cm.getCSPoints(1) < 1000000) {
			cm.sendOk("��ȷ���˺�����100�����������ܽ��д˲�����");
			cm.dispose();
			return ;
		}
		if (potId <= 0 || depict == "" || points <= 0) {
			cm.sendOk("���ִ���...");
			cm.dispose();
			return;
		}
		cm.sendYesNo("�Ƿ�ȷ����װ���ĵ�һ��Ǳ���޸�Ϊ #b" + depict + "#k ��\r\n");
    } else if (status == 3) {
        newEquip = cm.getEquipBySlot(slot);
        if (oldEquip == newEquip) { //����ط�����Ҫ���������
			if (cm.changePotential(slot, potline, potId, true)) { //[װ��λ��] [Ǳ��λ��] [Ǳ��ID] [�Ƿ񹫸�]
				gainRmb(-5);
				var costNX=Math.floor(Math.random()*750000+250000);
				cm.sendOk("��ϲ���ɹ�ϴ��Ǳ������,������"+costNX+"����5Ԫ���");
				cm.getPlayer().saveToDB(false, false);
				cm.dispose();
				return;
			} else {
				cm.sendOk("���ִ���...");
				cm.dispose();
			}
        } else {
            cm.sendOk("���ִ���...");
	   		cm.dispose();
        }
    }
}

function getMyRmb() {
	var myRmb;
	var conn = cm.getConnection();
	var sql = "select rmb from accounts where id = ?;";
	var pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, cm.getPlayer().getAccountID());
	var myRmbSql = pstmt.executeQuery();
	if (myRmbSql.next()) {
		myRmb = myRmbSql.getString("rmb");
	} else {
		myRmb = 0;
	}
	myRmbSql.close();
	pstmt.close();
	return myRmb;
}

function gainRmb(num) {
	var myRmb;
	var conn = cm.getConnection();
	var sql = "update accounts set rmb=rmb+? accounts where id = ?;";
	var pstmt = conn.prepareStatement(sql);
	pstmt.setInt(1, num);
	pstmt.setString(2, cm.getPlayer().getAccountID());
	var myRmbSql = pstmt.executeUpdate();
	myRmbSql.close();
	pstmt.close();
	return true;
}