var status = 0;
var mh ="#fUI/UIWindow/Quest/icon6/7#";

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
        var selStr = "#r#h ##k#k��ã����ǹ���ʦ���������ѡ�����¹��ܣ�\r\n"; 
            //selStr +="#b#L0#"+ mh +"11��������\r\n";
			selStr +="#e#r#L1#"+ mh +"��������#n#k[#bNew#k]\r\n";
			selStr +="#e#d#L2#"+ mh +"�����ֽ�#n#k[#bNew#k]\r\n";
			selStr +="#e#b#L7#"+ mh +"150װ����¯ϵͳ#n#k[#bNew#k]\r\n";
			//selStr +="#r#L3#"+ mh +"�Ϲ����Ž�ָ����#k[#bNew#k]\r\n";
			//selStr +="#r#L4#"+ mh +"ð�յ�11�������Ҷһ�#k[#bNew#k]\r\n";
			//selStr +="#r#L5#"+ mh +"�н�ҹ���11��������#k[#bNew#k]\r\n";
			selStr +="#e#d#L6#"+ mh +"�ڴ�����װ������#n#k[#bNew#k]\r\n";
		cm.sendSimple(selStr);
        } else if (status == 1) { 
        switch (selection) {
        case 0:
		    cm.dispose();
		    cm.sendOk("11����������ң�\r\n1.��ͨ������ϵͳ,����ϵͳ,�һ�ϵͳ,ÿ�ո������!\r\n)2.�ռ��ļ����Խ��һ���ƷԽ��,�����ռ����ٿ���ʵ��!"); 
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9120033, 14);
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
		case 6:
            cm.dispose();
			cm.openNpc(9120033, 13);
            break;
		case 7:
            cm.dispose();
			cm.openNpc(9120033, 15);
            break;
        }
    }
}
