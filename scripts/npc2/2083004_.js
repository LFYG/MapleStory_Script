var status = -1;

function start() {
    if (cm.getPlayer().getLevel() < 120) {
        cm.sendOk("���ĵȼ�С��120����������ս���װ���������");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 3) {
        cm.sendOk("���װ�������ֻ����3Ƶ���ٻ���");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("ChaosHorntail");
    if (em == null) {
        cm.sendOk("�ű���������ϵ����Ա��");
        cm.dispose();
        return;
    }
    var prop = em.getProperty("state");
    var marr = cm.getQuestRecord(160103);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (prop == null || prop.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("ChaosHT");
        if (squadAvailability == -1) {
            status = 0;
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("You have already went to Chaos Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            cm.sendYesNo("��Ҫ��Ϊ���װ�������Զ���Ӷӳ���");
        } else if (squadAvailability == 1) {
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("You have already went to Chaos Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("ChaosHT");
            if (type == -1) {
                cm.sendOk("�Ѿ����������롣");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("ChaosHT");
                if (memberType == 2) {
                    cm.sendOk("��Զ���ӵ��Ʋ�������");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("����������ʲô�� \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
                } else if (memberType == -1) {
                    cm.sendOk("The squad has ended, please re-register.");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("����������ʲô�� \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("���װ�������Զ���Ӳ���:  \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#���Զ���ӳ�Ա#l \r\n#b#L2#�鿴��������#l \r\n#r#L3#��ʼԶ������#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("ChaosHorntail");
            if (eim == null) {
                var squd = cm.getSquad("ChaosHT");
                if (squd != null) {
                    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                        cm.sendOk("You have already went to Chaos Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("Զ���ӵ���ս�Ѿ���ʼ��\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ��");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("Ah, you have returned. Would you like to join your squad in the fight again?");
                status = 1;
            }
        }
    } else {
        var eim = cm.getDisconnected("ChaosHorntail");
        if (eim == null) {
            var squd = cm.getSquad("ChaosHT");
            if (squd != null) {
                if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                    cm.sendOk("You have already went to Chaos Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("Զ���ӵ���ս�Ѿ���ʼ��\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("Զ���ӵ���ս�Ѿ���ʼ��");
                cm.safeDispose();
            }
        } else {
            cm.sendYesNo("Ah, you have returned. Would you like to join your squad in the fight again?");
            status = 1;
        }
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("ChaosHT", 5, " �ѱ�����Ϊ��������Զ���Ӷӳ������ף������λ��ս����5�����ڱ���.")) {
                cm.sendOk("���Ѿ�������Ϊ��������Զ���Ӷӳ����ڽ�������5�����ڣ����������Զ���ӳ�Ա.�뾡��Ӻö�Ա.����5���Ӻ󽫻�ȡ��Զ���Ӷӳ�.");
            } else {
                cm.sendOk("An error has occurred adding your squad.");
            }
        }
        cm.dispose();
        break;
    case 1:
        if (!cm.reAdd("ChaosHorntail", "ChaosHT")) {
            cm.sendOk("Error... please try again.");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("ChaosHT");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("You have reserved the spot.");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("ChaosHT", 0)) {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ�ܡ�");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("ChaosHT", true);
            if (ba == 2) {
                cm.sendOk("Զ����ĿǰΪ��Ա״̬.���Ժ�����.");
            } else if (ba == 1) {
                cm.sendOk("�������Զ����.");
            } else {
                cm.sendOk("���Ѿ���Զ���ӳ�Ա��.");
            }
        } else { // withdraw
            var baa = cm.addMember("ChaosHT", false);
            if (baa == 1) {
                cm.sendOk("���˳�Զ���ӳɹ�.");
            } else {
                cm.sendOk("You are not part of the squad.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("ChaosHT", 0)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("ChaosHT", 1)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("ChaosHT", 2)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("ChaosHT") != null) {
                    var dd = cm.getEventManager("ChaosHorntail");
                    dd.startInstance(cm.getSquad("ChaosHT"), cm.getMap(), 160103);
                } else {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                }
                cm.dispose();
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("ChaosHT", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("ChaosHT", selection);
        }
        cm.dispose();
        break;
    default:
        cm.dispose();
        break;
    }
}