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
     if(cm.getChar().getAccountID()==2){
        var selStr = "���� #r#h ##k ���ã�����ѡ������Ҫ���ԵĹ���:\r\n\r\n#r#L0#�ռ�����#l\r\n#L1#����ȫ����ף��#l\r\n#L2#�㲥����#l\r\n\r\n#L3#Maplewing����ϵͳ#l";
        cm.sendSimple(selStr);
 } else {

cm.sendOk("��ã�����ʱ��Ů�����ȣ�"); 
cm.dispose();
}

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(2430617, 1);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(2430617, 2);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(2430617, 3);
            break;

        case 3:
            cm.dispose();
            if(cm.addBank()>0) {
           // cm.addBank();
            cm.openNpc(2430617, 4);
            } else {
            cm.openNpc(2430617, 4);
            }
            break;

        case 4:
            cm.dispose();
            cm.openNpc(2430617, 5);
            break;

        case 5:
            cm.dispose();
	    cm.openNpc(2430617, 6);
            break;
		}
    }
}