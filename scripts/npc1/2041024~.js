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
        cm.sendSimple("��ӭʹ�û���ð�յ�BOSS��Ʒ����ϵͳ\r\n��ѡ����Ҫ�һ�����սBOSS����Ʒ...\r\n#b#L0#�һ�������ս��Ʒ - DƬ.#l");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
	cm.openNpc(2041024,1);
            break;
        case 1:
            cm.dispose();
		cm.warp(910000000);
            break;
        }
    }
}