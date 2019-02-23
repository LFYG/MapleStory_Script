/*
 * ���﹫԰ ��߼�
 */

var itemId = 4001522;
var maps = Array(954010000, 954020000, 954030000, 954040000, 954050000, 954060000);
var mapNames = Array("����֮��", "����֮��", "��֮��Ѩ", "��ȴ���", "��ʿ��Ҫ��", "ԩ��Ͽ��");
var minLevel = Array(160, 165, 170, 175, 180, 200);
var maxLevel = Array(169, 174, 179, 184, 200, 250);

function start() {
    var selStr = "��������ĸ��ط���\r\n#r(160�����ϵ���ҿ���ʹ��)\r\n#b";
    for (var i = 0; i < maps.length; i++) {
        selStr += "#L" + i + "#" + mapNames[i] + "(Lv." + minLevel[i] + "~" + maxLevel[i] + ")#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
            cm.sendOk("����Ҫ����ĵ����������Ϸ���򡣿���ͨ��#b�ӳ�#k�볡��");
        } else {
            if (checkLevelsAndMap(minLevel[selection], maxLevel[selection], itemId) == 1) {
                cm.sendOk("��ȷ������Ա���ڸõ�ͼ�����Ҷ��ڵȼ���Χ�ڡ�\r\nֻ��#r" + minLevel[selection] + "������" + maxLevel[selection] + "������#k�Ľ�ɫ�����볡��");
            } else if (checkLevelsAndMap(minLevel[selection], maxLevel[selection], itemId) == 2) {
                cm.sendOk("Ҫ��ʹ�ù��﹫԰�ڵ���ʩ�����ж�Ա�������볡ȯ��");
            } else {
                var em = cm.getEventManager("MonsterPark");
                if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
                    cm.sendOk("���﹫԰�����Ѿ�������.");
                } else {
                    cm.givePartyItems(itemId, -1);
                    em.startInstance_Party("" + maps[selection], cm.getPlayer());
                }
            }
        }
    }
    cm.dispose();
}

function checkLevelsAndMap(minLevel, maxLevel, itemId) {
    var party = cm.getParty().getMembers();
    var mapId = cm.getMapId();
    var valid = 0;
    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        var ccPlayer = cm.getMap().getCharacterById(cPlayer.getId());
        if (ccPlayer == null) {
            valid = 1;
        } else {
            if (ccPlayer.getLevel() < minLevel || ccPlayer.getLevel() > maxLevel) {
                valid = 1;
            } else if (ccPlayer.getMapId() != mapId) {
                valid = 1;
            } else if (!ccPlayer.haveItem(itemId)) {
                valid = 2;
            }
        }
    }
    return valid;
}