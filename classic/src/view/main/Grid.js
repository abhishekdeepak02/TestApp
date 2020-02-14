Ext.define('Myapp.view.main.Grid', {
    extend: ['Ext.grid.Panel'],
    xtype: 'grid-demo',
   
    
    store: [
        {name: 'Steve', city: 'Banglore', state: 'KA', country: 'India'},
        {name: 'Richa', city: 'New Delhi', state: 'Delhi', country: 'India'},
        {name: 'David', city: 'Mumbai', state: 'MH', country: 'India'},
        {name: 'John', city: 'Punr', state: 'MH', country: 'India'},
    ],
    columns: [
        {text: 'Name', dataIndex: 'name', width: 100},
        {text: 'City', dataIndex: 'city',width: 220},
        {text: 'State', dataIndex: 'state', width: 120},
        {text: 'Country', dataIndex: 'country', width: 100}
    ],
    height: 300,
    width: 400
})