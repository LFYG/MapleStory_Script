/*
 �ۺ�NPC
 */
var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var ttt4 ="#fUI/UIWindow/Quest/icon5/1#";//"+ttt4+"//����New
var icon2 = "#fEffect/CharacterEff/1082565/2/0#";
var List = Array(
		//������Ŀ
		Array(iconEvent + " #r�������#k", 17,  1, 9310144),
		//Array(iconEvent + " #r��Ϸ��ֵ#k", 1000,1,1),
		Array(iconEvent + " #r��ֵ����#k", 8,   1, 9310144),
		Array(iconEvent + " #rԪ���һ�", 101, 1, 9310144),
		Array(iconEvent + " #r����н�#k", 11, 1, 9900004),
		//Array(iconEvent + " #r���ڱҵ�#k", 1, 1, 9310144),
		Array(iconEvent + " #r��������#k", 111, 1),
        //Array(iconEvent + " #b����̵�", 15, 2),
		Array(iconEvent + " #r�ҵĻ�԰#k", 0, 1, 9330065),
		Array(iconEvent + " #r�������#k", 333, 1, 9310144),
		Array(iconEvent + " #r���︴��#k", 0, 1, 1032102),
		//Array(iconEvent + " #b��Ϸ�̵�", 1, 2),
        //Array(iconEvent + " #b��Ϸ����", 10, 2), //TODO
		Array(iconEvent + " #b�����̳�", 16, 2), 
		Array(iconEvent + " #b��������", 3, 2, 9900004), 
		Array(iconEvent + " #b���ʲ�ѯ#k", 5, 3),
		Array(iconEvent + " #b��Ʒ��ѯ", 100, 3, 9310144),
		Array(iconEvent + " #b���д��", 14, 3),
		Array(iconEvent + " #bװ������", 24, 3),
		Array(iconEvent + " #bװ����ԭ", 1111, 3, 9000069),
		Array(iconEvent + " #bװ���ع�#k", 503, 3),
        Array(iconEvent + " #d������¥#k", 0, 3, 9201116),
	    Array(iconEvent + " #d��������#k", 0, 3, 9070000),	
	    Array(iconEvent + " #d�߼�ת��#k", 0, 3, 9310472),
		Array(iconEvent + " #dÿ�ܼ���#k", 0, 3, 1092090),
	    Array(iconEvent + " #d��Ϸ����#k", 200, 3, 9900004),
		Array(iconEvent + " #d���ϴѪ#k", 333, 3, 9900004),
	    Array(iconEvent + " #d�������#k", 0, 3, 9073025),
	    //Array(iconEvent + " #d������װ#k", 6, 3, 9900002),
		Array(iconEvent + " #d������#k", 0, 3, 2040030),
		Array(iconEvent + " #d���ٲֿ�#k", 0, 3, 9030100),
		Array(iconEvent + " #d��ĸ����#k", 0, 3, 2084001),
		Array(iconEvent + " #d���͵¹�#k", 0, 3, 9220059),
		Array(iconEvent + " #dƽ���̵�#k", 0, 3, 1011101),
		Array(iconEvent + " #d����̵�#k", 0, 3, 3000021),
	    Array(iconEvent + " #d��������#k", 501, 3, 9900003),
		Array(iconEvent + " #d��Ծ�һ�#k", 23, 3, 9900003),
		//Array(iconEvent + " #d��Ҫ��ǿ#k", 1, 3, 9900004),
	    Array(iconEvent + " #d����ǩ��#k", 502, 3, 9900003),
		Array(iconEvent + " #dȺ�輼��#k", 22, 3, 9900003),
		Array(iconEvent + " #d�Զ�תְ#k", 4, 3, 9900003),
		Array(iconEvent + " #dÿ�����#k", 6, 3, 9310144),
		Array(iconEvent + " #dÿ������#k", 12, 3, 9900003),
		//Array(iconEvent + " #d���﹫԰#k", 0, 3, 9071003),
		Array(iconEvent + " #dװ�����#k", 0, 3, 9310070),
		Array(iconEvent + " #d20������#k", 0, 3, 9390013),
		Array(iconEvent + " #d�������#k", 500, 3, 9900003),
		Array(iconEvent + " #d�����ռ�#k", 8, 3, 9000178),
		Array(iconEvent + " #d���ո���#k", 0, 3, 9209101)
		
		//Array(icon2+"#bʱװ����"+icon2, 0, 2, 9000069),
		//Array(icon2+"#d����ϴ��"+icon2, 1, 2, 9000174),
		 //Array(icon2+"#b�����ƹ�"+icon2, 1000, 2),
		//Array(icon2+"#b����Ǳ��"+icon2, 1001, 2)
		//Array(iconEvent + " #rů��Ů��#k", 777, 1, 9310144)
)
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
            text = "";
            for (var i = 0; i < 5; i++) {
                ListFor(i);
            }
			
            cm.sendSimple(text)
        } else if (a == 1) {
            var mode_ = List[selection][1];
            cm.dispose();
			var npcid = 9900003;
			if (List[selection][3] != null)
				npcid = List[selection][3];
            cm.openNpc(npcid, mode_);
        }//a
    }//mode
}//f


function ListFor(type) {
    switch (type) {
        case 1://�������
            text += "#e#d\t\t\t  "+icon2+" ����NPC�������� "+ icon2 +"#n#k\r\n";
            break;
		default: 
			text+="\r\n";
    }
    var x = 0;
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 2) {
				if (List[i+1]!=null && List[i+1][2]!=type)
               		text += "  #L" + i + "#" + List[i][0] + "#l";
				else
					text += "  #L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "  #L" + i + "#" + List[i][0] + "#l";
                x++;
            }
        }
    }
}
