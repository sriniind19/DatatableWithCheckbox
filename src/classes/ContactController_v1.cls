public with sharing class ContactController_v1 {
    @AuraEnabled
    public static Map<String,Object> getContacts() {
    	Map<String,Object> contrlResponse = new Map<String,Object>{
    		'contacts' => null, 'fields' => null
    	};
        List<Contact> contacts =
            [SELECT Id, Name, MailingStreet, Phone, Email, Level__c FROM Contact];
        contrlResponse.put('contacts',contacts);
        
        //Preparing fields
        List<FieldInfo> fldsInfo = new List<FieldInfo>{
        	new FieldInfo('Contact Name','Name','text'),
        	new FieldInfo('Phone','Phone','phone'),
        	new FieldInfo('Email','Email','email')
        };
        contrlResponse.put('fields',fldsInfo);
        return contrlResponse;
    }
}