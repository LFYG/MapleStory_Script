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
            var selStr = "#r#h ##k#k��ã�����������Զһ����ֵ��ߣ�#b\r\n#L0#7��������\r\n#r#L1#��ȡ��������#k[#bNew#k]\r\n#r#L2#װ���һ��ع�#k[#bNew#k]\r\n#L3##r�Ϲ����Ž�ָ����#k[#bNew#k]\r\n#r#L4#ð�յ�7�������Ҷһ�#k[#bNew#k]\r\n#r#L5#�н�ҹ���7��������#k[#bNew#k]"; 
        cm.sendSimple(selStr);
        } else if (status == 1) { 
        switch (selection) {
        case 0:
		cm.sendOk("7����������ң�\r\n)1.��ͨ������ϵͳ,����ϵͳ,�һ�ϵͳ,ÿ�ո������!\r\n)2.�ռ��ļ����Խ��һ���ƷԽ��,�����ռ����ٿ���ʵ��!"); 
        case 1:
            cm.dispose();
            cm.sendOk("�����ڴ���");
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9120033, 3);
            break;
        case 3:
            cm.dispose();
	    cm.sendOk("��ʱ�ر�");
            //cm.openNpc(9120033, 1);
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
