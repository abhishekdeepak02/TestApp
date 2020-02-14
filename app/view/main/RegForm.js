Ext.define('Myapp.view.main.RegisterForm', {
    extend: 'Ext.form.Panel',
    xtype: 'form-register',
    
    frame: true,
    title: 'Register',
    bodyPadding: 10,
    scrollable: true,
    width: 155,

    fieldDefaults: {
        labelAlign: "right",
        labelWidth: 115,
        msgTarget: 'side'
    },

    items: [{
        xtype: 'fieldset',
        title: 'User Info',
        width: 355,
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },
        reference:'formData',

        items: [
            { allowBlank: false, fieldLabel: 'User ID', name: 'user', emptyText: 'user id' },
            { allowBlank: false, fieldLabel: 'Password', name: 'pass', emptyText: 'password', inputType: 'password' },
            { allowBlank: false, fieldLabel: 'Verify', name: 'pass', emptyText: 'password', inputType: 'password' }
        ]
    }, {
        xtype: 'fieldset',
        title: 'Contact Information',
        width: 355,
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'
        },

        items: [{
            fieldLabel: 'First Name',
            emptyText: 'First Name',
            name: 'first'
        }, {
            fieldLabel: 'Last Name',
            emptyText: 'Last Name',
            name: 'last'
        }, {
            fieldLabel: 'Company',
            name: 'company',
            
        }, {
            fieldLabel: 'Email',
            name: 'email',
            vtype: 'email'
        }, {
            xtype: 'combobox',
            fieldLabel: 'State',
            name: 'state',
            // store: {
            //     type: 'States'
            // },
            valueField: 'abbr',
            displayField: 'state',
            typeAhead: true,
            queryMode: 'local',
            emptyText: 'Select a state...'
        }, {
            xtype: 'datefield',
            fieldLabel: 'Date of Birth',
            name: 'dob',
            allowBlank: false,
            maxValue: new Date()
        }]
    }],

    buttons: [{
       
        text: 'Register',
        // disabled: false,
        // formBind: true,
        handler: 'onSubmitForm'
       
    }, {
        text: 'Reset',
        handler: function() {
            this.up('form').getForm().reset();
        }
    }],
    // contact: [{
    //     xtype: 'form-contact',
    //     width: 400,
    //     height: 250,
    // }]
});