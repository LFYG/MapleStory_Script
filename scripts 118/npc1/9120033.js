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
            var selStr = "#r#h ##k#k��ã�����������Զһ����ֵ��ߣ�#b\r\n#b#L1#��ȡ�سɾ�#k\r\n#L3##b�Ϲ����Ž�ָ����#k\r\n#b#L4#ð�յ�7�������Ҷһ���Ʒ#k\r\n#b#L5#�н�ҹ���7��������#k"; 
        cm.sendSimple(selStr);
        } else if (status == 1) { 
        switch (selection) {
        case 0:
		cm.sendOk("7����������ң�\r\n)1.��ͨ������ϵͳ,����ϵͳ,�һ�ϵͳ,ÿ�ո������!\r\n)2.�ռ��ļ����Խ��һ���ƷԽ��,�����ռ����ٿ���ʵ��!"); 
        case 1:
            cm.dispose();
            cm.openNpc(9120033,9);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9120033, 3);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9120033, 1);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9120033, 2);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9120033, 12);
            break;
        }
    }
}
