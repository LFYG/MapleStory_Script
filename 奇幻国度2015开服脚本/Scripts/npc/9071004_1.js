/*
 * ���﹫԰ �м�
 */

var itemId = 4001516;
var maps = Array(953020000, 953030000, 953040000, 953050000, 954000000);
var mapNames = Array("�Զ���������", "̦޺����", "ͨ����������", "ʱ��ֹ֮ͣ��", "��ɷ���ĳ���");
var minLevel = Array(135, 140, 145, 150, 155);
var maxLevel = Array(144, 149, 154, 159, 164);

function start() {
    var selStr = "��������ĸ��ط���\r\n#r(135������165�����µ���ҿ���ʹ��)\r\n#b";
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