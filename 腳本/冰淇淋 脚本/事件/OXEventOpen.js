var setupTask;
var time = new Date();
var hour = time.getHours();
var min = time.getMinutes();
var sec = time.getSeconds();

function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("open", "false");
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 30;//30����һ��ʱ��
    }
    setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function startEvent() {
    if ((hour == 13 || hour == 7 ) && min == 10) {
        em.setProperty("open", "true");
        var cal = java.util.Calendar.getInstance();
        cal.set(java.util.Calendar.HOUR, 0);
        cal.set(java.util.Calendar.MINUTE, 10);
        cal.set(java.util.Calendar.SECOND, 0);
        var nextTime = cal.getTimeInMillis();
        while (nextTime <= java.lang.System.currentTimeMillis()) {
            nextTime += 1000 * 60 * 3; //���ö����ڿ��Ž���
        }
        setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
        em.broadcastServerMsg(5120026, "OX������Ѿ���ʼ���������ٶȴӸ�����ڽ���Ŷ��", true);
        em.broadcastServerMsg("[OX�����]  �����Ѿ������������ٶȴӸ�����ڽ���Ŷ��");
    }
}

function finishEvent() {
    em.broadcastServerMsg("[OX�����] �����Ѿ��رգ�����ÿ���13��10��19���10�ֿ��ţ�");
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}