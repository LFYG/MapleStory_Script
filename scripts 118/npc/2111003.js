/* Author: aaroncsn(MapleSea Like)(Incomplete)
	NPC Name: 		Humanoid A
	Map(s): 		Sunset Road: Magatia(2610000000)
	Description: 		Unknown
*/

function start() {
    if (cm.isQuestActive(3335)) {
        cm.sendNext("Quest complete.");
        cm.forceCompleteQuest(3335);
    } else {
        cm.sendNext("�������ࡣ����ӵ����ů���������...  �����Ļ���Ҳ�������ס�����֡������ڲ���...");
    }
    cm.dispose();
}