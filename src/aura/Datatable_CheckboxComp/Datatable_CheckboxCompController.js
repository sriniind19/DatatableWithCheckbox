({
   init: function (cmp, event, helper) {
        /*cmp.set('v.mycolumns', [
                {label: 'Contact Name', fieldName: 'Name', type: 'text'},
                {label: 'Phone', fieldName: 'Phone', type: 'phone'},
                {label: 'Email', fieldName: 'Email', type: 'email'}
            ]);*/
        helper.getData(cmp);
    },
    getSelectedName: function (cmp, event) {
        var selectedRows = event.getParam('selectedRows');
        // Display that fieldName of the selected rows
        for (var i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].Name);
        }
    }
})