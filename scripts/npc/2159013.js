var status = -1;

function action(mode, type, selection) {
    status++;
    if (status == 0) {
        cm.sendNext("���Ŵ���͵͵�س��������е���š���Ȼ���ܻᱻ����ò������и���������棬���㱻��Ҳû��ϵ��");
    } else if (status == 1) {
        cm.dispose();
    }
}