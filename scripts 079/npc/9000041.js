//Kippieeej for the base of the script, Mikethemak for editing it for this function.
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
                cm.sendSimple("#r"+cm.mxdmz()+"ð�յ�#k,����ϵͳ\r\n#L1##b15�� >>>> 1��ľ����Ʊ.#k#l#L2##bľ����Ʊ >>>> 14.5��#k#l\r\n#L3##b10�� >>>> 1��������Ʊ.#k#l#L4##b������Ʊ >>>> 9.5��#k#l\r\n#L5##b 5�� >>>> 1����ţ��Ʊ.#l#L6##b��ţ��Ʊ >>>> 4.5��#l");
        //cm.dispose();
            } else if (status == 1) {
            if (selection == 1) {
    if (cm.itemQuantity(4002002) >= 50) {
    cm.sendOk(" �㴢�����㹻�� #v4002002# ��, �㲻���ڴ�Ÿ���� #v4002002# ��");
    cm.dispose();
        }  else if (cm.getMeso() >= 1500000000) {
                    cm.gainMeso(-1500000000);                
                    cm.gainItem(4002002, 1); 
                    cm.dispose();
                } else {
                    cm.sendOk("�����û��15E�������ܹ�Ǯ�������һ���?");
                    cm.dispose();
                }                                
            } else if (selection == 2) {
        if (cm.getMeso() >= 647000000) {
        cm.sendOk("�뻨�������ϵ�Ǯ�ɣ�ǿ�жһ���ʹ���Ǯ��ɸ���Ŷ���Ǻ�");
                cm.dispose();
        } else if (cm.itemQuantity(4002002) >= 1) {
                    cm.gainMeso(1450000000);                
                    cm.gainItem(4002002, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("��û�� #v4002002#. ��Ҫ������������ƭ���κζ���!");
                    cm.dispose();
                }    
            } else if (selection == 3) {
    if (cm.itemQuantity(4002001) >= 50) {
    cm.sendOk(" �����㹻��� #v4002001# ��, ���Ŷһ�һ���� #v4002001# �������Ҷһ�����.");
    cm.dispose();
    } else if (cm.getMeso() >= 1000000000) {
                    cm.gainMeso(-1000000000);                
                    cm.gainItem(4002001, 1); 
                    cm.dispose();
                } else {
                    cm.sendOk("�����û��10E�������ܹ�Ǯ�������һ���?");
                    cm.dispose();
                  }
        } else if (selection == 4) {
        if (cm.getMeso() >= 1147000000) {
        cm.sendOk("�뻨�������ϵ�Ǯ�ɣ�ǿ�жһ���ʹ���Ǯ��ɸ���Ŷ���Ǻ�");
                cm.dispose();
                } else if (cm.itemQuantity(4002001) >= 1) {
                    cm.gainMeso(950000000);                
                    cm.gainItem(4002001, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("�������û�� #v4002001#. ����Ǯ����������,��ɲ�����ѷ���!");
                    cm.dispose();
              }    
            } else if (selection == 5) {
    if (cm.itemQuantity(4002000) >= 50) {
    cm.sendOk(" �����㹻��� #v4002000# ��, �ȶһ�һ���� #v4002000# �������������һ�ͭ�Ұ�����");
    cm.dispose();
    } else if (cm.getMeso() >= 500000000) {
                    cm.gainMeso(-500000000);                
                    cm.gainItem(4002000, 1); 
                    cm.dispose();
                } else {
                    cm.sendOk("�����û��5E�������ܹ�Ǯ�������һ���?");
                    cm.dispose();
            }
                } else if (selection == 6) {
        if (cm.getMeso() >= 1647000000) {
        cm.sendOk("�뻨�������ϵ�Ǯ�ɣ�ǿ�жһ���ʹ���Ǯ��ɸ���Ŷ���Ǻ�");
                cm.dispose();
                } else if (cm.itemQuantity(4002000) >= 1) {
                    cm.gainMeso(450000000);                
                    cm.gainItem(4002000, -1); 
                    cm.dispose();
                } else {
                    cm.sendOk("�������û�� #v4002000#. ����Ǯ�������Ҷһ���!.");
                    cm.dispose();
                    }    
                }
            }
        }
    }
