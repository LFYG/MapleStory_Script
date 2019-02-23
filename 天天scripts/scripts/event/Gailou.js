var setupTask;
var cal;
var year;
var month;
var day;

function init() {
    scheduleNew();
}

function refreshDates(calendar) {
    year = calendar.get(java.util.Calendar.YEAR);
    month = calendar.get(java.util.Calendar.MONTH) + 1;
    if (Math.floor(month / 10) == 0) {
        month = "0" + month;
    }
    day = calendar.get(java.util.Calendar.DATE);
    if (Math.floor(day / 10) == 0) {
        day = "0" + day;
    }
}


function scheduleNew() {
    em.setProperty("state", "false");
    em.setProperty("endEvent", "true");
    em.setProperty("check", "0");
    em.setProperty("maxCheck", "9999999");
    cal = java.util.Calendar.getInstance();

    // weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
    // hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
    refreshDates(cal);


    // cal.set(java.util.Calendar.HOUR, 0);
    // cal.set(java.util.Calendar.MINUTE, 10);
    // cal.set(java.util.Calendar.SECOND, 0);
    // var nextTime = cal.getTimeInMillis();
    // while (nextTime <= java.lang.System.currentTimeMillis()) {
    //     nextTime += 1000 * 60 * 60 *  24; //���ö�ÿ���
    // }

    date = year + "-" + month + "-" + day + " 20:00:00.0";
    timeStamp = java.sql.Timestamp.valueOf(date).getTime();
    setupTask = em.scheduleAtTimestamp("startEvent", timeStamp);


    // setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
}

function startEvent() {
    em.setProperty("state", "true");
    em.setProperty("endEvent", "false");
    em.setProperty("check", 0);
    em.setProperty("maxCheck", "" + getMaxCheck(Math.floor(Math.random() * 2)));
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 10; //���ö�ý���
    }
    setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
    em.broadcastServerMsg(5120116, "��¥��Ѿ���ʼ�����������г��ѿ�֮ӥ", true);
    em.broadcastServerMsg("[��¥�]  ��Ѿ�������10���Ӻ��������1���ﵽ " + em.getProperty("maxCheck") + " ¥����ҽ���÷��Ľ�����");
}

function finishEvent() {
    if (em.getProperty("endEvent").equals("false")) {
        em.broadcastServerMsg("[��¥�] ��Ѿ�������110���Ӻ��������λδ�������н����������ٽ�������");
    } else {
        // em.broadcastServerMsg("[��¥�] ���λ���н����Ѿ����ţ��´λ����50���Ӻ�����ϣ����һ����μӡ�");
        em.broadcastServerMsg("[��¥�] ���λ���н����Ѿ����ţ�ϣ����һ����μӡ�");
    }
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}

function getMaxCheck(type) {
    switch (type) {
        case 0:
            return 222;
        case 1:
            return 333;
        case 2:
            return 777;
    }
    return 999;
}

function rand(lbound, ubound) {
    return Math.floor(Math.random() * (ubound - lbound)) + lbound;
}
