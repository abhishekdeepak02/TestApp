Ext.define('MyApp.view.main.Extra', {
    extend: 'Ext.container.Container',
    xtype: 'extra-view',
    controller: 'extra',
    items: [
        {
        title: 'Extra view',
        html: 'Hello!! This is an extra view created for learning'
        },
        {
            xtype: 'button',
            name: 'click',
            text: 'Controller calling',
            itemId: 'callExtraController'
        }, {
            xtype: 'button',
            name: 'click',
            text: 'New Controller call',
            itemId: 'newExtraController'
        }
    ]
})