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
if (cm.getMapId() == 272020110) {
      cm.sendSimple("��Խʱ�չ�����ð�ռң����ǲ�����Ҫ����ֹ#e#r��������#n��\r\n\r\n#b#L1#�ǵġ�Ϊ��ʱ��Ů�����ȣ���Ҫ��ܰ������գ�-----1#l\r\n\r\n#b#L2#�ǵġ�Ϊ��ʱ��Ů�����ȣ���Ҫ��ܰ������գ�-----2#l");
     //cm.openNpc(1104209,1);

 } else {

var selStr = "��ѡ����Ҫȥ�ĵط���:\r\n\r\n#b#L0#�뿪#l";
        cm.sendSimple(selStr);
 }

    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
                cm.warp(272020110);
            break;
        case 1:
            cm.dispose();
            cm.openNpc(1104209,1);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(1104209,2);
            break;

		}
    }
}