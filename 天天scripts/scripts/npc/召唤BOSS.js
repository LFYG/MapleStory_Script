/**
 *�ҷ�ʱ�г��� Ϊ�ͻ�weinan9988����
 **/

function start() {

    if(cm.countMonster()< 50) {
        cm.sendSimple ("#b�װ���#r#h ##k#b���ã��ҿ���Ϊ���ٻ�BOSS ��ѡ��:\r\n#L0#����#l\r\n#L1#��������#l\r\n#L2#��������#l\r\n#L3#���װ�������#l\r\n#L4#������#l\r\n#L5#�İ�ʨ��#l\r\n#L6#Ʒ����#l\r\n#L7#Ŭ��˹#l\r\n#L8#ŷ����#l\r\n#L9#�ࡤ�װ�#l\r\n#L10#ϣ��˹#l\r\n#L11#��ħ#l\r\n#L12#��������#l\r\n#L13#�׿�#l\r\n#L14#����������#l\r\n#L15#��֮ħŮ#l\r\n#L16#Ѫ�潫��#l\r\n#L17#����#l\r\n#L18#��Ӱɱ��#l\r\n#L19#������Ī��#l\r\n#L20#����ʹ��#l\r\n#L21#����#l\r\n#L22#�����ƯƯ����#l\r\n#L23#�뿪��ͼ��ȥ#l\r\n\r\n        �����ˣ��ҷ�ʱ�г��� ");
    } else {
        cm.sendOk("һ�β��ܳ��ֶ���50��BOSS")
    }
}
function action(mode, type, selection) {
    cm.dispose();
    if (selection == 0) {//����
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
       }else{	
        cm.gainItem(3991054,-1);
        //����ID, X���꣬Y����
	cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8800000, -410, -400);   
        cm.dispose();
        }
} else if (selection == 1) {//��������
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8800100, -410, -400);   
        cm.dispose();
        }
} else if (selection == 2) {//����
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8810026, -410, -400);   
        cm.dispose();
        }
//} else if (selection == 3) {//���׺���
       // cm.sendOk("�ݲ�����")
       // cm.dispose();
       // }
} else if (selection == 4) {//������
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9420541, -410, -400);
        cm.dispose();
        }
} else if (selection == 5) {//�İ�ʨ��
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9420546, -410, -400);   
        cm.dispose();
        }
//} else if (selection == 6) {//Ʒ����
      //  cm.sendOk("���޿���")
      //  cm.dispose();
      //  }
} else if (selection == 7) {//Ŭ��˹
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400266, -410, -400);   
        cm.dispose();
        }
} else if (selection == 8) {//ŷ����
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400289, -410, -400);   
        cm.dispose();
        }
} else if (selection == 9) {//�ࡤ�װ�
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9500408, -410, -400);   
        cm.dispose();
        }
} else if (selection == 10) {//ϣ��˹
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8850011, -410, -400);   
        cm.dispose();
        }
} else if (selection == 11) {//��ħ����
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(2500701, -410, -400);   
        cm.dispose();
        }
} else if (selection == 12) {//��������
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400419, -410, -400);   
        cm.dispose();
        }
} else if (selection == 13) {//�׿�
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9800113, -410, -400);   
        cm.dispose();
        }
} else if (selection == 14) {//����������
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400296, -410, -400);   
        cm.dispose();
        }
} else if (selection == 15) {//��֮ħŮ
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400438, -410, -400);   
        cm.dispose();
        }
} else if (selection == 16) {//Ѫ�潫��
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400439, -410, -400);   
        cm.dispose();
        }
} else if (selection == 17) {//����
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8850010, -410, -400);   
        cm.dispose();
        }
} else if (selection == 18) {//��Ӱɱ��
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400441, -410, -400);   
        cm.dispose();
        }
} else if (selection == 19) {//������Ī��
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9400263, -410, -400);   
        cm.dispose();
        }
//} else if (selection == 20) {//����ʹ��
       // cm.sendOk("���޿���")
       // cm.dispose();
      //  }
} else if (selection == 21) {//����
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(9305335, -410, -400);   
        cm.dispose();
        }
} else if (selection == 22) {//�����ƯƯ����
    if (cm.getPlayer().getMeso() < 1){  
        cm.sendOk("���ð�ձҲ�������1")
        cm.dispose();
}else{	
        cm.gainItem(3991054,-1);
        cm.changeMusic("Bgm10/Eregos");
        cm.spawnMob(8600003, -410, -400);   
        cm.dispose();
        }
} else if (selection == 23) {//�뿪��ͼ
            cm.warp(910000000, 0);
            cm.dispose();
			
        }
    }