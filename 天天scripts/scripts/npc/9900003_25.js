var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var text = "#e���,����Ҫ�滻�˺�Ч����!\r\n";
            text += "#b#L1##i2431966##r����ʾ�˺�Ƥ��#l\r\n";
            text += "#b#L2##i2431967##r�������˹�˺�Ƥ��#l\r\n";
            text += "#b#L3##i2432131##r��������˺�Ƥ��#l\r\n";
            text += "#b#L4##i2432153##r���ʽ�˺�Ƥ��#l\r\n";
            text += "#b#L5##i2432154##r������ͳ�����˺�Ƥ��#l\r\n";
            text += "#b#L6##i2432207##r���ִ���ֲ��˺�Ƥ��#l\r\n";
            text += "#b#L7##i2432354##rʥ�������˺�Ƥ��#l\r\n";
            text += "#b#L8##i2432355##rѩ���˺�Ƥ��#l\r\n";
            text += "#b#L9##i2432465##r����ɯ���˺�Ƥ��#l\r\n";
            text += "#b#L10##i2432479##r����˿���˺�Ƥ��#l\r\n";
            text += "#b#L11##i2432639##r����սʿ�˺�Ƥ��#l\r\n";
            text += "#b#L12##i2432532##r���ᴺ���˺�Ƥ��#l\r\n";
            text += "#b#L13##i2432748##rѪɫ�˺�Ƥ��#l\r\n";
            text += "#b#L14##i2432640##r�����˺�Ƥ��#l\r\n";
            text += "#b#L15##i2432710##r��Ģ���˺�Ƥ��#l\r\n";
            text += "#b#L16##i2432836##r�����˺�Ƥ��#l\r\n";
            text += "#b#L17##i2432973##r�Ұ��˺�Ƥ��#l\r\n";
            text += "#b#L18##i2433063##rStar Planet�˺�Ƥ��#l\r\n";


            cm.sendSimple(text);

        } else if (status == 1) {
            switch (selection) {
                case 1:
                    if (cm.getPlayer().getCSPoints(1) >= 99000) {
                        cm.gainNX(-1000);

                        cm.getPlayer().updateInfoQuest1(7291, "1");
                        cm.sendOk("��ϲ,�ɹ�������,����ʾ�˺�Ƥ��");
                        // cm.dispose();
                    } else {
                        cm.sendOk("���ĵ����99000.");
                        // cm.dispose();
                    }
                    break;
                case 2:
                    cm.getPlayer().updateInfoQuest1(7291, "2");
                    cm.sendOk("��ϲ,�ɹ�������,�������˹�˺�Ƥ��");
                    break;
                case 3:
                    cm.getPlayer().updateInfoQuest1(7291, "3");
                    cm.sendOk("��ϲ,�ɹ�������,��������˺�Ƥ��");
                    break;
                case 4:
                    cm.getPlayer().updateInfoQuest1(7291, "4");
                    cm.sendOk("��ϲ,�ɹ�������,���ʽ�˺�Ƥ��");
                    break;
                case 5:
                    cm.getPlayer().updateInfoQuest1(7291, "5");
                    cm.sendOk("��ϲ,�ɹ�������,������ͳ�����˺�Ƥ��");
                    break;
                case 6:
                    cm.getPlayer().updateInfoQuest1(7291, "6");
                    cm.sendOk("��ϲ,�ɹ�������,���ִ���ֲ��˺�Ƥ��");
                    break;
                case 7:
                    cm.getPlayer().updateInfoQuest1(7291, "7");
                    cm.sendOk("��ϲ,�ɹ�������,ʥ�������˺�Ƥ��");
                    break;
                case 8:
                    cm.getPlayer().updateInfoQuest1(7291, "8");
                    cm.sendOk("��ϲ,�ɹ�������,ѩ���˺�Ƥ��");
                    break;
                case 9:
                    cm.getPlayer().updateInfoQuest1(7291, "9");
                    cm.sendOk("��ϲ,�ɹ�������,����ɯ���˺�Ƥ��");
                    break;
                case 10:
                    cm.getPlayer().updateInfoQuest1(7291, "10");
                    cm.sendOk("��ϲ,�ɹ�������,����˿���˺�Ƥ��");
                    break;
                case 11:
                    cm.getPlayer().updateInfoQuest1(7291, "11");
                    cm.sendOk("��ϲ,�ɹ�������,����սʿ�˺�Ƥ��");
                    break;
                case 12:
                    cm.getPlayer().updateInfoQuest1(7291, "12");
                    cm.sendOk("��ϲ,�ɹ�������,���ᴺ���˺�Ƥ��");
                    break;
                case 13:
                    cm.getPlayer().updateInfoQuest1(7291, "13");
                    cm.sendOk("��ϲ,�ɹ�������,Ѫɫ�˺�Ƥ��");
                    break;
                case 14:
                    cm.getPlayer().updateInfoQuest1(7291, "14");
                    cm.sendOk("��ϲ,�ɹ�������,�����˺�Ƥ��");
                    break;
                case 15:
                    cm.getPlayer().updateInfoQuest1(7291, "15");
                    cm.sendOk("��ϲ,�ɹ�������,��Ģ���˺�Ƥ��");
                    break;
                case 16:
                    cm.getPlayer().updateInfoQuest1(7291, "16");
                    cm.sendOk("��ϲ,�ɹ�������,�����˺�Ƥ��");
                    break;
                case 17:
                    cm.getPlayer().updateInfoQuest1(7291, "17");
                    cm.sendOk("��ϲ,�ɹ�������,�Ұ��˺�Ƥ��");
                    break;
                case 18:
                    cm.getPlayer().updateInfoQuest1(7291, "18");
                    cm.sendOk("��ϲ,�ɹ�������,Star Planet�˺�Ƥ��");
                    break;
            }
            cm.dispose();
        }
    }
}
