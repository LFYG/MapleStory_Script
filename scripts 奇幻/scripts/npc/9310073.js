 /*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ�ʮ����������
 */
var status = 0;
var choice;
var itemxh= new Array ("3015016","3015021","3015023","3015017","3015024","3015018","3015019","3015020","3015015","3015022","3015026","3015025","3010876","3010830","3010831","3010827","3010829","3010828","3010824","3010825","3010944","3010826");
var itemxhcost=new Array("99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999","99999999");

//function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("�ðɣ���ӭ�´μ������٣�.");
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;

        if (status == 0) {
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ��� #r#h # #b#e���ã������ǻ��Ʒ��ֻ�ܿ������������ǻ��Ʒ��ֻ�ܿ������������ǻ��Ʒ��ֻ�ܿ�������!\r\n";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#��#d��Ҫ#r" + itemxhcost[i] + "#d���#k#l";
            }
            cm.sendSimpleS("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#" + choices,2);
        } else if (status == 1) {
                cm.sendGetNumber("��ѡ�����ƷΪ#v" + itemxh[selection] + "#�ۼ�Ϊ��" + itemxhcost[selection] + "���/��\r\n�������㹺�������",1,1,cm.getPlayer().getCSPoints(1));
		choice = selection;
        } else if (status == 2) {
            fee = selection;
            money = fee*itemxhcost[choice];
            if (fee < 0) {
            cm.sendOk("��������0.������û���㹻�ĵ��֧����Ҫ�������.!");
            cm.dispose();
            } else if (cm.getPlayer().getCSPoints(1) < money) {
            cm.sendOk("����ʧ�ܣ���û��" + money + "���");
            cm.dispose();
            } else {
			cm.gainNX(-money);
            cm.gainItem(itemxh[choice], fee);
            cm.sendOk("��ϲ������ɹ���");
            cm.dispose();
             }
        }
    }
}
