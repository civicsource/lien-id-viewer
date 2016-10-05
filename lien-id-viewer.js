var ko = require("knockout");

ko.bindingHandlers.lienIdViewer = {
	init: function () {
		return { controlsDescendantBindings: true };
	},
	update: function (el, valueAccessor, allBindings) {
		var lien = ko.utils.unwrapObservable(valueAccessor());
		var addressTemplate = ko.unwrap(allBindings().addressTemplate);

		if (!lien) {
			el.innerHTML = "No lien provided";
		} else {
			if (!lien.address.isEmpty()) {
				if (addressTemplate) {
					ko.renderTemplate(addressTemplate, lien.address, null, el, "replaceChildren");
				} else {
					el.innerHTML = lien.address.formatted();
				}
			} else if (lien.filingLocationPlace()) {
				ko.bindingHandlers.placeViewer.update(el, lien.filingLocationPlace);
			} else {
				el.innerHTML = "No lien identifier";
			}
		}
	}
};