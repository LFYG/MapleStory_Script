var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 3);
    cal.set(java.util.Calendar.MINUTE, 50);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 5;
    }
    setupTask = em.scheduleAtTimestamp("start", nextTime);
}

function cancelSchedule() {
    setupTask.cancel(true);
}

function start() {
    scheduleNew();
	var Message = new Array(" ��ӭ����099����ð�յ����������bug�뼰ʱ�ύ��GM�������ǹ�ͬ�������ǵ����磡",
	" ��Ϸ�ڣ����еĶ�������Ҫ���Լ���Ŭ���õ���GM������κ�����κζ������������λ�������飡",
	" �벻Ҫʹ���κε�������������з��֣�һ�����÷�Ŵ���������⣬������ϧ�Լ��˺ţ� ",
	" ��vip�и���˵����ɫ��������˵�Ļ��ø�����ע����?�Ͻ������Ա�ɣ� ");
	em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0, Message[Math.floor(Math.random() * Message.length)]));
}
