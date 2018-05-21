public with sharing class FieldInfo {
    @AuraEnabled public String label, fieldName, type;
    public FieldInfo(String label, String fieldName, String type) {
    	this.label = label;
    	this.fieldName = fieldName;
    	this.type = type;
    }
}