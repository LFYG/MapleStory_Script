
var newopen = 0;//130������




//130������
var news = Array(
    Array(1362056,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1302207,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1312110,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1322150,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1332184,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1402142,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1412099,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1422102,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1432131,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1452162,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1472174,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1482135,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1522064,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1532068,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1372130,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1382158,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1442170,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1462152,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1492135,2500,1,"�ƶ���굽���������ϲ鿴���ԣ�")
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
                cm.sendSimple("#r - �Զ����ۻ� >> Ԫ���̵�#k \r\n #L1#130������#l")
            }else if (a == 1){
                if (selection == 1){
                    var selStr = "#b - �Զ����ۻ� >> Ԫ���̵� >> 130������#b#k";
                    for (var i = 0; i < news.length; i++) {
                        selStr += "\r\n#L"+ i +"##b #i"+news[i][0]+"#  #z"+news[i][0]+"##l\r\n\r\n#r\r\n��Ʒ������#d"+news[i][2]+"#r ����\r\n��Ʒ�۸�#d"+news[i][1]+" #rԪ����\r\n#r��Ʒ���ܣ�#d"+news[i][3]+"#k "
                    }
                    if (newopen == 0){
                        cm.sendSimple(selStr)
                    }else{
                        a = -1
                        cm.sendNext("��Ʒ���������ϼܡ�");
                    }
                }		
				
            }else if (a == 2){
                Select = selection;
                cm.sendYesNo("#r - �Զ����ۻ� >> Ԫ���̵� >> 130������ >> ���ﳵ #k\r\n\r\n �������� ------------------- #b\r\n\r\n#b #i"+news[Select][0]+"#  #z"+news[Select][0]+"##l\r\n#r��Ʒ������#d"+news[Select][2]+"#r ����\r\n��Ʒ�۸�#d"+news[Select][1]+" #rԪ����\r\n#r��Ʒ���ܣ�#d"+news[Select][3]+"#k ");
				
            }else if (a == 3){
				
                cm.sendGetText("���빺����ٸ���������1���ϵ�������\r\n#b������������1 2 3 4 5 6 7 8 9 10 11�Դ����ƣ�#r\r\n����С���㽫�ᷭ���۳�Ԫ��������Ը���");
				
            }else if (a == 4){
                cost = cm.getText() * news[Select][1] ;
                if (cm.getText() != 1){
                    cm.sendOk("ֻ���������1 �����֡�")
                    cm.dispose();
                }else if (cm.getHyPay(1) < cost){
                    cm.sendOk("�Բ������Ԫ������ #r"+ cost +"#k �㡣")
                    cm.dispose();
                }else if (!cm.canHold(news[Select][0])){
                    cm.sendOk("�Բ�����ı����ռ䲻�㡣")	
                    cm.dispose();
                }else{
                    cm.gainItem(news[Select][0], cm.getText() * news[Select][2]) 
                    cm.addHyPay(+cost);
                    cm.worldMessage("[�̳ǹ���]����ϲ��ҡ�"+ cm.getPlayer().getName() +"�������˳�ǿ��130��������");
                    cm.sendOk("����ɹ��ˣ���һ��������"+ cost +" Ԫ�� ��")
                    cm.dispose();
                }						
            }
        }
    }
}