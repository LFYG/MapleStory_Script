 /*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ�BOSS��ͼ
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
		selStr += "#L0#" + eff + "#b ����#l"
        selStr += "#L3#" + eff + "#b ������#l"
		selStr += "#L4#" + eff + "#b �İ�ʨ��#l"
		selStr += "#L2#" + eff + "#b �������#l\r\n"
		
		selStr += "#L1#" + eff + "#b ����#l"
		selStr += "#L5#" + eff + "#b ŷ����#l"
		selStr += "#L6#" + eff + "#b ��������#l"
		selStr += "#L7#" + eff + "#b ��������#l\r\n"
        
		selStr += "#L9#" + eff + "#b Ů��#l"
		selStr += "#L8#" + eff + "#b Ʒ����#l"
		selStr += "#L10#" + eff + "#b ³����˹#l"
		selStr += "#L11#" + eff + "#b �ࡤ�װ�#l\r\n"
		selStr += "#L14#" + eff + "#r#e �ƽ�#v1302152# #v1102277#\r\n"
		selStr += "#L12#" + eff + "#r#e ���յ�#v4310097# #v1132245# #v1402197# #v1113075#\r\n"
        selStr += "#L13#" + eff + "#r#e �����˹#v4310058# #v1142520# #v1082556# #v1102481#\r\n"
        
		//selStr += "#L14#" + eff + "#r[ϡ��]��߷�����#r���м��ʻ��#v1003797##v1042258##v1062169#��#l\r\n"
		//selStr += "#L19#" + eff + "#r[����]��Խ����Ĵ���#r���м��ʻ��#v2430189##v2430189#��#l\r\n"
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
                cm.warp(211042200,0);
		        cm.sendOk("��ӭ������<����>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
	    case 1:
                cm.warp(220080000,0);
		        cm.sendOk("��ӭ������<������ͼ>˹��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
	    case 2:
                cm.warp(300030300);
		        cm.sendOk("��ӭ������<�������>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
        case 3:
                cm.warp(551030100,0);
		        cm.sendOk("��ӭ������<������>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 4:
                cm.warp(551030100,0);
		        cm.sendOk("��ӭ������<�İ�ʨ��>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 5:
                cm.warp(802000820,0);
		        cm.sendOk("��ӭ������<ŷ����>��ڣ�ף����Ϸ��죡��������@PM�س�");
				cm.dispose();
            break;
		case 6:
                cm.warp(272030300,0);
		        cm.sendOk("��ӭ������<��������>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 7:
                cm.warp(240050400,0);
		        cm.sendOk("��ӭ������<��������>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 8:
                cm.warp(270050000,0);
		        cm.sendOk("��ӭ������<Ʒ����>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 9:
                cm.warp(271040000,0);
		        cm.sendOk("��ӭ������<ϣ��˹>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 10:
                cm.warp(105200000,0);
		        cm.sendOk("��ӭ������<³����˹>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 11:
                cm.warp(211070000,0);
		        cm.sendOk("��ӭ������<�ࡤ�װ�>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 12:
                cm.warp(863000100,0);
		        cm.sendOk("��ӭ������<���յ�>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 13:
                cm.warp(401072000,0);
		        cm.sendOk("��ӭ������<�����˹>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;
		case 14:
                cm.warp(540010001,0);
		        cm.sendOk("��ӭ������<�ƽ�>��ڣ�ף����Ϸ��죡");
				cm.dispose();
            break;

		case 18:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(703020000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(����������˱�Ŷ.���Զһ��������Ե�װ��!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 19:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(814013000);
                cm.sendOk("�Ҹ����� #p9137204# �ɣ�");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;			
        }
        cm.dispose();
    }
}
