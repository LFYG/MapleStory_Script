/*
	NPC Name: 		��������װ��
	Map(s): 		��ó���� 2102�꣨����볡��  ��802000800)
 	Description: 		Core Blaze battle
*/
var status = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (cm.getMapId() == 802000800) {
            if (cm.getPlayer().getClient().getChannel() != 1) {
                cm.sendOk("���BOSSֻ����  Ƶ��1 �ٻ�.");
                cm.dispose();
                return;
            }
            var em = cm.getEventManager("CoreBlaze");

            if (em == null) {
                cm.sendOk("�����嵥Ϊ�գ�����ϵ����Ա��");
                cm.safeDispose();
                return;
            }
            var prop = em.getProperty("state");
            if (prop == null || prop.equals("0")) {
                var squadAvailability = cm.getSquadAvailability("Core_Blaze");
                if (squadAvailability == -1) {
                    status = 1;
                    cm.sendYesNo("���ڿ�������Զ����!\r\n����Ҫ��Ϊ   #e#rδ������Զ���ӵĶӳ� #n #kô?");
                } else if (squadAvailability == 1) {
                    // -1 = Cancelled, 0 = not, 1 = true
                    var type = cm.isSquadLeader("Core_Blaze");
                    if (type == -1) {
                        cm.sendOk("�Ѿ����������롣");
                        cm.safeDispose();
                    } else if (type == 0) {
                        var memberType = cm.isSquadMember("Core_Blaze");
                        if (memberType == 2) {
                            cm.sendOk("��Զ���ӵ��Ʋ�������");
                            cm.safeDispose();
                        } else if (memberType == 1) {
                            status = 5;
                            cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӡ�#l \r\n#b#L2#�˳�Զ���ӡ�#l");
                        } else if (memberType == -1) {
                            cm.sendOk("5���ӽ���Զ�����Ѿ��Զ�ע��.������ע��.");
                            cm.safeDispose();
                        } else {
                            status = 5;
                            cm.sendSimple("��������ʲô�� \r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӡ�#l \r\n#b#L2#�˳�Զ���ӡ�#l");
                        }
                    } else { // Is leader
                        status = 10;
                        cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա��#l \r\n#b#L1#����Զ���ӳ�Ա��#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ��#l");
                        // TODO viewing!
                    }
                } else {
                    var eim = cm.getDisconnected("CoreBlaze");
                    if (eim == null) {
                        var squd = cm.getSquad("Core_Blaze");
                        if (squd != null) {
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
                var eim = cm.getDisconnected("CoreBlaze");
                if (eim == null) {
                    var squd = cm.getSquad("Core_Blaze");
                    if (squd != null) {
                        cm.sendYesNo("���ӵ���ս�Ѿ���ʼ.\r\n" + squd.getNextPlayer());
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
        } else {
            status = 25;
            cm.sendNext("����Ҫ����Զ�������뿪ô ��");
        }
        break;
    case 1:
        if (mode == 1) {
            if (cm.registerSquad("Core_Blaze", 5, " �Ѿ���Ϊ��Զ���Ӷӳ�������������Զ���ӣ������´򿪶Ի��������Զ���ӡ�")) {
                cm.sendOk("���Ѿ���Ϊ��Զ���Ӷӳ�����������5���ӣ���ȴ���Ա�ǵ����롣");
            } else {
                cm.sendOk("δ֪����.");
            }
        } else {
            cm.sendOk("�����������Զ���ӵĻ�����ô�������Ұɡ�");
        }
        cm.safeDispose();
        break;
    case 2:
        if (!cm.reAdd("CoreBlaze", "Core_Blaze")) {
            cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("Core_Blaze");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("�����Ѿ���Զ�����ڽ���������...");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("Core_Blaze", 0)) {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                cm.safeDispose();
            } else {
                cm.dispose();
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("Core_Blaze", true);
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
            var baa = cm.addMember("Core_Blaze", false);
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
            if (!cm.getSquadList("Core_Blaze", 0)) {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�.");
            }
            cm.safeDispose();
        } else if (selection == 1) {
            status = 11;
            if (!cm.getSquadList("Core_Blaze", 1)) {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
            }
        } else if (selection == 2) {
            status = 12;
            if (!cm.getSquadList("Core_Blaze", 2)) {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
            }
        } else if (selection == 3) { // get insode
            if (cm.getSquad("Core_Blaze") != null) {
                var dd = cm.getEventManager("CoreBlaze");
                dd.startInstance(cm.getSquad("Core_Blaze"), cm.getMap());
                cm.dispose();
            } else {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
                cm.safeDispose();
            }
        }
        break;
    case 11:
        cm.banMember("Core_Blaze", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("Core_Blaze", selection);
        }
        cm.dispose();
        break;
    case 25:
        cm.warp(802000800, 0);
        cm.dispose();
        break;
    }
}