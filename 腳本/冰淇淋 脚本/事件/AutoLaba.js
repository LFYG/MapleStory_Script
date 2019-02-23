var setupTask;

function init() {
    scheduleNew();
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
	var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);//������ڣ��������� 1 ��������ȥ���������� 7��
	var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
	var min = cal.get(java.util.Calendar.MINUTE);
	var sec = cal.get(java.util.Calendar.SECOND);
	
	scheduleNew();
	if(hour % 2 == 1 && min == 15){
		em.broadcastServerMsg(5121017,"���ٵ��㳡������ϣ���Ʒ������������ÿ�´󽱵�����~",true);
	}
	if(hour % 2 == 1 && min == 25){
		em.broadcastServerMsg(5121033,"���ڹٷ��Կ�ݼ��ĵ�����ͯЬ��Ҫ�ѷֱ��ʵ�����ܿ����������~",true);
	}
	if(hour % 2 == 1 && min == 35){
		em.broadcastServerMsg(5121017,"ÿ�����������Ѿ����Ų鿴���۷影����Ϯ��������а��ע~",true);
	}
    if(min == 50){
		em.broadcastServerMsg(5120081,"���������ˣ�ϲ���������ҵ��г����ʴ������������~",true);
	}
	if(weekday == 6 && hour % 2 == 0 && min == 30) {
	    em.broadcastServerMsg(5121036,"�����������գ�����10�㵽����10����㳡���ʷ���Ӵ���Ͽ����ɣ�~",true);
	}
}
