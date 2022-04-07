// Copyright (c) 2022, Greycube Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Library Membership', {
	refresh: function(frm){
		frm.toggle_display(['send_details'],frm.is_new() === undefined);


	},
	send_details: function(frm){
	// 	frappe.call(
	// 	{
	// 		method:"library_management.library_management.doctype.library_membership.library_membership.send_details_with_parameter",
	// 		args: {
	// 			"library_member": frm.doc.library_member,
	// 			"from_date": frm.doc.from_date,
	// 			"to_date": frm.doc.to_date,
	// 			"paid": frm.doc.paid				
	// 		},
	// 		callback: (r) => {
	// 			console.log(r)
	// 		}
	// 	}
	// )
	frappe.call(
		{
			method:"library_management.library_management.doctype.library_membership.library_membership.send_details_with_doc",
			args: {
				"library_membership_name": frm.doc.name,
			},
			callback: (r) => {
				console.log(r)
			}
		}
	)

	}
});


