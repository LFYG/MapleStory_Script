var status = 0; 

var mds;

var md1;
var md2;
var md3;

var mdd = "#b";

var mss;

var chouj = 333;//超级抽奖需要的贡献点


var dsd = 0;

var name;
var maple;

var mrfl1 = 5062001;//混沌神奇魔方
var mrfl2 = 5060006;//水晶八音盒
var mrfl3 = 5062000;//神奇魔方
var mrfl4 = 5062002;//高级神奇魔方
var mrfl5 = 5220040;//转蛋卷
var maple1 = 20923;
var wmose1 = 20923;

var mrdj = 2014923;//每日给的点卷

var gmrfl1 = 33;
var gmrfl2 = 33;
var gmrfl3 = 33;
var gmrfl4 = 10;
var gmrfl5 = 33;


var mms = "";


var cishu = 0;

var shuru;

var xuanze;
var nowgxs;
var bxx;
var itemxx;
var gitem;
var ngxs;
var mins;
var maxs;
var shul;
var mdss;

var items = Array (
//精灵王头冠
1003359, 99999, 1, 1, "精灵王一族的象征！全面加强了 精灵的祝福 效果！获得10005的经验额外加成！练级无上神器！！！",
//永恒真爱
1112312, 9999, 1, 1, "使恋人的心灵相通的神奇纪念戒指，祝福相爱的人们永远幸福！冒险岛，永远有真爱！！穿戴后可以获得多种100%的经验奖励哦！刷级必备神器！！！",
//精灵吊坠
1122017, 1, 1, 1, "装备后经验值增加，时间越久，效果越强？额。。。不敢保证呐。。",
//神奇魔方
5062000, 40, 1, 100, "洗装备潜能必备哦！",
//高级神奇魔方
5062002, 2002, 1, 100, "洗SS潜能必备哦！",
//混沌魔方
5062001, 399, 1, 100, "洗出3条潜能必备哦！",
//惊人神奇魔方
5062005, 2222, 1, 100, "洗高级SS潜能必备哦！",
//星岩魔方
5750000, 100,  1, 100, "星岩重置必备哦！",
//白天使的祝福
1112663, 5555, 1, 1, "唯美白天使值得拥有！",
//天使的祝福
1112585, 55, 1, 1, "召唤带宝石的天使助阵！", 
//黑天使的祝福
1112586, 555, 1, 1, "10G强力且附带黑宝石的天使戒指值得拥有！",
//水晶八音盒
5060006, 555, 1, 100, "里面装有140套装、稀有点装和极品冒险心类，快换来试试运气吧！\r\n换后记得去换一把#i4170025:#，不然打不开的哦！",
//水晶天平
5060007, 333, 1, 100, "里面装有百种椅子、140套装、稀有点装和极品冒险心类，快换来试试运气吧！\r\n换后记得去换一个#i4170028:#，不然打不开的哦！",
//花生机
5060003, 222, 1, 100, "传闻它出高级货色哦！换来试试运气吧！\r\n换后记得去换一个#i4170023:#，不然打不开的哦！",
//英雄的钥匙
4170025, 1, 1, 100, "据说是开启#i5060006:#这货色的东东哦！",
//正义之锤
4170028, 1, 1, 100, "据说是开启#i5060007:#这货色的东东哦！",
//花生
4170023, 1, 1, 100, "据说是开启#i5060003:#这货色的东东哦！",
//秘密能手册
2430144, 5, 1, 100, "里面包含百种技能书，现在便宜大放送啦！据说出#i2290096:#和#i2290125:#哦！",
//秘密配方
2430370, 2, 1, 100, "专业技术的几百种配方在这里都可以发现其中的影子，不知道会变成那种，想知道就换来试试吧！",
//宠物自动加BUFF技能
5190010, 55, 1, 1, "宠物达人必备物品哦！有它宠物自动加BUFF无需担心重要BUFF消失！",
//炽热情景喇叭
5390000, 11, 1, 100, "刷屏必备道具！十分给力！",
//绚烂情景喇叭
5390001, 11, 1, 100, "刷屏必备道具！十分给力！",
//爱心情景喇叭
5390002, 11, 1, 100, "刷屏必备道具！十分给力！",
//小老虎情景喇叭
5390005, 11, 1, 100, "刷屏必备道具！十分给力！",
//咆哮老虎情景喇叭
5390006, 11, 1, 100, "刷屏必备道具！十分给力！",
//球进了!情景喇叭
5390007, 11, 1, 100, "刷屏必备道具！十分给力！",
//恐怖鬼娃的伤口90
1012170, 888, 1, 1, "加18G面具，传闻是伟大的黑魔法师留下的遗物，至今无法破解其中秘密！",
//恐怖鬼娃的伤口100
1012171, 998, 1, 1, "加26G面具，传闻是伟大的黑魔法师留下的遗物，至今无法破解其中秘密！",
//恐怖鬼娃的伤口130
1012172, 1288, 1, 1, "加33G面具，传闻是伟大的黑魔法师留下的遗物，至今无法破解其中秘密！",
//恐怖鬼娃的伤口150
1012173, 1555, 1, 1, "加33G面具，传闻是伟大的黑魔法师留下的遗物，至今无法破解其中秘密！",
//恐怖鬼娃的伤口180
1012174, 9999, 1, 1, "加50G面具，传闻是伟大的黑魔法师留下的遗物，至今无法破解其中秘密！",
//苏醒的初代冒险之心 战士
1122029, 1888, 1, 1, "加30G给力项链！高端的你前期必备！",
//苏醒的初代冒险之心 魔法师
1122030, 1888, 1, 1, "加30G给力项链！高端的你前期必备！",
//苏醒的初代冒险之心 弓箭手
1122031, 1888, 1, 1, "加30G给力项链！高端的你前期必备！",
//苏醒的初代冒险之心 飞侠
1122032, 1888, 1, 1, "加25G给力项链！高端的你前期必备！",
//苏醒的初代冒险之心 海盗
1122033, 1888, 1, 1, "加50G强力项链！高端的你后期必备！",
//苏醒的初代冒险之心 战士
1122034, 8888, 1, 1, "加50G强力项链！高端的你后期必备！",
//苏醒的初代冒险之心 魔法师
1122035, 8888, 1, 1, "加50G强力项链！高端的你后期必备！",
//苏醒的初代冒险之心 弓箭手
1122036, 8888, 1, 1, "加50G强力项链！高端的你后期必备！",
//苏醒的初代冒险之心 飞侠
1122037, 8888, 1, 1, "加50G强力项链！高端的你后期必备！",
//苏醒的初代冒险之心 海盗
1122038, 8888, 1, 1, "加45G强力项链！高端的你后期必备！",
//真·觉醒冒险之心 战士
1122122, 9999, 1, 1, "71级可潜能高级属性、加50G强力项链！高端的你永久必备！",
//真·觉醒冒险之心 魔法师
1122123, 9999, 1, 1, "71级可潜能高级属性、加50G强力项链！高端的你永久必备！",
//真·觉醒冒险之心 弓箭手
1122124, 9999, 1, 1, "71级可潜能高级属性、加50G强力项链！高端的你永久必备！",
//真·觉醒冒险之心 飞侠
1122125, 9999, 1, 1, "71级可潜能高级属性、加50G强力项链！高端的你永久必备！",
//真·觉醒冒险之心 海盗
1122126, 9999, 1, 1, "71级可潜能高级属性、加45G强力项链！高端的你永久必备！",
//真·觉醒冒险之心专用潜能力卷轴
2049405, 2222, 1, 100, "可为下列物品附加潜能哦！\r\n#i1122122:#、#i1122123:#、#i1122124:#、#i1122125:#、#i1122126:#", 
//普通巨人秘药
2003516, 55, 1, 100, "可以让你瞬间变大3倍哦！附带巨人特效攻击！娱乐必备！",
//高级巨人秘药
2003517, 111, 1, 100, "可以让你瞬间变大5倍哦！附带巨人特效攻击！高级娱乐必备！",
//时间之石
4021010, 333, 1, 100, "蕴含时间的力量的神秘宝石！重修必备哦！",
//太初精髓
4021022, 222, 1, 100, "含有世界起源时期的纯粹气息的神秘石头！重修必备哦！",
//皇家理发卷
5150040, 98, 1, 100, "皇家理发卷，能随机更换不错的发型哦！",
//顶级皇家理发
5150064, 998, 1, 100, "顶级理发卷！能固定更换发型，现在仅要998！爱好发型的你必备多几张哦！",
//皇家整容
5152053, 88, 1, 100, "能整形出美好的脸型哦！",
//传说美容卷
5152064, 888, 1, 100, "固定更换脸型，喜欢美容的你必备哦！",
//斗神证物
4310015, 111, 1, 100, "战争之神送给勇敢者的证物。可以感觉到未知的力量!打造高级装备必备哦！",
//梦碎片
4020013, 22, 1, 100, "充满了梦的碎片!好像是黑魔法师做梦留下的？未解之谜呐.....",
//纯洁灵魂的火花
4021011, 22, 1, 100, "锻造重生装备时的必要材料？未解之谜呐....需要的多换几个哦！.",
//纯洁灵魂的火花
4021012, 22, 1, 100, "锻造永恒装备时的必要材料？未解之谜呐....需要的多换几个哦！.",
//冒险岛勇士30
2290125, 555, 1, 100, "传说能有50%把几率冒险岛勇士提升到30哦！绝版货色呐！心动么？赶快行动吧！它能弥补你技能没有全满的遗憾哦！！");







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


             mds = "#r ┈┈┈━═☆#i4251202##r    精彩活动    #i4251202# #r☆═━┈┈┈ \r\n";

             name = cm.getVipname();
             maple = cm.getMaplewing("maple");

             mss = mds + name + "欢迎您进入 精彩活动 ！\r\n#b目前您拥有的贡献点为：#e#r" + maple + "#n#d\r\n这儿拥有无数精彩的活动哦！！！\r\n#b现在请选择您需要的活动：#r\r\n#L101401#为9月23号晚的失误致以最高的谢意！！！#l  \r\n\r\n\r\n其他功能敬请期待！";


               cm.sendSimple(mss); 


        } else if (status == 1) { 

           jobs = selection;

        switch (selection) {

        case 101401:

              dsd = 888;

            md2 = mds + "#b在这儿再次感谢大家对MapleWing的支持！为了弥补9月23号晚的失误，我们MapleWing管理员准备下列礼物给大家：\r\n";

            mms = "\r\n#r贡献点：#e " + maple1 + " #n   万级金币：#e " + wmose1 +"#n\r\n#i" + mrfl1 + ":# #kx#r " + gmrfl1 + "  #i" + mrfl2 + ":# #kx#r " + gmrfl2 + " #i" + mrfl3 + ":# #kx#r " + gmrfl3 + " #i" + mrfl4 + ":# #kx#r " + gmrfl4 + "  #i" + mrfl5 + ":# #kx#r " + gmrfl5 + "  #r#e" + mrdj + " #n#d抵用卷\r\n ";


/*
                    for (var i = 0; i <= items.length; i++)
                    if ((i % 5 == 0) && (items[i + 1] >= 0)) {
                        mdd += "#d#L" + items[i] + "##i" + items[i] + ":##d#e = #n#r" + items[i + 1] + "#n#b点#l";
                         cishu++;
                    if (cishu%3 == 0) {
                        mdd += "\r\n";
                    }

                    }
*/

                  cm.sendOk(md2 + mms + "\r\n本次活动已经结束了,在此再次 为9月23号晚的失误致以最高的谢意！！");

            //    cm.sendYesNo(md2 + mms);

            cm.dispose();

            break;

        case 100802:

          //  cm.dispose();


            dsd = 200; 


                    for (var i = 0; i <= items.length; i++)
                    if ((i % 5 == 0) && (items[i + 1] >= 0)) {
                        mdd += "#i" + items[i] + ":# ";
                         cishu++;
                    if (cishu%7 == 0) {
                        mdd += "\r\n";
                    }

                    }


            cm.sendYesNo(mds + "#d欢迎您进入超级抽奖！\r\n您只需要花费#e#r" + chouj +"#n贡献点#d将有机会获得下列物品：\r\n" + mdd + "\r\n您需要进行超级抽奖么？");

            break;

        case 100899:
            cm.dispose();
        //    cm.openNpc(9000086, 5);
            break;


        case 100888:

            dsd = 888; 

            mms = "\r\n#b中秋假期礼物：\r\n#r贡献点：#e " + maple1 + " #n   万级金币：#e " + wmose1 +"#n\r\n#i" + mrfl1 + ":# #kx#r " + gmrfl1 - 10 + "  #i" + mrfl2 + ":# #kx#r " + gmrfl2 - 10 + " #i" + mrfl3 + ":# #kx#r " + gmrfl3 - 5 + " #i" + mrfl4 + ":# #kx#r " + gmrfl4 - 10 + "  #i" + mrfl5 + ":# #kx#r " + gmrfl5 - 10 + "  #r#e" + mrdj - 1000 + " #n#d抵用卷\r\n ";



               cm.sendOk(mds + mms + "\r\n中秋假期已经过去了哦！以上奖励只是为了怀念呐！\r\n没有领到的也不要灰心！敬请期待 国庆假期大礼哦！（绝对够大哦！！！）");

         //    cm.sendYesNo(mds + mms + "\r\n#b你现在要领取么？");

          //  cm.addMaplewing("maple", maple1);
         //   cm.addMaplewing("wmose", wmose1);


            cm.dispose();

        //    cm.openNpc(9000086, 5);
            break;



        case 100887:

            dsd = 888; 

            mms = "\r\n#b迎新人礼物：\r\n#r贡献点：#e " + maple1 + " #n   万级金币：#e " + wmose1 +"#n\r\n#i" + mrfl1 + ":# #kx#r " + gmrfl1 + "  #i" + mrfl2 + ":# #kx#r " + gmrfl2 + " #i" + mrfl3 + ":# #kx#r " + gmrfl3 + " #i" + mrfl4 + ":# #kx#r " + gmrfl4 + "  #i" + mrfl5 + ":# #kx#r " + gmrfl5 + "  #r#e" + mrdj + " #n#d抵用卷\r\n ";



             cm.sendYesNo(mds + mms + "\r\n#b你现在要领取么？");

          //  cm.addMaplewing("maple", maple1);
         //   cm.addMaplewing("wmose", wmose1);


          //  cm.dispose();

        //    cm.openNpc(9000086, 5);
            break;



            } // switch 



        } else if (status == 2) { 

             xuanze = selection;


             nowgxs = cm.getMaplewing("maple");

             bxx = "\r\n\r\n目前您的贡献点余额为：#e#r" + cm.getMaplewing("maple") + "#n\r\n";




             if (dsd == 100) {

                dsd = 1001;

                    for (var ii = 0; ii <= items.length; ii++)
                    if ((ii % 5 == 0) && (items[ii + 1] >= 0) && (items[ii] == xuanze)) {

                     itemxx = items[ii + 4];
                     gitem = items[ii];
                     ngxs = items[ii + 1];

                     mins = items[ii + 2];
                     maxs = items[ii + 3];

                    }


                  shul = (nowgxs - nowgxs%ngxs)/ngxs;

                mdss = mds + "\r\n#d您目前选择兑换的物品为：\r\n#i" + gitem + ":##b#t" + gitem +":#  #d单价：#e#r" + ngxs + " #n#d贡献点\r\n#r物品简介：" + itemxx + bxx + "以您的贡献点余额还能兑换#i" + gitem + ":##b#t" + gitem +":# #e#r" + shul + " #n 件\r\n#k请输入您要兑换的数量：\r\n(注意：装备物品类只能兑换数量为1件！)";

            if ((gitem >= 5060000) && (gitem <= 5399100) || (gitem >= 4000000) && (gitem <= 4999900) || (gitem >= 2000000) && (gitem <= 2999900)) {
               if (shul < maxs) {
               maxs = shul;
              }

            }

                cm.sendGetNumber(mdss, 1, mins, maxs);




            } else if (dsd == 200) {

               dsd = 2001;

               if ((cm.getMaplewing("maple") >= chouj)&&(cm.getSpace(1) >= 1)&&(cm.getSpace(2) >= 1)&&(cm.getSpace(3) >= 1)&&(cm.getSpace(4) >= 1)&&(cm.getSpace(5) >= 1)) {
  
               cm.addMaplewing("maple", -chouj);

              var kitms =  cm.MaplwingSJTP(" 超级抽奖 ");

                mdss = mds + "\r\n#d抽奖成功！赶快看看聊天屏幕吧！\r\n您获得了以下物品：\r\n\r\n#i" + kitms + ":##b#t" + kitms +":#\r\n目前您的贡献点余额为：#e#r" + cm.getMaplewing("maple") + "#n\r\n#k\r\n#L0#返回贡献专区#l    #L1#结束对话#l ";

               } else {

                mdss = mds + "\r\n#d抽奖失败！\r\n您的贡献点不足#e#r" + chouj + "#n#d！\r\n请在各个背包栏留出一个空位以上！\r\n目前您的贡献点余额为：#e#r" + cm.getMaplewing("maple") + "#n\r\n#k\r\n#L0#返回贡献专区#l    #L1#结束对话#l ";

               }


              cm.sendSimple(mdss);


            } else if (dsd == 888) {



            if (cm.getPlayerStat("LVL") < 10) {
                cm.sendOk(mds + "#k\r\n\r\n10级以下的不能参加活动。");
            } else if (cm.getSpace(5) < 5) {
                cm.sendOk(mds + "#k\r\n\r\n 迎新人礼物 领取失败，您的 特殊栏 空间不足。");

            } else {
                if (cm.getBossLog("最高的谢意") == 0) {

                    cm.addMaplewing("maple", maple1);
                    cm.addMaplewing("wmose", wmose1);

                    cm.gainItem(mrfl1, gmrfl1);//神奇魔方x3
		    cm.gainItem(mrfl2, gmrfl2);//管理员的祝福x3
                    cm.gainItemPeriod(mrfl3,gmrfl3,1);//高质地喇叭x10 
                    cm.gainItemPeriod(mrfl4,gmrfl4,1);//雇佣商人x1
                    cm.gainItemPeriod(mrfl5,gmrfl5,1);//转蛋卷x10
                    cm.gainNX(2, mrdj);//抵用卷 1000
                    cm.setBossLog("最高的谢意");


                    cm.sendOk(mds + "#g恭喜您成功领取 MapleWing准备的#e#r 为9月23号晚的失误致以最高的谢意#n#k ！" + mms);
                } else {
                    cm.sendOk(mds + " #k\r\n\r\n对不起， #e#r为9月23号晚的失误致以最高的谢意#n#k 只能领取一次。");
                }
            }
            cm.dispose();




        }//dsd




        } else if (status == 3) { 

              if (dsd == 1001) {
              shuru = selection;

              maple = cm.getMaplewing("maple");

              md3 = mds + "\r\n#rMapleWing贡献专区订单：\r\n#i" + gitem + ":##b#t" + gitem +":#  #d单价：#e#r" + ngxs + " #n#d贡献点   数量：#e#r" + shuru + " #n #d件 \r\n总计：#e#r" + (ngxs * shuru) + "  #n贡献点#n\r\n#b目前您的贡献余额为：#e#r" + cm.getMaplewing("maple") + "#n \r\n#b兑换后您的贡献余额为：#e#r" + (maple - ngxs * shuru) + "#n\r\n\r\n#b您确定要兑换上述数量的物品？";

             cm.sendYesNo(md3);


            } else if (dsd == 2001) {

               if (selection == 0) {
                 cm.dispose();
                 cm.openNpc(9000086, 1008);

                } else {

                 cm.dispose();
                }

            }


        } else if (status == 4) { 

               dsd = 4000;


            if ((maple >= (ngxs * shuru))&&(cm.getSpace(1) >= 1)&&(cm.getSpace(2) >= 1)&&(cm.getSpace(3) >= 1)&&(cm.getSpace(4) >= 1)&&(cm.getSpace(5) >= 1)) {


                cm.addMaplewing("maple", -(ngxs * shuru));
                cm.gainItem(gitem, shuru);
                
                cm.sendSimple(mds + "\r\n#d兑换成功！您的贡献余额为：#e#r" + cm.getMaplewing("maple") + "#n \r\n\r\n#i" + gitem + ":##b#t" + gitem +":# #e#r" + shuru + " #n #d件已经放入您的背包！#r\r\n请注意查看！谢谢惠顾！！#k\r\n#L0#返回贡献专区#l    #L1#结束对话#l ");
                cm.worldMessage(-11,  "恭喜 " + name + " 从贡献专区成功兑换到稀有物品，大家一起恭喜他(她)吧！！")

           } else {

            cm.sendSimple(mds + "\r\n#d兑换失败！！您的贡献余额不足！！\r\n请在各个背包栏留出一个空位以上！\r\n无法兑换 #i" + gitem + ":##b#t" + gitem +":# #e#r" + shuru + " #n #d件！#r\r\n\r\n#b目前您的贡献余额为：#e#r" + cm.getMaplewing("maple") + "#n \r\n#k\r\n#L0#返回贡献专区#l    #L1#结束对话#l ");


           }




        } else if (status == 5) { 


            if (dsd == 4000) {

               if (selection == 0) {
                 cm.dispose();
                 cm.openNpc(9000086, 1008);

                } else {

                 cm.dispose();
                }



            }




        } status == 5








    } 
}  
