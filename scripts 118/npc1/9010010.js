/*
 	Cassandra
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        cm.sendSimple("��֪������ˮ����������ʲô��\r\n\r\n#b#L0#����֪��������ڽ��еĻ��#l");
    } else if (status == 1) {
        cm.sendEventWindow();
        cm.dispose();
    }
}