var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 0);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 30;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
        var allPlayers = em.getChannelServer().getMapFactory().getMap(910000000).getCharacters();//ȡ�õ�ǰ��ͼ������������
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {//ѭ��ÿһ�����
            var player = allPlayers.next();
	    player.modifyCSPoints(1, 4)
	    player.modifyCSPoints(2, 10)
            player.gainPlayerPoints(+0);
	///player.dropMessage(0,"[���߽���]���ݵ��� [ 10 ] ���þ� ��");
	player.dropMessage(-1,"[�ݵ㽱��]�г�ÿ30���� [4] ���,[10]���þ�");
	//player.dropMessage(-1,"����� [5] ���,[50] ���þ�");
	player.dropMessage(5,"[���⵱�쿪��˫���ݵ㽱��]�г�ÿ30���� [4] ���,[10]���þ�");
	    
        }
}
