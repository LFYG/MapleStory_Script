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
var Message = new Array(" ��ӭ��������������Ϸ��Ŀǰ��Ϸ����һЩBUG����Ϸ���������ֵ��߻����������� ",
                        " �������������κν��ף������ϵ���ƭ�����ס����Ψһ�ͷ�QQ:601143764 ",
                        " VIP��������վ��ֱ�ӳ�ֵԪ����������Ϸ����������ϵGMŶ ",
	                " ��Ϸ�У�������������д���ļ��ܵ��±����ҵ��ߣ������ܵ��ͷ� ",
                        " ����ʹ���κηǷ����򣺱��ٳ���,����,�޵�,���MISS,����,�޸�WZ,���ٹ�ͼ,�޸Ĺ���״̬,�һ������,���������ŷ�IP ",
                        " ������Ϸ��ҿ��Լ�Ⱥ����������ȺԱ���û��๥��.���öԱ�������Ա��������.��̻������������˺��������Ի��⡣�����ϳ� ",
                        " ���������Գ��ڽ׶�,�еĶ�����δ����,ϣ����λ����ܽ����ĺý����ṩ���ͷ�,ͬʱ�������Ľ����,���ǲ�����Ҳ��䷢��Ӧ���� ",
                        " �����ѿ������������ӡ������ܡ��İ�ʨ����������������������(������)��BOSS�����ٻ�����ӭ��Ҳ�����ս!");
	em.getChannelServer().broadcastPacket(net.sf.odinms.tools.MaplePacketCreator.serverNotice(0, Message[Math.floor(Math.random() * Message.length)]));
}
