/*

 �ű����ܣ������
 
 */

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var chance1 = Math.floor(Math.random()*200+1);
var chance2 = Math.floor(Math.random()*50);
var chance3 = (Math.floor(Math.random()*20)+1);
var chance4 = Math.floor(Math.random()*1+6);

function start() {
	if((minute >= 30 && minute <= 33)){
		cm.gainNX(1, chance4);
		cm.sendOk("�㼷�� #r"+ chance4 +"#k ���");
		cm.worldMessage(0x18, "������̡� : ��ϲ " + cm.getChar().getName() + " ���г�12���ſ���ţ���� "+ chance4 +" ���.");
		cm.dispose();
	}else{
		cm.sendOk("      #d��ǰ������ʱ��: #r"+hour+" #b�� #r"+minute+" #b��\r\n\r\n         #e#r����̻��δ����\r\n\r\n#r     �����ÿСʱ30��-33�ֿ�ʼ#n\r\n\r\n#b��������������ҡ���������������һЩ�������#k");
		cm.dispose();
	}
}