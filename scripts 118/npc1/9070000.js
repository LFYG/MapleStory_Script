var status = -1;

function action(mode, type, selection) {
    if (cm.isCanPvp()) {
        cm.sendPVPWindow();
    } else {
        cm.sendNext("Pvpϵͳ��δ����.");
    }
    cm.dispose();
}