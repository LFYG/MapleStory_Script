
var newopen = 0;//140������




//140������
var news = Array(
	
    Array(1482084,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1402095,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1422066,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1412065,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1452111,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1342036,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1362019,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1332130,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1492085,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1522018,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1532018,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1472122,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1382104,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1312065,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1462099,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1322096,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1372084,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1302152,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1442116,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�"),
    Array(1432086,3000,1,"�ƶ���굽���������ϲ鿴���ԣ�")
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
                cm.sendSimple("#r - �Զ����ۻ� >> Ԫ���̵�#k \r\n #L1#140������#l")
            }else if (a == 1){
                if (selection == 1){
                    var selStr = "#b - �Զ����ۻ� >> Ԫ���̵� >> 140������#b#k";
                    for (var i = 0; i < news.length; i++) {
                        selStr += "\r\n#L"+ i +"##b #i"+news[i][0]+"#  #z"+news[i][0]+"##l\r\n\r\n#r\r\n��Ʒ������#d"+news[i][2]+"#r ����\r\n��Ʒ�۸�#d"+news[i][1]+" #rԪ����\r\n#r��Ʒ���ܣ�#d"+news[i][3]+"#k "
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
                cm.sendYesNo("#r - �Զ����ۻ� >> Ԫ���̵� >> 140������ >> ���ﳵ #k\r\n\r\n �������� ------------------- #b\r\n\r\n#b #i"+news[Select][0]+"#  #z"+news[Select][0]+"##l\r\n#r��Ʒ������#d"+news[Select][2]+"#r ����\r\n��Ʒ�۸�#d"+news[Select][1]+" #rԪ����\r\n#r��Ʒ���ܣ�#d"+news[Select][3]+"#k ");
				
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
                    cm.worldMessage("[�̳ǹ���]����ϲ��ҡ�"+ cm.getPlayer().getName() +"�������˳�ǿ��140��������");
                    cm.sendOk("����ɹ��ˣ���һ��������"+ cost +" Ԫ�� ��")
                    cm.dispose();
                }						
            }
        }
    }
}