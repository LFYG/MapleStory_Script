/*
��߳� ���� NPC 
����ȥ
*/
var status = 0;
var minLevel = 160;
var maxLevel = 255;
var minPartySize = 3;
var maxPartySize = 999;
var GetMeny=500;

function start() {
    status = -1;
    action(1, 0, 0);
}

// function start() {
//     if (cm.getMapId() != 922010000) {
//         cm.sendYesNo("��ȷ��Ҫ��ȥ��?");
//     } else {
// if (cm.haveItem(4001022)) {
//     cm.removeAll(4001022);
// }
// if (cm.haveItem(4001023)) {
//     cm.removeAll(4001023);
// }
// cm.warp(910000000, 0)
// cm.dispose();
//     }
// }

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
            status--;
        }
        if (status == 0) {
            if (cm.getMap().getId() != 922010000) {
                cm.sendYesNo("��ȷ��Ҫ��ȥ��?");
            } else {
                cm.sendSimple("#e<���������߳������ս����>#n\r\n����Ͷ�Ա��һ��Ŭ��������������������кܶ������ͬ��Э�����޷�������ϰ������������ս�Ļ�������#b������ӵĶӳ�#k������˵����\r\n#b#L0#����ִ���������#l\r\n#L1#������һ��˵����#l\r\n#L9#�����ȥ#l")
            }
        }
        if (type == 1) { //ȷ����ȥ
            cm.warp(910000000, 0);
            cm.dispose();
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // û�����
                    cm.sendOk("����Ӻ����̸����");
                    cm.dispose();
                } else if (!cm.isLeader()) { // ���Ƕӳ�
                    cm.sendOk("��жӳ�����̸����");
                    cm.dispose();
                    /*} else if (cm.getBossLog('LUDI') >= 6){
                     cm.sendOk("�Բ���һ��ֻ�ܽ���6�Ρ�")
                     cm.dispose();*/
                } else {
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += 1;
                        }
                    }
                    if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                        next = false;
                    }
                    if (next) {
                        var em = cm.getEventManager("LudiPQ");
                        cm.worldMessage("[�������] " + cm.getChar().getName() + " �������Ķ����������߳������ս���񡣴��һ��ף�����ǰɣ�");
                        if (em == null) {
                            cm.sendOk("���������ڽ��赱�С�");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop == "0" || prop == null) {
                                em.startInstance(cm.getParty(), cm.getMap());
                                cm.removeAll(4001022);
                                cm.removeAll(4001023);
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("��ȴ������������.����Ի�Ƶ�����룡");
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("��ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�\r\n2�����Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n\r\n��#r�����Ȼ����, ��������,�ٵ�½ ������������ӡ�#k#b��");
                        cm.dispose();
                    }
                } //�ж����
            } else if (selection == 1) {
                cm.sendOk("��ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�\r\n2�����Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n\r\n��#r�����Ȼ����, ��������,�ٵ�½ ������������ӡ�#k#b��");
                cm.dispose();
            }
            else if (selection==9) {
                                        if (cm.getBossLog("��߳�") > 3) {
                            cm.getChar().modifyCSPoints(1, GetMeny);
                        }
            cm.warp(910000000, 0);
            cm.dispose();
            }
        }
        //status
    } //mode
} //f
