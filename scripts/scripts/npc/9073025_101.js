var status = -1;
var random = java.lang.Math.floor(Math.random() * 10);
function action(mode, type, selection) {
	   if(random >= 0 && random <= 8){
           cm.worldSpouseMessage(0x14,"[С�������] ��� "+ cm.getChar().getName() +" ��С���ͻȻ - ����~~ʩչ��������� �������������x1��");
	   cm.gainItem(2430070,1);
           cm.resetBossLog("�����ܼƳɳ�ֵ");
	   cm.dispose();
	   } else {
           cm.worldSpouseMessage(0x14,"[С�������] ��� "+ cm.getChar().getName() +" ��С���ͻȻ - ����~~ʩչ��������� �������������x2��");
	   cm.gainItem(2430070,2);
           cm.resetBossLog("�����ܼƳɳ�ֵ");
	   cm.dispose();
	   }
}