/*
 *�һ�
 */

var status = 0; 

function start() { 
    status = -1; 
    action(1, 0, 0); 
} 

function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else if (mode == 0) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 
	    abb = 1;
	    cm.sendGetText("����,��ӭʹ�õ�����è��ҡ������� #e#r1��10#n#k ��è��ҡ�Ŀǰ���#r"+cm.getPlayer().getCSPoints(1)+" #k��\r\n#rע����������Ҫ���������.");
        } else if (status == 1) { 
	if(cm.getText() < 100000){
	    cm.playerMessage(1,"������������ֲ���С��100000��");
	    cm.dispose();
	} else {
	    cm.sendYesNo("����,��ӭʹ�õ�����è���.\r\n���� #r" + cm.getText() + "#k ��è��ҽ���ʹ�õ��� #r" + cm.getText() / 10 + " #k���\r\n��ȷ�Ϻ�ʹ�á�"); 
	    } 
        } else if (status == 2) { 
		var getmaxhp = cm.getChar().getStat().getMaxHp();
	if (cm.getPlayer().getCSPoints(1) >= cm.getText() / 10) { 
		   cm.gainNX(-cm.getText() / 10);
		   cm.gainPlayerPoints(cm.getText());
           cm.worldSpouseMessage(0x20,"����è��ҡ� ����ϲ��� "+ cm.getChar().getName() +" ʹ�� "+ cm.getText() / 10 +" ������� "+ cm.getText() +" ��è���");
           cm.sendOk("�ɹ������� "+cm.getText()+" ��è��ҡ�");
           cm.dispose();
        } else {
           cm.sendOk("��û���㹻�ĵ��,���ȡ��ʹ��.");
           cm.dispose();
	 }
      } 
   }
}