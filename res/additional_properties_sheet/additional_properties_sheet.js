sap.designstudio.sdk.PropertyPage.subclass("de.abracon.jscript.JSInjectorPropertyPage", function() {
	
	this.init = function() {
		var me = this;
		$("#form").submit(function() {
			me.firePropertiesChanged(["customScript"]);
			return false;
		});
	};

	this.customScript = function(value) {
		if (value === undefined) {
			return $("#customjscode").val();
		} else {
			$("#customjscode").val(value);
			return this;
		}
	};

});