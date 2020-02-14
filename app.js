/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Myapp.Application',

    name: 'Myapp',

    requires: [
        // This will automatically load all classes in the Myapp namespace
        // so that application classes do not need to require each other.
        'Myapp.*'
    ],
    // Calling main view inside the viewport

    // launch: ()=>{
    //     viewport = Ext.getCmp('viewport'); // <<-- id of viewport
    //     // place where you want to display the main view
    //     target = viewport.down('#viewport-target');  // <<-- itemId of targeted location
    //     // creat the main view inside the target
    //     view = Ext.create('Myapp.view.main.Main');
    //     // Add the main view inside target
    //     target.add(view)
    // },

    // The name of the initial view to create.
    mainView: 'Myapp.view.main.Main',
    // autoCreateViewport: true
});
