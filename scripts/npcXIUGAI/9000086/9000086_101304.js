var status = 0; 

var fbwt = "";
var qdwt = "";

var mms;
var mds;
var names;
var maples;


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


             fbwt = cm.ȡ�ÿ���ȡ������ί������();


             cm.sendSimple(fbwt); 


        } else if (status == 1) { 

             qdwt = cm.��ȡϵͳί��������(selection);

             cm.sendOk(qdwt); 


        cm.dispose(); 

        } else if (status == 2) { 

              if (selection == 9998) {
              cm.dispose(); 
              cm.openNpc(9000086, 101301);
              } else if (selection == 9999) {
              cm.dispose(); 

              } else {

              qdwt = cm.��ȡί������(selection);

              cm.sendSimple(qdwt);
          //    cm.dispose(); 

             }


        } else if (status == 3) { 

              if (selection == 9998) {
              cm.dispose(); 
              cm.openNpc(9000086, 101301);
              } else if (selection == 9999) {
              cm.dispose(); 

              } 


        }// (status == 2)

     }

  }