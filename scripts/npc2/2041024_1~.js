var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
        cm.dispose();
    }
    if (status == 0) {
        cm.sendSimple("��ȷ��Ҫ�һ���ս��Ʒ��\r\n������ܴ���100��#v4000134#,100��#v4000149#,10��#v4000151#,10��#v4000152#�ҾͿ��Ը���������ս����Ʒ.\r\n��ȷ��Ҫ�һ���ս��Ʒ��...\r\n#b#L0#�ǵ���Ҫ�һ�.#l\r\n#b#L1#Ŷ,��ô�鷳 ��ȥ���ɹ�������ҵĺ���.#l");
    } else if (status == 1) {
        switch (selection) {
        case 0:
	if(cm.haveItem(4000134,100) && cm.haveItem(4000149,100) && cm.haveItem(4000151,10) && cm.haveItem(4000152,10) ){
	cm.gainItem(4000134,-100);
	cm.gainItem(4000149,-100);
	cm.gainItem(4000151,-10);
	cm.gainItem(4000152,-10);
	cm.gainItem(4031179,+1);
	cm.sendOk("ף����һ��ɹ�");
	cm.dispose();
}else{
	cm.sendOk("�����Ʒ��������\r\n��Ҫ100��#v4000134#,100��#v4000149#,10��#v4000151#,10��#v4000152#...");
}
            cm.dispose();
            break;
        case 1:
            cm.dispose();
		cm.warp(910000000);
            break;
        }
    }
}