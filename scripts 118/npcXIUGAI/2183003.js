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
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.")
            cm.dispose();
        } 
    else if (status == 0) {

        var selStr = "����Զ����ð�ռ�#e #r#h ##k#n  ��ã�\r\nΪ�˽������#r#e ��˹�� #n#k�������������Ƿ�����ļ��\r\n#dð�ռ�����ѡ��#b\r\n\r\n#L1#�μӰ�˹�����ս��#l#r\r\n\r\n#e#L2#ǰ��ϣ��֮������ϣ����#l#n";
        cm.sendSimple(selStr);


    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(2183003, 1);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(2183003, 1);
            break;
        case 2:
            cm.dispose();
            cm.warp(262030000);
            break;

        case 3:
            cm.dispose();
            if(cm.addBank()>0) {
           // cm.addBank();
            cm.openNpc(9300011, 4);
            } else {
            cm.openNpc(9300011, 4);
            }
            break;

        case 4:
            cm.dispose();
            cm.openNpc(9300011, 5);
            break;
		}
    }
}