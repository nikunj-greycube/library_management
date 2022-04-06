// Copyright (c) 2022, Greycube Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Membership', {
	send_details: function(frm){
		frappe.call({
			method:"library_management.doctype.library_membership.library_membership.send_details",
			args: {
				data: frm.doc.from_date
				

				
			}
		})
	}
});
