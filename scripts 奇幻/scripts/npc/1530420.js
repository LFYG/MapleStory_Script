/*
 Ϧ��������Chinað�յ�
 ���ʱ�䣺2015��4��28�� 16:34:19
 �ű����ܣ����͵�ͼ
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconX = "#fEffect/CharacterEff/1112905/0/1#";
var iconStar = "#fEffect/CharacterEff/1112904/2/1#";
var icon2 = "#fEffect/CharacterEff/1082565/4/0#";
var icon3 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var List = Array(
		
		//У԰����
        
		Array(icon3+"#r ������#l", 1, 1 , 9010022),
		Array(icon3+"#r ������ͼ#l", 2, 1 , 9010022),
		Array(icon3+"#r �����г�#l", 8, 1 , 9010022),
		
		Array(icon3+"#b ������ͼ#l", 3, 1 , 9010022),
        Array(icon3+"#b ���ε�ͼ#l", 4, 1 , 9010022), 
		Array(icon3+"#b ��������#l", 9, 1 , 9900003),

		Array(icon3+"#b רҵ����#l",11, 1 , 9010022),
		Array(icon3+"#b ��������#l",0, 1 , 9201023),
        Array(icon3+"#b ��������#l",0, 1 , 2010011), 

        Array(icon2+"#r �賓�賓�賓�賓�賓�賓�賓�賓�賓�� "+icon2+"    ", 1, 1, 0),
		Array("  "+icon3+"#d ��ս����#l", 5, 2 , 9010022),
		Array("  "+icon3+"#d ��ɫ����#l", 6, 2 , 9010022),
		Array("  "+icon3+"#d Ұ��BOSS#l\r\n", 7, 2 , 9010022),
		Array("  "+icon3+"#d ���﹫԰#l", 0, 3 , 9071003),
		Array(""+icon3+"#d ��ʯר��#l\r\n",13, 3 , 9010022)



        //Array(icon2+"#b �������������������������������������������� "+icon2, 1, 4, 0),
        //Array(icon3+"#b�����ڴ�#l", 6, 4 , 9310144),
		//Array(icon3+"#b�����ڴ�#l", 7, 4 , 9310144)
		//Array(icon2+"   #r��Ϸ��ֵ#k   "+icon2, 1000, 4, 1),	
		//Array(icon2+"#d����BOSS#k"+icon2, 13, 4 , 9010022),
		//Array(icon2+"   #r��ֵ����   "+icon2, 8, 4, 9310144),	
		//Array(icon2+"#d�����ڴ�#k"+icon2, 13, 4 , 9010022),
		//Array(icon2+"   #r�������#k   "+icon2, 1000, 4, 1),
		//Array(icon2+"#d�����ڴ�"+icon2, 12, 4 , 9010022),
		//Array(icon2+"#d�����ڴ�#k"+icon2, 13, 4 , 9010022),
		//Array(icon2+icon2+icon2+icon2+icon2+icon2+icon2+icon2+icon2, 7, 4, 0),
		//Array(icon2+"#g�����ڴ�"+icon2, 1, 4, 9900004)
);

var text;
//�Ƿ������֣�ģʽ�����

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			var myRmb = getMyRmb();
			text = "";
            text += "\t#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# ����Ԫ����#r#e"+myRmb+"#n#k�� #fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0# �������ߣ�#r#e"+cm.getGamePoints()+"#n#k����";
			for (var i = 0; i < 5; i++) {
                ListFor(i);
            }
			text += "\r\n#e#g\t\t  "+icon2+" Chinað�յ�ף����Ϸ��� "+ icon2 +"#n#k\r\n";
            cm.sendSimple(text)
        } else if (a == 1) {
            var mode_ = List[selection][1];
            
			var npcid = 9900003;
			if (List[selection][3] != null)
				npcid = List[selection][3];
			if (npcid == 0) {
				a=-1;
				cm.sendSimple("��Ӵ����㵽�������ˡ�");
			} else if (npcid == 1) {
				cm.dispose();
				cm.openWeb("http://my1.libaopay.com/buy/?wid=62259");
			} else {
				cm.dispose();
            	cm.openNpc(npcid, mode_);
			}
		}//a
    }//mode
}//f


function ListFor(type) {
    switch (type) {
        case 1://��Ϸ��԰
            text += "\r\n"+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+iconX+"#k";
            break;
		case 2:
			text+=  "#n";
			break;
		case 3:
			text+=  "#n";
			break;
    }
    var x = 0;
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
			if (List[i][2]==1) 
				text+="  ";
			if (List[i][2]==2)
				y = 3;
			else 
				y = 2;
			if (x==1 && List[i][2]>2) {
				text+=" ";
			}
            if (x == y) {
                text += "#L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "#L" + i + "#" + List[i][0] + "#l";
                x++;
            }
			if (x==1 && List[i][2]>2) {
				text+=" ";
			}
        }
    }
	//text+="#e\r\n";
}

function getMyRmb() {
	var myRmb;
	var conn = cm.getConnection();
	var sql = "select rmb from accounts where id = ?;";
	var pstmt = conn.prepareStatement(sql);
	pstmt.setString(1, cm.getPlayer().getAccountID());
	var myRmbSql = pstmt.executeQuery();
	if (myRmbSql.next()) {
		myRmb = myRmbSql.getString("rmb");
	} else {
		myRmb = 0;
	}
	myRmbSql.close();
	pstmt.close();
	return myRmb;
}
