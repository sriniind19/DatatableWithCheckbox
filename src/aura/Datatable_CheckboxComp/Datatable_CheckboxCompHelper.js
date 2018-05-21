({
    getData : function(cmp) {
        var action = cmp.get('c.getContacts');
        action.setCallback(this, $A.getCallback(function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
            	debugger;
            	var res = response.getReturnValue();
            	cmp.set('v.mycolumns',res.fields);
                cmp.set('v.mydata', res.contacts);
            } else if (state === "ERROR") {
                var errors = response.getError();
                console.error(errors);
            }
        }));
        $A.enqueueAction(action);
    }
})