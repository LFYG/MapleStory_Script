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
        var selStr = "Dear#r#h ##k���ã����ھ�Ҫ��ȥ��ս�ڰ�Ů��ϣ��˹����\r\n#L2##r��׼�����ˣ�#l \r\n#L1##rŮ�ʺ��ȣ����ǲ������ˣ����ǻ������г�#l";
        cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
	case 1:
        cm.warp(910000000);
	  	cm.dispose();
	break;
	case 2:
        cm.warp(271040100);
		cm.dispose();
        cm.spawnNpc(1104201, new java.awt.Point(-685, 0));
	break;
		}
	}
}