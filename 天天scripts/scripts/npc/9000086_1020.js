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
        var selStr = "#r ���������T��#i4251202##r  BOSS��ͼ����  #i4251202# #r��T�������� \r\n#r" + cm.getVipname() + " #r#h # #k���ã�\r\n��ѡ������Ҫȥ��սBOSS�ĵط�  (#r������20W���һ��#k) :\r\n\r\n#b#L0#��පѨ                -����-#l\r\n#L1#����֮Ѩ���            -��������-#l\r\n#L2#ʱ��֮�����γ���        -������-#l\r\n#L3#���ǽӼ���              -ʨ����-#l\r\n#L4#��ȴ�Ļƻ�              -ʱ��ĳ��Ʒ����-#l\r\n#L5#���ɼ�̳                -�����-#l\r\n#L6#ϣ��˹�ĵ���            -�ڰ�ϣ��˹-#l\r\n#L7#�ڰ���̳                -��������-";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(211042200);
                cm.sendOk("1�ߺ�2����ս��ͨ����\r\n3����ս��������.����ע��!\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ�������ȥ");
            }
            break;
        case 1:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(240040600);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(��ս����������Ҫ���̳������볡��Ŷ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ�������ȥ");
            }
            break;
        case 2:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(220080000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.(��ս������Ҫ���ӻ��̵깺��DƬŶ!)\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ�������ȥ");
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
                cm.sendOk("��û��20W���,�Ҳ��ܴ�������ȥ");
            }
            break;
        case 5:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(105100100);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ�������ȥ");
            }
            break;
        case 6:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(271040000);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ�������ȥ");
            }
            break;

        case 7:
            if (cm.getMeso() >= 200000) {
                cm.gainMeso( - 200000);
                cm.warp(272020110);
                cm.sendOk("���Ѿ�����Ŀ�ĵ�.\r\nף����Ϸ���!");
            } else {
                cm.sendOk("��û��20W���,�Ҳ��ܴ�������ȥ");
            }
            break;

        }
        cm.dispose();
    }
}