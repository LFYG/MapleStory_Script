/*
	���ڵ�ͼ: 		��ɫ���� - ��ɫ���� ���
	�ű�����: 		��ɫ����Զ����
*/

var status = 0;
var maxPinkZak = 3;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 689010000) { //��ɫ���� - ��ɫ���� ���
        switch (status) {
        case 0:
            if (cm.getPlayer().getLevel() < 100) {
                cm.sendOk("��ĵȼ�С�� 100 �����޷���ս��ɫ������");
                cm.dispose();
                return;
            }
            if (cm.getPlayer().getClient().getChannel() != 3) {
                cm.sendOk("��ɫ����ֻ���� 3 Ƶ����ս��");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("PinkZakum");
            if (em == null) {
                cm.sendOk("�����嵥Ϊ�գ�����ϵ����Ա��");
                cm.safeDispose();
                return;
            }
            var prop = em.getProperty("state");
            var data = cm.getBossLog("��ɫ����");
            if (prop == null || prop.equals("0")) {
                var squadAvailability = cm.getSquadAvailability("PinkZak");
                if (squadAvailability == -1) {
                    status = 1;
                    if (data >= maxPinkZak && !cm.getPlayer().isGM()) {
                        cm.sendOk("��������ս��ɫ�����Ĵ����Ѿ����꣬������������ս�ɣ�");
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("���ڿ�������Զ���ӣ������ΪԶ���Ӷӳ���");
                } else if (squadAvailability == 1) {
                    if (data >= maxPinkZak && !cm.getPlayer().isGM()) {
                        cm.sendOk("��������ս��ɫ�����Ĵ����Ѿ����꣬������������ս�ɣ�");
                        cm.dispose();
                        return;
                    }
                    // -1 = Cancelled, 0 = not, 1 = true
                    var type = cm.isSquadLeader("PinkZak");
                    if (type == -1) {
                        cm.sendOk("�Ѿ����������롣");
                        cm.safeDispose();
                    } else if (type == 0) {
                        var memberType = cm.isSquadMember("PinkZak");
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
                    var eim = cm.getDisconnected("PinkZakum");
                    if (eim == null) {
                        var squd = cm.getSquad("PinkZak");
                        if (squd != null) {
                            if (data >= maxPinkZak && !cm.getPlayer().isGM()) {
                                cm.sendOk("��������ս��ɫ�����Ĵ����Ѿ����꣬������������ս�ɣ�");
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
                var eim = cm.getDisconnected("PinkZakum");
                if (eim == null) {
                    var squd = cm.getSquad("PinkZak");
                    if (squd != null) {
                        if (data >= maxPinkZak && !cm.getPlayer().isGM()) {
                            cm.sendOk("��������ս��ɫ�����Ĵ����Ѿ����꣬������������ս�ɣ�");
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
                if (cm.registerSquad("PinkZak", 5, " �Ѿ���Ϊ��Զ���Ӷӳ�������������Զ���ӣ������´򿪶Ի��������Զ���ӡ�")) {
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
            if (!cm.reAdd("PinkZakum", "PinkZak")) {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
            }
            cm.dispose();
            break;
        case 3:
            if (mode == 1) {
                var squd = cm.getSquad("PinkZak");
                if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                    squd.setNextPlayer(cm.getPlayer().getName());
                    cm.sendOk("You have reserved the spot.");
                }
            }
            cm.dispose();
            break;
        case 5:
            if (selection == 0) {
                if (!cm.getSquadList("PinkZak", 0)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                    cm.safeDispose();
                } else {
                    cm.dispose();
                }
            } else if (selection == 1) { // join
                var ba = cm.addMember("PinkZak", true);
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
                var baa = cm.addMember("PinkZak", false);
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
                if (!cm.getSquadList("PinkZak", 0)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                }
                cm.safeDispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("PinkZak", 1)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                    cm.safeDispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("PinkZak", 2)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                    cm.safeDispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("PinkZak") != null) {
                    var dd = cm.getEventManager("PinkZakum");
                    //dd.startInstance(cm.getSquad("PinkZak"), cm.getMap(), 160102);
                    dd.startInstance(cm.getSquad("PinkZak"), cm.getMap(), "��ɫ����");
                    cm.dispose();
                } else {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                    cm.safeDispose();
                }
            }
            break;
        case 11:
            cm.banMember("PinkZak", selection);
            cm.dispose();
            break;
        case 12:
            if (selection != -1) {
                cm.acceptMember("PinkZak", selection);
            }
            cm.dispose();
            break;
        }
    }
}