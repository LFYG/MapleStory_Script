
var newopen = 0;//135����װ




//135����װ
var news = Array(
    Array(1003540,1082432,1052460,1072664,1032142,1122197,1132152,1112738,"��������װ",5000)
    );

var Select = -1;

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (a >= 2 && mode != 1){
        cm.dispose();
    }else{
        if (mode == -1) {
            cm.dispose();
        } else {
            if (mode == 1)
                a++;
            else
                a--;
            if (a == -1){
                cm.dispose();
            }else
            if (a == 0) {
                cm.sendSimple("#r - �Զ����ۻ� >> Ԫ���̵�#k \r\n#L1#135����װ#l")
            }else if (a == 1){
                if (selection == 1){
                    var selStr = "#b - �Զ����ۻ� >> Ԫ���̵� >> 135����װ#b#k";
                    for (var i = 0; i < news.length; i++) {
                        selStr += "\r\n#L"+ i +"##b #i"+news[i][0]+"#  #i"+news[i][1]+"# #i"+news[i][2]+"# #i"+news[i][3]+"# #i"+news[i][4]+"# #i"+news[i][5]+"# #i"+news[i][6]+"# #i"+news[i][7]+"##l\r\n\r\n #z"+news[i][0]+"# #z"+news[i][1]+"# #z"+news[i][2]+"# #z"+news[i][3]+"#\r\n#z"+news[i][4]+"# #z"+news[i][5]+"# #z"+news[i][6]+"# #z"+news[i][7]+"##l\r\n#r[������ֲ鿴����]#k\r\n\r\n#b��װ���֣�#r"+news[i][8]+"#b ��\r\n����۸�#r"+news[i][9]+"#b Ԫ����#k \r\n------------------------------------------------------ "
                    }
                    if (newopen == 0){
                        cm.sendSimple(selStr)
                    }else{
                        a = -1
                        cm.sendNext("�̳Ǻ��������ϼܡ�");
                    }
                }		
				
            }else if (a == 2){
                Select = selection;
                cm.sendYesNo("#r - �Զ����ۻ� >> Ԫ���̵� >> 135����װ >> ���ﳵ #k\r\n\r\n �������� - #b\r\n#i"+news[Select][0]+"#  #i"+news[Select][1]+"# #i"+news[Select][2]+"# #i"+news[Select][3]+"# #i"+news[Select][4]+"# #i"+news[Select][5]+"# #i"+news[Select][6]+"# #i"+news[Select][7]+"##l \r\n\r\n #z"+news[Select][0]+"# #z"+news[Select][1]+"# #z"+news[Select][2]+"# #z"+news[Select][3]+"#\r\n #z"+news[Select][4]+"# #z"+news[Select][5]+"# #z"+news[Select][6]+"##z"+news[Select][7]+"##l\r\n#r[������ֲ鿴����]#k \r\n#b ��װ���֣�#r"+news[Select][8]+"#b �� \r\n һ��Ҫ����Ԫ����#r"+news[Select][9]+"#b�� ��\r\n\r\n#r[ע��]�������ʱ��һ��Ҫ��#b������#k#r�ճ�#b6#k#r�����ӣ������ò���װ����ʧ�ַ���");
				
            }else if (a == 3){
				
                cm.sendGetText("���빺����ٸ���������1���ϵ�������\r\n#b������������1 2 3 4 5 6 7 8 9 10 11�Դ����ƣ�#r\r\n����С���㽫�ᷭ���۳�Ԫ��������Ը���");
				
            }else if (a == 4){
                var cost = cm.getText() * news[Select][9] ;
			   
                if (cm.getHyPay(1) < cost){
                    cm.sendOk("�Բ������Ԫ������ #r"+ cost +"#k �㡣")
                    cm.dispose();
                }else if(cm.getPlayer().getInventory(Packages.client.inventory.MapleInventoryType.getByType(1)).isFull(8)){
                    cm.sendOk("������Ӧ����װ�����ճ�8��.");
                    cm.dispose();
                }else if (cm.getText() != 1){
                    cm.sendOk("��������� 1 �����֡�")
                    cm.dispose();
                    var paye = cm.getText() ;
                }else{
                    cm.gainItem(news[Select][0], cm.getText());
                    cm.gainItem(news[Select][1], cm.getText());
                    cm.gainItem(news[Select][2], cm.getText());
                    cm.gainItem(news[Select][3], cm.getText());
                    cm.gainItem(news[Select][4], cm.getText());
                    cm.gainItem(news[Select][5], cm.getText());
                    cm.gainItem(news[Select][6], cm.getText());
                    cm.gainItem(news[Select][7], cm.getText());
                    cm.addHyPay(+cost);
                    cm.worldMessage("[�̳ǹ���]����ϲ��ҡ�"+ cm.getPlayer().getName() +"�������˳�ǿ��135����������װ��");
                    cm.sendOk("����ɹ��ˣ���һ��������"+ cost +" Ԫ�� ��")
                    cm.dispose(); 
                }						
            }
        }
    }
}