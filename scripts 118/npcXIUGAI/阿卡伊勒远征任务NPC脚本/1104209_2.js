/*
	���ڵ�ͼ: 		�ڰ���̳ǰ��
	�ű�����: 		��������Զ����
*/

var status = 0;
var maxAkayile = 3;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 272020110) { //�������� - �ڰ���̳ǰ�� ���
        switch (status) {
        case 0:
            if (cm.getPlayer().getLevel() < 120) {
                cm.sendOk("��ĵȼ�С�� 120 �����޷���ս�������ա�");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getClient().getChannel() != 1) {
                cm.sendOk("��������ֻ���� 1 Ƶ����ս��");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("Akayile");
            if (em == null) {
                cm.sendOk("�����嵥Ϊ�գ�����ϵ����Ա��");
                cm.safeDispose();
                return;
            }
            var prop = em.getProperty("state");
            var data = cm.getBossLog("��������");
            if (prop == null || prop.equals("0")) {
                var squadAvailability = cm.getSquadAvailability("Akayile1");
                if (squadAvailability == -1) {
                    status = 1;
                    if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                        cm.sendOk("��������ս�������յĴ����Ѿ����꣬������������ս�ɣ�");
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("���ڿ�������Զ���ӣ������ΪԶ���Ӷӳ���");
                } else if (squadAvailability == 1) {
                    if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                        cm.sendOk("��������ս�������յĴ����Ѿ����꣬������������ս�ɣ�");
                        cm.dispose();
                        return;
                    }
                    // -1 = Cancelled, 0 = not, 1 = true
                    var type = cm.isSquadLeader("Akayile1");
                    if (type == -1) {
                        cm.sendOk("�Ѿ����������롣");
                        cm.safeDispose();
                    } else if (type == 0) {
                        var memberType = cm.isSquadMember("Akayile1");
                        if (memberType == 2) {
                            cm.sendOk("��Զ���ӵ��Ʋ�������");
                            cm.safeDispose();
                        } else if (memberType == 1) {
                            status = 5;
                            cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӡ�#l \r\n#b#L2#�˳�Զ���ӡ�#l");
                        } else if (memberType == -1) {
                            cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
                            cm.safeDispose();
                        } else {
                            status = 5;
                            cm.sendSimple("����������ʲô�� \r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӡ�#l \r\n#b#L2#�˳�Զ���ӡ�#l");
                        }
                    } else { // Is leader
                        status = 10;
                        cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӳ�Ա��#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ��#l");
                        // TODO viewing!
                    }
                } else {
                    var eim = cm.getDisconnected("Akayile");
                    if (eim == null) {
                        var squd = cm.getSquad("Akayile1");
                        if (squd != null) {
                            if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                                cm.sendOk("��������ս�������յĴ����Ѿ����꣬������������ս�ɣ�");
                                cm.dispose();
                                return;
                            }
                            cm.sendYesNo("Զ���ӵ���ս�Ѿ���ʼ.\r\n" + squd.getNextPlayer());
                            status = 3;
                        } else {
                            cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ.");
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNo("��Ҫ��������Զ��������?");
                        status = 2;
                    }
                }
            } else {
                var eim = cm.getDisconnected("Akayile");
                if (eim == null) {
                    var squd = cm.getSquad("Akayile1");
                    if (squd != null) {
                        if (data >= maxAkayile && !cm.getPlayer().isGM()) {
                            cm.sendOk("��������ս�������յĴ����Ѿ����꣬������������ս�ɣ�");
                            cm.dispose();
                            return;
                        }
                        cm.sendYesNo("Զ���ӵ���ս�Ѿ���ʼ.\r\n" + squd.getNextPlayer());
                        status = 3;
                    } else {
                        cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ.");
                        cm.safeDispose();
                    }
                } else {
                    cm.sendYesNo("��Ҫ��������Զ��������");
                    status = 2;
                }
            }
            break;
        case 1:
            if (mode == 1) {
                if (cm.registerSquad("Akayile1", 5, " �Ѿ���Ϊ��Զ���Ӷӳ�������������Զ���ӣ������´򿪶Ի��������Զ���ӡ�")) {
                    cm.sendOk("���Ѿ���Ϊ��Զ���Ӷӳ�����������5���ӣ���ȴ���Ա�ǵ����롣");
                } else {
                    cm.sendOk("δ֪����.");
                }
            } else {
                cm.sendOk("�����������Զ���ӵĻ�����ô�������Ұɡ�")
            }
            cm.safeDispose();
            break;
        case 2:
            if (!cm.reAdd("Akayile", "Akayile1")) {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
            }
            cm.dispose();
            break;
        case 3:
            if (mode == 1) {
                var squd = cm.getSquad("Akayile1");
                if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                    squd.setNextPlayer(cm.getPlayer().getName());
                    cm.sendOk("You have reserved the spot.");
                }
            }
            cm.dispose();
            break;
        case 5:
            if (selection == 0) {
                if (!cm.getSquadList("Akayile1", 0)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                    cm.safeDispose();
                } else {
                    cm.dispose();
                }
            } else if (selection == 1) { // join
                var ba = cm.addMember("Akayile1", true);
                if (ba == 2) {
                    cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ����ԡ�");
                    cm.safeDispose();
                } else if (ba == 1) {
                    cm.sendOk("�������Զ���ӳɹ�����Ⱥ�ӳ�ָʾ��");
                    cm.safeDispose();
                } else {
                    cm.sendOk("���Ѿ��μ���Զ���ӣ���Ⱥ�ӳ�ָʾ��");
                    cm.safeDispose();
                }
            } else { // withdraw
                var baa = cm.addMember("Akayile1", false);
                if (baa == 1) {
                    cm.sendOk("�Ʋ�ָ���ĳ�Ա�ɹ���");
                    cm.safeDispose();
                } else {
                    cm.sendOk("��û�вμ�Զ���ӡ�");
                    cm.safeDispose();
                }
            }
            break;
        case 10:
            if (selection == 0) {
                if (!cm.getSquadList("Akayile1", 0)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                }
                cm.safeDispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("Akayile1", 1)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                    cm.safeDispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("Akayile1", 2)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                    cm.safeDispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("Akayile1") != null) {
                    var dd = cm.getEventManager("Akayile");
                    //dd.startInstance(cm.getSquad("Akayile1"), cm.getMap(), 160102);
                    dd.startInstance(cm.getSquad("Akayile1"), cm.getMap(), "160105");
                    cm.dispose();
                } else {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                    cm.safeDispose();
                }
            }
            break;
        case 11:
            cm.banMember("Akayile1", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("Akayile1", selection);
            }
            cm.dispose();
            break;
        }
    }
}