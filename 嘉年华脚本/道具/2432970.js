/*

 �ű����ܣ�����ѫ�� ˫�����Ի������������ѫ��
 
 */

function start() {
    im.gainItem(2432970, -1);
    im.getPlayer().gainHonorExp(Math.floor(Math.random() * 10000) + 1000);
    //im.worldMessage(0x180, "������������ : ��ϲ " + im.getChar().getName() + " ʹ�� <����ѫ��> �ɹ����������.");
    im.dispose();
}