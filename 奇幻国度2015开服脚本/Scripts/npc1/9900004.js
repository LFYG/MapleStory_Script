/*
 �ű����ܣ������ű�V2��
 */

var a = 0;
var icon = "#fUI/Basic.img/BtMin2/normal/0#";
var iconEvent = "#fUI/UIToolTip.img/Item/Equip/Star/Star#";
var List = Array(
        //1 �������  2 ��Ϸ��԰
        Array(icon + " ��Ϸ�̵�", 1, 1),
		//Array(icon + " ��Ʒװ��", 1008, 1),
        Array(icon + " ���ܴ���", 2, 1),
        Array(icon + " �����̳�", 16, 1), //TODO
        Array(icon + " ְҵתְ", 4, 1),
		Array(icon + " ѩ���һ�", 101, 1, 9310144),
        //Array("���ʲ�ѯ", 5, 1),
        //Array("�ֿ����", 14, 1),
        //Array("��������", 8, 1),
        //Array(icon + " ��ֵ����", 13, 1), //TODO
        Array(icon + " ��ս����", 13, 1),
        Array(icon + " #b�������#k", 6, 1),
        Array(iconEvent + " #rÿ��ǩ��#k", 7, 2),
        Array(iconEvent + " #rÿ������#k", 12, 2), //TODO
        Array(iconEvent + " #r��Ϸ����#k", 108, 2),
		Array(iconEvent + " #r����ǩ��#k", 502, 2),
        Array(icon + " #r�����г�#k", 99, 1),
        Array(icon + " #rѧϰ����#k", 22, 1),
        Array(icon + " #r��Ծ��ѯ#k", 23, 1),
		//Array(icon+ " ����ϴ��", 1, 1, 9000174 ),
        Array(icon + " ��Ϸ����", 10, 2), //TODO
        Array(icon + " ����̵�", 15, 2),
		//Array(icon + " ʱװ����", 1009, 2),
        Array(icon + " ��Ʒ����", 500, 2),
        Array(icon + " ��������", 501, 2)//TODO
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
            for (var i = 0; i < 3; i++) {
                ListFor(i);
            }
            cm.sendSimple(text)
        } else if (a == 1) {
            var mode_ = List[selection][1];
			var npcid = 9900003;
			if (List[selection][3]!=null)
			{
				npcid = List[selection][3];
			}
            cm.dispose();
            cm.openNpc(npcid, mode_);
        }//a
    }//mode
}//f


function ListFor(type) {
    switch (type) {
        case 1://�������
            text += "#e���������������� �Ҵ�ð�յ����� ����������������#n\r\n"
            break;
        case 2://��Ϸ��԰
            text += "#e���������������� �Ҵ�ð�յ�� ����������������#n\r\n"
            break;
    }
    var x = 0;
    for (var i = 0; i < List.length; i++) {
        if (List[i][2] == type) {
            if (x == 2) {
                text += "  #L" + i + "#" + List[i][0] + "#l\r\n";
                x = 0;
            } else {
                text += "  #L" + i + "#" + List[i][0] + "#l";
                x++;
            }
        }
    }
    text += "#e\r\n\r\n";
}