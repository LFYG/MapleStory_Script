var status = 0;
var bossid = "������";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE); //��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE); //��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
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
    if (status == 0) {
		var text = "";
		if ((month==2 || month==3) && (day == 28 || (day >=1 && day <=3))) {
			text += "2��28����3��3��֮�䣬ÿ������ڴ˴���������ʱ����ȡ���͵���ȯ������\r\n";
			text+="#b#L1#��ȡ120���ӽ�����5000���#l\r\n";
			text+="#b#L2#��ȡ360���ӽ�����15000����15000����ȯ��#l";
			cm.sendSimple(text);
		} else {
			cm.sendOk("��Ѿ�����");
			cm.dispose();
		}
	} else if (status == 1) {
		typed = selection;
		cm.sendYesNo("�Ƿ����ھ���ȡ�������ÿ���˺�ֻ����ȡһ�Σ����ҽ�ɫ�ȼ���Ҫ���ڵ���180����");
	} else if (status == 2) {
		var points = 0;
		var nxpoints = 0;
		var needtime = 120;
		if (typed==1) {
			points = 5000;
			nxpoints = 0;
			needtime = 120;
		} else if (typed==2){
			points = 15000;
			nxpoints = 15000;
			needtime = 360;
		}
		if (cm.getPlayer().getTodayOnlineTime()>=needtime) {
			if (cm.getBossLogAcc(bossid+typed)==0) {
				cm.setBossLogAcc(bossid+typed);
				cm.gainNX(1, points);
				cm.gainNX(2, nxpoints);
				cm.sendOk("��ȡ�ɹ���");
				cm.dispose(); 
			} else {
				cm.sendOk("��ȡʧ�ܣ��������Ѿ���ȡ����");
				cm.dispose();
			}
		} else {
			cm.sendOk("��������ʱ�䲻��"+needtime+"���ӣ�");
			cm.dispose();
		}
	}
}