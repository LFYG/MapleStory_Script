function start() {
    if (cm.getPlayer().getClient().getChannel() == 3 || cm.getPlayer().getClient().getChannel() == 5) {
        cm.dispose();
        cm.openNpc(2083004, 2);
    } else if (cm.getPlayer().getClient().getChannel() == 2 ||cm.getPlayer().getClient().getChannel() == 4 ) {
        cm.dispose();
        cm.openNpc(2083004, 1);
    } else {
        cm.sendOk("ֻ����2-5Ƶ���ſ��ԲμӺ���Զ����\r\n3��5Ƶ��Ϊ���׺�������2��4Ƶ��Ϊ��ͨ������.");
        cm.dispose();
    }
}