/* 
 * [2430430] - []����ȯ
 */
var period = 7;
var mountSkillId = 80001004;

function start() {
    im.giveMountSkill(im.getItem(), mountSkillId, period);
    im.dispose();
}