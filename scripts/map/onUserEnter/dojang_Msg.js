var messages = Array("����ս���������������������", "�ҵ��㣡���������Ļ�����ӭ������ս��", "��ս��������ļһ��һ��������(��)��ڣ���", "�뱻�ƺ�Ϊʧ�����𣿻�ӭ����ս��");

function start(ms) {
    if (ms.getPlayer().getMap().getId() == 925020000) {
        ms.getPlayer().startMapEffect(messages[Math.floor(Math.random() * messages.length)], 5120024);
    } else {
        ms.getPlayer().resetEnteredScript();
        ms.getPlayer().startMapEffect("���������ҿ����㣬�Ҳ��������뿪�ġ��������ȴ���ң�", 5120024);
    }
}
