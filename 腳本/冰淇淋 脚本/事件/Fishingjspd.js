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
        nextTime += 1000 * 40;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
        var allPlayers = em.getChannelServer().getMapFactory().getMap(741000202).getCharacters();//ȡ�õ�ǰ��ͼ������������
        allPlayers = allPlayers.iterator();
        while (allPlayers.hasNext()) {//ѭ��ÿһ�����
            var player = allPlayers.next();
			var putong = 1;
			var shuangbei = putong * 2;
			var sanbei = putong * 3;
		if(player.haveItem(5220002) && player.haveItem(3011000) && player.haveItem(5340001)){ //������װ��
		if(player.haveItem(2300000) || player.haveItem(2300001)){  //������
		if(player.haveItem(5420008)){
		    player.gainPlayerPoints( + sanbei);
			player.dropMessage(5,"[�����ݵ�]������Ч�����棬��� [ "+ sanbei +" ] ����֡�");
	    }else if (player.haveItem(4001512)){
		    player.gainPlayerPoints( + shuangbei);
			player.dropMessage(5,"[�����ݵ�]��˫���������棬��� [ "+ shuangbei +" ] ����֡�");
	    }else{
            player.gainPlayerPoints( + putong);
	        player.dropMessage(5,"[�����ݵ�]������ʱ�佱������� [ "+ putong +" ] ����֡�");
		}
        }else{
		    player.dropMessage(5,"[�����ݵ�]��û��������޷������ݵ㡣");
	    }
		}else{
		    player.dropMessage(5,"[�����ݵ�]��û�е�����ߣ��޷������ݵ㡣");
		}
		}
}
