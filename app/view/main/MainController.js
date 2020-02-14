/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('Myapp.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    onButtonClicked: () => {
        console.log('Button Clicked!!');
        
    },
    onSubmitForm: function(button, e){

        var formData = this.lookupReference('fieldset')
        console.log(formData.getValues());
        //  var formData = this.up('fieldset')
        //  console.log(formData.getValues())
    }
})