function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.sendNext("��û׼��������μӴ��Ҷ��Ļ���������ʱ�����ҡ���ϣ�");
        cm.dispose();
    } else {
        if (status == 0 && mode == 0) {
            cm.sendNext("��û׼��������μӴ��Ҷ��Ļ���������ʱ�����ҡ���ϣ�");
            cm.dispose();
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.isCanPvp()) {
                cm.sendYesNo("����μӴ��Ҷ����õģ��ҿ��԰����͵���ڡ�����������Ժ������˶Ծ���ȷ���Լ������������⣬ϣ���㲻Ҫ�ܾ�����������");
            } else {
                cm.sendNext("Pvpϵͳ��δ����.");
                cm.dispose();
            }
        } else if (status == 1) {
            cm.saveReturnLocation("PVP");
            cm.warp(960000000);
            cm.dispose();
        }
    }
}