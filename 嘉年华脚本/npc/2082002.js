function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    status++;
    if(mode == 0) {
	cm.sendOk("船在过一会儿就要开了!请耐心等待吧!");
	cm.dispose();
	return;
    }
    if(status == 0) {
	cm.sendYesNo("你想离开这里吗？？");
    } else if(status == 1) {
	cm.warp(240000110, 0);
	cm.dispose();
    }
}
