 /*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ����ϵ�ͼ
 */

var status = 0;
var aaa ="#fEffect/CharacterEff/1082565/2/0#";
var eff ="#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���  #r#h ##k  ���ã��봫�͵�ʲô�ط�:\r\n";
		selStr += "#L0#" + eff + "#r#e ��������<1> #v4004001#\r\n"
		selStr += "#L1#" + eff + "#r#e ��������<2> #v4004000##v4000021#\r\n"
        selStr += "#L2#" + eff + "#r#e ��������<3> #v4004002#\r\n"
		selStr += "#L3#" + eff + "#r#e ��������<4> #v4004003##v4000021#\r\n"
        selStr += "#L4#" + eff + "#r#e ����ĸ��<5> #v4004000# #v4004001# #v4004002# #v4004003#\r\n"
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
                cm.warp(270010500);
		        cm.sendOk("��ӭ������<��������1>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
	    case 1:
                cm.warp(221023100);
		        cm.sendOk("��ӭ������<��������2>˹��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
	    case 2:
                cm.warp(261020200);
		        cm.sendOk("��ӭ������<��������3>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
        case 3:
                cm.warp(211050000);
		        cm.sendOk("��ӭ������<��������4>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
	    case 4:
                cm.warp(102010100);
		        cm.sendOk("��ӭ������<���ˡ��ǻۡ�����������ĸ��>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;

			
        }
        cm.dispose();
    }
}
