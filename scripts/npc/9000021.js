
function start() {
    cm.sendSimple ("#kһ��#b#v4031579##k���Ի�ȡ��ϵ������װŶ!\r\n#r�뱣֤������8�����ϵĿռ䣬�һ�ʧ�ܺ���Ը�.\r\n#b#L2##fEffect/CharacterEff/1112905/0/1#սʿ������[����������ֻ�з���]\r\n#b#L3##fEffect/CharacterEff/1112905/0/1#��ʦ������[����������ֻ�з���]#k\r\n#b#L4##fEffect/CharacterEff/1112905/0/1#����������[����������ֻ�з���]#k\r\n#b#L5##fEffect/CharacterEff/1112905/0/1#����������[����������ֻ�з���]#k\r\n#b#L6##fEffect/CharacterEff/1112905/0/1#����������[����������ֻ�з���]#k")
    }

function action(mode, type, selection) {
        cm.dispose();

    switch(selection){
        case 0: 
            if (cm.getPlayer().getNX() >= 10000 ) {
            cm.sendOk("#dлл! 10�ڽ������ӵ������ʻ�! ���ܰ�! #r�Ͽ�ȥ�ӻ���Ұ�!#k");
            cm.gainNX(-10000);
            cm.gainMeso(500000000);
            cm.modifyMeso(500000000, 0);//��ʾ�õ�
            cm.dispose();
            }else{
            cm.sendOk("��ȷ������10000����ʱ�������һ����!");
            cm.dispose();
            }
        break;
        case 1: 
            if(cm.getMeso() >= 200000000) {
            cm.sendOk("лл! 2000 �������ӵ������ʻ�! ���ܰ�! #r�Ͽ��������������ʵġ���װ����!#k");
            cm.gainMeso(-200000000);
            cm.getNX(2000);
            cm.getNX(2000, 0);//��ʾ�õ�
            cm.dispose();        
            }
            else{    
                cm.sendOk("��ȷ������2�ڵ�ʱ�������һ�Ԫ��!");
                cm.dispose();
            };
        break;
        case 2:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("#d����1��#v4031579#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���һ��սʿ������װ!")
            cm.gainItem(4031579, -1);
            cm.gainItem(1072355, 1);
            cm.gainItem(1052155, 1);
            cm.gainItem(1082234, 1);
            cm.gainItem(1002776, 1);
            cm.gainItem(1112312, 1);
            cm.gainItem(1102172, 1);
            cm.gainItem(1032031, 1);
            cm.gainItem(1122012, 1);
			cm.modifyItem(1072355, 1);
			cm.modifyItem(1052155, 1);
			cm.modifyItem(1082234, 1);
			cm.modifyItem(1002776, 1);
			cm.modifyItem(1112312, 1);
			cm.modifyItem(1102172, 1);
			cm.modifyItem(1032031, 1);
			cm.modifyItem(1122012, 1);
			cm.modifyItem(1092058, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e��û�� #b1��#k #v4031579#")
                cm.dispose();    
            };    
        break;
        case 3:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("����1��#v4031579#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���һ�׷�ʦ������װ!")
               cm.gainItem(4031579, -1);
               cm.gainItem(1072356, 1);
               cm.gainItem(1052156, 1);
               cm.gainItem(1082235, 1);
               cm.gainItem(1002777, 1);
               cm.gainItem(1112312, 1);
               cm.gainItem(1102172, 1);
               cm.gainItem(1032031, 1);
               cm.gainItem(1122012, 1);
                   cm.modifyItem(1072356, 1);
                   cm.modifyItem(1052156, 1);
                   cm.modifyItem(1082235, 1);
                   cm.modifyItem(1002777, 1);
                   cm.modifyItem(1112312, 1);
                   cm.modifyItem(1102172, 1);
                   cm.modifyItem(1032031, 1);
                   cm.modifyItem(1122012, 1);
                   cm.modifyItem(1092057, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e��û�� #b1��#k #v4031579#")
                cm.dispose();    
            };
        break;
        case 4:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("����1��#v4031579#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���һ�׹���������װ!")
            cm.gainItem(4031579, -1);
            cm.gainItem(1072357, 1);
            cm.gainItem(1052157, 1);
            cm.gainItem(1082236, 1);
            cm.gainItem(1002778, 1);
            cm.gainItem(1112312, 1);
            cm.gainItem(1102172, 1);
            cm.gainItem(1032031, 1);
            cm.gainItem(1122012, 1);
			cm.modifyItem(1072355, 1);
			cm.modifyItem(1052157, 1);
			cm.modifyItem(1082234, 1);
			cm.modifyItem(1002776, 1);
			cm.modifyItem(1112312, 1);
			cm.modifyItem(1102172, 1);
			cm.modifyItem(1032031, 1);
			cm.modifyItem(1122012, 1);
			cm.modifyItem(1092058, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e��û�� #b1��#k #v4031579#")
                cm.dispose();    
            };    
        break;
        case 5:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("����1��#v4031579#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���һ�׷���������װ!")
            cm.gainItem(4031579, -1);
            cm.gainItem(1072358, 1);
            cm.gainItem(1052158, 1);
            cm.gainItem(1082237, 1);
            cm.gainItem(1002779, 1);;
            cm.gainItem(1112312, 1);
            cm.gainItem(1102172, 1);
            cm.gainItem(1032031, 1);
            cm.gainItem(1122012, 1);
			cm.modifyItem(1472068, 1);
			cm.modifyItem(1332073, 1);
			cm.modifyItem(1332074, 1);
			cm.modifyItem(1072358, 1);
			cm.modifyItem(1052158, 1);
			cm.modifyItem(1082237, 1);
			cm.modifyItem(1002779, 1);
			cm.modifyItem(1112312, 1);
			cm.modifyItem(1102172, 1);
			cm.modifyItem(1032031, 1);
			cm.modifyItem(1122012, 1);
			cm.modifyItem(1092059, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e��û�� #b1��#k #v4031579#")
                cm.dispose();    
            };
        break;
        case 6:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("����1��#v4031579#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���һ�׺���������װ!")
            cm.gainItem(4031579, -1);
            cm.gainItem(1072359, 1);
            cm.gainItem(1052159, 1);
            cm.gainItem(1082238, 1);
            cm.gainItem(1002780, 1);
            cm.gainItem(1112312, 1);
            cm.gainItem(1102172, 1);
            cm.gainItem(1032031, 1);
            cm.gainItem(1122012, 1);
			cm.modifyItem(1482023, 1);
			cm.modifyItem(1492023, 1);
			cm.modifyItem(1072359, 1);
			cm.modifyItem(1052159, 1);
			cm.modifyItem(1082238, 1);
			cm.modifyItem(1002780, 1);
			cm.modifyItem(1112312, 1);
			cm.modifyItem(1102172, 1);
			cm.modifyItem(1032031, 1);
			cm.modifyItem(1122012, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e��û�� #b1��#k #v4031579#")
                cm.dispose();    
            };
        break;
        case 7:
            if(cm.haveItem(4031579, 1)) {
            cm.sendOk("����1��#v4031579#�ѱ��ջ�!Ϊ�˻ر��㣬�Ҹ���һ��սʿ������װ!")
            cm.gainItem(4031579, -1);
            cm.gainItem(1072355, 1);
            cm.gainItem(1052155, 1);
            cm.gainItem(1082234, 1);
            cm.gainItem(1002776, 1);
            cm.gainItem(1112312, 1);
            cm.gainItem(1102172, 1);
            cm.gainItem(1032031, 1);
            cm.gainItem(1122012, 1);
            cm.gainItem(1092058, 1);
			cm.modifyItem(1402046, 1);
			cm.modifyItem(1432047, 1);
			cm.modifyItem(1442063, 1);
			cm.modifyItem(1302081, 1);
			cm.modifyItem(1072355, 1);
			cm.modifyItem(1052155, 1);
			cm.modifyItem(1082234, 1);
			cm.modifyItem(1002776, 1);
			cm.modifyItem(1112312, 1);
			cm.modifyItem(1102172, 1);
			cm.modifyItem(1032031, 1);
			cm.modifyItem(1122012, 1);
			cm.modifyItem(1092058, 1);
            cm.dispose();
            } else {
                cm.sendOk("#e��û�� #b1��#k #v4031579#")
                cm.dispose();    
            };  
        }
    }
