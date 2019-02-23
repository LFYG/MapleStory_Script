var status;
var newhandMap = 910150210;     // ���ֵ�ͼ
var SteppedSnailMap = 960000100;
var changeJobMap = 310030210;   // תְ��ͼ
var text;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var icon2 = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else {
            cm.dispose();
            return;
        }

        if (status == 0) {
            text = head + icon + "��ӭ������ù���Online(www.qhmxd.com)\r\n\r\n";
			text += icon + "��ù���Online:\r\n" + icon2 + "������ù����������з���һ����Ϸģ����.\r\n\r\n"
			text += icon + "��ù�������Ϊ:\r\n" + icon2 + "���Ͷ���ͬʱ���ߵļ�ʱս�����͵Ľ�ɫ������Ϸ,�ڼ̳кͷ���ð�յ���ɫ�ķ��Ļ����Ͻ����µĴ���,ȷ��ð�յ�ϵ�еĲ�Ʒ��������.\r\n\r\n"
			text += icon + "��ù���Online��Ϸ:\r\n" + icon2 + "���ּ�,��Ϸϵͳ�ȶ�,��Ϸ��������/��.ǿ��ս��,������ս�������ֳ����õĲ����к���Ϸ��Ȥ,���ᴩ��Ϸʼ��.����2D����������Ϸˬ����ص�.\r\n\r\n"
			text += icon + "��ù���Online��Ϸ����:\r\n" + icon2 + "����(Exp)30B/��ұ���(Meso)10B/��Ʒ����(Item)5B.\r\n"
            cm.sendOkS(text, 1);
            if (cm.getMapId() != newhandMap) {
                cm.dispose();
                return;
            }
        } else if (status == 1) {
            text = head + "���Ѿ������˽�����ù���Online�ı������Ƿ�׼���ý������ָ�����";
            cm.sendYesNo(text);
        } else if (status == 2) {
            var em = cm.getEventManager("SteppedSnail");
            if (em == null) {
                cm.sendOk("������������ϵGM");
                cm.dispose();
                return;
            }

            var eim = em.newInstance(cm.getPlayer().getName());
            var map = eim.createInstanceMapS(SteppedSnailMap);
            var player = cm.getPlayer();
            var tomap = em.getMapFactory().getMap(changeJobMap);
            eim.registerPlayer(player);
            player.changeMap(map, map.getPortal(0));
            eim.startEventTimer(60000);
            cm.useItem(2003519); // ��������һ����������
            cm.worldBrodcastEffect(5121037, "[���ֹ���] : ��ӭ[" + cm.getName() + "]������ù���~");
            cm.worldMessageYellow("[���ֹ���] : ��ӭ[" + cm.getPlayer().getName() + "]������ù���~");
            cm.dispose();
        }
    }
}