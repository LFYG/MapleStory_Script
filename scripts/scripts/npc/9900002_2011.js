var status = 0;
var aaa ="#fUI/UIWindow/Quest/icon6/7#";
var eff ="#fUI/UIWindow/Quest/icon2/7#";
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
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#�װ���#r#h ##k���ã��봫�͵�ʲô�ط�(ÿ��20W):\r\n";
		selStr += "#L10#" + eff + "#b���Ի�е��#l\r\n"
		selStr += "#L11#" + eff + "#bС����˹#l\r\n"
		selStr += "#L15#" + eff + "#b�����������߼�װ����#r[New]#l\r\n"
		
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(211042200);
                cm.sendOk("2�ߺ�4����ս��ͨ����\r\n3����ս��������.����ע��!\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 1:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(240040600);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(��ս����������Ҫ���̳������볡��Ŷ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 2:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(220080000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(��ս������Ҫ���ӻ��̵깺��DƬŶ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 15:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(105200000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(����װ������!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 3:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(211070000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(ʨ�������߼�װ��Ŷ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 4:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(270050000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(Ʒ���ͱ�����װ����30��ʿŶ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 5:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(105100100);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 7:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000710);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 8:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000820);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 9:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000110);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 10:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000210);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 11:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(802000410);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 12:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(910023000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 6:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(271040000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 16:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(863000100);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(���˱��յ±��߼���ƷŶ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
            break;
        case 17:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(401072000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(���������˹���߼�����Ŷ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ������ȥ");
            }
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
        }
        cm.dispose();
    }
}