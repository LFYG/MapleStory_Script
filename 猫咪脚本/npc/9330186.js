/* 
	��֮У԰���ִ���
*/
var questions = new Array("Ŀǰè����ͬ��ʢ��汾������",//�� true,
 "è������ַ�ǲ���http://www.baidu.com��",//�� false,
"è������̳��ַ�ǲ���http://360.972sf.com��",//�� true,
"è���еġ�BOSS��ͼ����������ѵ���",//�� false,
"è����Ϸ���κ�ְҵתְ������Ҫ��������ô��",//�� true,
"Ŀǰð�յ�ְҵ�ǲ���ֻ�����֣�",//�� false,
"è���У�����ϵͳ�Ѿ��޸��ˣ�",//�� true,
"��ʦְҵ��Ψһһ����ȫ���������ܵ�ְҵ����ô��",//�� false,
"�����ǲ���ֻ��10ֻ�֣�",//�� false,
"����ֹͣ���ǲ���1�����ڼ�40����������",//�� false,
"����BOSS�ǲ�����5ֻ��ָͷ��",//�� true,
"����ȼ�������250��ô��",//�� true,
"������ҪDƬ����������Ҫ������ô��",//�� false,
"ÿ����ÿ������Ĵ�������Ϊ1����ô��",//�� false,
"è����Ϸ�У�Ǳ�ܾ�����ڹ����ã�����",//�� true,
"è����Ϸ�У��峿֮¶�ǲ��ǲ�HP4000��",//�� �ǲ�MP false,
"è����Ϸ�У������ǲ�����ţ���ģ�",//�� false,
"è����Ϸ�е�����ȼ�������250��ô��",//�� true,
"è���е��������ȫ�����﹦�ܣ���ô��",//�� false,
"è�����̳��ڵĵ�װ���ܽ��ף���ô��",//�� true,
"è����Ϸ�У��������������п���תְ������",//�� false,
"è����Ϸ�У��ͷ�QQ���ǲ��ǣ�360361045��",//�� true,
"è��Ŀǰû�п���ÿ��ǩ�����������",//�� false,
"è����Ϸ�У��Ƿ񿪷���VIPϵͳ��",//�� false,
"ǿ����������ܱ�����",//�� true,
"���ֻ���������ܻ����",//�� false,
"160������װ���ܳ���",//�� false,
"150��װ���ܳ���",//�� false,
"è���е�Ů�˶���������",//�� false,
"Ŀǰè���Ƿ��Ѿ���ʽ���ţ�"//�� true,
);
var answers = new Array(false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false);
var rOutput = new Array("Ŀǰè����ͬ��ʢ��汾�ġ�",
    "è������ַ�ǣ�http://360.972sf.com",
    "è������ַ�ǣ�http://360.972sf.com",
	"è���еġ�BOSS��ͼ����Ҫð�ձҲ���ʹ�á�����ͨ�������á�",
	"è���κ�ְҵ���ɽ��п���תְ������Ҫ�����������",
	"Ŀǰð�յ���ְҵ��ֻ���֡�",
	"è���Ѿ�ȫ���޸��˳���ϵͳ��",
	"��ʦ����Ψһһ��ֻ��ʹ��ȫ��������ְҵ��",
	"����ֻ�а�ֻ�֡�",
	"����ֹͣ��һ�����ڿ�������60����������",
	"����BOSSֻ�������ָͷ",
	"è���У�����ȼ�������250����",
	"��ս������Ҫʹ�û�����ۣ���ս������ҪDƬ�ſ��ԡ�",
	"��ս��ͨ����ÿ������Ϊ��Ρ�",
	"è���У�Ǳ�ܾ��ǿ��Դӹ����л�õġ�",
	"�峿֮¶ֻ�ܲ���MP4000�������ܲ���HP��",
	"��ţ�ǲ������ȵġ�",
	"����ȼ�����Ϊ250����",
	"��Ϸ�����ﲻ����ȫ�����﹦�ܡ�",
	"�̳��е���Ʒ�ǲ��ܽ��׵ġ�",
	"è����Ϸ�У�����������NPC���п���תְ��",
	"è����Ψһ�ͷ�QQ�ǣ�360361045",
	"è��Ŀǰ����������NPC�����Խ���ÿ��ǩ����",
	"è��Ŀǰ��û�п���VIPϵͳֻ����ơ�",
	"è���п����ڹ����л�ȡǿ�����ᡣ",
	"��ȯ����ֻ���������л�ã������Բμӻ���г��ݵ��л�á�",
	"��ɵ�ɣ�",
	"���㶼�𲻶ԣ�",
	"��һ�������������ò��ÿ���",
	"Ŀǰè���Ѿ���ʽ�����ˡ�"
	);
var asked = new Array();
var currentQuestion;
var junk = new Array;
var junkWeap = new Array;
var goodEqWeap = new Array;
var useable = new Array;
var Rare = new Array;
var Select;
var openEvent = 0;


function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
   if (a == 3 && mode == 1) {
        a = 2;
        selection = 0;
    } else if (mode == 1 || (mode == 0 && type == 1))
        a++;
    else {
        if (type == 12 && mode == 0)
            cm.sendOk("�б�������������������μӵĻ����Ը��ҶԻ���");
        cm.dispose();
        return;
    }
	if(cm.getPlayer().getParty() != null || cm.isLeader()){
	if (a == 0){//
				cm.sendNext("�μӿ��Դ��⣬#b���10������#k�Ϳ��Ի�ȡ������#b��Կ��Խ�����һ��#k��#r����˵Ļ��͵���������#k����������");
	}else if (a == 1){
				cm.sendSimple("ͬѧ��׼���������Ǿ������ǿ�ʼ�ɣ�#b\r\n#L0# ��ʼ�μӿ��Դ��⡣");
	}else if (a == 2){
		  if (asked.length == 10 ) {//�ش���ɲ���
                			cm.sendSimple("��ϲ�������������⡣�������ͷ�Բ����ҽ��䷢�������㡣#b\r\n\r\n1����ȡ����#v4001137#����ӡ�¡�\r\n2������Դ������ͬѧ��ͨ����һ�����ҡ�");
							cm.gainItem(4001137,1);
							cm.dispose();
            			} else {
               				currentQuestion = -1;
                			while (contains(currentQuestion) || currentQuestion == -1) {
                    		currentQuestion = Math.floor(Math.random() * questions.length);
                		}
                			asked.push(currentQuestion);
                			cm.sendSimple("�� "+asked.length+" ��\r\n\r\n"+questions[currentQuestion]+"#b\r\n#L0# �ǡ�\r\n#L1# ��");
            			}//ȫ���ش���ɣ��������ⲿ��
	}else if (a == 3){
						var answer = selection == 0 ? false : true;
       					    if (answers[currentQuestion] == answer) {
                            cm.sendNext("��ϲ�㣬�ش���ȷ��#r\r\n\r\n"+rOutput[currentQuestion]);
                            } else {
            				cm.sendOk("���ź����ش����#b\r\n\r\n"+rOutput[currentQuestion]+"\r\n�ش����֮������¿�ʼ�ٴ����ˡ�");
           				    cm.dispose();
        					}
		}//status
	} else {
		cm.sendOk("��ӳ������⣬���������ǵĴ���");
		cm.dispose();
	}
}


function contains(quest) {
    for (var i = 0; i < asked.length; i++) {
        if (asked[i] == quest)
            return true;
    }
    return false;
}
