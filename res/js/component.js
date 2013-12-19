sap.designstudio.sdk.Component.subclass("de.abracon.jscript.JSInjector", function() {

	// class constants
	var CSS_CLASS_DIV = 'abra-jsinjector-ct';

	// local variables as proxies for component properties that can 
	// be set in the design studio frontend
	var l_scriptURL = '';
	var l_customScript = '';
	
	this.init = function() {
		var $this = this.$();
		$this.addClass(CSS_CLASS_DIV);
	};

	this.afterUpdate = function() {
		var $this = this.$();
		// clean up
		$this.empty();
		$this.html('JS');
		// insert script from scriptURL
		if(l_scriptURL && l_scriptURL.length > 0) {
			$this.append('<script src="'+l_scriptURL+'"></script>');
		}
		// insert custom js code
		if(l_customScript && l_customScript.length > 0) {
			$this.append('<script type="text/javascript">'+l_customScript+'</script>');
		}
		
		// This is a little trick that I found by sifting through tons of includes:
		// What I want to do here is show a placeholder object for the JS injector component 
		// while the dashboard designer is creating, but hide the component when the 
		// dashboard is displayed in a browser.
		// The js object sap.zen.designmode exists only in design mode. 
		if(sap && sap.zen && sap.zen.designmode) {
			//console.log("in design mode");
		} else {
			//console.log("not in design mode");
			$this.css('display', 'none');
		}
	};

	// Setters / Getters for component properties
	
	this.scriptURL = function(value) {
		if(value === undefined) {
			return l_scriptURL;
		} else {
			l_scriptURL = value;
			return this;
		}
	};
	
	this.customScript = function(value) {
		if(value === undefined) {
			return l_customScript;
		} else {
			l_customScript = value;
			return this;
		}
	};
});
