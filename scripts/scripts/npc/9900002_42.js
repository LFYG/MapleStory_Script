/*����*/
var status = 0;
var choice;
var daze1;
var itemxh= new Array ("1112289","1112177","1112291","1112290","1112179","1112178","1112288","1112287","1112286","1112176","1112175","1112174","1112285","1112173","1112278","1112166","1112277","1112165","1112276","1112164","1112275","1112163","1112274","1112162","1112273","1112272","1112161","1112160","1112271","1112270","1112269","1112159","1112158","1112157");
var itemxhcost=new Array("88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888","88888");

function start() {
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
            choices = "\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã���ѡ����ϣ��������Ч��ָ";
            for (var i = 0; i < itemxh.length; i++) {
                choices += "\r\n#L" + i + "##v" + itemxh[i] + "##z" + itemxh[i] + "#��#d��Ҫ#r" + itemxhcost[i] + "#d���#k#l";
            }
            cm.sendSimpleS("#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#" + choices,2);
        } else if (status == 1) {
                cm.sendYesNo("��ѡ�����ƷΪ#v" + itemxh[selection] + "#�ۼ�Ϊ��" + itemxhcost[selection] + "���/��\r\nȷ��Ҫ������");
		choice = selection;
        } else if (status == 2) {
            money = itemxhcost[choice];
			daze  = itemxhcost[choice]*0.88;
            if (cm.getChar().getVip() >= 1 && cm.getPlayer().getCSPoints(1) > daze) {
            daze1 = 1;
			cm.sendYesNo("ϵͳ��⵽���������ң��ش�Ϊ���8.8���Ż�Ŷ��\r\n#eԭ��#n��#b#e"+ money +"#n#k��#e�ּ�#n��#r#e"+ daze +"#n#k��С������ȥ��\r\n�����Ƿ�Ҫ����");
			} else if (cm.getPlayer().getCSPoints(1) < money) { 
			cm.sendOk("����ʧ�ܣ���û��" + money + "���");
			cm.dispose();
			}else {
			cm.gainNX(-money);
            cm.gainItem(itemxh[choice], 1);
            cm.sendOk("��ϲ������ɹ���");
            cm.dispose();
             }
		} else if (status == 3) {
		    daze = daze;
		    if (daze1 == 1){
			cm.gainNX(-daze);
            cm.gainItem(itemxh[choice], 1);
            cm.sendOk("��ϲ������ɹ���");
            cm.dispose();
			}
        }
    }
}
