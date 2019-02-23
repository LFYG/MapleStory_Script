var status = -1;

function start() {
    cm.removeAll(4001256);
    cm.removeAll(4001257);
    cm.removeAll(4001258);
    cm.removeAll(4001259);
    cm.removeAll(4001260);
    if (cm.getPlayer().getLevel() < 90) {
        cm.sendOk("��ĵȼ�������90������.");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3 && cm.getPlayer().getClient().getChannel() != 4) {
        cm.sendOk("����2/3/4Ƶ������Զ������");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("CWKPQ");

    if (em == null) {
        cm.sendOk("�ű���������ϵ����Ա");
        cm.dispose();
        return;
    }
    var prop = em.getProperty("state");

    if (prop == null || prop.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("CWKPQ");
        if (squadAvailability == -1) {
            status = 0;
            cm.sendYesNo("��Ҫ��ΪԶ���ӳ���?");

        } else if (squadAvailability == 1) {
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("CWKPQ");
            if (type == -1) {
                cm.sendOk("Զ�����Ѿ�ע���������·���");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("CWKPQ");
                if (memberType == 2) {
                    cm.sendOk("�㱻�����Ʋ����������ܽ���Զ������.");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("������ʲô? \r\n#b#L0#�鿴Զ����#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l \r\n#b#L3#Check out jobs#l");
                } else if (memberType == -1) {
                    cm.sendOk("�㱻�����Ʋ����������ܽ���Զ������");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("�����ʲô? \r\n#b#L0#�鿴Զ����#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l \r\n#b#L3#Check out jobs#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("�����ʲô? \r\n#b#L0#�鿴Զ����#l \r\n#b#L1#�Ʋ�Զ����Ա#l \r\n#b#L2#�����Ʋ�����#l \r\n#b#L3#Check out jobs#l \r\n#r#L4#��ʼԶ������#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("CWKPQ");
            if (eim == null) {
                var squd = cm.getSquad("CWKPQ");
                if (squd != null) {
                    if (squd.getNextPlayer() != null) {
                        cm.sendOk("Զ�������Ѿ���ʼ����Ҷ���һ�������� " + squd.getNextPlayer());
                        cm.safeDispose();
                    } else {
                        cm.sendYesNo("Զ�������Ѿ���ʼ�����������һ�����㣿");
                        status = 3;
                    }
                } else {
                    cm.sendOk("Զ�������Ѿ���ʼ.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("�����������Զ��������?");
                status = 1;
            }
        }
    } else {
        var eim = cm.getDisconnected("CWKPQ");
        if (eim == null) {
            var squd = cm.getSquad("CWKPQ");
            if (squd != null) {
                if (squd.getNextPlayer() != null) {
                    cm.sendOk("Զ�������Ѿ���ʼ����Ҷ���һ�������� " + squd.getNextPlayer());
                    cm.safeDispose();
                } else {
                    cm.sendYesNo("Զ�������Ѿ���ʼ�����������һ�����㣿");
                    status = 3;
                }
            } else {
                cm.sendOk("Զ�������Ѿ���ʼ.");
                cm.safeDispose();
            }
        } else {
            cm.sendYesNo("�����������Զ��������?");
            status = 1;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (!cm.haveItem(5252006, 1)) {
                cm.sendOk("����Ҫһ����ɫ��糺���ս��Ʒ#v5252006#\r\nû��ȥ�̳ǹ����.");
            } else if (cm.registerSquad("CWKPQ", 5, " �Ѿ���ΪԶ���ӳ����������μ�Զ����������5�����ڼ���Զ���ӡ�")) {
                cm.sendOk("���Ѿ���ΪԶ���ӳ�������5��������������Զ�����飬����ʼԶ������.");
            } else {
                cm.sendOk("δ֪���󡣳�ΪԶ���ӳ�ʧ��");
            }
        }
        cm.dispose();
        break;
    case 1:
        if (!cm.reAdd("CWKPQ", "CWKPQ")) {
            cm.sendOk("���󡣡�������һ��");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("CWKPQ");
            if (squd != null && squd.getNextPlayer() == null) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("You have reserved the spot.");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0 || selection == 3) {
            if (!cm.getSquadList("CWKPQ", selection)) {
                cm.sendOk("����δ֪�Ĵ��󣬶�Զ���ӵ�Ҫ�󱻾ܾ���");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("CWKPQ", true);
            if (ba == 2) {
                cm.sendOk("Զ���������Ѿ��㹻�����Ժ�����");
            } else if (ba == 1) {
                cm.sendOk("����Զ���ӳɹ�");
            } else {
                cm.sendOk("���Ѿ�����Զ������.");
            }
        } else { // withdraw
            var baa = cm.addMember("VERGAMOT", false);
            if (baa == 1) {
                cm.sendOk("�˳�Զ���ӳɹ�");
            } else {
                cm.sendOk("�㻹û�м���Զ����.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0 || selection == 3) {
                if (!cm.getSquadList("CWKPQ", selection)) {
                    cm.sendOk("����δ֪�Ĵ��󣬶�Զ���ӵ�Ҫ�󱻾ܾ���");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("VERGAMOT", 1)) {
                    cm.sendOk("����δ֪�Ĵ��󣬶�Զ���ӵ�Ҫ�󱻾ܾ���");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("VERGAMOT", 2)) {
                    cm.sendOk("����δ֪�Ĵ��󣬶�Զ���ӵ�Ҫ�󱻾ܾ���");
                    cm.dispose();
                }
            } else if (selection == 4) { // get insode
                if (cm.getSquad("CWKPQ") != null) {
                    if (cm.haveItem(5252006, 1)) {
                        cm.gainItem(5252006, -1);
                        var dd = cm.getEventManager("CWKPQ");
                        dd.startInstance(cm.getSquad("CWKPQ"), cm.getMap());
                    } else {
                        cm.sendOk("����#v5252006#��?û��ȥ�̳ǹ����.");
                    }
                } else {
                    cm.sendOk("����δ֪�Ĵ��󣬶�Զ���ӵ�Ҫ�󱻾ܾ���");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("CWKPQ", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("CWKPQ", selection);
        }
        cm.dispose();
        break;
    default:
        cm.dispose();
        break;
    }
}