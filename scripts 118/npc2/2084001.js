/*
	������
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        cm.sendSimple("��ʲô����\r\n\r\n#b#L0#����˭��#l\r\n#L1#������㽻�ס�#l");
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.sendNext("����ʶ�������������һ���̽����档");
            break;
        case 1:
            cm.sendNextPrev("��ͨ��ó��׬�˺ܶ�Ǯ���������ʲôֵǮ�Ķ�����������ʱ�����ҡ�");
            break;
        }
        cm.dispose();
    }
}