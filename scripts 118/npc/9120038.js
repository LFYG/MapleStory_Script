/*
	NPC Name: 		Dida
	Map(s): 		2095 Park
	Description: 		Battle starter
 */
var status = -1;

function start() {
    if (cm.getMapId() == 802000310) {
        if (cm.getPlayer().getClient().getChannel() != 1) {
            cm.sendOk(" #e#r�ƻ�δ��սʿ����#n#k Զ��������ֻ�� Ƶ�� 1  ����. .");
            cm.dispose();
            return;
        }
        var em = cm.getEventManager("2095_tokyo");

        if (em == null) {
            cm.sendOk("�����嵥Ϊ�գ�����ϵ����Ա��");
            cm.dispose();
            return;
        }
        var prop = em.getProperty("state");
        if (prop == null || prop.equals("0")) {
            var squadAvailability = cm.getSquadAvailability("tokyo_2095");
            if (squadAvailability == -1) {
                status = 0;
                cm.sendYesNo("���ڿ�������Զ����!\r\n����Ҫ��Ϊ #e#r�ƻ�δ��սʿ���� Զ���ӵĶӳ�#n #kô?");

            } else if (squadAvailability == 1) {
                // -1 = Cancelled, 0 = not, 1 = true
                var type = cm.isSquadLeader("tokyo_2095");
                if (type == -1) {
                    cm.sendOk("The squad has ended, please re-register.");
                    cm.dispose();
                } else if (type == 0) {
                    var memberType = cm.isSquadMember("tokyo_2095");
                    if (memberType == 2) {
                        cm.sendOk("You been banned from the squad.");
                        cm.dispose();
                    } else if (memberType == 1) {
                        status = 5;
                        cm.sendSimple("��������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
                    } else if (memberType == -1) {
                        cm.sendOk("5���ӽ���Զ�����Ѿ��Զ�ע��.������ע��..");
                        cm.dispose();
                    } else {
                        status = 5;
                        cm.sendSimple("��������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�Զ����#l");
                    }
                } else { // Is leader
                    status = 10;
                    cm.sendSimple("����������ʲô��\r\n#b#L0#�鿴Զ���ӳ�Ա#l \r\n#b#L1#����Զ���ӳ�Ա#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ#l \r\n#b#L4#����Ҫ ���׵�Ų����巢Ѷ�� #l");
                }
            } else {
                var eim = cm.getDisconnected("2095_tokyo");
                if (eim == null) {
                    var squd = cm.getSquad("tokyo_2095");
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
            var eim = cm.getDisconnected("2095_tokyo");
            if (eim == null) {
                var squd = cm.getSquad("tokyo_2095");
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
        status = 25;
        cm.sendNext("��Ҫ�뿪����ص�#b��԰ 2095�� ��Զ���ӣ��ȴ� #kô?");
    }
}

function action(mode, type, selection) {
    switch (status) {
    case 0:
        if (mode == 1) {
            if (cm.registerSquad("tokyo_2095", 5, " ����Ϊ�� �ƻ�δ��սʿ����  Զ���Ӷӳ�������������Զ���ӣ������´򿪶Ի��������Զ����.")) {
                cm.sendOk("���Ѿ���Ϊ�� �ƻ�δ��սʿ����   Զ���Ӷӳ�����������5���ӣ���ȴ���Ա�ǵ�����.");
            } else {
                cm.sendOk("δ֪����.");
            }
        }
        cm.dispose();
        break;
    case 2:
        if (!cm.reAdd("2095_tokyo", "tokyo_2095")) {
            cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
        }
        cm.safeDispose();
        break;
    case 3:
        if (mode == 1) {
            var squd = cm.getSquad("tokyo_2095");
            if (squd != null && !squd.getAllNextPlayer().contains(cm.getPlayer().getName())) {
                squd.setNextPlayer(cm.getPlayer().getName());
                cm.sendOk("�����Ѿ���Զ�����ڽ���������..");
            }
        }
        cm.dispose();
        break;
    case 5:
        if (selection == 0) {
            if (!cm.getSquadList("tokyo_2095", 0)) {
                cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
            }
        } else if (selection == 1) { // join
            var ba = cm.addMember("tokyo_2095", true);
            if (ba == 2) {
                cm.sendOk("Զ����Ա�Ѿ��ﵽ30�������Ժ�����.");
            } else if (ba == 1) {
                cm.sendOk("�������Զ���ӳɹ�����Ⱥ�ӳ�ָʾ");
            } else {
                cm.sendOk("���Ѿ��μ���Զ���ӣ���Ⱥ�ӳ�ָʾ.");
            }
        } else { // withdraw
            var baa = cm.addMember("tokyo_2095", false);
            if (baa == 1) {
                cm.sendOk("�Ʋ�ָ���ĳ�Ա�ɹ�");
            } else {
                cm.sendOk("��û�вμ�Զ����.");
            }
        }
        cm.dispose();
        break;
    case 10:
        if (mode == 1) {
            if (selection == 0) {
                if (!cm.getSquadList("tokyo_2095", 0)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
                }
                cm.dispose();
            } else if (selection == 1) {
                status = 11;
                if (!cm.getSquadList("tokyo_2095", 1)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
                    cm.dispose();
                }
            } else if (selection == 2) {
                status = 12;
                if (!cm.getSquadList("tokyo_2095", 2)) {
                    cm.sendOk("����δ֪�Ĵ��󣬲���ʧ��.");
                    cm.dispose();
                }
            } else if (selection == 3) { // get insode
                status = 13;
                cm.sendNext("#b#t4032202##k, ���������Ҫ���˰������� ��³  �Ա�.")
            } else if (selection == 4) { // Transmitter
                status = 17;
                cm.sendNext("�������������԰����������Щսʿ�����������֮����� ���� ���� ��³ �Աߣ������Ҿͻ���ְ����㣡  ");
            }
        } else {
            cm.dispose();
        }
        break;
    case 11:
        cm.banMember("tokyo_2095", selection);
        cm.dispose();
        break;
    case 12:
        if (selection != -1) {
            cm.acceptMember("tokyo_2095", selection);
        }
        cm.dispose();
        break;
    case 13:
        status = 14;
        cm.sendNextPrev("The opponent you are facing is using #b#t4032192##k as the driving force. You'll need to elliminate the enermies and gather up of them, then immediately send them to Marr, so she can run away.");
        break;
    case 14:
        status = 15;
        cm.sendNextPrev("That should be no more than enough for 20 minutes. I suggest you run away within 20 minutes!");
        break;
    case 15:
        status = 16;
        cm.sendNextPrev("The #b#t4032192##k you've gathered up should be handed to Marr by the Leader of the Squad!");
        break;
    case 16:
        if (cm.getSquad("tokyo_2095") != null) {
            var dd = cm.getEventManager("2095_tokyo");
            dd.startInstance(cm.getSquad("tokyo_2095"), cm.getMap());
        } else {
            cm.sendOk("Due to an unknown error, the request for squad has been denied.");
        }
        cm.dispose();
        break;
    case 17:
        cm.gainItem(4032202, 1);
        cm.sendNextPrev("Be careful. Please the item in front of marr in 6 minutes, or the mission is a failure.");
        cm.dispose();
        break;
    case 25:
        cm.warp(802000210, 0);
        cm.dispose();
        break;
    default:
        cm.dispose();
        break;
    }
}