var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����!����һ��Ǳ��ʹ��:\r\n\r\n#fUI/UIWindow2.img/QuestGuide/Button/WorldMapQuestToggle/normal/0##b\r\n#L0##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#һ��Ǳ�ܼ��#l\r\n#L1##fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#ʹ��һ��Ǳ��#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
            case 0:
		cm.sendOk("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k����,��ӭ����һ��Ǳ�ܼ��:\r\n#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�ù����ܿ���ʹ#bװ���ĵ�һ��Ǳ������#k��������Ҫ������\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�򿪸�NPCÿ����Ҫ5���ֵ���\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#����������ǰ�ħ������:\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0##b1200���(ħ���۸�)*����#k \r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#���ռ۸�Ϊ:#b1200��� * ϵͳϴ�Ĵ��� + 5��ֵ��� \r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�Ͽ�ʹ�ð�......");
		status = -1;
                break;
	    case 1:
		cm.dispose();
		cm.openNpc(9900002,1300);
		break;
        }
    }
}