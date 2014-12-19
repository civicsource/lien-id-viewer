(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(["knockout", "jquery", "knockout-place-viewer"], factory);
	} else {
		// Browser globals
		factory(ko, $);
	}
}(this, function (ko, $) {
	ko.bindingHandlers.lienIdViewer = {
		init: function (el, valueAccessor, allBindings) {
			return { controlsDescendantBindings: true };
		},
		update: function (el, valueAccessor, allBindings) {
			var lien = ko.utils.unwrapObservable(valueAccessor());
			var addressTemplate = ko.unwrap(allBindings().addressTemplate);

			if (!lien) {
				el.innerHTML = "No lien provided";
			}

			else {
				if (!lien.address.isEmpty()) {
					if (addressTemplate) {
						ko.renderTemplate(addressTemplate, lien.address, null, el, "replaceChildren");
					}

					else {
						el.innerHTML = lien.address.formatted();
					}
				}

				else if (lien.filingLocationPlace()) {
					ko.bindingHandlers.placeViewer.update(el, lien.filingLocationPlace);
				}

				else {
					el.innerHTML = "No lien identifier";
				}
			}
		}
	};
}));