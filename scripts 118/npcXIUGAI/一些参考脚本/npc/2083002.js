function start() {
if (cm.getPlayer().getMapId() == 240060200 || cm.getPlayer().getMapId() == 240060201)
    cm.sendYesNo("����ص�����֮Ѩ��");
else
    cm.sendYesNo("����ص��г���");
}

function action(mode, type, selection) {
    if (mode == 1) {
	if (cm.getPlayer().getMapId() == 240060200 || cm.getPlayer().getMapId() == 240060201)
		cm.warp(240050400);
        	
	else
		cm.warp(910000000);
    }
    cm.dispose();
}