/* 
 * 2430426 - ����˹�Ĳ�Ȯ7��ʹ��ȯ
 */
var period = 7;
var mountSkillId = 80001118;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period,true);
    im.dispose();
}