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
        nextTime += 1000 * 60;
    }
    		setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
	if (setupTask!=null)
  		setupTask.cancel(true);
}

function start() {
	var cal = java.util.Calendar.getInstance();
	var hour = cal.get(java.util.Calendar.HOUR_OF_DAY);
	var min = cal.get(java.util.Calendar.MINUTE);
	var sec = cal.get(java.util.Calendar.SECOND);
	var weekday = cal.get(java.util.Calendar.DAY_OF_WEEK);
	var month = cal.get(java.util.Calendar.MONTH) + 1; //����·�
	var day = cal.get(java.util.Calendar.DATE); //��ȡ��
	weekday-=1;
	scheduleNew();
	if(hour == 20 && min == 29){
		em.broadcastServerMsg(5121047,"����1���ӣ�Ů������Ҫ���͸���Ŷ��ǧ������~~",true);
	}
	if(hour == 20 && min >= 30 && min <= 35){
		em.broadcastServerMsg(5121048,"Ů�����ڴ͸�������ʱ���Ի��Ģ����ң�",true);
		var allPlayers = em.getChannelServer().getPlayerStorage().getAllCharacters();
		allPlayers = allPlayers.iterator();
		while (allPlayers.hasNext()) {//ѭ��ÿһ�����
			var player = allPlayers.next();
			var p = player.getBossLog("Ů��͸�");
			if (p <= 0) {
				player.setBossLog("Ů��͸�");
				var text = "< ����ð�յ� >\r\�������Ů�����ߴ͸���\r\n";
				var gifts = Array(
					Array(5062000, 10, "����ħ��"),
					Array(5062002, 5, "�߼�����ħ��"),
					Array(5062500, 5, "��ʦ��������ħ��")
				);
				var random = Math.floor(Math.random()*100);
				if (random < 15) {
					gifts.push(Array(4031997, 1, "[����]Ģ�����"));
				}
				for(var key in gifts) {
					em.addById(player.getClient(), gifts[key][0], gifts[key][1], "Ů��͸�");
					text+=gifts[key][2]+"��"+gifts[key][1]+"\r\n";
				}
				text+="��л����֧�֣�";
				player.dropMessage(1,text);	
			} 
		}
	}
   // java.lang.System.out.println(month+"-"+day+" "+hour+":"+min+" LABA WORK");
}
