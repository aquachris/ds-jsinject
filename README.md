Design Studio JS injector plugin
================================

A minimal addon to SAP BO Design Studio 1.2 that lets you 
* add a JS source file to be executed after page load
* add multiple lines of JS code to be executed after page load

If the first option is used, the JS source file should be put in the current dashboard's repository directory (where the content.biapp file is).

The plugin is supposed to show an appropriately fancy placeholder element in design mode only. 
If the placeholder just shows as a plain black "JS", press F5 (in Design Studio) to refresh the page. This seems to be an issue of Design Studio not loading the custom component CSS immediately.   

Note that this is a development experiment. Please use with care.

Thanks to Mike Howles for initiating the code exchange. 
Check out his article [here](http://scn.sap.com/community/businessobjects-design-studio/blog/2013/12/17/ds-12-sdk--rapid-prototyping-addon-htmljs-templating) and his plugin over at [his github repo](https://github.com/entmike/com.ipaper.sample.htmltemplate).
