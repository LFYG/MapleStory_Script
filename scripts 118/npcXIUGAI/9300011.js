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
     if(cm.getChar().getAccountID()==1){
        var selStr = "���� #r#h ##k ���ã�����ѡ������Ҫ���ԵĹ���:\r\n\r\n#r#L0#�ռ�����#l\r\n#L1#����ȫ����ף��#l\r\n#L2#�㲥����#l\r\n\r\n#L3#Maplewing����ϵͳ#l\r\n#L4#Maplewing����#l\r\n#L5#Maplewing0000#l";
        cm.sendSimple(selStr);
 } else {

cm.sendOk("�Բ����Ҳ���Ϊ�����"); 
cm.dispose();
}

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9300011, 1);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(9300011, 2);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9300011, 3);
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

        case 5:
            cm.dispose();
	    cm.openNpc(9300011, 6);
            break;
        case 6:
            cm.dispose();
            cm.sendOk("��ֵ��վ.\r\n������ֵ����Ϊ1:3000.\r\n���������������.\r\n�����ʲô��������ѯ����Ա.");
            break;
        case 7:
            cm.dispose();
	    cm.openNpc(9900002,7);
            break;
        case 8:
	    cm.warp(910530202,0);
            cm.sendOk("�Ѿ����㴫�͵����ͼ.��������Ѱ�ҵ��ܹ�!�зḻ�Ľ���Ŷ!\r\n#rף����Ϸ���!!!");
            cm.dispose();
            break;
        case 9:
            cm.dispose();
	    cm.openWeb("http://www.5ifly.com");
            cm.sendOk("�Ѿ�Ϊ�����ְҵ������ı����嵥.\r\n#rף����Ϸ���!!!");
            break;
        case 10:
            cm.dispose();
	    cm.openNpc(9900004,10);
            break;
		}
    }
}