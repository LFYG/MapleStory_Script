status = -1;
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);//������ڣ��������� 1 ��������ȥ���������� 7��
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var min = ca.get(java.util.Calendar.MINUTE);//��÷���
var sec = ca.get(java.util.Calendar.SECOND); //�����
var event;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    event = cm.getEventManager("Gailou"); //��ȡ��ű������� test ��Ӧ event Ŀ¼����� gailou.js �ļ�
    if (status == 0) {
        if (event == null) {
            cm.sendOk("��ű�����...����ϵ����Ա�޸��������´򿪡�");
            cm.dispose();
        } else if (cm.getPlayer().getClient().getChannel() != 1) {
            cm.sendOk("�ֻ����1Ƶ�����У�");
	    cm.dispose();
        } else if (event != null && event.getProperty("state").equals("true")) {
            cm.sendYesNo("�װ���#r#h ##k���ã����Ǹ�¥�Ա�����λʱ��Ϊ10����.\r\n���һ�Ƚ������Ƚ������Ƚ�.\r\nһ�Ƚ�����һ�����ｨ¥�߶ȵ���һ��һ�Ƚ���\r\n���Ƚ���һ�Ƚ�֮�������¥��10�����Ϊ���Ƚ�\r\n���Ƚ���Ϊ���������ֻ��1�������� 1000-3000���\r\n�ǾͿ��������� ��ʼ�ɣ�");
        } else {
            cm.sendOk("�2Сʱһ��ÿ��10���ӣ�������������������ţ����ע���Ǹ�¥������μӡ�\r\n���һ�Ƚ�6666������Ƚ�3000-5000�����Ƚ�1000-3000\r\nһ�Ƚ�����һ�����ｨ¥�߶ȵ���һ��һ�Ƚ���\r\n���Ƚ���һ�Ƚ�֮�������¥��5�����Ϊ���Ƚ�\r\n���Ƚ���Ϊ���������ֻ��1�������� 1000 - 3000���");
            cm.dispose();
        }
    } else if (status == 1) {
        if (event != null && event.getProperty("state").equals("true")) {
            event.setProperty("check", "" + (parseInt(event.getProperty("check")) + 1)); //���õ������+1
            var count = parseInt(event.getProperty("check")); //����ܵ������
            var max = parseInt(event.getProperty("maxCheck"));
			var dj  = 6666;
            var dj2 = rand(3000, 5000);
            var dj3 = rand(1000, 3000);
            if (count == max) {
                cm.gainNX( + dj);
				cm.setBossLog("��¥��һ",1);
                cm.worldSpouseMessage(0x18,"[��¥�]һ�Ƚ�����ϲ��� " + cm.getName() + " ����¥��л��һ�Ƚ� 6666���.");
                cm.sendOk("��ϲ��������¥�һ�Ƚ�������6666�㡣");
            } else if (count > max && count <= (max + 8)) {
                cm.gainNX( + dj2);
                cm.worldSpouseMessage(0x18,"[��¥�]���Ƚ�����ϲ��� " + cm.getName() + " ����¥��л�ö��Ƚ� " + dj2 + "���.");
                cm.sendOk("��ϲ��������¥����Ƚ���\r\n���� 3000 - 5000 �㲻�ȡ�");
            } else if (count > (max + 10)) {
                cm.gainNX( + dj3);
                event.setProperty("state", "false");
                event.setProperty("endEvent", "true");
                cm.worldSpouseMessage(0x18,"[��¥�]���Ƚ�����ϲ��� " + cm.getName() + " ����¥��л�����Ƚ� " + dj3 + "���.");
                cm.sendOk("��ϲ��������¥����Ƚ���\r\n���� 1000 - 3000 �㲻�ȡ�\r\n������¥��Ѿ�����...");
            } else {
                cm.sendOk("��ǰ¥��: " + parseInt(event.getProperty("check")) + " ¥��");
            }
        } else {
            cm.sendOk("���δ�������߻�Ѿ����������н������Ѿ����ţ����´��ڲμӡ�");
        }
        cm.dispose();
    }
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}