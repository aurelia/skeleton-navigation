var welcome_po_1 = require('./welcome.po');
var skeleton_po_1 = require('./skeleton.po');
describe('aurelia skeleton app', function () {
    var po_welcome;
    var po_skeleton;
    beforeEach(function () {
        po_skeleton = new skeleton_po_1.PageObject_Skeleton();
        po_welcome = new welcome_po_1.PageObject_Welcome();
        browser.loadAndWaitForAureliaPage("http://localhost:9000");
    });
    it('should load the page and display the initial page title', function () {
        expect(po_skeleton.getCurrentPageTitle()).toBe('Welcome | Aurelia');
    });
    it('should display greeting', function () {
        expect(po_welcome.getGreeting()).toBe('Welcome to the Aurelia Navigation App!');
    });
    it('should automatically write down the fullname', function () {
        po_welcome.setFirstname('Rob');
        po_welcome.setLastname('Eisenberg');
        browser.sleep(200);
        expect(po_welcome.getFullname()).toBe('ROB EISENBERG');
    });
    it('should show alert message when clicking submit button', function () {
        expect(po_welcome.openAlertDialog()).toBe(true);
    });
    it('should navigate to users page', function () {
        po_skeleton.navigateTo('#/users');
        expect(po_skeleton.getCurrentPageTitle()).toBe('Github Users | Aurelia');
    });
});
