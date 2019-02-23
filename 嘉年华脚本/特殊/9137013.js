var status;
var eff ="#fUI/UIWindow/Quest/icon6/7#";
var bili = 3000;

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
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("�������Ҫ����н�Ļ�����ô���´������ң�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            cm.sendSimple("#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã�������Խ����һ�Ϊ��ȯ\r\n  �һ����� 1:" + bili + ",��������ٶһ�Ŷ!!!\r\n\r\n  ����ǰ���Ϊ:#r " + cm.getRMB() + " #kԪ\r\n  ����ǰ��ȯΪ:#r " + cm.getNX(1) + "#k��\r\n#b#L0#" + eff + "��Ҫ�һ���ȯ#l\r\n");
        } else if (status == 1) {
            cm.sendGetNumber("#e#r��������Ҫ�һ�������(�һ�����Ϊ1:" + bili + ")\r\n\r\n ", 1, 1, 1000);
        } else if (status == 2) {
            if (selection < 1 || selection > 1000) {
                cm.sendOk("�������ַǷ�������������");
                status = 0;
            } else if (cm.getRMB() < selection) {
                cm.sendOk("��û����ô���������������");
                status = 0;
            } else {
                cm.gainRMB(-selection);
                cm.gainNX(1, selection * bili);
                cm.sendOk("#e��ϲ��ɹ���#r " + selection + " ��� #k�һ��� #r" + (selection * bili) + " ��ȯ#k\r\n\r\n#bף����Ϸ��죡");
                cm.dispose();
            }
            status = -1;
        }
    }
}

function getRMB() {
	var ret = 0;
	var conn = cm.getConnection();
    var UpDateData = conn.prepareStatement("SELECT rmb FROM accounts WHERE id = ?");
    UpDateData.setInt(1, cm.getPlayer().getAccountID());
	var rs = UpDateData.executeQuery();
	if (rs.next())
	{
		ret = rs.getInt("rmb");
	}
	UpDateData.close();
	return ret;
}

function gainRMB(times) {
	var conn = cm.getConnection();
    var UpDateData = conn.prepareStatement("UPDATE accounts SET rmb = rmb + ? WHERE id = ?");
    UpDateData.setInt(1, times);
    UpDateData.setInt(2, cm.getPlayer().getAccountID());
	UpDateData.executeUpdate();
	UpDateData.close();
}