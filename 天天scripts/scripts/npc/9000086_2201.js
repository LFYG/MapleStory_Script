var status = 0; 
var fbwt = "";
var qdwt = "";
var qdwt2 = "";
var mms;
var mds;
var names;
var maples;
var wt = 1;
var kmob;
var neirong;
var fnpc;
var npc;
var maple;
var mapley;
var wmose;
var emose;
var nx;
var reward1item;
var itemsl;
var map;
var mob;
var nmob;
var item;
var nitem;
var hitem;
function start() { 
    status = -1; 
    action(1, 0, 0); 
} 
function action(mode, type, selection) { 
    if (mode == -1) { 
        cm.dispose(); 
    } else if (mode == 0) { 
        cm.dispose(); 
    } else { 
        if (mode == 1) 
            status++; 
        else 
            status--; 
        if (status == 0) { 

           qdwt = cm.ί����Ϣ(1, 2);
           mms =qdwt;


/*
          mds = "#r ���������T��#i4251202##r    ί������    #i4251202# #r��T�������� \r\n";
          names = cm.getVipname();
          maples = cm.getMaplewing("maple");

          wt = cm.ȡ�����ί��������Ϣ("renwu1");
          kmob  = cm.ȡ�����ί��������Ϣ("mob1");

          name = cm.ȡ��ί����������(1, wt);
          neirong = cm.ȡ��ί����������(2, wt);
          fnpc = cm.ȡ��ί��������Ϣ("fnpc", wt);
          npc = cm.ȡ��ί��������Ϣ("npc", wt);
          maple = cm.ȡ��ί��������Ϣ("reward1maple", wt);
          mapley = cm.ȡ��ί��������Ϣ("reward2mapley", wt);
          wmose = cm.ȡ��ί��������Ϣ("reward3wmose", wt);
          emose = cm.ȡ��ί��������Ϣ("reward4emose", wt);
          nx = cm.ȡ��ί��������Ϣ("reward5nx", wt);
          rewarditem = cm.ȡ��ί��������Ϣ("rewarditem", wt);
          itemsl = cm.ȡ��ί��������Ϣ("itemsl", wt);
          map  = cm.ȡ��ί��������Ϣ("map", wt);
          mob = cm.ȡ��ί��������Ϣ("mob", wt);
          nmob = cm.ȡ��ί��������Ϣ("nmob", wt);
          item = cm.ȡ��ί��������Ϣ("item", wt);
          nitem = cm.ȡ��ί��������Ϣ("nitem", wt);
          hitem = cm.getPlayer().getItemQuantity(nitem);

          mms = "#d���������ί������#r#e" + name +"#n#d����ϸ��Ϣ�ɣ��øϽ�����ţ�\r\n";
          mms += "#bί�������ţ�#e#r" + wt + "#n#b    ί���������ƣ�#r" + name + "\r\n";
          mms += "#b���񷢲�" + ((fnpc > 1000000) ? "���": "NPC") + "��#r" + ((fnpc > 1000000) ? cm.ȡ��ί���������(fnpc): "#p" + fnpc + "#") + "#b    ί�����񽻸�NPC��#r#p" + npc + "#\r\n";
          mms += "#b��������\r\n#d���׵�" + ((maple > 0) ? " #r#e" + maple + "#n": " ��") + "  #d��Ծ��" + ((mapley > 0) ? " #e#r" + mapley + "#n": " ��") + "  #d�����" + ((wmose > 0) ? " #e#r" + wmose + "#n": " ��") + "  #d�ڼ����" + ((emose > 0) ? " #e#r" + emose + "#n" : " ��") + "  #d���" + ((nx > 0) ? " #e#r" + nx + "#n" : " ��") + "  #d������Ʒ" + ((rewarditem > 0) ? " #i" + rewarditem + ":#   ���� #e#r" + itemsl + "#n": " ��") + "\r\n";
          mms += "#b��Ҫ��Ʒ��#r" + ((item > 1000000)? "#i" + item + ":#  #b������#r" + nitem + "  #b��ӵ��������#r" + hitem + " ": " ��")+ "\r\n";
          mms += "#bĿ����#r#o" + mob + ":#    #b������#r" + nmob + "    #b�Ѵ���������#r" + kmob + "\r\n";
          mms += "#b����ִ�еص㣺#r" + ((map > 0) ? "#m" + map + "#":"����ص�") + "    #b�ص��ţ�#r" + map + "\r\n  ";

*/

              cm.sendPlayerToNpc(mms);


           //  cm.sendOk(mms); 
             cm.dispose(); 

        } else if (status == 1) { 




            // qdwt = cm.ί����ϸ��Ϣ(selection);

          //   cm.sendSimple(qdwt); 


        cm.dispose(); 

        }

     }

  }