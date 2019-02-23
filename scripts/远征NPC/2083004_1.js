/*
	NPC Name: 		Mark of the Squad
	Map(s): 		Entrance to Horned Tail's Cave
	Description: 		Horntail Battle starter
*/
var status = -1;

function start() {
    if (cm.getPlayer().getLevel() < 80) {
        cm.sendOk("��ĵȼ�С��80����������ս����������");
        cm.dispose();
        return;
    }
    if (cm.getPlayer().getClient().getChannel() != 4 && cm.getPlayer().getClient().getChannel() != 2) {
        cm.sendOk("��ͨ��������ֻ����2��4Ƶ���ٻ���");
        cm.dispose();
        return;
    }
    var em = cm.getEventManager("HorntailBattle");
    if (em == null) {
        cm.sendOk("�ű�����,����ϵ����Ա.");
        cm.dispose();
        return;
    }
    var prop = em.getProperty("state");
    var marr = cm.getQuestRecord(160100);
    var data = marr.getCustomData();
    if (data == null) {
        marr.setCustomData("0");
        data = "0";
    }
    var time = parseInt(data);
    if (prop == null || prop.equals("0")) {
        var squadAvailability = cm.getSquadAvailability("Horntail");
        if (squadAvailability == -1) {
            status = 0;
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("���Ѿ��ڹ�ȥ��12Сʱ�ڽ��й�Զ������. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            cm.sendYesNo("��Ҫ��Ϊ��������Զ���Ӷӳ���?");
        } else if (squadAvailability == 1) {
            if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                cm.sendOk("You have already went to Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                cm.dispose();
                return;
            }
            // -1 = Cancelled, 0 = not, 1 = true
            var type = cm.isSquadLeader("Horntail");
            if (type == -1) {
                cm.sendOk("The squad has ended, please re-register.");
                cm.dispose();
            } else if (type == 0) {
                var memberType = cm.isSquadMember("Horntail");
                if (memberType == 2) {
                    cm.sendOk("���Ѿ���Զ�����Ʋ�С��.���ܽ���Զ������.");
                    cm.dispose();
                } else if (memberType == 1) {
                    status = 5;
                    cm.sendSimple("������ʲô? \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
                } else if (memberType == -1) {
                    cm.sendOk("5���ӽ���Զ�����Ѿ��Զ�ע��.������ע��");
                    cm.dispose();
                } else {
                    status = 5;
                    cm.sendSimple("������ʲô? \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
                }
            } else { // Is leader
                status = 10;
                cm.sendSimple("Զ���Ӳ���: \r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#���Զ���ӳ�Ա#l \r\n#b#L2#�鿴��������#l \r\n#r#L3#��ʼԶ������#l");
                // TODO viewing!
            }
        } else {
            var eim = cm.getDisconnected("HorntailBattle");
            if (eim == null) {
                var squd = cm.getSquad("Horntail");
                if (squd != null) {
                    if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                        cm.sendOk("You have already went to Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                        cm.dispose();
                        return;
                    }
                    cm.sendYesNo("The squad's battle against the boss has already begun.\r\n" + squd.getNextPlayer());
                    status = 3;
                } else {
                    cm.sendOk("The squad's battle against the boss has already begun.");
                    cm.safeDispose();
                }
            } else {
                cm.sendYesNo("Ah, you have returned. Would you like to join your squad in the fight again?");
                status = 1;
            }
        }
    } else {
        var eim = cm.getDisconnected("HorntailBattle");
        if (eim == null) {
            var squd = cm.getSquad("Horntail");
            if (squd != null) {
                if (time + (12 * 3600000) >= cm.getCurrentTime() && !cm.getPlayer().isGM()) {
                    cm.sendOk("You have already went to Horntail in the past 12 hours. Time left: " + cm.getReadableMillis(cm.getCurrentTime(), time + (12 * 3600000)));
                    cm.dispose();
                    return;
                }
                cm.sendYesNo("The squad's battle against the boss has already begun.\r\n" + squd.getNextPlayer());
                status = 3;
            } else {
                cm.sendOk("Զ���Ѿ���ʼ.");
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
            if (cm.registerSquad("Horntail", 5, " �ѱ�����Ϊ��������Զ���Ӷӳ�����ͨ�������λ��ս����5�����ڱ���.")) {
                cm.sendOk("���Ѿ�������Ϊ��������Զ���Ӷӳ����ڽ�������5�����ڣ����������Զ���ӳ�Ա.�뾡��Ӻö�Ա.����5���Ӻ󽫻�ȡ��Զ���Ӷӳ�.");
            } else {
                cm.sendOk("An error has occurred adding your squad.");
            }
        }
        cm.dispose();
        break;
    case 1:
        if (!cm.reAdd("HorntailBattle", "Horntail")) {
            cm.sendOk("Error... please try again.");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("Horntail");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("You have reserved the spot.");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("Horntail", 0)) {
                cm.sendOk("�Ƿ����� - �����Ѿ�����!");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("Horntail", true);
            if (ba == 2) {
                cm.sendOk("Զ����ĿǰΪ��Ա״̬.���Ժ�����.");
            } else if (ba == 1) {
                cm.sendOk("�������Զ����.");
            } else {
                cm.sendOk("���Ѿ���Զ���ӳ�Ա��.");
            }
        } else { // withdraw
            var baa = cm.addMember("Horntail", false);
            if (baa == 1) {
                cm.sendOk("��ɹ��˳���Զ����.");
            } else {
                cm.sendOk("�㻹����Զ���ӳ�Ա.�����˳�Զ����.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("Horntail", 0)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("Horntail", 1)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("Horntail", 2)) {
                    cm.sendOk("Due to an unknown error, the request for squad has been denied.");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                if (cm.getSquad("Horntail") != null) {
                    var dd = cm.getEventManager("HorntailBattle");
                    dd.startInstance(cm.getSquad("Horntail"), cm.getMap(), 160100);
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
        cm.banMember("Horntail", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("Horntail", selection);
        }
        cm.dispose();
        break;
    default:
        cm.dispose();
        break;
    }
}