var status = 0;
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == -1) {
            cm.dispose();
		} else if (status == 0) {
			var text = "��ã����ǿ����ߵ���ż�������ҿ���Ϊ����Щʲô��\r\n";
			text+="#b#L1#��������װ#l";
			text+="#b#L2#���Է���/���ʹ���#l";
			//text+="#b#L3#�������ʹ���#l";
			cm.sendSimple(text);
		} else if (status == 1) {
			cm.dispose();
			cm.openNpc(9010017, selection);
		}
    }//mode
}//f