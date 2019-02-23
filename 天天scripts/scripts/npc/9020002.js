/*
 * ���� NPC (9020002)
 */

var status = -1;
var minLevel = 160;
var maxLevel = 250;
var minPartySize = 3;
var maxPartySize = 6;
var GetMeny = 500; //���ĵㄻ����

var itemList = Array(
    //��Ʒ���� ����  ����
    Array(2430456, 30, 1), //��Ʒ����1
    // Array(2430471, 30, 1), //��Ʒ����2
    Array(2431139, 25, 1), //��Ʒ����2
    // Array(2430472, 10, 1), //��Ʒ����3
    Array(2431106, 10, 1), //��Ʒ����3
    Array(2431138, 25, 1) //��Ʒ����4
);


var random = java.lang.Math.floor(Math.random() * 9 + 1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
            if (cm.getMap().getId() == 910340600) { //���һ��
                var outText;
                cm.setEventCount("��������");
                if (random == 1) {
                    cm.finishActivity(120104);
                    cm.gainItem(2430781, 1);
                    // cm.worldSpouseMessage(0x20, "[���-��������] ��� " + cm.getChar().getName() + " ͨ�� " + cm.getEventCount("��������") + " �� ϵͳ����������ͨ�ؽ�����");
                    // cm.dispose();
                } else if (random == 2) {
                    cm.gainItem(2430781, 1);
                    cm.gainItem(4310088, 5);
                    cm.finishActivity(120104);
                    // cm.worldSpouseMessage(0x20, "[���-��������] ��� " + cm.getChar().getName() + " ͨ�� " + cm.getEventCount("��������") + " �� ϵͳ����������ͨ�ؽ����������ô���RED�ҡ�");
                    // cm.dispose();
                } else if (random == 3) {
                    cm.gainItem(2430781, 1);
                    cm.gainItem(4033356, 1);
                    cm.finishActivity(120104);
                    // cm.worldSpouseMessage(0x20, "[���-��������] ��� " + cm.getChar().getName() + " ͨ�� " + cm.getEventCount("��������") + " �� ϵͳ����������ͨ�ؽ���,�������������1��");
                    // cm.dispose();
                } else {
                    if (cm.getEventCount("��������") > 30) {
                        cm.gainItem(2430781, 1);
                        cm.finishActivity(120104);
                        // cm.worldSpouseMessage(0x20, "[���-��������] ��� " + cm.getChar().getName() + " ͨ�� " + cm.getEventCount("��������") + " �� ϵͳ����������ͨ�ؽ�����");
                        // cm.dispose();
                    } else {
                        cm.gainItem(2430781, 1);
                        cm.finishActivity(120104);
                        // cm.gainItem(4310088, Math.random() * 15 + 1);
                        // cm.worldSpouseMessage(0x20, "[���-��������] ��� " + cm.getChar().getName() + " ͨ�� " + cm.getEventCount("��������") + " �� ϵͳ����������ͨ�ؽ���������С��30��ô���RED�ҡ�");
                    }
                }
                var CounJl = 0;
                for (var i = itemList.length - 1; i >= 0; i--) {
                    CounJl += itemList[i][1];
                }

                var chance = Math.floor(Math.random() * CounJl);
                var finalitem = Array();
                for (var i = 0; i < itemList.length; i++) {
                    if (itemList[i][1] >= chance) {
                        finalitem.push(itemList[i]);
                        break;
                    }
                    chance = chance - itemList[i][1];
                }
                if (finalitem.length != 0) {


                    var item;
                    var random = new java.util.Random();
                    var finalchance = random.nextInt(finalitem.length);
                    var itemId = finalitem[finalchance][0];
                    var quantity = finalitem[finalchance][2];
                    var notice = finalitem[finalchance][3];
                    item = cm.gainItem(itemId, quantity);
                }
                outText = "ͨ�سɹ�!";
                cm.warp(910000000, 0);
                cm.sendOk(outText);
                cm.dispose();
                return;
            } else if (cm.getMap().getId() != 910340000) { //���ǽ����ͼ
                cm.sendYesNo("��ȷ��Ҫ��ȥ��?");
            } else {
                var text = "#e<����������ѵ����>#n\r\n";
                text += "����Ͷ�Ա��һ��Ŭ��������������������кܶ������ͬ��Э�����޷�������ϰ������������ս�Ļ�������#b������ӵĶӳ�#k������˵����";
                text += "\r\n\r\n#b#L0#����ִ���������#l\r\n#L1#������һ��˵����#l\r\n#L9#�����ȥ#l";
                cm.sendSimple(text);
            }
        }
        if (type == 1) { //ȷ����ȥ
            cm.warp(910000000, 0);
            cm.dispose();
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // û�����
                    cm.sendOk("����������Σ�գ�����һ���˵������С�\r\n#b������Ӻ��ٺ���̸������");
                    cm.dispose();
                } else if (!cm.isLeader()) { // ���Ƕӳ�
                    cm.sendOk("�����ǵĴ���������˵����");
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
                        var em = cm.getEventManager("KerningPQ");
                        if (em == null) {
                            cm.sendOk("���������ڽ��赱�С�");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop == "0" || prop == null) {
                                cm.worldMessage("[�������] " + cm.getChar().getName() + " �������Ķ�����������ѵ������ս���񡣴��һ��ף�����ǰɣ�");
                                em.startInstance(cm.getParty(), cm.getMap(), 150);
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
            } else if (selection == 9) {
                if (cm.getEventCount("��������") > 3) {
                    cm.getChar().modifyCSPoints(1, GetMeny);
                }
                cm.warp(910000000, 0);
                cm.dispose();
            }
        }
        //status
    } //mode
} //f


// var mapId = cm.getMapId();
// if (mapId == 910340000) {
//     // cm.warp(910000000, 0);
//     // cm.removeAll(4001007);
//     // cm.removeAll(4001008);
//     // cm.dispose();


// } else {

// }
// else {
//     outText = "��ȷ��Ҫ�뿪��ͼ��?";
// }
// if (status == 0) {
//     cm.sendYesNo(outText);
// } else if (mode == 1) {
//     cm.warp(910000000, "st00"); // Warp player
//     cm.dispose();
// }
// }
