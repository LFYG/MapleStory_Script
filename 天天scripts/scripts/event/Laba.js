var setupTask;

function init() {
    // scheduleNew();
    // �ر���ʾ
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();

    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60;
    }
    		setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
	var cal = java.util.Calendar.getInstance();
	var hour = cal.get(java.util.Calendar.HOUR);
	var min = cal.get(java.util.Calendar.MINUTE);
	var sec = cal.get(java.util.Calendar.SECOND);

	scheduleNew();
	 if (hour % 4 == 10 && min == 13) {
		//em.startSuperlabaed("ÿСʱ����<��ս����>���г�������������,��ʿ�ǿ������������..",5121010);
		em.broadcastServerMsg(5120023,"ÿ4Сʱ�� < ���� > ���г���������������,С�����ץ��ʱ������ҵ��..",true);
	} else if (hour % 4 == 0 && min == 20) {
		em.broadcastServerMsg(5120023," < ���� > ������ˣ���4Сʱ�������������Ŷ.",true);
	}

}
