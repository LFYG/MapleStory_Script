var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendNext("�ۡ�����С�ġ�ŵ����˹������ʩ�������ţ��ڽ���ʲô����ֻ�ܸ�������±����йء��������������ܣ�");
    } else if (status == 1) {
        cm.sendNextPrev("��װʲô�������ڻ������ܣ�������һ�����ȷ�������ֱ������������Ǻ�����ø�ǿ�����ҿ�������Ů�����Թ�������2�����ţ���������˵ʲô����ѽ����������Ů�Ļ�����Ա�ǵĹ�������Ȼ����ߣ�");
        cm.dispose();
    }
}