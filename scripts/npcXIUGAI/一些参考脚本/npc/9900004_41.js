
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
		var v = getVIP(cm);
		if(cm.getBossLog("ÿ��ǩ��")>0){
			cm.sendOk("�������Ѿ�ǩ������,һ��ֻ��ǩ��һ��");
			cm.dispose();
			return;
		}
		var cz = 0;
		if(cm.itemQuantity(1012098)>0){
			cz = 1;
		} else {
            		for (var i = -1; i >= -199; i--) {
                		if (cm.getInventory(-1).getItem(i) != null) {//�����û�ʹ���е�װ��
					if (cm.getInventory(-1).getItem(i).getItemId() == 1012098){
						cz = 1;
						break;
					}
				}
			}
		}
		if (cz == 0) {
			//��һ��ǩ������ã�
			//���Σ���Ҷ��ȫ����3000��
			//��װ����ԡ��ȫ����3000��
			//��װ����ԡ��ȫ����3000��
			//��������ѩ�壨ȫ����3000��
			//���ģ�1Сʱ�ھ���ֵ2��
			//������VIP1֤����
			//���ã�������
			if (cm.getSpace(1)<4||cm.getSpace(2)<1||cm.getSpace(4)<1||cm.getSpace(3)<1){
				cm.sendOk("����װ������4���ո�,���ġ���������������1���ո�");
			} else {
				cm.setBossLog("ÿ��ǩ��");
				cm.gainItem(1012098,1);//��Ҷ������Ʒ
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1012098){
				cm.setLock(cm.getInventory(1).getItem(i));//����
				cm.getInventory(1).getItem(i).str = 3000;
				cm.getInventory(1).getItem(i).dex = 3000;
				cm.getInventory(1).getItem(i).setInt(3000);
				cm.getInventory(1).getItem(i).luk = 3000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				break;
			}
		}
            }
				cm.gainItem(1050100,1);//��ԡ��
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1050100){
				cm.setLock(cm.getInventory(1).getItem(i));//����
				cm.getInventory(1).getItem(i).str = 3000;
				cm.getInventory(1).getItem(i).dex = 3000;
				cm.getInventory(1).getItem(i).setInt(3000);
				cm.getInventory(1).getItem(i).luk = 3000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				break;
			}
		}
            }
				cm.gainItem(1051098,1);//��ԡ��
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1051098){
				cm.setLock(cm.getInventory(1).getItem(i));//����
				cm.getInventory(1).getItem(i).str = 3000;
				cm.getInventory(1).getItem(i).dex = 3000;
				cm.getInventory(1).getItem(i).setInt(3000);
				cm.getInventory(1).getItem(i).luk = 3000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				break;
			}
		}
            }
				cm.gainItem(1442012,1);//���ѩ��
            for (var i = 1; i <= 99; i++) {
                if (cm.getInventory(1).getItem(i) != null) {
			if (cm.getInventory(1).getItem(i).getItemId()==1442012){
				cm.setLock(cm.getInventory(1).getItem(i));//����
				cm.getInventory(1).getItem(i).str = 3000;
				cm.getInventory(1).getItem(i).dex = 3000;
				cm.getInventory(1).getItem(i).setInt(3000);
				cm.getInventory(1).getItem(i).luk = 3000;
				cm.getInventory(1).getItem(i).hp = 5000;
				cm.getInventory(1).getItem(i).mp = 3000;
				cm.getInventory(1).getItem(i).watk = 99;
				cm.getInventory(1).getItem(i).matk = 99;
				break;
			}
		}
            }
				cm.gainItem(2450022,1);//1Сʱ����ֵ2��
				if (v == 0) cm.gainItem(4031332,1);//VIP1֤����
				cm.gainItem(3010061,1);//������(����)
				cm.fakeRelog();//ˢ������
				cm.sendOk("�������ĵ�һ��ǩ��\r\n#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v1012098##z1012098#(ȫ����3000)#r1#k��" + "\r\n#v1050100##z1050100#(ȫ����3000)#r1#k��" + "\r\n#v1051098##z1051098#(ȫ����3000)#r1#k��" + "\r\n#v1442012##z1442012#(ȫ����3000��������99��ħ����99)#r1#k��" + "\r\n#v2450022##z2450022##r1#k��" + "\r\n#v4031332##z4031332##r1#k��" + "\r\n#v3010061##z3010061##r1#k��");

			}
		} else {
			switch (v) {
			case 0:
			case 1://��������+ʥ��
				//if (cm.getSpace(1)<4||cm.getSpace(2)<1||cm.getSpace(4)<1||cm.getSpace(3)<1){
				if (cm.getSpace(4)<2){
					cm.sendOk("������������2���ո�");
					cm.dispose();
					return;
				}
				cm.setBossLog("ÿ��ǩ��");
				cm.gainItem(4000463,1);//��������
				cm.gainItem(4031454,1);//ʥ��
				cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v4000463##z4000463##r1#k��" + "\r\n#v4031454##z4031454##r1#k��");
				break;
			case 2:
			case 3://��������+ʥ��+��Ҷ*20+1Сʱ1.5����������+1000���þ�
				if (cm.getSpace(2)<1||cm.getSpace(4)<3){
					cm.sendOk("������������1���ո���������3���ո�");
					cm.dispose();
					return;
				}
				cm.setBossLog("ÿ��ǩ��");
				cm.gainItem(4000463,1);//��������
				cm.gainItem(4031454,1);//ʥ��
				cm.gainItem(4001126,20);//��Ҷ*20
				cm.gainItem(02450021,1);//1Сʱ1.5����������
				cm.gainNX(2,1000);//1000���þ�
				cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v4000463##z4000463##r1#k��" + "\r\n#v4031454##z4031454##r1#k��" + "\r\n#v4001126##z4001126##r20#k��" + "\r\n#v2450022##z2450021##r1#k��" + "\r\n���þ�#r1000#k��");
				break;
			case 4:
			case 5://��������2+ʥ��2+��Ҷ*50+1Сʱ2����������+2000���þ�+20Ԫ��
				if (cm.getSpace(2)<1||cm.getSpace(4)<3){
					cm.sendOk("������������1���ո���������3���ո�");
					cm.dispose();
					return;
				}
				cm.setBossLog("ÿ��ǩ��");
				cm.gainItem(4000463,2);//��������*2
				cm.gainItem(4031454,2);//ʥ��*2
				cm.gainItem(4001126,50);//��Ҷ*50
				cm.gainItem(2450022,1);//1Сʱ2����������
				cm.gainNX(2,2000);//2000���þ�
				cm.addHyPay(-20);//20Ԫ��
				cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v4000463##z4000463##r2#k��" + "\r\n#v4031454##z4031454##r2#k��" + "\r\n#v4001126##z4001126##r50#k��" + "\r\n#v2450022##z2450022##r1#k��" + "\r\n���þ�#r2000#k��" + "\r\nԪ��#r20#k��");
				break;
			case 6://��������3+ʥ��3+��Ҷ*100+1Сʱ3����������+5000���þ�+50Ԫ��
				if (cm.getSpace(2)<1||cm.getSpace(4)<3){
					cm.sendOk("������������1���ո���������3���ո�");
					cm.dispose();
					return;
				}
				cm.setBossLog("ÿ��ǩ��");
				cm.gainItem(4000463,3);//��������*3
				cm.gainItem(4031454,3);//ʥ��*3
				cm.gainItem(4001126,100);//��Ҷ*100
				cm.gainItem(2450023,1);//1Сʱ3����������
				cm.gainNX(2,5000);//5000���þ�
				cm.addHyPay(-50);//50Ԫ��
				cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v4000463##z4000463##r3#k��" + "\r\n#v4031454##z4031454##r3#k��" + "\r\n#v4001126##z4001126##r100#k��" + "\r\n#v2450023##z2450023##r1#k��" + "\r\n���þ�#r5000#k��" + "\r\nԪ��#r50#k��");
				break;
			case 7://��������5+ʥ��5+��Ҷ*200+1Сʱ3����������*2+8000���þ�+80Ԫ��
				if (cm.getSpace(2)<2||cm.getSpace(4)<3){
					cm.sendOk("������������2���ո���������3���ո�");
					cm.dispose();
					return;
				}
				cm.setBossLog("ÿ��ǩ��");
				cm.gainItem(4000463,5);//��������*5
				cm.gainItem(4031454,5);//ʥ��*5
				cm.gainItem(4001126,200);//��Ҷ*200
				cm.gainItem(2450023,2);//1Сʱ3����������*2
				cm.gainNX(2,8000);//8000���þ�
				cm.addHyPay(-80);//80Ԫ��
				cm.sendOk("#fUI/UIWindow2.img/QuestIcon/4/0#" + "\r\n#v4000463##z4000463##r5#k��" + "\r\n#v4031454##z4031454##r5#k��" + "\r\n#v4001126##z4001126##r200#k��" + "\r\n#v2450023##z2450023##r2#k��" + "\r\n���þ�#r8000#k��" + "\r\nԪ��#r80#k��");
				break;
			}
		}
		cm.dispose();
    }
}

//���VIP�ȼ�
function getVIP(cm){
	var v_p = 4031331;
	for (var i = 7;i >= 1;i--){
		if (cm.itemQuantity(v_p + i)!=0) return i;
	}
	return 0;
}
