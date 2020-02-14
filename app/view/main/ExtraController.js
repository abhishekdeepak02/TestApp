Ext.define('MyApp.view.main.ExtraController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.extra',

    init: function() {
        console.warn('app')
        this.control({
            '#callExtraController': {
                click: 'callOnClick'
            },
            '#newExtraController': {
                click: 'callNewAlert'
            }
        })
    },

    callOnClick: () => {
        alert('Controller call successfull!')
    },
    callNewAlert: () => {
        console.log('Hello New Controller');
        
    }
})